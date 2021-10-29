(self.webpackChunkplaceos=self.webpackChunkplaceos||[]).push([["apps_workplace_src_app_new-schedule_schedule_module_ts"],{9786:(t,e,s)=>{"use strict";s.r(e),s.d(e,{AppScheduleModule:()=>wt});var n=s(1511),i=s(6073),o=s(6898),a=s(2522),l=s(6899),r=s(2619),c=s(1522),d=s(8254),u=s(709),h=s(2526),p=s(5959),g=s(1906),f=s(878),_=s(5842),m=s(3835),Z=s(611),v=s(4621);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function b(t,e){}const y=new r.OlP("MatBottomSheetData");class x{constructor(){this.data=null,this.hasBackdrop=!0,this.disableClose=!1,this.ariaLabel=null,this.closeOnNavigation=!0,this.autoFocus=!1,this.restoreFocus=!0}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const A={bottomSheetState:(0,u.X$)("state",[(0,u.SB)("void, hidden",(0,u.oB)({transform:"translateY(100%)"})),(0,u.SB)("visible",(0,u.oB)({transform:"translateY(0%)"})),(0,u.eR)("visible => void, visible => hidden",(0,u.jt)(`${c.mZ.COMPLEX} ${c.yN.ACCELERATION_CURVE}`)),(0,u.eR)("void => visible",(0,u.jt)(`${c.mZ.EXITING} ${c.yN.DECELERATION_CURVE}`))])};let T=(()=>{class t extends l.en{constructor(t,e,s,n,i,o){super(),this._elementRef=t,this._changeDetectorRef=e,this._focusTrapFactory=s,this.bottomSheetConfig=o,this._animationState="void",this._animationStateChanged=new r.vpe,this._elementFocusedBeforeOpened=null,this.attachDomPortal=t=>(this._validatePortalAttached(),this._setPanelClass(),this._savePreviouslyFocusedElement(),this._portalOutlet.attachDomPortal(t)),this._document=i,this._breakpointSubscription=n.observe([d.u3.Medium,d.u3.Large,d.u3.XLarge]).subscribe(()=>{this._toggleClass("mat-bottom-sheet-container-medium",n.isMatched(d.u3.Medium)),this._toggleClass("mat-bottom-sheet-container-large",n.isMatched(d.u3.Large)),this._toggleClass("mat-bottom-sheet-container-xlarge",n.isMatched(d.u3.XLarge))})}attachComponentPortal(t){return this._validatePortalAttached(),this._setPanelClass(),this._savePreviouslyFocusedElement(),this._portalOutlet.attachComponentPortal(t)}attachTemplatePortal(t){return this._validatePortalAttached(),this._setPanelClass(),this._savePreviouslyFocusedElement(),this._portalOutlet.attachTemplatePortal(t)}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.detectChanges())}exit(){this._destroyed||(this._animationState="hidden",this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._breakpointSubscription.unsubscribe(),this._destroyed=!0}_onAnimationDone(t){"hidden"===t.toState?this._restoreFocus():"visible"===t.toState&&this._trapFocus(),this._animationStateChanged.emit(t)}_onAnimationStart(t){this._animationStateChanged.emit(t)}_toggleClass(t,e){const s=this._elementRef.nativeElement.classList;e?s.add(t):s.remove(t)}_validatePortalAttached(){this._portalOutlet.hasAttached()}_setPanelClass(){const t=this._elementRef.nativeElement,e=this.bottomSheetConfig.panelClass;Array.isArray(e)?e.forEach(e=>t.classList.add(e)):e&&t.classList.add(e)}_trapFocus(){const t=this._elementRef.nativeElement;if(this._focusTrap||(this._focusTrap=this._focusTrapFactory.create(t)),this.bottomSheetConfig.autoFocus)this._focusTrap.focusInitialElementWhenReady();else{const e=this._getActiveElement();e===t||t.contains(e)||t.focus()}}_restoreFocus(){const t=this._elementFocusedBeforeOpened;if(this.bottomSheetConfig.restoreFocus&&t&&"function"==typeof t.focus){const e=this._getActiveElement(),s=this._elementRef.nativeElement;e&&e!==this._document.body&&e!==s&&!s.contains(e)||t.focus()}this._focusTrap&&this._focusTrap.destroy()}_savePreviouslyFocusedElement(){this._elementFocusedBeforeOpened=this._getActiveElement(),this._elementRef.nativeElement.focus&&Promise.resolve().then(()=>this._elementRef.nativeElement.focus())}_getActiveElement(){var t;const e=this._document.activeElement;return(null===(t=null==e?void 0:e.shadowRoot)||void 0===t?void 0:t.activeElement)||e}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(r.SBq),r.Y36(r.sBO),r.Y36(v.qV),r.Y36(d.Yg),r.Y36(n.K0,8),r.Y36(x))},t.\u0275cmp=r.Xpm({type:t,selectors:[["mat-bottom-sheet-container"]],viewQuery:function(t,e){if(1&t&&r.Gf(l.Pl,7),2&t){let t;r.iGM(t=r.CRH())&&(e._portalOutlet=t.first)}},hostAttrs:["tabindex","-1","role","dialog","aria-modal","true",1,"mat-bottom-sheet-container"],hostVars:2,hostBindings:function(t,e){1&t&&r.WFA("@state.start",function(t){return e._onAnimationStart(t)})("@state.done",function(t){return e._onAnimationDone(t)}),2&t&&(r.uIk("aria-label",null==e.bottomSheetConfig?null:e.bottomSheetConfig.ariaLabel),r.d8E("@state",e._animationState))},features:[r.qOj],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,e){1&t&&r.YNc(0,b,0,0,"ng-template",0)},directives:[l.Pl],styles:[".mat-bottom-sheet-container{padding:8px 16px;min-width:100vw;box-sizing:border-box;display:block;outline:0;max-height:80vh;overflow:auto}.cdk-high-contrast-active .mat-bottom-sheet-container{outline:1px solid}.mat-bottom-sheet-container-xlarge,.mat-bottom-sheet-container-large,.mat-bottom-sheet-container-medium{border-top-left-radius:4px;border-top-right-radius:4px}.mat-bottom-sheet-container-medium{min-width:384px;max-width:calc(100vw - 128px)}.mat-bottom-sheet-container-large{min-width:512px;max-width:calc(100vw - 256px)}.mat-bottom-sheet-container-xlarge{min-width:576px;max-width:calc(100vw - 384px)}\n"],encapsulation:2,data:{animation:[A.bottomSheetState]}}),t})(),w=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[a.U8,c.BQ,l.eL],c.BQ]}),t})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class k{constructor(t,e){this._overlayRef=e,this._afterDismissed=new p.xQ,this._afterOpened=new p.xQ,this.containerInstance=t,this.disableClose=t.bottomSheetConfig.disableClose,t._animationStateChanged.pipe((0,m.h)(t=>"done"===t.phaseName&&"visible"===t.toState),(0,Z.q)(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe((0,m.h)(t=>"done"===t.phaseName&&"hidden"===t.toState),(0,Z.q)(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),e.dispose()}),e.detachments().pipe((0,Z.q)(1)).subscribe(()=>{this._afterDismissed.next(this._result),this._afterDismissed.complete()}),(0,g.T)(e.backdropClick(),e.keydownEvents().pipe((0,m.h)(t=>t.keyCode===_.hY))).subscribe(t=>{this.disableClose||"keydown"===t.type&&(0,_.Vb)(t)||(t.preventDefault(),this.dismiss())})}dismiss(t){this._afterDismissed.closed||(this.containerInstance._animationStateChanged.pipe((0,m.h)(t=>"start"===t.phaseName),(0,Z.q)(1)).subscribe(t=>{this._closeFallbackTimeout=setTimeout(()=>{this._overlayRef.dispose()},t.totalTime+100),this._overlayRef.detachBackdrop()}),this._result=t,this.containerInstance.exit())}afterDismissed(){return this._afterDismissed}afterOpened(){return this._afterOpened}backdropClick(){return this._overlayRef.backdropClick()}keydownEvents(){return this._overlayRef.keydownEvents()}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const q=new r.OlP("mat-bottom-sheet-default-options");let C=(()=>{class t{constructor(t,e,s,n){this._overlay=t,this._injector=e,this._parentBottomSheet=s,this._defaultOptions=n,this._bottomSheetRefAtThisLevel=null}get _openedBottomSheetRef(){const t=this._parentBottomSheet;return t?t._openedBottomSheetRef:this._bottomSheetRefAtThisLevel}set _openedBottomSheetRef(t){this._parentBottomSheet?this._parentBottomSheet._openedBottomSheetRef=t:this._bottomSheetRefAtThisLevel=t}open(t,e){const s=function(t,e){return Object.assign(Object.assign({},t),e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(this._defaultOptions||new x,e),n=this._createOverlay(s),i=this._attachContainer(n,s),o=new k(i,n);if(t instanceof r.Rgc)i.attachTemplatePortal(new l.UE(t,null,{$implicit:s.data,bottomSheetRef:o}));else{const e=new l.C5(t,void 0,this._createInjector(s,o)),n=i.attachComponentPortal(e);o.instance=n.instance}return o.afterDismissed().subscribe(()=>{this._openedBottomSheetRef==o&&(this._openedBottomSheetRef=null)}),this._openedBottomSheetRef?(this._openedBottomSheetRef.afterDismissed().subscribe(()=>o.containerInstance.enter()),this._openedBottomSheetRef.dismiss()):o.containerInstance.enter(),this._openedBottomSheetRef=o,o}dismiss(t){this._openedBottomSheetRef&&this._openedBottomSheetRef.dismiss(t)}ngOnDestroy(){this._bottomSheetRefAtThisLevel&&this._bottomSheetRefAtThisLevel.dismiss()}_attachContainer(t,e){const s=r.zs3.create({parent:e&&e.viewContainerRef&&e.viewContainerRef.injector||this._injector,providers:[{provide:x,useValue:e}]}),n=new l.C5(T,e.viewContainerRef,s);return t.attach(n).instance}_createOverlay(t){const e=new a.X_({direction:t.direction,hasBackdrop:t.hasBackdrop,disposeOnNavigation:t.closeOnNavigation,maxWidth:"100%",scrollStrategy:t.scrollStrategy||this._overlay.scrollStrategies.block(),positionStrategy:this._overlay.position().global().centerHorizontally().bottom("0")});return t.backdropClass&&(e.backdropClass=t.backdropClass),this._overlay.create(e)}_createInjector(t,e){const s=t&&t.viewContainerRef&&t.viewContainerRef.injector,n=[{provide:k,useValue:e},{provide:y,useValue:t.data}];return!t.direction||s&&s.get(h.Is,null)||n.push({provide:h.Is,useValue:{value:t.direction,change:(0,f.of)()}}),r.zs3.create({parent:s||this._injector,providers:n})}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(a.aV),r.LFG(r.zs3),r.LFG(t,12),r.LFG(q,8))},t.\u0275prov=(0,r.Yz7)({factory:function(){return new t((0,r.LFG)(a.aV),(0,r.LFG)(r.gxx),(0,r.LFG)(t,12),(0,r.LFG)(q,8))},token:t,providedIn:w}),t})();var O=s(1781),U=s(205),S=s(3975),L=s(5090),E=s(1948),R=s(6280),F=s(9310);function J(t,e){(0,R.Z)(2,arguments);var s=(0,L.Z)(t),n=(0,L.Z)(e);return s.getFullYear()===n.getFullYear()&&s.getMonth()===n.getMonth()}var N=s(3848),D=s(5980),B=s(1548);function I(t,e){if(1&t&&(r.TgZ(0,"div",9),r._uU(1),r.ALo(2,"date"),r.qZA()),2&t){const t=e.$implicit;r.xp6(1),r.hij(" ",r.xi3(2,1,t.id,"EE")," ")}}function M(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"button",10),r.NdJ("click",function(){const e=r.CHM(t).$implicit;return r.oxw().setValue(e.id)}),r._uU(1),r.ALo(2,"date"),r.qZA()}if(2&t){const t=e.$implicit,s=r.oxw();r.ekj("text-opacity-30",!t.is_month)("text-primary",t.id===s.active_date)("text-black",t.id!==s.active_date)("bg-gray-200",t.id===s.active_date)("font-normal",t.id!==s.active_date),r.xp6(1),r.hij(" ",r.xi3(2,11,t.id,"d")," ")}}let Y=(()=>{class t{constructor(){this.active_date=(0,U.Z)(Date.now()).valueOf(),this.offset=0,this.date_list=[],this.registerOnChange=t=>this._onChange=t,this.registerOnTouched=t=>this._onTouch=t}ngOnInit(){this.generateDates()}setValue(t){this.active_date=(0,U.Z)(t).valueOf(),this.offset=0,this._onChange&&this._onChange(t)}writeValue(t){this.active_date=(0,U.Z)(t).valueOf(),this.offset=0,this.generateDates()}changeMonth(t){this.offset+=t,this.generateDates()}generateDates(){const t=(0,S.Z)(this.active_date,this.offset);let e=function(t,e){(0,R.Z)(1,arguments);var s=e||{},n=s.locale,i=n&&n.options&&n.options.weekStartsOn,o=null==i?0:(0,E.Z)(i),a=null==s.weekStartsOn?o:(0,E.Z)(s.weekStartsOn);if(!(a>=0&&a<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var l=(0,L.Z)(t),r=l.getDay(),c=(r<a?7:0)+r-a;return l.setDate(l.getDate()-c),l.setHours(0,0,0,0),l}(function(t){(0,R.Z)(1,arguments);var e=(0,L.Z)(t);return e.setDate(1),e.setHours(0,0,0,0),e}(t));const s=(0,U.Z)(Date.now()),n=[];for(;n.length<42;)n.push({id:e.valueOf(),is_past:(0,F.Z)(e,s),is_month:J(e,t)}),e=(0,N.Z)(e,1);this.date_list=n}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["schedule-calendar"]],features:[r._Bn([{provide:i.JU,useExisting:(0,r.Gpc)(()=>t),multi:!0}])],decls:17,vars:10,consts:[[1,"p-2"],[1,"flex","items-center","justify-between"],[1,"px-2","font-medium"],[1,""],["mat-icon-button","",3,"click"],[1,"flex","items-center","text-sm"],["class","flex-1 opacity-60 text-center",4,"ngFor","ngForOf"],[1,"flex","items-center","flex-wrap"],["mat-icon-button","","class","min-w-[14%] flex-1",3,"text-opacity-30","text-primary","text-black","bg-gray-200","font-normal","click",4,"ngFor","ngForOf"],[1,"flex-1","opacity-60","text-center"],["mat-icon-button","",1,"min-w-[14%]","flex-1",3,"click"]],template:function(t,e){1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"div",2),r._uU(3),r.ALo(4,"date"),r.qZA(),r.TgZ(5,"div",3),r.TgZ(6,"button",4),r.NdJ("click",function(){return e.changeMonth(-1)}),r.TgZ(7,"app-icon"),r._uU(8,"chevron_left"),r.qZA(),r.qZA(),r.TgZ(9,"button",4),r.NdJ("click",function(){return e.changeMonth(1)}),r.TgZ(10,"app-icon"),r._uU(11,"chevron_right"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(12,"div",5),r.YNc(13,I,3,4,"div",6),r.ALo(14,"slice"),r.qZA(),r.TgZ(15,"div",7),r.YNc(16,M,3,14,"button",8),r.qZA(),r.qZA()),2&t&&(r.xp6(3),r.hij(" ",r.xi3(4,3,(null==e.date_list[6]?null:e.date_list[6].id)||e.active_date,"LLLL")," "),r.xp6(10),r.Q6J("ngForOf",r.Dn7(14,6,e.date_list,0,7)),r.xp6(3),r.Q6J("ngForOf",e.date_list))},directives:[D.lW,B.o,n.sg],pipes:[n.uU,n.OU],styles:[""]}),t})();var j=s(4762),P=s(1663),Q=s(3730),G=s(4266),X=s(4914),V=s(8125),$=s(8512),H=s(3080),z=s(4689),W=s(9996),K=s(4019);let tt=(()=>{class t extends Q.KG{constructor(){super(),this._poll=new $.X(0),this._loading=new $.X(!1),this._filters=new $.X({shown_types:["event","desk","parking"]}),this._date=new $.X(Date.now()),this.events=(0,H.aj)([this._date,this._poll]).pipe((0,z.w)(([t])=>(0,G.u$)({period_start:(0,X.Z)((0,U.Z)(t)),period_end:(0,X.Z)((0,V.Z)(t))}))),this.desks=(0,H.aj)([this._date,this._poll]).pipe((0,z.w)(([t])=>(0,P.F2)({period_start:(0,X.Z)((0,U.Z)(t)),period_end:(0,X.Z)((0,V.Z)(t)),type:"desk"}))),this.parking=(0,H.aj)([this._date,this._poll]).pipe((0,z.w)(([t])=>(0,P.F2)({period_start:(0,X.Z)((0,U.Z)(t)),period_end:(0,X.Z)((0,V.Z)(t)),type:"parking"}))),this.bookings=(0,H.aj)([this.events,this.desks,this.parking]).pipe((0,W.U)(([t,e,s])=>[...t,...e,...s].sort((t,e)=>t.date-e.date)),(0,K.b)(()=>this._loading.next(!1))),this.filtered_bookings=(0,H.aj)([this.bookings,this._filters]).pipe((0,W.U)(([t,e])=>t.filter(t=>{var s,n;return t instanceof G.ym&&(null===(s=null==e?void 0:e.shown_types)||void 0===s?void 0:s.includes("event"))||(null===(n=null==e?void 0:e.shown_types)||void 0===n?void 0:n.includes(t.type))}))),this.filters=this._filters.asObservable(),this.date=this._date.asObservable(),this.loading=this._loading.asObservable(),this.subscription("date",(0,H.aj)([this._date,this._poll]).subscribe(t=>this._loading.next(!0)))}setDate(t){this._date.next(t)}toggleType(t,e=!1){return(0,j.mG)(this,void 0,void 0,function*(){const s=this._filters.getValue()||{shown_types:[]},{shown_types:n}=s;n&&(n.includes(t)||e)?this._filters.next(Object.assign(Object.assign({},s),{shown_types:n.filter(e=>e!==t)})):this._filters.next(Object.assign(Object.assign({},s),{shown_types:[...n,t]}))})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var et=s(9236);let st=(()=>{class t{constructor(t,e){this._state=t,this._sheet_ref=e,this.filters=this._state.filters,this.toggleType=t=>this._state.toggleType(t),this.dismiss=()=>this._sheet_ref.dismiss()}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(tt),r.Y36(k))},t.\u0275cmp=r.Xpm({type:t,selectors:[["schedule-filter-card"]],decls:42,vars:9,consts:[[1,"flex","items-center","border-b","border-gray-300","space-x-2","mb-4"],["mat-icon-button","",3,"click"],[1,"flex-1","w-1/2","text-center","font-medium"],[1,"space-y-4","border-b","border-gray-300","mb-4","pb-4"],["matRipple","",1,"flex","items-center","space-x-2","w-full","text-left",3,"click"],[1,"h-10","w-10","rounded-full","flex","items-center","justify-center","text-2xl"],[1,"flex-1"],[1,""],[1,"text-sm","opacity-60"],[3,"ngModel"],["src","assets/icons/desk-outline.svg",1,"w-6"],["mat-button","",1,"w-full",3,"click"]],template:function(t,e){if(1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"button",1),r.NdJ("click",function(){return e.dismiss()}),r.TgZ(2,"app-icon"),r._uU(3,"chevron_left"),r.qZA(),r.qZA(),r.TgZ(4,"h2",2),r._uU(5,"Booking Types"),r.qZA(),r._UZ(6,"app-icon"),r.qZA(),r.TgZ(7,"div",3),r.TgZ(8,"button",4),r.NdJ("click",function(){return e.toggleType("event")}),r.TgZ(9,"div",5),r.TgZ(10,"app-icon"),r._uU(11,"meeting_room"),r.qZA(),r.qZA(),r.TgZ(12,"div",6),r.TgZ(13,"div",7),r._uU(14,"Room"),r.qZA(),r.TgZ(15,"div",8),r._uU(16," Room and meeting invites "),r.qZA(),r.qZA(),r._UZ(17,"mat-checkbox",9),r.ALo(18,"async"),r.qZA(),r.TgZ(19,"button",4),r.NdJ("click",function(){return e.toggleType("desk")}),r.TgZ(20,"div",5),r._UZ(21,"img",10),r.qZA(),r.TgZ(22,"div",6),r.TgZ(23,"div",7),r._uU(24,"Desk"),r.qZA(),r.TgZ(25,"div",8),r._uU(26,"Desk bookings"),r.qZA(),r.qZA(),r._UZ(27,"mat-checkbox",9),r.ALo(28,"async"),r.qZA(),r.TgZ(29,"button",4),r.NdJ("click",function(){return e.toggleType("parking")}),r.TgZ(30,"div",5),r.TgZ(31,"app-icon"),r._uU(32,"drive_eta"),r.qZA(),r.qZA(),r.TgZ(33,"div",6),r.TgZ(34,"div",7),r._uU(35,"Parking"),r.qZA(),r.TgZ(36,"div",8),r._uU(37,"Car space bookings"),r.qZA(),r.qZA(),r._UZ(38,"mat-checkbox",9),r.ALo(39,"async"),r.qZA(),r.qZA(),r.TgZ(40,"button",11),r.NdJ("click",function(){return e.dismiss()}),r._uU(41," Apply Filters "),r.qZA()),2&t){let t,s,n;r.xp6(17),r.Q6J("ngModel",null==(t=r.lcZ(18,3,e.filters))||null==t.shown_types?null:t.shown_types.includes("event")),r.xp6(10),r.Q6J("ngModel",null==(s=r.lcZ(28,5,e.filters))||null==s.shown_types?null:s.shown_types.includes("desk")),r.xp6(11),r.Q6J("ngModel",null==(n=r.lcZ(39,7,e.filters))||null==n.shown_types?null:n.shown_types.includes("parking"))}},directives:[D.lW,B.o,c.wG,et.oG,i.JJ,i.On],pipes:[n.Ov],styles:["mat-checkbox[_ngcontent-%COMP%]{pointer-events:none}"]}),t})();function nt(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"div",7),r.TgZ(1,"div",8),r._uU(2,"Rooms"),r.qZA(),r.TgZ(3,"button",9),r.NdJ("click",function(){return r.CHM(t),r.oxw().toggleType("event",!0)}),r.TgZ(4,"app-icon"),r._uU(5,"close"),r.qZA(),r.qZA(),r.qZA()}}function it(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"div",7),r.TgZ(1,"div",8),r._uU(2,"Desks"),r.qZA(),r.TgZ(3,"button",9),r.NdJ("click",function(){return r.CHM(t),r.oxw().toggleType("desk",!0)}),r.TgZ(4,"app-icon"),r._uU(5,"close"),r.qZA(),r.qZA(),r.qZA()}}function ot(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"div",7),r.TgZ(1,"div",8),r._uU(2,"Car Spaces"),r.qZA(),r.TgZ(3,"button",9),r.NdJ("click",function(){return r.CHM(t),r.oxw().toggleType("parking",!0)}),r.TgZ(4,"app-icon"),r._uU(5,"close"),r.qZA(),r.qZA(),r.qZA()}}function at(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"div",10),r.TgZ(1,"div"),r._uU(2,"Rooms"),r.qZA(),r.TgZ(3,"button",9),r.NdJ("click",function(){return r.CHM(t),r.oxw().toggleType("event",!0)}),r.TgZ(4,"app-icon"),r._uU(5,"close"),r.qZA(),r.qZA(),r.qZA()}}function lt(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"div",10),r.TgZ(1,"div"),r._uU(2,"Desks"),r.qZA(),r.TgZ(3,"button",9),r.NdJ("click",function(){return r.CHM(t),r.oxw().toggleType("desk",!0)}),r.TgZ(4,"app-icon"),r._uU(5,"close"),r.qZA(),r.qZA(),r.qZA()}}function rt(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"div",10),r.TgZ(1,"div"),r._uU(2,"Car"),r.qZA(),r.TgZ(3,"button",9),r.NdJ("click",function(){return r.CHM(t),r.oxw().toggleType("parking",!0)}),r.TgZ(4,"app-icon"),r._uU(5,"close"),r.qZA(),r.qZA(),r.qZA()}}let ct=(()=>{class t{constructor(t,e){this._sheet=t,this._state=e,this.filters=this._state.filters,this.toggleType=(t,e=!1)=>this._state.toggleType(t,e)}openFilters(){this._sheet.open(st)}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(C),r.Y36(tt))},t.\u0275cmp=r.Xpm({type:t,selectors:[["schedule-filters"]],decls:19,vars:18,consts:[[1,"hidden","sm:block","bg-white","border","border-gray-300","rounded","p-2"],[1,"font-medium","mb-2"],[1,"flex","flex-wrap","space-x-2"],["class","flex items-center rounded-3xl border border-gray-300",4,"ngIf"],[1,"sm:hidden","flex","items-center","space-x-2"],["mat-button","",1,"w-24",3,"click"],["class","flex items-center rounded-3xl border border-gray-300 bg-white text-sm pl-2",4,"ngIf"],[1,"flex","items-center","rounded-3xl","border","border-gray-300"],[1,"px-2"],["mat-icon-button","",3,"click"],[1,"flex","items-center","rounded-3xl","border","border-gray-300","bg-white","text-sm","pl-2"]],template:function(t,e){if(1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"h3",1),r._uU(2,"Category Filters"),r.qZA(),r.TgZ(3,"div",2),r.YNc(4,nt,6,0,"div",3),r.ALo(5,"async"),r.YNc(6,it,6,0,"div",3),r.ALo(7,"async"),r.YNc(8,ot,6,0,"div",3),r.ALo(9,"async"),r.qZA(),r.qZA(),r.TgZ(10,"div",4),r.TgZ(11,"button",5),r.NdJ("click",function(){return e.openFilters()}),r._uU(12," Filters "),r.qZA(),r.YNc(13,at,6,0,"div",6),r.ALo(14,"async"),r.YNc(15,lt,6,0,"div",6),r.ALo(16,"async"),r.YNc(17,rt,6,0,"div",6),r.ALo(18,"async"),r.qZA()),2&t){let t,s,n,i,o,a;r.xp6(4),r.Q6J("ngIf",null==(t=r.lcZ(5,6,e.filters))||null==t.shown_types?null:t.shown_types.includes("event")),r.xp6(2),r.Q6J("ngIf",null==(s=r.lcZ(7,8,e.filters))||null==s.shown_types?null:s.shown_types.includes("desk")),r.xp6(2),r.Q6J("ngIf",null==(n=r.lcZ(9,10,e.filters))||null==n.shown_types?null:n.shown_types.includes("parking")),r.xp6(5),r.Q6J("ngIf",null==(i=r.lcZ(14,12,e.filters))||null==i.shown_types?null:i.shown_types.includes("event")),r.xp6(2),r.Q6J("ngIf",null==(o=r.lcZ(16,14,e.filters))||null==o.shown_types?null:o.shown_types.includes("desk")),r.xp6(2),r.Q6J("ngIf",null==(a=r.lcZ(18,16,e.filters))||null==a.shown_types?null:a.shown_types.includes("parking"))}},directives:[n.O5,D.lW,B.o],pipes:[n.Ov],styles:[""]}),t})(),dt=(()=>{class t{constructor(t){this._state=t,this.filters=this._state.filters,this.date=this._state.date,this.toggleType=t=>this._state.toggleType(t),this.setDate=t=>this._state.setDate(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(tt))},t.\u0275cmp=r.Xpm({type:t,selectors:[["schedule-sidebar"]],decls:38,vars:12,consts:[[1,"flex","flex-col","w-[18rem]","h-full","overflow-hidden","bg-white","border-r","border-gray-300"],[1,"border-b","border-gray-200",3,"ngModel","ngModelChange"],[1,"mx-4","mt-4","font-medium"],[1,"p-4","space-y-4"],["matRipple","",1,"flex","items-center","space-x-2","w-full","text-left",3,"click"],[1,"h-10","w-10","rounded-full","flex","items-center","justify-center","bg-gray-200","text-2xl"],[1,"flex-1"],[1,""],[1,"text-sm","opacity-60"],[3,"ngModel"],["src","assets/icons/desk-outline.svg",1,"w-6"]],template:function(t,e){if(1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"schedule-calendar",1),r.NdJ("ngModelChange",function(t){return e.setDate(t)}),r.ALo(2,"async"),r.qZA(),r.TgZ(3,"h3",2),r._uU(4,"Filters"),r.qZA(),r.TgZ(5,"div",3),r.TgZ(6,"button",4),r.NdJ("click",function(){return e.toggleType("event")}),r.TgZ(7,"div",5),r.TgZ(8,"app-icon"),r._uU(9,"meeting_room"),r.qZA(),r.qZA(),r.TgZ(10,"div",6),r.TgZ(11,"div",7),r._uU(12,"Room"),r.qZA(),r.TgZ(13,"div",8),r._uU(14," Room and meeting invites "),r.qZA(),r.qZA(),r._UZ(15,"mat-checkbox",9),r.ALo(16,"async"),r.qZA(),r.TgZ(17,"button",4),r.NdJ("click",function(){return e.toggleType("desk")}),r.TgZ(18,"div",5),r._UZ(19,"img",10),r.qZA(),r.TgZ(20,"div",6),r.TgZ(21,"div",7),r._uU(22,"Desk"),r.qZA(),r.TgZ(23,"div",8),r._uU(24,"Desk bookings"),r.qZA(),r.qZA(),r._UZ(25,"mat-checkbox",9),r.ALo(26,"async"),r.qZA(),r.TgZ(27,"button",4),r.NdJ("click",function(){return e.toggleType("parking")}),r.TgZ(28,"div",5),r.TgZ(29,"app-icon"),r._uU(30,"drive_eta"),r.qZA(),r.qZA(),r.TgZ(31,"div",6),r.TgZ(32,"div",7),r._uU(33,"Parking"),r.qZA(),r.TgZ(34,"div",8),r._uU(35,"Car space bookings"),r.qZA(),r.qZA(),r._UZ(36,"mat-checkbox",9),r.ALo(37,"async"),r.qZA(),r.qZA(),r.qZA()),2&t){let t,s,n;r.xp6(1),r.Q6J("ngModel",r.lcZ(2,4,e.date)),r.xp6(14),r.Q6J("ngModel",null==(t=r.lcZ(16,6,e.filters))||null==t.shown_types?null:t.shown_types.includes("event")),r.xp6(10),r.Q6J("ngModel",null==(s=r.lcZ(26,8,e.filters))||null==s.shown_types?null:s.shown_types.includes("desk")),r.xp6(11),r.Q6J("ngModel",null==(n=r.lcZ(37,10,e.filters))||null==n.shown_types?null:n.shown_types.includes("parking"))}},directives:[Y,i.JJ,i.On,c.wG,B.o,et.oG],pipes:[n.Ov],styles:["mat-checkbox[_ngcontent-%COMP%]{pointer-events:none}"]}),t})();var ut=s(4941),ht=s(4892),pt=s(9676),gt=s(3577),ft=s(5033),_t=s(5994);function mt(t,e){1&t&&(r.TgZ(0,"span"),r._uU(1,"(Today)"),r.qZA())}function Zt(t,e){if(1&t&&r._UZ(0,"event-card",11),2&t){const t=r.oxw().$implicit;r.Q6J("event",t)}}function vt(t,e){if(1&t&&r._UZ(0,"booking-card",12),2&t){const t=r.oxw().$implicit;r.Q6J("booking",t)}}function bt(t,e){if(1&t&&(r.ynx(0),r.YNc(1,Zt,1,1,"event-card",9),r.YNc(2,vt,1,1,"ng-template",null,10,r.W1O),r.BQk()),2&t){const t=e.$implicit,s=r.MAs(3),n=r.oxw(2);r.xp6(1),r.Q6J("ngIf",n.isEvent(t))("ngIfElse",s)}}function yt(t,e){if(1&t&&(r.ynx(0),r.YNc(1,bt,4,2,"ng-container",8),r.ALo(2,"async"),r.BQk()),2&t){const t=r.oxw();r.xp6(1),r.Q6J("ngForOf",r.lcZ(2,1,t.bookings))}}function xt(t,e){1&t&&r._UZ(0,"mat-progress-bar",13)}function At(t,e){if(1&t&&(r.TgZ(0,"div",14),r._UZ(1,"img",15),r.TgZ(2,"p",16),r._uU(3),r.ALo(4,"date"),r.ALo(5,"async"),r.qZA(),r.qZA()),2&t){const t=r.oxw();r.xp6(3),r.hij(" No events and bookings for ",r.xi3(4,1,r.lcZ(5,4,t.date),"EEEE, dd LLL yyyy")," ")}}const Tt=[{path:"",component:(()=>{class t{constructor(t){this._state=t,this.bookings=this._state.filtered_bookings,this.date=this._state.date,this.loading=this._state.loading,this.is_today=this.date.pipe((0,W.U)(t=>(0,ut.Z)(t,Date.now())))}isEvent(t){return t instanceof G.ym}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(tt))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-schedule"]],decls:18,vars:16,consts:[[1,"flex","flex-1","h-1/2","bg-[#E5E5E5]"],[1,"hidden","sm:block"],[1,"flex-1","h-full","p-4","overflow-auto","space-y-2"],[1,"font-medium","my-2"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["class","absolute inset-x-0 bottom-0","mode","indeterminate",4,"ngIf"],["empty_state",""],[4,"ngFor","ngForOf"],[3,"event",4,"ngIf","ngIfElse"],["booking_card",""],[3,"event"],[3,"booking"],["mode","indeterminate",1,"absolute","inset-x-0","bottom-0"],[1,"w-full","p-8","flex","flex-col","items-center","justify-center","space-y-4"],["src","assets/img/no-events.svg",1,"mr-4"],[1,"opacity-30"]],template:function(t,e){if(1&t&&(r._UZ(0,"topbar"),r.TgZ(1,"div",0),r._UZ(2,"schedule-sidebar",1),r.TgZ(3,"div",2),r._UZ(4,"schedule-filters"),r.TgZ(5,"h3",3),r._uU(6),r.ALo(7,"date"),r.ALo(8,"async"),r.YNc(9,mt,2,0,"span",4),r.ALo(10,"async"),r.qZA(),r.YNc(11,yt,3,3,"ng-container",5),r.ALo(12,"async"),r.qZA(),r.YNc(13,xt,1,0,"mat-progress-bar",6),r.ALo(14,"async"),r.qZA(),r._UZ(15,"footer-menu"),r.YNc(16,At,6,6,"ng-template",null,7,r.W1O)),2&t){const t=r.MAs(17);let s;r.xp6(6),r.hij(" ",r.xi3(7,5,r.lcZ(8,8,e.date),"EEE dd LLL yyyy")," "),r.xp6(3),r.Q6J("ngIf",r.lcZ(10,10,e.is_today)),r.xp6(2),r.Q6J("ngIf",null==(s=r.lcZ(12,12,e.bookings))?null:s.length)("ngIfElse",t),r.xp6(2),r.Q6J("ngIf",r.lcZ(14,14,e.loading))}},directives:[ht.o,dt,ct,n.O5,pt.i,n.sg,gt.j,ft.E,_t.pW],pipes:[n.uU,n.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}"]}),t})()},{path:"**",redirectTo:""}];let wt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[n.ez,O.v,i.u5,w,o.Bz.forChild(Tt)]]}),t})()}}]);
//# sourceMappingURL=apps_workplace_src_app_new-schedule_schedule_module_ts.js.map