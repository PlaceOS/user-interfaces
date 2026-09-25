import{$ as Gz,$r as iL,$t as Se,Aa as vn$1,At as Mz,Br as gTe,Ca as te$1,Cr as dt,D as Ci$1,Di as lm,Dr as eI,Ei as le,En as Xd,Er as eF,Fa as wo,Fn as Ye,Ga as y_,Gn as Zn,Gt as Qme,H as F_,Hr as gl,In as Yr,Ir as g,Ja as z0,Ji as oIe,Jr as he,K as Fi$1,Kn as Zr,Kt as Qn,Lt as PT,Mi as mn$1,Ni as ms,Nt as Ni$1,Oi as mA,On as Xn,Pn as YO,Pt as O,Q as Gt,Qi as pg,R as En$1,Rr as gA,S as Be,T as C,U as Fa,Ur as gs,Wn as Zme,Xa as zW,Xn as _e,Xr as hl,Xt as SY,Yi as oL,Yn as _Y,Yt as Ri$1,Z as Gl,Zt as S_,ai as j$,ba as tL,bn as WW,br as dk,c as $e,ca as rc,di as jt,dr as cg,dt as Jt,en as Sr,eo as l,er as ag,f as A,fi as jx,fr as cm,gt as Kd,ht as KW,ia as qk,ir as bF,j as Do,ji as ml,jn as Y,kn as Xr,l as $r,li as jf,m as Ai$1,mr as cz,nr as b,pn as Vn$1,qa as yo,qi as ny,qt as Qt,ri as ir,sa as rTe,ta as qW,tn as St,to as m,tr as az,tt as He,ui as jr,vr as dIe,w as Bz,wa as tge,wr as e4,xt as LT,y as B$,yi as kt,yn as WO,yr as de,z as Et}from"./chunk-FI_3199P.js";import{C as rs,D as l$1,S as rn$1,a as Ee,f as Qi,i as Dm,l as Mt,m as Tm,n as mt,o as Fn$1,s as Gi$1,t as Yt$1,v as ho,w as ru,x as ou,y as ji$1}from"./main.js";import{n as W,r as ae,t as Ce}from"./chunk-U6FSz_kY.js";var ki=[`knob`];var Ci=[`valueIndicatorContainer`];function yi(n,a){if(n&1&&(jr(0,`div`,2,1)(2,`div`,5)(3,`span`,6),gs(4),$r()()()),n&2){let e=Yr();St(4),tL(e.valueIndicatorText)}}var Si=[`trackActive`];var Ti=[`*`];function wi(n,a){if(n&1&&Ai$1(0,`div`),n&2){let e=a.$implicit,t=a.$index,i=Yr(3);Xd(e===0?`mdc-slider__tick-mark--active`:`mdc-slider__tick-mark--inactive`),cg(`transform`,i._calcTickMarkTransform(t))}}function Mi(n,a){if(n&1&&KW(0,wi,1,4,`div`,8,WW),n&2)qW(Yr(2)._tickMarks)}function Ii(n,a){if(n&1&&(jr(0,`div`,6,1),Xn(2,Mi,2,0),$r()),n&2){let e=Yr();St(2),Qn(e._cachedWidth?2:-1)}}function Ei(n,a){if(n&1&&Ai$1(0,`mat-slider-visual-thumb`,7),n&2){let e=Yr();hl(`discrete`,e.discrete)(`thumbPosition`,1)(`valueIndicatorText`,e.startValueIndicatorText)}}var x=(function(n){return n[n.START=1]=`START`,n[n.END=2]=`END`,n})(x||{});var Pe=(function(n){return n[n.ACTIVE=0]=`ACTIVE`,n[n.INACTIVE=1]=`INACTIVE`,n})(Pe||{});var _t=new b(`_MatSlider`);var Yt=new b(`_MatSliderThumb`);var Ni=new b(`_MatSliderRangeThumb`);var Kt=new b(`_MatSliderVisualThumb`);var Ri=(()=>{class n{_cdr=g(Jt);_ngZone=g(te$1);_slider=g(_t);_renderer=g(Et);_listenerCleanups;discrete=!1;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=!1;_isActive=!1;_isValueIndicatorVisible=!1;_hostElement=g(de).nativeElement;_platform=g(Ye);ngAfterViewInit(){let e=this._slider._getInput(this.thumbPosition);e&&(this._ripple.radius=24,this._sliderInput=e,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let t=this._sliderInputEl,i=this._renderer;this._listenerCleanups=[i.listen(t,`pointermove`,this._onPointerMove),i.listen(t,`pointerdown`,this._onDragStart),i.listen(t,`pointerup`,this._onDragEnd),i.listen(t,`pointerleave`,this._onMouseLeave),i.listen(t,`focus`,this._onFocus),i.listen(t,`blur`,this._onBlur)]}))}ngOnDestroy(){var e;(e=this._listenerCleanups)==null||e.forEach(t=>t())}_onPointerMove=e=>{if(this._sliderInput._isFocused)return;let t=this._hostElement.getBoundingClientRect(),i=this._slider._isCursorOnSliderThumb(e,t);this._isHovered=i,i?this._showHoverRipple():this._hideRipple(this._hoverRippleRef)};_onMouseLeave=()=>{this._isHovered=!1,this._hideRipple(this._hoverRippleRef)};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add(`mdc-slider__thumb--focused`)};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove(`mdc-slider__thumb--focused`)};_onDragStart=e=>{e.button===0&&(this._isActive=!0,this._showActiveRipple())};_onDragEnd=()=>{this._isActive=!1,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple()};_showHoverRipple(){var e;this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),(e=this._hoverRippleRef)==null||e.element.classList.add(`mat-mdc-slider-hover-ripple`))}_showFocusRipple(){var e;this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},!0),(e=this._focusRippleRef)==null||e.element.classList.add(`mat-mdc-slider-focus-ripple`))}_showActiveRipple(){var e;this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),(e=this._activeRippleRef)==null||e.element.classList.add(`mat-mdc-slider-active-ripple`))}_isShowingRipple(e){return(e==null?void 0:e.state)===ir.FADING_IN||(e==null?void 0:e.state)===ir.VISIBLE}_showRipple(e,t){var i;if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===x.START?x.END:x.START)._showValueIndicator(),!((i=this._slider._globalRippleOptions)!=null&&i.disabled&&!t)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:e,centered:!0,persistent:!0})}_hideRipple(e){if(e?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let t=this._getSibling();t._isShowingAnyRipple()||(this._hideValueIndicator(),t._hideValueIndicator())}_showValueIndicator(){this._hostElement.classList.add(`mdc-slider__thumb--with-indicator`)}_hideValueIndicator(){this._hostElement.classList.remove(`mdc-slider__thumb--with-indicator`)}_getSibling(){return this._slider._getThumb(this.thumbPosition===x.START?x.END:x.START)}_getValueIndicatorContainer(){var e;return(e=this._valueIndicatorContainer)==null?void 0:e.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static ɵfac=function(t){return new(t||n)};static ɵcmp=Be({type:n,selectors:[[`mat-slider-visual-thumb`]],viewQuery:function(t,i){if(t&1&&ms(mA,5)(ki,5)(Ci,5),t&2){let o;Ri$1(o=Ci$1())&&(i._ripple=o.first),Ri$1(o=Ci$1())&&(i._knob=o.first),Ri$1(o=Ci$1())&&(i._valueIndicatorContainer=o.first)}},hostAttrs:[1,`mdc-slider__thumb`,`mat-mdc-slider-visual-thumb`],inputs:{discrete:`discrete`,thumbPosition:`thumbPosition`,valueIndicatorText:`valueIndicatorText`},features:[vn$1([{provide:Kt,useExisting:n}])],decls:4,vars:2,consts:[[`knob`,``],[`valueIndicatorContainer`,``],[1,`mdc-slider__value-indicator-container`],[1,`mdc-slider__thumb-knob`],[`matRipple`,``,1,`mat-focus-indicator`,3,`matRippleDisabled`],[1,`mdc-slider__value-indicator`],[1,`mdc-slider__value-indicator-text`]],template:function(t,i){t&1&&(Xn(0,yi,5,1,`div`,2),Ai$1(1,`div`,3,0)(3,`div`,4)),t&2&&(Qn(i.discrete?0:-1),St(3),hl(`matRippleDisabled`,!0))},dependencies:[mA],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
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
`],encapsulation:2})}return n})();var De=(()=>{class n{_ngZone=g(te$1);_cdr=g(Jt);_elementRef=g(de);_dir=g(Gl,{optional:!0});_globalRippleOptions=g(S_,{optional:!0});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(e){this._disabled=e;let t=this._getInput(x.END),i=this._getInput(x.START);t&&(t.disabled=this._disabled),i&&(i.disabled=this._disabled)}_disabled=!1;get discrete(){return this._discrete}set discrete(e){this._discrete=e,this._updateValueIndicatorUIs()}_discrete=!1;get showTickMarks(){return this._showTickMarks}set showTickMarks(e){this._showTickMarks=e,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI())}_showTickMarks=!1;get min(){return this._min}set min(e){let t=e==null||isNaN(e)?this._min:e;this._min!==t&&this._updateMin(t)}_min=0;color;disableRipple=!1;_updateMin(e){let t=this._min;this._min=e,this._isRange?this._updateMinRange({old:t,new:e}):this._updateMinNonRange(e),this._onMinMaxOrStepChange()}_updateMinRange(e){let t=this._getInput(x.END),i=this._getInput(x.START),o=t.value,s=i.value;i.min=e.new,t.min=Math.max(e.new,i.value),i.max=Math.min(t.max,t.value),i._updateWidthInactive(),t._updateWidthInactive(),e.new<e.old?this._onTranslateXChangeBySideEffect(t,i):this._onTranslateXChangeBySideEffect(i,t),o!==t.value&&this._onValueChange(t),s!==i.value&&this._onValueChange(i)}_updateMinNonRange(e){let t=this._getInput(x.END);if(t){let i=t.value;t.min=e,t._updateThumbUIByValue(),this._updateTrackUI(t),i!==t.value&&this._onValueChange(t)}}get max(){return this._max}set max(e){let t=e==null||isNaN(e)?this._max:e;this._max!==t&&this._updateMax(t)}_max=100;_updateMax(e){let t=this._max;this._max=e,this._isRange?this._updateMaxRange({old:t,new:e}):this._updateMaxNonRange(e),this._onMinMaxOrStepChange()}_updateMaxRange(e){let t=this._getInput(x.END),i=this._getInput(x.START),o=t.value,s=i.value;t.max=e.new,i.max=Math.min(e.new,t.value),t.min=i.value,t._updateWidthInactive(),i._updateWidthInactive(),e.new>e.old?this._onTranslateXChangeBySideEffect(i,t):this._onTranslateXChangeBySideEffect(t,i),o!==t.value&&this._onValueChange(t),s!==i.value&&this._onValueChange(i)}_updateMaxNonRange(e){let t=this._getInput(x.END);if(t){let i=t.value;t.max=e,t._updateThumbUIByValue(),this._updateTrackUI(t),i!==t.value&&this._onValueChange(t)}}get step(){return this._step}set step(e){let t=isNaN(e)?this._step:e;this._step!==t&&this._updateStep(t)}_step=1;_updateStep(e){this._step=e,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange()}_updateStepRange(){let e=this._getInput(x.END),t=this._getInput(x.START),i=e.value,o=t.value,s=t.value;e.min=this._min,t.max=this._max,e.step=this._step,t.step=this._step,this._platform.SAFARI&&(e.value=e.value,t.value=t.value),e.min=Math.max(this._min,t.value),t.max=Math.min(this._max,e.value),t._updateWidthInactive(),e._updateWidthInactive(),e.value<s?this._onTranslateXChangeBySideEffect(t,e):this._onTranslateXChangeBySideEffect(e,t),i!==e.value&&this._onValueChange(e),o!==t.value&&this._onValueChange(t)}_updateStepNonRange(){let e=this._getInput(x.END);if(e){let t=e.value;e.step=this._step,this._platform.SAFARI&&(e.value=e.value),e._updateThumbUIByValue(),t!==e.value&&this._onValueChange(e)}}displayWith=e=>`${e}`;_tickMarks;_noopAnimations=Zr();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText=``;endValueIndicatorText=``;_endThumbTransform;_startThumbTransform;_isRange=!1;_isRtl=le(()=>{var e;return((e=this._dir)==null?void 0:e.valueSignal())===`rtl`});_hasViewInitialized=!1;_tickMarkTrackWidth=0;_hasAnimation=!1;_resizeTimer=null;_platform=g(Ye);constructor(){g(Vn$1).load(y_);let e=this._isRtl();tge(()=>{let t=this._isRtl();t!==e&&(e=t,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI())})}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let e=this._getInput(x.END),t=this._getInput(x.START);this._isRange=!!e&&!!t,this._cdr.detectChanges();let i=this._getThumb(x.END);this._rippleRadius=i._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(e,t):this._initUINonRange(e),this._updateTrackUI(e),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges()}_initUINonRange(e){e.initProps(),e.initUI(),this._updateValueIndicatorUI(e),this._hasViewInitialized=!0,e._updateThumbUIByValue()}_initUIRange(e,t){e.initProps(),e.initUI(),t.initProps(),t.initUI(),e._updateMinMax(),t._updateMinMax(),e._updateStaticStyles(),t._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=!0,e._updateThumbUIByValue(),t._updateThumbUIByValue()}ngOnDestroy(){var e;(e=this._resizeObserver)==null||e.disconnect(),this._resizeObserver=null}_onDirChangeRange(){let e=this._getInput(x.END),t=this._getInput(x.START);e._setIsLeftThumb(),t._setIsLeftThumb(),e.translateX=e._calcTranslateXByValue(),t.translateX=t._calcTranslateXByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateWidthInactive(),t._updateWidthInactive(),e._updateThumbUIByValue(),t._updateThumbUIByValue()}_onDirChangeNonRange(){this._getInput(x.END)._updateThumbUIByValue()}_observeHostResize(){typeof ResizeObserver>`u`||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize())}),this._resizeObserver.observe(this._elementRef.nativeElement)})}_isActive(){return this._getThumb(x.START)._isActive||this._getThumb(x.END)._isActive}_getValue(e=x.END){let t=this._getInput(e);return t?t.value:this.min}_skipUpdate(){var e,t;return!!((e=this._getInput(x.START))!=null&&e._skipUIUpdate||(t=this._getInput(x.END))!=null&&t._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left}_setTrackActiveStyles(e){let t=this._trackActive.nativeElement.style;t.left=e.left,t.right=e.right,t.transformOrigin=e.transformOrigin,t.transform=e.transform}_calcTickMarkTransform(e){let t=e*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return`translateX(${this._isRtl()?this._cachedWidth-6-t:t}px)`}_onTranslateXChange(e){this._hasViewInitialized&&(this._updateThumbUI(e),this._updateTrackUI(e),this._updateOverlappingThumbUI(e))}_onTranslateXChangeBySideEffect(e,t){this._hasViewInitialized&&(e._updateThumbUIByValue(),t._updateThumbUIByValue())}_onValueChange(e){this._hasViewInitialized&&(this._updateValueIndicatorUI(e),this._updateTickMarkUI(),this._cdr.detectChanges())}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck())}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let e=this._getInput(x.END),t=this._getInput(x.START);e._updateThumbUIByValue(),t._updateThumbUIByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateMinMax(),t._updateMinMax(),e._updateWidthInactive(),t._updateWidthInactive()}else{let e=this._getInput(x.END);e&&e._updateThumbUIByValue()}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges()}}_thumbsOverlap=!1;_areThumbsOverlapping(){let e=this._getInput(x.START),t=this._getInput(x.END);return!e||!t?!1:t.translateX-e.translateX<20}_updateOverlappingThumbClassNames(e){let t=e.getSibling(),i=this._getThumb(e.thumbPosition);this._getThumb(t.thumbPosition)._hostElement.classList.remove(`mdc-slider__thumb--top`),i._hostElement.classList.toggle(`mdc-slider__thumb--top`,this._thumbsOverlap)}_updateOverlappingThumbUI(e){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(e))}_updateThumbUI(e){if(this._skipUpdate())return;let t=this._getThumb(e.thumbPosition===x.END?x.END:x.START);t._hostElement.style.transform=`translateX(${e.translateX}px)`}_updateValueIndicatorUI(e){if(this._skipUpdate())return;let t=this.displayWith(e.value);if(this._hasViewInitialized?e._valuetext.set(t):e._hostElement.setAttribute(`aria-valuetext`,t),this.discrete){e.thumbPosition===x.START?this.startValueIndicatorText=t:this.endValueIndicatorText=t;let i=this._getThumb(e.thumbPosition);t.length<3?i._hostElement.classList.add(`mdc-slider__thumb--short-value`):i._hostElement.classList.remove(`mdc-slider__thumb--short-value`)}}_updateValueIndicatorUIs(){let e=this._getInput(x.END),t=this._getInput(x.START);e&&this._updateValueIndicatorUI(e),t&&this._updateValueIndicatorUI(t)}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let e=this._step&&this._step>0?this._step:1,i=(Math.floor(this.max/e)*e-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*i}_updateTrackUI(e){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(e):this._updateTrackUINonRange(e))}_updateTrackUIRange(e){let t=e.getSibling();if(!t||!this._cachedWidth)return;let i=Math.abs(t.translateX-e.translateX)/this._cachedWidth;e._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:`auto`,right:`${this._cachedWidth-t.translateX}px`,transformOrigin:`right`,transform:`scaleX(${i})`}):this._setTrackActiveStyles({left:`${t.translateX}px`,right:`auto`,transformOrigin:`left`,transform:`scaleX(${i})`})}_updateTrackUINonRange(e){this._isRtl()?this._setTrackActiveStyles({left:`auto`,right:`0px`,transformOrigin:`right`,transform:`scaleX(${1-e.fillPercentage})`}):this._setTrackActiveStyles({left:`0px`,right:`auto`,transformOrigin:`left`,transform:`scaleX(${e.fillPercentage})`})}_updateTickMarkUI(){if(!this.showTickMarks||this.step===void 0||this.min===void 0||this.max===void 0)return;let e=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(e):this._updateTickMarkUINonRange(e)}_updateTickMarkUINonRange(e){let t=this._getValue(),i=Math.max(Math.round((t-this.min)/e),0)+1,o=Math.max(Math.round((this.max-t)/e),0)-1;this._isRtl()?i++:o++,this._tickMarks=Array(i).fill(Pe.ACTIVE).concat(Array(o).fill(Pe.INACTIVE))}_updateTickMarkUIRange(e){let t=this._getValue(),i=this._getValue(x.START),o=Math.max(Math.round((i-this.min)/e),0),s=Math.max(Math.round((t-i)/e)+1,0),u=Math.max(Math.round((this.max-t)/e),0);this._tickMarks=Array(o).fill(Pe.INACTIVE).concat(Array(s).fill(Pe.ACTIVE),Array(u).fill(Pe.INACTIVE))}_getInput(e){var t;if(e===x.END&&this._input)return this._input;if((t=this._inputs)!=null&&t.length)return e===x.START?this._inputs.first:this._inputs.last}_getThumb(e){var t,i;return e===x.END?(t=this._thumbs)==null?void 0:t.last:(i=this._thumbs)==null?void 0:i.first}_setTransition(e){this._hasAnimation=!this._platform.IOS&&e&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle(`mat-mdc-slider-with-animation`,this._hasAnimation)}_isCursorOnSliderThumb(e,t){let i=t.width/2,o=t.x+i,s=t.y+i,u=e.clientX-o,g=e.clientY-s;return Math.pow(u,2)+Math.pow(g,2)<Math.pow(i,2)}static ɵfac=function(t){return new(t||n)};static ɵcmp=Be({type:n,selectors:[[`mat-slider`]],contentQueries:function(t,i,o){if(t&1&&ag(o,Yt,5)(o,Ni,4),t&2){let s;Ri$1(s=Ci$1())&&(i._input=s.first),Ri$1(s=Ci$1())&&(i._inputs=s)}},viewQuery:function(t,i){if(t&1&&ms(Si,5)(Kt,5),t&2){let o;Ri$1(o=Ci$1())&&(i._trackActive=o.first),Ri$1(o=Ci$1())&&(i._thumbs=o)}},hostAttrs:[1,`mat-mdc-slider`,`mdc-slider`],hostVars:12,hostBindings:function(t,i){t&2&&(Xd(`mat-`+(i.color||`primary`)),dt(`mdc-slider--range`,i._isRange)(`mdc-slider--disabled`,i.disabled)(`mdc-slider--discrete`,i.discrete)(`mdc-slider--tick-marks`,i.showTickMarks)(`_mat-animation-noopable`,i._noopAnimations))},inputs:{disabled:[2,`disabled`,`disabled`,He],discrete:[2,`discrete`,`discrete`,He],showTickMarks:[2,`showTickMarks`,`showTickMarks`,He],min:[2,`min`,`min`,eI],color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,He],max:[2,`max`,`max`,eI],step:[2,`step`,`step`,eI],displayWith:`displayWith`},exportAs:[`matSlider`],features:[vn$1([{provide:_t,useExisting:n}])],ngContentSelectors:Ti,decls:9,vars:5,consts:[[`trackActive`,``],[`tickMarkContainer`,``],[1,`mdc-slider__track`],[1,`mdc-slider__track--inactive`],[1,`mdc-slider__track--active`],[1,`mdc-slider__track--active_fill`],[1,`mdc-slider__tick-marks`],[3,`discrete`,`thumbPosition`,`valueIndicatorText`],[3,`class`,`transform`]],template:function(t,i){t&1&&(Sr(),Qt(0),jr(1,`div`,2),Ai$1(2,`div`,3),jr(3,`div`,4),Ai$1(4,`div`,5,0),$r(),Xn(6,Ii,3,1,`div`,6),$r(),Xn(7,Ei,1,3,`mat-slider-visual-thumb`,7),Ai$1(8,`mat-slider-visual-thumb`,7)),t&2&&(St(6),Qn(i.showTickMarks?6:-1),St(),Qn(i._isRange?7:-1),St(),hl(`discrete`,i.discrete)(`thumbPosition`,2)(`valueIndicatorText`,i.endValueIndicatorText))},dependencies:[Ri],styles:[`.mdc-slider__track {
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
`],encapsulation:2})}return n})();var Vi={provide:jf,useExisting:mn$1(()=>Te),multi:!0};var Te=(()=>{class n{_ngZone=g(te$1);_elementRef=g(de);_cdr=g(Jt);_slider=g(_t);_platform=g(Ye);_listenerCleanups;get value(){return eI(this._hostElement.value,0)}set value(e){e===null&&(e=this._getDefaultValue()),e=isNaN(e)?0:e;let t=e+``;if(!this._hasSetInitialValue){this._initialValue=t;return}this._isActive||this._setValue(t)}_setValue(e){this._hostElement.value=e,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck()}valueChange=new he;dragStart=new he;dragEnd=new he;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(e){this._translateX=e}_translateX;thumbPosition=x.END;get min(){return eI(this._hostElement.min,0)}set min(e){this._hostElement.min=e+``,this._cdr.detectChanges()}get max(){return eI(this._hostElement.max,0)}set max(e){this._hostElement.max=e+``,this._cdr.detectChanges()}get step(){return eI(this._hostElement.step,0)}set step(e){this._hostElement.step=e+``,this._cdr.detectChanges()}get disabled(){return He(this._hostElement.disabled)}set disabled(e){this._hostElement.disabled=e,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled)}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=A(``);_knobRadius=8;_tickMarkOffset=3;_isActive=!1;_isFocused=!1;_setIsFocused(e){this._isFocused=e}_hasSetInitialValue=!1;_initialValue;_formControl;_destroyed=new C;_skipUIUpdate=!1;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=!1;constructor(){let e=g(Et);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[e.listen(this._hostElement,`pointerdown`,this._onPointerDown.bind(this)),e.listen(this._hostElement,`pointermove`,this._onPointerMove.bind(this)),e.listen(this._hostElement,`pointerup`,this._onPointerUp.bind(this))]})}ngOnDestroy(){this._listenerCleanups.forEach(e=>e()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete()}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=!0),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue()}initUI(){this._updateThumbUIByValue()}_initValue(){this._hasSetInitialValue=!0,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges())}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(!1),this._onTouchedFn()}_onFocus(){this._slider._setTransition(!1),this._slider._updateTrackUI(this),this._setIsFocused(!0)}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:!0})}_onInput(){var e;(e=this._onChangeFn)==null||e.call(this,this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:!this._isActive}),this._slider._onValueChange(this)}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled}_onPointerDown(e){if(!(this.disabled||e.button!==0)){if(this._platform.IOS){let t=this._slider._isCursorOnSliderThumb(e,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=t,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=!0,this._setIsFocused(!0),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(e,{withAnimation:!0}),this.disabled||(this._handleValueCorrection(e),this.dragStart.emit({source:this,parent:this._slider,value:this.value}))}}_handleValueCorrection(e){this._skipUIUpdate=!0,setTimeout(()=>{this._skipUIUpdate=!1,this._fixValue(e)},0)}_fixValue(e){var de;let t=e.clientX-this._slider._cachedLeft,i=this._slider._cachedWidth,o=this._slider.step===0?1:this._slider.step,s=Math.floor((this._slider.max-this._slider.min)/o),u=this._slider._isRtl()?1-t/i:t/i,E=Math.round(u*s)/s*(this._slider.max-this._slider.min)+this._slider.min,Z=Math.round(E/o)*o;if(Z===this.value){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation});return}this.value=Z,this.valueChange.emit(this.value),(de=this._onChangeFn)==null||de.call(this,this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation})}_onPointerMove(e){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(e)}_onPointerUp(){this._isActive&&(this._isActive=!1,this._platform.SAFARI&&this._setIsFocused(!1),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0))}_clamp(e){let t=this._tickMarkOffset,i=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(e,i),t)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(e){return e.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`}_updateThumbUIByValue(e){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(e)}_updateThumbUIByPointerEvent(e,t){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(e)),this._updateThumbUI(t)}_updateThumbUI(e){this._slider._setTransition(!!(e!=null&&e.withAnimation)),this._slider._onTranslateXChange(this)}writeValue(e){(this._isControlInitialized||e!==null)&&(this.value=e)}registerOnChange(e){this._onChangeFn=e,this._isControlInitialized=!0}registerOnTouched(e){this._onTouchedFn=e}setDisabledState(e){this.disabled=e}focus(){this._hostElement.focus()}blur(){this._hostElement.blur()}static ɵfac=function(t){return new(t||n)};static ɵdir=Y({type:n,selectors:[[`input`,`matSliderThumb`,``]],hostAttrs:[`type`,`range`,1,`mdc-slider__input`],hostVars:1,hostBindings:function(t,i){t&1&&jt(`change`,function(){return i._onChange()})(`input`,function(){return i._onInput()})(`blur`,function(){return i._onBlur()})(`focus`,function(){return i._onFocus()}),t&2&&Zn(`aria-valuetext`,i._valuetext())},inputs:{value:[2,`value`,`value`,eI]},outputs:{valueChange:`valueChange`,dragStart:`dragStart`,dragEnd:`dragEnd`},exportAs:[`matSliderThumb`],features:[vn$1([Vi,{provide:Yt,useExisting:n}])]})}return n})();var Oe=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Se({type:n});static ɵinj=_e({imports:[gA,Xr]})}return n})();var Ai=[`input`];var Pi=[`*`];var ut={color:`accent`,clickAction:`check-indeterminate`,disabledInteractive:!1};var Di=new b(`mat-checkbox-default-options`,{providedIn:`root`,factory:()=>ut});var Q=(function(n){return n[n.Init=0]=`Init`,n[n.Checked=1]=`Checked`,n[n.Unchecked=2]=`Unchecked`,n[n.Indeterminate=3]=`Indeterminate`,n})(Q||{});var bt=class{source;checked};var ft=(()=>{class n{_elementRef=g(de);_changeDetectorRef=g(Jt);_ngZone=g(te$1);_animationsDisabled=Zr();_options=g(Di,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new bt;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){var e;return(e=this._inputElement)==null?void 0:e.nativeElement}_animationClasses={uncheckedToChecked:`mdc-checkbox--anim-unchecked-checked`,uncheckedToIndeterminate:`mdc-checkbox--anim-unchecked-indeterminate`,checkedToUnchecked:`mdc-checkbox--anim-checked-unchecked`,checkedToIndeterminate:`mdc-checkbox--anim-checked-indeterminate`,indeterminateToChecked:`mdc-checkbox--anim-indeterminate-checked`,indeterminateToUnchecked:`mdc-checkbox--anim-indeterminate-unchecked`};ariaLabel=``;ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition=`after`;name=null;change=new he;indeterminateChange=new he;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass=``;_currentCheckState=Q.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){var t;g(Vn$1).load(y_);let e=g(new pg(`tabindex`),{optional:!0});this._options=this._options||ut,this.color=this._options.color||ut.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=g(Do).getId(`mat-mdc-checkbox-`),this.disabledInteractive=((t=this._options)==null?void 0:t.disabledInteractive)??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(Q.Indeterminate):this._transitionCheckState(this.checked?Q.Checked:Q.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=A(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,i=this._getAnimationTargetElement();if(!(t===e||!i)&&(this._currentAnimationClass&&i.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){i.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{i.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){var t;let e=(t=this._options)==null?void 0:t.clickAction;!this.disabled&&e!==`noop`?(this.indeterminate&&e!==`check`&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?Q.Checked:Q.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e===`noop`)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return``;switch(e){case Q.Init:if(t===Q.Checked)return this._animationClasses.uncheckedToChecked;if(t==Q.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case Q.Unchecked:return t===Q.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case Q.Checked:return t===Q.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case Q.Indeterminate:return t===Q.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return``}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static ɵfac=function(t){return new(t||n)};static ɵcmp=Be({type:n,selectors:[[`mat-checkbox`]],viewQuery:function(t,i){if(t&1&&ms(Ai,5),t&2){let o;Ri$1(o=Ci$1())&&(i._inputElement=o.first)}},hostAttrs:[1,`mat-mdc-checkbox`],hostVars:16,hostBindings:function(t,i){t&2&&(ml(`id`,i.id),Zn(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null),Xd(i.color?`mat-`+i.color:`mat-accent`),dt(`_mat-animation-noopable`,i._animationsDisabled)(`mdc-checkbox--disabled`,i.disabled)(`mat-mdc-checkbox-disabled`,i.disabled)(`mat-mdc-checkbox-checked`,i.checked)(`mat-mdc-checkbox-disabled-interactive`,i.disabledInteractive))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],ariaExpanded:[2,`aria-expanded`,`ariaExpanded`,He],ariaControls:[0,`aria-controls`,`ariaControls`],ariaOwns:[0,`aria-owns`,`ariaOwns`],id:`id`,required:[2,`required`,`required`,He],labelPosition:`labelPosition`,name:`name`,value:`value`,disableRipple:[2,`disableRipple`,`disableRipple`,He],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?void 0:eI(e)],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,He],checked:[2,`checked`,`checked`,He],disabled:[2,`disabled`,`disabled`,He],indeterminate:[2,`indeterminate`,`indeterminate`,He]},outputs:{change:`change`,indeterminateChange:`indeterminateChange`},exportAs:[`matCheckbox`],features:[vn$1([{provide:jf,useExisting:mn$1(()=>n),multi:!0},{provide:F_,useExisting:n,multi:!0}]),kt],ngContentSelectors:Pi,decls:15,vars:23,consts:[[`checkbox`,``],[`input`,``],[`label`,``],[`mat-internal-form-field`,``,3,`click`,`labelPosition`,`for`],[1,`mdc-checkbox`],[`aria-hidden`,`true`,1,`mat-mdc-checkbox-touch-target`],[`type`,`checkbox`,1,`mdc-checkbox__native-control`,3,`blur`,`click`,`change`,`checked`,`indeterminate`,`disabled`,`id`,`required`,`tabIndex`],[`aria-hidden`,`true`,1,`mdc-checkbox__ripple`],[`aria-hidden`,`true`,1,`mdc-checkbox__background`],[`focusable`,`false`,`viewBox`,`0 0 24 24`,1,`mdc-checkbox__checkmark`],[`fill`,`none`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-checkbox__checkmark-path`],[1,`mdc-checkbox__mixedmark`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-mdc-checkbox-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(t,i){if(t&1&&(Sr(),jr(0,`label`,3),jt(`click`,function(s){return i._preventBubblingFromLabel(s)}),jr(1,`span`,4,0),Ai$1(3,`span`,5),jr(4,`input`,6,1),jt(`blur`,function(){return i._onBlur()})(`click`,function(){return i._onInputClick()})(`change`,function(s){return i._onInteractionEvent(s)}),$r(),Ai$1(6,`span`,7),jr(7,`span`,8),YO(),jr(8,`svg`,9),Ai$1(9,`path`,10),$r(),WO(),Ai$1(10,`span`,11),$r(),Ai$1(11,`span`,12),$r(),jr(12,`span`,13,2),Qt(14),$r()()),t&2){let o=cz(2);hl(`labelPosition`,i.labelPosition)(`for`,i.inputId),St(4),dt(`mdc-checkbox--selected`,i.checked),hl(`checked`,i.checked)(`indeterminate`,i.indeterminate)(`disabled`,i.disabled&&!i.disabledInteractive)(`id`,i.inputId)(`required`,i.required)(`tabIndex`,i.disabled&&!i.disabledInteractive?-1:i.tabIndex),Zn(`aria-label`,i.ariaLabel||null)(`aria-labelledby`,i.ariaLabelledby)(`aria-describedby`,i.ariaDescribedby)(`aria-checked`,i.indeterminate?`mixed`:null)(`aria-controls`,i.ariaControls)(`aria-disabled`,i.disabled&&i.disabledInteractive?!0:null)(`aria-expanded`,i.ariaExpanded)(`aria-owns`,i.ariaOwns)(`name`,i.name)(`value`,i.value),St(7),hl(`matRippleTrigger`,o)(`matRippleDisabled`,i.disableRipple||i.disabled)(`matRippleCentered`,!0)}},dependencies:[mA,rTe],styles:[`.mdc-checkbox {
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
`],encapsulation:2})}return n})();var ei=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Se({type:n});static ɵinj=_e({imports:[ft,Xr]})}return n})();var Fi=[`*`];function Bi(n,a){if(n&1&&(jr(0,`div`,3),gs(1),$r()),n&2){let e=Yr();St(),tL(e.info())}}function Ui(n,a){if(n&1&&(jr(0,`icon`,4),gs(1,`info`),$r()),n&2)hl(`matTooltip`,Yr().info())}function zi(n,a){n&1&&Ai$1(0,`div`,5)}function Wi(n,a){if(n&1&&(jr(0,`div`,6)(1,`div`,8)(2,`div`,9)(3,`icon`),gs(4),$r()()()()),n&2){let e=Yr();St(),dt(`bg-base-200`,!e.value())(`bg-info`,e.value())(`border-info!`,e.value()),St(),dt(`left-1`,!e.value())(`left-5`,e.value())(`bg-base-400`,!e.value())(`bg-info-light`,e.value()),St(2),tL(e.value()?`done`:`remove`)}}function ji(n,a){if(n&1){let e=LT();jr(0,`mat-checkbox`,10),jt(`ngModelChange`,function(i){cm(e);return lm(Yr().setValue(i))}),$r(),_Y()}if(n&2)hl(`ngModel`,Yr().value()),SY()}var ti=(()=>{let a=class a{constructor(){this.toggle=yo(void 0),this.label=yo(void 0),this.info=yo(void 0),this.inline=yo(!0),this.value=A(void 0),this.registerOnChange=t=>this._onChange=t,this.registerOnTouched=t=>this._onTouch=t}setValue(t){this.value.set(t),this._onChange&&this._onChange(t)}writeValue(t){this.value.set(t)}};a.ɵfac=function(i){return new(i||a)},a.ɵcmp=Be({type:a,selectors:[[`settings-toggle`]],inputs:{toggle:[1,`toggle`],label:[1,`label`],info:[1,`info`],inline:[1,`inline`]},features:[vn$1([{provide:jf,useExisting:mn$1(()=>a),multi:!0}])],ngContentSelectors:Fi,decls:11,vars:13,consts:[[`type`,`button`,`matRipple`,``,1,`hover:bg-base-200`,`relative`,`flex`,`flex-1`,`items-center`,`space-x-2`,`overflow-hidden`,`rounded-sm`,`border`,`py-1`,`pr-1`,`pl-2`,3,`click`],[1,`z-10`,`flex`,`flex-1`,`items-center`,`space-x-2`,`px-2`,`text-left`],[1,`flex`,`flex-col`,`justify-center`,`w-full`,`leading-none`,`h-full`],[1,`text-xs`,`opacity-30`],[3,`matTooltip`],[1,`bg-info`,`absolute`,`inset-0`,`z-0`,`m-0!`,`opacity-10`],[1,`px-2`],[1,`pointer-events-none`,3,`ngModel`],[`toggle`,``,1,`border-base-400`,`relative`,`h-8`,`w-12`,`rounded-full`,`border-2`],[1,`absolute`,`top-1/2`,`flex`,`h-6`,`w-6`,`-translate-x-0.5`,`-translate-y-1/2`,`items-center`,`justify-center`,`rounded-full`,`text-black`,`shadow-sm`],[1,`pointer-events-none`,3,`ngModelChange`,`ngModel`]],template:function(i,o){i&1&&(Sr(),jr(0,`button`,0),jt(`click`,function(){return o.setValue(!o.value())}),jr(1,`div`,1)(2,`div`,2)(3,`div`),gs(4),Qt(5),$r(),Xn(6,Bi,2,1,`div`,3),$r(),Xn(7,Ui,2,1,`icon`,4),$r(),Xn(8,zi,1,0,`div`,5),Xn(9,Wi,5,15,`div`,6)(10,ji,1,1,`mat-checkbox`,7),$r()),i&2&&(dt(`border-base-300`,!o.value())(`border-info`,o.value()),St(),dt(`py-2`,!o.inline())(`py-1`,!o.inline()),St(3),tL(o.label()),St(2),Qn(o.info()&&o.inline()?6:-1),St(),Qn(o.info()&&!o.inline()?7:-1),St(),Qn(o.value()?8:-1),St(),Qn(o.toggle()?9:10))},dependencies:[ei,ft,dIe,oIe,e4,gTe,Yt$1,mt],styles:[`[_nghost-%COMP%]{display:flex}[toggle][_ngcontent-%COMP%]{transition:background .2s,left .2s}
/*# sourceMappingURL=settings-toggle.component.css.map */`]});return a})();var pe=(()=>{let a=class a extends Fa{constructor(){super(),this._element=g(de),this._renderer=g(Et),this.sys=yo(``),this.mod=yo(``),this.index=yo(1),this.bind=yo(``),this.exec=yo(``),this.delay=yo(100),this.on_event=yo(``,{alias:`onEvent`}),this.params=yo(null),this.ignore=yo(!1),this.modelInput=yo(null,{alias:`model`}),this.model=gl(this.modelInput),this.modelChange=Zme(),this._binding=!1,this._old_model=null}ngOnInit(){qk(eF(),t=>t).then(()=>this.bindVariable())}ngOnChanges(t){(t.sys||t.mod||t.bind)&&this.bindVariable();let i=this.model();(t.model||t.modelInput)&&this._old_model!==i&&this.model!=null&&(this._old_model=i,this.execute());let o=this.on_event();t.on_event&&o&&this.subscription(`on_event`,this._renderer.listen(this._element.nativeElement,o,()=>this.execute()))}bindVariable(){Fi$1()&&this.bind()&&this.sys()&&this.mod()&&!this._binding&&this.timeout(`bind`,()=>{let i=bF(this.sys(),this.mod(),this.index()).variable(this.bind());this._binding=!0,this.subscription(`on_changes`,i.bindThenSubscribe(o=>{setTimeout(()=>{this._binding=!1,this.clearTimeout(`bound`),!this.ignore()&&(this._old_model=this.model(),this.model.set(o),this.modelChange.emit(this.model()))},10)})),this.timeout(`bound`,()=>this._binding=!1,200)},20)}execute(){Fi$1()&&this.exec()&&this.sys()&&this.mod()&&!this._timers.execute&&this.timeout(`execute`,()=>{let t=bF(this.sys(),this.mod(),this.index()),i=this.params();this.bind()&&(i=this.params()||[this.model()]),t.execute(this.exec(),i||[]).then(o=>{this.bind()||(this.model.set(o),this._old_model=this.model(),this.modelChange.emit(this.model()))})},this.delay())}};a.ɵfac=function(i){return new(i||a)},a.ɵdir=Y({type:a,selectors:[[`i`,`bind`,``],[``,`binding`,``],[`co-bind`]],inputs:{sys:[1,`sys`],mod:[1,`mod`],index:[1,`index`],bind:[1,`bind`],exec:[1,`exec`],delay:[1,`delay`],on_event:[1,`onEvent`,`on_event`],params:[1,`params`],ignore:[1,`ignore`],modelInput:[1,`model`,`modelInput`]},outputs:{modelChange:`modelChange`},features:[$e,kt]});return a})();function gt(n,a=2){let e=`${n}`;for(;e.length<a;)e=`0${e}`;return e}var ii=(()=>{let a=class a{transform(t){let i=`${gt(Math.floor(t/60)%60)}:${gt(t%60)}`,o=Math.floor(t/60/60);return o>0&&(i=`${gt(o)}:${i}`),i}};a.ɵfac=function(i){return new(i||a)},a.ɵpipe=Kd({name:`duration`,type:a,pure:!0});return a})();function Hi(n,a){var e,t,i,o;if(n&1){let s=LT();jr(0,`div`,0)(1,`div`,3)(2,`i`,4),oL(`modelChange`,function(g){cm(s);let E=Yr();return Mz(E.rec_status,g)||(E.rec_status=g),lm(g)}),$r(),jr(3,`i`,5),oL(`modelChange`,function(g){cm(s);let E=Yr();return Mz(E.rec_title,g)||(E.rec_title=g),lm(g)}),$r(),jr(4,`i`,6),oL(`modelChange`,function(g){cm(s);let E=Yr();return Mz(E.rec_remaining,g)||(E.rec_remaining=g),lm(g)}),$r(),jr(5,`i`,7),oL(`modelChange`,function(g){cm(s);let E=Yr();return Mz(E.rec_next,g)||(E.rec_next=g),lm(g)}),$r()(),jr(6,`div`,8),gs(7),$r(),jr(8,`div`,9)(9,`button`,10)(10,`icon`),gs(11,`stop`),$r()()(),jr(12,`div`,9)(13,`button`,11)(14,`icon`),gs(15),$r()()(),jr(16,`div`,12)(17,`div`,13),gs(18),PT(19,`translate`),$r()(),jr(20,`div`,14)(21,`label`),gs(22),PT(23,`translate`),$r(),jr(24,`div`,15),gs(25),PT(26,`duration`),$r()(),jr(27,`div`,14)(28,`label`),gs(29),PT(30,`translate`),$r(),jr(31,`div`,15),gs(32),PT(33,`duration`),$r()()()}if(n&2){let s=Yr();St(2),iL(`model`,s.rec_status),hl(`sys`,s.id)(`mod`,(e=s.capture_mod())==null?void 0:e.mod),St(),iL(`model`,s.rec_title),hl(`sys`,s.id)(`mod`,(t=s.capture_mod())==null?void 0:t.mod),St(),iL(`model`,s.rec_remaining),hl(`sys`,s.id)(`mod`,(i=s.capture_mod())==null?void 0:i.mod),St(),iL(`model`,s.rec_next),hl(`sys`,s.id)(`mod`,(o=s.capture_mod())==null?void 0:o.mod),St(2),Ni$1(` `,s.rec_title||`~Unnamed Recording~`,` `),St(2),hl(`disabled`,!s.rec_status||s.rec_status===`stopped`)(`sys`,s.id),St(4),hl(`sys`,s.id)(`exec`,s.rec_status===`playing`?`pause`:`start`),Zn(`place-action`,s.rec_status===`playing`?`pause`:`start`),St(2),tL(s.rec_status===`playing`?`pause`:`play_arrow`),St(2),dt(`bg-error`,s.rec_status===`playing`)(`text-error-content`,s.rec_status===`playing`)(`bg-warning`,s.rec_status===`paused`)(`text-warning-content`,s.rec_status===`paused`)(`bg-base-300`,s.rec_status===`stopped`),St(),Ni$1(` `,Gz(19,34,s.rec_status===`playing`?`APP.CONTROL.STATE_RECORDING`:s.rec_status===`paused`?`APP.CONTROL.STATE_PAUSED`:`APP.CONTROL.STATE_IDLE`),` `),St(4),tL(Gz(23,36,`APP.CONTROL.REMAINING`)),St(3),tL(Gz(26,38,s.rec_remaining)),St(4),tL(Gz(30,40,`APP.CONTROL.NEXT_RECORDING`)),St(3),tL(Gz(33,42,s.rec_next))}}function Xi(n,a){var e,t,i;if(n&1){let o=LT();jr(0,`div`,2)(1,`button`,16),jt(`click`,function(){cm(o);return lm(Yr().toggleMute())}),jr(2,`icon`),gs(3),$r()(),jr(4,`mat-slider`,1)(5,`input`,17),jt(`ngModelChange`,function(u){cm(o);return lm(Yr().setVolume(u))}),$r(),_Y(),$r(),jr(6,`span`,18),gs(7),$r()()}if(n&2){let o=Yr();St(3),tL(o.volume_icon()),St(),dt(`opacity-50`,(e=o.system())==null?void 0:e.mute),St(),hl(`ngModel`,((t=o.system())==null?void 0:t.volume)||0),SY(),St(2),Ni$1(` `,((i=o.system())==null?void 0:i.volume)||0,`% `)}}var Go=(()=>{let a=class a{constructor(){this._state=g(rn$1),this.system=this._state.system,this.has_master_audio=this._state.has_master_audio,this.capture_mod=le(()=>this._state.capture_list()[0]),this.volume_icon=le(()=>{let t=this.system();return t!=null&&t.mute?`volume_off`:(t==null?void 0:t.volume)>0?`volume_up`:`volume_mute`}),this.setVolume=t=>{var i;(i=this.system())!=null&&i.mute&&this._state.setMute(!1),this._state.setVolume(t)},this.toggleMute=()=>{let t=this.system();this._state.setMute(!(t!=null&&t.mute))}}get id(){return this._state.id}};a.ɵfac=function(i){return new(i||a)},a.ɵcmp=Be({type:a,selectors:[[`control-status-bar`]],decls:3,vars:2,consts:[[`recording`,``,1,`divide-base-200`,`text-base-content`,`flex`,`items-center`,`divide-x`,`text-xs`],[1,`flex-1`],[1,`text-base-content`,`flex`,`w-lg`,`max-w-[50%]`,`items-center`,`space-x-2`,`px-4`,`py-2`],[`hidden`,``],[`binding`,``,`bind`,`status`,3,`modelChange`,`model`,`sys`,`mod`],[`binding`,``,`bind`,`title`,3,`modelChange`,`model`,`sys`,`mod`],[`binding`,``,`bind`,`remaining`,3,`modelChange`,`model`,`sys`,`mod`],[`binding`,``,`bind`,`next`,3,`modelChange`,`model`,`sys`,`mod`],[1,`flex`,`h-12`,`w-24`,`items-center`,`justify-center`,`p-2`,`text-center`],[1,`flex`,`h-12`,`w-12`,`items-center`,`justify-center`],[`place-action`,`stop`,`icon`,``,`matRipple`,``,`binding`,``,`mod`,`Capture`,`onEvent`,`click`,`exec`,`stop`,1,`rounded-none`,3,`disabled`,`sys`],[`icon`,``,`matRipple`,``,`binding`,``,`mod`,`Capture`,`onEvent`,`click`,1,`rounded-none`,3,`sys`,`exec`],[1,`flex`,`h-12`,`w-32`,`flex-col`,`p-2`],[1,`rounded-sm`,`p-2`,`text-center`,`uppercase`],[1,`h-12`,`p-2`],[1,``],[`icon`,``,`matRipple`,``,`mute`,``,3,`click`],[`matSliderThumb`,``,3,`ngModelChange`,`ngModel`],[`volume-level`,``,1,`w-12`,`text-right`,`tabular-nums`]],template:function(i,o){i&1&&(Xn(0,Hi,34,44,`div`,0),Ai$1(1,`div`,1),Xn(2,Xi,8,5,`div`,2)),i&2&&(Qn(o.capture_mod()?0:-1),St(2),Qn(o.has_master_audio()!==!1?2:-1))},dependencies:[pe,Oe,De,Te,dIe,dk,oIe,e4,gA,mA,gTe,ii,l$1],styles:[`[_nghost-%COMP%]{display:flex;align-items:center;height:3.5rem;overflow:hidden}
/*# sourceMappingURL=status-bar.component.css.map */`]});return a})();var $i=[`panning_control`];function Gi(n){return n?n instanceof MouseEvent?{x:n.clientX,y:n.clientY}:n.touches&&n.touches.length>0?{x:n.touches[0].clientX,y:n.touches[0].clientY}:{x:-1,y:-1}:{x:-1,y:-1}}var ee=(function(n){return n.Down=`down`,n.Up=`up`,n.Stop=`stop`,n})(ee||{});var te=(function(n){return n.Left=`left`,n.Right=`right`,n.Stop=`stop`,n})(te||{});var ni=(()=>{let a=class a extends Fa{constructor(){super(...arguments),this._renderer=g(Et),this.panInput=yo(te.Stop,{alias:`pan`}),this.pan=gl(this.panInput),this.tiltInput=yo(ee.Stop,{alias:`tilt`}),this.tilt=gl(this.tiltInput),this.panChange=Zme(),this.tiltChange=Zme(),this._panning_el=Qme(`panning_control`),this.thumb_transform=le(()=>{let t=this.pan(),i=this.tilt();return`translate(${t===te.Stop?`0`:t===te.Left?`-50`:`50`}%, ${i===ee.Stop?`0`:i===ee.Up?`-50`:`50`}%)`})}startPan(t){let i=t instanceof MouseEvent?`mousemove`:`touchmove`,o=t instanceof MouseEvent?`mouseup`:`touchend`;this._box=this._panning_el().nativeElement.getBoundingClientRect(),this.handlePan(t),this.subscription(`on_move`,this._renderer.listen(`window`,i,s=>this.handlePan(s))),this.subscription(`on_end`,this._renderer.listen(`window`,o,s=>{this.unsub(`on_move`),this.unsub(`on_end`),this.tilt.set(ee.Stop),this.pan.set(te.Stop),this.tiltChange.emit(this.tilt()),this.panChange.emit(this.pan())}))}handlePan(t){let i=Gi(t),o={y:this._box.top+this._box.height/2,x:this._box.left+this._box.width/2},s=Math.atan2(i.y-o.y,i.x-o.x)*180/Math.PI,{tilt:u,pan:g}=this,E=u(),Z=g();this.tilt.set(s>=150||s<=-150||s>-30&&s<30?ee.Stop:s>0?ee.Down:ee.Up),this.pan.set(s>=60&&s<=120||s<=-60&&s>=-120?te.Stop:s>90||s<-90?te.Left:te.Right);let ie=this.tilt();E!==ie&&this.tiltChange.emit(ie);let de=this.pan();Z!==de&&this.panChange.emit(de)}stopPan(){this.tilt.set(ee.Stop),this.pan.set(te.Stop),this.tiltChange.emit(this.tilt()),this.panChange.emit(this.pan())}};a.ɵfac=(()=>{let t;return function(o){return(t||(t=En$1(a)))(o||a)}})(),a.ɵcmp=Be({type:a,selectors:[[`joystick`]],viewQuery:function(i,o){i&1&&z0(o._panning_el,$i,5),i&2&&az()},inputs:{panInput:[1,`pan`,`panInput`],tiltInput:[1,`tilt`,`tiltInput`]},outputs:{panChange:`panChange`,tiltChange:`tiltChange`},features:[$e],decls:16,vars:2,consts:[[`panning_control`,``],[`joystick`,``,1,`bg-base-300`,`relative`,`h-48`,`w-48`,`rounded-full`,`text-white`,3,`mousedown`,`touchstart`,`contextmenu`,`click`],[1,`absolute`,`inset-0`,`flex`,`items-center`,`text-5xl`],[2,`transform`,`translateX(-.5rem)`],[1,`absolute`,`inset-0`,`flex`,`items-center`,`justify-end`,`text-5xl`],[2,`transform`,`translateX(.5rem)`],[1,`absolute`,`inset-0`,`flex`,`justify-center`,`text-5xl`],[2,`transform`,`translateY(-.5rem)`],[1,`absolute`,`inset-0`,`flex`,`items-end`,`justify-center`,`text-5xl`],[2,`transform`,`translateY(.5rem)`],[1,`bg-base-100`,`absolute`,`top-12`,`right-12`,`bottom-12`,`left-12`,`flex`,`items-center`,`justify-center`,`rounded-full`],[`thumb`,``,1,`bg-neutral`,`h-12`,`w-12`,`rounded-full`]],template:function(i,o){i&1&&(jr(0,`div`,1,0),jt(`mousedown`,function(u){return o.startPan(u)})(`touchstart`,function(u){return o.startPan(u)})(`contextmenu`,function(u){return u.preventDefault()})(`click`,function(){return o.stopPan()}),jr(2,`div`,2)(3,`icon`,3),gs(4,` chevron_left `),$r()(),jr(5,`div`,4)(6,`icon`,5),gs(7,`chevron_right`),$r()(),jr(8,`div`,6)(9,`icon`,7),gs(10,`expand_less`),$r()(),jr(11,`div`,8)(12,`icon`,9),gs(13,`expand_more`),$r()(),jr(14,`div`,10),Ai$1(15,`div`,11),$r()()),i&2&&(St(15),cg(`transform`,o.thumb_transform()))},dependencies:[gTe],encapsulation:2});return a})();function Ji(n,a){if(n&1&&(jr(0,`mat-option`,6),gs(1),$r()),n&2){let e=a.$implicit;hl(`value`,e),St(),Ni$1(` `,e.name,` `)}}function Yi(n,a){if(n&1){let e=LT();jr(0,`button`,28),jt(`click`,function(){cm(e);let i=Yr().$implicit;return lm(Yr(3).removePreset(i))}),jr(1,`icon`),gs(2,`delete`),$r()()}}function Ki(n,a){if(n&1){let e=LT();jr(0,`div`,25)(1,`button`,26),jt(`click`,function(){let i=cm(e).$implicit;return lm(Yr(3).recallPreset(i))}),gs(2),$r(),Xn(3,Yi,3,0,`button`,27),$r()}if(n&2){let e=a.$implicit,t=Yr(3);St(),dt(`inverse`,t.preset!==e),St(),Ni$1(` `,e,` `),St(),Qn(t.presets().length>1?3:-1)}}function en(n,a){if(n&1&&KW(0,Ki,4,4,`div`,25,zW),n&2)qW(Yr(2).presets())}function tn(n,a){n&1&&(jr(0,`p`,10),gs(1),PT(2,`translate`),$r()),n&2&&(St(),Ni$1(` `,Gz(2,1,`APP.CONTROL.CAMERA_PRESETS_EMPTY`),` `))}function nn(n,a){n&1&&(jr(0,`div`,24)(1,`p`),gs(2),PT(3,`translate`),$r()()),n&2&&(St(2),Ni$1(` `,Gz(3,1,`APP.CONTROL.CAMERA_SELECT_MSG`),` `))}function on(n,a){if(n&1){let e=LT();jr(0,`div`,1)(1,`mat-form-field`,4)(2,`mat-select`,5),PT(3,`translate`),jt(`ngModelChange`,function(i){cm(e);return lm(Yr().selectCamera(i))}),KW(4,Ji,2,2,`mat-option`,6,zW),$r(),_Y(),$r(),jr(6,`div`,7)(7,`div`,8)(8,`h3`,9),gs(9),PT(10,`translate`),$r(),Xn(11,en,2,0)(12,tn,3,3,`p`,10),jr(13,`button`,11)(14,`icon`),gs(15,`add`),$r()(),jr(16,`mat-menu`,null,0)(18,`div`,12)(19,`mat-form-field`,13),jt(`click`,function(i){return i.stopPropagation()}),jr(20,`input`,14),PT(21,`translate`),jt(`ngModelChange`,function(i){cm(e);return lm(Yr().new_preset.set(i))}),$r(),_Y(),$r(),jr(22,`button`,15),jt(`click`,function(){cm(e);let i=Yr();return i.addPreset(i.new_preset()),lm(i.new_preset.set(``))}),gs(23),PT(24,`translate`),$r()()()(),jr(25,`div`,16)(26,`h3`,17),gs(27),PT(28,`translate`),$r(),jr(29,`div`,18),jt(`mouseup`,function(){cm(e);return lm(Yr().stopZoom())},j$)(`touchend`,function(){cm(e);return lm(Yr().stopZoom())},j$),jr(30,`joystick`,19),oL(`panChange`,function(i){cm(e);let o=Yr();return Mz(o.pan,i)||(o.pan=i),lm(i)})(`tiltChange`,function(i){cm(e);let o=Yr();return Mz(o.tilt,i)||(o.tilt=i),lm(i)}),jt(`panChange`,function(){cm(e);return lm(Yr().moveCamera())})(`tiltChange`,function(){cm(e);return lm(Yr().moveCamera())}),$r(),jr(31,`div`,20)(32,`button`,21),jt(`mousedown`,function(i){cm(e);return lm(Yr().startZoom(`in`,i))})(`touchstart`,function(i){cm(e);return lm(Yr().startZoom(`in`,i))})(`contextmenu`,function(i){return i.preventDefault()})(`click`,function(){cm(e);return lm(Yr().stopZoom())}),jr(33,`icon`),gs(34,`add`),$r()(),jr(35,`div`,22),gs(36),PT(37,`translate`),$r(),jr(38,`button`,23),jt(`mousedown`,function(i){cm(e);return lm(Yr().startZoom(`out`,i))})(`touchstart`,function(i){cm(e);return lm(Yr().startZoom(`out`,i))})(`contextmenu`,function(i){return i.preventDefault()})(`click`,function(){cm(e);return lm(Yr().stopZoom())}),jr(39,`icon`),gs(40,`remove`),$r()()()()(),Xn(41,nn,4,3,`div`,24),$r()()}if(n&2){let e=cz(17),t=Yr();St(2),hl(`ngModel`,t.active_camera())(`placeholder`,Gz(3,14,`APP.CONTROL.CAMERA_SELECT`)),SY(),St(2),qW(t.camera_list()),St(5),Ni$1(` `,Gz(10,16,`APP.CONTROL.CAMERA_PRESETS`),` `),St(2),Qn(t.presets().length?11:12),St(2),hl(`matMenuTriggerFor`,e),St(7),hl(`ngModel`,t.new_preset())(`placeholder`,Gz(21,18,`APP.CONTROL.CAMERA_PRESETS_NEW`)),SY(),St(2),hl(`disabled`,!t.new_preset()),St(),Ni$1(` `,Gz(24,20,`APP.CONTROL.CAMERA_PRESETS_SAVE`),` `),St(4),Ni$1(` `,Gz(28,22,`APP.CONTROL.CONTROLS`),` `),St(3),iL(`pan`,t.pan)(`tilt`,t.tilt),St(6),Ni$1(` `,Gz(37,24,`APP.CONTROL.ZOOM`),` `),St(5),Qn(t.active_camera()?-1:41)}}function an(n,a){n&1&&(jr(0,`div`,2)(1,`p`),gs(2),PT(3,`translate`),$r()()),n&2&&(St(2),tL(Gz(3,1,`APP.CONTROL.CAMERAS_EMPTY`)))}function rn(n,a){var e,t;if(n&1){let i=LT();jr(0,`div`,3)(1,`i`,29),jt(`modelChange`,function(s){var g,E;cm(i);let u=Yr();return lm(u.presets.set((g=u.active_camera())!=null&&g.index?(s||[])[(E=u.active_camera())==null?void 0:E.index]:s||[]))}),$r()()}if(n&2){let i=Yr();St(),hl(`sys`,i.id)(`mod`,(e=i.active_camera())==null?void 0:e.mod)(`bind`,(t=i.active_camera())!=null&&t.index?`camera_presets`:`presets`)}}var Le=(function(n){return n.In=`in`,n.Out=`out`,n.Stop=`stop`,n})(Le||{});var oi=(()=>{let a=class a{get id(){return this._state.id}constructor(){this._state=g(rn$1),this._tooltip=g(ae),this.active_camera=A(void 0),this.presets=A([]),this.preset=``,this.zoom=Le.Stop,this.pan=te.Stop,this.tilt=ee.Stop,this.new_preset=A(``),this.camera_list=this._state.available_cameras,this._selected_camera=this._state.selected_camera,this.close=()=>this._tooltip.close(),Gt(()=>{let t=this.camera_list(),i=this._selected_camera();this.active_camera.set(t==null?void 0:t.find(o=>o.id===i))})}selectCamera(t){this.active_camera.set(t);let i=bF(this.id,`System`);i&&i.execute(`selected_camera`,[t.id])}recallPreset(t){let i=this.active_camera();if(!(i!=null&&i.mod))return;let o=bF(this.id,i.mod);o&&o.execute(`recall`,[t])}addPreset(t){let i=this.active_camera();if(!i)return;let o=bF(this.id,`System`);o&&o.execute(`add_preset`,[t,i.id])}removePreset(t){let i=this.active_camera();if(!i)return;let o=bF(this.id,`System`);o&&o.execute(`remove_preset`,[t,i.id])}moveCamera(){let t=this.active_camera();t&&(clearTimeout(this._move_timeout),this._move_timeout=setTimeout(async()=>{let{index:i}=t,o=bF(this.id,t.mod);o&&(this.tilt!==ee.Stop&&await o.execute(`tilt`,i?[this.tilt,i]:[this.tilt]),this.pan!==te.Stop&&await o.execute(`pan`,i?[this.pan,i]:[this.pan]),this.tilt===ee.Stop&&this.pan===te.Stop&&await o.execute(`stop`,i?[i]:[]))},50))}async startZoom(t,i){let o=this.active_camera();if(!(o!=null&&o.mod))return;let s=bF(this.id,o.mod);if(!s)return;this.zoom=t===`in`?Le.In:Le.Out;let{index:u}=o;await s.execute(`zoom`,u?[this.zoom,u]:[this.zoom]).catch()}stopZoom(){clearTimeout(this._stop_zoom_timeout),this._stop_zoom_timeout=setTimeout(()=>{if(this.zoom===Le.Stop)return;let t=this.active_camera();if(!(t!=null&&t.mod))return;let i=bF(this.id,t.mod);if(!i)return;let{index:o}=t;this.zoom=Le.Stop,i.execute(`zoom`,o?[this.zoom,o]:[this.zoom])},50)}};a.ɵfac=function(i){return new(i||a)},a.ɵcmp=Be({type:a,selectors:[[`camera-tooltip`]],decls:3,vars:2,consts:[[`menu`,`matMenu`],[1,`bg-base-100`,`my-2`,`flex`,`flex-col`,`rounded-sm`,`shadow-sm`],[1,`bg-base-100`,`my-2`,`flex`,`flex-col`,`rounded-sm`,`p-8`,`text-center`,`shadow-sm`],[`hidden`,``],[`appearance`,`outline`,1,`no-subscript`,`m-2`],[3,`ngModelChange`,`ngModel`,`placeholder`],[3,`value`],[1,`border-base-200`,`relative`,`mt-1`,`flex`,`flex-col`,`border-t`,`sm:flex-row`],[1,`border-base-200`,`relative`,`flex`,`flex-col`,`items-center`,`space-y-2`,`border-b`,`p-4`,`sm:border-r`,`sm:border-b-0`],[1,`mb-2`,`w-full`,`pr-12`,`text-xl`,`font-medium`],[1,`bg-base-300`,`w-full`,`rounded-sm`,`p-8`,`opacity-30`],[`icon`,``,`matRipple`,``,1,`absolute`,`top-1`,`right-4`,3,`matMenuTriggerFor`],[1,`flex`,`w-full`,`flex-col`,`px-2`],[`appearance`,`outline`,1,`h-14`,`w-full`,3,`click`],[`matInput`,``,3,`ngModelChange`,`ngModel`,`placeholder`],[`btn`,``,`matRipple`,``,1,`w-full`,3,`click`,`disabled`],[1,`p-4`],[1,`mb-2`,`text-xl`,`font-medium`],[1,`flex`,`items-center`,`space-x-2`,3,`mouseup`,`touchend`],[3,`panChange`,`tiltChange`,`pan`,`tilt`],[`zoom`,``,1,`border-base-200`,`flex`,`flex-col`,`items-center`,`rounded-sm`,`border`],[`zoom-in`,``,`icon`,``,`matRipple`,``,1,`rounded-sm`,3,`mousedown`,`touchstart`,`contextmenu`,`click`],[1,`border-base-200`,`flex`,`h-10`,`w-10`,`items-center`,`justify-center`,`border-t`,`border-b`,`text-xs`],[`zoom-out`,``,`icon`,``,`matRipple`,``,1,`rounded-sm`,3,`mousedown`,`touchstart`,`contextmenu`,`click`],[1,`bg-base-100`,`bg-opacity-75`,`absolute`,`inset-0`,`flex`,`items-center`,`justify-center`],[1,`flex`,`items-center`,`space-x-2`],[`preset`,``,`btn`,``,`matRipple`,``,1,`w-48`,3,`click`],[`icon`,``,`matRipple`,``,1,`border-error`,`bg-base-100`,`text-error`,`h-12`,`w-12`,`rounded-sm`,`border`],[`icon`,``,`matRipple`,``,1,`border-error`,`bg-base-100`,`text-error`,`h-12`,`w-12`,`rounded-sm`,`border`,3,`click`],[`binding`,``,3,`modelChange`,`sys`,`mod`,`bind`]],template:function(i,o){var s,u;i&1&&(Xn(0,on,42,26,`div`,1)(1,an,4,3,`div`,2),Xn(2,rn,2,3,`div`,3)),i&2&&(Qn((s=o.camera_list())!=null&&s.length?0:1),St(2),Qn((u=o.active_camera())!=null&&u.mod?2:-1))},dependencies:[pe,dIe,dk,oIe,e4,gA,mA,gTe,ni,ou,ji$1,ru,Ee,Mt,Tm,Dm,Qi,Gi$1,jx,l$1],encapsulation:2});return a})();function sn(n,a){if(n&1){let e=LT();jr(0,`button`,3),jt(`click`,function(){let i=cm(e).$implicit;return lm(Yr().join(i.id))}),gs(1),$r()}if(n&2){let e=a.$implicit,t=Yr();dt(`inverse`,e.id!==t.active()),St(),Ni$1(` `,e.name,` `)}}var ai=(()=>{let a=class a{constructor(){this._state=g(rn$1),this._join_modes=this._state.join_modes,this.modes=le(()=>{let t=this._join_modes(),i=[];for(let o in t)i.push(m(l({},t[o]),{id:o}));return i}),this.active=this._state.joined_id,this.join=t=>this._state.join(t)}};a.ɵfac=function(i){return new(i||a)},a.ɵcmp=Be({type:a,selectors:[[`join-room-tooltip`]],decls:6,vars:3,consts:[[1,`bg-base-100`,`my-2`,`flex`,`flex-col`,`items-center`,`space-y-2`,`rounded-sm`,`p-2`,`shadow-sm`],[1,`bg-base-200`,`w-full`,`rounded-sm`,`px-4`,`py-2`,`text-xl`,`font-medium`],[`btn`,``,`matRipple`,``,1,`w-64`,3,`inverse`],[`btn`,``,`matRipple`,``,1,`w-64`,3,`click`]],template:function(i,o){i&1&&(jr(0,`div`,0)(1,`h3`,1),gs(2),PT(3,`translate`),$r(),KW(4,sn,2,3,`button`,2,zW),$r()),i&2&&(St(2),Ni$1(` `,Gz(3,1,`APP.CONTROL.ACTION_JOIN_ROOMS`),` `),St(2),qW(o.modes()))},dependencies:[gA,mA,l$1],encapsulation:2});return a})();var cn=(n,a)=>a.binding;function ln(n,a){if(n&1){let e=LT();jr(0,`div`,3)(1,`div`,4),gs(2),$r(),jr(3,`i`,5),oL(`modelChange`,function(i){let o=cm(e).$implicit;return Mz(o.value,i)||(o.value=i),lm(i)}),$r(),jr(4,`mat-slider`,6)(5,`input`,7),jt(`ngModelChange`,function(i){let o=cm(e).$implicit;return lm(Yr(2).setLevel(o,i))}),$r(),_Y(),$r()()}if(n&2){let e=a.$implicit,t=Yr(2);St(2),Ni$1(` `,e==null?void 0:e.name,` `),St(),iL(`model`,e.value),hl(`sys`,t.id)(`bind`,e==null?void 0:e.binding),St(2),hl(`ngModel`,e==null?void 0:e.value),SY()}}function dn(n,a){if(n&1&&KW(0,ln,6,5,`div`,3,cn),n&2)qW(Yr().lights())}function mn(n,a){n&1&&(jr(0,`div`,2)(1,`p`),gs(2),PT(3,`translate`),$r()()),n&2&&(St(2),tL(Gz(3,1,`APP.CONTROL.LIGHTING_EMPTY`)))}var ri=(()=>{let a=class a{constructor(){this._state=g(rn$1),this._tooltip=g(ae),this.system=this._state.system_id,this.lights=this._state.lighting_levels,this.close=()=>this._tooltip.close()}get id(){return this._state.id}setLevel(t,i){clearTimeout(this._level_timeout),this._level_timeout=setTimeout(async()=>{let o=this.system();if(!o)return;let s=bF(o,`Lighting`);s&&await s.execute(`set_lighting_level`,[i,t==null?void 0:t.area])},50)}};a.ɵfac=function(i){return new(i||a)},a.ɵcmp=Be({type:a,selectors:[[`lighting-tooltip`]],decls:6,vars:4,consts:[[1,`bg-base-100`,`my-2`,`flex`,`flex-col`,`items-center`,`space-y-4`,`rounded-sm`,`p-2`,`shadow-sm`],[1,`bg-base-200`,`w-full`,`rounded-sm`,`px-4`,`py-2`,`text-xl`,`font-medium`],[1,`flex`,`items-center`,`justify-center`,`p-8`],[1,`border-base-300`,`relative`,`min-w-[20rem]`,`rounded-sm`,`border`,`px-4`],[1,`bg-base-100`,`absolute`,`top-0`,`left-2`,`-translate-y-1/2`,`rounded-sm`,`px-2`,`py-1`,`text-sm`,`font-medium`],[`binding`,``,`mod`,`Lighting`,1,`hidden`,3,`modelChange`,`model`,`sys`,`bind`],[1,`mt-2`,`w-[calc(100%-1rem)]`],[`matSliderThumb`,``,3,`ngModelChange`,`ngModel`]],template:function(i,o){i&1&&(jr(0,`div`,0)(1,`h3`,1),gs(2),PT(3,`translate`),$r(),Xn(4,dn,2,0)(5,mn,4,3,`div`,2),$r()),i&2&&(St(2),Ni$1(` `,Gz(3,2,`APP.CONTROL.LIGHTING_LEVELS`),` `),St(2),Qn(o.lights().length>0?4:5))},dependencies:[Oe,De,Te,dIe,dk,oIe,e4,pe,l$1],encapsulation:2});return a})();function hn(n,a){if(n&1){let e=LT();jr(0,`button`,4),jt(`click`,function(){let i=cm(e).$implicit;return lm(Yr(2).setScene(i.name))}),jr(1,`div`,5)(2,`icon`),gs(3),$r(),jr(4,`div`,6),gs(5),$r()()()}if(n&2){let e=a.$implicit;dt(`inverse`,Yr(2).scene()!==e.id),St(2),cg(`opacity`,e.opacity||1),St(),tL(e.icon),St(2),tL(e.name)}}function _n(n,a){if(n&1&&KW(0,hn,6,6,`button`,3,zW),n&2)qW(Yr().scenes())}function pn(n,a){n&1&&(jr(0,`div`,2)(1,`p`),gs(2),PT(3,`translate`),$r()()),n&2&&(St(2),tL(Gz(3,1,`APP.CONTROL.LIGHT_SCENES_EMPTY`)))}var si=(()=>{let a=class a{constructor(){this._state=g(rn$1),this._tooltip=g(ae),this.scene=this._state.lighting_scene,this.scenes=this._state.lighting_scenes,this.close=()=>this._tooltip.close()}get id(){return this._state.id}setScene(t){let i=bF(this.id,`System`);i&&i.execute(`select_lighting_scene`,[t])}};a.ɵfac=function(i){return new(i||a)},a.ɵcmp=Be({type:a,selectors:[[`lighting-tooltip`]],decls:6,vars:4,consts:[[1,`bg-base-100`,`my-2`,`flex`,`flex-col`,`items-center`,`space-y-2`,`rounded-sm`,`px-2`,`pt-2`,`pb-4`,`shadow-sm`],[1,`bg-base-200`,`w-full`,`rounded-sm`,`px-4`,`py-2`,`text-xl`,`font-medium`],[1,`flex`,`items-center`,`justify-center`,`p-8`],[`state`,``,`btn`,``,`matRipple`,``,1,`mx-2`,`w-64`,3,`inverse`],[`state`,``,`btn`,``,`matRipple`,``,1,`mx-2`,`w-64`,3,`click`],[1,`flex`,`flex-1`,`items-center`,`space-x-4`],[1,`flex-1`]],template:function(i,o){var s;i&1&&(jr(0,`div`,0)(1,`h3`,1),gs(2),PT(3,`translate`),$r(),Xn(4,_n,2,0)(5,pn,4,3,`div`,2),$r()),i&2&&(St(2),Ni$1(` `,Gz(3,2,`APP.CONTROL.ACTION_LIGHT_SCENES`),` `),St(2),Qn((s=o.scenes())!=null&&s.length?4:5))},dependencies:[gTe,gA,mA,l$1],encapsulation:2});return a})();var un=(n,a)=>[n,a];function bn(n,a){if(n&1){let e=LT();jr(0,`div`,1)(1,`i`,4),oL(`modelChange`,function(i){cm(e);let o=Yr();return Mz(o.light,i)||(o.light=i),lm(i)}),$r()()}if(n&2){let e=Yr();St(),iL(`model`,e.light),hl(`sys`,e.id)(`bind`,`lights/`+e.lights()[0])}}function fn(n,a){if(n&1&&(jr(0,`button`,6),gs(1),$r()),n&2){let e=a.$implicit,t=Yr(2);dt(`inverse`,e===t.light.state),hl(`sys`,t.id)(`params`,Bz(5,un,t.lights()[0],e)),St(),Ni$1(` `,e,` `)}}function gn(n,a){if(n&1&&KW(0,fn,2,8,`button`,5,zW),n&2)qW(Yr().light.states)}function xn(n,a){n&1&&(jr(0,`div`,3)(1,`p`),gs(2),PT(3,`translate`),$r()()),n&2&&(St(2),tL(Gz(3,1,`APP.CONTROL.LIGHTING_EMPTY`)))}var ci=(()=>{let a=class a{constructor(){this._state=g(rn$1),this._tooltip=g(ae),this.lights=this._state.lights,this.close=()=>this._tooltip.close()}get id(){return this._state.id}};a.ɵfac=function(i){return new(i||a)},a.ɵcmp=Be({type:a,selectors:[[`lighting-tooltip`]],decls:7,vars:5,consts:[[1,`bg-base-100`,`my-2`,`flex`,`flex-col`,`items-center`,`space-y-2`,`rounded-sm`,`p-4`,`shadow-sm`],[`hidden`,``],[1,`mb-2`,`text-xl`,`font-medium`],[1,`flex`,`items-center`,`justify-center`,`p-8`],[`binding`,``,`mod`,`System`,3,`modelChange`,`model`,`sys`,`bind`],[`state`,``,`btn`,``,`matRipple`,``,`binding`,``,`onEvent`,`click`,`mod`,`System`,`exec`,`environment`,1,`w-64`,3,`inverse`,`sys`,`params`],[`state`,``,`btn`,``,`matRipple`,``,`binding`,``,`onEvent`,`click`,`mod`,`System`,`exec`,`environment`,1,`w-64`,3,`sys`,`params`]],template:function(i,o){var s,u;i&1&&(jr(0,`div`,0),Xn(1,bn,2,3,`div`,1),jr(2,`h3`,2),gs(3),PT(4,`translate`),$r(),Xn(5,gn,2,0)(6,xn,4,3,`div`,3),$r()),i&2&&(St(),Qn(o.lights()[0]?1:-1),St(2),Ni$1(` `,Gz(4,3,`APP.CONTROL.LIGHTING`),` `),St(2),Qn((u=(s=o.light)==null?void 0:s.states)!=null&&u.length?5:6))},dependencies:[pe,gA,mA,l$1],encapsulation:2});return a})();var li=(n,a)=>[n,a];var di=(n,a)=>a.name;function vn(n,a){if(n&1){let e=LT();jr(0,`div`,10)(1,`i`,11),oL(`modelChange`,function(i){let o=cm(e).$implicit;return Mz(o.state,i)||(o.state=i),lm(i)}),$r()(),jr(2,`settings-toggle`,12),jt(`ngModelChange`,function(i){let o=cm(e).$implicit,s=Yr(2).$implicit;return lm(Yr(2).setRoomMute(s.name,o.name,!i))}),gs(3),$r(),_Y()}if(n&2){let e=a.$implicit,t=Yr(2).$implicit,i=Yr(2);St(),hl(`sys`,i.id)(`mod`,t.module_id||t.mod)(`bind`,t.binding),iL(`model`,e.state),St(),hl(`toggle`,!0)(`ngModel`,e.state!==t.falsy_value),SY(),St(),Ni$1(` `,e.name,` `)}}function kn(n,a){if(n&1&&(jr(0,`div`,5),KW(1,vn,4,7,null,null,di),$r()),n&2){let e=Yr().$implicit;St(),qW(e.rooms)}}function Cn(n,a){if(n&1){let e=LT();jr(0,`div`,10)(1,`i`,13),oL(`modelChange`,function(i){cm(e);let o=Yr().$implicit,s=Yr(2);return Mz(s.volume[o.id],i)||(s.volume[o.id]=i),lm(i)}),$r(),jr(2,`i`,14),oL(`modelChange`,function(i){cm(e);let o=Yr().$implicit,s=Yr(2);return Mz(s.mute[o.id],i)||(s.mute[o.id]=i),lm(i)}),$r()()}if(n&2){let e=Yr().$implicit,t=Yr(2);St(),hl(`sys`,t.id)(`mod`,e.mod)(`ignore`,t.changing()),iL(`model`,t.volume[e.id]),St(),hl(`sys`,t.id)(`mod`,e.mod),iL(`model`,t.mute[e.id])}}function yn(n,a){if(n&1){let e=LT();jr(0,`div`,3)(1,`div`,4),gs(2),$r(),Xn(3,kn,3,0,`div`,5),jr(4,`div`,6)(5,`button`,7),jt(`click`,function(){let i=cm(e).$implicit,o=Yr(2);return lm(o.mute[i.id]=!o.mute[i.id])}),jr(6,`icon`),gs(7),$r()(),jr(8,`mat-slider`,8)(9,`input`,9),jt(`ngModelChange`,function(i){let o=cm(e).$implicit,s=Yr(2);return s.setVolume(o.id,i),lm(s.onChange())}),$r(),_Y(),$r()(),Xn(10,Cn,3,7,`div`,10),$r()}if(n&2){let e=a.$implicit,t=Yr(2);St(2),Ni$1(` `,e.name,` `),St(),Qn(e.rooms?3:-1),St(),Zn(`name`,e.id),St(3),tL(t.mute[e.id]?`volume_off`:t.volume[e.id]>0?`volume_up`:`volume_mute`),St(2),hl(`ngModel`,t.mute[e.id]?0:t.volume[e.id]),SY(),St(),Qn(e!=null&&e.mod?10:-1)}}function Sn(n,a){if(n&1){let e=LT();jr(0,`div`,10)(1,`i`,11),oL(`modelChange`,function(i){let o=cm(e).$implicit;return Mz(o.state,i)||(o.state=i),lm(i)}),$r()(),jr(2,`settings-toggle`,19),jt(`ngModelChange`,function(i){let o=cm(e).$implicit,s=Yr(2).$implicit;return lm(Yr(2).setRoomMute(s.name,o.name,!i))}),gs(3),$r(),_Y()}if(n&2){let e=a.$implicit,t=Yr(2).$implicit,i=Yr(2);St(),hl(`sys`,i.id)(`mod`,t.module_id||t.mod)(`bind`,t.binding),iL(`model`,e.state),St(),hl(`toggle`,!0)(`ngModel`,e.state!==t.falsy_value),SY(),St(),Ni$1(` `,e.name,` `)}}function Tn(n,a){if(n&1&&(jr(0,`div`,15),KW(1,Sn,4,7,null,null,di),$r()),n&2){let e=Yr().$implicit;St(),qW(e.rooms)}}function wn(n,a){if(n&1){let e=LT();jr(0,`div`,10)(1,`i`,20),oL(`modelChange`,function(i){cm(e);let o=Yr().$index,s=Yr(2);return Mz(s.volume[o],i)||(s.volume[o]=i),lm(i)}),$r(),jr(2,`i`,21),oL(`modelChange`,function(i){cm(e);let o=Yr().$index,s=Yr(2);return Mz(s.mute[o],i)||(s.mute[o]=i),lm(i)}),$r()()}if(n&2){let e=Yr(),t=e.$implicit,i=e.$index,o=Yr(2);St(),hl(`sys`,o.id)(`mod`,t.module_id)(`bind`,t.level_feedback)(`ignore`,o.changing())(`params`,Bz(11,li,t.level_id,o.volume[i])),iL(`model`,o.volume[i]),St(),hl(`sys`,o.id)(`mod`,t.module_id)(`bind`,t.mute_feedback)(`params`,Bz(14,li,t.mute_id,o.mute[i])),iL(`model`,o.mute[i])}}function Mn(n,a){var e,t;if(n&1){let i=LT();jr(0,`div`,3)(1,`div`,4),gs(2),$r(),Xn(3,Tn,3,0,`div`,15),jr(4,`div`,16)(5,`button`,17),jt(`click`,function(){let s=cm(i).$index,u=Yr(2);return lm(u.mute[s]=!u.mute[s])}),jr(6,`icon`),gs(7),$r()(),jr(8,`mat-slider`,18)(9,`input`,9),jt(`ngModelChange`,function(s){let u=cm(i).$index,g=Yr(2);return g.setVolume(u,s),lm(g.onChange())}),$r(),_Y(),$r()(),Xn(10,wn,3,17,`div`,10),$r()}if(n&2){let i=a.$implicit,o=a.$index,s=Yr(2);St(2),Ni$1(` `,i.name,` `),St(),Qn(i.rooms?3:-1),St(),Zn(`name`,i.name),St(),hl(`disabled`,!((e=i.mute_id)!=null&&e.length)),St(2),tL(s.mute[o]?`volume_off`:s.volume[o]>0?`volume_up`:`volume_mute`),St(),hl(`disabled`,!((t=i.level_id)!=null&&t.length))(`min`,i.min_level||0)(`max`,i.max_level||100),St(),hl(`ngModel`,s.mute[o]?0:s.volume[o]),SY(),St(),Qn(i.module_id?10:-1)}}function In(n,a){if(n&1&&(KW(0,yn,11,6,`div`,3,zW),KW(2,Mn,11,10,`div`,3,zW)),n&2){let e=Yr();qW(e.mic_list()),St(2),qW(e.microphones())}}function En(n,a){n&1&&(jr(0,`div`,2)(1,`p`),gs(2),PT(3,`translate`),$r()()),n&2&&(St(2),tL(Gz(3,1,`APP.CONTROL.MICS_EMPTY`)))}var mi=(()=>{let a=class a{constructor(){this._state=g(rn$1),this._tooltip=g(ae),this.mic_list=le(()=>this._state.mic_list()),this.microphones=this._state.microphones,this.volume={},this.mute={},this.close=()=>this._tooltip.close(),this.changing=A(!1)}get id(){return this._state.id}setRoomMute(t,i,o){let s=bF(this.id,`System`);s&&s.execute(`mic_room_selection`,[t,i,o])}setVolume(t,i){this.volume[t]=i,this.mute[t]=!1}onChange(){this.changing.set(!0),clearTimeout(this._change_timeout),this._change_timeout=setTimeout(()=>this.changing.set(!1),1e3)}};a.ɵfac=function(i){return new(i||a)},a.ɵcmp=Be({type:a,selectors:[[`microphone-tooltip`]],decls:6,vars:4,consts:[[1,`bg-base-100`,`my-2`,`flex`,`max-h-[65vh]`,`max-w-md`,`flex-col`,`items-center`,`space-y-5`,`overflow-x-hidden`,`overflow-y-auto`,`rounded-sm`,`p-2`,`shadow-sm`],[1,`bg-base-200`,`sticky`,`top-0`,`z-20`,`w-full`,`rounded-sm`,`px-4`,`py-2`,`text-xl`,`font-medium`],[1,`flex`,`items-center`,`justify-center`,`p-8`],[1,`border-base-300`,`relative`,`min-w-[20rem]`,`rounded-sm`,`border`,`p-2`],[1,`bg-base-100`,`absolute`,`top-0`,`left-2`,`-translate-y-1/2`,`rounded-full`,`rounded-sm`,`px-2`,`py-1`,`text-sm`,`font-medium`],[1,`flex`,`flex-wrap`],[1,`mt-1`,`flex`,`w-64`,`items-center`,`space-x-2`,`p-4`],[`mute`,``,`icon`,``,`matRipple`,``,3,`click`],[1,`flex-1`],[`matSliderThumb`,``,3,`ngModelChange`,`ngModel`],[`hidden`,``],[`binding`,``,3,`modelChange`,`sys`,`mod`,`bind`,`model`],[1,`m-1`,`flex-1`,3,`ngModelChange`,`toggle`,`ngModel`],[`binding`,``,`bind`,`volume`,`exec`,`volume`,3,`modelChange`,`sys`,`mod`,`ignore`,`model`],[`binding`,``,`bind`,`mute`,`exec`,`mute`,3,`modelChange`,`sys`,`mod`,`model`],[1,`mt-2`,`flex`,`flex-wrap`],[1,`mt-1`,`flex`,`min-w-64`,`items-center`,`space-x-2`,`pr-4`],[`mute`,``,`icon`,``,`matRipple`,``,3,`click`,`disabled`],[1,`flex-1`,3,`disabled`,`min`,`max`],[1,`m-1`,`min-w-[40%]`,`flex-1`,3,`ngModelChange`,`toggle`,`ngModel`],[`binding`,``,`exec`,`fader`,3,`modelChange`,`sys`,`mod`,`bind`,`ignore`,`params`,`model`],[`binding`,``,`exec`,`mute`,3,`modelChange`,`sys`,`mod`,`bind`,`params`,`model`]],template:function(i,o){var s,u;i&1&&(jr(0,`div`,0)(1,`h3`,1),gs(2),PT(3,`translate`),$r(),Xn(4,In,4,0)(5,En,4,3,`div`,2),$r()),i&2&&(St(2),Ni$1(` `,Gz(3,2,`APP.CONTROL.ACTION_MICS`),` `),St(2),Qn((s=o.mic_list())!=null&&s.length||(u=o.microphones())!=null&&u.length?4:5))},dependencies:[pe,Oe,De,Te,dIe,dk,oIe,e4,gA,mA,ti,gTe,l$1],encapsulation:2});return a})();function Nn(n,a){if(n&1){let e=LT();jr(0,`button`,3),jt(`click`,function(){let i=cm(e).$implicit;return lm(Yr().pressed.emit(i))}),gs(1),$r()}if(n&2){let e=a.$implicit;St(),Ni$1(` `,e,` `)}}function Rn(n,a){if(n&1){let e=LT();jr(0,`button`,4),jt(`click`,function(){cm(e);return lm(Yr().pressed.emit(`\b`))}),gs(1),PT(2,`translate`),$r()}if(n&2){let e=Yr();dt(`absolute`,!e.inline())(`bottom-0`,!e.inline())(`-right-4`,!e.inline())(`translate-x-full`,!e.inline()),St(),Ni$1(` `,Gz(2,9,`APP.CONTROL.BACKSPACE`),` `)}}var hi=(()=>{let a=class a{constructor(){this.backspace=yo(!0),this.inline=yo(!1),this.pressed=Zme(),this.digits=[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`*`,`0`,`#`]}};a.ɵfac=function(i){return new(i||a)},a.ɵcmp=Be({type:a,selectors:[[`dialpad`]],inputs:{backspace:[1,`backspace`],inline:[1,`inline`]},outputs:{pressed:`pressed`},decls:4,vars:1,consts:[[`dialpad`,``,1,`text-base-content!`,`relative`,`flex`,`w-60`,`flex-wrap`,`items-center`,`justify-center`],[`digit`,``,`matRipple`,``,1,`bg-base-100`,`relative`,`m-2`,`flex`,`h-16`,`w-16`,`items-center`,`justify-center`,`rounded-lg`,`active:top-1`],[`digit`,``,`matRipple`,``,1,`bg-base-100`,`m-2`,`flex`,`h-16`,`w-60`,`flex-1`,`items-center`,`justify-center`,`rounded-lg`,`active:-bottom-1`,3,`absolute`,`bottom-0`,`-right-4`,`translate-x-full`],[`digit`,``,`matRipple`,``,1,`bg-base-100`,`relative`,`m-2`,`flex`,`h-16`,`w-16`,`items-center`,`justify-center`,`rounded-lg`,`active:top-1`,3,`click`],[`digit`,``,`matRipple`,``,1,`bg-base-100`,`m-2`,`flex`,`h-16`,`w-60`,`flex-1`,`items-center`,`justify-center`,`rounded-lg`,`active:-bottom-1`,3,`click`]],template:function(i,o){i&1&&(jr(0,`div`,0),KW(1,Nn,2,1,`button`,1,zW),Xn(3,Rn,3,11,`button`,2),$r()),i&2&&(St(),qW(o.digits),St(2),Qn(o.backspace()?3:-1))},dependencies:[gA,mA,l$1],styles:[`[digit][_ngcontent-%COMP%]{box-shadow:0 4px 0 0 var(--%NS%base-300);border:2px solid var(--%NS%base-300);transition:top .2s,bottom .2s,box-shadow .2s}[digit][_ngcontent-%COMP%]:active{box-shadow:none}
/*# sourceMappingURL=dialpad.component.css.map */`]});return a})();function Vn(n,a){if(n&1){let e=LT();jr(0,`button`,7),jt(`click`,function(){cm(e);return lm(Yr().clear())}),jr(1,`icon`),gs(2,`close`),$r()()}}function An(n,a){if(n&1){let e=LT();jr(0,`button`,8),jt(`click`,function(){cm(e);return lm(Yr().dialPhone())}),gs(1),PT(2,`translate`),$r()}n&2&&(St(),Ni$1(` `,Gz(2,1,`APP.CONTROL.PHONE_DIAL`),` `))}function Pn(n,a){if(n&1){let e=LT();jr(0,`button`,9),jt(`click`,function(){cm(e);return lm(Yr().hangup())}),gs(1),PT(2,`translate`),$r()}n&2&&(St(),Ni$1(` `,Gz(2,1,`APP.CONTROL.PHONE_HANGUP`),` `))}var _i=(()=>{let a=class a{constructor(){this._state=g(rn$1),this.phone=A(``),this.system=this._state.system,this.dialPhone=()=>this.action(`qsc_dial_makecall`),this.hangup=()=>this.action(`qsc_dial_hangup`),this.clear=()=>this.action(`qsc_dial_pad_clear`)}get sys_id(){return this._state.id}async handleInput(t){await bF(this._state.id,`System`).execute(`qsc_dial_pad`,[t])}async action(t){await bF(this._state.id,`System`).execute(t)}};a.ɵfac=function(i){return new(i||a)},a.ɵcmp=Be({type:a,selectors:[[`phone-dialling-tooltip`]],decls:8,vars:8,consts:[[1,`bg-base-100`,`my-2`,`flex`,`flex-col`,`items-center`,`space-y-2`,`rounded-sm`,`p-4`,`shadow-sm`],[`appearance`,`outline`,1,`h-13`,`w-full`],[`matInput`,``,`readonly`,``,3,`ngModel`,`placeholder`],[`icon`,``,`matRipple`,``,`matSuffix`,``],[3,`pressed`,`inline`],[`btn`,``,`matRipple`,``,1,`w-full`],[`btn`,``,`matRipple`,``,1,`inverse`,`w-full`],[`icon`,``,`matRipple`,``,`matSuffix`,``,3,`click`],[`btn`,``,`matRipple`,``,1,`w-full`,3,`click`],[`btn`,``,`matRipple`,``,1,`inverse`,`w-full`,3,`click`]],template:function(i,o){var s,u,g,E,Z,ie;i&1&&(jr(0,`div`,0)(1,`mat-form-field`,1),Ai$1(2,`input`,2),PT(3,`translate`),_Y(),Xn(4,Vn,3,0,`button`,3),$r(),jr(5,`dialpad`,4),jt(`pressed`,function(Fe){return o.handleInput(Fe)}),$r(),Xn(6,An,3,3,`button`,5),Xn(7,Pn,3,3,`button`,6),$r()),i&2&&(St(2),hl(`ngModel`,(s=o.system())==null?void 0:s.phone)(`placeholder`,Gz(3,6,`FORM.PHONE`)),SY(),St(2),Qn((u=o.system())!=null&&u.phone?4:-1),St(),hl(`inline`,!0),St(),Qn((g=o.system())!=null&&g.offhook||(E=o.system())!=null&&E.ringing?-1:6),St(),Qn((Z=o.system())!=null&&Z.offhook||(ie=o.system())!=null&&ie.ringing?7:-1))},dependencies:[Ee,Mt,rs,Tm,Dm,gA,mA,gTe,hi,dIe,dk,oIe,e4,l$1],encapsulation:2});return a})();var pi=(()=>{let a=class a{constructor(){this._state=g(rn$1),this._tooltip=g(ae),this.shutdown=(t=!1)=>this._state.powerOff(t),this.close=()=>this._tooltip.close(),this.joined=this._state.joined}};a.ɵfac=function(i){return new(i||a)},a.ɵcmp=Be({type:a,selectors:[[`power-tooltip`]],decls:10,vars:11,consts:[[1,`bg-base-100`,`my-2`,`flex`,`flex-col`,`items-center`,`space-y-2`,`rounded-sm`,`p-4`,`shadow-sm`],[1,`mb-2`,`text-center`,`font-medium`,3,`innerHTML`],[`btn`,``,`matRipple`,``,1,`w-64`,3,`click`],[`btn`,``,`matRipple`,``,1,`inverse`,`w-64`,3,`click`]],template:function(i,o){i&1&&(jr(0,`div`,0),Ai$1(1,`h3`,1),PT(2,`translate`),PT(3,`sanitize`),jr(4,`button`,2),jt(`click`,function(){return o.shutdown(!0)}),gs(5),PT(6,`translate`),$r(),jr(7,`button`,3),jt(`click`,function(){return o.close()}),gs(8),PT(9,`translate`),$r()()),i&2&&(St(),hl(`innerHTML`,Gz(3,5,Gz(2,3,`APP.CONTROL.POWER_MSG`)),B$),St(4),Ni$1(` `,Gz(6,7,`APP.CONTROL.POWER_CONFIRM`),` `),St(3),Ni$1(` `,Gz(9,9,`APP.CONTROL.POWER_CANCEL`),` `))},dependencies:[gA,mA,l$1,W],encapsulation:2});return a})();function Dn(n,a){if(n&1){let e=LT();jr(0,`button`,6),jt(`click`,function(){let i=cm(e).$implicit,o=Yr().$implicit;return lm(Yr(2).performAction(o.name,i.name))}),jr(1,`icon`),gs(2),$r()()}if(n&2){let e=a.$implicit;hl(`matTooltip`,e.name),St(2),tL(e.icon)}}function On(n,a){if(n&1&&(jr(0,`div`,3)(1,`div`,4),gs(2),$r(),KW(3,Dn,3,2,`button`,5,zW),$r()),n&2){let e=a.$implicit;St(2),Ni$1(` `,e.name,` `),St(),qW(e.controls)}}function Ln(n,a){if(n&1&&KW(0,On,5,1,`div`,3,zW),n&2)qW(Yr().list())}function Fn(n,a){n&1&&(jr(0,`div`,2)(1,`p`),gs(2),PT(3,`translate`),$r()()),n&2&&(St(2),tL(Gz(3,1,`APP.CONTROL.ACCESSORIES_EMPTY`)))}var ui=(()=>{let a=class a{constructor(){this._state=g(rn$1),this._tooltip=g(ae),this.list=this._state.room_accessories,this.close=()=>this._tooltip.close()}get id(){return this._state.id}performAction(t,i){let o=bF(this.id,`System`);o&&o.execute(`accessory_exec`,[t,i])}};a.ɵfac=function(i){return new(i||a)},a.ɵcmp=Be({type:a,selectors:[[`room-accessory-tooltip`]],decls:6,vars:4,consts:[[1,`bg-base-100`,`my-2`,`flex`,`flex-col`,`items-center`,`space-y-2`,`rounded-sm`,`p-2`,`shadow-sm`],[1,`bg-base-200`,`w-full`,`rounded-sm`,`px-4`,`py-2`,`text-xl`,`font-medium`],[1,`flex`,`items-center`,`justify-center`,`p-8`],[1,`border-base-300`,`flex`,`w-full`,`min-w-[20rem]`,`items-center`,`space-x-2`,`rounded-sm`,`border`,`p-2`],[1,`flex-1`,`pr-8`,`pl-2`,`font-medium`],[`state`,``,`icon`,``,`matRipple`,``,1,`border-primary`,`text-primary`,`rounded-sm`,`border`,`border-solid`,3,`matTooltip`],[`state`,``,`icon`,``,`matRipple`,``,1,`border-primary`,`text-primary`,`rounded-sm`,`border`,`border-solid`,3,`click`,`matTooltip`]],template:function(i,o){var s;i&1&&(jr(0,`div`,0)(1,`h3`,1),gs(2),PT(3,`translate`),$r(),Xn(4,Ln,2,0)(5,Fn,4,3,`div`,2),$r()),i&2&&(St(2),Ni$1(` `,Gz(3,2,`APP.CONTROL.ACCESSORIES`),` `),St(2),Qn((s=o.list())!=null&&s.length?4:5))},dependencies:[gA,mA,gTe,Yt$1,mt,l$1],encapsulation:2});return a})();var bi=(()=>{let a=class a extends Fa{constructor(){super(...arguments),this._control=g(rn$1),this.connected=this._bindTo(`connected`),this._calls=this._bindTo(`calls`),this.call=le(()=>{let t=this._calls();for(let i in t)if(t[i].Status)return t[i];return null}),this.mic_mute=this._bindTo(`mic_mute`),this.presentation_mode=this._bindTo(`presentation_mode`),this.video_layout=this._bindTo(`video_layout`),this.show_camera_pip=this._bindTo(`selfview`),this._speaker_track=this._bindTo(`speaker_track`),this.speaker_track=le(()=>(this._speaker_track()||{})[`Status/Cameras/SpeakerTrack/Availability`])}async showCameraPIP(t){let i=this._control.id;if(i)return bF(i,`VidConf`).execute(`show_camera_pip`,[t])}async muteMicrophone(t){let i=this._control.id;if(i)return bF(i,`VidConf`).execute(`mic_mute`,[t])}async setVideoLayout(t){let i=this._control.id;if(i)return bF(i,`VidConf`).execute(`video_layout`,[t])}async setPresentationMode(t){let i=this._control.id;if(i)return bF(i,`VidConf`).execute(`presentation_mode`,[t])}async hangup(){let t=this._control.id;if(t)return bF(t,`VidConf`).execute(`hangup`,[])}async sendDTMF(t){let i=this._control.id;if(i)return bF(i,`VidConf`).execute(`dtmf_send`,[t])}async toggleCallOnHold(){let t=this._control.id;if(!t)return;let i=this.call();if(i)return bF(t,`VidConf`).execute(i.Status===`OnHold`?`call_resume`:`call_place_on_hold`,[])}_bindTo(t,i=`VidConf`){let o=A(null);return Gt(s=>{let u=this._control.system_id();if(!u){o.set(null);return}let g=bF(u,i).variable(t),E=g.bind(),Z=g.listen(),ie=()=>o.set(Z()??null);ie();let de=Z.subscribe(()=>ie());s(()=>{de(),E()})}),o.asReadonly()}};a.ɵfac=(()=>{let t;return function(o){return(t||(t=En$1(a)))(o||a)}})(),a.ɵprov=O({token:a,factory:a.ɵfac,providedIn:`root`});return a})();var fi=(n,a)=>a.id;function Bn(n,a){if(n&1){let e=LT();jr(0,`div`,7)(1,`button`,8),jt(`click`,function(){cm(e);let i=Yr().$implicit;return lm(i.action?i.action():``)}),jr(2,`icon`),gs(3),$r()()()}if(n&2){let e=Yr().$implicit,t=Yr();cg(`z-index`,(e.id===`join`||e.id===`power`)&&!t.join_status()[0]&&t.join_status()[1]?`99`:``),hl(`content`,t.cmp[e.id]),St(),dt(`bg-success!`,e.enabled),Zn(`type`,e.id),St(2),tL(e.icon)}}function Un(n,a){if(n&1&&Xn(0,Bn,4,7,`div`,6),n&2){let e=a.$implicit;Qn(e.show?0:-1)}}function zn(n,a){if(n&1){let e=LT();jr(0,`div`,9),jt(`click`,function(i){cm(e);let o=Yr().$implicit;return i.stopPropagation(),lm(o.action?o.action():``)}),jr(1,`button`,10)(2,`div`,11)(3,`icon`,12),gs(4),$r(),jr(5,`span`),gs(6),$r()()()()}if(n&2){let e=Yr().$implicit;hl(`content`,Yr().cmp[e.id]),St(),Zn(`type`,e.id),St(3),tL(e.icon),St(2),tL(e.name)}}function Wn(n,a){if(n&1&&Xn(0,zn,7,4,`div`,7),n&2){let e=a.$implicit;Qn(e.show?0:-1)}}var jn=3e3;var se=(function(n){return n[n.PHONE=0]=`PHONE`,n[n.LIGHT_SCENES=1]=`LIGHT_SCENES`,n[n.LIGHTS=2]=`LIGHTS`,n[n.LIGHT_LEVELS=3]=`LIGHT_LEVELS`,n[n.ACCESSORIES=4]=`ACCESSORIES`,n[n.MICS=5]=`MICS`,n[n.CAMERA=6]=`CAMERA`,n[n.HELP=7]=`HELP`,n[n.JOIN=8]=`JOIN`,n[n.POWER=9]=`POWER`,n})(se||{});var Qr=(()=>{let a=class a extends Fa{constructor(){super(...arguments),this._settings=g(rc),this._state=g(rn$1),this._call=g(bi),this._org=g(ny),this.system=this._state.system,this.join_status=this._state.join_status,this._mic_list=this._state.mic_list,this._camera_list=this._state.camera_list,this._lights_list=this._state.lights,this._room_accessories=this._state.room_accessories,this._microphones=this._state.microphones,this._join_modes=this._state.join_modes,this._joined=this._state.joined,this._speaker_track=this._call.speaker_track,this._lighting_scenes=this._state.lighting_scenes,this._help_items=this._state.help_items,this._hide_join_button=this._state.hide_join_button,this._lighting_levels=this._state.lighting_levels,this.cmp={phone:_i,lighting:ci,lighting_levels:ri,lighting_scenes:si,power:pi,blinds:ui,camera:oi,mics:mi,join:ai},this._base_actions=[{id:`phone`,name:wo(`APP.CONTROL.ACTION_PHONE`),icon:`call`,show:!0,enabled:!1},{id:`lighting_scenes`,name:wo(`APP.CONTROL.ACTION_LIGHT_SCENES`),icon:`emoji_objects`,show:!0,enabled:!1},{id:`lighting`,name:wo(`APP.CONTROL.ACTION_LIGHTING`),icon:`brightness_high`,show:!0,enabled:!1},{id:`lighting_levels`,name:wo(`APP.CONTROL.ACTION_LIGHTING_LEVELS`),icon:`light`,show:!0,enabled:!1},{id:`blinds`,name:wo(`APP.CONTROL.ACTION_ACCESSORIES`),icon:`unfold_more`,show:!0,enabled:!1},{id:`mics`,name:wo(`APP.CONTROL.ACTION_MICS`),icon:`mic`,show:!0,enabled:!1},{id:`camera`,name:wo(`APP.CONTROL.ACTION_CAMERAS`),icon:`photo_camera`,show:!0,enabled:!1},{id:`help`,name:wo(`APP.CONTROL.ACTION_HELP`),icon:`help`,show:!0,enabled:!1,action:()=>this.viewHelp()},{id:`join`,name:wo(`APP.CONTROL.ACTION_JOIN_ROOMS`),icon:`link`,show:!0,enabled:!1},{id:`power`,name:wo(`APP.CONTROL.ACTION_POWER`),icon:`power_settings_new`,show:!0,enabled:!1}],this.action_list=le(()=>{var xt;let t=this.system(),i=this._mic_list(),o=this._camera_list(),s=this._lights_list(),u=this._room_accessories(),g=this._microphones(),E=this._join_modes(),Z=this._joined(),ie=this._speaker_track(),de=this._lighting_scenes(),Fe=this._help_items(),gi=this._hide_join_button(),xi=this._lighting_levels(),ne=this._base_actions.map(vi=>l({},vi));return ne[se.PHONE].show=!!(t!=null&&t.dial_bindings),ne[se.PHONE].enabled=(t==null?void 0:t.offhook)||(t==null?void 0:t.ringing),ne[se.LIGHTS].show=(s==null?void 0:s.length)>0,ne[se.ACCESSORIES].show=(u==null?void 0:u.length)>0,ne[se.MICS].show=(i==null?void 0:i.length)>0||(g==null?void 0:g.length)>0,ne[se.JOIN].show=!gi&&Object.keys(E||{}).length>1,ne[se.JOIN].enabled=((xt=Z==null?void 0:Z.room_ids)==null?void 0:xt.length)>1,ne[se.CAMERA].show=(o==null?void 0:o.length)>0&&!ie,ne[se.HELP].show=(Fe==null?void 0:Fe.length)>0,ne[se.LIGHT_LEVELS].show=xi!=null,ne[se.LIGHT_SCENES].show=de!=null,ne}),this.viewHelp=()=>this._state.viewHelp(),this.powerOff=()=>this._state.powerOff(),this.logo=le(()=>(this._org.active_building(),(this._settings.theme===`dark`?this._settings.get(`app.logo_dark`):this._settings.get(`app.logo_light`))||{})),this._can_change_room=this._state.canChangeRoom()}startHold(){this._can_change_room&&this.timeout(`change_room`,()=>this._state.changeRoom(),jn)}cancelHold(){this.clearTimeout(`change_room`)}};a.ɵfac=(()=>{let t;return function(o){return(t||(t=En$1(a)))(o||a)}})(),a.ɵcmp=Be({type:a,selectors:[[`topbar-header`]],features:[$e],decls:14,vars:3,consts:[[`menu`,`matMenu`],[1,`flex-1`,`px-4`],[`auth`,``,`alt`,`Logo`,`draggable`,`false`,1,`h-12`,`select-none`,3,`pointerdown`,`pointerup`,`pointerleave`,`pointercancel`,`contextmenu`,`source`],[1,`text-base-content`,`p-4`,`text-lg`],[1,`hidden`,`flex-1`,`items-center`,`justify-end`,`space-x-2`,`p-4`,`sm:flex`],[`icon`,``,`matRipple`,``,1,`text-base-content`,`mr-2`,`sm:hidden`,3,`matMenuTriggerFor`],[`customTooltip`,``,3,`content`,`z-index`],[`customTooltip`,``,3,`content`],[`icon`,``,`matRipple`,``,1,`bg-base-200`,`text-base-content`,3,`click`],[`customTooltip`,``,3,`click`,`content`],[`mat-menu-item`,``],[1,`flex`,`items-center`,`text-base`],[1,`mr-2`]],template:function(i,o){var s,u;if(i&1&&(jr(0,`div`,1)(1,`img`,2),jt(`pointerdown`,function(){return o.startHold()})(`pointerup`,function(){return o.cancelHold()})(`pointerleave`,function(){return o.cancelHold()})(`pointercancel`,function(){return o.cancelHold()})(`contextmenu`,function(E){return E.preventDefault()}),$r()(),jr(2,`div`,3),gs(3),$r(),jr(4,`div`,4),KW(5,Un,1,1,null,null,fi),$r(),jr(7,`button`,5)(8,`icon`),gs(9,`more_vert`),$r()(),jr(10,`mat-menu`,null,0),KW(12,Wn,1,1,null,null,fi),$r()),i&2){let g=cz(11);St(),hl(`source`,((s=o.logo())==null?void 0:s.src)||o.logo()),St(2),Ni$1(` `,(u=o.system())==null?void 0:u.name,` `),St(2),qW(o.action_list()),St(2),hl(`matMenuTriggerFor`,g),St(5),qW(o.action_list())}},dependencies:[ou,ji$1,Fn$1,ru,Ce,gTe,ho],styles:[`[_nghost-%COMP%]{display:flex;align-items:center}img[_ngcontent-%COMP%]{max-height:calc(100% - 1rem)}button[_ngcontent-%COMP%]{border-radius:.25rem;background-color:#ffffff26}
/*# sourceMappingURL=topbar-header.component.css.map */`]});return a})();export{Te as a,hi as c,te as d,Qr as i,ni as l,Go as n,bi as o,Oe as r,ee as s,De as t,pe as u};
//# debugId=d1f89a04-f719-552b-af0e-ce212e5faf37
//# sourceMappingURL=chunk-DO1_iN9w.js.map