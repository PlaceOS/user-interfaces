import{$a as l,$i as rc,$n as _e,$t as Qn$1,Aa as wT,B as H,Bi as pIe,Br as g,C as EA,Ci as ms,Cn as Vz,D as Eo$1,Da as vn$1,Di as nL,Dr as ee$1,E as EY,En as WW,Er as eL,Fi as oTe,Fn as Xt,Fr as fA,G as Hz,Ga as z,Gn as Zk,Gr as gY,H as He,Ii as oe,In as Y0,It as OT,Ja as zW,Jr as gs,Jt as QS,Kn as Zme,Kr as g_,Kt as Q5,L as Gf,La as xi,Li as or,Lr as fk,Lt as Oo$1,Na as wz,Nn as Xn$1,O as Et,On as Wr,P as G0,Pn as Xr,Pt as O,Qn as __,Qt as Qme,R as Gt,Rn as YW,S as Dt,Si as ml,T as ETe,U as Hl,Ua as yn$1,Ut as P_,Vi as pe,Vn as Yr,W as Ht,Wa as yr,Wn as Zd,X as J0,Xi as qx,Xr as hl,Xt as QT,Ya as zd,Yr as he,Zi as rL,Zr as hn$1,_ as C,_n as Uz,_r as dA,_t as LT,a as $e,ar as am,at as KK,br as dg,c as $x,ca as sg,cn as SU,ct as KW,d as Ao$1,dn as So$1,en as Qr,eo as m,er as _n,fn as TF,h as Be,hn as Un$1,i as $O,in as Ri$1,jn as XP,jr as er,ki as nge,l as A,la as sp,li as jt,ln as Se,mr as cm,ni as it,o as $r,oi as jO,or as az,pa as tF,pi as ka,qn as Zn$1,qr as gl,rr as aIe,sr as b,t as $,tr as _o$1,tt as Jn$1,u as Ai$1,ua as sz,wr as e8,wt as MT,xr as dt,yn as V$,zn as Ye}from"./chunk--gJskyir.js";import{C as na,D as yt$1,E as xt,O as l$1,S as lu,T as su,_ as bt$1,b as gt,c as Re,d as Vi$1,f as Ye$1,g as as,h as an$1,i as Fn,l as Rm,m as _t,n as mt,o as N,p as Yi$1,r as Am,s as Qi,t as Yt,u as St$1,w as on$1,x as ho$1}from"./main.js";import{n as Z,r as le,t as Ee}from"./chunk-BkGbfroy.js";var Yi=[`knob`];var Ki=[`valueIndicatorContainer`];function en(n,a){if(n&1&&($r(0,`div`,2,1)(2,`div`,5)(3,`span`,6),gs(4),Yr()()()),n&2){let e=Wr();Et(4),J0(e.valueIndicatorText)}}var tn=[`trackActive`];var nn=[`*`];function on(n,a){if(n&1&&Ai$1(0,`div`),n&2){let e=a.$implicit,t=a.$index,i=Wr(3);Zd(e===0?`mdc-slider__tick-mark--active`:`mdc-slider__tick-mark--inactive`),sg(`transform`,i._calcTickMarkTransform(t))}}function an(n,a){if(n&1&&zW(0,on,1,4,`div`,8,YW),n&2)KW(Wr(2)._tickMarks)}function rn(n,a){if(n&1&&($r(0,`div`,6,1),Xn$1(2,an,2,0),Yr()),n&2){let e=Wr();Et(2),Qn$1(e._cachedWidth?2:-1)}}function sn(n,a){if(n&1&&Ai$1(0,`mat-slider-visual-thumb`,7),n&2){let e=Wr();hl(`discrete`,e.discrete)(`thumbPosition`,1)(`valueIndicatorText`,e.startValueIndicatorText)}}var S=(function(n){return n[n.START=1]=`START`,n[n.END=2]=`END`,n})(S||{});var Oe=(function(n){return n[n.ACTIVE=0]=`ACTIVE`,n[n.INACTIVE=1]=`INACTIVE`,n})(Oe||{});var vt=new b(`_MatSlider`);var Si=new b(`_MatSliderThumb`);var cn=new b(`_MatSliderRangeThumb`);var Ti=new b(`_MatSliderVisualThumb`);var ln=(()=>{class n{_cdr=g(vn$1);_ngZone=g(ee$1);_slider=g(vt);_renderer=g(Dt);_listenerCleanups;discrete=!1;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=!1;_isActive=!1;_isValueIndicatorVisible=!1;_hostElement=g(pe).nativeElement;_platform=g(Ye);ngAfterViewInit(){let e=this._slider._getInput(this.thumbPosition);e&&(this._ripple.radius=24,this._sliderInput=e,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let t=this._sliderInputEl,i=this._renderer;this._listenerCleanups=[i.listen(t,`pointermove`,this._onPointerMove),i.listen(t,`pointerdown`,this._onDragStart),i.listen(t,`pointerup`,this._onDragEnd),i.listen(t,`pointerleave`,this._onMouseLeave),i.listen(t,`focus`,this._onFocus),i.listen(t,`blur`,this._onBlur)]}))}ngOnDestroy(){var e;(e=this._listenerCleanups)==null||e.forEach(t=>t())}_onPointerMove=e=>{if(this._sliderInput._isFocused)return;let t=this._hostElement.getBoundingClientRect(),i=this._slider._isCursorOnSliderThumb(e,t);this._isHovered=i,i?this._showHoverRipple():this._hideRipple(this._hoverRippleRef)};_onMouseLeave=()=>{this._isHovered=!1,this._hideRipple(this._hoverRippleRef)};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add(`mdc-slider__thumb--focused`)};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove(`mdc-slider__thumb--focused`)};_onDragStart=e=>{e.button===0&&(this._isActive=!0,this._showActiveRipple())};_onDragEnd=()=>{this._isActive=!1,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple()};_showHoverRipple(){var e;this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),(e=this._hoverRippleRef)==null||e.element.classList.add(`mat-mdc-slider-hover-ripple`))}_showFocusRipple(){var e;this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},!0),(e=this._focusRippleRef)==null||e.element.classList.add(`mat-mdc-slider-focus-ripple`))}_showActiveRipple(){var e;this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),(e=this._activeRippleRef)==null||e.element.classList.add(`mat-mdc-slider-active-ripple`))}_isShowingRipple(e){return(e==null?void 0:e.state)===or.FADING_IN||(e==null?void 0:e.state)===or.VISIBLE}_showRipple(e,t){var i;if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===S.START?S.END:S.START)._showValueIndicator(),!((i=this._slider._globalRippleOptions)!=null&&i.disabled&&!t)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:e,centered:!0,persistent:!0})}_hideRipple(e){if(e?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let t=this._getSibling();t._isShowingAnyRipple()||(this._hideValueIndicator(),t._hideValueIndicator())}_showValueIndicator(){this._hostElement.classList.add(`mdc-slider__thumb--with-indicator`)}_hideValueIndicator(){this._hostElement.classList.remove(`mdc-slider__thumb--with-indicator`)}_getSibling(){return this._slider._getThumb(this.thumbPosition===S.START?S.END:S.START)}_getValueIndicatorContainer(){var e;return(e=this._valueIndicatorContainer)==null?void 0:e.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static ɵfac=function(t){return new(t||n)};static ɵcmp=Be({type:n,selectors:[[`mat-slider-visual-thumb`]],viewQuery:function(t,i){if(t&1&&ms(dA,5)(Yi,5)(Ki,5),t&2){let o;_o$1(o=Eo$1())&&(i._ripple=o.first),_o$1(o=Eo$1())&&(i._knob=o.first),_o$1(o=Eo$1())&&(i._valueIndicatorContainer=o.first)}},hostAttrs:[1,`mdc-slider__thumb`,`mat-mdc-slider-visual-thumb`],inputs:{discrete:`discrete`,thumbPosition:`thumbPosition`,valueIndicatorText:`valueIndicatorText`},features:[yn$1([{provide:Ti,useExisting:n}])],decls:4,vars:2,consts:[[`knob`,``],[`valueIndicatorContainer`,``],[1,`mdc-slider__value-indicator-container`],[1,`mdc-slider__thumb-knob`],[`matRipple`,``,1,`mat-focus-indicator`,3,`matRippleDisabled`],[1,`mdc-slider__value-indicator`],[1,`mdc-slider__value-indicator-text`]],template:function(t,i){t&1&&(Xn$1(0,en,5,1,`div`,2),Ai$1(1,`div`,3,0)(3,`div`,4)),t&2&&(Qn$1(i.discrete?0:-1),Et(3),hl(`matRippleDisabled`,!0))},dependencies:[dA],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
  height: 100%;
  width: 100%;
}

.mat-mdc-slider .mdc-slider__tick-marks {
  justify-content: start;
}
.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,
.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive {
  position: absolute;
  left: 2px;
}
`],encapsulation:2})}return n})();var ze=(()=>{class n{_ngZone=g(ee$1);_cdr=g(vn$1);_elementRef=g(pe);_dir=g(Hl,{optional:!0});_globalRippleOptions=g(g_,{optional:!0});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(e){this._disabled=e;let t=this._getInput(S.END),i=this._getInput(S.START);t&&(t.disabled=this._disabled),i&&(i.disabled=this._disabled)}_disabled=!1;get discrete(){return this._discrete}set discrete(e){this._discrete=e,this._updateValueIndicatorUIs()}_discrete=!1;get showTickMarks(){return this._showTickMarks}set showTickMarks(e){this._showTickMarks=e,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI())}_showTickMarks=!1;get min(){return this._min}set min(e){let t=e==null||isNaN(e)?this._min:e;this._min!==t&&this._updateMin(t)}_min=0;color;disableRipple=!1;_updateMin(e){let t=this._min;this._min=e,this._isRange?this._updateMinRange({old:t,new:e}):this._updateMinNonRange(e),this._onMinMaxOrStepChange()}_updateMinRange(e){let t=this._getInput(S.END),i=this._getInput(S.START),o=t.value,d=i.value;i.min=e.new,t.min=Math.max(e.new,i.value),i.max=Math.min(t.max,t.value),i._updateWidthInactive(),t._updateWidthInactive(),e.new<e.old?this._onTranslateXChangeBySideEffect(t,i):this._onTranslateXChangeBySideEffect(i,t),o!==t.value&&this._onValueChange(t),d!==i.value&&this._onValueChange(i)}_updateMinNonRange(e){let t=this._getInput(S.END);if(t){let i=t.value;t.min=e,t._updateThumbUIByValue(),this._updateTrackUI(t),i!==t.value&&this._onValueChange(t)}}get max(){return this._max}set max(e){let t=e==null||isNaN(e)?this._max:e;this._max!==t&&this._updateMax(t)}_max=100;_updateMax(e){let t=this._max;this._max=e,this._isRange?this._updateMaxRange({old:t,new:e}):this._updateMaxNonRange(e),this._onMinMaxOrStepChange()}_updateMaxRange(e){let t=this._getInput(S.END),i=this._getInput(S.START),o=t.value,d=i.value;t.max=e.new,i.max=Math.min(e.new,t.value),t.min=i.value,t._updateWidthInactive(),i._updateWidthInactive(),e.new>e.old?this._onTranslateXChangeBySideEffect(i,t):this._onTranslateXChangeBySideEffect(t,i),o!==t.value&&this._onValueChange(t),d!==i.value&&this._onValueChange(i)}_updateMaxNonRange(e){let t=this._getInput(S.END);if(t){let i=t.value;t.max=e,t._updateThumbUIByValue(),this._updateTrackUI(t),i!==t.value&&this._onValueChange(t)}}get step(){return this._step}set step(e){let t=isNaN(e)?this._step:e;this._step!==t&&this._updateStep(t)}_step=1;_updateStep(e){this._step=e,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange()}_updateStepRange(){let e=this._getInput(S.END),t=this._getInput(S.START),i=e.value,o=t.value,d=t.value;e.min=this._min,t.max=this._max,e.step=this._step,t.step=this._step,this._platform.SAFARI&&(e.value=e.value,t.value=t.value),e.min=Math.max(this._min,t.value),t.max=Math.min(this._max,e.value),t._updateWidthInactive(),e._updateWidthInactive(),e.value<d?this._onTranslateXChangeBySideEffect(t,e):this._onTranslateXChangeBySideEffect(e,t),i!==e.value&&this._onValueChange(e),o!==t.value&&this._onValueChange(t)}_updateStepNonRange(){let e=this._getInput(S.END);if(e){let t=e.value;e.step=this._step,this._platform.SAFARI&&(e.value=e.value),e._updateThumbUIByValue(),t!==e.value&&this._onValueChange(e)}}displayWith=e=>`${e}`;_tickMarks;_noopAnimations=Xr();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText=``;endValueIndicatorText=``;_endThumbTransform;_startThumbTransform;_isRange=!1;_isRtl=oe(()=>{var e;return((e=this._dir)==null?void 0:e.valueSignal())===`rtl`});_hasViewInitialized=!1;_tickMarkTrackWidth=0;_hasAnimation=!1;_resizeTimer=null;_platform=g(Ye);constructor(){g(Un$1).load(__);let e=this._isRtl();nge(()=>{let t=this._isRtl();t!==e&&(e=t,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI())})}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let e=this._getInput(S.END),t=this._getInput(S.START);this._isRange=!!e&&!!t,this._cdr.detectChanges();let i=this._getThumb(S.END);this._rippleRadius=i._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(e,t):this._initUINonRange(e),this._updateTrackUI(e),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges()}_initUINonRange(e){e.initProps(),e.initUI(),this._updateValueIndicatorUI(e),this._hasViewInitialized=!0,e._updateThumbUIByValue()}_initUIRange(e,t){e.initProps(),e.initUI(),t.initProps(),t.initUI(),e._updateMinMax(),t._updateMinMax(),e._updateStaticStyles(),t._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=!0,e._updateThumbUIByValue(),t._updateThumbUIByValue()}ngOnDestroy(){var e;(e=this._resizeObserver)==null||e.disconnect(),this._resizeObserver=null}_onDirChangeRange(){let e=this._getInput(S.END),t=this._getInput(S.START);e._setIsLeftThumb(),t._setIsLeftThumb(),e.translateX=e._calcTranslateXByValue(),t.translateX=t._calcTranslateXByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateWidthInactive(),t._updateWidthInactive(),e._updateThumbUIByValue(),t._updateThumbUIByValue()}_onDirChangeNonRange(){this._getInput(S.END)._updateThumbUIByValue()}_observeHostResize(){typeof ResizeObserver>`u`||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize())}),this._resizeObserver.observe(this._elementRef.nativeElement)})}_isActive(){return this._getThumb(S.START)._isActive||this._getThumb(S.END)._isActive}_getValue(e=S.END){let t=this._getInput(e);return t?t.value:this.min}_skipUpdate(){var e,t;return!!((e=this._getInput(S.START))!=null&&e._skipUIUpdate||(t=this._getInput(S.END))!=null&&t._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left}_setTrackActiveStyles(e){let t=this._trackActive.nativeElement.style;t.left=e.left,t.right=e.right,t.transformOrigin=e.transformOrigin,t.transform=e.transform}_calcTickMarkTransform(e){let t=e*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return`translateX(${this._isRtl()?this._cachedWidth-6-t:t}px)`}_onTranslateXChange(e){this._hasViewInitialized&&(this._updateThumbUI(e),this._updateTrackUI(e),this._updateOverlappingThumbUI(e))}_onTranslateXChangeBySideEffect(e,t){this._hasViewInitialized&&(e._updateThumbUIByValue(),t._updateThumbUIByValue())}_onValueChange(e){this._hasViewInitialized&&(this._updateValueIndicatorUI(e),this._updateTickMarkUI(),this._cdr.detectChanges())}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck())}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let e=this._getInput(S.END),t=this._getInput(S.START);e._updateThumbUIByValue(),t._updateThumbUIByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateMinMax(),t._updateMinMax(),e._updateWidthInactive(),t._updateWidthInactive()}else{let e=this._getInput(S.END);e&&e._updateThumbUIByValue()}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges()}}_thumbsOverlap=!1;_areThumbsOverlapping(){let e=this._getInput(S.START),t=this._getInput(S.END);return!e||!t?!1:t.translateX-e.translateX<20}_updateOverlappingThumbClassNames(e){let t=e.getSibling(),i=this._getThumb(e.thumbPosition);this._getThumb(t.thumbPosition)._hostElement.classList.remove(`mdc-slider__thumb--top`),i._hostElement.classList.toggle(`mdc-slider__thumb--top`,this._thumbsOverlap)}_updateOverlappingThumbUI(e){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(e))}_updateThumbUI(e){if(this._skipUpdate())return;let t=this._getThumb(e.thumbPosition===S.END?S.END:S.START);t._hostElement.style.transform=`translateX(${e.translateX}px)`}_updateValueIndicatorUI(e){if(this._skipUpdate())return;let t=this.displayWith(e.value);if(this._hasViewInitialized?e._valuetext.set(t):e._hostElement.setAttribute(`aria-valuetext`,t),this.discrete){e.thumbPosition===S.START?this.startValueIndicatorText=t:this.endValueIndicatorText=t;let i=this._getThumb(e.thumbPosition);t.length<3?i._hostElement.classList.add(`mdc-slider__thumb--short-value`):i._hostElement.classList.remove(`mdc-slider__thumb--short-value`)}}_updateValueIndicatorUIs(){let e=this._getInput(S.END),t=this._getInput(S.START);e&&this._updateValueIndicatorUI(e),t&&this._updateValueIndicatorUI(t)}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let e=this._step&&this._step>0?this._step:1,i=(Math.floor(this.max/e)*e-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*i}_updateTrackUI(e){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(e):this._updateTrackUINonRange(e))}_updateTrackUIRange(e){let t=e.getSibling();if(!t||!this._cachedWidth)return;let i=Math.abs(t.translateX-e.translateX)/this._cachedWidth;e._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:`auto`,right:`${this._cachedWidth-t.translateX}px`,transformOrigin:`right`,transform:`scaleX(${i})`}):this._setTrackActiveStyles({left:`${t.translateX}px`,right:`auto`,transformOrigin:`left`,transform:`scaleX(${i})`})}_updateTrackUINonRange(e){this._isRtl()?this._setTrackActiveStyles({left:`auto`,right:`0px`,transformOrigin:`right`,transform:`scaleX(${1-e.fillPercentage})`}):this._setTrackActiveStyles({left:`0px`,right:`auto`,transformOrigin:`left`,transform:`scaleX(${e.fillPercentage})`})}_updateTickMarkUI(){if(!this.showTickMarks||this.step===void 0||this.min===void 0||this.max===void 0)return;let e=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(e):this._updateTickMarkUINonRange(e)}_updateTickMarkUINonRange(e){let t=this._getValue(),i=Math.max(Math.round((t-this.min)/e),0)+1,o=Math.max(Math.round((this.max-t)/e),0)-1;this._isRtl()?i++:o++,this._tickMarks=Array(i).fill(Oe.ACTIVE).concat(Array(o).fill(Oe.INACTIVE))}_updateTickMarkUIRange(e){let t=this._getValue(),i=this._getValue(S.START),o=Math.max(Math.round((i-this.min)/e),0),d=Math.max(Math.round((t-i)/e)+1,0),x=Math.max(Math.round((this.max-t)/e),0);this._tickMarks=Array(o).fill(Oe.INACTIVE).concat(Array(d).fill(Oe.ACTIVE),Array(x).fill(Oe.INACTIVE))}_getInput(e){var t;if(e===S.END&&this._input)return this._input;if((t=this._inputs)!=null&&t.length)return e===S.START?this._inputs.first:this._inputs.last}_getThumb(e){var t,i;return e===S.END?(t=this._thumbs)==null?void 0:t.last:(i=this._thumbs)==null?void 0:i.first}_setTransition(e){this._hasAnimation=!this._platform.IOS&&e&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle(`mat-mdc-slider-with-animation`,this._hasAnimation)}_isCursorOnSliderThumb(e,t){let i=t.width/2,o=t.x+i,d=t.y+i,x=e.clientX-o,f=e.clientY-d;return Math.pow(x,2)+Math.pow(f,2)<Math.pow(i,2)}static ɵfac=function(t){return new(t||n)};static ɵcmp=Be({type:n,selectors:[[`mat-slider`]],contentQueries:function(t,i,o){if(t&1&&wT(o,Si,5)(o,cn,4),t&2){let d;_o$1(d=Eo$1())&&(i._input=d.first),_o$1(d=Eo$1())&&(i._inputs=d)}},viewQuery:function(t,i){if(t&1&&ms(tn,5)(Ti,5),t&2){let o;_o$1(o=Eo$1())&&(i._trackActive=o.first),_o$1(o=Eo$1())&&(i._thumbs=o)}},hostAttrs:[1,`mat-mdc-slider`,`mdc-slider`],hostVars:12,hostBindings:function(t,i){t&2&&(Zd(`mat-`+(i.color||`primary`)),dt(`mdc-slider--range`,i._isRange)(`mdc-slider--disabled`,i.disabled)(`mdc-slider--discrete`,i.discrete)(`mdc-slider--tick-marks`,i.showTickMarks)(`_mat-animation-noopable`,i._noopAnimations))},inputs:{disabled:[2,`disabled`,`disabled`,He],discrete:[2,`discrete`,`discrete`,He],showTickMarks:[2,`showTickMarks`,`showTickMarks`,He],min:[2,`min`,`min`,QT],color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,He],max:[2,`max`,`max`,QT],step:[2,`step`,`step`,QT],displayWith:`displayWith`},exportAs:[`matSlider`],features:[yn$1([{provide:vt,useExisting:n}])],ngContentSelectors:nn,decls:9,vars:5,consts:[[`trackActive`,``],[`tickMarkContainer`,``],[1,`mdc-slider__track`],[1,`mdc-slider__track--inactive`],[1,`mdc-slider__track--active`],[1,`mdc-slider__track--active_fill`],[1,`mdc-slider__tick-marks`],[3,`discrete`,`thumbPosition`,`valueIndicatorText`],[3,`class`,`transform`]],template:function(t,i){t&1&&(yr(),Xt(0),$r(1,`div`,2),Ai$1(2,`div`,3),$r(3,`div`,4),Ai$1(4,`div`,5,0),Yr(),Xn$1(6,rn,3,1,`div`,6),Yr(),Xn$1(7,sn,1,3,`mat-slider-visual-thumb`,7),Ai$1(8,`mat-slider-visual-thumb`,7)),t&2&&(Et(6),Qn$1(i.showTickMarks?6:-1),Et(),Qn$1(i._isRange?7:-1),Et(),hl(`discrete`,i.discrete)(`thumbPosition`,2)(`valueIndicatorText`,i.endValueIndicatorText))},dependencies:[ln],styles:[`.mdc-slider__track {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  pointer-events: none;
  height: var(--%NS%mat-slider-inactive-track-height, 4px);
}

.mdc-slider__track--active,
.mdc-slider__track--inactive {
  display: flex;
  height: 100%;
  position: absolute;
  width: 100%;
}

.mdc-slider__track--active {
  overflow: hidden;
  border-radius: var(--%NS%mat-slider-active-track-shape, var(--%NS%mat-sys-corner-full));
  height: var(--%NS%mat-slider-active-track-height, 4px);
  top: calc((var(--%NS%mat-slider-inactive-track-height, 4px) - var(--%NS%mat-slider-active-track-height, 4px)) / 2);
}

.mdc-slider__track--active_fill {
  border-top-style: solid;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  position: relative;
  transform-origin: left;
  transition: transform 80ms ease;
  border-color: var(--%NS%mat-slider-active-track-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-slider-active-track-height, 4px);
}
.mdc-slider--disabled .mdc-slider__track--active_fill {
  border-color: var(--%NS%mat-slider-disabled-active-track-color, var(--%NS%mat-sys-on-surface));
}
[dir=rtl] .mdc-slider__track--active_fill {
  -webkit-transform-origin: right;
  transform-origin: right;
}

.mdc-slider__track--inactive {
  left: 0;
  top: 0;
  opacity: 0.24;
  background-color: var(--%NS%mat-slider-inactive-track-color, var(--%NS%mat-sys-surface-variant));
  height: var(--%NS%mat-slider-inactive-track-height, 4px);
  border-radius: var(--%NS%mat-slider-inactive-track-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-slider--disabled .mdc-slider__track--inactive {
  background-color: var(--%NS%mat-slider-disabled-inactive-track-color, var(--%NS%mat-sys-on-surface));
  opacity: 0.24;
}
.mdc-slider__track--%NS%inactive::before {
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
@media (forced-colors: active) {
  .mdc-slider__track--%NS%inactive::before {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-container {
  bottom: 44px;
  left: 50%;
  pointer-events: none;
  position: absolute;
  transform: var(--%NS%mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg));
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container {
  pointer-events: auto;
}

.mdc-slider__value-indicator {
  display: flex;
  align-items: center;
  transform: scale(0);
  transform-origin: var(--%NS%mat-slider-value-indicator-transform-origin, 0 28px);
  transition: transform 100ms cubic-bezier(0.4, 0, 1, 1);
  word-break: normal;
  background-color: var(--%NS%mat-slider-label-container-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-slider-label-label-text-color, var(--%NS%mat-sys-on-primary));
  width: var(--%NS%mat-slider-value-indicator-width, 28px);
  height: var(--%NS%mat-slider-value-indicator-height, 28px);
  padding: var(--%NS%mat-slider-value-indicator-padding, 0);
  opacity: var(--%NS%mat-slider-value-indicator-opacity, 1);
  border-radius: var(--%NS%mat-slider-value-indicator-border-radius, 50% 50% 50% 0);
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator {
  transition: transform 100ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale(1);
}
.mdc-slider__value-indicator::before {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid;
  bottom: -5px;
  content: "";
  height: 0;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 0;
  display: var(--%NS%mat-slider-value-indicator-caret-display, none);
  border-top-color: var(--%NS%mat-slider-label-container-color, var(--%NS%mat-sys-primary));
}
.mdc-slider__value-indicator::after {
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
@media (forced-colors: active) {
  .mdc-slider__value-indicator::after {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-text {
  text-align: center;
  width: var(--%NS%mat-slider-value-indicator-width, 28px);
  transform: var(--%NS%mat-slider-value-indicator-text-transform, rotate(45deg));
  font-family: var(--%NS%mat-slider-label-label-text-font, var(--%NS%mat-sys-label-medium-font));
  font-size: var(--%NS%mat-slider-label-label-text-size, var(--%NS%mat-sys-label-medium-size));
  font-weight: var(--%NS%mat-slider-label-label-text-weight, var(--%NS%mat-sys-label-medium-weight));
  line-height: var(--%NS%mat-slider-label-label-text-line-height, var(--%NS%mat-sys-label-medium-line-height));
  letter-spacing: var(--%NS%mat-slider-label-label-text-tracking, var(--%NS%mat-sys-label-medium-tracking));
}

.mdc-slider__thumb {
  -webkit-user-select: none;
  user-select: none;
  display: flex;
  left: -24px;
  outline: none;
  position: absolute;
  height: 48px;
  width: 48px;
  pointer-events: none;
}
.mdc-slider--discrete .mdc-slider__thumb {
  transition: transform 80ms ease;
}
.mdc-slider--disabled .mdc-slider__thumb {
  pointer-events: none;
}

.mdc-slider__thumb--top {
  z-index: 1;
}

.mdc-slider__thumb-knob {
  position: absolute;
  box-sizing: border-box;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-style: solid;
  width: var(--%NS%mat-slider-handle-width, 20px);
  height: var(--%NS%mat-slider-handle-height, 20px);
  border-width: calc(var(--%NS%mat-slider-handle-height, 20px) / 2) calc(var(--%NS%mat-slider-handle-width, 20px) / 2);
  box-shadow: var(--%NS%mat-slider-handle-elevation, var(--%NS%mat-sys-level1));
  background-color: var(--%NS%mat-slider-handle-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-slider-handle-color, var(--%NS%mat-sys-primary));
  border-radius: var(--%NS%mat-slider-handle-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-slider__thumb:hover .mdc-slider__thumb-knob {
  background-color: var(--%NS%mat-slider-hover-handle-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-slider-hover-handle-color, var(--%NS%mat-sys-primary));
}
.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  background-color: var(--%NS%mat-slider-focus-handle-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-slider-focus-handle-color, var(--%NS%mat-sys-primary));
}
.mdc-slider--disabled .mdc-slider__thumb-knob {
  background-color: var(--%NS%mat-slider-disabled-handle-color, var(--%NS%mat-sys-on-surface));
  border-color: var(--%NS%mat-slider-disabled-handle-color, var(--%NS%mat-sys-on-surface));
}
.mdc-slider__thumb--top .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  border: solid 1px #fff;
  box-sizing: content-box;
  border-color: var(--%NS%mat-slider-with-overlap-handle-outline-color, var(--%NS%mat-sys-on-primary));
  border-width: var(--%NS%mat-slider-with-overlap-handle-outline-width, 1px);
}

.mdc-slider__tick-marks {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 0 1px;
  position: absolute;
  width: 100%;
}

.mdc-slider__tick-mark--active,
.mdc-slider__tick-mark--inactive {
  width: var(--%NS%mat-slider-with-tick-marks-container-size, 2px);
  height: var(--%NS%mat-slider-with-tick-marks-container-size, 2px);
  border-radius: var(--%NS%mat-slider-with-tick-marks-container-shape, var(--%NS%mat-sys-corner-full));
}

.mdc-slider__tick-mark--inactive {
  opacity: var(--%NS%mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--%NS%mat-slider-with-tick-marks-inactive-container-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-slider--disabled .mdc-slider__tick-mark--inactive {
  opacity: var(--%NS%mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--%NS%mat-slider-with-tick-marks-disabled-container-color, var(--%NS%mat-sys-on-surface));
}

.mdc-slider__tick-mark--active {
  opacity: var(--%NS%mat-slider-with-tick-marks-active-container-opacity, 0.38);
  background-color: var(--%NS%mat-slider-with-tick-marks-active-container-color, var(--%NS%mat-sys-on-primary));
}

.mdc-slider__input {
  cursor: pointer;
  left: 2px;
  margin: 0;
  height: 44px;
  opacity: 0;
  position: absolute;
  top: 2px;
  width: 44px;
  box-sizing: content-box;
}
.mdc-slider__input.mat-mdc-slider-input-no-pointer-events {
  pointer-events: none;
}
.mdc-slider__input.mat-slider__right-input {
  left: auto;
  right: 0;
}

.mat-mdc-slider {
  display: inline-block;
  box-sizing: border-box;
  outline: none;
  vertical-align: middle;
  cursor: pointer;
  height: 48px;
  margin: 0 8px;
  position: relative;
  touch-action: pan-y;
  width: auto;
  min-width: 112px;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-slider.mdc-slider--disabled {
  cursor: auto;
  opacity: 0.38;
}
.mat-mdc-slider.mdc-slider--disabled .mdc-slider__input {
  cursor: auto;
}
.mat-mdc-slider .mdc-slider__thumb,
.mat-mdc-slider .mdc-slider__track--active_fill {
  transition-duration: 0ms;
}
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {
  transition-duration: 80ms;
}
.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,
.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill {
  transition-duration: 0ms;
}
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {
  transition-duration: 80ms;
}
.mat-mdc-slider .mat-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-slider-ripple-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple {
  background-color: var(--%NS%mat-slider-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-primary) 5%, transparent));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,
.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple {
  background-color: var(--%NS%mat-slider-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-primary) 20%, transparent));
}
.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb, .mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,
.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator {
  transition: none;
}
.mat-mdc-slider .mat-focus-indicator::before {
  border-radius: 50%;
}

.mdc-slider__thumb--focused .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return n})();var dn={provide:Gf,useExisting:hn$1(()=>we),multi:!0};var we=(()=>{class n{_ngZone=g(ee$1);_elementRef=g(pe);_cdr=g(vn$1);_slider=g(vt);_platform=g(Ye);_listenerCleanups;get value(){return QT(this._hostElement.value,0)}set value(e){e===null&&(e=this._getDefaultValue()),e=isNaN(e)?0:e;let t=e+``;if(!this._hasSetInitialValue){this._initialValue=t;return}this._isActive||this._setValue(t)}_setValue(e){this._hostElement.value=e,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck()}valueChange=new he;dragStart=new he;dragEnd=new he;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(e){this._translateX=e}_translateX;thumbPosition=S.END;get min(){return QT(this._hostElement.min,0)}set min(e){this._hostElement.min=e+``,this._cdr.detectChanges()}get max(){return QT(this._hostElement.max,0)}set max(e){this._hostElement.max=e+``,this._cdr.detectChanges()}get step(){return QT(this._hostElement.step,0)}set step(e){this._hostElement.step=e+``,this._cdr.detectChanges()}get disabled(){return He(this._hostElement.disabled)}set disabled(e){this._hostElement.disabled=e,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled)}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=A(``);_knobRadius=8;_tickMarkOffset=3;_isActive=!1;_isFocused=!1;_setIsFocused(e){this._isFocused=e}_hasSetInitialValue=!1;_initialValue;_formControl;_destroyed=new C;_skipUIUpdate=!1;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=!1;constructor(){let e=g(Dt);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[e.listen(this._hostElement,`pointerdown`,this._onPointerDown.bind(this)),e.listen(this._hostElement,`pointermove`,this._onPointerMove.bind(this)),e.listen(this._hostElement,`pointerup`,this._onPointerUp.bind(this))]})}ngOnDestroy(){this._listenerCleanups.forEach(e=>e()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete()}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=!0),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue()}initUI(){this._updateThumbUIByValue()}_initValue(){this._hasSetInitialValue=!0,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges())}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(!1),this._onTouchedFn()}_onFocus(){this._slider._setTransition(!1),this._slider._updateTrackUI(this),this._setIsFocused(!0)}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:!0})}_onInput(){var e;(e=this._onChangeFn)==null||e.call(this,this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:!this._isActive}),this._slider._onValueChange(this)}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled}_onPointerDown(e){if(!(this.disabled||e.button!==0)){if(this._platform.IOS){let t=this._slider._isCursorOnSliderThumb(e,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=t,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=!0,this._setIsFocused(!0),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(e,{withAnimation:!0}),this.disabled||(this._handleValueCorrection(e),this.dragStart.emit({source:this,parent:this._slider,value:this.value}))}}_handleValueCorrection(e){this._skipUIUpdate=!0,setTimeout(()=>{this._skipUIUpdate=!1,this._fixValue(e)},0)}_fixValue(e){var Ce;let t=e.clientX-this._slider._cachedLeft,i=this._slider._cachedWidth,o=this._slider.step===0?1:this._slider.step,d=Math.floor((this._slider.max-this._slider.min)/o),x=this._slider._isRtl()?1-t/i:t/i,W=Math.round(x*d)/d*(this._slider.max-this._slider.min)+this._slider.min,L=Math.round(W/o)*o;if(L===this.value){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation});return}this.value=L,this.valueChange.emit(this.value),(Ce=this._onChangeFn)==null||Ce.call(this,this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation})}_onPointerMove(e){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(e)}_onPointerUp(){this._isActive&&(this._isActive=!1,this._platform.SAFARI&&this._setIsFocused(!1),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0))}_clamp(e){let t=this._tickMarkOffset,i=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(e,i),t)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(e){return e.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`}_updateThumbUIByValue(e){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(e)}_updateThumbUIByPointerEvent(e,t){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(e)),this._updateThumbUI(t)}_updateThumbUI(e){this._slider._setTransition(!!(e!=null&&e.withAnimation)),this._slider._onTranslateXChange(this)}writeValue(e){(this._isControlInitialized||e!==null)&&(this.value=e)}registerOnChange(e){this._onChangeFn=e,this._isControlInitialized=!0}registerOnTouched(e){this._onTouchedFn=e}setDisabledState(e){this.disabled=e}focus(){this._hostElement.focus()}blur(){this._hostElement.blur()}static ɵfac=function(t){return new(t||n)};static ɵdir=z({type:n,selectors:[[`input`,`matSliderThumb`,``]],hostAttrs:[`type`,`range`,1,`mdc-slider__input`],hostVars:1,hostBindings:function(t,i){t&1&&jt(`change`,function(){return i._onChange()})(`input`,function(){return i._onInput()})(`blur`,function(){return i._onBlur()})(`focus`,function(){return i._onFocus()}),t&2&&Zn$1(`aria-valuetext`,i._valuetext())},inputs:{value:[2,`value`,`value`,QT]},outputs:{valueChange:`valueChange`,dragStart:`dragStart`,dragEnd:`dragEnd`},exportAs:[`matSliderThumb`],features:[yn$1([dn,{provide:Si,useExisting:n}])]})}return n})();var Le=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Se({type:n});static ɵinj=_e({imports:[fA,Qr]})}return n})();var mn=[`input`];var pn=[`*`];var Ct={color:`accent`,clickAction:`check-indeterminate`,disabledInteractive:!1};var hn=new b(`mat-checkbox-default-options`,{providedIn:`root`,factory:()=>Ct});var J=(function(n){return n[n.Init=0]=`Init`,n[n.Checked=1]=`Checked`,n[n.Unchecked=2]=`Unchecked`,n[n.Indeterminate=3]=`Indeterminate`,n})(J||{});var yt=class{source;checked};var St=(()=>{class n{_elementRef=g(pe);_changeDetectorRef=g(vn$1);_ngZone=g(ee$1);_animationsDisabled=Xr();_options=g(hn,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new yt;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){var e;return(e=this._inputElement)==null?void 0:e.nativeElement}_animationClasses={uncheckedToChecked:`mdc-checkbox--anim-unchecked-checked`,uncheckedToIndeterminate:`mdc-checkbox--anim-unchecked-indeterminate`,checkedToUnchecked:`mdc-checkbox--anim-checked-unchecked`,checkedToIndeterminate:`mdc-checkbox--anim-checked-indeterminate`,indeterminateToChecked:`mdc-checkbox--anim-indeterminate-checked`,indeterminateToUnchecked:`mdc-checkbox--anim-indeterminate-unchecked`};ariaLabel=``;ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition=`after`;name=null;change=new he;indeterminateChange=new he;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass=``;_currentCheckState=J.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){var t;g(Un$1).load(__);let e=g(new dg(`tabindex`),{optional:!0});this._options=this._options||Ct,this.color=this._options.color||Ct.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=g(Ao$1).getId(`mat-mdc-checkbox-`),this.disabledInteractive=((t=this._options)==null?void 0:t.disabledInteractive)??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(J.Indeterminate):this._transitionCheckState(this.checked?J.Checked:J.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=A(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,i=this._getAnimationTargetElement();if(!(t===e||!i)&&(this._currentAnimationClass&&i.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){i.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{i.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){var t;let e=(t=this._options)==null?void 0:t.clickAction;!this.disabled&&e!==`noop`?(this.indeterminate&&e!==`check`&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?J.Checked:J.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e===`noop`)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return``;switch(e){case J.Init:if(t===J.Checked)return this._animationClasses.uncheckedToChecked;if(t==J.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case J.Unchecked:return t===J.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case J.Checked:return t===J.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case J.Indeterminate:return t===J.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return``}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static ɵfac=function(t){return new(t||n)};static ɵcmp=Be({type:n,selectors:[[`mat-checkbox`]],viewQuery:function(t,i){if(t&1&&ms(mn,5),t&2){let o;_o$1(o=Eo$1())&&(i._inputElement=o.first)}},hostAttrs:[1,`mat-mdc-checkbox`],hostVars:16,hostBindings:function(t,i){t&2&&(ml(`id`,i.id),Zn$1(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null),Zd(i.color?`mat-`+i.color:`mat-accent`),dt(`_mat-animation-noopable`,i._animationsDisabled)(`mdc-checkbox--disabled`,i.disabled)(`mat-mdc-checkbox-disabled`,i.disabled)(`mat-mdc-checkbox-checked`,i.checked)(`mat-mdc-checkbox-disabled-interactive`,i.disabledInteractive))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],ariaExpanded:[2,`aria-expanded`,`ariaExpanded`,He],ariaControls:[0,`aria-controls`,`ariaControls`],ariaOwns:[0,`aria-owns`,`ariaOwns`],id:`id`,required:[2,`required`,`required`,He],labelPosition:`labelPosition`,name:`name`,value:`value`,disableRipple:[2,`disableRipple`,`disableRipple`,He],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?void 0:QT(e)],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,He],checked:[2,`checked`,`checked`,He],disabled:[2,`disabled`,`disabled`,He],indeterminate:[2,`indeterminate`,`indeterminate`,He]},outputs:{change:`change`,indeterminateChange:`indeterminateChange`},exportAs:[`matCheckbox`],features:[yn$1([{provide:Gf,useExisting:hn$1(()=>n),multi:!0},{provide:P_,useExisting:n,multi:!0}]),Gt],ngContentSelectors:pn,decls:15,vars:23,consts:[[`checkbox`,``],[`input`,``],[`label`,``],[`mat-internal-form-field`,``,3,`click`,`labelPosition`,`for`],[1,`mdc-checkbox`],[`aria-hidden`,`true`,1,`mat-mdc-checkbox-touch-target`],[`type`,`checkbox`,1,`mdc-checkbox__native-control`,3,`blur`,`click`,`change`,`checked`,`indeterminate`,`disabled`,`id`,`required`,`tabIndex`],[`aria-hidden`,`true`,1,`mdc-checkbox__ripple`],[`aria-hidden`,`true`,1,`mdc-checkbox__background`],[`focusable`,`false`,`viewBox`,`0 0 24 24`,1,`mdc-checkbox__checkmark`],[`fill`,`none`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-checkbox__checkmark-path`],[1,`mdc-checkbox__mixedmark`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-mdc-checkbox-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(t,i){if(t&1&&(yr(),$r(0,`label`,3),jt(`click`,function(d){return i._preventBubblingFromLabel(d)}),$r(1,`span`,4,0),Ai$1(3,`span`,5),$r(4,`input`,6,1),jt(`blur`,function(){return i._onBlur()})(`click`,function(){return i._onInputClick()})(`change`,function(d){return i._onInteractionEvent(d)}),Yr(),Ai$1(6,`span`,7),$r(7,`span`,8),jO(),$r(8,`svg`,9),Ai$1(9,`path`,10),Yr(),$O(),Ai$1(10,`span`,11),Yr(),Ai$1(11,`span`,12),Yr(),$r(12,`span`,13,2),Xt(14),Yr()()),t&2){let o=az(2);hl(`labelPosition`,i.labelPosition)(`for`,i.inputId),Et(4),dt(`mdc-checkbox--selected`,i.checked),hl(`checked`,i.checked)(`indeterminate`,i.indeterminate)(`disabled`,i.disabled&&!i.disabledInteractive)(`id`,i.inputId)(`required`,i.required)(`tabIndex`,i.disabled&&!i.disabledInteractive?-1:i.tabIndex),Zn$1(`aria-label`,i.ariaLabel||null)(`aria-labelledby`,i.ariaLabelledby)(`aria-describedby`,i.ariaDescribedby)(`aria-checked`,i.indeterminate?`mixed`:null)(`aria-controls`,i.ariaControls)(`aria-disabled`,i.disabled&&i.disabledInteractive?!0:null)(`aria-expanded`,i.ariaExpanded)(`aria-owns`,i.ariaOwns)(`name`,i.name)(`value`,i.value),Et(7),hl(`matRippleTrigger`,o)(`matRippleDisabled`,i.disableRipple||i.disabled)(`matRippleCentered`,!0)}},dependencies:[dA,oTe],styles:[`.mdc-checkbox {
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
`],encapsulation:2})}return n})();var Mi=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Se({type:n});static ɵinj=_e({imports:[St,Qr]})}return n})();var fn=[`*`];function bn(n,a){if(n&1&&($r(0,`div`,3),gs(1),Yr()),n&2){let e=Wr();Et(),J0(e.info())}}function gn(n,a){if(n&1&&($r(0,`icon`,4),gs(1,`info`),Yr()),n&2)hl(`matTooltip`,Wr().info())}function xn(n,a){n&1&&Ai$1(0,`div`,5)}function vn(n,a){if(n&1&&($r(0,`div`,6)(1,`div`,8)(2,`div`,9)(3,`icon`),gs(4),Yr()()()()),n&2){let e=Wr();Et(),dt(`bg-base-200`,!e.value())(`bg-info`,e.value())(`border-info!`,e.value()),Et(),dt(`left-1`,!e.value())(`left-5`,e.value())(`bg-base-400`,!e.value())(`bg-info-light`,e.value()),Et(2),J0(e.value()?`done`:`remove`)}}function kn(n,a){if(n&1){let e=OT();$r(0,`mat-checkbox`,10),jt(`ngModelChange`,function(i){am(e);return cm(Wr().setValue(i))}),Yr(),gY()}if(n&2)hl(`ngModel`,Wr().value()),EY()}var wi=(()=>{let a=class a{constructor(){this.toggle=So$1(void 0),this.label=So$1(void 0),this.info=So$1(void 0),this.inline=So$1(!0),this.value=A(void 0),this.registerOnChange=t=>this._onChange=t,this.registerOnTouched=t=>this._onTouch=t}setValue(t){this.value.set(t),this._onChange&&this._onChange(t)}writeValue(t){this.value.set(t)}};a.ɵfac=function(i){return new(i||a)},a.ɵcmp=Be({type:a,selectors:[[`settings-toggle`]],inputs:{toggle:[1,`toggle`],label:[1,`label`],info:[1,`info`],inline:[1,`inline`]},features:[yn$1([{provide:Gf,useExisting:hn$1(()=>a),multi:!0}])],ngContentSelectors:fn,decls:11,vars:13,consts:[[`type`,`button`,`matRipple`,``,1,`hover:bg-base-200`,`relative`,`flex`,`flex-1`,`items-center`,`space-x-2`,`overflow-hidden`,`rounded-sm`,`border`,`py-1`,`pr-1`,`pl-2`,3,`click`],[1,`z-10`,`flex`,`flex-1`,`items-center`,`space-x-2`,`px-2`,`text-left`],[1,`flex`,`flex-col`,`justify-center`,`w-full`,`leading-none`,`h-full`],[1,`text-xs`,`opacity-30`],[3,`matTooltip`],[1,`bg-info`,`absolute`,`inset-0`,`z-0`,`m-0!`,`opacity-10`],[1,`px-2`],[1,`pointer-events-none`,3,`ngModel`],[`toggle`,``,1,`border-base-400`,`relative`,`h-8`,`w-12`,`rounded-full`,`border-2`],[1,`absolute`,`top-1/2`,`flex`,`h-6`,`w-6`,`-translate-x-0.5`,`-translate-y-1/2`,`items-center`,`justify-center`,`rounded-full`,`text-black`,`shadow-sm`],[1,`pointer-events-none`,3,`ngModelChange`,`ngModel`]],template:function(i,o){i&1&&(yr(),$r(0,`button`,0),jt(`click`,function(){return o.setValue(!o.value())}),$r(1,`div`,1)(2,`div`,2)(3,`div`),gs(4),Xt(5),Yr(),Xn$1(6,bn,2,1,`div`,3),Yr(),Xn$1(7,gn,2,1,`icon`,4),Yr(),Xn$1(8,xn,1,0,`div`,5),Xn$1(9,vn,5,15,`div`,6)(10,kn,1,1,`mat-checkbox`,7),Yr()),i&2&&(dt(`border-base-300`,!o.value())(`border-info`,o.value()),Et(),dt(`py-2`,!o.inline())(`py-1`,!o.inline()),Et(3),J0(o.label()),Et(2),Qn$1(o.info()&&o.inline()?6:-1),Et(),Qn$1(o.info()&&!o.inline()?7:-1),Et(),Qn$1(o.value()?8:-1),Et(),Qn$1(o.toggle()?9:10))},dependencies:[Mi,St,pIe,aIe,Q5,ETe,Yt,mt],styles:[`[_nghost-%COMP%]{display:flex}[toggle][_ngcontent-%COMP%]{transition:background .2s,left .2s}
/*# sourceMappingURL=settings-toggle.component.css.map */`]});return a})();var yn=[`*`];function Sn(n,a){n&1&&($r(0,`button`,7)(1,`icon`),gs(2,`close`),Yr()())}function Tn(n,a){if(n&1&&Xn$1(0,Sn,3,0,`button`,7),n&2)Qn$1(Wr(2).loading()?-1:0)}function Mn(n,a){if(n&1&&($r(0,`a`,8)(1,`icon`),gs(2,`close`),Yr()()),n&2)hl(`routerLink`,Wr(3).close())}function wn(n,a){if(n&1&&Xn$1(0,Mn,3,1,`a`,8),n&2)Qn$1(Wr(2).loading()?-1:0)}function In(n,a){var e;if(n&1&&Xn$1(0,Tn,1,1)(1,wn,1,1),n&2)Qn$1((e=Wr().close())!=null&&e.length?1:0)}function En(n,a){n&1&&(Xt(0),Ai$1(1,`div`,9))}function Nn(n,a){if(n&1&&($r(0,`div`,5),Ai$1(1,`mat-spinner`,10),$r(2,`p`,11),gs(3),Yr()()),n&2){let e=Wr();Et(),hl(`diameter`,32),Et(2),J0(e.loading())}}function Rn(n,a){if(n&1&&($r(0,`kbd`,14),gs(1),Yr()),n&2){let e=Wr(2);Et(),J0(e.confirm_hotkey())}}function Vn(n,a){if(n&1){let e=OT();$r(0,`footer`,12)(1,`button`,13),jt(`click`,function(){am(e);return cm(Wr().confirm.emit())}),gs(2),MT(3,`translate`),Xn$1(4,Rn,2,1,`kbd`,14),Yr()()}if(n&2){let e=Wr();dt(`max-w-156`,!e.full_width()),Et(),hl(`disabled`,e.confirm_disabled()),Et(),Ri$1(` `,e.confirm_text()||Hz(3,5,`COMMON.SAVE`),` `),Et(2),Qn$1(e.confirm_hotkey()?4:-1)}}var Ii=(()=>{let a=class a{constructor(){this.loading=So$1(``),this.heading=So$1(`Fullscreen Modal`),this.confirm_text=So$1(``),this.confirm_hotkey=So$1(``),this.confirm_disabled=So$1(!1),this.close=So$1([]),this.hide_confirm=So$1(!1),this.hide_close=So$1(!1),this.full_width=So$1(!1),this.confirm=Zme(),this.closed=Zme()}};a.ɵfac=function(i){return new(i||a)},a.ɵcmp=Be({type:a,selectors:[[`fullscreen-modal-shell`],[``,`fs-modal-shell`,``]],inputs:{loading:[1,`loading`],heading:[1,`heading`],confirm_text:[1,`confirm_text`],confirm_hotkey:[1,`confirm_hotkey`],confirm_disabled:[1,`confirm_disabled`],close:[1,`close`],hide_confirm:[1,`hide_confirm`],hide_close:[1,`hide_close`],full_width:[1,`full_width`]},outputs:{confirm:`confirm`,closed:`closed`},ngContentSelectors:yn,decls:10,vars:14,consts:[[`cdkScrollable`,``,1,`bg-base-200`,`fixed`,`inset-0`,`flex`,`flex-col`,`items-center`,`overflow-auto`,`px-2`],[1,`border-base-300`,`bg-base-100`,`fixed`,`top-0`,`mx-auto`,`h-screen`,`max-w-full`,`border-x`],[1,`bg-base-200`,`sticky`,`top-0`,`z-10`,`mx-auto`,`my-2`,`flex`,`h-14`,`w-full`,`items-center`,`justify-between`,`rounded-sm`,`border-none`,`px-4`,`py-2`],[1,`flex`,`items-center`,`text-xl`,`font-medium`,`capitalize`,3,`innerHTML`],[1,`z-0`,`mx-auto`,`h-1/2`,`w-full`,`flex-1`,`space-y-8`,`p-2`],[1,`flex`,`h-1/2`,`w-full`,`flex-1`,`flex-col`,`items-center`,`justify-center`,`space-y-4`,`p-12`],[1,`bg-base-200`,`fixed`,`bottom-0`,`left-1/2`,`z-10`,`mx-auto`,`my-2`,`flex`,`w-full`,`-translate-x-1/2`,`items-center`,`justify-end`,`rounded-sm`,`border-none`,`px-4`,`py-2`,3,`max-w-156`],[`icon`,``,`matRipple`,``,`mat-dialog-close`,``],[`icon`,``,`matRipple`,``,3,`routerLink`],[1,`h-24`,`w-full`],[3,`diameter`],[1,`text-center`,`opacity-50`],[1,`bg-base-200`,`fixed`,`bottom-0`,`left-1/2`,`z-10`,`mx-auto`,`my-2`,`flex`,`w-full`,`-translate-x-1/2`,`items-center`,`justify-end`,`rounded-sm`,`border-none`,`px-4`,`py-2`],[`btn`,``,`matRipple`,``,1,`flex`,`min-w-32`,`items-center`,`justify-center`,`gap-2`,3,`click`,`disabled`],[1,`border-base-300`,`bg-base-100`,`text-base-content`,`rounded`,`border`,`px-2`,`py-1`,`text-xs`,`leading-none`,`shadow-sm`]],template:function(i,o){i&1&&(yr(),$r(0,`div`,0),Ai$1(1,`div`,1),$r(2,`header`,2),Ai$1(3,`h2`,3),MT(4,`sanitize`),Xn$1(5,In,2,1),Yr(),$r(6,`main`,4),Xn$1(7,En,2,0)(8,Nn,4,2,`div`,5),Yr(),Xn$1(9,Vn,5,7,`footer`,6),Yr()),i&2&&(Et(),dt(`w-160`,!o.full_width())(`w-full`,o.full_width()),Et(),dt(`max-w-156`,!o.full_width()),Et(),hl(`innerHTML`,Hz(4,12,o.heading()),V$),Et(2),Qn$1(o.hide_close()?-1:5),Et(),dt(`max-w-156`,!o.full_width()),Et(),Qn$1(o.loading()?8:7),Et(2),Qn$1(!o.loading()&&!o.hide_confirm()?9:-1))},dependencies:[EA,xt,yt$1,ETe,bt$1,gt,fA,dA,e8,XP,l$1,Z],styles:[`main[_ngcontent-%COMP%]{scroll-margin-top:60px}
/*# sourceMappingURL=fullscreen-modal-shell.component.css.map */`]});return a})();function An(n,a){if(n&1&&(Ai$1(0,`div`,1),MT(1,`safe`)),n&2)hl(`innerHTML`,LT(1,1,Wr().changelog(),`html`),V$)}function Pn(n,a){n&1&&($r(0,`div`,2)(1,`icon`,3),gs(2,`close`),Yr(),$r(3,`div`,4),gs(4,`No changelog`),Yr()())}var Ei=(()=>{let a=class a{constructor(){this._data=g(Ye$1),this.loading=A(!1),this.changelog=oe(()=>N(this._data.changelog||``,{async:!1}))}};a.ɵfac=function(i){return new(i||a)},a.ɵcmp=Be({type:a,selectors:[[`changelog-modal`]],decls:3,vars:3,consts:[[3,`heading`,`hide_confirm`],[1,`markdown`,3,`innerHTML`],[1,`flex`,`flex-col`,`items-center`,`justify-center`,`space-y-2`],[1,`text-3xl`],[1,`text`]],template:function(i,o){i&1&&($r(0,`fullscreen-modal-shell`,0),Xn$1(1,An,2,4,`div`,1)(2,Pn,5,0,`div`,2),Yr()),i&2&&(hl(`heading`,`Changelog`)(`hide_confirm`,!0),Et(),Qn$1(o.changelog()?1:2))},dependencies:[Ii,ETe,qx],encapsulation:2});return a})();var Ni=(()=>{let a=class a{constructor(){this._document=g($),this._dialog=g(_t),this._changelog=A(null),this.available=oe(()=>this._changelog()!==null),this._load()}view(){let t=this._changelog();t!==null&&this._dialog.open(Ei,{data:{changelog:t}})}async _load(){try{let t=new URL(`CHANGELOG.md`,this._document.baseURI),i=await fetch(t);if(!i.ok)return;this._changelog.set(await i.text())}catch{}}};a.ɵfac=function(i){return new(i||a)},a.ɵprov=O({token:a,factory:a.ɵfac,providedIn:`root`});return a})();var be=(()=>{let a=class a extends ka{constructor(){super(),this._element=g(pe),this._renderer=g(Dt),this.sys=So$1(``),this.mod=So$1(``),this.index=So$1(1),this.bind=So$1(``),this.exec=So$1(``),this.delay=So$1(100),this.on_event=So$1(``,{alias:`onEvent`}),this.params=So$1(null),this.ignore=So$1(!1),this.modelInput=So$1(null,{alias:`model`}),this.model=gl(this.modelInput),this.modelChange=Zme(),this._binding=!1,this._old_model=null}ngOnInit(){Zk(tF(),t=>t).then(()=>this.bindVariable())}ngOnChanges(t){(t.sys||t.mod||t.bind)&&this.bindVariable();let i=this.model();(t.model||t.modelInput)&&this._old_model!==i&&this.model!=null&&(this._old_model=i,this.execute());let o=this.on_event();t.on_event&&o&&this.subscription(`on_event`,this._renderer.listen(this._element.nativeElement,o,()=>this.execute()))}bindVariable(){xi()&&this.bind()&&this.sys()&&this.mod()&&!this._binding&&this.timeout(`bind`,()=>{let i=TF(this.sys(),this.mod(),this.index()).variable(this.bind());this._binding=!0,this.subscription(`on_changes`,i.bindThenSubscribe(o=>{setTimeout(()=>{this._binding=!1,this.clearTimeout(`bound`),!this.ignore()&&(this._old_model=this.model(),this.model.set(o),this.modelChange.emit(this.model()))},10)})),this.timeout(`bound`,()=>this._binding=!1,200)},20)}execute(){xi()&&this.exec()&&this.sys()&&this.mod()&&!this._timers.execute&&this.timeout(`execute`,()=>{let t=TF(this.sys(),this.mod(),this.index()),i=this.params();this.bind()&&(i=this.params()||[this.model()]),t.execute(this.exec(),i||[]).then(o=>{this.bind()||(this.model.set(o),this._old_model=this.model(),this.modelChange.emit(this.model()))})},this.delay())}};a.ɵfac=function(i){return new(i||a)},a.ɵdir=z({type:a,selectors:[[`i`,`bind`,``],[``,`binding`,``],[`co-bind`]],inputs:{sys:[1,`sys`],mod:[1,`mod`],index:[1,`index`],bind:[1,`bind`],exec:[1,`exec`],delay:[1,`delay`],on_event:[1,`onEvent`,`on_event`],params:[1,`params`],ignore:[1,`ignore`],modelInput:[1,`model`,`modelInput`]},outputs:{modelChange:`modelChange`},features:[$e,Gt]});return a})();function Tt(n,a=2){let e=`${n}`;for(;e.length<a;)e=`0${e}`;return e}var Ri=(()=>{let a=class a{transform(t){let i=`${Tt(Math.floor(t/60)%60)}:${Tt(t%60)}`,o=Math.floor(t/60/60);return o>0&&(i=`${Tt(o)}:${i}`),i}};a.ɵfac=function(i){return new(i||a)},a.ɵpipe=zd({name:`duration`,type:a,pure:!0});return a})();function Dn(n,a){var e,t,i,o,d,x;if(n&1){let f=OT();$r(0,`div`,0)(1,`div`,3)(2,`i`,4),rL(`modelChange`,function(L){am(f);let X=Wr();return wz(X.rec_status,L)||(X.rec_status=L),cm(L)}),Yr(),$r(3,`i`,5),rL(`modelChange`,function(L){am(f);let X=Wr();return wz(X.rec_title,L)||(X.rec_title=L),cm(L)}),Yr(),$r(4,`i`,6),rL(`modelChange`,function(L){am(f);let X=Wr();return wz(X.rec_remaining,L)||(X.rec_remaining=L),cm(L)}),Yr(),$r(5,`i`,7),rL(`modelChange`,function(L){am(f);let X=Wr();return wz(X.rec_next,L)||(X.rec_next=L),cm(L)}),Yr()(),$r(6,`div`,8),gs(7),Yr(),$r(8,`div`,9)(9,`button`,10)(10,`icon`),gs(11,`stop`),Yr()()(),$r(12,`div`,9)(13,`button`,11)(14,`icon`),gs(15),Yr()()(),$r(16,`div`,12)(17,`div`,13),gs(18),MT(19,`translate`),Yr()(),$r(20,`div`,14)(21,`label`),gs(22),MT(23,`translate`),Yr(),$r(24,`div`,15),gs(25),MT(26,`duration`),Yr()(),$r(27,`div`,14)(28,`label`),gs(29),MT(30,`translate`),Yr(),$r(31,`div`,15),gs(32),MT(33,`duration`),Yr()()()}if(n&2){let f=Wr();Et(2),nL(`model`,f.rec_status),hl(`sys`,f.id)(`mod`,(e=f.capture_mod())==null?void 0:e.mod),Et(),nL(`model`,f.rec_title),hl(`sys`,f.id)(`mod`,(t=f.capture_mod())==null?void 0:t.mod),Et(),nL(`model`,f.rec_remaining),hl(`sys`,f.id)(`mod`,(i=f.capture_mod())==null?void 0:i.mod),Et(),nL(`model`,f.rec_next),hl(`sys`,f.id)(`mod`,(o=f.capture_mod())==null?void 0:o.mod),Et(2),Ri$1(` `,f.rec_title||`~Unnamed Recording~`,` `),Et(2),hl(`disabled`,!f.rec_status||f.rec_status===`stopped`)(`sys`,f.id)(`mod`,(d=f.capture_mod())==null?void 0:d.mod),Et(4),hl(`sys`,f.id)(`mod`,(x=f.capture_mod())==null?void 0:x.mod)(`exec`,f.rec_status===`playing`?`pause`:`start`),Zn$1(`place-action`,f.rec_status===`playing`?`pause`:`start`),Et(2),J0(f.rec_status===`playing`?`pause`:`play_arrow`),Et(2),dt(`bg-error`,f.rec_status===`playing`)(`text-error-content`,f.rec_status===`playing`)(`bg-warning`,f.rec_status===`paused`)(`text-warning-content`,f.rec_status===`paused`)(`bg-base-300`,f.rec_status===`stopped`),Et(),Ri$1(` `,Hz(19,36,f.rec_status===`playing`?`APP.CONTROL.STATE_RECORDING`:f.rec_status===`paused`?`APP.CONTROL.STATE_PAUSED`:`APP.CONTROL.STATE_IDLE`),` `),Et(4),J0(Hz(23,38,`APP.CONTROL.REMAINING`)),Et(3),J0(Hz(26,40,f.rec_remaining)),Et(4),J0(Hz(30,42,`APP.CONTROL.NEXT_RECORDING`)),Et(3),J0(Hz(33,44,f.rec_next))}}function On(n,a){var e,t,i;if(n&1){let o=OT();$r(0,`div`,2)(1,`button`,16),jt(`click`,function(){am(o);return cm(Wr().toggleMute())}),$r(2,`icon`),gs(3),Yr()(),$r(4,`mat-slider`,1)(5,`input`,17),jt(`ngModelChange`,function(x){am(o);return cm(Wr().setVolume(x))}),Yr(),gY(),Yr(),$r(6,`span`,18),gs(7),Yr()()}if(n&2){let o=Wr();Et(3),J0(o.volume_icon()),Et(),dt(`opacity-50`,(e=o.system())==null?void 0:e.mute),Et(),hl(`ngModel`,((t=o.system())==null?void 0:t.volume)||0),EY(),Et(2),Ri$1(` `,((i=o.system())==null?void 0:i.volume)||0,`% `)}}var fr=(()=>{let a=class a{constructor(){this._state=g(an$1),this.system=this._state.system,this.has_master_audio=this._state.has_master_audio,this.capture_mod=oe(()=>this._state.capture_list()[0]),this.volume_icon=oe(()=>{let t=this.system();return t!=null&&t.mute?`volume_off`:(t==null?void 0:t.volume)>0?`volume_up`:`volume_mute`}),this.setVolume=t=>{var i;(i=this.system())!=null&&i.mute&&this._state.setMute(!1),this._state.setVolume(t)},this.toggleMute=()=>{let t=this.system();this._state.setMute(!(t!=null&&t.mute))}}get id(){return this._state.id}};a.ɵfac=function(i){return new(i||a)},a.ɵcmp=Be({type:a,selectors:[[`control-status-bar`]],decls:3,vars:2,consts:[[`recording`,``,1,`divide-base-200`,`text-base-content`,`flex`,`items-center`,`divide-x`,`text-xs`],[1,`flex-1`],[1,`text-base-content`,`flex`,`w-lg`,`max-w-[50%]`,`items-center`,`space-x-2`,`px-4`,`py-2`],[`hidden`,``],[`binding`,``,`bind`,`status`,3,`modelChange`,`model`,`sys`,`mod`],[`binding`,``,`bind`,`title`,3,`modelChange`,`model`,`sys`,`mod`],[`binding`,``,`bind`,`remaining`,3,`modelChange`,`model`,`sys`,`mod`],[`binding`,``,`bind`,`next`,3,`modelChange`,`model`,`sys`,`mod`],[1,`flex`,`h-12`,`w-24`,`items-center`,`justify-center`,`p-2`,`text-center`],[1,`flex`,`h-12`,`w-12`,`items-center`,`justify-center`],[`place-action`,`stop`,`icon`,``,`matRipple`,``,`binding`,``,`onEvent`,`click`,`exec`,`stop`,1,`rounded-none`,3,`disabled`,`sys`,`mod`],[`icon`,``,`matRipple`,``,`binding`,``,`onEvent`,`click`,1,`rounded-none`,3,`sys`,`mod`,`exec`],[1,`flex`,`h-12`,`w-32`,`flex-col`,`p-2`],[1,`rounded-sm`,`p-2`,`text-center`,`uppercase`],[1,`h-12`,`p-2`],[1,``],[`icon`,``,`matRipple`,``,`mute`,``,3,`click`],[`matSliderThumb`,``,3,`ngModelChange`,`ngModel`],[`volume-level`,``,1,`w-12`,`text-right`,`tabular-nums`]],template:function(i,o){i&1&&(Xn$1(0,Dn,34,46,`div`,0),Ai$1(1,`div`,1),Xn$1(2,On,8,5,`div`,2)),i&2&&(Qn$1(o.capture_mod()?0:-1),Et(2),Qn$1(o.has_master_audio()!==!1?2:-1))},dependencies:[be,Le,ze,we,pIe,fk,aIe,Q5,fA,dA,ETe,Ri,l$1],styles:[`[_nghost-%COMP%]{display:flex;align-items:center;height:3.5rem;overflow:hidden}
/*# sourceMappingURL=status-bar.component.css.map */`]});return a})();var zn=[`panning_control`];var Ln=.25;var ee=(function(n){return n.Down=`down`,n.Up=`up`,n.Stop=`stop`,n})(ee||{});var te=(function(n){return n.Left=`left`,n.Right=`right`,n.Stop=`stop`,n})(te||{});var Vi=(()=>{let a=class a{constructor(){this.panInput=So$1(te.Stop,{alias:`pan`}),this.pan=gl(this.panInput),this.tiltInput=So$1(ee.Stop,{alias:`tilt`}),this.tilt=gl(this.tiltInput),this.panChange=Zme(),this.tiltChange=Zme(),this._panning_el=Qme(`panning_control`),this.thumb_transform=oe(()=>{let t=this.pan(),i=this.tilt();return`translate(${t===te.Stop?`0`:t===te.Left?`-50`:`50`}%, ${i===ee.Stop?`0`:i===ee.Up?`-50`:`50`}%)`})}startPan(t){var o;let i=this._panning_el().nativeElement;(o=i.setPointerCapture)==null||o.call(i,t.pointerId),this._box=i.getBoundingClientRect(),this.handlePan(t)}movePan(t){this._box&&this.handlePan(t)}handlePan(t){if(!this._box)return;let i=t.clientX-(this._box.left+this._box.width/2),o=t.clientY-(this._box.top+this._box.height/2),d=this.tilt(),x=this.pan();Math.hypot(i,o)<this._box.width/2*Ln?(this.tilt.set(ee.Stop),this.pan.set(te.Stop)):this._setDirection(Math.atan2(o,i)*180/Math.PI);let f=this.tilt();d!==f&&this.tiltChange.emit(f);let W=this.pan();x!==W&&this.panChange.emit(W)}_setDirection(t){this.tilt.set(t>=150||t<=-150||t>-30&&t<30?ee.Stop:t>0?ee.Down:ee.Up),this.pan.set(t>=60&&t<=120||t<=-60&&t>=-120?te.Stop:t>90||t<-90?te.Left:te.Right)}ngOnDestroy(){this.stopPan()}stopPan(){this._box&&(this._box=void 0,this.tilt.set(ee.Stop),this.pan.set(te.Stop),this.tiltChange.emit(ee.Stop),this.panChange.emit(te.Stop))}};a.ɵfac=function(i){return new(i||a)},a.ɵcmp=Be({type:a,selectors:[[`joystick`]],viewQuery:function(i,o){i&1&&Y0(o._panning_el,zn,5),i&2&&sz()},inputs:{panInput:[1,`pan`,`panInput`],tiltInput:[1,`tilt`,`tiltInput`]},outputs:{panChange:`panChange`,tiltChange:`tiltChange`},decls:16,vars:2,consts:[[`panning_control`,``],[`joystick`,``,1,`bg-base-300`,`relative`,`h-48`,`w-48`,`touch-none`,`rounded-full`,`text-white`,`select-none`,3,`pointerdown`,`pointermove`,`pointerup`,`pointercancel`,`lostpointercapture`,`contextmenu`],[1,`absolute`,`inset-0`,`flex`,`items-center`,`text-5xl`],[2,`transform`,`translateX(-.5rem)`],[1,`absolute`,`inset-0`,`flex`,`items-center`,`justify-end`,`text-5xl`],[2,`transform`,`translateX(.5rem)`],[1,`absolute`,`inset-0`,`flex`,`justify-center`,`text-5xl`],[2,`transform`,`translateY(-.5rem)`],[1,`absolute`,`inset-0`,`flex`,`items-end`,`justify-center`,`text-5xl`],[2,`transform`,`translateY(.5rem)`],[1,`bg-base-100`,`absolute`,`top-12`,`right-12`,`bottom-12`,`left-12`,`flex`,`items-center`,`justify-center`,`rounded-full`],[`thumb`,``,1,`bg-neutral`,`h-12`,`w-12`,`rounded-full`]],template:function(i,o){i&1&&($r(0,`div`,1,0),jt(`pointerdown`,function(x){return o.startPan(x)})(`pointermove`,function(x){return o.movePan(x)})(`pointerup`,function(){return o.stopPan()})(`pointercancel`,function(){return o.stopPan()})(`lostpointercapture`,function(){return o.stopPan()})(`contextmenu`,function(x){return x.preventDefault()}),$r(2,`div`,2)(3,`icon`,3),gs(4,` chevron_left `),Yr()(),$r(5,`div`,4)(6,`icon`,5),gs(7,`chevron_right`),Yr()(),$r(8,`div`,6)(9,`icon`,7),gs(10,`expand_less`),Yr()(),$r(11,`div`,8)(12,`icon`,9),gs(13,`expand_more`),Yr()(),$r(14,`div`,10),Ai$1(15,`div`,11),Yr()()),i&2&&(Et(15),sg(`transform`,o.thumb_transform()))},dependencies:[ETe],encapsulation:2});return a})();var ke=(function(n){return n.In=`in`,n.Out=`out`,n.Stop=`stop`,n})(ke||{});function bt(n,a){return n.index?[...a,n.index]:a}function Ai(n,a){return TF(n,`System`).execute(`selected_camera`,[a])}async function Pi(n,a,e,t){let i=TF(n,a.mod);await i.execute(`stop`,bt(a,[])),t!==ee.Stop&&await i.execute(`tilt`,bt(a,[t])),e!==te.Stop&&await i.execute(`pan`,bt(a,[e]))}function Mt(n,a,e){return TF(n,a.mod).execute(`zoom`,bt(a,[e]))}function Un(n,a){if(n&1&&($r(0,`mat-option`,6),gs(1),Yr()),n&2){let e=a.$implicit;hl(`value`,e),Et(),Ri$1(` `,e.name,` `)}}function jn(n,a){if(n&1){let e=OT();$r(0,`button`,27),jt(`click`,function(){am(e);let i=Wr().$implicit;return cm(Wr(3).removePreset(i))}),$r(1,`icon`),gs(2,`delete`),Yr()()}}function Wn(n,a){if(n&1){let e=OT();$r(0,`div`,18)(1,`button`,25),jt(`click`,function(){let i=am(e).$implicit;return cm(Wr(3).recallPreset(i))}),gs(2),Yr(),Xn$1(3,jn,3,0,`button`,26),Yr()}if(n&2){let e=a.$implicit,t=Wr(3);Et(),dt(`inverse`,t.preset()!==e),Et(),Ri$1(` `,e,` `),Et(),Qn$1(t.presets().length>1?3:-1)}}function Xn(n,a){if(n&1&&zW(0,Wn,4,4,`div`,18,WW),n&2)KW(Wr(2).presets())}function $n(n,a){n&1&&($r(0,`p`,10),gs(1),MT(2,`translate`),Yr()),n&2&&(Et(),Ri$1(` `,Hz(2,1,`APP.CONTROL.CAMERA_PRESETS_EMPTY`),` `))}function Gn(n,a){n&1&&($r(0,`div`,24)(1,`p`),gs(2),MT(3,`translate`),Yr()()),n&2&&(Et(2),Ri$1(` `,Hz(3,1,`APP.CONTROL.CAMERA_SELECT_MSG`),` `))}function qn(n,a){if(n&1){let e=OT();$r(0,`div`,1)(1,`mat-form-field`,4)(2,`mat-select`,5),MT(3,`translate`),jt(`ngModelChange`,function(i){am(e);return cm(Wr().selectCamera(i))}),zW(4,Un,2,2,`mat-option`,6,WW),Yr(),gY(),Yr(),$r(6,`div`,7)(7,`div`,8)(8,`h3`,9),gs(9),MT(10,`translate`),Yr(),Xn$1(11,Xn,2,0)(12,$n,3,3,`p`,10),$r(13,`button`,11)(14,`icon`),gs(15,`add`),Yr()(),$r(16,`mat-menu`,null,0)(18,`div`,12)(19,`mat-form-field`,13),jt(`click`,function(i){return i.stopPropagation()}),$r(20,`input`,14),MT(21,`translate`),jt(`ngModelChange`,function(i){am(e);return cm(Wr().new_preset.set(i))}),Yr(),gY(),Yr(),$r(22,`button`,15),jt(`click`,function(){am(e);let i=Wr();return i.addPreset(i.new_preset()),cm(i.new_preset.set(``))}),gs(23),MT(24,`translate`),Yr()()()(),$r(25,`div`,16)(26,`h3`,17),gs(27),MT(28,`translate`),Yr(),$r(29,`div`,18)(30,`joystick`,19),rL(`panChange`,function(i){am(e);let o=Wr();return wz(o.pan,i)||(o.pan=i),cm(i)})(`tiltChange`,function(i){am(e);let o=Wr();return wz(o.tilt,i)||(o.tilt=i),cm(i)}),jt(`panChange`,function(){am(e);return cm(Wr().moveCamera())})(`tiltChange`,function(){am(e);return cm(Wr().moveCamera())}),Yr(),$r(31,`div`,20)(32,`button`,21),jt(`pointerdown`,function(i){am(e);return cm(Wr().startZoom(`in`,i))})(`pointerup`,function(){am(e);return cm(Wr().stopZoom())})(`pointercancel`,function(){am(e);return cm(Wr().stopZoom())})(`lostpointercapture`,function(){am(e);return cm(Wr().stopZoom())})(`contextmenu`,function(i){return i.preventDefault()}),$r(33,`icon`),gs(34,`add`),Yr()(),$r(35,`div`,22),gs(36),MT(37,`translate`),Yr(),$r(38,`button`,23),jt(`pointerdown`,function(i){am(e);return cm(Wr().startZoom(`out`,i))})(`pointerup`,function(){am(e);return cm(Wr().stopZoom())})(`pointercancel`,function(){am(e);return cm(Wr().stopZoom())})(`lostpointercapture`,function(){am(e);return cm(Wr().stopZoom())})(`contextmenu`,function(i){return i.preventDefault()}),$r(39,`icon`),gs(40,`remove`),Yr()()()()(),Xn$1(41,Gn,4,3,`div`,24),Yr()()}if(n&2){let e=az(17),t=Wr();Et(2),hl(`ngModel`,t.active_camera())(`placeholder`,Hz(3,14,`APP.CONTROL.CAMERA_SELECT`)),EY(),Et(2),KW(t.camera_list()),Et(5),Ri$1(` `,Hz(10,16,`APP.CONTROL.CAMERA_PRESETS`),` `),Et(2),Qn$1(t.presets().length?11:12),Et(2),hl(`matMenuTriggerFor`,e),Et(7),hl(`ngModel`,t.new_preset())(`placeholder`,Hz(21,18,`APP.CONTROL.CAMERA_PRESETS_NEW`)),EY(),Et(2),hl(`disabled`,!t.new_preset()),Et(),Ri$1(` `,Hz(24,20,`APP.CONTROL.CAMERA_PRESETS_SAVE`),` `),Et(4),Ri$1(` `,Hz(28,22,`APP.CONTROL.CONTROLS`),` `),Et(3),nL(`pan`,t.pan)(`tilt`,t.tilt),Et(6),Ri$1(` `,Hz(37,24,`APP.CONTROL.ZOOM`),` `),Et(5),Qn$1(t.active_camera()?-1:41)}}function Qn(n,a){n&1&&($r(0,`div`,2)(1,`p`),gs(2),MT(3,`translate`),Yr()()),n&2&&(Et(2),J0(Hz(3,1,`APP.CONTROL.CAMERAS_EMPTY`)))}function Zn(n,a){var e,t;if(n&1){let i=OT();$r(0,`div`,3)(1,`i`,28),jt(`modelChange`,function(d){var f,W;am(i);let x=Wr();return cm(x.presets.set((f=x.active_camera())!=null&&f.index?(d||[])[(W=x.active_camera())==null?void 0:W.index]:d||[]))}),Yr()()}if(n&2){let i=Wr();Et(),hl(`sys`,i.id)(`mod`,(e=i.active_camera())==null?void 0:e.mod)(`bind`,(t=i.active_camera())!=null&&t.index?`camera_presets`:`presets`)}}var Di=(()=>{let a=class a{get id(){return this._state.id}constructor(){this._state=g(an$1),this._tooltip=g(le),this.active_camera=A(void 0),this.presets=A([]),this.preset=A(``),this.zoom=ke.Stop,this.pan=te.Stop,this.tilt=ee.Stop,this.new_preset=A(``),this.camera_list=this._state.available_cameras,this._selected_camera=this._state.selected_camera,this.close=()=>this._tooltip.close(),g(it).onDestroy(()=>this.stopZoom()),Ht(()=>{var o,d;let t=this._selected_camera(),i=(o=this.camera_list())==null?void 0:o.find(x=>x.id===t);(i==null?void 0:i.id)!==((d=H(this.active_camera))==null?void 0:d.id)&&this.preset.set(``),this.active_camera.set(i)})}selectCamera(t){this.active_camera.set(t),this.preset.set(``),Ai(this.id,t.id)}recallPreset(t){let i=this.active_camera();i!=null&&i.mod&&(this.preset.set(t),TF(this.id,i.mod).execute(`recall`,[t]))}addPreset(t){let i=this.active_camera();i&&TF(this.id,`System`).execute(`add_preset`,[t,i.id])}removePreset(t){let i=this.active_camera();i&&TF(this.id,`System`).execute(`remove_preset`,[t,i.id])}moveCamera(){let t=this.active_camera();t&&(clearTimeout(this._move_timeout),this._move_timeout=setTimeout(()=>Pi(this.id,t,this.pan,this.tilt),50))}async startZoom(t,i){var d,x;(x=(d=i.currentTarget)==null?void 0:d.setPointerCapture)==null||x.call(d,i.pointerId);let o=this.active_camera();o!=null&&o.mod&&(this.zoom=t===`in`?ke.In:ke.Out,await Mt(this.id,o,this.zoom).catch(()=>null))}stopZoom(){clearTimeout(this._stop_zoom_timeout),this._stop_zoom_timeout=setTimeout(()=>{if(this.zoom===ke.Stop)return;let t=this.active_camera();t!=null&&t.mod&&(this.zoom=ke.Stop,Mt(this.id,t,ke.Stop))},50)}};a.ɵfac=function(i){return new(i||a)},a.ɵcmp=Be({type:a,selectors:[[`camera-tooltip`]],decls:3,vars:2,consts:[[`menu`,`matMenu`],[1,`bg-base-100`,`my-2`,`flex`,`flex-col`,`rounded-sm`,`shadow-sm`],[1,`bg-base-100`,`my-2`,`flex`,`flex-col`,`rounded-sm`,`p-8`,`text-center`,`shadow-sm`],[`hidden`,``],[`appearance`,`outline`,1,`no-subscript`,`m-2`],[3,`ngModelChange`,`ngModel`,`placeholder`],[3,`value`],[1,`border-base-200`,`relative`,`mt-1`,`flex`,`flex-col`,`border-t`,`sm:flex-row`],[1,`border-base-200`,`relative`,`flex`,`flex-col`,`items-center`,`space-y-2`,`border-b`,`p-4`,`sm:border-r`,`sm:border-b-0`],[1,`mb-2`,`w-full`,`pr-12`,`text-xl`,`font-medium`],[1,`bg-base-300`,`w-full`,`rounded-sm`,`p-8`,`opacity-30`],[`icon`,``,`matRipple`,``,1,`absolute`,`top-1`,`right-4`,3,`matMenuTriggerFor`],[1,`flex`,`w-full`,`flex-col`,`px-2`],[`appearance`,`outline`,1,`h-14`,`w-full`,3,`click`],[`matInput`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[`btn`,``,`matRipple`,``,1,`w-full`,3,`click`,`disabled`],[1,`p-4`],[1,`mb-2`,`text-xl`,`font-medium`],[1,`flex`,`items-center`,`space-x-2`],[3,`panChange`,`tiltChange`,`pan`,`tilt`],[`zoom`,``,1,`border-base-200`,`flex`,`flex-col`,`items-center`,`rounded-sm`,`border`],[`zoom-in`,``,`icon`,``,`matRipple`,``,1,`touch-none`,`rounded-sm`,`select-none`,3,`pointerdown`,`pointerup`,`pointercancel`,`lostpointercapture`,`contextmenu`],[1,`border-base-200`,`flex`,`h-10`,`w-10`,`items-center`,`justify-center`,`border-t`,`border-b`,`text-xs`],[`zoom-out`,``,`icon`,``,`matRipple`,``,1,`touch-none`,`rounded-sm`,`select-none`,3,`pointerdown`,`pointerup`,`pointercancel`,`lostpointercapture`,`contextmenu`],[`no-camera`,``,1,`bg-base-100/75`,`absolute`,`inset-0`,`flex`,`items-center`,`justify-center`],[`preset`,``,`btn`,``,`matRipple`,``,1,`w-48`,3,`click`],[`icon`,``,`matRipple`,``,1,`border-error`,`bg-base-100`,`text-error`,`h-12`,`w-12`,`rounded-sm`,`border`],[`icon`,``,`matRipple`,``,1,`border-error`,`bg-base-100`,`text-error`,`h-12`,`w-12`,`rounded-sm`,`border`,3,`click`],[`binding`,``,3,`modelChange`,`sys`,`mod`,`bind`]],template:function(i,o){var d,x;i&1&&(Xn$1(0,qn,42,26,`div`,1)(1,Qn,4,3,`div`,2),Xn$1(2,Zn,2,3,`div`,3)),i&2&&(Qn$1((d=o.camera_list())!=null&&d.length?0:1),Et(2),Qn$1((x=o.active_camera())!=null&&x.mod?2:-1))},dependencies:[be,pIe,fk,aIe,Q5,fA,dA,ETe,Vi,lu,Vi$1,su,Re,St$1,Am,Rm,Yi$1,Qi,$x,l$1],encapsulation:2});return a})();function Jn(n,a){if(n&1){let e=OT();$r(0,`button`,3),jt(`click`,function(){let i=am(e).$implicit;return cm(Wr().join(i.id))}),gs(1),Yr()}if(n&2){let e=a.$implicit,t=Wr();dt(`inverse`,e.id!==t.active()),Et(),Ri$1(` `,e.name,` `)}}var Oi=(()=>{let a=class a{constructor(){this._state=g(an$1),this._join_modes=this._state.join_modes,this.modes=oe(()=>{let t=this._join_modes(),i=[];for(let o in t)i.push(m(l({},t[o]),{id:o}));return i}),this.active=this._state.joined_id,this.join=t=>this._state.join(t)}};a.ɵfac=function(i){return new(i||a)},a.ɵcmp=Be({type:a,selectors:[[`join-room-tooltip`]],decls:6,vars:3,consts:[[1,`bg-base-100`,`my-2`,`flex`,`flex-col`,`items-center`,`space-y-2`,`rounded-sm`,`p-2`,`shadow-sm`],[1,`bg-base-200`,`w-full`,`rounded-sm`,`px-4`,`py-2`,`text-xl`,`font-medium`],[`btn`,``,`matRipple`,``,1,`w-64`,3,`inverse`],[`btn`,``,`matRipple`,``,1,`w-64`,3,`click`]],template:function(i,o){i&1&&($r(0,`div`,0)(1,`h3`,1),gs(2),MT(3,`translate`),Yr(),zW(4,Jn,2,3,`button`,2,WW),Yr()),i&2&&(Et(2),Ri$1(` `,Hz(3,1,`APP.CONTROL.ACTION_JOIN_ROOMS`),` `),Et(2),KW(o.modes()))},dependencies:[fA,dA,l$1],encapsulation:2});return a})();var Yn=(n,a)=>a.binding;function Kn(n,a){if(n&1){let e=OT();$r(0,`div`,3)(1,`div`,4),gs(2),Yr(),$r(3,`i`,5),rL(`modelChange`,function(i){let o=am(e).$implicit;return wz(o.value,i)||(o.value=i),cm(i)}),Yr(),$r(4,`mat-slider`,6)(5,`input`,7),jt(`ngModelChange`,function(i){let o=am(e).$implicit;return cm(Wr(2).setLevel(o,i))}),Yr(),gY(),Yr()()}if(n&2){let e=a.$implicit,t=Wr(2);Et(2),Ri$1(` `,e==null?void 0:e.name,` `),Et(),nL(`model`,e.value),hl(`sys`,t.id)(`bind`,e==null?void 0:e.binding),Et(2),hl(`ngModel`,e==null?void 0:e.value),EY()}}function eo(n,a){if(n&1&&zW(0,Kn,6,5,`div`,3,Yn),n&2)KW(Wr().lights())}function to(n,a){n&1&&($r(0,`div`,2)(1,`p`),gs(2),MT(3,`translate`),Yr()()),n&2&&(Et(2),J0(Hz(3,1,`APP.CONTROL.LIGHTING_EMPTY`)))}var zi=(()=>{let a=class a{constructor(){this._state=g(an$1),this._tooltip=g(le),this.system=this._state.system_id,this.lights=this._state.lighting_levels,this.close=()=>this._tooltip.close()}get id(){return this._state.id}setLevel(t,i){clearTimeout(this._level_timeout),this._level_timeout=setTimeout(async()=>{let o=this.system();if(!o)return;let d=TF(o,`Lighting`);d&&await d.execute(`set_lighting_level`,[i,t==null?void 0:t.area])},50)}};a.ɵfac=function(i){return new(i||a)},a.ɵcmp=Be({type:a,selectors:[[`lighting-levels-tooltip`]],decls:6,vars:4,consts:[[1,`bg-base-100`,`my-2`,`flex`,`flex-col`,`items-center`,`space-y-4`,`rounded-sm`,`p-2`,`shadow-sm`],[1,`bg-base-200`,`w-full`,`rounded-sm`,`px-4`,`py-2`,`text-xl`,`font-medium`],[1,`flex`,`items-center`,`justify-center`,`p-8`],[1,`border-base-300`,`relative`,`min-w-[20rem]`,`rounded-sm`,`border`,`px-4`],[1,`bg-base-100`,`absolute`,`top-0`,`left-2`,`-translate-y-1/2`,`rounded-sm`,`px-2`,`py-1`,`text-sm`,`font-medium`],[`binding`,``,`mod`,`Lighting`,1,`hidden`,3,`modelChange`,`model`,`sys`,`bind`],[1,`mt-2`,`w-[calc(100%-1rem)]`],[`matSliderThumb`,``,3,`ngModelChange`,`ngModel`]],template:function(i,o){i&1&&($r(0,`div`,0)(1,`h3`,1),gs(2),MT(3,`translate`),Yr(),Xn$1(4,eo,2,0)(5,to,4,3,`div`,2),Yr()),i&2&&(Et(2),Ri$1(` `,Hz(3,2,`APP.CONTROL.LIGHTING_LEVELS`),` `),Et(2),Qn$1(o.lights().length>0?4:5))},dependencies:[Le,ze,we,pIe,fk,aIe,Q5,be,l$1],encapsulation:2});return a})();function io(n,a){if(n&1){let e=OT();$r(0,`button`,4),jt(`click`,function(){let i=am(e).$implicit;return cm(Wr(2).setScene(i.name))}),$r(1,`div`,5)(2,`icon`),gs(3),Yr(),$r(4,`div`,6),gs(5),Yr()()()}if(n&2){let e=a.$implicit;dt(`inverse`,Wr(2).scene()!==e.id),Et(2),sg(`opacity`,e.opacity||1),Et(),J0(e.icon),Et(2),J0(e.name)}}function no(n,a){if(n&1&&zW(0,io,6,6,`button`,3,WW),n&2)KW(Wr().scenes())}function oo(n,a){n&1&&($r(0,`div`,2)(1,`p`),gs(2),MT(3,`translate`),Yr()()),n&2&&(Et(2),J0(Hz(3,1,`APP.CONTROL.LIGHT_SCENES_EMPTY`)))}var Li=(()=>{let a=class a{constructor(){this._state=g(an$1),this._tooltip=g(le),this.scene=this._state.lighting_scene,this.scenes=this._state.lighting_scenes,this.close=()=>this._tooltip.close()}get id(){return this._state.id}setScene(t){let i=TF(this.id,`System`);i&&i.execute(`select_lighting_scene`,[t])}};a.ɵfac=function(i){return new(i||a)},a.ɵcmp=Be({type:a,selectors:[[`lighting-scene-tooltip`]],decls:6,vars:4,consts:[[1,`bg-base-100`,`my-2`,`flex`,`flex-col`,`items-center`,`space-y-2`,`rounded-sm`,`px-2`,`pt-2`,`pb-4`,`shadow-sm`],[1,`bg-base-200`,`w-full`,`rounded-sm`,`px-4`,`py-2`,`text-xl`,`font-medium`],[1,`flex`,`items-center`,`justify-center`,`p-8`],[`state`,``,`btn`,``,`matRipple`,``,1,`mx-2`,`w-64`,3,`inverse`],[`state`,``,`btn`,``,`matRipple`,``,1,`mx-2`,`w-64`,3,`click`],[1,`flex`,`flex-1`,`items-center`,`space-x-4`],[1,`flex-1`]],template:function(i,o){var d;i&1&&($r(0,`div`,0)(1,`h3`,1),gs(2),MT(3,`translate`),Yr(),Xn$1(4,no,2,0)(5,oo,4,3,`div`,2),Yr()),i&2&&(Et(2),Ri$1(` `,Hz(3,2,`APP.CONTROL.ACTION_LIGHT_SCENES`),` `),Et(2),Qn$1((d=o.scenes())!=null&&d.length?4:5))},dependencies:[ETe,fA,dA,l$1],encapsulation:2});return a})();var ao=(n,a)=>[n,a];function ro(n,a){if(n&1){let e=OT();$r(0,`div`,1)(1,`i`,4),rL(`modelChange`,function(i){am(e);let o=Wr();return wz(o.light,i)||(o.light=i),cm(i)}),Yr()()}if(n&2){let e=Wr();Et(),nL(`model`,e.light),hl(`sys`,e.id)(`bind`,`lights/`+e.lights()[0])}}function so(n,a){if(n&1&&($r(0,`button`,6),gs(1),Yr()),n&2){let e=a.$implicit,t=Wr(2);dt(`inverse`,e!==t.light.state),hl(`sys`,t.id)(`params`,Vz(5,ao,t.lights()[0],e)),Et(),Ri$1(` `,e,` `)}}function co(n,a){if(n&1&&zW(0,so,2,8,`button`,5,WW),n&2)KW(Wr().light.states)}function lo(n,a){n&1&&($r(0,`div`,3)(1,`p`),gs(2),MT(3,`translate`),Yr()()),n&2&&(Et(2),J0(Hz(3,1,`APP.CONTROL.LIGHTING_EMPTY`)))}var Fi=(()=>{let a=class a{constructor(){this._state=g(an$1),this._tooltip=g(le),this.lights=this._state.lights,this.close=()=>this._tooltip.close()}get id(){return this._state.id}};a.ɵfac=function(i){return new(i||a)},a.ɵcmp=Be({type:a,selectors:[[`lighting-tooltip`]],decls:7,vars:5,consts:[[1,`bg-base-100`,`my-2`,`flex`,`flex-col`,`items-center`,`space-y-2`,`rounded-sm`,`p-4`,`shadow-sm`],[`hidden`,``],[1,`mb-2`,`text-xl`,`font-medium`],[1,`flex`,`items-center`,`justify-center`,`p-8`],[`binding`,``,`mod`,`System`,3,`modelChange`,`model`,`sys`,`bind`],[`state`,``,`btn`,``,`matRipple`,``,`binding`,``,`onEvent`,`click`,`mod`,`System`,`exec`,`environment`,1,`w-64`,3,`inverse`,`sys`,`params`],[`state`,``,`btn`,``,`matRipple`,``,`binding`,``,`onEvent`,`click`,`mod`,`System`,`exec`,`environment`,1,`w-64`,3,`sys`,`params`]],template:function(i,o){var d,x;i&1&&($r(0,`div`,0),Xn$1(1,ro,2,3,`div`,1),$r(2,`h3`,2),gs(3),MT(4,`translate`),Yr(),Xn$1(5,co,2,0)(6,lo,4,3,`div`,3),Yr()),i&2&&(Et(),Qn$1(o.lights()[0]?1:-1),Et(2),Ri$1(` `,Hz(4,3,`APP.CONTROL.LIGHTING`),` `),Et(2),Qn$1((x=(d=o.light)==null?void 0:d.states)!=null&&x.length?5:6))},dependencies:[be,fA,dA,l$1],encapsulation:2});return a})();var Bi=(n,a)=>[n,a];var Hi=(n,a)=>a.name;function mo(n,a){if(n&1){let e=OT();$r(0,`div`,10)(1,`i`,11),rL(`modelChange`,function(i){let o=am(e).$implicit;return wz(o.state,i)||(o.state=i),cm(i)}),Yr()(),$r(2,`settings-toggle`,12),jt(`ngModelChange`,function(i){let o=am(e).$implicit,d=Wr(2).$implicit;return cm(Wr(2).setRoomMute(d.name,o.name,!i))}),gs(3),Yr(),gY()}if(n&2){let e=a.$implicit,t=Wr(2).$implicit,i=Wr(2);Et(),hl(`sys`,i.id)(`mod`,t.module_id||t.mod)(`bind`,t.binding),nL(`model`,e.state),Et(),hl(`toggle`,!0)(`ngModel`,e.state!==t.falsy_value),EY(),Et(),Ri$1(` `,e.name,` `)}}function po(n,a){if(n&1&&($r(0,`div`,5),zW(1,mo,4,7,null,null,Hi),Yr()),n&2){let e=Wr().$implicit;Et(),KW(e.rooms)}}function ho(n,a){if(n&1){let e=OT();$r(0,`div`,10)(1,`i`,13),rL(`modelChange`,function(i){am(e);let o=Wr().$implicit,d=Wr(2);return wz(d.volume[o.id],i)||(d.volume[o.id]=i),cm(i)}),Yr(),$r(2,`i`,14),rL(`modelChange`,function(i){am(e);let o=Wr().$implicit,d=Wr(2);return wz(d.mute[o.id],i)||(d.mute[o.id]=i),cm(i)}),Yr()()}if(n&2){let e=Wr().$implicit,t=Wr(2);Et(),hl(`sys`,t.id)(`mod`,e.mod)(`ignore`,t.changing()),nL(`model`,t.volume[e.id]),Et(),hl(`sys`,t.id)(`mod`,e.mod),nL(`model`,t.mute[e.id])}}function _o(n,a){if(n&1){let e=OT();$r(0,`div`,3)(1,`div`,4),gs(2),Yr(),Xn$1(3,po,3,0,`div`,5),$r(4,`div`,6)(5,`button`,7),jt(`click`,function(){let i=am(e).$implicit,o=Wr(2);return cm(o.mute[i.id]=!o.mute[i.id])}),$r(6,`icon`),gs(7),Yr()(),$r(8,`mat-slider`,8)(9,`input`,9),jt(`ngModelChange`,function(i){let o=am(e).$implicit,d=Wr(2);return d.setVolume(o.id,i),cm(d.onChange())}),Yr(),gY(),Yr()(),Xn$1(10,ho,3,7,`div`,10),Yr()}if(n&2){let e=a.$implicit,t=Wr(2);Et(2),Ri$1(` `,e.name,` `),Et(),Qn$1(e.rooms?3:-1),Et(),Zn$1(`name`,e.id),Et(3),J0(t.mute[e.id]?`volume_off`:t.volume[e.id]>0?`volume_up`:`volume_mute`),Et(2),hl(`ngModel`,t.mute[e.id]?0:t.volume[e.id]),EY(),Et(),Qn$1(e!=null&&e.mod?10:-1)}}function uo(n,a){if(n&1){let e=OT();$r(0,`div`,10)(1,`i`,11),rL(`modelChange`,function(i){let o=am(e).$implicit;return wz(o.state,i)||(o.state=i),cm(i)}),Yr()(),$r(2,`settings-toggle`,19),jt(`ngModelChange`,function(i){let o=am(e).$implicit,d=Wr(2).$implicit;return cm(Wr(2).setRoomMute(d.name,o.name,!i))}),gs(3),Yr(),gY()}if(n&2){let e=a.$implicit,t=Wr(2).$implicit,i=Wr(2);Et(),hl(`sys`,i.id)(`mod`,t.module_id||t.mod)(`bind`,t.binding),nL(`model`,e.state),Et(),hl(`toggle`,!0)(`ngModel`,e.state!==t.falsy_value),EY(),Et(),Ri$1(` `,e.name,` `)}}function fo(n,a){if(n&1&&($r(0,`div`,15),zW(1,uo,4,7,null,null,Hi),Yr()),n&2){let e=Wr().$implicit;Et(),KW(e.rooms)}}function bo(n,a){if(n&1){let e=OT();$r(0,`div`,10)(1,`i`,20),rL(`modelChange`,function(i){am(e);let o=Wr().$index,d=Wr(2);return wz(d.volume[o],i)||(d.volume[o]=i),cm(i)}),Yr(),$r(2,`i`,21),rL(`modelChange`,function(i){am(e);let o=Wr().$index,d=Wr(2);return wz(d.mute[o],i)||(d.mute[o]=i),cm(i)}),Yr()()}if(n&2){let e=Wr(),t=e.$implicit,i=e.$index,o=Wr(2);Et(),hl(`sys`,o.id)(`mod`,t.module_id)(`bind`,t.level_feedback)(`ignore`,o.changing())(`params`,Vz(11,Bi,t.level_id,o.volume[i])),nL(`model`,o.volume[i]),Et(),hl(`sys`,o.id)(`mod`,t.module_id)(`bind`,t.mute_feedback)(`params`,Vz(14,Bi,t.mute_id,o.mute[i])),nL(`model`,o.mute[i])}}function go(n,a){var e,t;if(n&1){let i=OT();$r(0,`div`,3)(1,`div`,4),gs(2),Yr(),Xn$1(3,fo,3,0,`div`,15),$r(4,`div`,16)(5,`button`,17),jt(`click`,function(){let d=am(i).$index,x=Wr(2);return cm(x.mute[d]=!x.mute[d])}),$r(6,`icon`),gs(7),Yr()(),$r(8,`mat-slider`,18)(9,`input`,9),jt(`ngModelChange`,function(d){let x=am(i).$index,f=Wr(2);return f.setVolume(x,d),cm(f.onChange())}),Yr(),gY(),Yr()(),Xn$1(10,bo,3,17,`div`,10),Yr()}if(n&2){let i=a.$implicit,o=a.$index,d=Wr(2);Et(2),Ri$1(` `,i.name,` `),Et(),Qn$1(i.rooms?3:-1),Et(),Zn$1(`name`,i.name),Et(),hl(`disabled`,!((e=i.mute_id)!=null&&e.length)),Et(2),J0(d.mute[o]?`volume_off`:d.volume[o]>0?`volume_up`:`volume_mute`),Et(),hl(`disabled`,!((t=i.level_id)!=null&&t.length))(`min`,i.min_level||0)(`max`,i.max_level||100),Et(),hl(`ngModel`,d.mute[o]?0:d.volume[o]),EY(),Et(),Qn$1(i.module_id?10:-1)}}function xo(n,a){if(n&1&&(zW(0,_o,11,6,`div`,3,WW),zW(2,go,11,10,`div`,3,WW)),n&2){let e=Wr();KW(e.mic_list()),Et(2),KW(e.microphones())}}function vo(n,a){n&1&&($r(0,`div`,2)(1,`p`),gs(2),MT(3,`translate`),Yr()()),n&2&&(Et(2),J0(Hz(3,1,`APP.CONTROL.MICS_EMPTY`)))}var Ui=(()=>{let a=class a{constructor(){this._state=g(an$1),this._tooltip=g(le),this.mic_list=oe(()=>this._state.mic_list()),this.microphones=this._state.microphones,this.volume={},this.mute={},this.close=()=>this._tooltip.close(),this.changing=A(!1)}get id(){return this._state.id}setRoomMute(t,i,o){let d=TF(this.id,`System`);d&&d.execute(`mic_room_selection`,[t,i,o])}setVolume(t,i){this.volume[t]=i,this.mute[t]=!1}onChange(){this.changing.set(!0),clearTimeout(this._change_timeout),this._change_timeout=setTimeout(()=>this.changing.set(!1),1e3)}};a.ɵfac=function(i){return new(i||a)},a.ɵcmp=Be({type:a,selectors:[[`microphone-tooltip`]],decls:6,vars:4,consts:[[1,`bg-base-100`,`my-2`,`flex`,`max-h-[65vh]`,`max-w-md`,`flex-col`,`items-center`,`space-y-5`,`overflow-x-hidden`,`overflow-y-auto`,`rounded-sm`,`p-2`,`shadow-sm`],[1,`bg-base-200`,`sticky`,`top-0`,`z-20`,`w-full`,`rounded-sm`,`px-4`,`py-2`,`text-xl`,`font-medium`],[1,`flex`,`items-center`,`justify-center`,`p-8`],[1,`border-base-300`,`relative`,`min-w-[20rem]`,`rounded-sm`,`border`,`p-2`],[1,`bg-base-100`,`absolute`,`top-0`,`left-2`,`-translate-y-1/2`,`rounded-full`,`rounded-sm`,`px-2`,`py-1`,`text-sm`,`font-medium`],[1,`flex`,`flex-wrap`],[1,`mt-1`,`flex`,`w-64`,`items-center`,`space-x-2`,`p-4`],[`mute`,``,`icon`,``,`matRipple`,``,3,`click`],[1,`flex-1`],[`matSliderThumb`,``,3,`ngModelChange`,`ngModel`],[`hidden`,``],[`binding`,``,3,`modelChange`,`sys`,`mod`,`bind`,`model`],[1,`m-1`,`flex-1`,3,`ngModelChange`,`toggle`,`ngModel`],[`binding`,``,`bind`,`volume`,`exec`,`volume`,3,`modelChange`,`sys`,`mod`,`ignore`,`model`],[`binding`,``,`bind`,`mute`,`exec`,`mute`,3,`modelChange`,`sys`,`mod`,`model`],[1,`mt-2`,`flex`,`flex-wrap`],[1,`mt-1`,`flex`,`min-w-64`,`items-center`,`space-x-2`,`pr-4`],[`mute`,``,`icon`,``,`matRipple`,``,3,`click`,`disabled`],[1,`flex-1`,3,`disabled`,`min`,`max`],[1,`m-1`,`min-w-[40%]`,`flex-1`,3,`ngModelChange`,`toggle`,`ngModel`],[`binding`,``,`exec`,`fader`,3,`modelChange`,`sys`,`mod`,`bind`,`ignore`,`params`,`model`],[`binding`,``,`exec`,`mute`,3,`modelChange`,`sys`,`mod`,`bind`,`params`,`model`]],template:function(i,o){var d,x;i&1&&($r(0,`div`,0)(1,`h3`,1),gs(2),MT(3,`translate`),Yr(),Xn$1(4,xo,4,0)(5,vo,4,3,`div`,2),Yr()),i&2&&(Et(2),Ri$1(` `,Hz(3,2,`APP.CONTROL.ACTION_MICS`),` `),Et(2),Qn$1((d=o.mic_list())!=null&&d.length||(x=o.microphones())!=null&&x.length?4:5))},dependencies:[be,Le,ze,we,pIe,fk,aIe,Q5,fA,dA,wi,ETe,l$1],encapsulation:2});return a})();function ko(n,a){if(n&1){let e=OT();$r(0,`button`,3),jt(`click`,function(){let i=am(e).$implicit;return cm(Wr().pressed.emit(i))}),gs(1),Yr()}if(n&2){let e=a.$implicit;Et(),Ri$1(` `,e,` `)}}function Co(n,a){if(n&1){let e=OT();$r(0,`button`,4),jt(`click`,function(){am(e);return cm(Wr().pressed.emit(`\b`))}),gs(1),MT(2,`translate`),Yr()}if(n&2){let e=Wr();dt(`absolute`,!e.inline())(`bottom-0`,!e.inline())(`-right-4`,!e.inline())(`translate-x-full`,!e.inline()),Et(),Ri$1(` `,Hz(2,9,`APP.CONTROL.BACKSPACE`),` `)}}var ji=(()=>{let a=class a{constructor(){this.backspace=So$1(!0),this.inline=So$1(!1),this.pressed=Zme(),this.digits=[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`*`,`0`,`#`]}};a.ɵfac=function(i){return new(i||a)},a.ɵcmp=Be({type:a,selectors:[[`dialpad`]],inputs:{backspace:[1,`backspace`],inline:[1,`inline`]},outputs:{pressed:`pressed`},decls:4,vars:1,consts:[[`dialpad`,``,1,`text-base-content!`,`relative`,`flex`,`w-60`,`flex-wrap`,`items-center`,`justify-center`],[`digit`,``,`matRipple`,``,1,`bg-base-100`,`relative`,`m-2`,`flex`,`h-16`,`w-16`,`items-center`,`justify-center`,`rounded-lg`,`active:top-1`],[`digit`,``,`matRipple`,``,1,`bg-base-100`,`m-2`,`flex`,`h-16`,`w-60`,`flex-1`,`items-center`,`justify-center`,`rounded-lg`,`active:-bottom-1`,3,`absolute`,`bottom-0`,`-right-4`,`translate-x-full`],[`digit`,``,`matRipple`,``,1,`bg-base-100`,`relative`,`m-2`,`flex`,`h-16`,`w-16`,`items-center`,`justify-center`,`rounded-lg`,`active:top-1`,3,`click`],[`digit`,``,`matRipple`,``,1,`bg-base-100`,`m-2`,`flex`,`h-16`,`w-60`,`flex-1`,`items-center`,`justify-center`,`rounded-lg`,`active:-bottom-1`,3,`click`]],template:function(i,o){i&1&&($r(0,`div`,0),zW(1,ko,2,1,`button`,1,WW),Xn$1(3,Co,3,11,`button`,2),Yr()),i&2&&(Et(),KW(o.digits),Et(2),Qn$1(o.backspace()?3:-1))},dependencies:[fA,dA,l$1],styles:[`[digit][_ngcontent-%COMP%]{box-shadow:0 4px 0 0 var(--%NS%base-300);border:2px solid var(--%NS%base-300);transition:top .2s,bottom .2s,box-shadow .2s}[digit][_ngcontent-%COMP%]:active{box-shadow:none}
/*# sourceMappingURL=dialpad.component.css.map */`]});return a})();function yo(n,a){if(n&1){let e=OT();$r(0,`button`,7),jt(`click`,function(){am(e);return cm(Wr().clear())}),$r(1,`icon`),gs(2,`close`),Yr()()}}function So(n,a){if(n&1){let e=OT();$r(0,`button`,8),jt(`click`,function(){am(e);return cm(Wr().dialPhone())}),gs(1),MT(2,`translate`),Yr()}n&2&&(Et(),Ri$1(` `,Hz(2,1,`APP.CONTROL.PHONE_DIAL`),` `))}function To(n,a){if(n&1){let e=OT();$r(0,`button`,9),jt(`click`,function(){am(e);return cm(Wr().hangup())}),gs(1),MT(2,`translate`),Yr()}n&2&&(Et(),Ri$1(` `,Hz(2,1,`APP.CONTROL.PHONE_HANGUP`),` `))}var Wi=(()=>{let a=class a{constructor(){this._state=g(an$1),this.system=this._state.system,this.dialPhone=()=>this.action(`qsc_dial_makecall`),this.hangup=()=>this.action(`qsc_dial_hangup`),this.clear=()=>this.action(`qsc_dial_pad_clear`)}async handleInput(t){await TF(this._state.id,`System`).execute(`qsc_dial_pad`,[t])}async action(t){await TF(this._state.id,`System`).execute(t)}};a.ɵfac=function(i){return new(i||a)},a.ɵcmp=Be({type:a,selectors:[[`phone-dialling-tooltip`]],decls:8,vars:8,consts:[[1,`bg-base-100`,`my-2`,`flex`,`flex-col`,`items-center`,`space-y-2`,`rounded-sm`,`p-4`,`shadow-sm`],[`appearance`,`outline`,1,`h-13`,`w-full`],[`matInput`,``,`readonly`,``,3,`ngModel`,`placeholder`],[`icon`,``,`matRipple`,``,`matSuffix`,``],[3,`pressed`,`inline`],[`btn`,``,`matRipple`,``,1,`w-full`],[`btn`,``,`matRipple`,``,1,`inverse`,`w-full`],[`icon`,``,`matRipple`,``,`matSuffix`,``,3,`click`],[`btn`,``,`matRipple`,``,1,`w-full`,3,`click`],[`btn`,``,`matRipple`,``,1,`inverse`,`w-full`,3,`click`]],template:function(i,o){var d,x,f,W,L,X;i&1&&($r(0,`div`,0)(1,`mat-form-field`,1),Ai$1(2,`input`,2),MT(3,`translate`),gY(),Xn$1(4,yo,3,0,`button`,3),Yr(),$r(5,`dialpad`,4),jt(`pressed`,function(Fe){return o.handleInput(Fe)}),Yr(),Xn$1(6,So,3,3,`button`,5),Xn$1(7,To,3,3,`button`,6),Yr()),i&2&&(Et(2),hl(`ngModel`,(d=o.system())==null?void 0:d.phone)(`placeholder`,Hz(3,6,`FORM.PHONE`)),EY(),Et(2),Qn$1((x=o.system())!=null&&x.phone?4:-1),Et(),hl(`inline`,!0),Et(),Qn$1((f=o.system())!=null&&f.offhook||(W=o.system())!=null&&W.ringing?-1:6),Et(),Qn$1((L=o.system())!=null&&L.offhook||(X=o.system())!=null&&X.ringing?7:-1))},dependencies:[Re,St$1,as,Am,Rm,fA,dA,ETe,ji,pIe,fk,aIe,Q5,l$1],encapsulation:2});return a})();var Xi=(()=>{let a=class a{constructor(){this._state=g(an$1),this._tooltip=g(le),this.shutdown=(t=!1)=>this._state.powerOff(t),this.close=()=>this._tooltip.close()}};a.ɵfac=function(i){return new(i||a)},a.ɵcmp=Be({type:a,selectors:[[`power-tooltip`]],decls:10,vars:11,consts:[[1,`bg-base-100`,`my-2`,`flex`,`flex-col`,`items-center`,`space-y-2`,`rounded-sm`,`p-4`,`shadow-sm`],[1,`mb-2`,`text-center`,`font-medium`,3,`innerHTML`],[`btn`,``,`matRipple`,``,1,`w-64`,3,`click`],[`btn`,``,`matRipple`,``,1,`inverse`,`w-64`,3,`click`]],template:function(i,o){i&1&&($r(0,`div`,0),Ai$1(1,`h3`,1),MT(2,`translate`),MT(3,`sanitize`),$r(4,`button`,2),jt(`click`,function(){return o.shutdown(!0)}),gs(5),MT(6,`translate`),Yr(),$r(7,`button`,3),jt(`click`,function(){return o.close()}),gs(8),MT(9,`translate`),Yr()()),i&2&&(Et(),hl(`innerHTML`,Hz(3,5,Hz(2,3,`APP.CONTROL.POWER_MSG`)),V$),Et(4),Ri$1(` `,Hz(6,7,`APP.CONTROL.POWER_CONFIRM`),` `),Et(3),Ri$1(` `,Hz(9,9,`APP.CONTROL.POWER_CANCEL`),` `))},dependencies:[fA,dA,l$1,Z],encapsulation:2});return a})();function Mo(n,a){if(n&1){let e=OT();$r(0,`button`,6),jt(`click`,function(){let i=am(e).$implicit,o=Wr().$implicit;return cm(Wr(2).performAction(o.name,i.name))}),$r(1,`icon`),gs(2),Yr()()}if(n&2){let e=a.$implicit;hl(`matTooltip`,e.name),Et(2),J0(e.icon)}}function wo(n,a){if(n&1&&($r(0,`div`,3)(1,`div`,4),gs(2),Yr(),zW(3,Mo,3,2,`button`,5,WW),Yr()),n&2){let e=a.$implicit;Et(2),Ri$1(` `,e.name,` `),Et(),KW(e.controls)}}function Io(n,a){if(n&1&&zW(0,wo,5,1,`div`,3,WW),n&2)KW(Wr().list())}function Eo(n,a){n&1&&($r(0,`div`,2)(1,`p`),gs(2),MT(3,`translate`),Yr()()),n&2&&(Et(2),J0(Hz(3,1,`APP.CONTROL.ACCESSORIES_EMPTY`)))}var $i=(()=>{let a=class a{constructor(){this._state=g(an$1),this._tooltip=g(le),this.list=this._state.room_accessories,this.close=()=>this._tooltip.close()}get id(){return this._state.id}performAction(t,i){let o=TF(this.id,`System`);o&&o.execute(`accessory_exec`,[t,i])}};a.ɵfac=function(i){return new(i||a)},a.ɵcmp=Be({type:a,selectors:[[`room-accessory-tooltip`]],decls:6,vars:4,consts:[[1,`bg-base-100`,`my-2`,`flex`,`flex-col`,`items-center`,`space-y-2`,`rounded-sm`,`p-2`,`shadow-sm`],[1,`bg-base-200`,`w-full`,`rounded-sm`,`px-4`,`py-2`,`text-xl`,`font-medium`],[1,`flex`,`items-center`,`justify-center`,`p-8`],[1,`border-base-300`,`flex`,`w-full`,`min-w-[20rem]`,`items-center`,`space-x-2`,`rounded-sm`,`border`,`p-2`],[1,`flex-1`,`pr-8`,`pl-2`,`font-medium`],[`state`,``,`icon`,``,`matRipple`,``,1,`border-primary`,`text-primary`,`rounded-sm`,`border`,`border-solid`,3,`matTooltip`],[`state`,``,`icon`,``,`matRipple`,``,1,`border-primary`,`text-primary`,`rounded-sm`,`border`,`border-solid`,3,`click`,`matTooltip`]],template:function(i,o){var d;i&1&&($r(0,`div`,0)(1,`h3`,1),gs(2),MT(3,`translate`),Yr(),Xn$1(4,Io,2,0)(5,Eo,4,3,`div`,2),Yr()),i&2&&(Et(2),Ri$1(` `,Hz(3,2,`APP.CONTROL.ACCESSORIES`),` `),Et(2),Qn$1((d=o.list())!=null&&d.length?4:5))},dependencies:[fA,dA,ETe,Yt,mt,l$1],encapsulation:2});return a})();var No=[`Idle`,`Disconnecting`];var Gi=(()=>{let a=class a{constructor(){this._control=g(an$1),this.connected=this._bindTo(`connected`),this._calls=this._bindTo(`calls`),this.call=oe(()=>{var i;let t=this._calls();for(let o in t){let d=(i=t[o])==null?void 0:i.Status;if(d&&!No.includes(d))return t[o]}return null}),this.mic_mute=this._bindTo(`mic_mute`),this.presentation_mode=this._bindTo(`presentation_mode`),this.video_layout=this._bindTo(`video_layout`),this.show_camera_pip=this._bindTo(`selfview`),this._speaker_track=this._bindTo(`speaker_track`),this.speaker_track=oe(()=>(this._speaker_track()||{})[`Status/Cameras/SpeakerTrack/Availability`])}showCameraPIP(t){return this._exec(`show_camera_pip`,[t])}muteMicrophone(t){return this._exec(`mic_mute`,[t])}setVideoLayout(t){return this._exec(`video_layout`,[t])}setPresentationMode(t){return this._exec(`presentation_mode`,[t])}async dial(t){let i=this._control.id;if(i)return TF(i,`VidConf`).execute(`dial`,[t])}async hangup(){let t=this._control.id;if(t)return TF(t,`VidConf`).execute(`hangup`,[])}sendDTMF(t){return this._exec(`dtmf_send`,[t])}async toggleCallOnHold(){let t=this.call();return t?this._exec(t.Status===`OnHold`?`call_resume`:`call_place_on_hold`):!1}async _exec(t,i=[]){let o=this._control.id;if(!o)return!1;try{return await TF(o,`VidConf`).execute(t,i),!0}catch(d){return SU(Oo$1(`APP.CONTROL.VC_COMMAND_ERROR`,{error:on$1(d)})),!1}}_bindTo(t){return na(this._control.system_id,`VidConf`,t,null)}};a.ɵfac=function(i){return new(i||a)},a.ɵprov=O({token:a,factory:a.ɵfac,providedIn:`root`});return a})();var qi=(n,a)=>a.id;function Ro(n,a){if(n&1){let e=OT();$r(0,`div`,7)(1,`button`,8),jt(`click`,function(){am(e);let i=Wr().$implicit;return cm(i.action?i.action():``)}),$r(2,`icon`),gs(3),Yr()()()}if(n&2){let e=Wr().$implicit,t=Wr();sg(`z-index`,(e.id===`join`||e.id===`power`)&&!t.join_status()[0]&&t.join_status()[1]?`99`:``),hl(`content`,t.cmp[e.id]),Et(),dt(`bg-success!`,e.enabled),Zn$1(`type`,e.id),Et(2),J0(e.icon)}}function Vo(n,a){if(n&1&&Xn$1(0,Ro,4,7,`div`,6),n&2){let e=a.$implicit;Qn$1(e.show?0:-1)}}function Ao(n,a){if(n&1){let e=OT();$r(0,`div`,9),jt(`click`,function(i){am(e);let o=Wr().$implicit;return i.stopPropagation(),cm(o.action?o.action():``)}),$r(1,`button`,10)(2,`div`,11)(3,`icon`,12),gs(4),Yr(),$r(5,`span`),gs(6),Yr()()()()}if(n&2){let e=Wr().$implicit;hl(`content`,Wr().cmp[e.id]),Et(),Zn$1(`type`,e.id),Et(3),J0(e.icon),Et(2),J0(e.name)}}function Po(n,a){if(n&1&&Xn$1(0,Ao,7,4,`div`,7),n&2){let e=a.$implicit;Qn$1(e.show?0:-1)}}var Do=3e3;var ce=(function(n){return n[n.PHONE=0]=`PHONE`,n[n.LIGHT_SCENES=1]=`LIGHT_SCENES`,n[n.LIGHTS=2]=`LIGHTS`,n[n.LIGHT_LEVELS=3]=`LIGHT_LEVELS`,n[n.ACCESSORIES=4]=`ACCESSORIES`,n[n.MICS=5]=`MICS`,n[n.CAMERA=6]=`CAMERA`,n[n.HELP=7]=`HELP`,n[n.JOIN=8]=`JOIN`,n[n.POWER=9]=`POWER`,n})(ce||{});var yc=(()=>{let a=class a extends ka{constructor(){super(...arguments),this._settings=g(rc),this._state=g(an$1),this._call=g(Gi),this._org=g(QS),this.system=this._state.system,this.join_status=this._state.join_status,this._mic_list=this._state.mic_list,this._camera_list=this._state.camera_list,this._lights_list=this._state.lights,this._room_accessories=this._state.room_accessories,this._microphones=this._state.microphones,this._join_modes=this._state.join_modes,this._joined=this._state.joined,this._speaker_track=this._call.speaker_track,this._lighting_scenes=this._state.lighting_scenes,this._help_items=this._state.help_items,this._hide_join_button=this._state.hide_join_button,this._lighting_levels=this._state.lighting_levels,this.cmp={phone:Wi,lighting:Fi,lighting_levels:zi,lighting_scenes:Li,power:Xi,blinds:$i,camera:Di,mics:Ui,join:Oi},this._base_actions=[{id:`phone`,name:Oo$1(`APP.CONTROL.ACTION_PHONE`),icon:`call`,show:!0,enabled:!1},{id:`lighting_scenes`,name:Oo$1(`APP.CONTROL.ACTION_LIGHT_SCENES`),icon:`emoji_objects`,show:!0,enabled:!1},{id:`lighting`,name:Oo$1(`APP.CONTROL.ACTION_LIGHTING`),icon:`brightness_high`,show:!0,enabled:!1},{id:`lighting_levels`,name:Oo$1(`APP.CONTROL.ACTION_LIGHTING_LEVELS`),icon:`light`,show:!0,enabled:!1},{id:`blinds`,name:Oo$1(`APP.CONTROL.ACTION_ACCESSORIES`),icon:`unfold_more`,show:!0,enabled:!1},{id:`mics`,name:Oo$1(`APP.CONTROL.ACTION_MICS`),icon:`mic`,show:!0,enabled:!1},{id:`camera`,name:Oo$1(`APP.CONTROL.ACTION_CAMERAS`),icon:`photo_camera`,show:!0,enabled:!1},{id:`help`,name:Oo$1(`APP.CONTROL.ACTION_HELP`),icon:`help`,show:!0,enabled:!1,action:()=>this.viewHelp()},{id:`join`,name:Oo$1(`APP.CONTROL.ACTION_JOIN_ROOMS`),icon:`link`,show:!0,enabled:!1},{id:`power`,name:Oo$1(`APP.CONTROL.ACTION_POWER`),icon:`power_settings_new`,show:!0,enabled:!1}],this.action_list=oe(()=>{var wt;let t=this.system(),i=this._mic_list(),o=this._camera_list(),d=this._lights_list(),x=this._room_accessories(),f=this._microphones(),W=this._join_modes(),L=this._joined(),X=this._speaker_track(),Ce=this._lighting_scenes(),Fe=this._help_items(),Qi=this._hide_join_button(),Zi=this._lighting_levels(),oe=this._base_actions.map(Ji=>l({},Ji));return oe[ce.PHONE].show=!!(t!=null&&t.dial_bindings),oe[ce.PHONE].enabled=(t==null?void 0:t.offhook)||(t==null?void 0:t.ringing),oe[ce.LIGHTS].show=(d==null?void 0:d.length)>0,oe[ce.ACCESSORIES].show=(x==null?void 0:x.length)>0,oe[ce.MICS].show=(i==null?void 0:i.length)>0||(f==null?void 0:f.length)>0,oe[ce.JOIN].show=!Qi&&Object.keys(W||{}).length>1,oe[ce.JOIN].enabled=((wt=L==null?void 0:L.room_ids)==null?void 0:wt.length)>1,oe[ce.CAMERA].show=(o==null?void 0:o.length)>0&&!X,oe[ce.HELP].show=(Fe==null?void 0:Fe.length)>0,oe[ce.LIGHT_LEVELS].show=Zi!=null,oe[ce.LIGHT_SCENES].show=(Ce==null?void 0:Ce.length)>0,oe}),this.viewHelp=()=>this._state.viewHelp(),this.logo=oe(()=>(this._org.active_building(),(this._settings.theme===`dark`?this._settings.get(`app.logo_dark`):this._settings.get(`app.logo_light`))||{})),this._can_change_room=this._state.canChangeRoom()}startHold(){this._can_change_room&&this.timeout(`change_room`,()=>this._state.changeRoom(),Do)}cancelHold(){this.clearTimeout(`change_room`)}};a.ɵfac=(()=>{let t;return function(o){return(t||(t=_n(a)))(o||a)}})(),a.ɵcmp=Be({type:a,selectors:[[`topbar-header`]],features:[$e],decls:14,vars:3,consts:[[`menu`,`matMenu`],[1,`flex-1`,`px-4`],[`auth`,``,`alt`,`Logo`,`draggable`,`false`,1,`h-12`,`select-none`,3,`pointerdown`,`pointerup`,`pointerleave`,`pointercancel`,`contextmenu`,`source`],[1,`text-base-content`,`p-4`,`text-lg`],[1,`hidden`,`flex-1`,`items-center`,`justify-end`,`space-x-2`,`p-4`,`sm:flex`],[`icon`,``,`matRipple`,``,1,`text-base-content`,`mr-2`,`sm:hidden`,3,`matMenuTriggerFor`],[`customTooltip`,``,3,`content`,`z-index`],[`customTooltip`,``,3,`content`],[`icon`,``,`matRipple`,``,1,`bg-base-200`,`text-base-content`,3,`click`],[`customTooltip`,``,3,`click`,`content`],[`mat-menu-item`,``],[1,`flex`,`items-center`,`text-base`],[1,`mr-2`]],template:function(i,o){var d,x;if(i&1&&($r(0,`div`,1)(1,`img`,2),jt(`pointerdown`,function(){return o.startHold()})(`pointerup`,function(){return o.cancelHold()})(`pointerleave`,function(){return o.cancelHold()})(`pointercancel`,function(){return o.cancelHold()})(`contextmenu`,function(W){return W.preventDefault()}),Yr()(),$r(2,`div`,3),gs(3),Yr(),$r(4,`div`,4),zW(5,Vo,1,1,null,null,qi),Yr(),$r(7,`button`,5)(8,`icon`),gs(9,`more_vert`),Yr()(),$r(10,`mat-menu`,null,0),zW(12,Po,1,1,null,null,qi),Yr()),i&2){let f=az(11);Et(),hl(`source`,((d=o.logo())==null?void 0:d.src)||o.logo()),Et(2),Ri$1(` `,(x=o.system())==null?void 0:x.name,` `),Et(2),KW(o.action_list()),Et(2),hl(`matMenuTriggerFor`,f),Et(5),KW(o.action_list())}},dependencies:[lu,Vi$1,Fn,su,Ee,ETe,ho$1],styles:[`[_nghost-%COMP%]{display:flex;align-items:center}img[_ngcontent-%COMP%]{max-height:calc(100% - 1rem)}button[_ngcontent-%COMP%]{border-radius:.25rem;background-color:#ffffff26}
/*# sourceMappingURL=topbar-header.component.css.map */`]});return a})();var Oo=n=>({id:n});function zo(n,a){if(n&1){let e=OT();$r(0,`button`,7),jt(`click`,function(){am(e);return cm(Wr(2).changeRoom())}),gs(1),MT(2,`translate`),Yr()}n&2&&(Et(),Ri$1(` `,Hz(2,1,`APP.CONTROL.CHANGE_ROOM`),` `))}function Lo(n,a){if(n&1){let e=OT();$r(0,`p`,3),gs(1),MT(2,`translate`),Yr(),$r(3,`div`,4)(4,`button`,5),jt(`click`,function(){am(e);return cm(Wr().retry())}),gs(5),MT(6,`translate`),Yr(),Xn$1(7,zo,3,3,`button`,6),Yr()}if(n&2){let e=Wr();Et(),Ri$1(` `,Hz(2,3,`APP.CONTROL.CONNECTING_SLOW`),` `),Et(4),Ri$1(` `,Hz(6,5,`APP.CONTROL.RETRY`),` `),Et(2),Qn$1(e.can_change_room?7:-1)}}var Fo=30*1e3;var Ac=(()=>{let a=class a extends ka{constructor(){super(),this._state=g(an$1),this.id=this._state.system_id,this.can_change_room=this._state.canChangeRoom(),this.slow=A(!1),this.retry=()=>window.location.reload(),this.changeRoom=()=>this._state.changeRoom(),this.timeout(`slow`,()=>this.slow.set(!0),Fo)}};a.ɵfac=function(i){return new(i||a)},a.ɵcmp=Be({type:a,selectors:[[`control-connecting`]],features:[$e],decls:6,vars:8,consts:[[`name`,`loader`,1,`bg-base-100`,`text-base-content`,`absolute`,`inset-0`,`flex`,`flex-col`,`items-center`,`justify-center`],[1,`mb-4`,3,`diameter`],[1,`my-4`,`text-2xl`],[1,`mb-4`,`text-base`,`opacity-60`],[1,`flex`,`space-x-2`],[`btn`,``,`matRipple`,``,1,`w-40`,3,`click`],[`btn`,``,`matRipple`,``,`change-room`,``,1,`inverse`,`w-40`],[`btn`,``,`matRipple`,``,`change-room`,``,1,`inverse`,`w-40`,3,`click`]],template:function(i,o){i&1&&($r(0,`div`,0),Ai$1(1,`mat-spinner`,1),$r(2,`div`,2),gs(3),MT(4,`translate`),Yr(),Xn$1(5,Lo,8,7),Yr()),i&2&&(Et(),hl(`diameter`,64),Et(2),Ri$1(` `,LT(4,3,`APP.CONTROL.CONNECTING`,Uz(6,Oo,o.id())),` `),Et(2),Qn$1(o.slow()?5:-1))},dependencies:[xt,yt$1,fA,dA,l$1],styles:[`[name=loader][_ngcontent-%COMP%]{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23000' fill-opacity='0.05' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E")}
/*# sourceMappingURL=connecting.component.css.map */`]});return a})();var Bo=[`*`];var Hc=(()=>{let a=class a{constructor(){this._state=g(an$1),this._changelog=g(Ni),this.system=this._state.system,this.version=sp,this.changelog_available=this._changelog.available,this.viewChangelog=()=>this._changelog.view(),this.powerOn=()=>this._state.powerOn()}};a.ɵfac=function(i){return new(i||a)},a.ɵcmp=Be({type:a,selectors:[[`control-splash`]],hostAttrs:[`name`,`splash`,1,`absolute`,`inset-0`,`flex`,`flex-col`,`items-center`,`justify-center`,`text-white`],hostBindings:function(i,o){i&1&&jt(`click`,function(){return o.powerOn()})},ngContentSelectors:Bo,decls:16,vars:17,consts:[[1,`mb-4`,`text-4xl`,`font-light`],[1,`text-lg`],[1,`absolute`,`bottom-0`,`left-0`,`p-2`],[1,`w-full`,`text-xs`,`opacity-60`],[1,`m-0`,`border-none`,`bg-none`,`p-0`,`text-xs`,`underline`,3,`click`,`disabled`]],template:function(i,o){var d;i&1&&(yr(),Jn$1(0,`h2`,0),gs(1),MT(2,`translate`),er(),Jn$1(3,`p`,1),gs(4),er(),Xt(5),Jn$1(6,`div`,2)(7,`div`,3),gs(8),MT(9,`translate`),Jn$1(10,`button`,4),G0(`click`,function(f){return f.stopPropagation(),o.viewChangelog()}),gs(11),er()(),Jn$1(12,`div`,3),gs(13),MT(14,`date`),MT(15,`date`),er()()),i&2&&(Et(),Ri$1(` `,Hz(2,7,`APP.CONTROL.TOUCH_TO_START`),` `),Et(3),J0((d=o.system())==null?void 0:d.name),Et(4),Ri$1(` `,Hz(9,9,`COMMON.CONTROLS_VERSION`),`: `),Et(2),ml(`disabled`,!o.changelog_available()),Et(),Ri$1(` `,o.version.hash,` `),Et(2),eL(` `,LT(14,11,o.version.time,`longDate`),` (`,LT(15,14,o.version.time,`shortTime`),`) `))},dependencies:[l$1,KK],styles:[`[_nghost-%COMP%]{animation:crossfade 10s linear;animation-iteration-count:infinite}
/*# sourceMappingURL=splash.component.css.map */`]});return a})();export{ze as _,Le as a,Vi as c,fr as d,ji as f,yc as g,we as h,Hc as i,be as l,te as m,Ai as n,Mt as o,ke as p,Gi as r,Pi as s,Ac as t,ee as u};
//# debugId=b78e4c03-d2f6-5163-be99-a0d0723c5979
//# sourceMappingURL=chunk-ho2cn9ec.js.map