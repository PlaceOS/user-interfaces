import{n as m,t as l}from"./chunk-BwCtja5l.js";import{$ as Jt,An as ey,Ar as ro,B as ID,C as Dr,Cn as dd,E,En as eT,Er as rS,F as Gm,Fr as sa,G as Ir,Gt as Wr,I as Hh,Ir as sy,J as Jb,Kn as ie,Ln as ge$1,Mr as sH,Nt as Um,O as E_,On as ed,Pn as fy,Ut as WT,V as IT,X as Jl,Y as Jc,Yr as ve,Z as Jm,Zr as wT,Zt as Xl,_ as CD,_r as ob,a as $y,at as Ln$1,b as DD,bn as ct$1,cr as nH,d as Aw,dn as an,en as Z,et as Ki$1,fi as zm,fr as oH,ft as PS,gn as cH,gr as o_,h as C,hn as cD,ht as Qm,i as $s,ir as mT,kr as re,l as Am,ln as aa,lt as Ny,mi as zs,mt as Q,n as $m,nn as Zm,nt as Kt,o as A,or as mt$1,ot as Me,pn as bT,qr as vT,ri as y,rr as lb,st as N,ti as xo,ui as z$1,un as ad,ur as ny,v as CT,wn as ds,x as DT,z as Hv,zr as ty,zt as Vn$1}from"./chunk-Bc72HoXO.js";import{I as w$1,b as U,j as ne,k as m$1,p as Jt$1,w as Yn$1,x as We,y as Rt$1}from"./main-MPQHSR2G.js";import{c as fe,i as Re$1}from"./chunk-61yUsV-4.js";import{M as vn,O as nr$1,P as z$2,S as he$1,_ as _n,c as On$1,d as Se,f as T,g as _e,h as Yn$2,i as Fn$1,j as tr$1,t as Cn$1,w as jn$1,y as ct$2}from"./chunk-bugMhC_-.js";var et=class{_box;_destroyed=new re;_resizeSubject=new re;_resizeObserver;_elementObservables=new Map;constructor(e){this._box=e,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(t=>this._resizeSubject.next(t)))}observe(e){return this._elementObservables.has(e)||this._elementObservables.set(e,new N(t=>{let i=this._resizeSubject.subscribe(t);return this._resizeObserver?.observe(e,{box:this._box}),()=>{this._resizeObserver?.unobserve(e),i.unsubscribe(),this._elementObservables.delete(e)}}).pipe(Wr(t=>t.some(i=>i.target===e)),ID({bufferSize:1,refCount:!0}),Hv(this._destroyed))),this._elementObservables.get(e)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var Nn=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=E(ie);constructor(){}ngOnDestroy(){for(let[,t]of this._observers)t.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(t,i){let r=i?.box||`content-box`;return this._observers.has(r)||this._observers.set(r,new et(r)),this._observers.get(r).observe(t)}static ɵfac=function(i){return new(i||n)};static ɵprov=Kt({token:n,factory:n.ɵfac})}return n})();var hi=[`notch`];var pi=[`*`];var wn=[`iconPrefixContainer`];var Mn=[`textPrefixContainer`];var Cn=[`iconSuffixContainer`];var En=[`textSuffixContainer`];var gi=[`textField`];var bi=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]];var _i=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function vi(n,e){n&1&&Gm(0,`span`,21)}function yi(n,e){if(n&1&&($s(0,`label`,20),DT(1,1),Jb(2,vi,1,0,`span`,21),Xl()),n&2){let t=mT(2);$m(`floating`,t._shouldLabelFloat())(`monitorResize`,t._hasOutline())(`id`,t._labelId),Um(`for`,t._control.disableAutomaticLabeling?null:t._control.id),Aw(2),eT(!t.hideRequiredMarker&&t._control.required?2:-1)}}function xi(n,e){if(n&1&&Jb(0,yi,3,5,`label`,20),n&2)eT(mT()._hasFloatingLabel()?0:-1)}function Si(n,e){n&1&&Gm(0,`div`,7)}function Ni(n,e){}function wi(n,e){if(n&1&&Am(0,Ni,0,0,`ng-template`,13),n&2){mT(2);$m(`ngTemplateOutlet`,bT(1))}}function Mi(n,e){if(n&1&&($s(0,`div`,9),Jb(1,wi,1,1,null,13),Xl()),n&2){let t=mT();$m(`matFormFieldNotchedOutlineOpen`,t._shouldLabelFloat()),Aw(),eT(t._forceDisplayInfixLabel()?-1:1)}}function Ci(n,e){n&1&&($s(0,`div`,10,2),DT(2,2),Xl())}function Ei(n,e){n&1&&($s(0,`div`,11,3),DT(2,3),Xl())}function Fi(n,e){}function Ri(n,e){if(n&1&&Am(0,Fi,0,0,`ng-template`,13),n&2){mT();$m(`ngTemplateOutlet`,bT(1))}}function Ti(n,e){n&1&&($s(0,`div`,14,4),DT(2,4),Xl())}function Di(n,e){n&1&&($s(0,`div`,15,5),DT(2,5),Xl())}function Ai(n,e){n&1&&Gm(0,`div`,16)}function Ii(n,e){n&1&&($s(0,`div`,18),DT(1,6),Xl())}function ki(n,e){if(n&1&&($s(0,`mat-hint`,22),WT(1),Xl()),n&2){let t=mT(2);$m(`id`,t._hintLabelId),Aw(),fy(t.hintLabel)}}function Oi(n,e){if(n&1&&($s(0,`div`,19),Jb(1,ki,2,2,`mat-hint`,22),DT(2,7),Gm(3,`div`,23),DT(4,8),Xl()),n&2){let t=mT();Aw(),eT(t.hintLabel?1:-1)}}var tt=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵdir=aa({type:n,selectors:[[`mat-label`]]})}return n})();var kn=new C(`MatError`);var Pi=(()=>{class n{id=E(ne).getId(`mat-mdc-error-`);static ɵfac=function(i){return new(i||n)};static ɵdir=aa({type:n,selectors:[[`mat-error`],[``,`matError`,``]],hostAttrs:[1,`mat-mdc-form-field-error`,`mat-mdc-form-field-bottom-align`],hostVars:1,hostBindings:function(i,r){i&2&&Zm(`id`,r.id)},inputs:{id:`id`},features:[o_([{provide:kn,useExisting:n}])]})}return n})();var nt=(()=>{class n{align=`start`;id=E(ne).getId(`mat-mdc-hint-`);static ɵfac=function(i){return new(i||n)};static ɵdir=aa({type:n,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(i,r){i&2&&(Zm(`id`,r.id),Um(`align`,null),sy(`mat-mdc-form-field-hint-end`,r.align===`end`))},inputs:{align:`align`,id:`id`}})}return n})();var On=new C(`MatPrefix`);var Li=(()=>{class n{set _isTextSelector(t){this._isText=!0}_isText=!1;static ɵfac=function(i){return new(i||n)};static ɵdir=aa({type:n,selectors:[[``,`matPrefix`,``],[``,`matIconPrefix`,``],[``,`matTextPrefix`,``]],inputs:{_isTextSelector:[0,`matTextPrefix`,`_isTextSelector`]},features:[o_([{provide:On,useExisting:n}])]})}return n})();var Pn=new C(`MatSuffix`);var zi=(()=>{class n{set _isTextSelector(t){this._isText=!0}_isText=!1;static ɵfac=function(i){return new(i||n)};static ɵdir=aa({type:n,selectors:[[``,`matSuffix`,``],[``,`matIconSuffix`,``],[``,`matTextSuffix`,``]],inputs:{_isTextSelector:[0,`matTextSuffix`,`_isTextSelector`]},features:[o_([{provide:Pn,useExisting:n}])]})}return n})();var Ln=new C(`FloatingLabelParent`);var Fn=(()=>{class n{_elementRef=E(Vn$1);get floating(){return this._floating}set floating(t){this._floating=t,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(t){this._monitorResize=t,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=E(Nn);_ngZone=E(ie);_parent=E(Ln);_resizeSubscription=new Z;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Vi(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(i){return new(i||n)};static ɵdir=aa({type:n,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(i,r){i&2&&sy(`mdc-floating-label--float-above`,r.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return n})();function Vi(n){let e=n;if(e.offsetParent!==null)return e.scrollWidth;let t=e.cloneNode(!0);t.style.setProperty(`position`,`absolute`),t.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(t);let i=t.scrollWidth;return t.remove(),i}var Rn=`mdc-line-ripple--active`;var Ce=`mdc-line-ripple--deactivating`;var Tn=(()=>{class n{_elementRef=E(Vn$1);_cleanupTransitionEnd;constructor(){let t=E(ie),i=E(xo);t.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let t=this._elementRef.nativeElement.classList;t.remove(Ce),t.add(Rn)}deactivate(){this._elementRef.nativeElement.classList.add(Ce)}_handleTransitionEnd=t=>{let i=this._elementRef.nativeElement.classList,r=i.contains(Ce);t.propertyName===`opacity`&&r&&i.remove(Rn,Ce)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(i){return new(i||n)};static ɵdir=aa({type:n,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return n})();var Dn=(()=>{class n{_elementRef=E(Vn$1);_ngZone=E(ie);open=!1;_notch;ngAfterViewInit(){let t=this._elementRef.nativeElement,i=t.querySelector(`.mdc-floating-label`);i?(t.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(i.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration=``)}))):t.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(t){let i=this._notch.nativeElement;!this.open||!t?i.style.width=``:i.style.width=`calc(${t}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(t){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${t}px)`)}static ɵfac=function(i){return new(i||n)};static ɵcmp=ob({type:n,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(i,r){if(i&1&&ey(hi,5),i&2){let o;IT(o=wT())&&(r._notch=o.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(i,r){i&2&&sy(`mdc-notched-outline--notched`,r.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:pi,decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(i,r){i&1&&(vT(),zm(0,`div`,1),Jl(1,`div`,2,0),DT(3),ed(),zm(4,`div`,3))},encapsulation:2})}return n})();var it=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static ɵfac=function(i){return new(i||n)};static ɵdir=aa({type:n})}return n})();var rt=new C(`MatFormField`);var Bi=new C(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var An=`fill`;var Hi=`auto`;var In=`fixed`;var ji=`translateY(-50%)`;var zn=(()=>{class n{_elementRef=E(Vn$1);_changeDetectorRef=E($y);_platform=E(m$1);_idGenerator=E(ne);_ngZone=E(ie);_defaults=E(Bi,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=oH(`iconPrefixContainer`);_textPrefixContainerSignal=oH(`textPrefixContainer`);_iconSuffixContainerSignal=oH(`iconSuffixContainer`);_textSuffixContainerSignal=oH(`textSuffixContainer`);_prefixSuffixContainers=Jt(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(t=>t?.nativeElement).filter(t=>t!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=sH(tt);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(t){this._hideRequiredMarker=Re$1(t)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Hi}set floatLabel(t){t!==this._floatLabel&&(this._floatLabel=t,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(t){let i=t||this._defaults?.appearance||An;this._appearanceSignal.set(i)}_appearanceSignal=ct$1(An);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||In}set subscriptSizing(t){this._subscriptSizing=t||this._defaults?.subscriptSizing||In}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(t){this._hintLabel=t,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(t){this._explicitFormFieldControl=t}_destroyed=new re;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Jt$1();constructor(){let t=this._defaults,i=E(Rt$1);t&&(t.appearance&&(this.appearance=t.appearance),this._hideRequiredMarker=!!t?.hideRequiredMarker,t.color&&(this.color=t.color)),Jc(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Jt(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(t){let i=this._control,r=`mat-mdc-form-field-type-`;t&&this._elementRef.nativeElement.classList.remove(r+t.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(CD([void 0,void 0]),mt$1(()=>[i.errorState,i.userAriaDescribedBy]),DD(),Wr(([[o,a],[l,c]])=>o!==l||a!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(Hv(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(t=>!t._isText),this._hasTextPrefix=!!this._prefixChildren.find(t=>t._isText),this._hasIconSuffix=!!this._suffixChildren.find(t=>!t._isText),this._hasTextSuffix=!!this._suffixChildren.find(t=>t._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),cD(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let t=this._control.focused;t&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!t&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,t),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,t)}_syncOutlineLabelOffset(){cH({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let t of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(t,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:t=>this._writeOutlinedLabelStyles(t())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Jt(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(t){let i=this._control?this._control.ngControl:null;return i&&i[t]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let t=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&t.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let o=this._hintChildren?this._hintChildren.find(l=>l.align===`start`):null,a=this._hintChildren?this._hintChildren.find(l=>l.align===`end`):null;o?t.push(o.id):this._hintLabel&&t.push(this._hintLabelId),a&&t.push(a.id)}else this._errorChildren&&t.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||t;r=t.concat(i.filter(a=>a&&!o.includes(a)))}else r=t;this._control.setDescribedByIds(r),this._describedByIds=t}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let t=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=t?.getBoundingClientRect().width??0,l=i?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,f=o?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${ji} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${a+l}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,a+l+c+f]}_writeOutlinedLabelStyles(t){if(t!==null){let[i,r]=t;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let t=this._elementRef.nativeElement;if(t.getRootNode){let i=t.getRootNode();return i&&i!==t}return document.documentElement.contains(t)}static ɵfac=function(i){return new(i||n)};static ɵcmp=ob({type:n,selectors:[[`mat-form-field`]],contentQueries:function(i,r,o){if(i&1&&(ty(o,r._labelChild,tt,5),Jm(o,it,5)(o,On,5)(o,Pn,5)(o,kn,5)(o,nt,5)),i&2){CT();let a;IT(a=wT())&&(r._formFieldControl=a.first),IT(a=wT())&&(r._prefixChildren=a),IT(a=wT())&&(r._suffixChildren=a),IT(a=wT())&&(r._errorChildren=a),IT(a=wT())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(ny(r._iconPrefixContainerSignal,wn,5)(r._textPrefixContainerSignal,Mn,5)(r._iconSuffixContainerSignal,Cn,5)(r._textSuffixContainerSignal,En,5),ey(gi,5)(wn,5)(Mn,5)(Cn,5)(En,5)(Fn,5)(Dn,5)(Tn,5)),i&2){CT(4);let o;IT(o=wT())&&(r._textField=o.first),IT(o=wT())&&(r._iconPrefixContainer=o.first),IT(o=wT())&&(r._textPrefixContainer=o.first),IT(o=wT())&&(r._iconSuffixContainer=o.first),IT(o=wT())&&(r._textSuffixContainer=o.first),IT(o=wT())&&(r._floatingLabel=o.first),IT(o=wT())&&(r._notchedOutline=o.first),IT(o=wT())&&(r._lineRipple=o.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(i,r){i&2&&sy(`mat-mdc-form-field-label-always-float`,r._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,r._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,r._hasIconSuffix)(`mat-form-field-invalid`,r._control.errorState)(`mat-form-field-disabled`,r._control.disabled)(`mat-form-field-autofilled`,r._control.autofilled)(`mat-form-field-appearance-fill`,r.appearance==`fill`)(`mat-form-field-appearance-outline`,r.appearance==`outline`)(`mat-form-field-hide-placeholder`,r._hasFloatingLabel()&&!r._shouldLabelFloat())(`mat-primary`,r.color!==`accent`&&r.color!==`warn`)(`mat-accent`,r.color===`accent`)(`mat-warn`,r.color===`warn`)(`ng-untouched`,r._shouldForward(`untouched`))(`ng-touched`,r._shouldForward(`touched`))(`ng-pristine`,r._shouldForward(`pristine`))(`ng-dirty`,r._shouldForward(`dirty`))(`ng-valid`,r._shouldForward(`valid`))(`ng-invalid`,r._shouldForward(`invalid`))(`ng-pending`,r._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[o_([{provide:rt,useExisting:n},{provide:Ln,useExisting:n}])],ngContentSelectors:_i,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(i,r){if(i&1&&(vT(bi),Am(0,xi,1,1,`ng-template`,null,0,E_),$s(2,`div`,6,1),Qm(`click`,function(a){return r._control.onContainerClick(a)}),Jb(4,Si,1,0,`div`,7),$s(5,`div`,8),Jb(6,Mi,2,2,`div`,9),Jb(7,Ci,3,0,`div`,10),Jb(8,Ei,3,0,`div`,11),$s(9,`div`,12),Jb(10,Ri,1,1,null,13),DT(11),Xl(),Jb(12,Ti,3,0,`div`,14),Jb(13,Di,3,0,`div`,15),Xl(),Jb(14,Ai,1,0,`div`,16),Xl(),$s(15,`div`,17),Jb(16,Ii,2,0,`div`,18)(17,Oi,5,1,`div`,19),Xl()),i&2){let o;Aw(2),sy(`mdc-text-field--filled`,!r._hasOutline())(`mdc-text-field--outlined`,r._hasOutline())(`mdc-text-field--no-label`,!r._hasFloatingLabel())(`mdc-text-field--disabled`,r._control.disabled)(`mdc-text-field--invalid`,r._control.errorState),Aw(2),eT(!r._hasOutline()&&!r._control.disabled?4:-1),Aw(2),eT(r._hasOutline()?6:-1),Aw(),eT(r._hasIconPrefix?7:-1),Aw(),eT(r._hasTextPrefix?8:-1),Aw(2),eT(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),Aw(2),eT(r._hasTextSuffix?12:-1),Aw(),eT(r._hasIconSuffix?13:-1),Aw(),eT(r._hasOutline()?-1:14),Aw(),sy(`mat-mdc-form-field-subscript-dynamic-size`,r.subscriptSizing===`dynamic`);let a=r._getSubscriptMessageType();Aw(),eT((o=a)===`error`?16:o===`hint`?17:-1)}},dependencies:[Fn,Dn,PS,Tn,nt],styles:[`.mdc-text-field {
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
`],encapsulation:2})}return n})();var ot=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=sa({type:n});static ɵinj=ro({imports:[We,zn,Yn$1]})}return n})();var qi=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=ob({type:n,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2})}return n})();var Ki={passive:!0};var Vn=(()=>{class n{_platform=E(m$1);_ngZone=E(ie);_renderer=E(Ln$1).createRenderer(null,null);_styleLoader=E(w$1);_monitoredElements=new Map;monitor(t){if(!this._platform.isBrowser)return an;this._styleLoader.load(qi);let i=U(t),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new re,a=`cdk-text-field-autofilled`,l=f=>{f.animationName===`cdk-text-field-autofill-start`&&!i.classList.contains(a)?(i.classList.add(a),this._ngZone.run(()=>o.next({target:f.target,isAutofilled:!0}))):f.animationName===`cdk-text-field-autofill-end`&&i.classList.contains(a)&&(i.classList.remove(a),this._ngZone.run(()=>o.next({target:f.target,isAutofilled:!1})))},c=this._ngZone.runOutsideAngular(()=>(i.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(i,`animationstart`,l,Ki)));return this._monitoredElements.set(i,{subject:o,unlisten:c}),o}stopMonitoring(t){let i=U(t),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove(`cdk-text-field-autofill-monitored`),i.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((t,i)=>this.stopMonitoring(i))}static ɵfac=function(i){return new(i||n)};static ɵprov=Kt({token:n,factory:n.ɵfac})}return n})();var Bn=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=sa({type:n});static ɵinj=ro({})}return n})();var Un=Symbol(`FIELD_TREE`);var at=0;function Ui(){return at}function L(n,e){return(...t)=>{try{return at=e,n(...t)}finally{at=0}}}function Wi(n){return!n}function Hn(n){return n}function z(n){return Array.isArray(n)}function Fe(n){return(typeof n==`object`||typeof n==`function`)&&n!=null}var q=Symbol();var Pe=Symbol();var pe=class{predicates;fns=[];constructor(e){this.predicates=e}push(e){this.fns.push(jn(this.predicates,e))}mergeIn(e){let t=this.predicates?e.fns.map(i=>jn(this.predicates,i)):e.fns;this.fns.push(...t)}hasRules(){return this.fns.length>0}};var Re=class extends pe{get defaultValue(){return!1}compute(e){return this.fns.some(t=>{let i=t(e);return i&&i!==Pe})}};var X=class n extends pe{ignore;static ignoreNull(e){return new n(e,t=>t===null)}constructor(e,t){super(e),this.ignore=t}get defaultValue(){return[]}compute(e){return this.fns.reduce((t,i)=>{let r=i(e);return r===void 0||r===Pe?t:z(r)?[...t,...this.ignore?r.filter(o=>!this.ignore(o)):r]:this.ignore&&this.ignore(r)?t:[...t,r]},[])}};var st=class extends X{constructor(e){super(e,void 0)}};var lt=class extends pe{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(e,t){super(e),this.key=t}compute(e){if(this.fns.length===0)return this.key.reducer.getInitial();let t=this.key.reducer.getInitial();for(let i=0;i<this.fns.length;i++){let r=this.fns[i](e);r!==Pe&&(t=this.key.reducer.reduce(t,r))}return t}};function jn(n,e){return n.length===0?e:t=>{for(let i of n){let r=t.stateOf(i.path),o=ve(r.structure.pathKeys).length-i.depth;for(let a=0;a<o;a++)r=r.structure.parent;if(!i.fn(r.context))return Pe}return e(t)}}var J=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(e){this.predicates=e,this.hidden=new Re(e),this.disabledReasons=new st(e),this.readonly=new Re(e),this.syncErrors=X.ignoreNull(e),this.syncTreeErrors=X.ignoreNull(e),this.asyncErrors=X.ignoreNull(e)}hasAnyLogic(){return this.hidden.hasRules()||this.disabledReasons.hasRules()||this.readonly.hasRules()||this.syncErrors.hasRules()||this.syncTreeErrors.hasRules()||this.asyncErrors.hasRules()||this.metadata.size>0}hasMetadata(e){return this.metadata.has(e)}hasMetadataKeys(){return this.metadata.size>0}getMetadataKeys(){return this.metadata.keys()}getMetadata(e){return this.metadata.has(e)||this.metadata.set(e,new lt(this.predicates,e)),this.metadata.get(e)}mergeIn(e){this.hidden.mergeIn(e.hidden),this.disabledReasons.mergeIn(e.disabledReasons),this.readonly.mergeIn(e.readonly),this.syncErrors.mergeIn(e.syncErrors),this.syncTreeErrors.mergeIn(e.syncTreeErrors),this.asyncErrors.mergeIn(e.asyncErrors);for(let t of e.getMetadataKeys()){let i=e.metadata.get(t);this.getMetadata(t).mergeIn(i)}}};var Te=class{depth;constructor(e){this.depth=e}build(){return new De(this,[],0)}};var ee=class n extends Te{constructor(e){super(e)}current;all=[];addHiddenRule(e){this.getCurrent().addHiddenRule(e)}addDisabledReasonRule(e){this.getCurrent().addDisabledReasonRule(e)}addReadonlyRule(e){this.getCurrent().addReadonlyRule(e)}addSyncErrorRule(e){this.getCurrent().addSyncErrorRule(e)}addSyncTreeErrorRule(e){this.getCurrent().addSyncTreeErrorRule(e)}addAsyncErrorRule(e){this.getCurrent().addAsyncErrorRule(e)}addMetadataRule(e,t){this.getCurrent().addMetadataRule(e,t)}getChild(e){if(e===q){let t=this.getCurrent().children;t.size>(t.has(q)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(e)}hasLogic(e){return this===e?!0:this.all.some(({builder:t})=>t.hasLogic(e))}hasRules(){return this.all.length>0}anyChildHasLogic(){return this.all.some(({builder:e})=>e.anyChildHasLogic())}mergeIn(e,t){t?this.all.push({builder:e,predicate:{fn:L(t.fn,this.depth),path:t.path}}):this.all.push({builder:e}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new ge(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new n(0)}};var ge=class extends Te{logic=new J([]);children=new Map;constructor(e){super(e)}addHiddenRule(e){this.logic.hidden.push(L(e,this.depth))}addDisabledReasonRule(e){this.logic.disabledReasons.push(L(e,this.depth))}addReadonlyRule(e){this.logic.readonly.push(L(e,this.depth))}addSyncErrorRule(e){this.logic.syncErrors.push(L(e,this.depth))}addSyncTreeErrorRule(e){this.logic.syncTreeErrors.push(L(e,this.depth))}addAsyncErrorRule(e){this.logic.asyncErrors.push(L(e,this.depth))}addMetadataRule(e,t){this.logic.getMetadata(e).push(L(t,this.depth))}getChild(e){return this.children.has(e)||this.children.set(e,new ee(this.depth+1)),this.children.get(e)}hasLogic(e){return this===e}hasRules(){return this.logic.hasAnyLogic()||this.children.size>0}anyChildHasLogic(){for(let e of this.children.values())if(e.hasRules())return!0;return!1}};var De=class n{builder;predicates;depth;logic;constructor(e,t,i){this.builder=e,this.predicates=t,this.depth=i,this.logic=e?Gi(e,t,i):new J([])}getChild(e){let t=this.builder?Wn(this.builder,e):[];if(t.length===0)return new n(void 0,[],this.depth+1);if(t.length===1){let{builder:i,predicates:r}=t[0];return new n(i,[...this.predicates,...r.map(o=>ct(o,this.depth))],this.depth+1)}else return new dt(t.map(({builder:r,predicates:o})=>new n(r,[...this.predicates,...o.map(a=>ct(a,this.depth))],this.depth+1)))}hasLogic(e){return this.builder?this.builder.hasLogic(e):!1}hasRules(){return this.builder?this.builder.hasRules():!1}anyChildHasLogic(){return this.builder?this.builder.anyChildHasLogic():!1}};var dt=class n{all;logic;constructor(e){this.all=e,this.logic=new J([]);for(let t of e)this.logic.mergeIn(t.logic)}getChild(e){return new n(this.all.flatMap(t=>t.getChild(e)))}hasLogic(e){return this.all.some(t=>t.hasLogic(e))}hasRules(){return this.all.some(e=>e.hasRules())}anyChildHasLogic(){return this.all.some(e=>e.anyChildHasLogic())}};function Wn(n,e){if(n instanceof ee)return n.all.flatMap(({builder:t,predicate:i})=>{let r=Wn(t,e);return i?r.map(({builder:o,predicates:a})=>({builder:o,predicates:[...a,i]})):r});if(n instanceof ge)return[...e!==q&&n.children.has(q)?[{builder:n.getChild(q),predicates:[]}]:[],...n.children.has(e)?[{builder:n.getChild(e),predicates:[]}]:[]];throw new y(1909,!1)}function Gi(n,e,t){let i=new J(e);if(n instanceof ee){let r=n.all.map(({builder:o,predicate:a})=>new De(o,a?[...e,ct(a,t)]:e,t));for(let o of r)i.mergeIn(o.logic)}else if(n instanceof ge)i.mergeIn(n.logic);else throw new y(1909,!1);return i}function ct(n,e){return m(l({},n),{depth:e})}var Gn=Symbol(`PATH`);var k=class n{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,$i);logicBuilder;constructor(e,t,i,r){this.keys=e,this.parent=i,this.keyInParent=r,this.root=t??this,i||(this.logicBuilder=ee.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(e){return this.children.has(e)||this.children.set(e,new n([...this.keys,e],this.root,this,e)),this.children.get(e)}mergeIn(e,t){let i=e.compile();this.builder.mergeIn(i.builder,t)}static unwrapFieldPath(e){return e[Gn]}static newRoot(){return new n([],void 0,void 0,void 0)}};var $i={get(n,e){return e===Gn?n:n.getChild(e).fieldPathProxy}};var Ee;var he=new Map;var Ae=class n{schemaFn;constructor(e){this.schemaFn=e}compile(){if(he.has(this))return he.get(this);let e=k.newRoot();he.set(this,e);let t=Ee;try{Ee=e,this.schemaFn(e.fieldPathProxy)}finally{Ee=t}return e}static create(e){return e instanceof n?e:new n(e)}static rootCompile(e){try{return he.clear(),e===void 0?k.newRoot():e instanceof n?e.compile():new n(e).compile()}finally{he.clear()}}};function Zi(n){return n instanceof Ae||typeof n==`function`}function xt(n){if(Ee!==k.unwrapFieldPath(n).root)throw new y(1908,!1)}function St(n,e,t){return xt(n),k.unwrapFieldPath(n).builder.addMetadataRule(e,t),e}var te={list(){return{reduce:(n,e)=>e===void 0?n:[...n,e],getInitial:()=>[]}},min(){return{reduce:(n,e)=>n===void 0||e===void 0?n??e:e<n?e:n,getInitial:()=>{}}},max(){return{reduce:(n,e)=>n===void 0||e===void 0?n??e:e>n?e:n,getInitial:()=>{}}},or(){return{reduce:(n,e)=>n||e,getInitial:()=>!1}},and(){return{reduce:(n,e)=>n&&e,getInitial:()=>!0}},override:Qi};function Qi(n){return{reduce:(e,t)=>t,getInitial:()=>n?.()}}var Nt=Symbol(`IS_ASYNC_VALIDATION_RESOURCE`);var Ie=class{reducer;create;brand;[Nt];constructor(e,t){this.reducer=e,this.create=t}};function V(n){return new Ie(n??te.override())}function wt(){return V()}var Mt=V(te.or());var $n=wt();var Zn=wt();var Qn=V(te.max());var Yn=V(te.min());var Xn=V(te.list());function w(n,e){if(n===e)return!0;if(!n||!e||n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(!Object.is(n[t],e[t]))return!1;return!0}function Yi(n){return n.errors().length>0?`invalid`:n.pending()?`unknown`:`valid`}var ft=class{node;constructor(e){this.node=e}rawSyncTreeErrors=Jt(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]],{equal:w});syncErrors=Jt(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...Xi(this.node.submitState.submissionErrors())],{equal:w});syncValid=Jt(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(e,t)=>t&&e.validationState.syncValid(),Wi));syncTreeErrors=Jt(()=>this.rawSyncTreeErrors().filter(e=>e.fieldTree===this.node.fieldTree),{equal:w});rawAsyncErrors=Jt(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]],{equal:w});asyncErrors=Jt(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(e=>e===`pending`||e.fieldTree===this.node.fieldTree),{equal:w});parseErrors=Jt(()=>this.node.formFieldBindings().flatMap(e=>e.parseErrors()),{equal:w});errors=Jt(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(e=>e!==`pending`)],{equal:w});errorSummary=Jt(()=>{let e=this.node.structure.reduceChildren(this.errors(),(t,i)=>[...i,...t.errorSummary()]);return ve(()=>e.sort(Ji)),e},{equal:w});pending=Jt(()=>this.node.structure.reduceChildren(this.asyncErrors().includes(`pending`),(e,t)=>t||e.validationState.pending()));status=Jt(()=>{if(this.shouldSkipValidation())return`valid`;let e=Yi(this);return this.node.structure.reduceChildren(e,(t,i)=>i===`invalid`||t.validationState.status()===`invalid`?`invalid`:i===`unknown`||t.validationState.status()===`unknown`?`unknown`:`valid`,t=>t===`invalid`)});valid=Jt(()=>this.status()===`valid`);invalid=Jt(()=>this.status()===`invalid`);shouldSkipValidation=Jt(()=>this.node.hidden()||this.node.disabled()||this.node.readonly()||this.node.structure.isOrphaned())};function Xi(n){return n===void 0?[]:z(n)?n:[n]}function Jn(n,e){if(z(n))for(let t of n)t.fieldTree??=e;else n&&(n.fieldTree??=e);return n}function qn(n){return n.formField?n.formField.element:n.fieldTree().formFieldBindings().reduce((e,t)=>!e||!t.element?e??t.element:e.compareDocumentPosition(t.element)&Node.DOCUMENT_POSITION_PRECEDING?t.element:e,void 0)}function Ji(n,e){let t=qn(n),i=qn(e);return t===i?0:t===void 0||i===void 0?t===void 0?1:-1:t.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var ut=V();var mt=class{node;cache=new WeakMap;constructor(e){this.node=e,this.fieldTreeOf=this.fieldTreeOf.bind(this),this.stateOf=this.stateOf.bind(this)}resolve(e){if(!this.cache.has(e)){let t=Jt(()=>{let i=k.unwrapFieldPath(e),r=this.node,o=Ui();for(;o>0||!r.structure.logic.hasLogic(i.root.builder);)if(o--,r=r.structure.parent,r===void 0)throw new y(1900,!1);for(let a of i.keys)if(r=r.structure.getChild(a),r===void 0)throw new y(1901,!1);return r.fieldTree});this.cache.set(e,t)}return this.cache.get(e)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=Jt(()=>{let e=this.key();if(!z(ve(this.node.structure.parent.value)))throw new y(1906,!1);return Number(e)});fieldTreeOf(e){return this.resolve(e)}stateOf(e){return this.resolve(e)()}valueOf=e=>{let t=this.resolve(e)().value();if(t instanceof he$1)throw new y(1907,!1);return t}};var ht=class{node;metadata=new Map;constructor(e){this.node=e}runMetadataCreateLifecycle(){if(!this.node.logicNode.logic.hasMetadataKeys())return;let e=Ny();e&&dd(!1);try{ve(()=>Ki$1(this.node.structure.injector,()=>{for(let t of this.node.logicNode.logic.getMetadataKeys())if(t.create){let i=this.node.logicNode.logic.getMetadata(t),r=t.create(this.node,Jt(()=>i.compute(this.node.context)));this.metadata.set(t,r)}}))}finally{e&&dd(!0)}}get(e){if(this.has(e)&&!this.metadata.has(e)){if(e.create)throw new y(1912,!1);let t=this.node.logicNode.logic.getMetadata(e);this.metadata.set(e,Jt(()=>t.compute(this.node.context)))}return this.metadata.get(e)}has(e){return this.node.logicNode.logic.hasMetadata(e)}};var er={get(n,e,t){if(e===Un)return!0;let i=n(),r=i.structure.getChild(e);if(r!==void 0)return r.fieldTree;let o=ve(i.value);if(z(o)){if(e===`length`)return i.value().length;if(e===Symbol.iterator)return()=>(i.value(),Array.prototype[Symbol.iterator].apply(i.fieldTree))}if(Fe(o)&&e===Symbol.iterator)return function*(){for(let a in t)yield[a,t[a]]}},getOwnPropertyDescriptor(n,e){let t=ve(n().value),i=Reflect.getOwnPropertyDescriptor(t,e);return i&&!i.configurable&&(i.configurable=!0),i},ownKeys(n){let e=ve(n().value);return typeof e==`object`&&e!==null?Reflect.ownKeys(e):[]}};function tr(n,e){let t=Jt(()=>n()[e()]);return t[z$1]=n[z$1],t.set=i=>{Object.is(ve(t),i)||n.update(r=>nr(r,i,e()))},t.update=i=>{t.set(i(ve(t)))},t.asReadonly=()=>t,t}function nr(n,e,t){if(z(n)){let i=[...n];return i[t]=e,i}else return m(l({},n),{[t]:e})}var Y=Symbol(``);var ei=Jt(()=>!1);var ke=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;_anyChildHasLogic;get injector(){return this._injector??=ge$1.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(e,t,i){this.logic=e,this.node=t,this.createChildNode=i}children(){this.ensureChildrenMap();let e=this.childrenMap();return e===void 0?[]:Array.from(e.byPropertyKey.values()).map(t=>ve(t.reader))}materializedChildren(){let e=this.childrenMap();return e===void 0?[]:Array.from(e.byPropertyKey.values()).map(t=>t.node)}_areChildrenMaterialized(){return ve(this.childrenMap)!==void 0}ensureChildrenMap(){this._areChildrenMaterialized()||ve(()=>{this.childrenMap.update(e=>this.computeChildrenMap(this.value(),e,!0))})}getChild(e){this.ensureChildrenMap();let t=e.toString(),i=ve(this.childrenMap)?.byPropertyKey.get(t)?.reader;return i||(i=this.createReader(t)),i()}reduceChildren(e,t,i){let r=this.childrenMap();if(!r)return e;let o=e;for(let a of r.byPropertyKey.values()){if(i?.(o))break;o=t(ve(a.reader),o)}return o}destroy(){this.injector.destroy()}createKeyOrOrphanSignals(e,t,i){if(e===`root`)return{keyInParent:ti,isOrphaned:ei};let r=this.parent,o=i,a=Jt(()=>{if(r.structure.isOrphaned())return Y;let f=r.structure.childrenMap();if(!f)return Y;let N=f.byPropertyKey.get(o);if(N&&N.node===this.node)return o;if(t===void 0)return Y;for(let[ne,T]of f.byPropertyKey)if(T.node===this.node)return o=ne;return Y}),l=Jt(()=>a()===Y);return{keyInParent:Jt(()=>{let f=a();if(f===Y)throw t===void 0?new y(-1902,!1):new y(1904,!1);return f}),isOrphaned:l}}createChildrenMap(){return ad({source:this.value,computation:(e,t)=>this.computeChildrenMap(e,t?.value,!1)})}computeChildrenMap(e,t,i){if(!Fe(e)||!i&&t===void 0&&!(this._anyChildHasLogic??=this.logic.anyChildHasLogic()))return;t??={byPropertyKey:new Map};let r,o=z(e);t!==void 0&&(o?r=rr(t,e,this.identitySymbol):r=or(t,e));for(let a of Object.keys(e)){let l$1,c=e[a];if(c===void 0){t.byPropertyKey.has(a)&&(r??=l({},t),r.byPropertyKey.delete(a));continue}o&&Fe(c)&&!z(c)&&(l$1=c[this.identitySymbol]??=Symbol(``));let f;l$1&&(t.byTrackingKey?.has(l$1)||(r??=l({},t),r.byTrackingKey??=new Map,r.byTrackingKey.set(l$1,this.createChildNode(a,l$1,o))),f=(r??t).byTrackingKey.get(l$1));let N=t.byPropertyKey.get(a);N===void 0?(r??=l({},t),r.byPropertyKey.set(a,{reader:this.createReader(a),node:f??this.createChildNode(a,l$1,o)})):f&&f!==N.node&&(r??=l({},t),N.node=f)}return r??t}createReader(e){return Jt(()=>this.childrenMap()?.byPropertyKey.get(e)?.node)}};var pt=class extends ke{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return ir}get keyInParent(){return ti}isOrphaned=ei;childrenMap;constructor(e,t,i,r,o){super(t,e,o),this.fieldManager=i,this.value=r,this.childrenMap=this.createChildrenMap()}};var gt=class extends ke{logic;parent;root;pathKeys;keyInParent;value;childrenMap;isOrphaned;get fieldManager(){return this.root.structure.fieldManager}constructor(e,t,i,r,o,a){super(t,e,a),this.logic=t,this.parent=i,this.root=this.parent.structure.root;let l=this.createKeyOrOrphanSignals(`child`,r,o);this.isOrphaned=l.isOrphaned,this.keyInParent=l.keyInParent,this.pathKeys=Jt(()=>[...i.structure.pathKeys(),this.keyInParent()]),this.value=tr(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var ir=Jt(()=>[]);var ti=Jt(()=>{throw new y(1905,!1)});function rr(n,e,t){let i,r=new Set(n.byPropertyKey.keys()),o=n.byTrackingKey&&new Set(n.byTrackingKey.keys());for(let a=0;a<e.length;a++){let l=e[a];r.delete(a.toString()),o&&Fe(l)&&Object.hasOwn(l,t)&&o.delete(l[t])}if(r.size>0){i??=l({},n);for(let a of r)i.byPropertyKey.delete(a)}if(o&&o.size>0){i??=l({},n);for(let a of o)i.byTrackingKey.delete(a)}return i}function or(n,e){let t;for(let i of n.byPropertyKey.keys())Object.hasOwn(e,i)||(t??=l({},n),t.byPropertyKey.delete(i));return t}var bt=class{node;selfSubmitting=ct$1(!1);submissionErrors;constructor(e){this.node=e,this.submissionErrors=ad({source:this.node.structure.value,computation:()=>[]})}submitting=Jt(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))};var be=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new mt(this)}fieldProxy=new Proxy(()=>this,er);pathNode;constructor(e){this.pathNode=e.pathNode,this.fieldAdapter=e.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,e),this.validationState=this.fieldAdapter.createValidationState(this,e),this.nodeState=this.fieldAdapter.createNodeState(this,e),this.metadataState=new ht(this),this.submitState=new bt(this),this.controlValue=this.controlValueSignal(),this.metadataState.runMetadataCreateLifecycle()}focusBoundControl(e){this.getBindingForFocus()?.focus(e)}getBindingForFocus(){return this.formFieldBindings().filter(t=>t.focus!==void 0).reduce(Kn,void 0)||this.structure.children().map(t=>t.getBindingForFocus()).reduce(Kn,void 0)}pendingSync=ad({source:()=>this.value(),computation:(e,t)=>{t?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){let e=this.metadata(Zn)?.();return e?this.metadata(e):void 0}get maxLength(){return this.metadata(Yn)}get min(){let e=this.metadata($n)?.();return e?this.metadata(e):void 0}get minLength(){return this.metadata(Qn)}get pattern(){return this.metadata(Xn)??ar}get required(){return this.metadata(Mt)??sr}metadata(e){return this.metadataState.get(e)}getError(e){return this.errors().find(t=>t.kind===e)}hasMetadata(e){return this.metadataState.has(e)}markAsTouched(e){this.structure.isOrphaned()||ve(()=>{this.markAsTouchedInternal(e),this.flushSync()})}markAsTouchedInternal(e){if(!this.structure.isOrphaned()&&!this.validationState.shouldSkipValidation()&&(this.nodeState.markAsTouched(),!e?.skipDescendants))for(let t of this.structure.children())t.markAsTouchedInternal()}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(e){ve(()=>this._reset(e))}_reset(e){this.pendingSync()?.abort(),e!==void 0&&this.value.set(e),this.controlValue.rawSet(this.value()),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let t of this.formFieldBindings())t.reset();for(let t of this.structure.materializedChildren())t._reset()}reloadValidation(){ve(()=>this._reloadValidation())}_reloadValidation(){let e=this.logicNode.logic.getMetadataKeys();for(let t of e)t[Nt]&&this.metadata(t).reload?.();for(let t of this.structure.children())t._reloadValidation()}controlValueSignal(){let e=ad(this.value);e.rawSet=e.set,e.set=i=>{e.rawSet(i),this.markAsDirty(),this.debounceSync()};let t=e.update;return e.update=i=>{t(i),this.markAsDirty(),this.debounceSync()},e}sync(){this.value.set(this.controlValue())}flushSync(){let e=this.pendingSync();e&&!e.signal.aborted&&(e.abort(),this.sync())}async debounceSync(){let e=ve(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(e){let t=new AbortController,i=e(t.signal);if(i&&(this.pendingSync.set(t),await i,t.signal.aborted))return}this.structure.isOrphaned()||this.sync()}static newRoot(e,t,i,r){return r.newRoot(e,t,i,r)}createStructure(e){return e.kind===`root`?new pt(this,e.logic,e.fieldManager,e.value,this.newChild.bind(this)):new gt(this,e.logic,e.parent,e.identityInParent,e.initialKeyInParent,this.newChild.bind(this))}newChild(e,t,i){let r,o;return i?(r=this.pathNode.getChild(q),o=this.structure.logic.getChild(q)):(r=this.pathNode.getChild(e),o=this.structure.logic.getChild(e)),this.fieldAdapter.newChild({kind:`child`,parent:this,pathNode:r,logic:o,initialKeyInParent:e,identityInParent:t,fieldAdapter:this.fieldAdapter})}};var ar=Jt(()=>[]);var sr=Jt(()=>!1);function Kn(n,e){return n?e&&n.element.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e:n:e}var _t=class{node;selfTouched=ct$1(!1);selfDirty=ct$1(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=ct$1([]);constructor(e){this.node=e}dirty=Jt(()=>{let e=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(e,(t,i)=>i||t.nodeState.dirty(),Hn)});touched=Jt(()=>{let e=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(e,(t,i)=>i||t.nodeState.touched(),Hn)});disabledReasons=Jt(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)],{equal:w});disabled=Jt(()=>!!this.disabledReasons().length);readonly=Jt(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=Jt(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=Jt(()=>{let e=this.node.structure.parent;return e?`${e.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=Jt(()=>{if(this.node.logicNode.logic.hasMetadata(ut)){let t=this.node.logicNode.logic.getMetadata(ut).compute(this.node.context);if(t)return i=>t(this.node.context,i)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=Jt(()=>this.hidden()||this.disabled()||this.readonly())};var vt=class{newRoot(e,t,i,r){return new be({kind:`root`,fieldManager:e,value:t,pathNode:i,logic:i.builder.build(),fieldAdapter:r})}newChild(e){return new be(e)}createNodeState(e){return new _t(e)}createValidationState(e){return new ft(e)}createStructure(e,t){return e.createStructure(t)}};var yt=class{injector;rootName;submitOptions;constructor(e,t,i){this.injector=e,this.rootName=t??`${this.injector.get(Dr)}.form${lr++}`,this.submitOptions=i}structures=new Set;createFieldManagementEffect(e){Jc(()=>{let t=new Set;this.markStructuresLive(e,t);for(let i of this.structures)t.has(i)||(this.structures.delete(i),ve(()=>i.destroy()))},{injector:this.injector})}markStructuresLive(e,t){t.add(e);for(let i of e.children())this.markStructuresLive(i.structure,t)}};var lr=0;var ni=new C(``);function dr(n){let e,t,i;return n.length===3?[e,t,i]=n:n.length===2?Zi(n[1])?[e,t]=n:[e,i]=n:[e]=n,[e,t,i]}function cr(...n){let[e,t,i]=dr(n),r=i?.injector??E(ge$1),o=Ki$1(r,()=>Ae.rootCompile(t)),a=new yt(r,i?.name,i?.submission),l=i?.adapter??new vt,c=be.newRoot(a,e,o,l);a.createFieldManagementEffect(c.structure);let{experimentalWebMcpTool:f}=i??{};if(f){let N=Ki$1(r,()=>E(ni,{optional:!0}));N&&Ki$1(r,()=>N(c.fieldTree,{name:f.name,description:f.description}))}return c.fieldTree}var Oe=class{kind=`compat`;control;fieldTree;context;message;constructor({context:e,kind:t,control:i}){this.context=e,this.kind=t,this.control=i}};function ii(n){if(n.length===0)return null;let e={};for(let t of n)e[t.kind]=t instanceof Oe?t.context:t;return e}function ri(n,e){return n===null?[]:Object.entries(n).map(([t,i])=>new Oe({context:i,kind:t,control:e}))}var fr=new C(``);function oi(n,e){return n instanceof Function?n(e):n}function ur(n){return typeof n==`number`?isNaN(n):n===``||n===!1||n==null}function ai(n){return n===void 0?[]:Array.isArray(n)?n:[n]}function mr(n,e){xt(n),k.unwrapFieldPath(n).builder.addSyncErrorRule(i=>Jn(e(i),i.fieldTree))}function hr(n){return new Ct(n)}var Le=class{__brand=void 0;kind=``;fieldTree;message;constructor(e){e&&Object.assign(this,e)}};var Ct=class extends Le{kind=`required`};var ze=class extends Le{kind=`parse`};function Jo(n,e){let t=St(n,V(),i=>e?.when?e.when(i):!0);St(n,Mt,({state:i})=>i.metadata(t)()),mr(n,i=>{if(i.state.metadata(t)()&&ur(i.value()))return e?.error?oi(e.error,i):hr({message:oi(e?.message,i)})})}function pr(n,e,t){let i=ad({source:n,computation:()=>[],equal:w}),r=a=>{let l=t(a);i.set(ai(l.error)),l.value!==void 0&&e(l.value),i.set(ai(l.error))},o=()=>{i.set([])};return{errors:i.asReadonly(),setRawValue:r,reset:o}}var Et=class{field;constructor(e){this.field=e}control=this;get value(){return this.field().controlValue()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return ii(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return`DISABLED`;if(this.field().valid())return`VALID`;if(this.field().invalid())return`INVALID`;if(this.field().pending())return`PENDING`;throw new y(1910,!1)}valueAccessor=null;hasValidator(e){return e===Se.required?this.field().required():!1}updateValueAndValidity(){}};var Ft={disabled:`disabled`,disabledReasons:`disabledReasons`,dirty:`dirty`,errors:`errors`,hidden:`hidden`,invalid:`invalid`,max:`max`,maxLength:`maxLength`,min:`min`,minLength:`minLength`,name:`name`,pattern:`pattern`,pending:`pending`,readonly:`readonly`,required:`required`,touched:`touched`};var gr=(()=>{let n={};for(let e of Object.keys(Ft))n[Ft[e]]=e;return n})();function Rt(n,e){return n[gr[e]]?.()}var Tt=Object.values(Ft);function Be(){return{}}function B(n,e,t){return n[e]!==t?(n[e]=t,!0):!1}function br(n,e,t){let i;if(di(n)&&t.isBadInput(n))return{error:new ze};switch(n.type){case`checkbox`:return{value:n.checked};case`number`:case`range`:case`datetime-local`:if(i=ve(e),typeof i==`number`||i===null)return{value:n.value===``?null:n.valueAsNumber};break;case`date`:case`month`:case`time`:case`week`:if(i=ve(e),i===null||i instanceof Date)return{value:n.valueAsDate};if(typeof i==`number`)return{value:n.valueAsNumber};break}if(n.tagName===`INPUT`&&n.type===`text`&&(i??=ve(e),typeof i==`number`||i===null)){if(n.value===``)return{value:null};let r=Number(n.value);return Number.isNaN(r)?{error:new ze}:{value:r}}return{value:n.value}}function si(n,e){switch(n.type){case`checkbox`:n.checked=e;return;case`radio`:n.checked=e===n.value;return;case`number`:case`range`:case`datetime-local`:if(typeof e==`number`){li(n,e);return}else if(e===null){n.value=``;return}break;case`date`:case`month`:case`time`:case`week`:if(e===null||e instanceof Date){n.valueAsDate=e;return}else if(typeof e==`number`){li(n,e);return}}if(n.tagName===`INPUT`&&n.type===`text`){if(typeof e==`number`){n.value=isNaN(e)?``:String(e);return}if(e===null){n.value=``;return}}n.value=e}function li(n,e){isNaN(e)?n.value=``:n.valueAsNumber=e}function di(n){return n.tagName===`INPUT`}function _r(n){return n.type===`date`||n.type===`datetime-local`||n.type===`month`||n.type===`time`||n.type===`week`}function vr(n,e){let t=n.getUTCFullYear(),i=String(n.getUTCMonth()+1).padStart(2,`0`);if(e===`month`)return`${t}-${i}`;return`${t}-${i}-${String(n.getUTCDate()).padStart(2,`0`)}`}function ci(n,e,t){return e instanceof Date&&(n===`min`||n===`max`)&&(t===`date`||t===`month`)?vr(e,t):e}function yr(n,e){n.listenToCustomControlModel(i=>e.state().controlValue.set(i)),n.listenToCustomControlOutput(`touch`,()=>e.state().markAsTouched()),e.registerAsBinding(n.customControl);let t=Be();return()=>{let i=e.state(),r=i.controlValue();B(t,`controlValue`,r)&&n.setCustomControlModelInput(r);for(let o of Tt){let a;if(o===`errors`?a=e.errors():a=Rt(i,o),B(t,o,a)&&(n.setInputOnDirectives(o,a),e.elementAcceptsNativeProperty(o)&&!n.customControlHasInput(o))){let l=ci(o,a,e.nativeFormElement.type);_n(e.renderer,e.nativeFormElement,o,l)}}}}function xr(n){return typeof n==`object`&&n!==null}function Sr(n,e){let t=Be();e.controlValueAccessor.registerOnChange(r=>{t.controlValue=r,e.state().controlValue.set(r)}),e.controlValueAccessor.registerOnTouched(()=>e.state().markAsTouched());let i=e.injector.get(_e,null,{optional:!0,self:!0});if(i){let r;for(let c of i)xr(c)&&c.registerOnValidatorChange&&(r??=ct$1(0),c.registerOnValidatorChange(()=>{r.update(f=>f+1)}));let o=i.map(c=>typeof c==`function`?c:c.validate.bind(c)),a=Se.compose(o),l=Jt(()=>{r?.();return ri(a?a(e.interopNgControl.control):null,e.interopNgControl.control)});e.parseErrorsSource.set(l)}return e.registerAsBinding({reset:()=>{let r=e.state().value();t.controlValue=r,ve(()=>e.controlValueAccessor.writeValue(r))}}),()=>{let r=e.state(),o=r.controlValue();B(t,`controlValue`,o)&&ve(()=>e.controlValueAccessor.writeValue(o));for(let a of Tt){let l=Rt(r,a);if(B(t,a,l)){let c=n.setInputOnDirectives(a,l,a===`name`?Nr:void 0);a===`disabled`&&e.controlValueAccessor.setDisabledState?ve(()=>e.controlValueAccessor.setDisabledState(l)):!c&&e.elementAcceptsNativeProperty(a)&&_n(e.renderer,e.nativeFormElement,a,l)}}}}function Nr(n){return n==null}function wr(n,e,t){if(typeof MutationObserver!=`function`)return;let i=new MutationObserver(r=>{r.some(o=>Mr(o))&&e()});i.observe(n,{attributes:!0,attributeFilter:[`value`],characterData:!0,childList:!0,subtree:!0}),t.onDestroy(()=>i.disconnect())}function Mr(n){if(n.type===`childList`||n.type===`characterData`){if(n.target instanceof Comment)return!1;for(let e of n.addedNodes)if(!(e instanceof Comment))return!0;for(let e of n.removedNodes)if(!(e instanceof Comment))return!0;return!1}return n.type===`attributes`&&n.target instanceof HTMLOptionElement}function Cr(n,e,t,i){let r=!1,o=e.nativeFormElement,a=pr(()=>e.state().value(),c=>e.state().controlValue.set(c),c=>br(o,e.state().value,i));t.set(a.errors),e.onReset=()=>{a.reset();let c=e.state().value();l.controlValue=c,si(o,c)},n.listenToDom(`input`,()=>a.setRawValue(void 0)),n.listenToDom(`blur`,()=>e.state().markAsTouched()),di(o)&&_r(o)&&i.watchValidity(e.destroyRef,o,()=>a.setRawValue(void 0)),e.registerAsBinding(),o.tagName===`SELECT`&&wr(o,()=>{r&&(o.value=e.state().controlValue())},e.destroyRef);let l=Be();return()=>{let c=e.state();for(let T of Tt){let ie=Rt(c,T);if(B(l,T,ie)&&(n.setInputOnDirectives(T,ie),e.elementAcceptsNativeProperty(T))){let He=ci(T,ie,o.type);_n(e.renderer,o,T,He)}}let f=c.controlValue(),N=B(l,`controlValue`,f),ne=o.type===`radio`&&B(l,`radioValue`,o.value);(N||ne)&&si(o,f),r=!0}}var fi=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵprov=A({token:n,factory:t=>Er.ɵfac(t),providedIn:`root`})}return n})();var Er=(()=>{class n extends fi{document=E(Q);cspNonce=E(ds,{optional:!0});injectedStyles=new WeakMap;watchValidity(t,i,r){let o=i.getRootNode();this.injectedStyles.has(o)||this.injectedStyles.set(o,this.createTransitionStyle(o));let a=l=>{let c=l;(c.animationName===`ng-valid`||c.animationName===`ng-invalid`)&&r()};i.addEventListener(`animationstart`,a),t.onDestroy(()=>{i.removeEventListener(`animationstart`,a)})}isBadInput(t){return t.validity?.badInput??!1}createTransitionStyle(t){let i=this.document.createElement(`style`);return this.cspNonce&&(i.nonce=this.cspNonce),i.textContent=`
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `,t.nodeType===9?t.head?.appendChild(i):t.appendChild(i),i}ngOnDestroy(){this.injectedStyles.get(this.document)?.remove()}static ɵfac=(()=>{let t;return function(r){return(t||(t=Hh(n)))(r||n)}})();static ɵprov=A({token:n,factory:n.ɵfac})}return n})();var Fr=Symbol();var Ve=new C(``);var ea=(()=>{class n{field=nH.required({alias:`formField`});state=Jt(()=>this.field()());renderer=E(xo);destroyRef=E(Me);injector=E(ge$1);element=E(Vn$1).nativeElement;elementIsNativeFormElement=vn(this.element);elementAcceptsTextualValues=nr$1(this.element);_elementAcceptsMinMax;nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=t=>this.element.focus(t);controlValueAccessors=E(z$2,{optional:!0,self:!0});config=E(fr,{optional:!0});validityMonitor=E(fi);parseErrorsSource=ct$1(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new Et(this.state)}parseErrors=Jt(()=>this.parseErrorsSource()?.().map(t=>m(l({},t),{fieldTree:ve(this.state).fieldTree,formField:this}))??[],{equal:w});errors=Jt(()=>this.state().errors().filter(t=>!t.formField||t.formField===this),{equal:w});isFieldBinding=!1;resetter=()=>{};parseErrorsResetCallback;setParseErrors(t){this.parseErrorsSource.set(t)}set onReset(t){this.parseErrorsResetCallback=t}get onReset(){return this.parseErrorsResetCallback}get controlValueAccessor(){return!this.controlValueAccessors||this.controlValueAccessors.length===0?this.interopNgControl?.valueAccessor??void 0:Fn$1(this.interopNgControl,this.controlValueAccessors)??void 0}installClassBindingEffect(){let t=Object.entries(this.config?.classes??{}).map(([r,o])=>[r,Jt(()=>o(this))]);if(t.length===0)return;let i=Be();cH({write:()=>{for(let[r,o]of t){let a=o();B(i,r,a)&&(a?this.renderer.addClass(this.element,r):this.renderer.removeClass(this.element,r))}}},{injector:this.injector})}focus(t){this.focuser(t)}reset(){this.resetter(),this.parseErrorsResetCallback?.(this.state().value())}registerAsBinding(t){if(this.isFieldBinding)throw new y(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),t?.focus&&(this.focuser=i=>t.focus(i)),t?.reset&&(this.resetter=()=>t.reset()),Jc(i=>{let r=this.state();r.nodeState.formFieldBindings.update(o=>[...o,this]),i(()=>{r.nodeState.formFieldBindings.update(o=>o.filter(a=>a!==this))})},{injector:this.injector})}[Fr];ɵngControlCreate(t){if(!t.hasPassThrough)if(this.controlValueAccessor)this.ɵngControlUpdate=Sr(t,this);else if(t.customControl)this.ɵngControlUpdate=yr(t,this);else if(this.elementIsNativeFormElement)this.ɵngControlUpdate=Cr(t,this,this.parseErrorsSource,this.validityMonitor);else throw new y(1914,!1)}ɵngControlUpdate;elementAcceptsNativeProperty(t){if(!this.elementIsNativeFormElement)return!1;switch(t){case`min`:case`max`:return this._elementAcceptsMinMax??=tr$1(this.element);case`minLength`:case`maxLength`:return this.elementAcceptsTextualValues;case`disabled`:case`required`:case`readonly`:case`name`:return!0;default:return!1}}static ɵfac=function(i){return new(i||n)};static ɵdir=aa({type:n,selectors:[[``,`formField`,``]],inputs:{field:[1,`formField`,`field`]},exportAs:[`formField`],features:[o_([{provide:Ve,useExisting:n},{provide:T,useFactory:()=>E(n).interopNgControl},{provide:Cn$1,useFactory:()=>E(Ve,{self:!0})}]),lb(`formField`)]})}return n})();var ui=new C(`MAT_INPUT_VALUE_ACCESSOR`);var Rr=[`button`,`checkbox`,`file`,`hidden`,`image`,`radio`,`range`,`reset`,`submit`];var Tr=new C(`MAT_INPUT_CONFIG`);var Na=(()=>{class n{_elementRef=E(Vn$1);_platform=E(m$1);ngControl=E(T,{optional:!0,self:!0});_autofillMonitor=E(Vn);_ngZone=E(ie);_formField=E(rt,{optional:!0});_renderer=E(xo);_uid=E(ne).getId(`mat-input-`);_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=E(Tr,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new re;controlType=`mat-input`;autofilled=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=Re$1(t),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(t){this._id=t||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Se.required)??!1}set required(t){this._required=Re$1(t)}_required;get type(){return this._type}set type(t){this._type=t||`text`,this._validateType(),!this._isTextarea&&fe().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type=`text`;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(t){t!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(t):this._inputValueAccessor.value=t,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(t){this._readonly=Re$1(t)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}_neverEmptyInputTypes=[`date`,`datetime`,`datetime-local`,`month`,`time`,`week`].filter(t=>fe().has(t));constructor(){let t=E(On$1,{optional:!0}),i=E(jn$1,{optional:!0}),r=E(Yn$2),o=E(ui,{optional:!0,self:!0}),a=E(Ve,{optional:!0,self:!0}),l=this._elementRef.nativeElement,c=l.nodeName.toLowerCase();o?Ir(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=l,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(l,`keyup`,this._iOSKeyupListener)}),this._errorStateTracker=new ct$2(r,a||this.ngControl,i,t,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=c===`select`,this._isTextarea=c===`textarea`,this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=l.multiple?`mat-native-select-multiple`:`mat-native-select`),this._signalBasedValueAccessor&&Jc(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(t=>{this.autofilled=t.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(t){this._elementRef.nativeElement.focus(t)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(t){if(t!==this.focused){if(!this._isNativeSelect&&t&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type===`number`?(i.type=`text`,i.setSelectionRange(0,0),i.type=`number`):i.setSelectionRange(0,0)}this.focused=t,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let t=this._elementRef.nativeElement.value;this._previousNativeValue!==t&&(this._previousNativeValue=t,this.stateChanges.next())}_dirtyCheckPlaceholder(){let t=this._getPlaceholder();if(t!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=t,t?i.setAttribute(`placeholder`,t):i.removeAttribute(`placeholder`)}}_getPlaceholder(){return this.placeholder||null}_validateType(){Rr.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let t=this._elementRef.nativeElement.validity;return t&&t.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let t=this._elementRef.nativeElement,i=t.options[0];return this.focused||t.multiple||!this.empty||!!(t.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(t){let i=this._elementRef.nativeElement;t.length?i.setAttribute(`aria-describedby`,t.join(` `)):i.removeAttribute(`aria-describedby`)}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let t=this._elementRef.nativeElement;return this._isNativeSelect&&(t.multiple||t.size>1)}_iOSKeyupListener=t=>{let i=t.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(i){return new(i||n)};static ɵdir=aa({type:n,selectors:[[`input`,`matInput`,``],[`textarea`,`matInput`,``],[`select`,`matNativeControl`,``],[`input`,`matNativeControl`,``],[`textarea`,`matNativeControl`,``]],hostAttrs:[1,`mat-mdc-input-element`],hostVars:21,hostBindings:function(i,r){i&1&&Qm(`focus`,function(){return r._focusChanged(!0)})(`blur`,function(){return r._focusChanged(!1)})(`input`,function(){return r._onInput()}),i&2&&(Zm(`id`,r.id)(`disabled`,r.disabled&&!r.disabledInteractive)(`required`,r.required),Um(`name`,r.name||null)(`readonly`,r._getReadonlyAttribute())(`aria-disabled`,r.disabled&&r.disabledInteractive?`true`:null)(`aria-invalid`,r.empty&&r.required?null:r.errorState)(`aria-required`,r.required)(`id`,r.id),sy(`mat-input-server`,r._isServer)(`mat-mdc-form-field-textarea-control`,r._isInFormField&&r._isTextarea)(`mat-mdc-form-field-input-control`,r._isInFormField)(`mat-mdc-input-disabled-interactive`,r.disabledInteractive)(`mdc-text-field__input`,r._isInFormField)(`mat-mdc-native-select-inline`,r._isInlineSelect()))},inputs:{disabled:`disabled`,id:`id`,placeholder:`placeholder`,name:`name`,required:`required`,type:`type`,errorStateMatcher:`errorStateMatcher`,userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],value:`value`,readonly:`readonly`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,rS]},exportAs:[`matInput`],features:[o_([{provide:it,useExisting:n}]),zs]})}return n})();var wa=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=sa({type:n});static ɵinj=ro({imports:[ot,ot,Bn,Yn$1]})}return n})();export{Ve as a,it as c,wa as d,zi as f,Pi as i,ot as l,Li as n,cr as o,zn as p,Na as r,ea as s,Jo as t,rt as u};
;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="0f0f2e7b-55ef-5bef-b5fb-21768101fa6c")}catch(e){}}();
//# debugId=0f0f2e7b-55ef-5bef-b5fb-21768101fa6c
