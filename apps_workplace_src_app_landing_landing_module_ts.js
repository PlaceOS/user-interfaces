"use strict";
(self["webpackChunkworkplace"] = self["webpackChunkworkplace"] || []).push([["apps_workplace_src_app_landing_landing_module_ts"],{

/***/ 7704:
/*!**************************************************************************!*\
  !*** ./apps/workplace/src/app/landing/landing-availability.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingAvailabilityComponent": () => (/* binding */ LandingAvailabilityComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 88397);
/* harmony import */ var _placeos_explore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/explore */ 57064);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 6221);
/* harmony import */ var _landing_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing-state.service */ 24576);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 65306);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ 15312);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _libs_spaces_src_lib_space_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/spaces/src/lib/space.pipe */ 96198);
















function LandingAvailabilityComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "WPA.AVAILABLE_NOW"), " ");
  }
}
function LandingAvailabilityComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 1, "WPA.SPACES"));
  }
}
function LandingAvailabilityComponent_div_3_button_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 18);
  }
  if (rf & 2) {
    const lvl_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", lvl_r9 == null ? null : lvl_r9.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function LandingAvailabilityComponent_div_3_button_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 19);
  }
}
const _c0 = function () {
  return ["/explore"];
};
const _c1 = function (a0) {
  return {
    level: a0
  };
};
function LandingAvailabilityComponent_div_3_button_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, LandingAvailabilityComponent_div_3_button_1_img_2_Template, 1, 1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, LandingAvailabilityComponent_div_3_button_1_ng_template_3_Template, 1, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 14)(6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 16)(9, "app-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "place");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const lvl_r9 = ctx.$implicit;
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](4);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    let tmp_5_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](7, _c1, lvl_r9.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", lvl_r9 == null ? null : lvl_r9.images == null ? null : lvl_r9.images.length)("ngIfElse", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", lvl_r9.display_name || lvl_r9.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](((tmp_5_0 = ctx_r7.building(lvl_r9.parent_id)) == null ? null : tmp_5_0.display_name) || ((tmp_5_0 = ctx_r7.building(lvl_r9.parent_id)) == null ? null : tmp_5_0.name));
  }
}
function LandingAvailabilityComponent_div_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "WPA.NO_FREE_SPACES"), " ");
  }
}
function LandingAvailabilityComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, LandingAvailabilityComponent_div_3_button_1_Template, 13, 9, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, LandingAvailabilityComponent_div_3_span_3_Template, 3, 3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, ctx_r2.levels_free));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 4, ctx_r2.levels_free).length);
  }
}
function LandingAvailabilityComponent_div_4_mat_spinner_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-spinner", 22);
  }
}
function LandingAvailabilityComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, LandingAvailabilityComponent_div_4_mat_spinner_4_Template, 1, 0, "mat-spinner", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, "WPA.ROOMS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 4, ctx_r3.loading_spaces));
  }
}
function LandingAvailabilityComponent_div_5_button_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "space");
  }
  if (rf & 2) {
    const space_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 3, space_r17.id))) == null ? null : tmp_0_0.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function LandingAvailabilityComponent_div_5_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LandingAvailabilityComponent_div_5_button_1_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21);
      const space_r17 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r20.book(space_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, LandingAvailabilityComponent_div_5_button_1_img_2_Template, 3, 5, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "space");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 14)(6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 16)(9, "app-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "place");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const space_r17 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](7);
    let tmp_0_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 6, space_r17.id))) == null ? null : tmp_0_0.images == null ? null : tmp_0_0.images.length)("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", space_r17.display_name || space_r17.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](((tmp_3_0 = ctx_r15.level(space_r17.zones)) == null ? null : tmp_3_0.display_name) || ((tmp_3_0 = ctx_r15.level(space_r17.zones)) == null ? null : tmp_3_0.name));
  }
}
function LandingAvailabilityComponent_div_5_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "WPA.NO_FREE_ROOMS"), " ");
  }
}
function LandingAvailabilityComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, LandingAvailabilityComponent_div_5_button_1_Template, 13, 8, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, LandingAvailabilityComponent_div_5_span_3_Template, 3, 3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 3, ctx_r4.space_list))("ngForTrackBy", ctx_r4.trackBySpaceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 5, ctx_r4.space_list)) == null ? null : tmp_2_0.length));
  }
}
function LandingAvailabilityComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 26);
  }
}
class LandingAvailabilityComponent {
  trackBySpaceId(index, space) {
    return space.id;
  }
  level(zones) {
    return this._org.levelWithID(zones);
  }
  building(id) {
    return this._org.buildings.find(bld => bld.id === id);
  }
  get hide_spaces() {
    return this._settings.get('app.general.hide_spaces');
  }
  get hide_rooms() {
    return this._settings.get('app.general.hide_rooms');
  }
  constructor(_state, _org, _settings, _explore) {
    this._state = _state;
    this._org = _org;
    this._settings = _settings;
    this._explore = _explore;
    this.space_list = this._state.free_space_list;
    this.loading_spaces = this._state.loading_spaces;
    this.levels_free = this._state.level_occupancy;
    this.book = s => this._explore.bookSpace(s);
  }
}
LandingAvailabilityComponent.ɵfac = function LandingAvailabilityComponent_Factory(t) {
  return new (t || LandingAvailabilityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_landing_state_service__WEBPACK_IMPORTED_MODULE_3__.LandingStateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_explore__WEBPACK_IMPORTED_MODULE_1__.ExploreSpacesService));
};
LandingAvailabilityComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: LandingAvailabilityComponent,
  selectors: [["landing-availability"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([_placeos_explore__WEBPACK_IMPORTED_MODULE_1__.ExploreSpacesService])],
  decls: 8,
  vars: 5,
  consts: [[1, "py-2"], ["class", "sm:text-lg font-medium mb-2 sm:mb-4 px-4", 4, "ngIf"], ["class", "flex items-center text-sm sm:text-base px-4 space-x-2", 4, "ngIf"], ["class", "w-full overflow-auto flex items-center space-x-4 px-4 py-2", 4, "ngIf"], ["space_placeholder", ""], [1, "sm:text-lg", "font-medium", "mb-2", "sm:mb-4", "px-4"], [1, "flex", "items-center", "text-sm", "sm:text-base", "px-4", "space-x-2"], [1, "w-full", "overflow-auto", "flex", "items-center", "space-x-4", "px-4", "py-2"], ["name", "landing-view-space", "matRipple", "", "class", "flex items-center h-24 min-w-[12.5rem] rounded-lg bg-white dark:bg-[#1F2021] shadow p-4 space-x-2", 3, "routerLink", "queryParams", 4, "ngFor", "ngForOf"], ["class", "opacity-60 text-sm mb-2", 4, "ngIf"], ["name", "landing-view-space", "matRipple", "", 1, "flex", "items-center", "h-24", "min-w-[12.5rem]", "rounded-lg", "bg-white", "dark:bg-[#1F2021]", "shadow", "p-4", "space-x-2", 3, "routerLink", "queryParams"], [1, "min-w-[4.5rem]", "h-[4.5rem]", "rounded", "bg-gray-200", "dark:bg-neutral-800", "flex", "items-center", "justify-center"], ["class", "min-h-full object-cover", 3, "src", 4, "ngIf", "ngIfElse"], ["placeholder", ""], [1, "text-left"], [1, "max-w-full", "truncate", "px-1.5"], [1, "max-w-full", "truncate", "text-sm", "opacity-60", "flex", "items-center"], [1, "text-blue-500", "text-lg"], [1, "min-h-full", "object-cover", 3, "src"], ["src", "assets/icons/desk-placeholder.svg", 1, "m-auto"], [1, "opacity-60", "text-sm", "mb-2"], ["diameter", "24", 4, "ngIf"], ["diameter", "24"], ["name", "landing-book-room", "matRipple", "", "class", "flex items-center h-24 min-w-[12.5rem] rounded-lg bg-white dark:bg-[#1F2021] shadow p-4 space-x-2", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["name", "landing-book-room", "matRipple", "", 1, "flex", "items-center", "h-24", "min-w-[12.5rem]", "rounded-lg", "bg-white", "dark:bg-[#1F2021]", "shadow", "p-4", "space-x-2", 3, "click"], [1, "w-[4.5rem]", "h-[4.5rem]", "rounded", "bg-gray-200", "dark:bg-neutral-800", "overflow-hidden", "flex", "items-center", "justify-center"], ["src", "assets/icons/room-placeholder.svg", 1, "m-auto"]],
  template: function LandingAvailabilityComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, LandingAvailabilityComponent_div_1_Template, 3, 3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, LandingAvailabilityComponent_div_2_Template, 4, 3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, LandingAvailabilityComponent_div_3_Template, 5, 6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, LandingAvailabilityComponent_div_4_Template, 6, 6, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, LandingAvailabilityComponent_div_5_Template, 5, 7, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, LandingAvailabilityComponent_ng_template_6_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.hide_rooms || !ctx.hide_spaces);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.hide_spaces);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.hide_spaces);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.hide_rooms);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.hide_rooms);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinner, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe, _libs_spaces_src_lib_space_pipe__WEBPACK_IMPORTED_MODULE_5__.SpacePipe],
  styles: ["*[_ngcontent-%COMP%] {\n                flex-shrink: 0;\n            }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmctYXZhaWxhYmlsaXR5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksY0FBYztZQUNsQiIsImZpbGUiOiJsYW5kaW5nLWF2YWlsYWJpbGl0eS5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgICoge1xuICAgICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd29ya3BsYWNlL3NyYy9hcHAvbGFuZGluZy9sYW5kaW5nLWF2YWlsYWJpbGl0eS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGNBQWM7WUFDbEI7O0FBRVosZ1lBQWdZIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICAqIHtcbiAgICAgICAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 17373:
/*!************************************************************************!*\
  !*** ./apps/workplace/src/app/landing/landing-colleagues.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingColleaguesComponent": () => (/* binding */ LandingColleaguesComponent)
/* harmony export */ });
/* harmony import */ var _Users_yuion_Documents_work_repos_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 88397);
/* harmony import */ var _placeos_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/events */ 27288);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _landing_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing-state.service */ 24576);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 65306);
/* harmony import */ var _libs_components_src_lib_user_avatar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/user-avatar.component */ 99685);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ 89314);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ 15312);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 52423);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 38699);






















const _c0 = ["search_input"];
function LandingColleaguesComponent_ng_container_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15)(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "a-user-avatar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 18)(4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 22)(11, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-menu", 23, 24)(15, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LandingColleaguesComponent_ng_container_6_div_1_Template_button_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      const user_r10 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r12.newMeeting(user_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "app-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "today");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LandingColleaguesComponent_ng_container_6_div_1_Template_button_click_21_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      const user_r10 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r14.removeUser(user_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "app-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const user_r10 = ctx.$implicit;
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("user", user_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matTooltip", user_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", user_r10.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matTooltip", user_r10.organisation);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", user_r10.organisation, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", user_r10.location, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matMenuTriggerFor", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](20, 9, "WPA.CREATE_MEETING"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](26, 11, "WPA.REMOVE_COLLEAGUE"));
  }
}
function LandingColleaguesComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, LandingColleaguesComponent_ng_container_6_div_1_Template, 27, 13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, ctx_r0.contacts));
  }
}
function LandingColleaguesComponent_div_18_ng_container_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LandingColleaguesComponent_div_18_ng_container_1_button_1_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19);
      const user_r17 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r18.addUser(user_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "a-user-avatar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 32)(4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const user_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("user", user_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](user_r17.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", user_r17.organisation, " ");
  }
}
function LandingColleaguesComponent_div_18_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, LandingColleaguesComponent_div_18_ng_container_1_button_1_Template, 8, 3, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, ctx_r15.search_results));
  }
}
function LandingColleaguesComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, LandingColleaguesComponent_div_18_ng_container_1_Template, 3, 3, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](23);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, ctx_r2.search_results)) == null ? null : tmp_0_0.length)("ngIfElse", _r5);
  }
}
function LandingColleaguesComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](3, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 1, "WPA.COLLEAGUES_EMPTY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18nApply"](3);
  }
}
function LandingColleaguesComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 35)(1, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", !((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 1, ctx_r6.options)) == null ? null : tmp_0_0.search) ? "Start typing to search for users." : "Unable for find any users matching \"" + ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 3, ctx_r6.options)) == null ? null : tmp_0_0.search) + "\"", " ");
  }
}
function LandingColleaguesComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-spinner", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 1, "WPA.COLLEAGUES_SEARCHING"), " ");
  }
}
class LandingColleaguesComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  constructor(_state, _settings, _event_form, _router) {
    var _this;
    super();
    _this = this;
    this._state = _state;
    this._settings = _settings;
    this._event_form = _event_form;
    this._router = _router;
    this.show_search = false;
    this.contacts = this._state.contacts;
    this.search_results = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([this._state.search_results, this._state.contacts]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([list, contacts]) => list.filter(_ => !contacts.find(user => user.id === _.id || user.email === _.email))));
    this.options = this._state.options;
    this.loading = this._state.loading;
    this.addUser = /*#__PURE__*/function () {
      var _ref = (0,_Users_yuion_Documents_work_repos_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (u) {
        yield _this._state.addContact(u);
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)(`Successfully added "${u.name}" to contacts`);
        _this.show_search = false;
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
    this.removeUser = /*#__PURE__*/function () {
      var _ref2 = (0,_Users_yuion_Documents_work_repos_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (u) {
        yield _this._state.removeContact(u);
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)(`Successfully removed "${u.name}" from contacts`);
      });
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();
    this.updateSearch = s => this._state.setOptions({
      search: s
    });
  }
  newMeeting(user) {
    this._event_form.newForm();
    this._event_form.form.patchValue({
      attendees: [user]
    });
    if (this._settings.get('app.new_features')) {
      this._router.navigate(['/book', 'meeting']);
    } else {
      this._router.navigate(['/book', 'spaces']);
    }
  }
  openSearch() {
    this.updateSearch('');
    this.show_search = true;
    this.timeout('open', () => this._input_el.nativeElement.focus(), 100);
  }
}
LandingColleaguesComponent.ɵfac = function LandingColleaguesComponent_Factory(t) {
  return new (t || LandingColleaguesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_landing_state_service__WEBPACK_IMPORTED_MODULE_3__.LandingStateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_placeos_events__WEBPACK_IMPORTED_MODULE_2__.EventFormService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
};
LandingColleaguesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: LandingColleaguesComponent,
  selectors: [["landing-colleagues"]],
  viewQuery: function LandingColleaguesComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx._input_el = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
  decls: 26,
  vars: 22,
  consts: function () {
    let i18n_2;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_3604407389403754414$$_______________USERS_YUION_DOCUMENTS_WORK_REPOS_USER_INTERFACES_APPS_WORKPLACE_SRC_APP_LANDING_LANDING_COLLEAGUES_COMPONENT_TS_3 = goog.getMsg("{VAR_PLURAL, plural, =1 {Person } other {People }}");
      i18n_2 = MSG_EXTERNAL_3604407389403754414$$_______________USERS_YUION_DOCUMENTS_WORK_REPOS_USER_INTERFACES_APPS_WORKPLACE_SRC_APP_LANDING_LANDING_COLLEAGUES_COMPONENT_TS_3;
    } else {
      i18n_2 = $localize`:␟c0f95f99e44be18320d55d7ea3b39d521c5e847f␟3604407389403754414:{VAR_PLURAL, plural, =1 {Person } other {People }}`;
    }
    i18n_2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18nPostprocess"](i18n_2, {
      "VAR_PLURAL": "\uFFFD1\uFFFD"
    });
    let i18n_1;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_6964084933612300643$$_______________USERS_YUION_DOCUMENTS_WORK_REPOS_USER_INTERFACES_APPS_WORKPLACE_SRC_APP_LANDING_LANDING_COLLEAGUES_COMPONENT_TS_4 = goog.getMsg(" {$interpolation} {$icu} ", {
        "interpolation": "\uFFFD0\uFFFD",
        "icu": i18n_2
      }, {
        original_code: {
          "interpolation": "{{ (contacts | async)?.length || 0 }}",
          "icu": "{ (contacts |\n                async)?.length, plural, =1 { Person } other { People } }"
        }
      });
      i18n_1 = MSG_EXTERNAL_6964084933612300643$$_______________USERS_YUION_DOCUMENTS_WORK_REPOS_USER_INTERFACES_APPS_WORKPLACE_SRC_APP_LANDING_LANDING_COLLEAGUES_COMPONENT_TS_4;
    } else {
      i18n_1 = $localize`:␟df63d46581a56aeb689b521513ff65c896b6c618␟6964084933612300643: ${"\uFFFD0\uFFFD"}:INTERPOLATION: ${i18n_2}:ICU: `;
    }
    let i18n_5;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_5990245187139880203$$_______________USERS_YUION_DOCUMENTS_WORK_REPOS_USER_INTERFACES_APPS_WORKPLACE_SRC_APP_LANDING_LANDING_COLLEAGUES_COMPONENT_TS__6 = goog.getMsg(" {$interpolation} ", {
        "interpolation": "\uFFFD0\uFFFD"
      }, {
        original_code: {
          "interpolation": "{{ 'WPA.COLLEAGUES_EMPTY' | translate }}"
        }
      });
      i18n_5 = MSG_EXTERNAL_5990245187139880203$$_______________USERS_YUION_DOCUMENTS_WORK_REPOS_USER_INTERFACES_APPS_WORKPLACE_SRC_APP_LANDING_LANDING_COLLEAGUES_COMPONENT_TS__6;
    } else {
      i18n_5 = $localize`:␟082b183958aaf6c9cda3dd1caba0bb3821480348␟5990245187139880203: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
    }
    return [[1, "flex", "items-center", "justify-between", "py-2", "mx-2", "border-b", "border-gray-200"], [1, "mx-2"], i18n_1, [1, "flex-1", "h-1/2", "w-full", "space-y-4", "overflow-auto", "pt-4"], [4, "ngIf", "ngIfElse"], ["btn", "", "name", "open-colleague-search", "matRipple", "", 1, "inverse", "w-[calc(100%-1rem)]", "m-2", 3, "click"], ["search", "", 1, "absolute", "inset-x-2", "top-2", "bottom-[3.5rem]", "rounded-lg", "overflow-hidden", "flex", "flex-col", "bg-white", "dark:bg-neutral-600", "shadow", "border", "border-gray-200"], ["placeholder", "Search for users...", 1, "w-full", "border-b", "border-gray-200", "p-2", "rounded-t-lg", 3, "ngModel", "ngModelChange"], ["search_input", ""], ["icon", "", "name", "close-colleague-search", 1, "absolute", "top-0", "right-0", 3, "click"], ["class", "overflow-auto flex-1 h-1/2 flex flex-col space-y-2", 4, "ngIf", "ngIfElse"], ["empty_state", ""], ["search_empty", ""], ["load_state", ""], ["class", "flex items-center px-2 space-x-2 relative", "user", "", 4, "ngFor", "ngForOf"], ["user", "", 1, "flex", "items-center", "px-2", "space-x-2", "relative"], [1, "text-xl", "relative"], [3, "user"], [1, "leading-tight", "flex-1", "w-1/2"], [1, "truncate", 3, "matTooltip"], [1, "text-sm", "truncate", 3, "matTooltip"], [1, "text-xs", "opacity-60", "truncate"], ["icon", "", "name", "colleague-more", 1, "!rounded", "bg-gray-300", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["menu", "matMenu"], ["mat-menu-item", "", "name", "meeting-with-colleague", 1, "flex", "items-center", "space-x-2", 3, "click"], [1, "text-2xl"], ["name", "remove-colleague", "mat-menu-item", "", 1, "flex", "items-center", "space-x-2", 3, "click"], [1, "overflow-auto", "flex-1", "h-1/2", "flex", "flex-col", "space-y-2"], ["matRipple", "", "name", "add-colleague", "class", "flex items-center p-2 space-x-2 w-full text-left", 3, "click", 4, "ngFor", "ngForOf"], ["matRipple", "", "name", "add-colleague", 1, "flex", "items-center", "p-2", "space-x-2", "w-full", "text-left", 3, "click"], [1, "text-base", "relative"], [1, "leading-tight"], [1, "truncate"], [1, "text-sm", "truncate"], [1, "w-full", "h-full", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], ["src", "assets/icons/no-contacts.svg"], [1, "opacity-60", "text-sm", "text-center"], i18n_5, ["diameter", "32"]];
  },
  template: function LandingColleaguesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](2, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, LandingColleaguesComponent_ng_container_6_Template, 3, 3, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LandingColleaguesComponent_Template_button_click_8_listener() {
        return ctx.openSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 6)(12, "input", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function LandingColleaguesComponent_Template_input_ngModelChange_12_listener($event) {
        return ctx.updateSearch($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LandingColleaguesComponent_Template_button_click_15_listener() {
        return ctx.show_search = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "app-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, LandingColleaguesComponent_div_18_Template, 3, 4, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](19, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, LandingColleaguesComponent_ng_template_20_Template, 5, 3, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, LandingColleaguesComponent_ng_template_22_Template, 5, 5, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, LandingColleaguesComponent_ng_template_24_Template, 5, 3, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](21);
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](25);
      let tmp_0_0;
      let tmp_1_0;
      let tmp_2_0;
      let tmp_6_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18nExp"](((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 10, ctx.contacts)) == null ? null : tmp_0_0.length) || 0)((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 12, ctx.contacts)) == null ? null : tmp_1_0.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18nApply"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 14, ctx.contacts)) == null ? null : tmp_2_0.length)("ngIfElse", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 16, "WPA.ADD"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("hidden", !ctx.show_search);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](14, 18, ctx.options)) == null ? null : tmp_6_0.search);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](19, 20, ctx.loading))("ngIfElse", _r7);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent, _libs_components_src_lib_user_avatar_component__WEBPACK_IMPORTED_MODULE_5__.UserAvatarComponent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatRipple, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinner, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe],
  styles: ["[user][_ngcontent-%COMP%]:hover button {\n                opacity: 1;\n            }\n\n            [_nghost-%COMP%] {\n                height: 100%;\n                width: 100%;\n                display: flex;\n                flex-direction: column;\n            }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmctY29sbGVhZ3Vlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLFVBQVU7WUFDZDs7WUFFQTtnQkFDSSxZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsYUFBYTtnQkFDYixzQkFBc0I7WUFDMUIiLCJmaWxlIjoibGFuZGluZy1jb2xsZWFndWVzLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgW3VzZXJdOmhvdmVyIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG4gICAgICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd29ya3BsYWNlL3NyYy9hcHAvbGFuZGluZy9sYW5kaW5nLWNvbGxlYWd1ZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxVQUFVO1lBQ2Q7O1lBRUE7Z0JBQ0ksWUFBWTtnQkFDWixXQUFXO2dCQUNYLGFBQWE7Z0JBQ2Isc0JBQXNCO1lBQzFCOztBQUVaLGdzQkFBZ3NCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICBbdXNlcl06aG92ZXIgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 90184:
/*!************************************************************************!*\
  !*** ./apps/workplace/src/app/landing/landing-favourites.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingFavouritesComponent": () => (/* binding */ LandingFavouritesComponent)
/* harmony export */ });
/* harmony import */ var _Users_yuion_Documents_work_repos_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/bookings */ 56917);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 88397);
/* harmony import */ var _placeos_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/events */ 27288);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/organisation */ 6221);
/* harmony import */ var libs_bookings_src_lib_desk_select_modal_desk_select_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! libs/bookings/src/lib/desk-select-modal/desk-select-modal.component */ 56485);
/* harmony import */ var libs_spaces_src_lib_space_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/spaces/src/lib/space.pipe */ 96198);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 79128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 65306);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 89314);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 38699);























function LandingFavouritesComponent_ng_container_4_div_1_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "space");
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 3, item_r5))) == null ? null : tmp_0_0.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
function LandingFavouritesComponent_ng_container_4_div_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 25);
  }
}
function LandingFavouritesComponent_ng_container_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, LandingFavouritesComponent_ng_container_4_div_1_img_3_Template, 3, 5, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "space");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, LandingFavouritesComponent_ng_container_4_div_1_ng_template_6_Template, 1, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 12)(9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "space");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "space");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 14)(16, "app-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "place");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](20, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](21, "space");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 16)(23, "app-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](26, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](27, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](28, "space");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](29, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](30, "space");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function LandingFavouritesComponent_ng_container_4_div_1_Template_button_click_31_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r11.newSpaceMeeting(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "button", 19)(35, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "mat-menu", 20, 21)(39, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function LandingFavouritesComponent_ng_container_4_div_1_Template_button_click_39_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r13.toggleFavourite("space", item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "app-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](7);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](38);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    let tmp_0_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 9, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 11, item_r5))) == null ? null : tmp_0_0.images == null ? null : tmp_0_0.images.length)("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 13, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 15, item_r5))) == null ? null : tmp_2_0.display_name) || ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 17, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](14, 19, item_r5))) == null ? null : tmp_2_0.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (tmp_3_0 = ctx_r3.level(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](20, 21, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](21, 23, item_r5)))) == null ? null : tmp_3_0.display_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nExp"](((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](27, 25, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](28, 27, item_r5))) == null ? null : tmp_4_0.capacity) || 2)(((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](29, 29, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](30, 31, item_r5))) == null ? null : tmp_5_0.capacity) || 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nApply"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](33, 33, "WPA.BOOK"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matMenuTriggerFor", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](44, 35, "WPA.FAVOURITES_REMOVE"));
  }
}
function LandingFavouritesComponent_ng_container_4_div_2_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 24);
  }
  if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", item_r14 == null ? null : item_r14.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
function LandingFavouritesComponent_ng_container_4_div_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 30);
  }
  if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", "assets/icons/" + (item_r14.type === "desk" ? "desk" : "car") + "-placeholder.svg", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
function LandingFavouritesComponent_ng_container_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, LandingFavouritesComponent_ng_container_4_div_2_img_3_Template, 1, 1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, LandingFavouritesComponent_ng_container_4_div_2_ng_template_4_Template, 1, 1, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 27)(7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 14)(10, "app-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "place");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function LandingFavouritesComponent_ng_container_4_div_2_Template_button_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r22);
      const item_r14 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r21.newBooking(item_r14.type, item_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](15, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "button", 19)(18, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "mat-menu", 20, 21)(22, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function LandingFavouritesComponent_ng_container_4_div_2_Template_button_click_22_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r22);
      const item_r14 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r23.toggleFavourite(item_r14.type, item_r14.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "app-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](5);
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r14 == null ? null : item_r14.images == null ? null : item_r14.images.length)("ngIfElse", _r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (item_r14 == null ? null : item_r14.display_name) || (item_r14 == null ? null : item_r14.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r14 == null ? null : item_r14.zone == null ? null : item_r14.zone.display_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](16, 7, "WPA.BOOK"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nApply"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matMenuTriggerFor", _r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](27, 9, "WPA.FAVOURITES_REMOVE"));
  }
}
function LandingFavouritesComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, LandingFavouritesComponent_ng_container_4_div_1_Template, 45, 37, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, LandingFavouritesComponent_ng_container_4_div_2_Template, 28, 11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.spaces);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, ctx_r0.assets));
  }
}
function LandingFavouritesComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 1, "WPA.FAVOURITES_EMPTY"), " ");
  }
}
const EMPTY = [];
class LandingFavouritesComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_2__.AsyncHandler {
  get spaces() {
    return this._settings.get('favourite_spaces') || EMPTY;
  }
  get desks() {
    return this._settings.get(libs_bookings_src_lib_desk_select_modal_desk_select_modal_component__WEBPACK_IMPORTED_MODULE_5__.FAV_DESK_KEY) || EMPTY;
  }
  get parking_spaces() {
    return this._settings.get(_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.FAV_PARKING_KEY) || EMPTY;
  }
  level(space) {
    return this._org.levelWithID(space?.zones || []);
  }
  constructor(_org, _settings, _space_pipe, _event_form, _booking_form, _router) {
    super();
    this._org = _org;
    this._settings = _settings;
    this._space_pipe = _space_pipe;
    this._event_form = _event_form;
    this._booking_form = _booking_form;
    this._router = _router;
    this.assets = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this._booking_form.loadResourceList('desks'), this._booking_form.loadResourceList('parking-spaces')]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([desks, parking]) => {
      return [...desks.filter(({
        id
      }) => this.desks.includes(id)).map(_ => ({
        ..._,
        type: 'desk'
      })), ...parking.filter(({
        id
      }) => this.parking_spaces.includes(id)).map(_ => ({
        ..._,
        type: 'parking'
      }))];
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.shareReplay)(1));
  }
  ngOnInit() {}
  toggleFavourite(type, id) {
    let fav_list = this.spaces;
    let key = 'favourite_spaces';
    switch (type) {
      case 'desk':
        fav_list = this.desks;
        key = libs_bookings_src_lib_desk_select_modal_desk_select_modal_component__WEBPACK_IMPORTED_MODULE_5__.FAV_DESK_KEY;
        break;
      case 'parking':
        fav_list = this.parking_spaces;
        key = _placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.FAV_PARKING_KEY;
        break;
    }
    const new_state = !fav_list.includes(id);
    if (new_state) {
      this._settings.saveUserSetting(key, [...fav_list, id]);
    } else {
      this._settings.saveUserSetting(key, fav_list.filter(_ => _ !== id));
    }
  }
  newSpaceMeeting(id) {
    var _this = this;
    return (0,_Users_yuion_Documents_work_repos_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const space = yield _this._space_pipe.transform(id);
      if (!space) return;
      _this._event_form.newForm();
      _this._event_form.form.patchValue({
        resources: [space]
      });
      if (_this._settings.get('app.new_features')) {
        _this._router.navigate(['/book', 'meeting']);
      } else {
        _this._router.navigate(['/book', 'spaces']);
      }
    })();
  }
  newBooking(type, id) {
    var _this2 = this;
    return (0,_Users_yuion_Documents_work_repos_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!id) return;
      _this2._booking_form.newForm();
      _this2._booking_form.setOptions({
        type
      });
      _this2._booking_form.form.patchValue({
        asset_id: id,
        booking_type: type
      });
      if (_this2._settings.get('app.new_features')) {
        _this2._router.navigate(['/book', type === 'desk' ? 'new-desks' : 'new-parking']);
      } else {
        _this2._router.navigate(['/book', type === 'desk' ? 'desks' : 'parking']);
      }
    })();
  }
}
LandingFavouritesComponent.ɵfac = function LandingFavouritesComponent_Factory(t) {
  return new (t || LandingFavouritesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_4__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](libs_spaces_src_lib_space_pipe__WEBPACK_IMPORTED_MODULE_6__.SpacePipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_placeos_events__WEBPACK_IMPORTED_MODULE_3__.EventFormService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.BookingFormService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router));
};
LandingFavouritesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: LandingFavouritesComponent,
  selectors: [["landing-favourites"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([libs_spaces_src_lib_space_pipe__WEBPACK_IMPORTED_MODULE_6__.SpacePipe]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
  decls: 8,
  vars: 6,
  consts: function () {
    let i18n_1;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_8885797130863755638$$_______________USERS_YUION_DOCUMENTS_WORK_REPOS_USER_INTERFACES_APPS_WORKPLACE_SRC_APP_LANDING_LANDING_FAVOURITES_COMPONENT_TS_2 = goog.getMsg("{VAR_PLURAL, plural, =1 {Resource } other {Resources }}");
      i18n_1 = MSG_EXTERNAL_8885797130863755638$$_______________USERS_YUION_DOCUMENTS_WORK_REPOS_USER_INTERFACES_APPS_WORKPLACE_SRC_APP_LANDING_LANDING_FAVOURITES_COMPONENT_TS_2;
    } else {
      i18n_1 = $localize`:␟e5191f926bd1e4e3a04904f3ed70be128d0df68e␟8885797130863755638:{VAR_PLURAL, plural, =1 {Resource } other {Resources }}`;
    }
    i18n_1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nPostprocess"](i18n_1, {
      "VAR_PLURAL": "\uFFFD1\uFFFD"
    });
    let i18n_0;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_1802740986701741685$$_______________USERS_YUION_DOCUMENTS_WORK_REPOS_USER_INTERFACES_APPS_WORKPLACE_SRC_APP_LANDING_LANDING_FAVOURITES_COMPONENT_TS_3 = goog.getMsg(" {$interpolation} {$icu} ", {
        "interpolation": "\uFFFD0\uFFFD",
        "icu": i18n_1
      }, {
        original_code: {
          "interpolation": "{{ spaces?.length || 0 }}",
          "icu": "{ spaces?.length, plural, =1 {\n                Resource } other { Resources } }"
        }
      });
      i18n_0 = MSG_EXTERNAL_1802740986701741685$$_______________USERS_YUION_DOCUMENTS_WORK_REPOS_USER_INTERFACES_APPS_WORKPLACE_SRC_APP_LANDING_LANDING_FAVOURITES_COMPONENT_TS_3;
    } else {
      i18n_0 = $localize`:␟9cfeafbe7fccbc1ea0e77b117ee30a235d3fbcbb␟1802740986701741685: ${"\uFFFD0\uFFFD"}:INTERPOLATION: ${i18n_1}:ICU: `;
    }
    let i18n_5;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_3604407389403754414$$_______________USERS_YUION_DOCUMENTS_WORK_REPOS_USER_INTERFACES_APPS_WORKPLACE_SRC_APP_LANDING_LANDING_FAVOURITES_COMPONENT_TS___6 = goog.getMsg("{VAR_PLURAL, plural, =1 {Person } other {People }}");
      i18n_5 = MSG_EXTERNAL_3604407389403754414$$_______________USERS_YUION_DOCUMENTS_WORK_REPOS_USER_INTERFACES_APPS_WORKPLACE_SRC_APP_LANDING_LANDING_FAVOURITES_COMPONENT_TS___6;
    } else {
      i18n_5 = $localize`:␟292b0c8f5459f832824fbde4939054e5d313cfac␟3604407389403754414:{VAR_PLURAL, plural, =1 {Person } other {People }}`;
    }
    i18n_5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nPostprocess"](i18n_5, {
      "VAR_PLURAL": "\uFFFD1\uFFFD"
    });
    let i18n_4;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_5508454923022029915$$_______________USERS_YUION_DOCUMENTS_WORK_REPOS_USER_INTERFACES_APPS_WORKPLACE_SRC_APP_LANDING_LANDING_FAVOURITES_COMPONENT_TS___7 = goog.getMsg(" {$interpolation} {$icu} ", {
        "interpolation": "\uFFFD0\uFFFD",
        "icu": i18n_5
      }, {
        original_code: {
          "interpolation": "{{ (item | space | async)?.capacity || 2 }}",
          "icu": "{ (item | space | async)?.capacity || 2,\n                                    plural, =1 { Person } other { People } }"
        }
      });
      i18n_4 = MSG_EXTERNAL_5508454923022029915$$_______________USERS_YUION_DOCUMENTS_WORK_REPOS_USER_INTERFACES_APPS_WORKPLACE_SRC_APP_LANDING_LANDING_FAVOURITES_COMPONENT_TS___7;
    } else {
      i18n_4 = $localize`:␟3debb02c945d77818d916bf21e734def0311a492␟5508454923022029915: ${"\uFFFD0\uFFFD"}:INTERPOLATION: ${i18n_5}:ICU: `;
    }
    let i18n_8;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      /**
       * @suppress {msgDescriptions}
       */
      const MSG_EXTERNAL_8490385903680845804$$_______________USERS_YUION_DOCUMENTS_WORK_REPOS_USER_INTERFACES_APPS_WORKPLACE_SRC_APP_LANDING_LANDING_FAVOURITES_COMPONENT_TS___9 = goog.getMsg(" {$interpolation} ", {
        "interpolation": "\uFFFD0\uFFFD"
      }, {
        original_code: {
          "interpolation": "{{ 'WPA.BOOK' | translate }}"
        }
      });
      i18n_8 = MSG_EXTERNAL_8490385903680845804$$_______________USERS_YUION_DOCUMENTS_WORK_REPOS_USER_INTERFACES_APPS_WORKPLACE_SRC_APP_LANDING_LANDING_FAVOURITES_COMPONENT_TS___9;
    } else {
      i18n_8 = $localize`:␟477a2990dc9e7a47c36b57d54f8150408a0c309b␟8490385903680845804: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
    }
    return [[1, "flex", "items-center", "justify-between", "py-2", "mx-2", "border-b", "border-gray-200"], [1, "mx-2"], i18n_0, [1, "flex-1", "h-1/2", "w-full", "space-y-2", "overflow-auto", "pt-4", "divide-y", "divide-gray-300"], [4, "ngIf", "ngIfElse"], ["empty_state", ""], ["class", "flex flex-col items-center mx-2 pt-4 space-y-2 relative", "item", "", 4, "ngFor", "ngForOf"], ["item", "", 1, "flex", "flex-col", "items-center", "mx-2", "pt-4", "space-y-2", "relative"], [1, "flex", "w-full", "items-center", "space-x-2", "relative"], [1, "w-20", "h-20", "overflow-hidden", "rounded", "relative", "flex", "items-center", "justify-center", "bg-black/10", "dark:bg-white/5"], ["class", "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover min-w-full min-h-full", 3, "src", 4, "ngIf", "ngIfElse"], ["space_placeholder", ""], [1, "h-20", "flex-1", "w-1/2"], [1, "truncate", "mb-4", "w-full", "pr-12"], [1, "flex", "items-center", "text-xs", "opacity-60", "truncate", "space-x-2", "mb-2"], [1, "text-blue-500"], [1, "flex", "items-center", "text-xs", "opacity-60", "truncate", "space-x-2"], i18n_4, ["btn", "", "name", "book-favourite", "matRipple", "", 1, "w-full", "inverse", 3, "click"], ["icon", "", "name", "favourite-more", 1, "absolute", "top-2", "right-0", "bg-gray-200", "dark:bg-neutral-600", "!rounded", "!m-0", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["menu", "matMenu"], ["name", "landing-remove-favourite", "mat-menu-item", "", 1, "flex", "items-center", "space-x-2", 3, "click"], [1, "text-2xl"], [1, "absolute", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2", "object-cover", "min-w-full", "min-h-full", 3, "src"], ["src", "assets/icons/room-placeholder.svg", 1, "m-auto"], ["asset_placeholder", ""], [1, "h-20"], [1, "truncate", "mb-4"], i18n_8, [1, "m-auto", 3, "src"], [1, "w-full", "h-full", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], ["src", "assets/icons/no-favourites.svg"], [1, "opacity-60", "text-sm", "text-center"]];
  },
  template: function LandingFavouritesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](2, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, LandingFavouritesComponent_ng_container_4_Template, 4, 4, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, LandingFavouritesComponent_ng_template_6_Template, 5, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](7);
      let tmp_2_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nExp"]((ctx.spaces == null ? null : ctx.spaces.length) || 0)(ctx.spaces == null ? null : ctx.spaces.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18nApply"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.spaces == null ? null : ctx.spaces.length) || ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 4, ctx.assets)) == null ? null : tmp_2_0.length))("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_7__.IconComponent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe, libs_spaces_src_lib_space_pipe__WEBPACK_IMPORTED_MODULE_6__.SpacePipe],
  styles: ["[user][_ngcontent-%COMP%]:hover button {\n                opacity: 1;\n            }\n\n            [_nghost-%COMP%] {\n                height: 100%;\n                width: 100%;\n                display: flex;\n                flex-direction: column;\n            }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmctZmF2b3VyaXRlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLFVBQVU7WUFDZDs7WUFFQTtnQkFDSSxZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsYUFBYTtnQkFDYixzQkFBc0I7WUFDMUIiLCJmaWxlIjoibGFuZGluZy1mYXZvdXJpdGVzLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgW3VzZXJdOmhvdmVyIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG4gICAgICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd29ya3BsYWNlL3NyYy9hcHAvbGFuZGluZy9sYW5kaW5nLWZhdm91cml0ZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxVQUFVO1lBQ2Q7O1lBRUE7Z0JBQ0ksWUFBWTtnQkFDWixXQUFXO2dCQUNYLGFBQWE7Z0JBQ2Isc0JBQXNCO1lBQzFCOztBQUVaLGdzQkFBZ3NCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICBbdXNlcl06aG92ZXIgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 92733:
/*!*************************************************************************!*\
  !*** ./apps/workplace/src/app/landing/landing-quick-links.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingQuickLinksComponent": () => (/* binding */ LandingQuickLinksComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 88397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 86679);






const _c0 = function () {
  return ["/book", "meeting"];
};
function LandingQuickLinksComponent_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Book a Room");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
  }
}
const _c1 = function () {
  return ["/book", "new-desks"];
};
function LandingQuickLinksComponent_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Book a Desk");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c1));
  }
}
const _c2 = function () {
  return ["/book", "new-parking"];
};
function LandingQuickLinksComponent_a_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Book a Parking Space");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c2));
  }
}
class LandingQuickLinksComponent {
  get features() {
    return this._settings.get('app.features') || [];
  }
  constructor(_settings) {
    this._settings = _settings;
  }
}
LandingQuickLinksComponent.ɵfac = function LandingQuickLinksComponent_Factory(t) {
  return new (t || LandingQuickLinksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
};
LandingQuickLinksComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LandingQuickLinksComponent,
  selectors: [["landing-quick-links"]],
  decls: 6,
  vars: 3,
  consts: [[1, "sm:text-lg", "font-medium", "mb-2", "sm:mb-4", "px-4"], [1, "flex", "w-full", "overflow-auto", "space-x-2", "px-4", "mb-4"], ["matRipple", "", "class", "w-64 p-2 rounded shadow border border-gray-200 flex items-center space-x-4 bg-white", 3, "routerLink", 4, "ngIf"], ["matRipple", "", 1, "w-64", "p-2", "rounded", "shadow", "border", "border-gray-200", "flex", "items-center", "space-x-4", "bg-white", 3, "routerLink"], [1, "min-w-[4rem]", "h-16", "rounded", "bg-gray-200", "flex", "items-center", "justify-center"], ["src", "assets/icons/room-placeholder.svg", 1, "m-auto"], [1, "text-xl"], ["src", "assets/icons/desk-placeholder.svg", 1, "m-auto"], ["src", "assets/icons/car-placeholder.svg", 1, "m-auto"]],
  template: function LandingQuickLinksComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Make a Reservation ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LandingQuickLinksComponent_a_3_Template, 5, 2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LandingQuickLinksComponent_a_4_Template, 5, 2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LandingQuickLinksComponent_a_5_Template, 5, 2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.features.includes("spaces"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.features.includes("desks"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.features.includes("parking"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRipple, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink]
});


/***/ }),

/***/ 24576:
/*!*****************************************************************!*\
  !*** ./apps/workplace/src/app/landing/landing-state.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingStateService": () => (/* binding */ LandingStateService)
/* harmony export */ });
/* harmony import */ var _Users_yuion_Documents_work_repos_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/ts-client */ 96750);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 79128);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 25670);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 88397);
/* harmony import */ var _placeos_spaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/spaces */ 43404);
/* harmony import */ var _placeos_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/events */ 27288);
/* harmony import */ var _placeos_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @placeos/users */ 42852);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @placeos/organisation */ 6221);
/* harmony import */ var _placeos_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @placeos/calendar */ 51876);
/* harmony import */ var _new_schedule_schedule_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../new-schedule/schedule-state.service */ 87625);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! date-fns */ 75845);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 86839);

















class LandingStateService extends _placeos_common__WEBPACK_IMPORTED_MODULE_2__.AsyncHandler {
  constructor(_calendar, _schedule, _org, _settings) {
    super();
    this._calendar = _calendar;
    this._schedule = _schedule;
    this._org = _org;
    this._settings = _settings;
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject({});
    this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject('');
    this._loading_spaces = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(false);
    /**  */
    this._contacts = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject([]);
    /**  */
    this._level_occupancy = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject([]);
    /**  */
    this._space_list = this._org.active_building.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(_ => !!_), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(bld => (0,_placeos_spaces__WEBPACK_IMPORTED_MODULE_3__.requestSpacesForZone)(bld.id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(_ => _.filter(s => s.bookable)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(_ => (0,_placeos_events__WEBPACK_IMPORTED_MODULE_4__.filterSpacesFromRules)(_, {
      date: Date.now(),
      duration: 60,
      space: null,
      host: (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.currentUser)()
    }, this._org.building.booking_rules)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.shareReplay)(1));
    this._space_statuses = this._space_list.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(_ => this.unsubWith('bind:')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(list => (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.combineLatest)((list || []).map(_ => {
      const binding = (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.getModule)(_.id, 'Bookings').binding('status');
      const obs = binding.listen();
      this.subscription(`bind:${_.id}`, binding.bind());
      return obs;
    }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.shareReplay)(1));
    this.free_space_list = (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.combineLatest)([this._space_list, this._space_statuses]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(([list, statuses]) => (list || []).filter((_, idx) => statuses[idx] === 'free').sort((a, b) => a.capacity - b.capacity)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.shareReplay)(1));
    /**  */
    this.upcoming_events = this._schedule.filtered_bookings.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(_ => _.filter(i => i.state !== 'done' && (0,date_fns__WEBPACK_IMPORTED_MODULE_16__["default"])(i.date, Date.now()))));
    /**  */
    this.contacts = this._contacts.asObservable();
    /**  */
    this.options = this._options.asObservable();
    /**  */
    this.loading = this._loading.asObservable();
    /**  */
    this.loading_spaces = this._loading_spaces.asObservable();
    /** Function used to query for users */
    this.search_fn = q => this._settings.get('app.basic_user_search') ? (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.queryUsers)({
      q,
      authority_id: (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.authority)()?.id
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(({
      data
    }) => data.map(_ => new _placeos_users__WEBPACK_IMPORTED_MODULE_5__.StaffUser(_)))) : (0,_placeos_users__WEBPACK_IMPORTED_MODULE_5__.searchStaff)(q);
    this.search_results = this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(({
      search
    }) => {
      this._loading.next('Loading users...');
      return search ? this.search_fn(search).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)([]))) : (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)([]);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(() => this._loading.next('')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.shareReplay)(1));
    /**  */
    this.level_occupancy = this._level_occupancy.asObservable();
    this.init();
  }
  init() {
    var _this = this;
    return (0,_Users_yuion_Documents_work_repos_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this._org.initialised.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.first)(_ => _)).toPromise();
      _this.updateContacts();
      _this.subscription('building', _this._org.active_building.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(bld => !!bld)).subscribe(() => {
        _this.updateBuildingMetadata();
        _this.updateOccupancy({});
      }));
      let sys_id = _this._org.binding('area_management');
      if (!sys_id) return;
      const binding = (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.getModule)(sys_id, 'AreaManagement').binding('overview');
      binding.listen().subscribe(d => _this.updateOccupancy(d || {}));
      binding.bind();
    })();
  }
  setOptions(options) {
    this._options.next({
      ...this._options.getValue(),
      ...options
    });
  }
  pollUpcomingEvents(delay = 5 * 60 * 1000) {
    this._schedule.setDate(Date.now());
    return this._schedule.startPolling(delay);
  }
  stopPollingUpcomingEvents() {
    this._schedule.stopPolling();
  }
  refreshUpcomingEvents() {
    this._schedule.setDate(Date.now());
    this._schedule.triggerPoll();
  }
  updateContacts() {
    var _this2 = this;
    return (0,_Users_yuion_Documents_work_repos_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const metadata = yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.showMetadata)((0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.currentUser)().id, 'contacts').toPromise();
      const list = metadata.details instanceof Array ? metadata.details : [];
      _this2._contacts.next(list.map(i => new _placeos_users__WEBPACK_IMPORTED_MODULE_5__.User(i)));
    })();
  }
  addContact(user) {
    var _this3 = this;
    return (0,_Users_yuion_Documents_work_repos_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let users = [..._this3._contacts.getValue()];
      users.push(user);
      users = (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.unique)(users, 'email');
      const metadata = yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.updateMetadata)((0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.currentUser)().id, {
        name: 'contacts',
        description: 'Contacts for the User',
        details: users
      }).toPromise();
      const list = metadata.details instanceof Array ? metadata.details : [];
      _this3._contacts.next(list.map(i => new _placeos_users__WEBPACK_IMPORTED_MODULE_5__.User(i)));
    })();
  }
  removeContact(user) {
    var _this4 = this;
    return (0,_Users_yuion_Documents_work_repos_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let users = [..._this4._contacts.getValue()];
      users = users.filter(u => u.email !== user.email);
      const metadata = yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.updateMetadata)((0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.currentUser)().id, {
        name: 'contacts',
        description: 'Contacts for the User',
        details: users
      }).toPromise();
      const list = metadata.details instanceof Array ? metadata.details : [];
      _this4._contacts.next(list.map(i => new _placeos_users__WEBPACK_IMPORTED_MODULE_5__.User(i)));
    })();
  }
  updateOccupancy(map) {
    var _this5 = this;
    return (0,_Users_yuion_Documents_work_repos_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const levels = [...(yield _this5._org.active_levels.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.take)(1)).toPromise())];
      levels.sort((a, b) => map[a.id]?.recommendation - map[b.id]?.recommendation);
      _this5._level_occupancy.next(levels);
    })();
  }
  updateBuildingMetadata() {
    var _this6 = this;
    return (0,_Users_yuion_Documents_work_repos_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6._level_occupancy.next([]);
      const occupancy = _this6._org.binding('occupancy');
      if (!occupancy) return;
      const {
        sys,
        module,
        index
      } = occupancy;
      const mod = (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__.getModule)(sys, module, index);
      if (!mod) return;
      if (_this6._occupancy_binding) {
        _this6._occupancy_binding.unbind();
      }
      _this6._occupancy_binding = mod.binding('occupancy');
      _this6._occupancy_binding.bind();
      _this6.subscription('occupancy_binding', _this6._occupancy_binding.listen().subscribe(value => {
        const levels = Object.keys(value).map(key => ({
          id: key,
          ...value[key]
        }));
        levels.sort((a, b) => a.recommendation_factor - b.recommendation_factor);
        _this6._level_occupancy.next(levels.map(i => _this6._org.levelWithID([i.id])));
      }));
    })();
  }
}
LandingStateService.ɵfac = function LandingStateService_Factory(t) {
  return new (t || LandingStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_placeos_calendar__WEBPACK_IMPORTED_MODULE_7__.CalendarService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_new_schedule_schedule_state_service__WEBPACK_IMPORTED_MODULE_8__.ScheduleStateService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_6__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService));
};
LandingStateService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjectable"]({
  token: LandingStateService,
  factory: LandingStateService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 81785:
/*!**********************************************************************!*\
  !*** ./apps/workplace/src/app/landing/landing-upcoming.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingUpcomingComponent": () => (/* binding */ LandingUpcomingComponent)
/* harmony export */ });
/* harmony import */ var _Users_yuion_Documents_work_repos_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _placeos_bookings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/bookings */ 56917);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/common */ 88397);
/* harmony import */ var _placeos_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/events */ 27288);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var _landing_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing-state.service */ 24576);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _libs_events_src_lib_event_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/events/src/lib/event-card.component */ 52551);
/* harmony import */ var _libs_bookings_src_lib_booking_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/bookings/src/lib/booking-card.component */ 64088);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 38699);


















function LandingUpcomingComponent_ng_container_12_ng_container_1_event_card_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "event-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("edit", function LandingUpcomingComponent_ng_container_12_ng_container_1_event_card_2_Template_event_card_edit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const event_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r7.edit(event_r4));
    })("remove", function LandingUpcomingComponent_ng_container_12_ng_container_1_event_card_2_Template_event_card_remove_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const event_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r10.remove(event_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const event_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("event", event_r4)("show_day", true);
  }
}
function LandingUpcomingComponent_ng_container_12_ng_container_1_booking_card_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "booking-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("remove", function LandingUpcomingComponent_ng_container_12_ng_container_1_booking_card_3_Template_booking_card_remove_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15);
      const event_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r13.remove(event_r4));
    })("end", function LandingUpcomingComponent_ng_container_12_ng_container_1_booking_card_3_Template_booking_card_end_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15);
      const event_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r16.end(event_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const event_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("booking", event_r4)("show_day", true);
  }
}
function LandingUpcomingComponent_ng_container_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0)(1, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, LandingUpcomingComponent_ng_container_12_ng_container_1_event_card_2_Template, 1, 2, "event-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, LandingUpcomingComponent_ng_container_12_ng_container_1_booking_card_3_Template, 1, 2, "booking-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]()();
  }
  if (rf & 2) {
    const event_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitch", ctx_r3.type(event_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "event");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "booking");
  }
}
function LandingUpcomingComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, LandingUpcomingComponent_ng_container_12_ng_container_1_Template, 4, 3, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 6, ctx_r0.upcoming_events), 0, 5))("ngForTrackBy", ctx_r0.trackByFn);
  }
}
function LandingUpcomingComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 1, "WPA.NO_UPCOMING_BOOKINGS"), " ");
  }
}
const _c0 = function () {
  return ["/your-bookings"];
};
class LandingUpcomingComponent {
  type(event) {
    return event instanceof _placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.Booking ? 'booking' : 'event';
  }
  constructor(_state, _event_form, _router, _dialog, _settings) {
    this._state = _state;
    this._event_form = _event_form;
    this._router = _router;
    this._dialog = _dialog;
    this._settings = _settings;
    this.upcoming_events = this._state.upcoming_events;
  }
  ngOnInit() {
    this._state.refreshUpcomingEvents();
    // this._state.pollUpcomingEvents();
  }

  ngOnDestroy() {
    this._state.stopPollingUpcomingEvents();
  }
  trackByFn(_, item) {
    return item?.id;
  }
  edit(event) {
    this._router.navigate(['/book', 'meeting', 'form']);
    this._event_form.newForm(event);
  }
  remove(item) {
    var _this = this;
    return (0,_Users_yuion_Documents_work_repos_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const time = `${(0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(item.date, 'dd MMM yyyy h:mma')}`;
      const resource_name = item instanceof _placeos_events__WEBPACK_IMPORTED_MODULE_3__.CalendarEvent ? item.space?.display_name : item.asset_name || item.asset_id;
      const content = `Delete the booking for ${resource_name} at ${time}`;
      const resp = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.openConfirmModal)({
        title: `Delete booking`,
        content,
        icon: {
          content: 'delete'
        }
      }, _this._dialog);
      if (resp.reason !== 'done') return;
      resp.loading('Requesting booking deletion...');
      yield (item instanceof _placeos_events__WEBPACK_IMPORTED_MODULE_3__.CalendarEvent ? _placeos_events__WEBPACK_IMPORTED_MODULE_3__.removeEvent : _placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.removeBooking)(item.id, {
        calendar: _this._settings.get('app.no_user_calendar') ? null : (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.currentUser)()?.email,
        system_id: item.system?.id
      }).toPromise().catch(e => {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifyError)(`Unable to delete booking. ${e}`);
        resp.close();
        throw e;
      });
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifySuccess)('Successfully deleted booking.');
      _this._state.refreshUpcomingEvents();
      _this._dialog.closeAll();
    })();
  }
  end(item) {
    var _this2 = this;
    return (0,_Users_yuion_Documents_work_repos_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const time = `${(0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(item.date, 'dd MMM yyyy h:mma')}`;
      const resource_name = item.asset_name || item.asset_id;
      const content = `End the booking for ${resource_name} at ${time}`;
      const resp = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.openConfirmModal)({
        title: `End booking`,
        content,
        icon: {
          content: 'delete'
        }
      }, _this2._dialog);
      if (resp.reason !== 'done') return;
      resp.loading('Ending booking...');
      yield (0,_placeos_bookings__WEBPACK_IMPORTED_MODULE_1__.checkinBooking)(item.id, false).toPromise().catch(e => {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifyError)(`Unable to end booking. ${e}`);
        resp.close();
        throw e;
      });
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_2__.notifySuccess)('Successfully ended booking.');
      _this2._state.refreshUpcomingEvents();
      _this2._dialog.closeAll();
    })();
  }
}
LandingUpcomingComponent.ɵfac = function LandingUpcomingComponent_Factory(t) {
  return new (t || LandingUpcomingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_landing_state_service__WEBPACK_IMPORTED_MODULE_4__.LandingStateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_placeos_events__WEBPACK_IMPORTED_MODULE_3__.EventFormService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_2__.SettingsService));
};
LandingUpcomingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: LandingUpcomingComponent,
  selectors: [["landing-upcoming"]],
  decls: 16,
  vars: 17,
  consts: [[1, "py-2"], [1, "flex", "items-center", "justify-between", "mb-2", "sm:mb-4", "px-4"], [1, "sm:text-lg", "font-medium"], ["btn", "", "name", "upcoming-view-all", 1, "inverse", "hidden", "sm:flex", 3, "routerLink"], ["name", "upcoming-view-all-mobile", 1, "inverse", "flex", "sm:hidden", "text-blue-500", "underline", "relative", "top-8", 3, "routerLink"], [1, "space-y-4", "px-4"], [4, "ngIf", "ngIfElse"], ["empty_state", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngSwitch"], [3, "event", "show_day", "edit", "remove", 4, "ngSwitchCase"], [3, "booking", "show_day", "remove", "end", 4, "ngSwitchCase"], [3, "event", "show_day", "edit", "remove"], [3, "booking", "show_day", "remove", "end"], [1, "w-full", "p-8", "flex", "flex-col", "items-center", "justify-center", "space-y-4"], ["src", "assets/img/no-events.svg", 1, "mr-4"], [1, "opacity-30"]],
  template: function LandingUpcomingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, LandingUpcomingComponent_ng_container_12_Template, 4, 8, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, LandingUpcomingComponent_ng_template_14_Template, 5, 3, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](15);
      let tmp_5_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 7, "WPA.YOUR_BOOKINGS"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](15, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 9, "WPA.VIEW_ALL"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](16, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 11, "WPA.VIEW_ALL"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 13, ctx.upcoming_events)) == null ? null : tmp_5_0.length)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgSwitchCase, _libs_events_src_lib_event_card_component__WEBPACK_IMPORTED_MODULE_5__.EventCardComponent, _libs_bookings_src_lib_booking_card_component__WEBPACK_IMPORTED_MODULE_6__.BookingCardComponent, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.SlicePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe]
});


/***/ }),

/***/ 19799:
/*!*************************************************************!*\
  !*** ./apps/workplace/src/app/landing/landing.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingComponent": () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/common */ 88397);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/organisation */ 6221);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 26361);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _components_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/topbar.component */ 64187);
/* harmony import */ var _components_footer_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer-menu.component */ 46012);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 65306);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _landing_colleagues_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing-colleagues.component */ 17373);
/* harmony import */ var _landing_availability_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing-availability.component */ 7704);
/* harmony import */ var _landing_upcoming_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing-upcoming.component */ 81785);
/* harmony import */ var _landing_favourites_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing-favourites.component */ 90184);
/* harmony import */ var _landing_quick_links_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./landing-quick-links.component */ 92733);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 38699);

















function LandingComponent_topbar_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "topbar", 13);
  }
}
function LandingComponent_div_2_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LandingComponent_div_2_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r8.tab = "people");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("border-b", ctx_r5.tab !== "people")("border-gray-300", ctx_r5.tab !== "people")("bg-black", ctx_r5.tab !== "people")("bg-opacity-5", ctx_r5.tab !== "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 9, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 11, "WPA.COLLEAGUES")), " ");
  }
}
function LandingComponent_div_2_landing_colleagues_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "landing-colleagues");
  }
}
function LandingComponent_div_2_landing_favourites_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "landing-favourites");
  }
}
function LandingComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 14)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, LandingComponent_div_2_button_2_Template, 7, 13, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LandingComponent_div_2_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r10.tab = "fav");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "favorite");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, LandingComponent_div_2_landing_colleagues_10_Template, 1, 0, "landing-colleagues", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, LandingComponent_div_2_landing_favourites_11_Template, 1, 0, "landing-favourites", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r1.hide_colleagues);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("border-b", ctx_r1.tab !== "fav")("border-gray-300", ctx_r1.tab !== "fav")("bg-black", ctx_r1.tab !== "fav")("bg-opacity-5", ctx_r1.tab !== "fav");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 12, "WPA.FAVOURITES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.tab === "people" && !ctx_r1.hide_colleagues);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.tab === "fav" || ctx_r1.hide_colleagues);
  }
}
function LandingComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r2.building.address || ctx_r2.building.display_name || ctx_r2.building.name, " ");
  }
}
function LandingComponent_landing_quick_links_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "landing-quick-links");
  }
}
function LandingComponent_footer_menu_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "footer-menu");
  }
}
const _c0 = function (a0) {
  return {
    name: a0
  };
};
class LandingComponent {
  get hide_nav() {
    return localStorage.getItem('PlaceOS.hide_nav') === 'true';
  }
  get date() {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(this.time || Date.now());
  }
  get user() {
    return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_0__.currentUser)();
  }
  get building() {
    return this._org.building;
  }
  get hide_landing_sidebar() {
    return this._settings.get('app.general.hide_landing_sidebar');
  }
  get hide_colleagues() {
    return this._settings.get('app.general.hide_colleagues');
  }
  get show_quick_links() {
    return this._settings.get('app.general.show_quick_links');
  }
  constructor(_org, _settings) {
    this._org = _org;
    this._settings = _settings;
    this.tab = 'people';
  }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) {
  return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_1__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_0__.SettingsService));
};
LandingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: LandingComponent,
  selectors: [["app-landing"]],
  decls: 20,
  vars: 15,
  consts: [["class", "z-10", 4, "ngIf"], [1, "flex", "flex-1", "h-1/2", "bg-[#F8F8FA]", "dark:bg-neutral-900"], ["class", "relative hidden sm:flex flex-col w-[18rem] h-full overflow-hidden bg-white dark:bg-[#1F2021] border-r border-gray-200 dark:border-neutral-700", 4, "ngIf"], [1, "flex-1", "h-full", "w-1/2", "sm:px-4", "overflow-auto", "z-0"], [1, "sticky", "top-0", "z-50", "bg-[#ECF0F3]", "dark:bg-zinc-800", "px-4", "sm:rounded-b", "flex", "items-center", "justify-between", "overflow-hidden"], [1, ""], [1, "sm:text-xl", "font-medium"], ["date", "", 1, "text-sm", "sm:text-base"], ["class", "text-sm sm:text-base", 4, "ngIf"], [1, "h-32", "pt-4"], ["src", "assets/img/landing.svg"], [4, "ngIf"], [1, "mx-4", "w-[calc(100%-2rem)]", "h-px", "bg-gray-300", "mb-2"], [1, "z-10"], [1, "relative", "hidden", "sm:flex", "flex-col", "w-[18rem]", "h-full", "overflow-hidden", "bg-white", "dark:bg-[#1F2021]", "border-r", "border-gray-200", "dark:border-neutral-700"], [1, "flex", "items-center", "divide-x", "divide-gray-300"], ["matRipple", "", "class", "flex-1 font-medium p-2 flex items-center justify-center space-x-2", 3, "border-b", "border-gray-300", "bg-black", "bg-opacity-5", "click", 4, "ngIf"], ["matRipple", "", 1, "flex-1", "font-medium", "p-2", "flex", "items-center", "justify-center", "space-x-2", 3, "click"], [1, "flex-1", "w-full", "h-1/2"], [1, "text-sm", "sm:text-base"]],
  template: function LandingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, LandingComponent_topbar_0_Template, 1, 0, "topbar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, LandingComponent_div_2_Template, 12, 14, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 3)(4, "header", 4)(5, "div", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, LandingComponent_div_12_Template, 2, 1, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, LandingComponent_landing_quick_links_15_Template, 1, 0, "landing-quick-links", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "landing-availability")(17, "div", 12)(18, "landing-upcoming");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, LandingComponent_footer_menu_19_Template, 1, 0, "footer-menu", 11);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.hide_nav);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.hide_landing_sidebar);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](8, 7, "WPA.WELCOME_MESSAGE", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](13, _c0, ctx.user == null ? null : ctx.user.name)), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](11, 10, ctx.date, "fullDate"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.building == null ? null : ctx.building.address) || (ctx.building == null ? null : ctx.building.name));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.show_quick_links);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.hide_nav);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _components_topbar_component__WEBPACK_IMPORTED_MODULE_2__.TopbarComponent, _components_footer_menu_component__WEBPACK_IMPORTED_MODULE_3__.FooterMenuComponent, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatRipple, _landing_colleagues_component__WEBPACK_IMPORTED_MODULE_5__.LandingColleaguesComponent, _landing_availability_component__WEBPACK_IMPORTED_MODULE_6__.LandingAvailabilityComponent, _landing_upcoming_component__WEBPACK_IMPORTED_MODULE_7__.LandingUpcomingComponent, _landing_favourites_component__WEBPACK_IMPORTED_MODULE_8__.LandingFavouritesComponent, _landing_quick_links_component__WEBPACK_IMPORTED_MODULE_9__.LandingQuickLinksComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
  styles: ["[_nghost-%COMP%] {\n                position: absolute;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                overflow: hidden;\n                display: flex;\n                flex-direction: column;\n            }\n\n            main[_ngcontent-%COMP%] {\n                min-height: 50%;\n            }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxrQkFBa0I7Z0JBQ2xCLE1BQU07Z0JBQ04sT0FBTztnQkFDUCxRQUFRO2dCQUNSLFNBQVM7Z0JBQ1QsZ0JBQWdCO2dCQUNoQixhQUFhO2dCQUNiLHNCQUFzQjtZQUMxQjs7WUFFQTtnQkFDSSxlQUFlO1lBQ25CIiwiZmlsZSI6ImxhbmRpbmcuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvd29ya3BsYWNlL3NyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksa0JBQWtCO2dCQUNsQixNQUFNO2dCQUNOLE9BQU87Z0JBQ1AsUUFBUTtnQkFDUixTQUFTO2dCQUNULGdCQUFnQjtnQkFDaEIsYUFBYTtnQkFDYixzQkFBc0I7WUFDMUI7O1lBRUE7Z0JBQ0ksZUFBZTtZQUNuQjs7QUFFWixvM0JBQW8zQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 96894:
/*!**********************************************************!*\
  !*** ./apps/workplace/src/app/landing/landing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppLandingModule": () => (/* binding */ AppLandingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/shared.module */ 75206);
/* harmony import */ var _landing_availability_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-availability.component */ 7704);
/* harmony import */ var _landing_colleagues_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-colleagues.component */ 17373);
/* harmony import */ var _landing_favourites_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing-favourites.component */ 90184);
/* harmony import */ var _landing_quick_links_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing-quick-links.component */ 92733);
/* harmony import */ var _landing_upcoming_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing-upcoming.component */ 81785);
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing.component */ 19799);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 86839);












const COMPONENTS = [_landing_component__WEBPACK_IMPORTED_MODULE_6__.LandingComponent, _landing_colleagues_component__WEBPACK_IMPORTED_MODULE_2__.LandingColleaguesComponent, _landing_availability_component__WEBPACK_IMPORTED_MODULE_1__.LandingAvailabilityComponent, _landing_upcoming_component__WEBPACK_IMPORTED_MODULE_5__.LandingUpcomingComponent, _landing_favourites_component__WEBPACK_IMPORTED_MODULE_3__.LandingFavouritesComponent, _landing_quick_links_component__WEBPACK_IMPORTED_MODULE_4__.LandingQuickLinksComponent];
const ROUTES = [{
  path: '',
  component: _landing_component__WEBPACK_IMPORTED_MODULE_6__.LandingComponent
}];
class AppLandingModule {}
AppLandingModule.ɵfac = function AppLandingModule_Factory(t) {
  return new (t || AppLandingModule)();
};
AppLandingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: AppLandingModule
});
AppLandingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _components_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedComponentModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(ROUTES)]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppLandingModule, {
    declarations: [_landing_component__WEBPACK_IMPORTED_MODULE_6__.LandingComponent, _landing_colleagues_component__WEBPACK_IMPORTED_MODULE_2__.LandingColleaguesComponent, _landing_availability_component__WEBPACK_IMPORTED_MODULE_1__.LandingAvailabilityComponent, _landing_upcoming_component__WEBPACK_IMPORTED_MODULE_5__.LandingUpcomingComponent, _landing_favourites_component__WEBPACK_IMPORTED_MODULE_3__.LandingFavouritesComponent, _landing_quick_links_component__WEBPACK_IMPORTED_MODULE_4__.LandingQuickLinksComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _components_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedComponentModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=apps_workplace_src_app_landing_landing_module_ts.js.map