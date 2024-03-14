"use strict";
(self["webpackChunkworkplace"] = self["webpackChunkworkplace"] || []).push([["apps_workplace_src_app_events_group-events_module_ts"],{

/***/ 30244:
/*!*********************************************************************!*\
  !*** ./apps/workplace/src/app/events/group-event-card.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupEventCardComponent: () => (/* binding */ GroupEventCardComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _group_event_details_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group-event-details-modal.component */ 23150);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);
/* harmony import */ var _libs_components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/authenticated-image.directive */ 75142);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 55309);










function GroupEventCardComponent_button_0_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 14);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("source", ctx_r3.event.images[0]);
  }
}
function GroupEventCardComponent_button_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4.event.location, " ");
  }
}
function GroupEventCardComponent_button_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Remote event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function GroupEventCardComponent_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupEventCardComponent_button_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.viewDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, GroupEventCardComponent_button_0_img_2_Template, 1, 1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 5)(4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 9)(13, "app-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "place");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, GroupEventCardComponent_button_0_div_15_Template, 2, 1, "div", 11)(16, GroupEventCardComponent_button_0_div_16_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 9)(18, "app-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.event.images == null ? null : ctx_r0.event.images.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](6, 9, ctx_r0.event.date, "EEE d MMM"), ", ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 12, ctx_r0.event.date, ctx_r0.time_format), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx_r0.event.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.event.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.event.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.event.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.event.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (ctx_r0.event.attendees == null ? null : ctx_r0.event.attendees.length) || "0", " attending ");
  }
}
function GroupEventCardComponent_ng_template_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 14);
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("source", ctx_r8.event.images[0]);
  }
}
function GroupEventCardComponent_ng_template_1_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r9.event.location, " ");
  }
}
function GroupEventCardComponent_ng_template_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Remote event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function GroupEventCardComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GroupEventCardComponent_ng_template_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.viewDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, GroupEventCardComponent_ng_template_1_img_2_Template, 1, 1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 18)(4, "app-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Featured");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 21)(9, "div", 22)(10, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 25)(17, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 9)(27, "app-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "place");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, GroupEventCardComponent_ng_template_1_div_29_Template, 2, 1, "div", 11)(30, GroupEventCardComponent_ng_template_1_div_30_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 9)(32, "app-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, " View Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.event.images == null ? null : ctx_r1.event.images.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](12, 11, ctx_r1.event.date, "MMM"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](15, 14, ctx_r1.event.date, "d"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.event.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](21, 17, ctx_r1.event.date, "EEEE"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](22, 20, ctx_r1.event.date, ctx_r1.time_format), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](23, 23, ctx_r1.event.date + ctx_r1.event.duration * 60 * 1000, ctx_r1.time_format), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.event.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.event.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.event.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (ctx_r1.event.attendees == null ? null : ctx_r1.event.attendees.length) || "0", " attending ");
  }
}
class GroupEventCardComponent {
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_settings, _dialog) {
    this._settings = _settings;
    this._dialog = _dialog;
  }
  ngOnInit() {}
  viewDetails() {
    this._dialog.open(_group_event_details_modal_component__WEBPACK_IMPORTED_MODULE_1__.GroupEventDetailsModalComponent, {
      data: this.event
    });
  }
  static #_ = this.ɵfac = function GroupEventCardComponent_Factory(t) {
    return new (t || GroupEventCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: GroupEventCardComponent,
    selectors: [["group-event-card"]],
    inputs: {
      event: "event",
      featured: "featured"
    },
    decls: 3,
    vars: 2,
    consts: [["matRipple", "", "class", "border border-base-300 hover:border-info flex flex-col bg-base-100 rounded-xl shadow hover:shadow-2xl overflow-hidden w-64 h-[20rem]", 3, "click", 4, "ngIf", "ngIfElse"], ["featured_card", ""], ["matRipple", "", 1, "border", "border-base-300", "hover:border-info", "flex", "flex-col", "bg-base-100", "rounded-xl", "shadow", "hover:shadow-2xl", "overflow-hidden", "w-64", "h-[20rem]", 3, "click"], [1, "flex", "items-center", "justify-between", "h-28", "w-full", "bg-base-200", "overflow-hidden"], ["auth", "", "class", "object-cover", 3, "source", 4, "ngIf"], [1, "p-4", "flex-1", "h-1/2"], [1, "opacity-60", "text-sm"], [1, "text-xl", "mb-2", "text-left", "truncate", 3, "title"], [1, "opacity-60", "text-xs", "flex-1", "overflow-hidden", "h-[4.5rem]", "mb-2"], [1, "flex", "items-center", "space-x-2", "text-sm"], [1, "text-info"], ["class", "", 4, "ngIf"], ["class", "opacity-30", 4, "ngIf"], [1, ""], ["auth", "", 1, "object-cover", 3, "source"], [1, "opacity-30"], ["matRipple", "", 1, "border", "border-base-300", "hover:border-info", "flex", "bg-base-100", "rounded-xl", "shadow", "hover:shadow-2xl", "overflow-hidden", "w-full", "max-w-[64rem]", "h-64", "mx-auto", 3, "click"], [1, "flex", "items-center", "justify-between", "h-full", "w-1/2", "max-w-[24rem]", "bg-base-200", "overflow-hidden"], [1, "absolute", "top-0", "left-0", "rounded-br-xl", "py-2", "pl-2", "pr-4", "space-x-2", "bg-info", "text-info-content", "flex", "items-center", "text-sm"], [1, "text-base"], [1, "uppercase"], ["details", "", 1, "flex", "px-8", "py-4", "space-x-4"], [1, "flex", "flex-col", "items-center"], [1, "text-sm", "opacity-30"], [1, "text-lg"], [1, "flex", "flex-col", "space-y-2"], [1, "text-left"], ["time", "", 1, "text-sm", "opacity-30"], [1, "h-28", "overflow-hidden"], [1, "absolute", "top-4", "right-4", "bg-secondary", "text-secondary-content", "rounded", "px-4", "py-2", "w-32", "text-center", "truncate"]],
    template: function GroupEventCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, GroupEventCardComponent_button_0_Template, 22, 15, "button", 0)(1, GroupEventCardComponent_ng_template_1_Template, 38, 26, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.featured)("ngIfElse", _r2);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _libs_components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_3__.AuthenticatedImageDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
    styles: ["button[_ngcontent-%COMP%] {\n                transition: box-shadow 300ms, border 200ms;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd29ya3BsYWNlL3NyYy9hcHAvZXZlbnRzL2dyb3VwLWV2ZW50LWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSwwQ0FBMEM7WUFDOUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAzMDBtcywgYm9yZGVyIDIwMG1zO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 23150:
/*!******************************************************************************!*\
  !*** ./apps/workplace/src/app/events/group-event-details-modal.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupEventDetailsModalComponent: () => (/* binding */ GroupEventDetailsModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/bookings */ 40688);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);
/* harmony import */ var _libs_components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/authenticated-image.directive */ 75142);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 55309);











function GroupEventDetailsModalComponent_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 25);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("source", ctx_r0.event.images[0]);
  }
}
function GroupEventDetailsModalComponent_span_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Remote Event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function GroupEventDetailsModalComponent_span_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " No description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
class GroupEventDetailsModalComponent {
  get time_format() {
    return this._settings.time_format;
  }
  get attendance() {
    return this.booking.attendees?.filter(_ => _.status === 'accepted')?.length || 0;
  }
  constructor(_data, _settings) {
    this._data = _data;
    this._settings = _settings;
    this.booking = this._data;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function GroupEventDetailsModalComponent_Factory(t) {
    return new (t || GroupEventDetailsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: GroupEventDetailsModalComponent,
    selectors: [["group-event-details-modal"]],
    decls: 69,
    vars: 21,
    consts: [[1, "relative", "w-[48rem]", "max-w-[calc(100vw-1rem)]", "max-h-[80vh]", "overflow-hidden"], [1, "flex", "items-center", "justify-between", "h-52", "w-full", "bg-base-200", "overflow-hidden"], ["auth", "", "class", "object-cover", 3, "source", 4, "ngIf"], [1, "absolute", "top-0", "left-0", "rounded-br", "py-2", "pl-2", "pr-4", "space-x-2", "bg-info", "text-info-content", "flex", "items-center", "text-sm"], [1, "text-base"], [1, "uppercase"], ["icon", "", "mat-dialog-close", "", 1, "absolute", "top-1", "right-1"], [1, "flex", "items-center", "justify-between", "py-4", "px-8", "border-b", "border-base-200"], [1, "text-left", "text-xl"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "clear", "bg-base-200", "text-base-content", "space-x-2"], [1, "pr-2"], ["btn", "", "matRipple", "", 1, "clear", "bg-base-200", "text-base-content", "w-[2.75rem]"], [1, "text-2xl"], [1, "flex", "overflow-y-auto", "overflow-x-hidden", "p-8"], [1, "flex", "flex-col", "space-y-2"], [1, "flex", "items-center", "space-x-4"], [1, "flex", "items-center", "justify-center", "w-10", "h-10", "bg-base-200", "rounded-full"], [1, "font-medium", "pt-4"], [1, "flex", "flex-col"], [1, "text-sm"], [1, "text-sm", "opacity-30"], ["class", "opacity-30", 4, "ngIf"], [1, "text-sm", "pb-4"], [1, "flex"], ["auth", "", 1, "object-cover", 3, "source"], [1, "opacity-30"]],
    template: function GroupEventDetailsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, GroupEventDetailsModalComponent_img_2_Template, 1, 1, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3)(4, "app-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Featured");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 6)(9, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 7)(12, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 9)(15, "button", 10)(16, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Interested");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "button", 10)(21, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "help");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Going");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "button", 12)(26, "app-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "more_horiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 14)(29, "div", 15)(30, "div", 16)(31, "div", 17)(32, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "When and where");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 16)(39, "div", 17)(40, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "calendar_today");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 19)(43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Date and Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](47, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](48, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](49, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 16)(51, "div", 17)(52, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "place");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](56, GroupEventDetailsModalComponent_span_56_Template, 2, 0, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 16)(58, "div", 17)(59, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "About this event");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](67, GroupEventDetailsModalComponent_span_67_Template, 2, 0, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](68, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.booking.images == null ? null : ctx.booking.images.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.booking.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Event by ", ctx.booking.user_name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](47, 12, ctx.booking.date, "EEEE, d MMMM, yyyy"), " . ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](48, 15, ctx.booking.date, ctx.time_format), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](49, 18, ctx.booking.date + ctx.booking.duration * 60 * 1000, ctx.time_format), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.booking.location, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.booking.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx.attendance, " going, ", (ctx.booking.attendees == null ? null : ctx.booking.attendees.length) - ctx.attendance, " interested ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.booking.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.booking.description);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _libs_components_src_lib_authenticated_image_directive__WEBPACK_IMPORTED_MODULE_3__.AuthenticatedImageDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatRipple, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe]
  });
}

/***/ }),

/***/ 79040:
/*!*************************************************************************!*\
  !*** ./apps/workplace/src/app/events/group-events-sidebar.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupEventsSidebarComponent: () => (/* binding */ GroupEventsSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _libs_form_fields_src_lib_date_calendar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/form-fields/src/lib/date-calendar.component */ 47871);


class GroupEventsSidebarComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function GroupEventsSidebarComponent_Factory(t) {
    return new (t || GroupEventsSidebarComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: GroupEventsSidebarComponent,
    selectors: [["group-events-sidebar"]],
    decls: 3,
    vars: 0,
    consts: [[1, "bg-base-100", "w-[18rem]", "h-full"], [1, "border-base-200", "w-[calc(100%-1rem)]", "mx-auto"]],
    template: function GroupEventsSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "date-calendar")(2, "hr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_libs_form_fields_src_lib_date_calendar_component__WEBPACK_IMPORTED_MODULE_0__.DateCalendarComponent]
  });
}

/***/ }),

/***/ 14278:
/*!*********************************************************************!*\
  !*** ./apps/workplace/src/app/events/group-events-state.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupEventsStateService: () => (/* binding */ GroupEventsStateService)
/* harmony export */ });
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/bookings */ 40688);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 5745);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 31957);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 57016);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 4512);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 70462);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 64555);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 85046);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 36520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 680);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 61699);









class GroupEventsStateService {
  constructor(_org, _settings) {
    this._org = _org;
    this._settings = _settings;
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject({
      date: Date.now()
    });
    this.events = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([this._org.active_building, this._options]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(([building]) => !!building), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(([building, options]) => (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_0__.queryBookings)({
      period_start: (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(options.date)),
      period_end: (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(options.date)),
      type: 'group-event',
      zones: this._settings.get('app.use_region') ? building.parent_id : building.id
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.shareReplay)(1));
  }
  static #_ = this.ɵfac = function GroupEventsStateService_Factory(t) {
    return new (t || GroupEventsStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
    token: GroupEventsStateService,
    factory: GroupEventsStateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 98746:
/*!*****************************************************************!*\
  !*** ./apps/workplace/src/app/events/group-events.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupEventsComponent: () => (/* binding */ GroupEventsComponent)
/* harmony export */ });
/* harmony import */ var _group_events_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group-events-state.service */ 14278);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9681);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/bookings */ 40688);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 47422);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _components_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/topbar.component */ 23299);
/* harmony import */ var _components_footer_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer-menu.component */ 89252);
/* harmony import */ var _group_events_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./group-events-sidebar.component */ 79040);
/* harmony import */ var _group_event_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./group-event-card.component */ 30244);











const _c0 = ["dashboard", ""];
function GroupEventsComponent_group_event_card_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "group-event-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("event", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 2, ctx_r0.featured))("featured", true);
  }
}
function GroupEventsComponent_ng_template_6_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "No featured event");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function GroupEventsComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, GroupEventsComponent_ng_template_6_div_0_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, ctx_r1.event_list)) == null ? null : tmp_0_0.length);
  }
}
function GroupEventsComponent_div_8_group_event_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "group-event-card", 12);
  }
  if (rf & 2) {
    const event_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("event", event_r8);
  }
}
function GroupEventsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, GroupEventsComponent_div_8_group_event_card_1_Template, 1, 1, "group-event-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, ctx_r3.event_list));
  }
}
function GroupEventsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "No events");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
class GroupEventsComponent {
  constructor(_state) {
    this._state = _state;
    this.event_list = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([new _placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.Booking(), new _placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.Booking()]) || this._state.events;
    this.featured = this.event_list.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(_ => _.find(_ => _.extension_data?.featured)));
  }
  static #_ = this.ɵfac = function GroupEventsComponent_Factory(t) {
    return new (t || GroupEventsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_group_events_state_service__WEBPACK_IMPORTED_MODULE_0__.GroupEventsStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: GroupEventsComponent,
    selectors: [["", "dashboard", ""]],
    attrs: _c0,
    decls: 13,
    vars: 8,
    consts: [[1, "flex", "flex-1", "h-1/2", "bg-base-200"], [1, "w-1/2", "flex-1", "h-full", "overflow-auto", "p-4"], ["class", "my-2 mx-auto", 3, "event", "featured", 4, "ngIf", "ngIfElse"], ["no_featured", ""], ["class", "flex flex-wrap justify-center mt-2", 4, "ngIf", "ngIfElse"], ["no_events", ""], [1, "my-2", "mx-auto", 3, "event", "featured"], ["class", "flex items-center justify-center w-full h-48 bg-base-300 rounded-xl", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "w-full", "h-48", "bg-base-300", "rounded-xl"], [1, "opacity-30"], [1, "flex", "flex-wrap", "justify-center", "mt-2"], ["class", "m-2", 3, "event", 4, "ngFor", "ngForOf"], [1, "m-2", 3, "event"], [1, "flex", "items-center", "justify-center", "w-full", "h-48"]],
    template: function GroupEventsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "group-events-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, GroupEventsComponent_group_event_card_4_Template, 2, 4, "group-event-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, GroupEventsComponent_ng_template_6_Template, 2, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"])(8, GroupEventsComponent_div_8_Template, 3, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, GroupEventsComponent_ng_template_10_Template, 3, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "footer-menu");
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](7);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](11);
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 4, ctx.featured))("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 6, ctx.event_list)) == null ? null : tmp_2_0.length)("ngIfElse", _r5);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _components_topbar_component__WEBPACK_IMPORTED_MODULE_2__.TopbarComponent, _components_footer_menu_component__WEBPACK_IMPORTED_MODULE_3__.FooterMenuComponent, _group_events_sidebar_component__WEBPACK_IMPORTED_MODULE_4__.GroupEventsSidebarComponent, _group_event_card_component__WEBPACK_IMPORTED_MODULE_5__.GroupEventCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n                position: absolute;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                overflow: hidden;\n                display: flex;\n                flex-direction: column;\n            }\n\n            main[_ngcontent-%COMP%] {\n                min-height: 50%;\n            }\n\n            .top[_ngcontent-%COMP%] {\n                background-color: #007ac8;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd29ya3BsYWNlL3NyYy9hcHAvZXZlbnRzL2dyb3VwLWV2ZW50cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGtCQUFrQjtnQkFDbEIsTUFBTTtnQkFDTixPQUFPO2dCQUNQLFFBQVE7Z0JBQ1IsU0FBUztnQkFDVCxnQkFBZ0I7Z0JBQ2hCLGFBQWE7Z0JBQ2Isc0JBQXNCO1lBQzFCOztZQUVBO2dCQUNJLGVBQWU7WUFDbkI7O1lBRUE7Z0JBQ0kseUJBQXlCO1lBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudG9wIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YWM4O1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 5272:
/*!**************************************************************!*\
  !*** ./apps/workplace/src/app/events/group-events.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupEventsModule: () => (/* binding */ GroupEventsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _placeos_form_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/form-fields */ 39304);
/* harmony import */ var _group_events_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group-events.component */ 98746);
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared.module */ 93053);
/* harmony import */ var _group_events_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./group-events-sidebar.component */ 79040);
/* harmony import */ var _group_event_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./group-event-card.component */ 30244);
/* harmony import */ var _group_event_details_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./group-event-details-modal.component */ 23150);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);











const ROUTES = [{
  path: '',
  component: _group_events_component__WEBPACK_IMPORTED_MODULE_1__.GroupEventsComponent
}];
class GroupEventsModule {
  static #_ = this.ɵfac = function GroupEventsModule_Factory(t) {
    return new (t || GroupEventsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: GroupEventsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentModule, _placeos_form_fields__WEBPACK_IMPORTED_MODULE_0__.FormFieldsModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(ROUTES)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](GroupEventsModule, {
    declarations: [_group_events_component__WEBPACK_IMPORTED_MODULE_1__.GroupEventsComponent, _group_events_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.GroupEventsSidebarComponent, _group_event_card_component__WEBPACK_IMPORTED_MODULE_4__.GroupEventCardComponent, _group_event_details_modal_component__WEBPACK_IMPORTED_MODULE_5__.GroupEventDetailsModalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponentModule, _placeos_form_fields__WEBPACK_IMPORTED_MODULE_0__.FormFieldsModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=apps_workplace_src_app_events_group-events_module_ts.js.map