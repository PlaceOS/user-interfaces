"use strict";
(self["webpackChunkconcierge"] = self["webpackChunkconcierge"] || []).push([["apps_concierge_src_app_poi-manager_poi-manager_module_ts"],{

/***/ 53654:
/*!******************************************************************!*\
  !*** ./apps/concierge/src/app/poi-manager/poi-list.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   POIListComponent: () => (/* binding */ POIListComponent)
/* harmony export */ });
/* harmony import */ var _poi_management_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./poi-management.service */ 4603);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var libs_common_src_lib_qr_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! libs/common/src/lib/qr-code */ 98010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);
/* harmony import */ var _libs_components_src_lib_custom_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/custom-table.component */ 27442);
/* harmony import */ var _libs_components_src_lib_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/custom-tooltip.component */ 33884);
/* harmony import */ var _libs_components_src_lib_printable_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/printable.component */ 81886);
/* harmony import */ var _libs_components_src_lib_safe_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/safe.pipe */ 16318);
/* harmony import */ var _libs_components_src_lib_level_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/level.pipe */ 6612);














function POIListComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "level");
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 1, row_r4.level_id)) == null ? null : tmp_0_0.display_name) || "Unknown", " ");
  }
}
function POIListComponent_ng_template_4_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function POIListComponent_ng_template_4_ng_template_4_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r9.print());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, " Print QR Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](3, 3, row_r5.qr_link, "url"), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", row_r5.qr_code, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", row_r5.name || row_r5.id, " ");
  }
}
function POIListComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 4)(1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function POIListComponent_ng_template_4_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const row_r5 = restoredCtx.row;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r12.loadQrCode(row_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "qr_code");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, POIListComponent_ng_template_4_ng_template_4_Template, 9, 6, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "button", 7)(7, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "mat-menu", null, 8)(11, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function POIListComponent_ng_template_4_Template_button_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const row_r5 = restoredCtx.row;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r14.edit(row_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 10)(13, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Edit Point of Interest");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function POIListComponent_ng_template_4_Template_button_click_17_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const row_r5 = restoredCtx.row;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r15.remove(row_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 11)(19, "app-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "Delete Point of Interest");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](5);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("content", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matMenuTriggerFor", _r8);
  }
}
const _c0 = () => ["name", "level", "location", "actions"];
const _c1 = () => ["Name", "Level", "Location", " "];
const _c2 = () => ["flex", "10r", "10r", "6.5r"];
const _c3 = (a0, a1) => ({
  level: a0,
  actions: a1
});
class POIListComponent {
  get kiosk_url() {
    const path = this._settings.get('app.kiosk_url_path') || '/map-kiosk';
    return `${window.location.origin}${path}`;
  }
  loadQrCode(item) {
    const link = `${this.kiosk_url}/#/explore?level=${encodeURIComponent(item.level_id)}&locate=${encodeURIComponent(item.id)}`;
    item.qr_link = link;
    item.qr_code = (0,libs_common_src_lib_qr_code__WEBPACK_IMPORTED_MODULE_2__.generateQRCode)(link);
  }
  constructor(_manager, _settings) {
    this._manager = _manager;
    this._settings = _settings;
    this.features = this._manager.filtered_features;
    this.edit = region => this._manager.editPointOfInterest(region);
    this.remove = region => this._manager.removePointOfInterest(region);
  }
  static #_ = this.ɵfac = function POIListComponent_Factory(t) {
    return new (t || POIListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_poi_management_service__WEBPACK_IMPORTED_MODULE_0__.POIManagementService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_placeos_common__WEBPACK_IMPORTED_MODULE_1__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: POIListComponent,
    selectors: [["poi-list"]],
    decls: 6,
    vars: 11,
    consts: [[1, "absolute", "inset-0", "overflow-auto", "px-4"], ["empty", "No Points of Interest found.", 1, "block", "min-w-[32rem]", "w-full", "h-full", 3, "dataSource", "columns", "display_column", "column_size", "template"], ["level_template", ""], ["action_template", ""], [1, "w-full", "flex", "justify-end", "space-x-2"], ["icon", "", "matRipple", "", "customTooltip", "", 3, "content", "click"], ["qr_menu", ""], ["btn", "", "icon", "", "matRipple", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "flex", "items-center", "space-x-2", "text-red-500"], [1, "text-error"], [1, "bg-base-100", "py-2", "shadow", "rounded"], ["printable", "", 1, ""], ["target", "_blank", "ref", "noopener noreferrer", 1, "block", "p-2", "mx-4", "my-2", "rounded-lg", "border", "border-base-200", "bg-base-100", 3, "href"], [1, "w-48", 3, "src"], [1, "w-[calc(100%-2rem)]", "text-center", "mt-2", "font-mono", "text-sm", "bg-base-200", "rounded", "p-2", "mx-4"], ["btn", "", "matRipple", "", 1, "w-[calc(100%-2rem)]", "mx-4", "my-2", 3, "click"]],
    template: function POIListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "custom-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, POIListComponent_ng_template_2_Template, 2, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"])(4, POIListComponent_ng_template_4_Template, 23, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dataSource", ctx.features)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](5, _c0))("display_column", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](6, _c1))("column_size", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](7, _c2))("template", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](8, _c3, _r1, _r3));
      }
    },
    dependencies: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_3__.IconComponent, _libs_components_src_lib_custom_table_component__WEBPACK_IMPORTED_MODULE_4__.CustomTableComponent, _libs_components_src_lib_custom_tooltip_component__WEBPACK_IMPORTED_MODULE_5__.CustomTooltipComponent, _libs_components_src_lib_printable_component__WEBPACK_IMPORTED_MODULE_6__.PrintableComponent, _libs_components_src_lib_safe_pipe__WEBPACK_IMPORTED_MODULE_7__.SafePipe, _libs_components_src_lib_level_pipe__WEBPACK_IMPORTED_MODULE_8__.LevelPipe]
  });
}

/***/ }),

/***/ 4603:
/*!**********************************************************************!*\
  !*** ./apps/concierge/src/app/poi-manager/poi-management.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   POIManagementService: () => (/* binding */ POIManagementService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/organisation */ 5745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 70462);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 64555);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 36520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 47422);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 680);
/* harmony import */ var _poi_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./poi-modal.component */ 17021);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/ts-client */ 64331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 17401);











class POIManagementService {
  constructor(_org, _dialog) {
    this._org = _org;
    this._dialog = _dialog;
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject({});
    this._change = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(0);
    this.options = this._options.asObservable();
    this._features = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this._org.active_building, this._change]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(([bld]) => (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_4__.showMetadata)(bld.id, 'map_features', {})), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(_ => _.details || {}), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.shareReplay)(1));
    this.filtered_features = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this._features, this._options]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([features, options]) => {
      let list = Object.values(features).reduce((acc, _) => [...acc, ..._], []);
      if (options.search) {
        list = list.filter(_ => _.name.toLowerCase().includes(options.search.toLowerCase()));
      }
      return list;
    }));
  }
  setFilters(options) {
    this._options.next({
      ...this._options.getValue(),
      ...options
    });
  }
  setSearchString(search) {
    this._options.next({
      ...this._options.getValue(),
      search
    });
  }
  editPointOfInterest(poi) {
    const ref = this._dialog.open(_poi_modal_component__WEBPACK_IMPORTED_MODULE_2__.POIModalComponent, {
      data: poi
    });
    ref.afterClosed().subscribe(() => this._change.next(Date.now()));
  }
  removePointOfInterest(poi) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ref = yield (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.openConfirmModal)({
        title: 'Remove Point of Interest',
        content: `Are you sure you want to remove the point of interest "${poi.name}"?`,
        icon: {
          content: 'delete_forever'
        },
        confirm_text: 'Remove'
      }, _this._dialog);
      if (ref.reason !== 'done') return ref.close();
      ref.loading('Removing point of interest...');
      const old_metadata = yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_4__.showMetadata)(_this._org.building.id, 'map_features', {}).toPromise();
      const metadata = old_metadata.details || {};
      if (metadata[poi.level_id]) {
        metadata[poi.level_id] = metadata[poi.level_id].filter(_ => _.id !== poi.id);
      }
      yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_4__.updateMetadata)(_this._org.building.id, {
        name: 'map_features',
        details: metadata,
        description: ''
      }).toPromise().catch(e => {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifyError)(e);
        ref.close();
        throw e;
      });
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifySuccess)('Successfully removed point of interest.');
      ref.close();
      _this._change.next(Date.now());
    })();
  }
  static #_ = this.ɵfac = function POIManagementService_Factory(t) {
    return new (t || POIManagementService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_1__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
    token: POIManagementService,
    factory: POIManagementService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 78333:
/*!*********************************************************************!*\
  !*** ./apps/concierge/src/app/poi-manager/poi-manager.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   POIManagerComponent: () => (/* binding */ POIManagerComponent)
/* harmony export */ });
/* harmony import */ var _poi_management_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./poi-management.service */ 4603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/app-topbar.component */ 33005);
/* harmony import */ var _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/app-sidebar.component */ 19842);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _poi_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./poi-list.component */ 53654);







const _c0 = ["app-poi-manager", ""];
class POIManagerComponent {
  constructor(_state) {
    this._state = _state;
    this.new = () => this._state.editPointOfInterest();
  }
  static #_ = this.ɵfac = function POIManagerComponent_Factory(t) {
    return new (t || POIManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_poi_management_service__WEBPACK_IMPORTED_MODULE_0__.POIManagementService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: POIManagerComponent,
    selectors: [["", "app-poi-manager", ""]],
    attrs: _c0,
    decls: 10,
    vars: 0,
    consts: [[1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full"], [1, "flex", "items-center", "justify-between", "mb-2", "px-4", "py-8"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", 3, "click"], [1, "block", "w-full", "relative", "flex-1", "h-1/2"]],
    template: function POIManagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "main", 1)(4, "header", 2)(5, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Point of Interest Management ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function POIManagerComponent_Template_button_click_7_listener() {
          return ctx.new();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Add Point of Interest ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "poi-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_1__.ApplicationTopbarComponent, _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.ApplicationSidebarComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRipple, _poi_list_component__WEBPACK_IMPORTED_MODULE_3__.POIListComponent],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n                background-color: var(--b1);\n            }\n\n            sidebar[_ngcontent-%COMP%] {\n                height: 100%;\n            }\n\n            main[_ngcontent-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                flex: 1;\n                min-width: 50%;\n                height: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvcG9pLW1hbmFnZXIvcG9pLW1hbmFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7WUFDWTtnQkFDSSxhQUFhO2dCQUNiLHNCQUFzQjtnQkFDdEIsWUFBWTtnQkFDWixXQUFXO2dCQUNYLDJCQUEyQjtZQUMvQjs7WUFFQTtnQkFDSSxZQUFZO1lBQ2hCOztZQUVBO2dCQUNJLGFBQWE7Z0JBQ2Isc0JBQXNCO2dCQUN0QixPQUFPO2dCQUNQLGNBQWM7Z0JBQ2QsWUFBWTtZQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYjEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzaWRlYmFyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 71031:
/*!******************************************************************!*\
  !*** ./apps/concierge/src/app/poi-manager/poi-manager.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   POIManagerModule: () => (/* binding */ POIManagerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/ui.module */ 97428);
/* harmony import */ var _placeos_spaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/spaces */ 55322);
/* harmony import */ var _placeos_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/users */ 81239);
/* harmony import */ var _poi_manager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./poi-manager.component */ 78333);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ 21757);
/* harmony import */ var _poi_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./poi-list.component */ 53654);
/* harmony import */ var _poi_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./poi-modal.component */ 17021);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);












const ROUTES = [{
  path: '',
  component: _poi_manager_component__WEBPACK_IMPORTED_MODULE_3__.POIManagerComponent
}, {
  path: 'new',
  component: _poi_manager_component__WEBPACK_IMPORTED_MODULE_3__.POIManagerComponent
}];
class POIManagerModule {
  static #_ = this.ɵfac = function POIManagerModule_Factory(t) {
    return new (t || POIManagerModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: POIManagerModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, _placeos_spaces__WEBPACK_IMPORTED_MODULE_1__.SharedSpacesModule, _placeos_users__WEBPACK_IMPORTED_MODULE_2__.SharedUsersModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__.MatChipsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(ROUTES)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](POIManagerModule, {
    declarations: [_poi_manager_component__WEBPACK_IMPORTED_MODULE_3__.POIManagerComponent, _poi_list_component__WEBPACK_IMPORTED_MODULE_4__.POIListComponent, _poi_modal_component__WEBPACK_IMPORTED_MODULE_5__.POIModalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, _placeos_spaces__WEBPACK_IMPORTED_MODULE_1__.SharedSpacesModule, _placeos_users__WEBPACK_IMPORTED_MODULE_2__.SharedUsersModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__.MatChipsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 17021:
/*!*******************************************************************!*\
  !*** ./apps/concierge/src/app/poi-manager/poi-modal.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   POIModalComponent: () => (/* binding */ POIModalComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 5745);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ 64331);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 46939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ 33910);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);


















function POIModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 4)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function POIModalComponent_main_4_form_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9)(1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nStart"](2, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function POIModalComponent_main_4_form_1_div_2_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bld_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", bld_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", bld_r12.display_name, " ");
  }
}
const _c0 = () => ({
  standalone: true
});
function POIModalComponent_main_4_form_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9)(1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nStart"](2, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-form-field", 12)(5, "mat-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function POIModalComponent_main_4_form_1_div_2_Template_mat_select_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.building = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, POIModalComponent_main_4_form_1_div_2_mat_option_6_Template, 2, 2, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r7.building)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 3, ctx_r7.building_list));
  }
}
function POIModalComponent_main_4_form_1_div_4_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const level_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", level_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", level_r16.display_name, " ");
  }
}
function POIModalComponent_main_4_form_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9)(1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nStart"](2, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-form-field", 12)(5, "mat-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, POIModalComponent_main_4_form_1_div_4_mat_option_6_Template, 2, 2, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 1, ctx_r8.level_list));
  }
}
function POIModalComponent_main_4_form_1_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
function POIModalComponent_main_4_form_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 27)(1, "mat-form-field", 28)(2, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function POIModalComponent_main_4_form_1_div_16_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.form.patchValue({
        location: [$event, ctx_r17.form.value.location[1]]
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-form-field", 28)(4, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function POIModalComponent_main_4_form_1_div_16_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.form.patchValue({
        location: [ctx_r19.form.value.location[0], $event]
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r10.form.value.location[0])("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r10.form.value.location[1])("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](5, _c0));
  }
}
function POIModalComponent_main_4_form_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, POIModalComponent_main_4_form_1_div_1_Template, 6, 0, "div", 8)(2, POIModalComponent_main_4_form_1_div_2_Template, 8, 6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, POIModalComponent_main_4_form_1_div_4_Template, 8, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 9)(6, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nStart"](7, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-form-field", 12)(10, "mat-select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function POIModalComponent_main_4_form_1_Template_mat_select_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r20.location_type = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Map ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Coordinates");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, POIModalComponent_main_4_form_1_ng_container_15_Template, 3, 0, "ng-container", 16)(16, POIModalComponent_main_4_form_1_div_16_Template, 5, 6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r5.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.form.controls.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 8, ctx_r5.building_list)) == null ? null : tmp_2_0.length) > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.form.controls.level_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r5.location_type)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](10, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.location_type === "map_id");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.location_type === "coordinates");
  }
}
function POIModalComponent_main_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "main", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, POIModalComponent_main_4_form_1_Template, 17, 11, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.form);
  }
}
function POIModalComponent_footer_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "footer", 31)(1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function POIModalComponent_footer_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r22.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function POIModalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Saving Point Of Interest...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
class POIModalComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  get building() {
    return this._org.building;
  }
  set building(value) {
    this._org.building = value;
  }
  constructor(_org, _data, _dialog_ref) {
    super();
    this._org = _org;
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this.loading = false;
    this.location_type = this._data?.location instanceof Array ? 'coordinates' : 'map_id';
    this.building_list = this._org.building_list;
    this.level_list = this._org.active_levels;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
      id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this._data?.id || ''),
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this._data?.name || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
      level_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this._data?.level_id || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
      location: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this._data?.location || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])
    });
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.form.value.level_id) {
        const levels = yield _this.level_list.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).toPromise();
        if (levels.length) _this.form.patchValue({
          level_id: levels[0].id
        });
      }
    })();
  }
  save() {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.form.valid) {
        return (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)(`Some form fields are invalid. [${(0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.getInvalidFields)(_this2.form).join(', ')}]`);
      }
      const data = _this2.form.getRawValue();
      if (!data.id) data.id = `POI-${(0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.randomString)(8)}`;
      _this2.loading = true;
      const old_metadata = yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.showMetadata)(_this2._org.building.id, 'map_features', {}).toPromise();
      const metadata = old_metadata.details || {};
      if (!metadata[data.level_id]) metadata[data.level_id] = [];
      metadata[data.level_id] = [...metadata[data.level_id].filter(_ => _.id !== data.id), data].sort((a, b) => a.name.localeCompare(b.name));
      const resp = yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.updateMetadata)(_this2._org.building.id, {
        name: 'map_features',
        details: metadata,
        description: ''
      }).toPromise().catch(e => (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)(e));
      if (resp.id) _this2._dialog_ref.close(resp);
      _this2.loading = false;
    })();
  }
  static #_ = this.ɵfac = function POIModalComponent_Factory(t) {
    return new (t || POIModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: POIModalComponent,
    selectors: [["poi-modal"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
    decls: 8,
    vars: 5,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_nameLabel$$APPS_CONCIERGE_SRC_APP_POI_MANAGER_POI_MODAL_COMPONENT_TS___0 = goog.getMsg(" Location{$startTagSpan}*{$closeTagSpan}: ", {
          "closeTagSpan": "\uFFFD/#8\uFFFD",
          "startTagSpan": "\uFFFD#8\uFFFD"
        }, {
          original_code: {
            "closeTagSpan": "</span>",
            "startTagSpan": "<span>"
          }
        });
        i18n_0 = MSG_EXTERNAL_nameLabel$$APPS_CONCIERGE_SRC_APP_POI_MANAGER_POI_MODAL_COMPONENT_TS___0;
      } else {
        i18n_0 = $localize`:@@nameLabel␟5db92d8696af8c0f3aa9ce5bf1e1305c8c5aa456␟8054963382343596237: Location${"\uFFFD#8\uFFFD"}:START_TAG_SPAN:*${"\uFFFD/#8\uFFFD"}:CLOSE_TAG_SPAN:: `;
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_nameLabel$$APPS_CONCIERGE_SRC_APP_POI_MANAGER_POI_MODAL_COMPONENT_TS____0 = goog.getMsg(" Name{$startTagSpan}*{$closeTagSpan}: ", {
          "closeTagSpan": "\uFFFD/#3\uFFFD",
          "startTagSpan": "\uFFFD#3\uFFFD"
        }, {
          original_code: {
            "closeTagSpan": "</span>",
            "startTagSpan": "<span>"
          }
        });
        i18n_1 = MSG_EXTERNAL_nameLabel$$APPS_CONCIERGE_SRC_APP_POI_MANAGER_POI_MODAL_COMPONENT_TS____0;
      } else {
        i18n_1 = $localize`:@@nameLabel␟5813c0ce49afffe90191cb912c58fa68674457d8␟1912970594501107766: Name${"\uFFFD#3\uFFFD"}:START_TAG_SPAN:*${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_SPAN:: `;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_namePlaceholder$$APPS_CONCIERGE_SRC_APP_POI_MANAGER_POI_MODAL_COMPONENT_TS____1 = goog.getMsg("Name");
        i18n_2 = MSG_EXTERNAL_namePlaceholder$$APPS_CONCIERGE_SRC_APP_POI_MANAGER_POI_MODAL_COMPONENT_TS____1;
      } else {
        i18n_2 = $localize`:@@namePlaceholder␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`;
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_nameLabel$$APPS_CONCIERGE_SRC_APP_POI_MANAGER_POI_MODAL_COMPONENT_TS____2 = goog.getMsg(" Building{$startTagSpan}*{$closeTagSpan}: ", {
          "closeTagSpan": "\uFFFD/#3\uFFFD",
          "startTagSpan": "\uFFFD#3\uFFFD"
        }, {
          original_code: {
            "closeTagSpan": "</span>",
            "startTagSpan": "<span>"
          }
        });
        i18n_3 = MSG_EXTERNAL_nameLabel$$APPS_CONCIERGE_SRC_APP_POI_MANAGER_POI_MODAL_COMPONENT_TS____2;
      } else {
        i18n_3 = $localize`:@@nameLabel␟5e09041a10f5eb39aadfaa1a8dd77f4dc8d77314␟711878476466678637: Building${"\uFFFD#3\uFFFD"}:START_TAG_SPAN:*${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_SPAN:: `;
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_nameLabel$$APPS_CONCIERGE_SRC_APP_POI_MANAGER_POI_MODAL_COMPONENT_TS____3 = goog.getMsg(" Level{$startTagSpan}*{$closeTagSpan}: ", {
          "closeTagSpan": "\uFFFD/#3\uFFFD",
          "startTagSpan": "\uFFFD#3\uFFFD"
        }, {
          original_code: {
            "closeTagSpan": "</span>",
            "startTagSpan": "<span>"
          }
        });
        i18n_4 = MSG_EXTERNAL_nameLabel$$APPS_CONCIERGE_SRC_APP_POI_MANAGER_POI_MODAL_COMPONENT_TS____3;
      } else {
        i18n_4 = $localize`:@@nameLabel␟805d5ab24c829f98df246a63541ee827ce04a4c4␟6308222021008136210: Level${"\uFFFD#3\uFFFD"}:START_TAG_SPAN:*${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_SPAN:: `;
      }
      let i18n_5;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_locationPlaceholder$$APPS_CONCIERGE_SRC_APP_POI_MANAGER_POI_MODAL_COMPONENT_TS____4 = goog.getMsg("Location");
        i18n_5 = MSG_EXTERNAL_locationPlaceholder$$APPS_CONCIERGE_SRC_APP_POI_MANAGER_POI_MODAL_COMPONENT_TS____4;
      } else {
        i18n_5 = $localize`:@@locationPlaceholder␟ed31c09fd77c36238c13d83635f3fe5294c733d2␟471816275243265264:Location`;
      }
      return [["btn", "", "icon", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "max-h-[65vh] overflow-y-auto overflow-x-hidden p-4", 4, "ngIf", "ngIfElse"], ["class", "p-2 flex justify-end border-t border-base-200", 4, "ngIf"], ["load_state", ""], ["btn", "", "icon", "", "mat-dialog-close", ""], [1, "max-h-[65vh]", "overflow-y-auto", "overflow-x-hidden", "p-4"], ["system", "", "class", "flex flex-col w-[28rem] max-w-[calc(100vw-4rem)]", 3, "formGroup", 4, "ngIf"], ["system", "", 1, "flex", "flex-col", "w-[28rem]", "max-w-[calc(100vw-4rem)]", 3, "formGroup"], ["class", "flex flex-col", 4, "ngIf"], [1, "flex", "flex-col"], ["for", "name"], i18n_0, ["appearance", "outline"], ["placeholder", "Location Type", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["value", "map_id"], ["value", "coordinates"], [4, "ngIf"], ["class", "flex items-center space-x-2", 4, "ngIf"], i18n_1, ["matInput", "", "name", "name", "placeholder", i18n_2, "formControlName", "name"], i18n_3, ["placeholder", "Select Building", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], i18n_4, ["formControlName", "level_id", "placeholder", "Select Level"], ["matInput", "", "name", "location", "placeholder", i18n_5, "formControlName", "location"], [1, "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "flex-1"], ["matInput", "", "name", "latitude", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["matInput", "", "name", "longitude", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "p-2", "flex", "justify-end", "border-t", "border-base-200"], ["btn", "", 1, "w-32", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "w-64", "h-64"], ["diameter", "32"], [1, "mt-4"]];
    },
    template: function POIModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "header")(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, POIModalComponent_button_3_Template, 3, 0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, POIModalComponent_main_4_Template, 2, 1, "main", 1)(5, POIModalComponent_footer_5_Template, 3, 0, "footer", 2)(6, POIModalComponent_ng_template_6_Template, 4, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.form.value.id ? "Edit" : "Add", " Point Of Interest");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinner, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogClose, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe]
  });
}

/***/ })

}]);
//# sourceMappingURL=apps_concierge_src_app_poi-manager_poi-manager_module_ts.js.map