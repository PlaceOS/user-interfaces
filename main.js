import{Ar as v,B as Hc,Br as xi,Cr as rt$4,Ct as QT,D as Eh,Dn as eA,Dr as te$2,Dt as Rc,E as ES,F as Gn$1,Fr as wM,Gn as jD,Gr as yh,Gt as Vr,Hn as ie,Hr as yC,Ht as Uz,In as gm,Ir as wN,Jr as zr$1,Jt as W$3,K as Ic,Kr as zM,L as Gv,Lr as x,Lt as UD,M as Fz,Mn as g,Mt as SM,Nt as Sr,O as F,Ot as Ri,Pn as gN,Pr as wD,Qn as lC,Rn as he$1,Rt as UN,S as Dh,T as ED,Tn as dn$1,Ur as yD,Ut as VM,V as Hr,Vr as xr,Vt as Ux,W as IM,Wn as is,Wr as ye$1,Wt as Vc,X as JD,Xn as kN,Xr as l$1,Y as J$2,Yt as WM,Z as K$2,Zr as m$1,_ as Co,a as $z,an as YD,ar as nm,b as DS,br as r0,bt as Pe$3,c as BN,cn as _$1,cr as oN,d as Bp,dn as _N,er as me$1,et as LD,f as Bx,fn as _l,ft as No,g as Ch,gn as bM,gr as qM,gt as Or,h as CR,hn as aT,ht as Oh,i as $c,in as Y$2,it as MD,j as Fe,jn as fh,jr as vI,k as FD,kn as eE,kr as ui,kt as Rn$1,l as B_,ln as _D,lr as oe,mt as OD,n as $M,nn as Xi,nr as n0,o as AD,on as ZT,or as o0,ot as MN,pn as _m,pt as O,q as Ie$2,qt as Vz,rt as MA,st as Me$2,t as $D,tn as Xc,tr as mm,tt as LN,u as Bo,v as D$3,vn as bh,vr as qn,vt as PD,w as EC,wn as dc,x as De$2,yr as qt$1,yt as PM,z as HD,zn as hn,zr as xe,zt as Uo}from"./chunk-B5hGj_t1.js";import{$ as Lie,$n as et$3,$t as Wn$1,A as G$2,Ai as u0,B as Jl,Bn as dR,C as Ey,Ci as so,Cr as kW,Ei as tb,Er as kie,Et as Ql,Fi as uae,Fn as co,Ft as Sd,Gt as UW,H as Jo,Hi as wae,Hn as d_,Hr as moe,Ht as Tj,J as Kp,Jt as Ut$1,K as Kf,M as Gx,Mn as c_,Mr as la,N as Gy,Ni as uN,Ot as Qo,Pr as lo,Qi as xe$1,Qr as oB,Ri as vd,T as F_,Tr as ki,U as Jp,Un as da,Vi as wN$1,Vn as dS,Vr as ml,W as Ju,X as L_,Y as Kt$2,Yi as xW,Yr as nie,Yt as Vx,_i as rt$5,_n as _a,a as A_,ai as pN,b as Ee$2,bt as Pi,c as Bf,cn as Xw,ct as Mie,da as zr$2,di as rB,dn as ZK,ea as xie,ei as oR,et as Lj,fn as Zn,fr as iB,g as Db,hi as rr$1,hn as _F,hr as ip,ht as Ol,ir as fy,it as MN$1,j as G_,ji as uB,jn as cB,jr as l_,jt as RS,k as Ft$1,ki as tv,kn as bi,la as zn$1,lt as Mp,m as D_,n as $d,nt as Ly,oa as yi,oi as pa,on as Xp,or as gN$1,pi as rO,pt as ON,qt as Ui,r as $f,s as BO,t as $ae,tn as Wr$1,u as Cn$1,ua as zp,vi as sB,w as FW,wt as QV,xi as sb,xt as Pie,yi as sa,yn as aG,yt as PE,zr as m_,zt as TN}from"./chunk-BUtp5rCH.js";var j$1=class{_box;_destroyed=new te$2;_resizeSubject=new te$2;_resizeObserver;_elementObservables=new Map;constructor(r){this._box=r,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(r){return this._elementObservables.has(r)||this._elementObservables.set(r,new x(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(r,{box:this._box}),()=>{this._resizeObserver?.unobserve(r),i.unsubscribe(),this._elementObservables.delete(r)}}).pipe(xe(e=>e.some(i=>i.target===r)),EC({bufferSize:1,refCount:!0}),ui(this._destroyed))),this._elementObservables.get(r)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var Ce$1=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=g(Ie$2);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let n=i?.box||`content-box`;return this._observers.has(n)||this._observers.set(n,new j$1(n)),this._observers.get(n).observe(e)}static ɵfac=function(i){return new(i||t)};static ɵprov=K$2({token:t,factory:t.ɵfac})}return t})();var Ue=[`notch`];var Ze=[`*`];var we$1=[`iconPrefixContainer`];var Me$1=[`textPrefixContainer`];var ze=[`iconSuffixContainer`];var Le=[`textSuffixContainer`];var $e$1=[`textField`];var Ye=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]];var Xe=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function Ke(t,r){t&1&&Hc(0,`span`,21)}function Je(t,r){if(t&1&&(Ic(0,`label`,20),zM(1,1),bM(2,Ke,1,0,`span`,21),yh()),t&2){let e=VM(2);_D(`floating`,e._shouldLabelFloat())(`monitorResize`,e._hasOutline())(`id`,e._labelId),Vc(`for`,e._control.disableAutomaticLabeling?null:e._control.id),aT(2),SM(!e.hideRequiredMarker&&e._control.required?2:-1)}}function et$2(t,r){if(t&1&&bM(0,Je,3,5,`label`,20),t&2)SM(VM()._hasFloatingLabel()?0:-1)}function tt$2(t,r){t&1&&Hc(0,`div`,7)}function it$3(t,r){}function nt$3(t,r){if(t&1&&ED(0,it$3,0,0,`ng-template`,13),t&2){VM(2);_D(`ngTemplateOutlet`,WM(1))}}function ot$2(t,r){if(t&1&&(Ic(0,`div`,9),bM(1,nt$3,1,1,null,13),yh()),t&2){let e=VM();_D(`matFormFieldNotchedOutlineOpen`,e._shouldLabelFloat()),aT(),SM(e._forceDisplayInfixLabel()?-1:1)}}function rt$3(t,r){t&1&&(Ic(0,`div`,10,2),zM(2,2),yh())}function lt$2(t,r){t&1&&(Ic(0,`div`,11,3),zM(2,3),yh())}function at$3(t,r){}function dt$2(t,r){if(t&1&&ED(0,at$3,0,0,`ng-template`,13),t&2){VM();_D(`ngTemplateOutlet`,WM(1))}}function mt$2(t,r){t&1&&(Ic(0,`div`,14,4),zM(2,4),yh())}function ct$2(t,r){t&1&&(Ic(0,`div`,15,5),zM(2,5),yh())}function ft$1(t,r){t&1&&Hc(0,`div`,16)}function st$2(t,r){t&1&&(Ic(0,`div`,18),zM(1,6),yh())}function ut$1(t,r){if(t&1&&(Ic(0,`mat-hint`,22),gN(1),yh()),t&2){let e=VM(2);_D(`id`,e._hintLabelId),aT(),YD(e.hintLabel)}}function pt$2(t,r){if(t&1&&(Ic(0,`div`,19),bM(1,ut$1,2,2,`mat-hint`,22),zM(2,7),Hc(3,`div`,23),zM(4,8),yh()),t&2){let e=VM();aT(),SM(e.hintLabel?1:-1)}}var W$2=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵdir=qn({type:t,selectors:[[`mat-label`]]})}return t})();var Pe$2=new D$3(`MatError`);var ht$2=(()=>{class t{id=g(Kt$2).getId(`mat-mdc-error-`);static ɵfac=function(i){return new(i||t)};static ɵdir=qn({type:t,selectors:[[`mat-error`],[``,`matError`,``]],hostAttrs:[1,`mat-mdc-form-field-error`,`mat-mdc-form-field-bottom-align`],hostVars:1,hostBindings:function(i,n){i&2&&AD(`id`,n.id)},inputs:{id:`id`},features:[_N([{provide:Pe$2,useExisting:t}])]})}return t})();var V$1=(()=>{class t{align=`start`;id=g(Kt$2).getId(`mat-mdc-hint-`);static ɵfac=function(i){return new(i||t)};static ɵdir=qn({type:t,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(i,n){i&2&&(AD(`id`,n.id),Vc(`align`,null),$D(`mat-mdc-form-field-hint-end`,n.align===`end`))},inputs:{align:`align`,id:`id`}})}return t})();var Ae$1=new D$3(`MatPrefix`);var bt$1=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static ɵfac=function(i){return new(i||t)};static ɵdir=qn({type:t,selectors:[[``,`matPrefix`,``],[``,`matIconPrefix`,``],[``,`matTextPrefix`,``]],inputs:{_isTextSelector:[0,`matTextPrefix`,`_isTextSelector`]},features:[_N([{provide:Ae$1,useExisting:t}])]})}return t})();var Ie$1=new D$3(`MatSuffix`);var xt$1=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static ɵfac=function(i){return new(i||t)};static ɵdir=qn({type:t,selectors:[[``,`matSuffix`,``],[``,`matIconSuffix`,``],[``,`matTextSuffix`,``]],inputs:{_isTextSelector:[0,`matTextSuffix`,`_isTextSelector`]},features:[_N([{provide:Ie$1,useExisting:t}])]})}return t})();var Be$1=new D$3(`FloatingLabelParent`);var Re$1=(()=>{class t{_elementRef=g(dn$1);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=g(Ce$1);_ngZone=g(Ie$2);_parent=g(Be$1);_resizeSubscription=new oe;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return _t$2(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(i){return new(i||t)};static ɵdir=qn({type:t,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(i,n){i&2&&$D(`mdc-floating-label--float-above`,n.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return t})();function _t$2(t){let r=t;if(r.offsetParent!==null)return r.scrollWidth;let e=r.cloneNode(!0);e.style.setProperty(`position`,`absolute`),e.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var Ee$1=`mdc-line-ripple--active`;var D$2=`mdc-line-ripple--deactivating`;var Te$1=(()=>{class t{_elementRef=g(dn$1);_cleanupTransitionEnd;constructor(){let e=g(Ie$2),i=g(Or);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(D$2),e.add(Ee$1)}deactivate(){this._elementRef.nativeElement.classList.add(D$2)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,n=i.contains(D$2);e.propertyName===`opacity`&&n&&i.remove(Ee$1,D$2)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(i){return new(i||t)};static ɵdir=qn({type:t,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return t})();var De$1=(()=>{class t{_elementRef=g(dn$1);_ngZone=g(Ie$2);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(`.mdc-floating-label`);i?(e.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(i.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration=``)}))):e.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width=``:i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${e}px)`)}static ɵfac=function(i){return new(i||t)};static ɵcmp=fh({type:t,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(i,n){if(i&1&&PD(Ue,5),i&2){let o;LD(o=FD())&&(n._notch=o.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(i,n){i&2&&$D(`mdc-notched-outline--notched`,n.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:Ze,decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(i,n){i&1&&($M(),MD(0,`div`,1),Dh(1,`div`,2,0),zM(3),Eh(),MD(4,`div`,3))},encapsulation:2})}return t})();var gt$1=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static ɵfac=function(i){return new(i||t)};static ɵdir=qn({type:t})}return t})();var vt$1=new D$3(`MatFormField`);var St$1=new D$3(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var Oe=`fill`;var yt$1=`auto`;var ke$1=`fixed`;var Nt$1=`translateY(-50%)`;var qe=(()=>{class t{_elementRef=g(dn$1);_changeDetectorRef=g(Bo);_platform=g(Ee$2);_idGenerator=g(Kt$2);_ngZone=g(Ie$2);_defaults=g(St$1,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Uz(`iconPrefixContainer`);_textPrefixContainerSignal=Uz(`textPrefixContainer`);_iconSuffixContainerSignal=Uz(`iconSuffixContainer`);_textSuffixContainerSignal=Uz(`textSuffixContainer`);_prefixSuffixContainers=Me$2(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Vz(W$2);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=aG(e)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||yt$1}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||Oe;this._appearanceSignal.set(i)}_appearanceSignal=Y$2(Oe);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||ke$1}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||ke$1}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new te$2;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Ft$1();constructor(){let e=this._defaults,i=g(yi);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),xi(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Me$2(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(e){let i=this._control,n=`mat-mdc-form-field-type-`;e&&this._elementRef.nativeElement.classList.remove(n+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(n+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(_l([void 0,void 0]),W$3(()=>[i.errorState,i.userAriaDescribedBy]),yC(),xe(([[o,l],[x,O]])=>o!==x||l!==O)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(ui(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),lC(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,e),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,e)}_syncOutlineLabelOffset(){$z({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Me$2(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&e.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let o=this._hintChildren?this._hintChildren.find(x=>x.align===`start`):null,l=this._hintChildren?this._hintChildren.find(x=>x.align===`end`):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),l&&e.push(l.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,n;if(i){let o=this._describedByIds||e;n=e.concat(i.filter(l=>l&&!o.includes(l)))}else n=e;this._control.setDescribedByIds(n),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,n=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,l=e?.getBoundingClientRect().width??0,x=i?.getBoundingClientRect().width??0,O=n?.getBoundingClientRect().width??0,He=o?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${Nt$1} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${l+x}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,l+x+O+He]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,n]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),n!==null&&this._notchedOutline?._setMaxWidth(n)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static ɵfac=function(i){return new(i||t)};static ɵcmp=fh({type:t,selectors:[[`mat-form-field`]],contentQueries:function(i,n,o){if(i&1&&(jD(o,n._labelChild,W$2,5),Ch(o,gt$1,5)(o,Ae$1,5)(o,Ie$1,5)(o,Pe$2,5)(o,V$1,5)),i&2){qM();let l;LD(l=FD())&&(n._formFieldControl=l.first),LD(l=FD())&&(n._prefixChildren=l),LD(l=FD())&&(n._suffixChildren=l),LD(l=FD())&&(n._errorChildren=l),LD(l=FD())&&(n._hintChildren=l)}},viewQuery:function(i,n){if(i&1&&(UD(n._iconPrefixContainerSignal,we$1,5)(n._textPrefixContainerSignal,Me$1,5)(n._iconSuffixContainerSignal,ze,5)(n._textSuffixContainerSignal,Le,5),PD($e$1,5)(we$1,5)(Me$1,5)(ze,5)(Le,5)(Re$1,5)(De$1,5)(Te$1,5)),i&2){qM(4);let o;LD(o=FD())&&(n._textField=o.first),LD(o=FD())&&(n._iconPrefixContainer=o.first),LD(o=FD())&&(n._textPrefixContainer=o.first),LD(o=FD())&&(n._iconSuffixContainer=o.first),LD(o=FD())&&(n._textSuffixContainer=o.first),LD(o=FD())&&(n._floatingLabel=o.first),LD(o=FD())&&(n._notchedOutline=o.first),LD(o=FD())&&(n._lineRipple=o.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(i,n){i&2&&$D(`mat-mdc-form-field-label-always-float`,n._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,n._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,n._hasIconSuffix)(`mat-form-field-invalid`,n._control.errorState)(`mat-form-field-disabled`,n._control.disabled)(`mat-form-field-autofilled`,n._control.autofilled)(`mat-form-field-appearance-fill`,n.appearance==`fill`)(`mat-form-field-appearance-outline`,n.appearance==`outline`)(`mat-form-field-hide-placeholder`,n._hasFloatingLabel()&&!n._shouldLabelFloat())(`mat-primary`,n.color!==`accent`&&n.color!==`warn`)(`mat-accent`,n.color===`accent`)(`mat-warn`,n.color===`warn`)(`ng-untouched`,n._shouldForward(`untouched`))(`ng-touched`,n._shouldForward(`touched`))(`ng-pristine`,n._shouldForward(`pristine`))(`ng-dirty`,n._shouldForward(`dirty`))(`ng-valid`,n._shouldForward(`valid`))(`ng-invalid`,n._shouldForward(`invalid`))(`ng-pending`,n._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[_N([{provide:vt$1,useExisting:t},{provide:Be$1,useExisting:t}])],ngContentSelectors:Xe,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(i,n){if(i&1&&($M(Ye),ED(0,et$2,1,1,`ng-template`,null,0,UN),Ic(2,`div`,6,1),$c(`click`,function(l){return n._control.onContainerClick(l)}),bM(4,tt$2,1,0,`div`,7),Ic(5,`div`,8),bM(6,ot$2,2,2,`div`,9),bM(7,rt$3,3,0,`div`,10),bM(8,lt$2,3,0,`div`,11),Ic(9,`div`,12),bM(10,dt$2,1,1,null,13),zM(11),yh(),bM(12,mt$2,3,0,`div`,14),bM(13,ct$2,3,0,`div`,15),yh(),bM(14,ft$1,1,0,`div`,16),yh(),Ic(15,`div`,17),bM(16,st$2,2,0,`div`,18)(17,pt$2,5,1,`div`,19),yh()),i&2){let o;aT(2),$D(`mdc-text-field--filled`,!n._hasOutline())(`mdc-text-field--outlined`,n._hasOutline())(`mdc-text-field--no-label`,!n._hasFloatingLabel())(`mdc-text-field--disabled`,n._control.disabled)(`mdc-text-field--invalid`,n._control.errorState),aT(2),SM(!n._hasOutline()&&!n._control.disabled?4:-1),aT(2),SM(n._hasOutline()?6:-1),aT(),SM(n._hasIconPrefix?7:-1),aT(),SM(n._hasTextPrefix?8:-1),aT(2),SM(!n._hasOutline()||n._forceDisplayInfixLabel()?10:-1),aT(2),SM(n._hasTextSuffix?12:-1),aT(),SM(n._hasIconSuffix?13:-1),aT(),SM(n._hasOutline()?-1:14),aT(),$D(`mat-mdc-form-field-subscript-dynamic-size`,n.subscriptSizing===`dynamic`);let l=n._getSubscriptMessageType();aT(),SM((o=l)===`error`?16:o===`hint`?17:-1)}},dependencies:[Re$1,De$1,eA,Te$1,V$1],styles:[`.mdc-text-field {
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
`],encapsulation:2})}return t})();var Kt$1=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Vr({type:t});static ɵinj=Rn$1({imports:[PE,qe,et$3]})}return t})();var st$1=Symbol(`FIELD_TREE`);var de=0;function At(){return de}function N(r,e){return(...t)=>{try{return de=e,r(...t)}finally{de=0}}}function It(r){return!r}function tt$1(r){return r}function M(r){return Array.isArray(r)}function H(r){return(typeof r==`object`||typeof r==`function`)&&r!=null}var R=Symbol();var Z=Symbol();var V=class{predicates;fns=[];constructor(e){this.predicates=e}push(e){this.fns.push(rt$2(this.predicates,e))}mergeIn(e){let t=this.predicates?e.fns.map(n=>rt$2(this.predicates,n)):e.fns;this.fns.push(...t)}hasRules(){return this.fns.length>0}};var G$1=class extends V{get defaultValue(){return!1}compute(e){return this.fns.some(t=>{let n=t(e);return n&&n!==Z})}};var D$1=class r extends V{ignore;static ignoreNull(e){return new r(e,t=>t===null)}constructor(e,t){super(e),this.ignore=t}get defaultValue(){return[]}compute(e){return this.fns.reduce((t,n)=>{let i=n(e);return i===void 0||i===Z?t:M(i)?[...t,...this.ignore?i.filter(s=>!this.ignore(s)):i]:this.ignore&&this.ignore(i)?t:[...t,i]},[])}};var ue=class extends D$1{constructor(e){super(e,void 0)}};var le=class extends V{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(e,t){super(e),this.key=t}compute(e){if(this.fns.length===0)return this.key.reducer.getInitial();let t=this.key.reducer.getInitial();for(let n=0;n<this.fns.length;n++){let i=this.fns[n](e);i!==Z&&(t=this.key.reducer.reduce(t,i))}return t}};function rt$2(r,e){return r.length===0?e:t=>{for(let n of r){let i=t.stateOf(n.path),s=F(i.structure.pathKeys).length-n.depth;for(let o=0;o<s;o++)i=i.structure.parent;if(!n.fn(i.context))return Z}return e(t)}}var C=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(e){this.predicates=e,this.hidden=new G$1(e),this.disabledReasons=new ue(e),this.readonly=new G$1(e),this.syncErrors=D$1.ignoreNull(e),this.syncTreeErrors=D$1.ignoreNull(e),this.asyncErrors=D$1.ignoreNull(e)}hasAnyLogic(){return this.hidden.hasRules()||this.disabledReasons.hasRules()||this.readonly.hasRules()||this.syncErrors.hasRules()||this.syncTreeErrors.hasRules()||this.asyncErrors.hasRules()||this.metadata.size>0}hasMetadata(e){return this.metadata.has(e)}hasMetadataKeys(){return this.metadata.size>0}getMetadataKeys(){return this.metadata.keys()}getMetadata(e){return this.metadata.has(e)||this.metadata.set(e,new le(this.predicates,e)),this.metadata.get(e)}mergeIn(e){this.hidden.mergeIn(e.hidden),this.disabledReasons.mergeIn(e.disabledReasons),this.readonly.mergeIn(e.readonly),this.syncErrors.mergeIn(e.syncErrors),this.syncTreeErrors.mergeIn(e.syncTreeErrors),this.asyncErrors.mergeIn(e.asyncErrors);for(let t of e.getMetadataKeys()){let n=e.metadata.get(t);this.getMetadata(t).mergeIn(n)}}};var $$1=class{depth;constructor(e){this.depth=e}build(){return new q$1(this,[],0)}};var A=class r extends $$1{constructor(e){super(e)}current;all=[];addHiddenRule(e){this.getCurrent().addHiddenRule(e)}addDisabledReasonRule(e){this.getCurrent().addDisabledReasonRule(e)}addReadonlyRule(e){this.getCurrent().addReadonlyRule(e)}addSyncErrorRule(e){this.getCurrent().addSyncErrorRule(e)}addSyncTreeErrorRule(e){this.getCurrent().addSyncTreeErrorRule(e)}addAsyncErrorRule(e){this.getCurrent().addAsyncErrorRule(e)}addMetadataRule(e,t){this.getCurrent().addMetadataRule(e,t)}getChild(e){if(e===R){let t=this.getCurrent().children;t.size>(t.has(R)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(e)}hasLogic(e){return this===e?!0:this.all.some(({builder:t})=>t.hasLogic(e))}hasRules(){return this.all.length>0}anyChildHasLogic(){return this.all.some(({builder:e})=>e.anyChildHasLogic())}mergeIn(e,t){t?this.all.push({builder:e,predicate:{fn:N(t.fn,this.depth),path:t.path}}):this.all.push({builder:e}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new L(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new r(0)}};var L=class extends $$1{logic=new C([]);children=new Map;constructor(e){super(e)}addHiddenRule(e){this.logic.hidden.push(N(e,this.depth))}addDisabledReasonRule(e){this.logic.disabledReasons.push(N(e,this.depth))}addReadonlyRule(e){this.logic.readonly.push(N(e,this.depth))}addSyncErrorRule(e){this.logic.syncErrors.push(N(e,this.depth))}addSyncTreeErrorRule(e){this.logic.syncTreeErrors.push(N(e,this.depth))}addAsyncErrorRule(e){this.logic.asyncErrors.push(N(e,this.depth))}addMetadataRule(e,t){this.logic.getMetadata(e).push(N(t,this.depth))}getChild(e){return this.children.has(e)||this.children.set(e,new A(this.depth+1)),this.children.get(e)}hasLogic(e){return this===e}hasRules(){return this.logic.hasAnyLogic()||this.children.size>0}anyChildHasLogic(){for(let e of this.children.values())if(e.hasRules())return!0;return!1}};var q$1=class r{builder;predicates;depth;logic;constructor(e,t,n){this.builder=e,this.predicates=t,this.depth=n,this.logic=e?Pt(e,t,n):new C([])}getChild(e){let t=this.builder?ot$1(this.builder,e):[];if(t.length===0)return new r(void 0,[],this.depth+1);if(t.length===1){let{builder:n,predicates:i}=t[0];return new r(n,[...this.predicates,...i.map(s=>he(s,this.depth))],this.depth+1)}else return new ce(t.map(({builder:i,predicates:s})=>new r(i,[...this.predicates,...s.map(o=>he(o,this.depth))],this.depth+1)))}hasLogic(e){return this.builder?this.builder.hasLogic(e):!1}hasRules(){return this.builder?this.builder.hasRules():!1}anyChildHasLogic(){return this.builder?this.builder.anyChildHasLogic():!1}};var ce=class r{all;logic;constructor(e){this.all=e,this.logic=new C([]);for(let t of e)this.logic.mergeIn(t.logic)}getChild(e){return new r(this.all.flatMap(t=>t.getChild(e)))}hasLogic(e){return this.all.some(t=>t.hasLogic(e))}hasRules(){return this.all.some(e=>e.hasRules())}anyChildHasLogic(){return this.all.some(e=>e.anyChildHasLogic())}};function ot$1(r,e){if(r instanceof A)return r.all.flatMap(({builder:t,predicate:n})=>{let i=ot$1(t,e);return n?i.map(({builder:s,predicates:o})=>({builder:s,predicates:[...o,n]})):i});if(r instanceof L)return[...e!==R&&r.children.has(R)?[{builder:r.getChild(R),predicates:[]}]:[],...r.children.has(e)?[{builder:r.getChild(e),predicates:[]}]:[]];throw new v(1909,!1)}function Pt(r,e,t){let n=new C(e);if(r instanceof A){let i=r.all.map(({builder:s,predicate:o})=>new q$1(s,o?[...e,he(o,t)]:e,t));for(let s of i)n.mergeIn(s.logic)}else if(r instanceof L)n.mergeIn(r.logic);else throw new v(1909,!1);return n}function he(r,e){return m$1(l$1({},r),{depth:e})}var at$2=Symbol(`PATH`);var p$1=class r{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,kt);logicBuilder;constructor(e,t,n,i){this.keys=e,this.parent=n,this.keyInParent=i,this.root=t??this,n||(this.logicBuilder=A.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(e){return this.children.has(e)||this.children.set(e,new r([...this.keys,e],this.root,this,e)),this.children.get(e)}mergeIn(e,t){let n=e.compile();this.builder.mergeIn(n.builder,t)}static unwrapFieldPath(e){return e[at$2]}static newRoot(){return new r([],void 0,void 0,void 0)}};var kt={get(r,e){return e===at$2?r:r.getChild(e).fieldPathProxy}};var U;var _=new Map;var z=class r{schemaFn;constructor(e){this.schemaFn=e}compile(){if(_.has(this))return _.get(this);let e=p$1.newRoot();_.set(this,e);let t=U;try{U=e,this.schemaFn(e.fieldPathProxy)}finally{U=t}return e}static create(e){return e instanceof r?e:new r(e)}static rootCompile(e){try{return _.clear(),e===void 0?p$1.newRoot():e instanceof r?e.compile():new r(e).compile()}finally{_.clear()}}};function Ot(r){return r instanceof z||typeof r==`function`}function Q$1(r){if(U!==p$1.unwrapFieldPath(r).root)throw new v(1908,!1)}function we(r,e,t){return Q$1(r),p$1.unwrapFieldPath(r).builder.addMetadataRule(e,t),e}var I$1={list(){return{reduce:(r,e)=>e===void 0?r:[...r,e],getInitial:()=>[]}},min(){return{reduce:(r,e)=>r===void 0||e===void 0?r??e:e<r?e:r,getInitial:()=>{}}},max(){return{reduce:(r,e)=>r===void 0||e===void 0?r??e:e>r?e:r,getInitial:()=>{}}},or(){return{reduce:(r,e)=>r||e,getInitial:()=>!1}},and(){return{reduce:(r,e)=>r&&e,getInitial:()=>!0}},override:Ft};function Ft(r){return{reduce:(e,t)=>t,getInitial:()=>r?.()}}var Se=Symbol(`IS_ASYNC_VALIDATION_RESOURCE`);var W$1=class{reducer;create;brand;[Se];constructor(e,t){this.reducer=e,this.create=t}};function E(r){return new W$1(r??I$1.override())}function Re(){return E()}var Te=E(I$1.or());var dt$1=Re();var ut=Re();var lt$1=E(I$1.max());var ct$1=E(I$1.min());var ht$1=E(I$1.list());function m(r,e){if(r===e)return!0;if(!r||!e||r.length!==e.length)return!1;for(let t=0;t<r.length;t++)if(!Object.is(r[t],e[t]))return!1;return!0}function _t$1(r){return r.errors().length>0?`invalid`:r.pending()?`unknown`:`valid`}var fe$1=class{node;constructor(e){this.node=e}rawSyncTreeErrors=Me$2(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]],{equal:m});syncErrors=Me$2(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...Vt(this.node.submitState.submissionErrors())],{equal:m});syncValid=Me$2(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(e,t)=>t&&e.validationState.syncValid(),It));syncTreeErrors=Me$2(()=>this.rawSyncTreeErrors().filter(e=>e.fieldTree===this.node.fieldTree),{equal:m});rawAsyncErrors=Me$2(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]],{equal:m});asyncErrors=Me$2(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(e=>e===`pending`||e.fieldTree===this.node.fieldTree),{equal:m});parseErrors=Me$2(()=>this.node.formFieldBindings().flatMap(e=>e.parseErrors()),{equal:m});errors=Me$2(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(e=>e!==`pending`)],{equal:m});errorSummary=Me$2(()=>{let e=this.node.structure.reduceChildren(this.errors(),(t,n)=>[...n,...t.errorSummary()]);return F(()=>e.sort(Lt$1)),e},{equal:m});pending=Me$2(()=>this.node.structure.reduceChildren(this.asyncErrors().includes(`pending`),(e,t)=>t||e.validationState.pending()));status=Me$2(()=>{if(this.shouldSkipValidation())return`valid`;let e=_t$1(this);return this.node.structure.reduceChildren(e,(t,n)=>n===`invalid`||t.validationState.status()===`invalid`?`invalid`:n===`unknown`||t.validationState.status()===`unknown`?`unknown`:`valid`,t=>t===`invalid`)});valid=Me$2(()=>this.status()===`valid`);invalid=Me$2(()=>this.status()===`invalid`);shouldSkipValidation=Me$2(()=>this.node.hidden()||this.node.disabled()||this.node.readonly()||this.node.structure.isOrphaned())};function Vt(r){return r===void 0?[]:M(r)?r:[r]}function ft(r,e){if(M(r))for(let t of r)t.fieldTree??=e;else r&&(r.fieldTree??=e);return r}function nt$2(r){return r.formField?r.formField.element:r.fieldTree().formFieldBindings().reduce((e,t)=>!e||!t.element?e??t.element:e.compareDocumentPosition(t.element)&Node.DOCUMENT_POSITION_PRECEDING?t.element:e,void 0)}function Lt$1(r,e){let t=nt$2(r),n=nt$2(e);return t===n?0:t===void 0||n===void 0?t===void 0?1:-1:t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var me=E();var ge=class{node;cache=new WeakMap;constructor(e){this.node=e,this.fieldTreeOf=this.fieldTreeOf.bind(this),this.stateOf=this.stateOf.bind(this)}resolve(e){if(!this.cache.has(e)){let t=Me$2(()=>{let n=p$1.unwrapFieldPath(e),i=this.node,s=At();for(;s>0||!i.structure.logic.hasLogic(n.root.builder);)if(s--,i=i.structure.parent,i===void 0)throw new v(1900,!1);for(let o of n.keys)if(i=i.structure.getChild(o),i===void 0)throw new v(1901,!1);return i.fieldTree});this.cache.set(e,t)}return this.cache.get(e)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=Me$2(()=>{let e=this.key();if(!M(F(this.node.structure.parent.value)))throw new v(1906,!1);return Number(e)});fieldTreeOf(e){return this.resolve(e)}stateOf(e){return this.resolve(e)()}valueOf=e=>{let t=this.resolve(e)().value();if(t instanceof Ol)throw new v(1907,!1);return t}};var ye=class{node;metadata=new Map;constructor(e){this.node=e}runMetadataCreateLifecycle(){if(!this.node.logicNode.logic.hasMetadataKeys())return;let e=Oh();e&&zr$1(!1);try{F(()=>he$1(this.node.structure.injector,()=>{for(let t of this.node.logicNode.logic.getMetadataKeys())if(t.create){let n=this.node.logicNode.logic.getMetadata(t),i=t.create(this.node,Me$2(()=>n.compute(this.node.context)));this.metadata.set(t,i)}}))}finally{e&&zr$1(!0)}}get(e){if(this.has(e)&&!this.metadata.has(e)){if(e.create)throw new v(1912,!1);let t=this.node.logicNode.logic.getMetadata(e);this.metadata.set(e,Me$2(()=>t.compute(this.node.context)))}return this.metadata.get(e)}has(e){return this.node.logicNode.logic.hasMetadata(e)}};var Kt={get(r,e,t){if(e===st$1)return!0;let n=r(),i=n.structure.getChild(e);if(i!==void 0)return i.fieldTree;let s=F(n.value);if(M(s)){if(e===`length`)return n.value().length;if(e===Symbol.iterator)return()=>(n.value(),Array.prototype[Symbol.iterator].apply(n.fieldTree))}if(H(s)&&e===Symbol.iterator)return function*(){for(let o in t)yield[o,t[o]]}},getOwnPropertyDescriptor(r,e){let t=F(r().value),n=Reflect.getOwnPropertyDescriptor(t,e);return n&&!n.configurable&&(n.configurable=!0),n},ownKeys(r){let e=F(r().value);return typeof e==`object`&&e!==null?Reflect.ownKeys(e):[]}};function jt(r,e){let t=Me$2(()=>r()[e()]);return t[ie]=r[ie],t.set=n=>{Object.is(F(t),n)||r.update(i=>xt(i,n,e()))},t.update=n=>{t.set(n(F(t)))},t.asReadonly=()=>t,t}function xt(r,e,t){if(M(r)){let n=[...r];return n[t]=e,n}else return m$1(l$1({},r),{[t]:e})}var T=Symbol(``);var mt$1=Me$2(()=>!1);var Y$1=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;_anyChildHasLogic;get injector(){return this._injector??=ye$1.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(e,t,n){this.logic=e,this.node=t,this.createChildNode=n}children(){this.ensureChildrenMap();let e=this.childrenMap();return e===void 0?[]:Array.from(e.byPropertyKey.values()).map(t=>F(t.reader))}materializedChildren(){let e=this.childrenMap();return e===void 0?[]:Array.from(e.byPropertyKey.values()).map(t=>t.node)}_areChildrenMaterialized(){return F(this.childrenMap)!==void 0}ensureChildrenMap(){this._areChildrenMaterialized()||F(()=>{this.childrenMap.update(e=>this.computeChildrenMap(this.value(),e,!0))})}getChild(e){this.ensureChildrenMap();let t=e.toString(),n=F(this.childrenMap)?.byPropertyKey.get(t)?.reader;return n||(n=this.createReader(t)),n()}reduceChildren(e,t,n){let i=this.childrenMap();if(!i)return e;let s=e;for(let o of i.byPropertyKey.values()){if(n?.(s))break;s=t(F(o.reader),s)}return s}destroy(){this.injector.destroy()}createKeyOrOrphanSignals(e,t,n){if(e===`root`)return{keyInParent:gt,isOrphaned:mt$1};let i=this.parent,s=n,o=Me$2(()=>{if(i.structure.isOrphaned())return T;let c=i.structure.childrenMap();if(!c)return T;let y=c.byPropertyKey.get(s);if(y&&y.node===this.node)return s;if(t===void 0)return T;for(let[re,b]of c.byPropertyKey)if(b.node===this.node)return s=re;return T}),d=Me$2(()=>o()===T);return{keyInParent:Me$2(()=>{let c=o();if(c===T)throw t===void 0?new v(-1902,!1):new v(1904,!1);return c}),isOrphaned:d}}createChildrenMap(){return Uo({source:this.value,computation:(e,t)=>this.computeChildrenMap(e,t?.value,!1)})}computeChildrenMap(e,t,n){if(!H(e)||!n&&t===void 0&&!(this._anyChildHasLogic??=this.logic.anyChildHasLogic()))return;t??={byPropertyKey:new Map};let i,s=M(e);t!==void 0&&(s?i=Ut(t,e,this.identitySymbol):i=Ht(t,e));for(let o of Object.keys(e)){let d,u=e[o];if(u===void 0){t.byPropertyKey.has(o)&&(i??=l$1({},t),i.byPropertyKey.delete(o));continue}s&&H(u)&&!M(u)&&(d=u[this.identitySymbol]??=Symbol(``));let c;d&&(t.byTrackingKey?.has(d)||(i??=l$1({},t),i.byTrackingKey??=new Map,i.byTrackingKey.set(d,this.createChildNode(o,d,s))),c=(i??t).byTrackingKey.get(d));let y=t.byPropertyKey.get(o);y===void 0?(i??=l$1({},t),i.byPropertyKey.set(o,{reader:this.createReader(o),node:c??this.createChildNode(o,d,s)})):c&&c!==y.node&&(i??=l$1({},t),y.node=c)}return i??t}createReader(e){return Me$2(()=>this.childrenMap()?.byPropertyKey.get(e)?.node)}};var pe=class extends Y$1{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return Bt$1}get keyInParent(){return gt}isOrphaned=mt$1;childrenMap;constructor(e,t,n,i,s){super(t,e,s),this.fieldManager=n,this.value=i,this.childrenMap=this.createChildrenMap()}};var be=class extends Y$1{logic;parent;root;pathKeys;keyInParent;value;childrenMap;isOrphaned;get fieldManager(){return this.root.structure.fieldManager}constructor(e,t,n,i,s,o){super(t,e,o),this.logic=t,this.parent=n,this.root=this.parent.structure.root;let d=this.createKeyOrOrphanSignals(`child`,i,s);this.isOrphaned=d.isOrphaned,this.keyInParent=d.keyInParent,this.pathKeys=Me$2(()=>[...n.structure.pathKeys(),this.keyInParent()]),this.value=jt(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var Bt$1=Me$2(()=>[]);var gt=Me$2(()=>{throw new v(1905,!1)});function Ut(r,e,t){let n,i=new Set(r.byPropertyKey.keys()),s=r.byTrackingKey&&new Set(r.byTrackingKey.keys());for(let o=0;o<e.length;o++){let d=e[o];i.delete(o.toString()),s&&H(d)&&Object.hasOwn(d,t)&&s.delete(d[t])}if(i.size>0){n??=l$1({},r);for(let o of i)n.byPropertyKey.delete(o)}if(s&&s.size>0){n??=l$1({},r);for(let o of s)n.byTrackingKey.delete(o)}return n}function Ht(r,e){let t;for(let n of r.byPropertyKey.keys())Object.hasOwn(e,n)||(t??=l$1({},r),t.byPropertyKey.delete(n));return t}var ve=class{node;selfSubmitting=Y$2(!1);submissionErrors;constructor(e){this.node=e,this.submissionErrors=Uo({source:this.node.structure.value,computation:()=>[]})}submitting=Me$2(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))};var K$1=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new ge(this)}fieldProxy=new Proxy(()=>this,Kt);pathNode;constructor(e){this.pathNode=e.pathNode,this.fieldAdapter=e.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,e),this.validationState=this.fieldAdapter.createValidationState(this,e),this.nodeState=this.fieldAdapter.createNodeState(this,e),this.metadataState=new ye(this),this.submitState=new ve(this),this.controlValue=this.controlValueSignal(),this.metadataState.runMetadataCreateLifecycle()}focusBoundControl(e){this.getBindingForFocus()?.focus(e)}getBindingForFocus(){return this.formFieldBindings().filter(t=>t.focus!==void 0).reduce(it$2,void 0)||this.structure.children().map(t=>t.getBindingForFocus()).reduce(it$2,void 0)}pendingSync=Uo({source:()=>this.value(),computation:(e,t)=>{t?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){let e=this.metadata(ut)?.();return e?this.metadata(e):void 0}get maxLength(){return this.metadata(ct$1)}get min(){let e=this.metadata(dt$1)?.();return e?this.metadata(e):void 0}get minLength(){return this.metadata(lt$1)}get pattern(){return this.metadata(ht$1)??Gt}get required(){return this.metadata(Te)??$t}metadata(e){return this.metadataState.get(e)}getError(e){return this.errors().find(t=>t.kind===e)}hasMetadata(e){return this.metadataState.has(e)}markAsTouched(e){this.structure.isOrphaned()||F(()=>{this.markAsTouchedInternal(e),this.flushSync()})}markAsTouchedInternal(e){if(!this.structure.isOrphaned()&&!this.validationState.shouldSkipValidation()&&(this.nodeState.markAsTouched(),!e?.skipDescendants))for(let t of this.structure.children())t.markAsTouchedInternal()}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(e){F(()=>this._reset(e))}_reset(e){this.pendingSync()?.abort(),e!==void 0&&this.value.set(e),this.controlValue.rawSet(this.value()),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let t of this.formFieldBindings())t.reset();for(let t of this.structure.materializedChildren())t._reset()}reloadValidation(){F(()=>this._reloadValidation())}_reloadValidation(){let e=this.logicNode.logic.getMetadataKeys();for(let t of e)t[Se]&&this.metadata(t).reload?.();for(let t of this.structure.children())t._reloadValidation()}controlValueSignal(){let e=Uo(this.value);e.rawSet=e.set,e.set=n=>{e.rawSet(n),this.markAsDirty(),this.debounceSync()};let t=e.update;return e.update=n=>{t(n),this.markAsDirty(),this.debounceSync()},e}sync(){this.value.set(this.controlValue())}flushSync(){let e=this.pendingSync();e&&!e.signal.aborted&&(e.abort(),this.sync())}async debounceSync(){let e=F(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(e){let t=new AbortController,n=e(t.signal);if(n&&(this.pendingSync.set(t),await n,t.signal.aborted))return}this.structure.isOrphaned()||this.sync()}static newRoot(e,t,n,i){return i.newRoot(e,t,n,i)}createStructure(e){return e.kind===`root`?new pe(this,e.logic,e.fieldManager,e.value,this.newChild.bind(this)):new be(this,e.logic,e.parent,e.identityInParent,e.initialKeyInParent,this.newChild.bind(this))}newChild(e,t,n){let i,s;return n?(i=this.pathNode.getChild(R),s=this.structure.logic.getChild(R)):(i=this.pathNode.getChild(e),s=this.structure.logic.getChild(e)),this.fieldAdapter.newChild({kind:`child`,parent:this,pathNode:i,logic:s,initialKeyInParent:e,identityInParent:t,fieldAdapter:this.fieldAdapter})}};var Gt=Me$2(()=>[]);var $t=Me$2(()=>!1);function it$2(r,e){return r?e&&r.element.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e:r:e}var Ne=class{node;selfTouched=Y$2(!1);selfDirty=Y$2(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=Y$2([]);constructor(e){this.node=e}dirty=Me$2(()=>{let e=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(e,(t,n)=>n||t.nodeState.dirty(),tt$1)});touched=Me$2(()=>{let e=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(e,(t,n)=>n||t.nodeState.touched(),tt$1)});disabledReasons=Me$2(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)],{equal:m});disabled=Me$2(()=>!!this.disabledReasons().length);readonly=Me$2(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=Me$2(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=Me$2(()=>{let e=this.node.structure.parent;return e?`${e.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=Me$2(()=>{if(this.node.logicNode.logic.hasMetadata(me)){let t=this.node.logicNode.logic.getMetadata(me).compute(this.node.context);if(t)return n=>t(this.node.context,n)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=Me$2(()=>this.hidden()||this.disabled()||this.readonly())};var Me=class{newRoot(e,t,n,i){return new K$1({kind:`root`,fieldManager:e,value:t,pathNode:n,logic:n.builder.build(),fieldAdapter:i})}newChild(e){return new K$1(e)}createNodeState(e){return new Ne(e)}createValidationState(e){return new fe$1(e)}createStructure(e,t){return e.createStructure(t)}};var Ee=class{injector;rootName;submitOptions;constructor(e,t,n){this.injector=e,this.rootName=t??`${this.injector.get(Co)}.form${qt++}`,this.submitOptions=n}structures=new Set;createFieldManagementEffect(e){xi(()=>{let t=new Set;this.markStructuresLive(e,t);for(let n of this.structures)t.has(n)||(this.structures.delete(n),F(()=>n.destroy()))},{injector:this.injector})}markStructuresLive(e,t){t.add(e);for(let n of e.children())this.markStructuresLive(n.structure,t)}};var qt=0;var yt=new D$3(``);function zt(r){let e,t,n;return r.length===3?[e,t,n]=r:r.length===2?Ot(r[1])?[e,t]=r:[e,n]=r:[e]=r,[e,t,n]}function Wt(...r){let[e,t,n]=zt(r),i=n?.injector??g(ye$1),s=he$1(i,()=>z.rootCompile(t)),o=new Ee(i,n?.name,n?.submission),d=n?.adapter??new Me,u=K$1.newRoot(o,e,s,d);o.createFieldManagementEffect(u.structure);let{experimentalWebMcpTool:c}=n??{};if(c){let y=he$1(i,()=>g(yt,{optional:!0}));y&&he$1(i,()=>y(u.fieldTree,{name:c.name,description:c.description}))}return u.fieldTree}var X=class{kind=`compat`;control;fieldTree;context;message;constructor({context:e,kind:t,control:n}){this.context=e,this.kind=t,this.control=n}};function pt$1(r){if(r.length===0)return null;let e={};for(let t of r)e[t.kind]=t instanceof X?t.context:t;return e}function bt(r,e){return r===null?[]:Object.entries(r).map(([t,n])=>new X({context:n,kind:t,control:e}))}var Yt$1=new D$3(``);function zr(r,e){Q$1(r);let t=p$1.unwrapFieldPath(r),n;typeof e==`function`||typeof e==`string`?n=e:n=e?.when,t.builder.addDisabledReasonRule(i=>{let s=!0;return typeof n==`string`?s=n:n&&(s=n(i)),typeof s==`string`?{fieldTree:i.fieldTree,message:s}:s?{fieldTree:i.fieldTree}:void 0})}function J$1(r,e){return r instanceof Function?r(e):r}function wt(r){return typeof r==`number`?isNaN(r):r===``||r===!1||r==null}function vt(r){return r===void 0?[]:Array.isArray(r)?r:[r]}function St(r,e){Q$1(r),p$1.unwrapFieldPath(r).builder.addSyncErrorRule(n=>ft(e(n),n.fieldTree))}function Xt(r){return new De(r)}function Zt(r){return new Ce(r)}var j=class{__brand=void 0;kind=``;fieldTree;message;constructor(e){e&&Object.assign(this,e)}};var De=class extends j{kind=`required`};var Ce=class extends j{kind=`email`};var ee$1=class extends j{kind=`parse`};var Qt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;function Wr(r,e){St(r,t=>{if(!(e?.when&&!e.when(t))&&!wt(t.value())&&!Qt.test(t.value()))return e?.error?J$1(e.error,t):Zt({message:J$1(e?.message,t)})})}function Yr(r,e){let t=we(r,E(),n=>e?.when?e.when(n):!0);we(r,Te,({state:n})=>n.metadata(t)()),St(r,n=>{if(n.state.metadata(t)()&&wt(n.value()))return e?.error?J$1(e.error,n):Xt({message:J$1(e?.message,n)})})}function Jt(r,e,t){let n=Uo({source:r,computation:()=>[],equal:m}),i=o=>{let d=t(o);n.set(vt(d.error)),d.value!==void 0&&e(d.value),n.set(vt(d.error))},s=()=>{n.set([])};return{errors:n.asReadonly(),setRawValue:i,reset:s}}var Ae=class{field;constructor(e){this.field=e}control=this;get value(){return this.field().controlValue()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return pt$1(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return`DISABLED`;if(this.field().valid())return`VALID`;if(this.field().invalid())return`INVALID`;if(this.field().pending())return`PENDING`;throw new v(1910,!1)}valueAccessor=null;hasValidator(e){return e===Jp.required?this.field().required():!1}updateValueAndValidity(){}};var Ie={disabled:`disabled`,disabledReasons:`disabledReasons`,dirty:`dirty`,errors:`errors`,hidden:`hidden`,invalid:`invalid`,max:`max`,maxLength:`maxLength`,min:`min`,minLength:`minLength`,name:`name`,pattern:`pattern`,pending:`pending`,readonly:`readonly`,required:`required`,touched:`touched`};var er=(()=>{let r={};for(let e of Object.keys(Ie))r[Ie[e]]=e;return r})();function Pe$1(r,e){return r[er[e]]?.()}var ke=Object.values(Ie);function te$1(){return{}}function w(r,e,t){return r[e]!==t?(r[e]=t,!0):!1}function tr(r,e,t){let n;if(Rt(r)&&t.isBadInput(r))return{error:new ee$1};switch(r.type){case`checkbox`:return{value:r.checked};case`number`:case`range`:case`datetime-local`:if(n=F(e),typeof n==`number`||n===null)return{value:r.value===``?null:r.valueAsNumber};break;case`date`:case`month`:case`time`:case`week`:if(n=F(e),n===null||n instanceof Date)return{value:r.valueAsDate};if(typeof n==`number`)return{value:r.valueAsNumber};break}if(r.tagName===`INPUT`&&r.type===`text`&&(n??=F(e),typeof n==`number`||n===null)){if(r.value===``)return{value:null};let i=Number(r.value);return Number.isNaN(i)?{error:new ee$1}:{value:i}}return{value:r.value}}function Nt(r,e){switch(r.type){case`checkbox`:r.checked=e;return;case`radio`:r.checked=e===r.value;return;case`number`:case`range`:case`datetime-local`:if(typeof e==`number`){Mt(r,e);return}else if(e===null){r.value=``;return}break;case`date`:case`month`:case`time`:case`week`:if(e===null||e instanceof Date){r.valueAsDate=e;return}else if(typeof e==`number`){Mt(r,e);return}}if(r.tagName===`INPUT`&&r.type===`text`){if(typeof e==`number`){r.value=isNaN(e)?``:String(e);return}if(e===null){r.value=``;return}}r.value=e}function Mt(r,e){isNaN(e)?r.value=``:r.valueAsNumber=e}function Rt(r){return r.tagName===`INPUT`}function rr(r){return r.type===`date`||r.type===`datetime-local`||r.type===`month`||r.type===`time`||r.type===`week`}function nr(r,e){let t=r.getUTCFullYear(),n=String(r.getUTCMonth()+1).padStart(2,`0`);if(e===`month`)return`${t}-${n}`;return`${t}-${n}-${String(r.getUTCDate()).padStart(2,`0`)}`}function Tt(r,e,t){return e instanceof Date&&(r===`min`||r===`max`)&&(t===`date`||t===`month`)?nr(e,t):e}function ir(r,e){r.listenToCustomControlModel(n=>e.state().controlValue.set(n)),r.listenToCustomControlOutput(`touch`,()=>e.state().markAsTouched()),e.registerAsBinding(r.customControl);let t=te$1();return()=>{let n=e.state(),i=n.controlValue();w(t,`controlValue`,i)&&r.setCustomControlModelInput(i);for(let s of ke){let o;if(s===`errors`?o=e.errors():o=Pe$1(n,s),w(t,s,o)&&(r.setInputOnDirectives(s,o),e.elementAcceptsNativeProperty(s)&&!r.customControlHasInput(s))){let d=Tt(s,o,e.nativeFormElement.type);pN(e.renderer,e.nativeFormElement,s,d)}}}}function sr(r){return typeof r==`object`&&r!==null}function or(r,e){let t=te$1();e.controlValueAccessor.registerOnChange(i=>{t.controlValue=i,e.state().controlValue.set(i)}),e.controlValueAccessor.registerOnTouched(()=>e.state().markAsTouched());let n=e.injector.get(Jo,null,{optional:!0,self:!0});if(n){let i;for(let u of n)sr(u)&&u.registerOnValidatorChange&&(i??=Y$2(0),u.registerOnValidatorChange(()=>{i.update(c=>c+1)}));let s=n.map(u=>typeof u==`function`?u:u.validate.bind(u)),o=Jp.compose(s),d=Me$2(()=>{i?.();return bt(o?o(e.interopNgControl.control):null,e.interopNgControl.control)});e.parseErrorsSource.set(d)}return e.registerAsBinding({reset:()=>{let i=e.state().value();t.controlValue=i,F(()=>e.controlValueAccessor.writeValue(i))}}),()=>{let i=e.state(),s=i.controlValue();w(t,`controlValue`,s)&&F(()=>e.controlValueAccessor.writeValue(s));for(let o of ke){let d=Pe$1(i,o);if(w(t,o,d)){let u=r.setInputOnDirectives(o,d,o===`name`?ar:void 0);o===`disabled`&&e.controlValueAccessor.setDisabledState?F(()=>e.controlValueAccessor.setDisabledState(d)):!u&&e.elementAcceptsNativeProperty(o)&&pN(e.renderer,e.nativeFormElement,o,d)}}}}function ar(r){return r==null}function dr(r,e,t){if(typeof MutationObserver!=`function`)return;let n=new MutationObserver(i=>{i.some(s=>ur(s))&&e()});n.observe(r,{attributes:!0,attributeFilter:[`value`],characterData:!0,childList:!0,subtree:!0}),t.onDestroy(()=>n.disconnect())}function ur(r){if(r.type===`childList`||r.type===`characterData`){if(r.target instanceof Comment)return!1;for(let e of r.addedNodes)if(!(e instanceof Comment))return!0;for(let e of r.removedNodes)if(!(e instanceof Comment))return!0;return!1}return r.type===`attributes`&&r.target instanceof HTMLOptionElement}function lr(r,e,t,n){let i=!1,s=e.nativeFormElement,o=Jt(()=>e.state().value(),u=>e.state().controlValue.set(u),u=>tr(s,e.state().value,n));t.set(o.errors),e.onReset=()=>{o.reset();let u=e.state().value();d.controlValue=u,Nt(s,u)},r.listenToDom(`input`,()=>o.setRawValue(void 0)),r.listenToDom(`blur`,()=>e.state().markAsTouched()),Rt(s)&&rr(s)&&n.watchValidity(e.destroyRef,s,()=>o.setRawValue(void 0)),e.registerAsBinding(),s.tagName===`SELECT`&&dr(s,()=>{i&&(s.value=e.state().controlValue())},e.destroyRef);let d=te$1();return()=>{let u=e.state();for(let b of ke){let ne=Pe$1(u,b);if(w(d,b,ne)&&(r.setInputOnDirectives(b,ne),e.elementAcceptsNativeProperty(b))){let Ct=Tt(b,ne,s.type);pN(e.renderer,s,b,Ct)}}let c=u.controlValue(),y=w(d,`controlValue`,c),re=s.type===`radio`&&w(d,`radioValue`,s.value);(y||re)&&Nt(s,c),i=!0}}var Dt=(()=>{class r{static ɵfac=function(n){return new(n||r)};static ɵprov=_$1({token:r,factory:t=>cr.ɵfac(t),providedIn:`root`})}return r})();var cr=(()=>{class r extends Dt{document=g(J$2);cspNonce=g(Ri,{optional:!0});injectedStyles=new WeakMap;watchValidity(t,n,i){let s=n.getRootNode();this.injectedStyles.has(s)||this.injectedStyles.set(s,this.createTransitionStyle(s));let o=d=>{let u=d;(u.animationName===`ng-valid`||u.animationName===`ng-invalid`)&&i()};n.addEventListener(`animationstart`,o),t.onDestroy(()=>{n.removeEventListener(`animationstart`,o)})}isBadInput(t){return t.validity?.badInput??!1}createTransitionStyle(t){let n=this.document.createElement(`style`);return this.cspNonce&&(n.nonce=this.cspNonce),n.textContent=`
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `,t.nodeType===9?t.head?.appendChild(n):t.appendChild(n),n}ngOnDestroy(){this.injectedStyles.get(this.document)?.remove()}static ɵfac=(()=>{let t;return function(i){return(t||(t=Gv(r)))(i||r)}})();static ɵprov=_$1({token:r,factory:r.ɵfac})}return r})();var hr=Symbol();var Et=new D$3(``);var Xr=(()=>{class r{field=Xc.required({alias:`formField`});state=Me$2(()=>this.field()());renderer=g(Or);destroyRef=g(De$2);injector=g(ye$1);element=g(dn$1).nativeElement;elementIsNativeFormElement=uN(this.element);elementAcceptsTextualValues=rB(this.element);_elementAcceptsMinMax;nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=t=>this.element.focus(t);controlValueAccessors=g(Qo,{optional:!0,self:!0});config=g(Yt$1,{optional:!0});validityMonitor=g(Dt);parseErrorsSource=Y$2(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new Ae(this.state)}parseErrors=Me$2(()=>this.parseErrorsSource()?.().map(t=>m$1(l$1({},t),{fieldTree:F(this.state).fieldTree,formField:this}))??[],{equal:m});errors=Me$2(()=>this.state().errors().filter(t=>!t.formField||t.formField===this),{equal:m});isFieldBinding=!1;resetter=()=>{};parseErrorsResetCallback;setParseErrors(t){this.parseErrorsSource.set(t)}set onReset(t){this.parseErrorsResetCallback=t}get onReset(){return this.parseErrorsResetCallback}get controlValueAccessor(){return!this.controlValueAccessors||this.controlValueAccessors.length===0?this.interopNgControl?.valueAccessor??void 0:TN(this.interopNgControl,this.controlValueAccessors)??void 0}installClassBindingEffect(){let t=Object.entries(this.config?.classes??{}).map(([i,s])=>[i,Me$2(()=>s(this))]);if(t.length===0)return;let n=te$1();$z({write:()=>{for(let[i,s]of t){let o=s();w(n,i,o)&&(o?this.renderer.addClass(this.element,i):this.renderer.removeClass(this.element,i))}}},{injector:this.injector})}focus(t){this.focuser(t)}reset(){this.resetter(),this.parseErrorsResetCallback?.(this.state().value())}registerAsBinding(t){if(this.isFieldBinding)throw new v(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),t?.focus&&(this.focuser=n=>t.focus(n)),t?.reset&&(this.resetter=()=>t.reset()),xi(n=>{let i=this.state();i.nodeState.formFieldBindings.update(s=>[...s,this]),n(()=>{i.nodeState.formFieldBindings.update(s=>s.filter(o=>o!==this))})},{injector:this.injector})}[hr];ɵngControlCreate(t){if(!t.hasPassThrough)if(this.controlValueAccessor)this.ɵngControlUpdate=or(t,this);else if(t.customControl)this.ɵngControlUpdate=ir(t,this);else if(this.elementIsNativeFormElement)this.ɵngControlUpdate=lr(t,this,this.parseErrorsSource,this.validityMonitor);else throw new v(1914,!1)}ɵngControlUpdate;elementAcceptsNativeProperty(t){if(!this.elementIsNativeFormElement)return!1;switch(t){case`min`:case`max`:return this._elementAcceptsMinMax??=iB(this.element);case`minLength`:case`maxLength`:return this.elementAcceptsTextualValues;case`disabled`:case`required`:case`readonly`:case`name`:return!0;default:return!1}}static ɵfac=function(n){return new(n||r)};static ɵdir=qn({type:r,selectors:[[``,`formField`,``]],inputs:{field:[1,`formField`,`field`]},exportAs:[`formField`],features:[_N([{provide:Et,useExisting:r},{provide:rr$1,useFactory:()=>g(r).interopNgControl},{provide:gN$1,useFactory:()=>g(Et,{self:!0})}]),B_(`formField`)]})}return r})();
/*! Bundled license information:

@angular/forms/fesm2022/_validation_errors-chunk.mjs:
@angular/forms/fesm2022/signals.mjs:
(**
* @license Angular v22.1.5
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*)
*/
var J=(()=>{class s{static ɵfac=function(t){return new(t||s)};static ɵcmp=fh({type:s,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(t,i){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2})}return s})();var Q={passive:!0};var $=(()=>{class s{_platform=g(Ee$2);_ngZone=g(Ie$2);_renderer=g(xr).createRenderer(null,null);_styleLoader=g(Ut$1);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return me$1;this._styleLoader.load(J);let t=Wn$1(e),i=this._monitoredElements.get(t);if(i)return i.subject;let r=new te$2,o=`cdk-text-field-autofilled`,a=d=>{d.animationName===`cdk-text-field-autofill-start`&&!t.classList.contains(o)?(t.classList.add(o),this._ngZone.run(()=>r.next({target:d.target,isAutofilled:!0}))):d.animationName===`cdk-text-field-autofill-end`&&t.classList.contains(o)&&(t.classList.remove(o),this._ngZone.run(()=>r.next({target:d.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(t.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(t,`animationstart`,a,Q)));return this._monitoredElements.set(t,{subject:r,unlisten:l}),r}stopMonitoring(e){let t=Wn$1(e),i=this._monitoredElements.get(t);i&&(i.unlisten(),i.subject.complete(),t.classList.remove(`cdk-text-field-autofill-monitored`),t.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static ɵfac=function(t){return new(t||s)};static ɵprov=K$2({token:s,factory:s.ɵfac})}return s})();var W=(()=>{class s{static ɵfac=function(t){return new(t||s)};static ɵmod=Vr({type:s});static ɵinj=Rn$1({})}return s})();var Y=new D$3(`MAT_INPUT_VALUE_ACCESSOR`);var ee=[`button`,`checkbox`,`file`,`hidden`,`image`,`radio`,`range`,`reset`,`submit`];var te=new D$3(`MAT_INPUT_CONFIG`);var Pe=(()=>{class s{_elementRef=g(dn$1);_platform=g(Ee$2);ngControl=g(rr$1,{optional:!0,self:!0});_autofillMonitor=g($);_ngZone=g(Ie$2);_formField=g(vt$1,{optional:!0});_renderer=g(Or);_uid=g(Kt$2).getId(`mat-input-`);_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=g(te,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new te$2;controlType=`mat-input`;autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=aG(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Jp.required)??!1}set required(e){this._required=aG(e)}_required;get type(){return this._type}set type(e){this._type=e||`text`,this._validateType(),!this._isTextarea&&_F().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type=`text`;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=aG(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=[`date`,`datetime`,`datetime-local`,`month`,`time`,`week`].filter(e=>_F().has(e));constructor(){let e=g(ON,{optional:!0}),t=g(wN$1,{optional:!0}),i=g(uae),r=g(Y,{optional:!0,self:!0}),o=g(Et,{optional:!0,self:!0}),a=this._elementRef.nativeElement,l=a.nodeName.toLowerCase();r?Sr(r.value)?this._signalBasedValueAccessor=r:this._inputValueAccessor=r:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,`keyup`,this._iOSKeyupListener)}),this._errorStateTracker=new rO(i,o||this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=l===`select`,this._isTextarea=l===`textarea`,this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?`mat-native-select-multiple`:`mat-native-select`),this._signalBasedValueAccessor&&xi(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type===`number`?(t.type=`text`,t.setSelectionRange(0,0),t.type=`number`):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute(`placeholder`,e):t.removeAttribute(`placeholder`)}}_getPlaceholder(){return this.placeholder||null}_validateType(){ee.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(t){return new(t||s)};static ɵdir=qn({type:s,selectors:[[`input`,`matInput`,``],[`textarea`,`matInput`,``],[`select`,`matNativeControl`,``],[`input`,`matNativeControl`,``],[`textarea`,`matNativeControl`,``]],hostAttrs:[1,`mat-mdc-input-element`],hostVars:21,hostBindings:function(t,i){t&1&&$c(`focus`,function(){return i._focusChanged(!0)})(`blur`,function(){return i._focusChanged(!1)})(`input`,function(){return i._onInput()}),t&2&&(AD(`id`,i.id)(`disabled`,i.disabled&&!i.disabledInteractive)(`required`,i.required),Vc(`name`,i.name||null)(`readonly`,i._getReadonlyAttribute())(`aria-disabled`,i.disabled&&i.disabledInteractive?`true`:null)(`aria-invalid`,i.empty&&i.required?null:i.errorState)(`aria-required`,i.required)(`id`,i.id),$D(`mat-input-server`,i._isServer)(`mat-mdc-form-field-textarea-control`,i._isInFormField&&i._isTextarea)(`mat-mdc-form-field-input-control`,i._isInFormField)(`mat-mdc-input-disabled-interactive`,i.disabledInteractive)(`mdc-text-field__input`,i._isInFormField)(`mat-mdc-native-select-inline`,i._isInlineSelect()))},inputs:{disabled:`disabled`,id:`id`,placeholder:`placeholder`,name:`name`,required:`required`,type:`type`,errorStateMatcher:`errorStateMatcher`,userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],value:`value`,readonly:`readonly`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,is]},exportAs:[`matInput`],features:[_N([{provide:gt$1,useExisting:s}]),Gn$1]})}return s})();var Be=(()=>{class s{static ɵfac=function(t){return new(t||s)};static ɵmod=Vr({type:s});static ɵinj=Rn$1({imports:[Kt$1,Kt$1,W,et$3]})}return s})();var $e=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`];var et$1=[`mat-icon, [matMenuItemIcon]`,`*`];function tt(a,Ue){a&1&&(_m(),Ic(0,`svg`,2),Hc(1,`polygon`,3),yh())}var nt$1=[`*`];function it$1(a,Ue){if(a&1){let e=PM();Dh(0,`div`,0),OD(`click`,function(){gm(e);return mm(VM().closed.emit(`click`))})(`animationstart`,function(n){gm(e);return mm(VM()._onAnimationStart(n.animationName))})(`animationend`,function(n){gm(e);return mm(VM()._onAnimationDone(n.animationName))})(`animationcancel`,function(n){gm(e);return mm(VM()._onAnimationDone(n.animationName))}),Dh(1,`div`,1),zM(2),Eh()()}if(a&2){let e=VM();oN(e._classList),$D(`mat-menu-panel-animations-disabled`,e._animationsDisabled)(`mat-menu-panel-exit-animation`,e._panelAnimationState===`void`)(`mat-menu-panel-animating`,e._isAnimating()),AD(`id`,e.panelId),Vc(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e.ariaLabelledby||null)(`aria-describedby`,e.ariaDescribedby||null)}}var q=new D$3(`MAT_MENU_PANEL`);var G=(()=>{class a{_elementRef=g(dn$1);_document=g(J$2);_focusMonitor=g(pa);_parentMenu=g(q,{optional:!0});_changeDetectorRef=g(Bo);role=`menuitem`;disabled=!1;disableRipple=!1;_hovered=new te$2;_focused=new te$2;_highlighted=!1;_triggersSubmenu=!1;constructor(){g(Ut$1).load($d),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons`);for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||a)};static ɵcmp=fh({type:a,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:8,hostBindings:function(t,n){t&1&&$c(`click`,function(s){return n._checkDisabled(s)})(`mouseenter`,function(){return n._handleMouseEnter()}),t&2&&(Vc(`role`,n.role)(`tabindex`,n._getTabIndex())(`aria-disabled`,n.disabled)(`disabled`,n.disabled||null),$D(`mat-mdc-menu-item-highlighted`,n._highlighted)(`mat-mdc-menu-item-submenu-trigger`,n._triggersSubmenu))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,is],disableRipple:[2,`disableRipple`,`disableRipple`,is]},exportAs:[`matMenuItem`],ngContentSelectors:et$1,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(t,n){t&1&&($M($e),zM(0),Ic(1,`span`,0),zM(2,1),yh(),Hc(3,`div`,1),bM(4,tt,2,0,`:svg:svg`,2)),t&2&&(aT(3),_D(`matRippleDisabled`,n.disableRipple||n.disabled)(`matRippleTrigger`,n._getHostElement()),aT(),SM(n._triggersSubmenu?4:-1))},dependencies:[Xp],encapsulation:2})}return a})();var at$1=new D$3(`MatMenuContent`);var st=new D$3(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var K=`_mat-menu-enter`;var D=`_mat-menu-exit`;var I=(()=>{class a{_elementRef=g(dn$1);_changeDetectorRef=g(Bo);_injector=g(ye$1);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=Ft$1();_allItems;_directDescendantItems=new dc;_classList={};_panelAnimationState=`void`;_animationDone=new te$2;_isAnimating=Y$2(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,n=l$1({},this._classList);t&&t.length&&t.split(` `).forEach(i=>{n[i]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(i=>{n[i]=!0}),this._elementRef.nativeElement.className=``),this._classList=n}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new Fe;close=this.closed;panelId=g(Kt$2).getId(`mat-menu-panel-`);constructor(){let e=g(st);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new zp(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(_l(this._directDescendantItems),Pe$3(e=>lC(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState===`enter`&&t.activeItem?._hasFocus()){let n=e.toArray(),i=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[i]&&!n[i].disabled?t.setActiveItem(i):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(_l(this._directDescendantItems),Pe$3(t=>lC(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:zn$1(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&n.setFocusOrigin(`keyboard`),n.onKeydown(e);return}}focusFirstItem(e=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Rc(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=m$1(l$1({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===D;(t||e===K)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===K||e===D)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(D),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?K:D)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(_l(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||a)};static ɵcmp=fh({type:a,selectors:[[`mat-menu`]],contentQueries:function(t,n,i){if(t&1&&Ch(i,at$1,5)(i,G,5)(i,G,4),t&2){let s;LD(s=FD())&&(n.lazyContent=s.first),LD(s=FD())&&(n._allItems=s),LD(s=FD())&&(n.items=s)}},viewQuery:function(t,n){if(t&1&&PD(No,5),t&2){let i;LD(i=FD())&&(n.templateRef=i.first)}},hostVars:3,hostBindings:function(t,n){t&2&&Vc(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,is],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,e=>e==null?null:is(e)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[_N([{provide:q,useExisting:a}])],ngContentSelectors:nt$1,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(t,n){t&1&&($M(),wD(0,it$1,3,12,`ng-template`))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--%NS%mat-menu-item-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-menu-item-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-menu-item-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-menu-item-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-menu-item-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--%NS%mat-menu-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-menu-container-color, var(--%NS%mat-sys-surface-container));
  box-shadow: var(--%NS%mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--%NS%mat-menu-divider-color, var(--%NS%mat-sys-surface-variant));
  margin-bottom: var(--%NS%mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--%NS%mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--%NS%mat-menu-item-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--%NS%mat-menu-item-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--%NS%mat-menu-item-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--%NS%mat-menu-item-spacing, 12px);
  height: var(--%NS%mat-menu-item-icon-size, 24px);
  width: var(--%NS%mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--%NS%mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--%NS%mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--%NS%mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--%NS%mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--%NS%mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--%NS%mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2})}return a})();var ot=new D$3(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let a=g(ye$1);return()=>D_(a)}});var u$1=new WeakMap;var rt$1=(()=>{class a{_canHaveBackdrop;_element=g(dn$1);_viewContainerRef=g(hn);_menuItemInstance=g(G,{optional:!0,self:!0});_dir=g(yi,{optional:!0});_focusMonitor=g(pa);_ngZone=g(Ie$2);_injector=g(ye$1);_scrollStrategy=g(ot);_changeDetectorRef=g(Bo);_animationsDisabled=Ft$1();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=oe.EMPTY;_menuCloseSubscription=oe.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t===`click`||t===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=g(q,{optional:!0});this._parentMaterialMenu=t instanceof I?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&u$1.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=u$1.get(t);u$1.set(t,this),n&&n!==this&&n._closeMenu();let i=this._createOverlay(t),s=i.getConfig(),r=s.positionStrategy;this._setPosition(t,r),this._canHaveBackdrop?s.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:s.hasBackdrop=t.hasBackdrop??!1,i.hasAttached()||(i.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof I&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(ui(t.close)).subscribe(()=>{r.withLockedPosition(!1).reapplyLastPosition(),r.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof I&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(rt$4(1)).subscribe(()=>{t.detach(),u$1.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&u$1.delete(n),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=co(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof I&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new Ui({positionStrategy:L_(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let i=n.connectionPair.overlayX===`start`?`after`:`before`,s=n.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(i,s)})})}_setPosition(e,t){let[n,i]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[s,r]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[P,R]=[s,r],[T,N]=[n,i],c=0;if(this._triggersSubmenu()){if(N=n=e.xPosition===`before`?`start`:`end`,i=T=n===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let Z=this._parentMaterialMenu.items.first;this._parentInnerPadding=Z?Z._getHostElement().offsetTop:0}c=s===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(P=s===`top`?`bottom`:`top`,R=r===`top`?`bottom`:`top`);t.withPositions([{originX:n,originY:P,overlayX:T,overlayY:s,offsetY:c},{originX:i,originY:P,overlayX:N,overlayY:s,offsetY:c},{originX:n,originY:R,overlayX:T,overlayY:r,offsetY:-c},{originX:i,originY:R,overlayX:N,overlayY:r,offsetY:-c}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments();return lC(e,this._parentMaterialMenu?this._parentMaterialMenu.closed:O(),this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(xe(s=>this._menuOpen&&s!==this._menuItemInstance)):O(),t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new ki(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return u$1.get(e)===this}_triggerIsAriaDisabled(){return is(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){Xi()};static ɵdir=qn({type:a})}return a})();var Bt=(()=>{class a extends rt$1{_cleanupTouchstart;_hoverSubscription=oe.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new Fe;onMenuOpen=this.menuOpened;menuClosed=new Fe;onMenuClose=this.menuClosed;constructor(){super(!0);let e=g(Or);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{da(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){la(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||a)};static ɵdir=qn({type:a,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,n){t&1&&$c(`click`,function(s){return n._handleClick(s)})(`mousedown`,function(s){return n._handleMousedown(s)})(`keydown`,function(s){return n._handleKeydown(s)}),t&2&&Vc(`aria-haspopup`,n.menu?`menu`:null)(`aria-expanded`,n.menuOpen)(`aria-controls`,n.menuOpen?n.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[yD]})}return a})();var Lt=(()=>{class a{static ɵfac=function(t){return new(t||a)};static ɵmod=Vr({type:a});static ɵinj=Rn$1({imports:[_a,lo,et$3,Mp]})}return a})();var l=/^\+?(\d[\d\s\-\(\)]{5,13}\d)$/;var p=`@place.tech`;function c(e){p=e}function u(e,o){if(!e)throw Error(`No user passed`);return Wt(Y$2({name:e.name||``,email:e.email||``,organisation:e.organisation||``,phone:e.phone||``,assistance_required:e.assistance_required||!1,visit_expected:e.visit_expected??!0}),t=>{Yr(t.name),Yr(t.email),Wr(t.email),Yr(t.organisation),St(t.phone,({value:i})=>i()&&!l.test(i())?{kind:`pattern`}:void 0)},o?{injector:o}:void 0)}var f=(()=>{class t{constructor(){this._locale=g(Ey)}transform(e,r={},s){return this._locale.get(e,r,s)||e}static{this.ɵfac=function(r){return new(r||t)}}static{this.ɵpipe=Hr({name:`translate`,type:t,pure:!1})}}return t})();var nt=[`tooltip`];var at=20;var rt=new D$3(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=g(ye$1);return()=>D_(n,{scrollThrottle:at})}});var lt=new D$3(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var et=`tooltip-panel`;var ht={passive:!0};var dt=8;var ct=8;var pt=24;var _t=200;var mt=(()=>{class n{_elementRef=g(dn$1);_ngZone=g(Ie$2);_platform=g(Ee$2);_ariaDescriber=g(QV);_focusMonitor=g(pa);_dir=g(yi);_injector=g(ye$1);_viewContainerRef=g(hn);_mediaMatcher=g(ml);_document=g(J$2);_renderer=g(Or);_animationsDisabled=Ft$1();_defaultOptions=g(lt,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=it;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=aG(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){let e=aG(t);this._disabled!==e&&(this._disabled=e,e?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=bi(t)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=bi(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(t){let e=this._message;this._message=t!=null?String(t).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(e)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new te$2;_isDestroyed=!1;constructor(){let t=this._defaultOptions;t&&(this._showDelay=t.showDelay,this._hideDelay=t.hideDelay,t.position&&(this.position=t.position),t.positionAtOrigin&&(this.positionAtOrigin=t.positionAtOrigin),t.touchGestures&&(this.touchGestures=t.touchGestures),t.tooltipClass&&(this.tooltipClass=t.tooltipClass)),this._viewportMargin=dt}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(ui(this._destroyed)).subscribe(t=>{t?t===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let t=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(e=>e()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(t,this.message,`tooltip`),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,e){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let i=this._createOverlay(e);this._detach(),this._portal=this._portal||new Pi(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=i.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(ui(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(t)}hide(t=this.hideDelay){let e=this._tooltipInstance;e&&(e.isVisible()?e.hide(t):(e._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let s=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&s._origin instanceof dn$1)return this._overlayRef;this._detach()}let e=this._injector.get(sa).getAncestorScrollContainers(this._elementRef),i=`${this._cssClassPrefix}-${et}`,o=L_(this._injector,this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(e).withPopoverLocation(`global`);return o.positionChanges.pipe(ui(this._destroyed)).subscribe(s=>{this._updateCurrentPositionClass(s.connectionPair),this._tooltipInstance&&s.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=co(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,i]:i,scrollStrategy:this._injector.get(rt)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(ui(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(ui(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(ui(this._destroyed)).subscribe(s=>{s.preventDefault(),s.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(ui(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){let e=t.getConfig().positionStrategy,i=this._getOrigin(),o=this._getOverlayPosition();e.withPositions([this._addOffset(l$1(l$1({},i.main),o.main)),this._addOffset(l$1(l$1({},i.fallback),o.fallback))])}_addOffset(t){let e=ct,i=!this._dir||this._dir.value==`ltr`;return t.originY===`top`?t.offsetY=-e:t.originY===`bottom`?t.offsetY=e:t.originX===`start`?t.offsetX=i?-e:e:t.originX===`end`&&(t.offsetX=i?e:-e),t}_getOrigin(){let t=!this._dir||this._dir.value==`ltr`,e=this.position,i;e==`above`||e==`below`?i={originX:`center`,originY:e==`above`?`top`:`bottom`}:e==`before`||e==`left`&&t||e==`right`&&!t?i={originX:`start`,originY:`center`}:(e==`after`||e==`right`&&t||e==`left`&&!t)&&(i={originX:`end`,originY:`center`});let{x:o,y:s}=this._invertPosition(i.originX,i.originY);return{main:i,fallback:{originX:o,originY:s}}}_getOverlayPosition(){let t=!this._dir||this._dir.value==`ltr`,e=this.position,i;e==`above`?i={overlayX:`center`,overlayY:`bottom`}:e==`below`?i={overlayX:`center`,overlayY:`top`}:e==`before`||e==`left`&&t||e==`right`&&!t?i={overlayX:`end`,overlayY:`center`}:(e==`after`||e==`right`&&t||e==`left`&&!t)&&(i={overlayX:`start`,overlayY:`center`});let{x:o,y:s}=this._invertPosition(i.overlayX,i.overlayY);return{main:i,fallback:{overlayX:o,overlayY:s}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Rc(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t instanceof Set?Array.from(t):t,this._tooltipInstance._markForCheck())}_invertPosition(t,e){return this.position===`above`||this.position===`below`?e===`top`?e=`bottom`:e===`bottom`&&(e=`top`):t===`end`?t=`start`:t===`start`&&(t=`end`),{x:t,y:e}}_updateCurrentPositionClass(t){let{overlayY:e,originX:i,originY:o}=t,s;if(e===`center`?this._dir&&this._dir.value===`rtl`?s=i===`end`?`left`:`right`:s=i===`start`?`left`:`right`:s=e===`bottom`&&o===`top`?`above`:`below`,s!==this._currentPosition){let d=this._overlayRef;if(d){let b=`${this._cssClassPrefix}-${et}-`;d.removePanelClass(b+this._currentPosition),d.addPanelClass(b+s)}this._currentPosition=s}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,t=>{let e=t.targetTouches?.[0],i=e?{x:e.clientX,y:e.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,i)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener(`mouseenter`,t=>{this._setupPointerExitEventsIfNeeded();let e;t.x!==void 0&&t.y!==void 0&&(e=t),this.show(void 0,e)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,t=>{let e=t.relatedTarget;(!e||!this._overlayRef?.overlayElement.contains(e))&&this.hide()}),this._addListener(`wheel`,t=>{if(this._isTooltipVisible()){let e=this._document.elementFromPoint(t.clientX,t.clientY),i=this._elementRef.nativeElement;e!==i&&!i.contains(e)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let t=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,t),this._addListener(`touchcancel`,t)}}}_addListener(t,e){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,t,e,ht))}_isTouchPlatform(){let t=this._defaultOptions?.detectHoverCapability;return typeof t==`function`?!t():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!t&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!==`off`){let e=this._elementRef.nativeElement,i=e.style;(t===`on`||e.nodeName!==`INPUT`&&e.nodeName!==`TEXTAREA`)&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect=`none`),(t===`on`||!e.draggable)&&(i.webkitUserDrag=`none`),i.touchAction=`none`,i.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(t){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,t,`tooltip`),this._isDestroyed||Rc({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=t=>t.type===`keydown`?this._isTooltipVisible()&&t.keyCode===27&&!zn$1(t):!0;static ɵfac=function(e){return new(e||n)};static ɵdir=qn({type:n,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(e,i){e&2&&$D(`mat-mdc-tooltip-disabled`,i.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return n})();var it=(()=>{class n{_changeDetectorRef=g(Bo);_elementRef=g(dn$1);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Ft$1();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new te$2;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>pt&&t.width>=_t}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){let e=this._tooltip.nativeElement,i=this._showAnimation,o=this._hideAnimation;if(e.classList.remove(t?o:i),e.classList.add(t?i:o),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let s=getComputedStyle(e);(s.getPropertyValue(`animation-duration`)===`0s`||s.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(e.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(t))}static ɵfac=function(e){return new(e||n)};static ɵcmp=fh({type:n,selectors:[[`mat-tooltip-component`]],viewQuery:function(e,i){if(e&1&&PD(nt,7),e&2){let o;LD(o=FD())&&(i._tooltip=o.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(e,i){e&1&&$c(`mouseleave`,function(s){return i._handleMouseLeave(s)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(e,i){e&1&&(Dh(0,`div`,1,0),OD(`animationend`,function(s){return i._handleAnimationEnd(s)}),Dh(2,`div`,2),gN(3),Eh()()),e&2&&(oN(i.tooltipClass),$D(`mdc-tooltip--multiline`,i._isMultiline),aT(3),YD(i.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})}return n})();var Yt=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=Vr({type:n});static ɵinj=Rn$1({imports:[Kp,lo,et$3,Mp]})}return n})();function fn(t,c){t&1&&MD(0,`div`,2)}var _n=new D$3(`MAT_PROGRESS_BAR_DEFAULT_OPTIONS`);var nn=(()=>{class t{_elementRef=g(dn$1);_ngZone=g(Ie$2);_changeDetectorRef=g(Bo);_renderer=g(Or);_cleanupTransitionEnd;constructor(){let e=BO(),n=g(_n,{optional:!0});this._isNoopAnimation=e===`di-disabled`,e===`reduced-motion`&&this._elementRef.nativeElement.classList.add(`mat-progress-bar-reduced-motion`),n&&(n.color&&(this.color=this._defaultColor=n.color),this.mode=n.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;get value(){return this._value}set value(e){this._value=tn(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=tn(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new Fe;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode=`determinate`;ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode===`buffer`?this.bufferValue:100}%`}_isIndeterminate(){return this.mode===`indeterminate`||this.mode===`query`}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains(`mdc-linear-progress__primary-bar`)||(this.mode===`determinate`||this.mode===`buffer`)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static ɵfac=function(n){return new(n||t)};static ɵcmp=fh({type:t,selectors:[[`mat-progress-bar`]],hostAttrs:[`role`,`progressbar`,`aria-valuemin`,`0`,`aria-valuemax`,`100`,`tabindex`,`-1`,1,`mat-mdc-progress-bar`,`mdc-linear-progress`],hostVars:10,hostBindings:function(n,i){n&2&&(Vc(`aria-valuenow`,i._isIndeterminate()?null:i.value)(`mode`,i.mode),oN(`mat-`+i.color),$D(`_mat-animation-noopable`,i._isNoopAnimation)(`mdc-linear-progress--animation-ready`,!i._isNoopAnimation)(`mdc-linear-progress--indeterminate`,i._isIndeterminate()))},inputs:{color:`color`,value:[2,`value`,`value`,CR],bufferValue:[2,`bufferValue`,`bufferValue`,CR],mode:`mode`},outputs:{animationEnd:`animationEnd`},exportAs:[`matProgressBar`],decls:7,vars:5,consts:[[`aria-hidden`,`true`,1,`mdc-linear-progress__buffer`],[1,`mdc-linear-progress__buffer-bar`],[1,`mdc-linear-progress__buffer-dots`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__primary-bar`],[1,`mdc-linear-progress__bar-inner`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__secondary-bar`]],template:function(n,i){n&1&&(Dh(0,`div`,0),MD(1,`div`,1),bM(2,fn,1,0,`div`,2),Eh(),Dh(3,`div`,3),MD(4,`span`,4),Eh(),Dh(5,`div`,5),MD(6,`span`,4),Eh()),n&2&&(aT(),HD(`flex-basis`,i._getBufferBarFlexBasis()),aT(),SM(i.mode===`buffer`?2:-1),aT(),HD(`transform`,i._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --%NS%mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --%NS%mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--%NS%mat-progress-bar-track-height, 4px), var(--%NS%mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--%NS%mat-progress-bar-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--%NS%mat-progress-bar-track-height, 4px);
  border-radius: var(--%NS%mat-progress-bar-track-shape, var(--%NS%mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant)) calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--%NS%mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2})}return t})();function tn(t,c=0,e=100){return Math.max(c,Math.min(e,t))}var rn=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=Vr({type:t});static ɵinj=Rn$1({imports:[et$3]})}return t})();function bn(t,c){t&1&&gN(0,` Enter the address of your PlaceOS server to connect this app. `)}function vn(t,c){t&1&&gN(0,` Enter your work email to find your PlaceOS server and connect this app. `)}function yn(t,c){if(t&1&&(Ic(0,`p`,6),gN(1),yh()),t&2){let e=VM();aT(),bh(` `,e.error(),` `)}}function Cn(t,c){if(t&1&&(Ic(0,`p`,7),gN(1),yh()),t&2){let e=VM();aT(),bh(` Settings provided by your administrator will be applied automatically in `,e.auto_accept_in(),`s. `)}}function xn(t,c){if(t&1){let e=PM();Ic(0,`div`,8)(1,`label`,12),gN(2,`Server Address`),yh(),Ic(3,`mat-form-field`,13)(4,`icon`,14),gN(5,`dns`),yh(),Ic(6,`input`,15),eE(`ngModelChange`,function(i){gm(e);let a=VM();return wN(a.server_address,i)||(a.server_address=i),mm(i)}),yh(),ZT(),yh()(),Ic(7,`div`,8)(8,`label`,16),gN(9,`API Key (optional)`),yh(),Ic(10,`mat-form-field`,13)(11,`icon`,14),gN(12,`key`),yh(),Ic(13,`input`,17),eE(`ngModelChange`,function(i){gm(e);let a=VM();return wN(a.api_key,i)||(a.api_key=i),mm(i)}),yh(),ZT(),yh(),Ic(14,`p`,18),gN(15,` When set, the app authenticates with this key instead of asking you to sign in. `),yh()()}if(t&2){let e=VM();aT(6),JD(`ngModel`,e.server_address),_D(`disabled`,e.loading()),QT(),aT(7),JD(`ngModel`,e.api_key),_D(`disabled`,e.loading()),QT()}}function Sn(t,c){if(t&1){let e=PM();Ic(0,`div`,8)(1,`label`,19),gN(2,`Work Email`),yh(),Ic(3,`mat-form-field`,13)(4,`icon`,14),gN(5,`mail`),yh(),Ic(6,`input`,20),eE(`ngModelChange`,function(i){gm(e);let a=VM();return wN(a.email,i)||(a.email=i),mm(i)}),yh(),ZT(),yh()()}if(t&2){let e=VM();aT(6),JD(`ngModel`,e.email),_D(`disabled`,e.loading()),QT()}}function wn(t,c){t&1&&gN(0,` Find my server using my work email `)}function kn(t,c){t&1&&gN(0,` Enter a server address manually `)}var on=15;var an=(()=>{class t{constructor(){this.serverError=Xc(``),this.autoAccept=Xc(!1),this.domainSet=Fz(),this.email=Y$2(nie()??``),this.server_address=Y$2(Ju()??``),this.api_key=Y$2($f()??``),this.manual_entry=Y$2(!!Ju()),this.error=Y$2(``),this.loading=Y$2(!1),this.auto_accept_in=Y$2(0),this._auto_accept_timer=null,xi(()=>{let e=this.serverError();e&&(this.error.set(e),F(()=>this.stopAutoAccept()))}),xi(()=>{this.autoAccept()&&F(this.server_address)&&F(()=>this.startAutoAccept())})}ngOnDestroy(){this.stopAutoAccept()}resetAutoAccept(){this._auto_accept_timer&&this.auto_accept_in.set(on)}startAutoAccept(){this.auto_accept_in.set(on),!this._auto_accept_timer&&(this._auto_accept_timer=setInterval(()=>{let e=this.auto_accept_in()-1;this.auto_accept_in.set(e),!(e>0)&&(this.stopAutoAccept(),this.submit())},1e3))}stopAutoAccept(){this._auto_accept_timer&&clearInterval(this._auto_accept_timer),this._auto_accept_timer=null,this.auto_accept_in.set(0)}toggleManualEntry(){this.loading()||(this.manual_entry.update(e=>!e),this.error.set(``))}async submit(){if(this.loading())return;if(this.stopAutoAccept(),this.manual_entry())return this.submitManual();let e=this.email().trim();if(!e){this.error.set(`A work email is required.`);return}this.loading.set(!0),this.error.set(``);try{let n=await dR(e);oR(e),Bf(n),Vx(``),this.domainSet.emit(n)}catch{this.error.set(`Unable to find a server for this email address.`)}finally{this.loading.set(!1)}}submitManual(){let e=Gx(this.server_address());if(!e){this.error.set(`A valid server address is required.`);return}this.error.set(``),Bf(e),Vx(this.api_key()),this.domainSet.emit(e)}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=fh({type:t,selectors:[[`native-domain-overlay`]],hostBindings:function(n,i){n&1&&$c(`pointerdown`,function(){return i.resetAutoAccept()},DS)(`keydown`,function(){return i.resetAutoAccept()},DS)},inputs:{serverError:[1,`serverError`],autoAccept:[1,`autoAccept`]},outputs:{domainSet:`domainSet`},decls:19,vars:8,consts:[[1,`bg-base-200`,`pointer-events-auto`,`fixed`,`inset-0`,`z-9999`,`flex`,`items-center`,`justify-center`,`p-4`],[1,`border-base-300`,`bg-base-100`,`flex`,`w-full`,`max-w-md`,`flex-col`,`rounded-sm`,`border`,`shadow-sm`,3,`ngSubmit`],[1,`bg-base-200`,`m-2`,`rounded-sm`,`border-none`,`p-2`],[1,`px-2`,`text-xl`,`font-medium`],[1,`flex`,`flex-col`,`space-y-4`,`p-4`],[1,`text-sm`,`opacity-60`],[1,`bg-error/10`,`text-error`,`rounded-sm`,`px-3`,`py-2`,`text-xs`],[1,`bg-info/10`,`text-info`,`rounded-sm`,`px-3`,`py-2`,`text-xs`],[1,`flex`,`w-full`,`flex-col`],[`type`,`button`,1,`self-start`,`text-sm`,`underline`,`opacity-60`,3,`click`,`disabled`],[1,`bg-base-200`,`m-2`,`flex`,`items-center`,`justify-center`,`space-x-2`,`rounded-sm`,`border-none`,`p-2`],[`btn`,``,`matRipple`,``,`type`,`submit`,1,`flex-1`,3,`disabled`],[`for`,`server-address`],[`appearance`,`outline`,1,`w-full`],[`matPrefix`,``],[`matInput`,``,`name`,`server-address`,`placeholder`,`placeos.company.com`,`type`,`text`,`autocapitalize`,`off`,`autocomplete`,`url`,`spellcheck`,`false`,`required`,``,3,`ngModelChange`,`ngModel`,`disabled`],[`for`,`api-key`],[`matInput`,``,`name`,`api-key`,`placeholder`,`Leave empty to sign in`,`type`,`password`,`autocapitalize`,`off`,`autocomplete`,`off`,`spellcheck`,`false`,3,`ngModelChange`,`ngModel`,`disabled`],[1,`text-xs`,`opacity-60`],[`for`,`email`],[`matInput`,``,`name`,`email`,`placeholder`,`name@company.com`,`type`,`email`,`autocapitalize`,`off`,`autocomplete`,`email`,`spellcheck`,`false`,`required`,``,3,`ngModelChange`,`ngModel`,`disabled`]],template:function(n,i){n&1&&(Ic(0,`div`,0)(1,`form`,1),$c(`ngSubmit`,function(){return i.submit()}),Ic(2,`header`,2)(3,`h2`,3),gN(4,`Connect to Server`),yh()(),Ic(5,`main`,4)(6,`p`,5),bM(7,bn,1,0)(8,vn,1,0),yh(),bM(9,yn,2,1,`p`,6),bM(10,Cn,2,1,`p`,7),bM(11,xn,16,4)(12,Sn,7,2,`div`,8),Ic(13,`button`,9),$c(`click`,function(){return i.toggleManualEntry()}),bM(14,wn,1,0)(15,kn,1,0),yh()(),Ic(16,`footer`,10)(17,`button`,11),gN(18),yh()()()()),n&2&&(aT(7),SM(i.manual_entry()?7:8),aT(2),SM(i.error()?9:-1),aT(),SM(i.auto_accept_in()>0?10:-1),aT(),SM(i.manual_entry()?11:12),aT(2),_D(`disabled`,i.loading()),aT(),SM(i.manual_entry()?14:15),aT(3),_D(`disabled`,i.loading()),aT(),bh(` `,i.loading()?`Looking up...`:`Connect`,` `))},dependencies:[uB,cB,dS,oB,sB,RS,MN$1,ON,$ae,Kt$1,qe,bt$1,Be,Pe,_a,Xp],encapsulation:2})}}return t})();function Dn(t,c){if(t&1){let e=PM();Ic(0,`aside`,0)(1,`div`,1)(2,`h2`,2),gN(3),yh(),Ic(4,`p`,3),gN(5),yh()(),Ic(6,`button`,4),$c(`click`,function(){gm(e);return mm(VM().reloadApp())}),Ic(7,`icon`),gN(8,`refresh`),yh()()()}if(t&2){let e=c;aT(3),bh(` `,e.message||`Update available`,` `),aT(2),bh(` `,e.details||`Refresh the page to get the new version of the application`,` `),aT(),_D(`matTooltip`,e.action||`Reload App`)}}var sn=(()=>{class t{constructor(){this.update=kW()}reloadApp(){location.reload()}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=fh({type:t,selectors:[[`placeos-service-worker-update-card`]],decls:1,vars:1,consts:[[`role`,`status`,`aria-live`,`assertive`,1,`border-base-300`,`bg-base-100`,`text-base-content`,`pointer-events-auto`,`fixed`,`right-4`,`bottom-4`,`z-9999`,`flex`,`w-[20rem]`,`max-w-[calc(100vw-2rem)]`,`items-center`,`gap-3`,`rounded-lg`,`border`,`p-4`,`shadow-xl`],[1,`min-w-0`,`flex-1`],[1,`m-0`,`text-sm`,`leading-tight`,`font-medium`],[1,`m-0`,`mt-1`,`text-xs`,`opacity-70`],[`icon`,``,`default`,``,3,`click`,`matTooltip`]],template:function(n,i){if(n&1&&bM(0,Dn,9,3,`aside`,0),n&2){let a;SM((a=i.update())?0:-1,a)}},dependencies:[$ae,Yt,mt],encapsulation:2})}}return t})();function Mn(t,c){if(t&1){let e=PM();Ic(0,`native-domain-overlay`,3),$c(`domainSet`,function(){gm(e);return mm(VM().onDomainSet())}),yh()}if(t&2){let e=VM();_D(`serverError`,e.domain_error())(`autoAccept`,e.auto_confirm())}}function En(t,c){t&1&&(Ic(0,`div`,1),gN(1),kN(2,`translate`),yh()),t&2&&(aT(),bh(` `,LN(2,1,`COMMON.SERVER_DOWN`),` `))}function An(t,c){if(t&1){let e=PM();Ic(0,`div`,4)(1,`p`,5),gN(2),yh(),Ic(3,`button`,6),$c(`click`,function(){gm(e);return mm(VM(2).retry())}),gN(4,` Try again `),yh()()}if(t&2){let e=VM(2);aT(2),bh(` `,e.initialisation_error(),` `)}}function Nn(t,c){if(t&1&&(Ic(0,`div`,7)(1,`p`,8),gN(2),yh()(),Ic(3,`div`,9),Hc(4,`mat-progress-bar`,10),yh()),t&2){let e=VM(2);aT(2),YD(e.message())}}function Tn(t,c){if(t&1&&(Ic(0,`div`,2),bM(1,An,5,1,`div`,4)(2,Nn,5,1),yh()),t&2){let e=VM();aT(),SM(e.initialisation_error()?1:2)}}var ln=(()=>{class t extends Cn$1{constructor(){super(...arguments),this._placeos=g(xie),this.online=Y$2(!0),this.connection_checked=Y$2(!1),this.message=Lie(),this.show_domain_overlay=Mie(),this.domain_error=Pie(),this.auto_confirm=kie(),this.initialisation_error=xW(),this.initialisation_complete=UW(),this.loading=Me$2(()=>!this.initialisation_complete())}retry(){FW()}onDomainSet(){this._placeos.onNativeDomainSet()}ngOnInit(){let e=()=>{this.online.set(Jl()),this.online()&&(this.connection_checked.set(!0),this.clearTimeout(`initial-connection`))};this.timeout(`initial-connection`,()=>{e(),this.connection_checked.set(!0)},5e3),e(),this.interval(`online`,e,1e3)}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=Gv(t)))(i||t)}})()}static{this.ɵcmp=fh({type:t,selectors:[[`global-loading`]],features:[yD],decls:4,vars:3,consts:[[3,`serverError`,`autoAccept`],[1,`bg-error`,`fixed`,`top-2`,`left-1/2`,`z-9999`,`-translate-x-1/2`,`rounded-3xl`,`px-4`,`py-2`,`text-xs`,`text-white`,`shadow-sm`],[`loader`,``,1,`bg-base-300`,`pointer-events-auto`,`fixed`,`inset-0`,`z-9998`,`flex`,`flex-col`,`items-center`,`justify-end`,`space-y-2`,`p-4`],[3,`domainSet`,`serverError`,`autoAccept`],[1,`border-base-300`,`bg-base-100`,`w-[24rem]`,`max-w-[calc(100vw-2rem)]`,`rounded-lg`,`border`,`p-4`,`text-center`,`text-xs`,`shadow-sm`],[`initialisation-error`,``],[`type`,`button`,1,`bg-primary`,`text-primary-content`,`mt-3`,`rounded`,`px-4`,`py-2`,3,`click`],[1,`border-base-300`,`bg-base-100`,`w-[24rem]`,`max-w-[calc(100vw-2rem)]`,`rounded-lg`,`border`,`p-2`,`text-center`,`text-xs`,`shadow-sm`],[1,`text-center`,`font-mono`],[1,`border-base-300`,`w-[24rem]`,`max-w-[calc(100vw-2rem)]`,`overflow-hidden`,`rounded-full`,`border`,`shadow-sm`],[`mode`,`indeterminate`,1,`scale-150`,`rounded-sm`]],template:function(n,i){n&1&&(bM(0,Mn,1,2,`native-domain-overlay`,0),bM(1,En,3,3,`div`,1),bM(2,Tn,3,1,`div`,2),Hc(3,`placeos-service-worker-update-card`)),n&2&&(SM(i.show_domain_overlay()?0:-1),aT(),SM(i.connection_checked()&&!i.online()?1:-1),aT(),SM(i.loading()||i.initialisation_error()?2:-1))},dependencies:[rn,nn,an,sn,f],styles:[`[_nghost-%COMP%]{pointer-events:none}[loader][_ngcontent-%COMP%]{background-image:linear-gradient(to right,#0d47a1,#2196f3)}
/*# sourceMappingURL=global-loading.component.css.map */`]})}}return t})();var On=()=>[import(`./settings-debug-panel.component-DWaZBm9B.js`).then(t=>t.SettingsDebugPanelComponent)];var In=()=>[import(`./binding-debug-panel.component-B62vSs-S.js`).then(t=>t.BindingDebugPanelComponent)];var Pn=()=>[import(`./debug-console.component-BPS6_Jtv.js`).then(t=>t.DebugConsoleComponent)];function Bn(t,c){if(t&1){let e=PM();Ic(0,`settings-debug-panel`,8),$c(`showChange`,function(){gm(e);return mm(VM(2).panel.set(null))}),yh()}if(t&2){let e=VM(2);_D(`show`,!0)(`schema`,e.schema())}}function Fn(t,c){if(t&1&&bM(0,Bn,1,2,`settings-debug-panel`,7),t&2)SM(VM().panel()===`settings`?0:-1)}function Ln(t,c){if(t&1){let e=PM();Ic(0,`binding-debug-panel`,10),$c(`showChange`,function(){gm(e);return mm(VM(2).panel.set(null))}),yh()}t&2&&_D(`show`,!0)(`hotkeysEnabled`,!1)}function Vn(t,c){if(t&1&&bM(0,Ln,1,2,`binding-debug-panel`,9),t&2)SM(VM().panel()===`bindings`?0:-1)}function Rn(t,c){if(t&1){let e=PM();Ic(0,`debug-console`,10),$c(`showChange`,function(){gm(e);return mm(VM(2).panel.set(null))}),yh()}t&2&&_D(`show`,!0)(`hotkeysEnabled`,!1)}function Un(t,c){if(t&1&&bM(0,Rn,1,2,`debug-console`,9),t&2)SM(VM().panel()===`console`?0:-1)}var cn=(()=>{class t extends Cn$1{constructor(){super(...arguments),this._hotkey=g(d_),this._document=g(J$2),this._menu_trigger=Uz.required(Bt),this.loadSchema=Xc(),this.schema=Y$2(null),this.panel=Y$2(null)}ngOnInit(){for(let[n,i]of[[`settings`,[`Control`,`Alt`,`Shift`,`KeyS`]],[`bindings`,[`Control`,`Alt`,`Shift`,`KeyB`]],[`console`,[`Control`,`Backquote`]]])this.subscription(n,this._hotkey.listen(i,()=>{this.panel()===n?this.panel.set(null):this.openPanel(n)}))}onContextMenu(e){let n=this._document.documentElement.clientHeight;e.clientX<0||e.clientX>32||e.clientY<n-32||e.clientY>n||this.openMenu(e,this._menu_trigger())}openMenu(e,n){e.preventDefault(),n.openMenu()}openPanel(e){this.panel.set(e),e===`settings`&&(this._schema_request??=this.loadSettingsSchema())}async loadSettingsSchema(){try{this.schema.set(await this.loadSchema()?.()??null)}catch{this.schema.set(null)}}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=Gv(t)))(i||t)}})()}static{this.ɵcmp=fh({type:t,selectors:[[`settings-debug-panel-launcher`]],viewQuery:function(n,i){n&1&&UD(i._menu_trigger,Bt,5),n&2&&qM()},hostBindings:function(n,i){n&1&&$c(`contextmenu`,function(S){return i.onContextMenu(S)},ES)},inputs:{loadSchema:[1,`loadSchema`]},features:[yD],decls:33,vars:4,consts:[[`menu_trigger`,`matMenuTrigger`],[`debug_menu`,`matMenu`],[`type`,`button`,`aria-label`,`Open debugging tools`,1,`absolute`,`bottom-0`,`left-0`,`z-999`,`h-px`,`w-px`,3,`contextmenu`,`matMenuTriggerFor`],[`yPosition`,`above`],[1,`flex`,`w-64`,`items-center`,`justify-center`,`pb-2`,`text-sm`,`opacity-60`],[`mat-menu-item`,``,3,`click`],[1,`flex`,`items-center`,`gap-2`],[3,`show`,`schema`],[3,`showChange`,`show`,`schema`],[3,`show`,`hotkeysEnabled`],[3,`showChange`,`show`,`hotkeysEnabled`]],template:function(n,i){if(n&1){let a=PM();Ic(0,`button`,2,0),$c(`contextmenu`,function(ie){gm(a);let gn=WM(1);return mm(i.openMenu(ie,gn))}),yh(),Ic(2,`mat-menu`,3,1)(4,`div`,4),gN(5,` Debugging Panels `),yh(),Ic(6,`button`,5),$c(`click`,function(){return i.openPanel(`settings`)}),Ic(7,`div`,6)(8,`icon`),gN(9,`discover_tune`),yh(),Ic(10,`div`),gN(11,`Settings`),yh()()(),Ic(12,`button`,5),$c(`click`,function(){return i.openPanel(`bindings`)}),Ic(13,`div`,6)(14,`icon`),gN(15,`linked_services`),yh(),Ic(16,`div`),gN(17,`Driver bindings`),yh()()(),Ic(18,`button`,5),$c(`click`,function(){return i.openPanel(`console`)}),Ic(19,`div`,6)(20,`icon`),gN(21,`terminal_2`),yh(),Ic(22,`div`),gN(23,`Console`),yh()()()(),wD(24,Fn,1,1),wM(25,24,On),wD(27,Vn,1,1),wM(28,27,In),wD(30,Un,1,1),wM(31,30,Pn)}if(n&2)_D(`matMenuTriggerFor`,WM(3)),aT(25),IM(i.panel()===`settings`),aT(3),IM(i.panel()===`bindings`),aT(3),IM(i.panel()===`console`)},dependencies:[Lt,I,G,Bt,$ae],encapsulation:2})}}return t})();var Xn=()=>[`/`];var mn=(()=>{class t{static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=fh({type:t,selectors:[[`app-unauthorised`]],decls:15,vars:11,consts:[[`unauthorised`,``,1,`absolute`,`inset-0`],[1,`border-base-300`,`bg-base-100`,`text-base-content`,`mx-auto`,`my-4`,`flex`,`w-104`,`max-w-[calc(100%-1rem)]`,`flex-col`,`gap-2`,`rounded-xl`,`border`,`p-4`,`text-center`,`shadow-lg`],[1,`text-4xl`],[1,`py-4`],[`btn`,``,3,`routerLink`]],template:function(n,i){n&1&&(Ic(0,`div`,0)(1,`div`,1)(2,`h1`,2),gN(3,`403`),yh(),Ic(4,`h3`),gN(5),kN(6,`translate`),yh(),Ic(7,`p`,3),gN(8),kN(9,`translate`),yh(),Ic(10,`p`),gN(11),kN(12,`translate`),yh(),Ic(13,`a`,4),gN(14,`Try Again`),yh()()()),n&2&&(aT(5),YD(LN(6,4,`COMMON.FORBIDDEN`)),aT(3),bh(` `,LN(9,6,`COMMON.INVALID_PAGE_PERMISSIONS`),` `),aT(3),bh(` `,LN(12,8,`COMMON.CONTACT_ADMIN`),` `),aT(2),_D(`routerLink`,MN(10,Xn)))},dependencies:[vI,f],styles:[`[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center}[unauthorised][_ngcontent-%COMP%]{background-image:linear-gradient(to right,#c62828,#ef5350)}
/*# sourceMappingURL=unauthorised.component.css.map */`]})}}return t})();var Wn=20*1e3;function zn(){try{return!!xe$1()}catch{return!1}}function Gn(t,c){return new Promise(e=>{let n=setTimeout(()=>e(!1),c);t.then(()=>{clearTimeout(n),e(!0)},()=>{clearTimeout(n),e(!1)})})}var fe=class{};var _e=(()=>{class t{constructor(){this._router=g(qt$1),this._settings=g(so),this._org=g(ip),this._injector=g(ye$1),this._access=g(fe,{optional:!0})}async canActivate(e,n){return this.checkUser()}async canLoad(e,n){return this.checkUser()}async canActivateChild(e,n){return this.checkUser()}async checkUser(){if(!await this.waitForBackend(Promise.all([this._org.waitUntilInitialised(),Gy(m_,Boolean,this._injector)])))return this.offlineAccess();let n=this._access?.group?[this._access.group]:this._settings.get(`app.allow_access_groups`)||[],i=await this.useGroupSubsystemAccess(),a=!1;if(i){let S=await this.waitForUser();if(!S)return this.offlineAccess();a=this.checkSubsystemAccess(S),G$2(`ACCESS`,`Checking subsystem access`,a)}else if(!n.length)a=!0,G$2(`ACCESS`,`No access groups`,a);else{let S=await this.waitForUser();if(!S)return this.offlineAccess();a=!!(S&&n.find(ie=>S.groups.includes(ie))),G$2(`ACCESS`,`Checking access groups`,a)}return a||this._router.navigate([`/unauthorised`]),!!a}async waitForUser(){if(!await this.waitForBackend(tb(sb(),Boolean)))return null;let n=null;return await this.waitForBackend(c_(Ly).then(a=>n=a))?n:null}async waitForBackend(e){return Gn(e,Wn)}offlineAccess(){return zn()?(G$2(`ACCESS`,`Backend unreachable. Continuing with cached credentials.`),!0):(G$2(`ACCESS`,`Backend unreachable and no cached credentials.`,void 0,`warn`),this._router.navigate([`/unauthorised`]),!1)}async useGroupSubsystemAccess(){let e=Zn()?.config?.use_group_subsystem_access;return e===!0||e===`true`}checkSubsystemAccess(e){if(!e)return!1;let i=(`${this._settings.get(`app.access_subsystem`)||``}`.trim()||`${this._settings.app_name||``}`).trim().toLowerCase();return i?ZK(i,rt$5.Read):!1}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵprov=_$1({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();var dn=(()=>{class t extends Cn$1{constructor(){super(...arguments),this._settings=g(so),this._org=g(ip),this._cache=g(G_),this._snackbar=g(F_),this._locales=g(Ey),this._uploads=g(moe),this._current_user=Xw(),this._internal_user_domain=Me$2(()=>{let n=(this._current_user()?.email||``).split(`@`)[1];return this._settings.get(`app.internal_user_domain`)||(n?`@${n}`:``)}),this.title=`outlook-addin`}async ngOnInit(){console.info(`Initialising application...`),window.history.replaceState=(e,n)=>{},window.history.pushState=(e,n)=>{},fy(this._locales),Db(this._snackbar),A_(this._cache),console.info(`Waiting for application settings...`),await c_(this._settings.initialised),G$2(`Outlook`,`Waiting for library initialisation...`);try{await l_(Office.onReady(),3e4,`Microsoft Office did not become ready.`)}catch(e){console.error(e),u0(`The Outlook add-in could not start. Close and reopen it, then try again.`);return}if(this._isAuthDialog())return this._completeAuthDialog();if(G$2(`Outlook`,`Initialising auth...`),!!await this._initialiseAuth()){if(G$2(`Outlook`,`Checking existing auth...`),xe$1())return this._finishInitialise();console.info(`No existing auth...`);try{G$2(`Outlook`,`Checking for token...`);let e=Office?.auth?.getAccessToken(),n=await l_(e||Promise.resolve(void 0),1e4,`Unable to get Office token.`);if(!n)throw`Unable to get office token...`;if(G$2(`Outlook`,`Loaded office token. ${n}`),sessionStorage.setItem(`OFFICE.token`,n),!await this._initialiseAuth(!1))return;this._finishInitialise()}catch(e){if(console.info(JSON.stringify(e)),Office?.context?.auth)G$2(`Outlook`,`Authenticating through Outlook...`),await this._authenticateGraphAPI();else{if(G$2(`Outlook`,`Error office API not loaded.`),!await this._initialiseAuth(!1))return;await this._finishInitialise()}}this._settings.get(`app.has_uploads`)&&this._uploads.init()}}async _initialiseAuth(e=!0){Sd(this._settings.get(`app.short_name`));let n=this._settings.get(`composer`)||{};n.local_login=e,n.storage=`local`,n.mock=!!this._settings.get(`mock`)||location.origin.includes(`demo.place.tech`);try{return await Kf(n),!0}catch(i){return console.error(i),u0(`The Outlook add-in could not authenticate. Check the connection, then try again.`),!1}}async _finishInitialise(){A_(this._cache,this._settings.get(`service_worker`)||{});try{await l_(c_(Ly),3e4,`Current user loading timed out.`)}catch(n){console.error(n),this.onInitError();return}vd(this._current_user());let e=this._internal_user_domain();e&&c(e),tv()}async _authenticateGraphAPIWithDialog(){G$2(`Outlook`,`Authenticating...`),this.timeout(`office_auth_failure`,()=>u0(`Microsoft sign in did not finish. Close the sign-in window, then try again.`),120*1e3),this.timeout(`office_auth`,()=>{let e=`${location.origin}${location.pathname}#ms-auth=true`;console.info(`Opening office authentication dialog with URL: ${e}`),Office.context.ui.displayDialogAsync(e,{height:60,width:30},n=>{if(n.status!==`succeeded`){this.clearTimeout(`office_auth_failure`),u0(`The Microsoft sign-in window could not open. Allow pop-ups for Outlook, then try again.`);return}G$2(`Outlook`,`Authenticating with dialog...`);let i=n.value;i.addEventHandler(Office.EventType.DialogMessageReceived,a=>{this.clearTimeout(`office_auth_failure`),a.message&&Ql(a.message),this._finishInitialise(),i.close()})})})}_isAuthDialog(){return location.href.includes(`ms-auth=true`)||!!sessionStorage.getItem(`ms-auth`)}async _completeAuthDialog(){sessionStorage.setItem(`ms-auth`,`true`),G$2(`Outlook`,`Signing in from dialog...`),await this._initialiseAuth(!1)&&xe$1()&&(sessionStorage.removeItem(`ms-auth`),Office.context.ui.messageParent(xe$1()))}async _authenticateGraphAPI(e=0){if(!Office.context.auth){if(Office.context.ui){await this._authenticateGraphAPIWithDialog();return}if(e>=10){u0(`Microsoft authentication is unavailable. Close and reopen the add-in, then try again.`);return}return await new Promise(n=>this.timeout(`retry_graph_auth`,()=>n(),300)),this._authenticateGraphAPI(e+1)}try{let i=await l_(new Promise(a=>Office.context.auth.getAccessTokenAsync({allowSignInPrompt:!0},a)),1e4,`Microsoft single sign-on timed out.`);if(i.status===`succeeded`){let a=i.value;G$2(`Outlook`,`SSO token acquired successfully`),a&&Ql(a),await this._finishInitialise();return}G$2(`Outlook`,`SSO failed: ${i.error?.message||`Unknown error`}`,void 0,`error`)}catch(n){console.error(n)}Office.context.ui?await this._authenticateGraphAPIWithDialog():u0(`Microsoft sign in did not finish. Close and reopen the add-in, then try again.`)}onInitError(){Wr$1()||this._current_user()?.is_logged_in||(zr$2(),u0(`The Outlook add-in could not load the current user. Check the connection, then try again.`))}static{this.ɵfac=(()=>{let e;return function(i){return(e||(e=Gv(t)))(i||t)}})()}static{this.ɵcmp=fh({type:t,selectors:[[`app-root`]],features:[yD],decls:3,vars:0,template:function(n,i){n&1&&Hc(0,`settings-debug-panel-launcher`)(1,`router-outlet`)(2,`global-loading`)},dependencies:[cn,Bp,ln],encapsulation:2})}}return t})();var ne={production:!1};var pn=[{path:`unauthorised`,component:mn},{path:`404`,loadComponent:()=>import(`./not-found.component-BKUVVmwp.js`).then(t=>t.NotFoundComponent)},{path:`find`,loadComponent:()=>import(`./find-space.component-BQP4YRad.js`).then(t=>t.FindSpaceComponent)},{path:``,canActivate:[_e],canLoad:[_e],children:[{path:`ms-auth`,loadComponent:()=>import(`./room-booking.component-DkdGN101.js`).then(t=>t.RoomBookingComponent)},{path:`book`,children:[{path:`spaces`,loadComponent:()=>import(`./room-booking.component-DkdGN101.js`).then(t=>t.RoomBookingComponent)},{path:`spaces/success`,loadComponent:()=>import(`./booking-confirmed.component-XHHept5w.js`).then(t=>t.BookingConfirmedComponent)},{path:`meeting`,loadComponent:()=>import(`./meeting-booking.component-D5fkFbW1.js`).then(t=>t.MeetingBookingComponent)},{path:`meeting/success`,loadComponent:()=>import(`./meeting-success.component-CbwsI5t6.js`).then(t=>t.MeetingBookingSuccessComponent)},{path:`desks`,loadComponent:()=>import(`./desk-booking.component-D5mQCdYN.js`).then(t=>t.DeskBookingComponent)},{path:`desks/success`,loadComponent:()=>import(`./desk-success.component-k21P4XcL.js`).then(t=>t.DeskBookingSuccessComponent)}]},{path:`schedule/view`,loadComponent:()=>import(`./find-space.component-BQP4YRad.js`).then(t=>t.FindSpaceComponent)},{path:`confirm/success`,loadComponent:()=>import(`./booking-confirmed.component-XHHept5w.js`).then(t=>t.BookingConfirmedComponent)},{path:`upcoming`,loadComponent:()=>import(`./upcoming-bookings.component-B9NTOw1w.js`).then(t=>t.UpcomingBookingsComponent)},{path:`**`,redirectTo:`book/meeting`}]},{path:`**`,redirectTo:`book/meeting`,pathMatch:`full`}];var un={providers:[BN(),n0(o0(),r0()),Ux(pn,Bx()),Lj(`ngsw-worker.js`,{enabled:ne.production}),nm(Tj,wae)]};ne.production;MA(dn,un).catch(t=>console.error(t));export{qe as C,ht$2 as S,xt$1 as T,Yr as _,u as a,bt$1 as b,I as c,Pe as d,Et as f,Xr as g,Wt as h,p as i,Lt as l,Wr as m,mt as n,Bt as o,St as p,f as r,G as s,Yt as t,Be as u,zr as v,vt$1 as w,gt$1 as x,Kt$1 as y};
//# debugId=7f9b674f-0a73-5887-88d2-82718999bc65
//# sourceMappingURL=main.js.map