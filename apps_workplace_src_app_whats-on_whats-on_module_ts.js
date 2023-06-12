"use strict";
(self["webpackChunkworkplace"] = self["webpackChunkworkplace"] || []).push([["apps_workplace_src_app_whats-on_whats-on_module_ts"],{

/***/ 86133:
/*!**************************************************************************!*\
  !*** ./apps/workplace/src/app/whats-on/whats-on-event-list.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WhatsOnEventListComponent": () => (/* binding */ WhatsOnEventListComponent)
/* harmony export */ });
/* harmony import */ var _placeos_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/events */ 27288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 65306);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 443);






const _c0 = ["container"];
function WhatsOnEventListComponent_ng_container_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 12)(3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 16)(12, "div", 17)(13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Read more");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const event_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("min-width", "calc(" + 100 / ctx_r4.cards + "% - .45rem)")("max-width", "calc(" + 100 / ctx_r4.cards + "% - .45rem)")("opacity", i_r8 >= ctx_r4.index && i_r8 < ctx_r4.index + ctx_r4.cards ? 1 : 0)("transform", "translateX(calc(-" + ctx_r4.index * 100 + "% - " + ctx_r4.index * 0.45 + "rem))");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 11, event_r7 == null ? null : event_r7.date, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (event_r7 == null ? null : event_r7.title) || "<No title>", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](10, 14, (event_r7 == null ? null : event_r7.body) || "<No description>", 0, 320), " ");
  }
}
function WhatsOnEventListComponent_ng_container_6_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WhatsOnEventListComponent_ng_container_6_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.index = ctx_r9.index - ctx_r9.cards);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "chevron_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function WhatsOnEventListComponent_ng_container_6_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WhatsOnEventListComponent_ng_container_6_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.index = ctx_r11.index + ctx_r11.cards);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function WhatsOnEventListComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, WhatsOnEventListComponent_ng_container_6_div_1_Template, 17, 18, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, WhatsOnEventListComponent_ng_container_6_button_2_Template, 3, 0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, WhatsOnEventListComponent_ng_container_6_button_3_Template, 3, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.events);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.index > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.index + ctx_r1.cards < ctx_r1.events.length);
  }
}
function WhatsOnEventListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" No ", ctx_r3.title, " events ");
  }
}
const CARD_WIDTH = 60 * 4;
class WhatsOnEventListComponent {
  constructor() {
    /** Title to display for the event list */
    this.title = 'Upcoming';
    /** List of events to display on the event list */
    this.events = [new _placeos_events__WEBPACK_IMPORTED_MODULE_0__.CalendarEvent({
      title: 'Welcome Event',
      body: 'Today we welcome our new employees joining our extensive family.'
    }), new _placeos_events__WEBPACK_IMPORTED_MODULE_0__.CalendarEvent({
      title: 'Christmas Party',
      body: 'Come together for our pre-Christmas party'
    }), new _placeos_events__WEBPACK_IMPORTED_MODULE_0__.CalendarEvent({
      title: '100 Year Celebration',
      body: 'Celebrating our 100th year in business'
    }), new _placeos_events__WEBPACK_IMPORTED_MODULE_0__.CalendarEvent({
      title: 'Chocolate Sharing Day',
      body: 'Chocolate!'
    }), new _placeos_events__WEBPACK_IMPORTED_MODULE_0__.CalendarEvent({
      title: 'Shoe Shine Day',
      body: 'Good shoes deserve good care. Join us to have your shoe polished and shined by professionals.'
    })];
    this.index = 0;
  }
  onResize() {
    this.index = 0;
  }
  get cards() {
    return Math.floor(this._el.nativeElement.clientWidth / CARD_WIDTH) || 1;
  }
}
WhatsOnEventListComponent.ɵfac = function WhatsOnEventListComponent_Factory(t) {
  return new (t || WhatsOnEventListComponent)();
};
WhatsOnEventListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: WhatsOnEventListComponent,
  selectors: [["whats-on-event-list"]],
  viewQuery: function WhatsOnEventListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._el = _t.first);
    }
  },
  hostBindings: function WhatsOnEventListComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function WhatsOnEventListComponent_resize_HostBindingHandler() {
        return ctx.onResize();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    }
  },
  inputs: {
    title: "title",
    events: "events"
  },
  decls: 9,
  vars: 3,
  consts: [[1, "flex", "items-center", "space-x-4", "mb-2"], [1, "text-xl", "font-medium"], [1, "flex-1", "h-0.5", "w-px", "bg-primary"], [1, "relative", "flex", "items-center", "w-full", "space-x-2", "py-2"], ["container", ""], [4, "ngIf", "ngIfElse"], ["empty_state", ""], ["class", "flex flex-col items-center justify-center bg-white shadow h-[24rem]", "card", "", 3, "min-width", "max-width", "opacity", "transform", 4, "ngFor", "ngForOf"], ["icon", "", "matRipple", "", "class", "absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-16 bg-white shadow", 3, "click", 4, "ngIf"], ["icon", "", "matRipple", "", "class", "absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-16 bg-white shadow", 3, "click", 4, "ngIf"], ["card", "", 1, "flex", "flex-col", "items-center", "justify-center", "bg-white", "shadow", "h-[24rem]"], [1, "w-full", "h-40", "bg-gray-400"], [1, "flex", "flex-col", "items-center", "p-2", "flex-1", "h-1/2", "w-full", "space-y-2"], ["date", "", 1, "w-full", "uppercase", "text-primary"], ["title", "", 1, "w-full", "font-medium"], ["desc", "", 1, "flex-1", "h-1/2", "w-full", "text-sm"], ["btn", "", "matRipple", "", 1, "w-full"], [1, "flex", "items-center"], ["icon", "", "matRipple", "", 1, "absolute", "left-0", "top-1/2", "transform", "-translate-x-1/2", "-translate-y-16", "bg-white", "shadow", 3, "click"], ["icon", "", "matRipple", "", 1, "absolute", "right-0", "top-1/2", "transform", "translate-x-1/2", "-translate-y-16", "bg-white", "shadow", 3, "click"], [1, "p-12", "flex", "items-center", "justify-center", "w-full", "opacity-40"]],
  template: function WhatsOnEventListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, WhatsOnEventListComponent_ng_container_6_Template, 4, 3, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, WhatsOnEventListComponent_ng_template_7_Template, 2, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.events == null ? null : ctx.events.length)("ngIfElse", _r2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_3__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
  styles: ["[card][_ngcontent-%COMP%] {\n                transition: transform 200ms, opacity 200ms;\n            }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndoYXRzLW9uLWV2ZW50LWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSwwQ0FBMEM7WUFDOUMiLCJmaWxlIjoid2hhdHMtb24tZXZlbnQtbGlzdC5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIFtjYXJkXSB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zLCBvcGFjaXR5IDIwMG1zO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd29ya3BsYWNlL3NyYy9hcHAvd2hhdHMtb24vd2hhdHMtb24tZXZlbnQtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLDBDQUEwQztZQUM5Qzs7QUFFWiw0YUFBNGEiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIFtjYXJkXSB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zLCBvcGFjaXR5IDIwMG1zO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 96265:
/*!**********************************************************************!*\
  !*** ./apps/workplace/src/app/whats-on/whats-on-header.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WhatsOnHeaderComponent": () => (/* binding */ WhatsOnHeaderComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 88397);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);



class WhatsOnHeaderComponent {
  get user() {
    return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_0__.currentUser)();
  }
  get day() {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(Date.now(), 'dd');
  }
  get month() {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(Date.now(), 'MMM');
  }
  get year() {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(Date.now(), 'yyyy');
  }
  get time() {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(Date.now(), 'h:mm a');
  }
}
WhatsOnHeaderComponent.ɵfac = function WhatsOnHeaderComponent_Factory(t) {
  return new (t || WhatsOnHeaderComponent)();
};
WhatsOnHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: WhatsOnHeaderComponent,
  selectors: [["whats-on-header"]],
  decls: 13,
  vars: 5,
  consts: [[1, "flex", "items-center", "justify-between", "my-8", "w-full"], [1, "text-4xl"], ["time", "", 1, "flex", "items-center", "space-x-2", "font-medium"], ["day", "", 1, "text-4xl", "font-normal"], ["date", "", 1, ""], [1, "text-primary", "uppercase", "leading-none"], [1, "text-base", "leading-none"], ["time", "", 1, "text-4xl", "font-normal", "pl-4"]],
  template: function WhatsOnHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Hello, ", ctx.user == null ? null : ctx.user.name, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.day);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.month, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.year);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.time);
    }
  }
});


/***/ }),

/***/ 51320:
/*!***************************************************************!*\
  !*** ./apps/workplace/src/app/whats-on/whats-on.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WhatsOnComponent": () => (/* binding */ WhatsOnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _components_topbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/topbar.component */ 64187);
/* harmony import */ var _components_footer_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/footer-menu.component */ 46012);
/* harmony import */ var _whats_on_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./whats-on-header.component */ 96265);
/* harmony import */ var _whats_on_event_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./whats-on-event-list.component */ 86133);





const _c0 = ["dashboard", ""];
class WhatsOnComponent {}
WhatsOnComponent.ɵfac = function WhatsOnComponent_Factory(t) {
  return new (t || WhatsOnComponent)();
};
WhatsOnComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: WhatsOnComponent,
  selectors: [["", "dashboard", ""]],
  attrs: _c0,
  decls: 8,
  vars: 0,
  consts: [[1, "flex-1", "flex", "sm:flex-row", "flex-col-reverse", "h-1/2", "bg-gray-200"], [1, "relative", "z-0", "flex", "flex-col", "flex-1", "h-1/2", "sm:h-auto", "overflow-hidden"], [1, "flex", "flex-col", "flex-1", "px-0", "sm:px-8", "overflow-y-auto", "overflow-x-hidden", "h-px", "sm:h-auto"], [1, "mb-4"], ["title", "Ongoing"]],
  template: function WhatsOnComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "topbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "main", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "whats-on-header")(5, "whats-on-event-list", 3)(6, "whats-on-event-list", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "footer-menu");
    }
  },
  dependencies: [_components_topbar_component__WEBPACK_IMPORTED_MODULE_0__.TopbarComponent, _components_footer_menu_component__WEBPACK_IMPORTED_MODULE_1__.FooterMenuComponent, _whats_on_header_component__WEBPACK_IMPORTED_MODULE_2__.WhatsOnHeaderComponent, _whats_on_event_list_component__WEBPACK_IMPORTED_MODULE_3__.WhatsOnEventListComponent],
  styles: ["[_nghost-%COMP%] {\n                position: absolute;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                overflow: hidden;\n                display: flex;\n                flex-direction: column;\n            }\n\n            main[_ngcontent-%COMP%] {\n                min-height: 50%;\n            }\n\n            .top[_ngcontent-%COMP%] {\n                background-color: #007ac8;\n            }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndoYXRzLW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksa0JBQWtCO2dCQUNsQixNQUFNO2dCQUNOLE9BQU87Z0JBQ1AsUUFBUTtnQkFDUixTQUFTO2dCQUNULGdCQUFnQjtnQkFDaEIsYUFBYTtnQkFDYixzQkFBc0I7WUFDMUI7O1lBRUE7Z0JBQ0ksZUFBZTtZQUNuQjs7WUFFQTtnQkFDSSx5QkFBeUI7WUFDN0IiLCJmaWxlIjoid2hhdHMtb24uY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudG9wIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YWM4O1xuICAgICAgICAgICAgfVxuICAgICAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd29ya3BsYWNlL3NyYy9hcHAvd2hhdHMtb24vd2hhdHMtb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxrQkFBa0I7Z0JBQ2xCLE1BQU07Z0JBQ04sT0FBTztnQkFDUCxRQUFRO2dCQUNSLFNBQVM7Z0JBQ1QsZ0JBQWdCO2dCQUNoQixhQUFhO2dCQUNiLHNCQUFzQjtZQUMxQjs7WUFFQTtnQkFDSSxlQUFlO1lBQ25COztZQUVBO2dCQUNJLHlCQUF5QjtZQUM3Qjs7QUFFWixvZ0NBQW9nQyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRvcCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2FjODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 37093:
/*!************************************************************!*\
  !*** ./apps/workplace/src/app/whats-on/whats-on.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WhatsOnModule": () => (/* binding */ WhatsOnModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _whats_on_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./whats-on.component */ 51320);
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/shared.module */ 75206);
/* harmony import */ var _whats_on_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./whats-on-header.component */ 96265);
/* harmony import */ var _whats_on_event_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./whats-on-event-list.component */ 86133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);









const ROUTES = [{
  path: '',
  component: _whats_on_component__WEBPACK_IMPORTED_MODULE_0__.WhatsOnComponent
}];
class WhatsOnModule {}
WhatsOnModule.ɵfac = function WhatsOnModule_Factory(t) {
  return new (t || WhatsOnModule)();
};
WhatsOnModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: WhatsOnModule
});
WhatsOnModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _components_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedComponentModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(ROUTES)]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](WhatsOnModule, {
    declarations: [_whats_on_component__WEBPACK_IMPORTED_MODULE_0__.WhatsOnComponent, _whats_on_header_component__WEBPACK_IMPORTED_MODULE_2__.WhatsOnHeaderComponent, _whats_on_event_list_component__WEBPACK_IMPORTED_MODULE_3__.WhatsOnEventListComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _components_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedComponentModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=apps_workplace_src_app_whats-on_whats-on_module_ts.js.map