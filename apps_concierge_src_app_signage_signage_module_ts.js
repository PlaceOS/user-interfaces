"use strict";
(self["webpackChunkconcierge"] = self["webpackChunkconcierge"] || []).push([["apps_concierge_src_app_signage_signage_module_ts"],{

/***/ 63429:
/*!***************************************************************************!*\
  !*** ./apps/concierge/src/app/signage/signage-display-modal.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignageDisplayModalComponent: () => (/* binding */ SignageDisplayModalComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 64555);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 70462);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 47422);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 15746);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 1062);
/* harmony import */ var _signage_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signage.classes */ 39672);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _signage_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signage-state.service */ 52578);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-spinner */ 33910);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);
/* harmony import */ var _libs_components_src_lib_custom_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/custom-table.component */ 27442);
/* harmony import */ var _libs_components_src_lib_media_duration_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/media-duration.pipe */ 51537);

























const _c0 = ["search_input"];
function SignageDisplayModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 8)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function SignageDisplayModalComponent_main_4_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SignageDisplayModalComponent_main_4_button_37_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      const item_r12 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r13.addPlaylist(item_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 30)(2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "code", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "mediaDuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 2, item_r12.duration));
  }
}
const _c1 = () => ["_index", "name", "type", "duration", "actions"];
const _c2 = () => [" ", "Name", "Type", "Duration", " "];
const _c3 = () => ["3r", "flex", "10r", "6r", "10r"];
const _c4 = (a0, a1) => ({
  duration: a0,
  actions: a1
});
const _c5 = () => ({
  standalone: true
});
function SignageDisplayModalComponent_main_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "main", 9)(1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "textarea", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Orientation");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "mat-form-field", 12)(18, "mat-select", 16)(19, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Landscape");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Portrait");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Orientation is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Playlists");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "custom-table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SignageDisplayModalComponent_main_4_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r15.focusSearchInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, " Add Playlist ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "mat-menu", 22, 23)(32, "mat-form-field", 24)(33, "app-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, " search ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "input", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SignageDisplayModalComponent_main_4_Template_input_ngModelChange_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r17.search.next($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, SignageDisplayModalComponent_main_4_button_37_Template, 7, 4, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](38, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](39, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](31);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](9);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx_r1.playlist_list)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](16, _c1))("display_column", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](17, _c2))("column_size", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](18, _c3))("template", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](19, _c4, _r6, _r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matMenuTriggerFor", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r1.search.getValue())("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](22, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](38, 10, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](39, 14, ctx_r1.new_playlists), 0, 8));
  }
}
function SignageDisplayModalComponent_footer_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "footer", 33)(1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SignageDisplayModalComponent_footer_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r18.saveDisplay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Save Display ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function SignageDisplayModalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 35)(1, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SignageDisplayModalComponent_ng_template_6_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24);
      const row_r20 = restoredCtx.row;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r23.changeOrder(row_r20, -1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "arrow_upward");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SignageDisplayModalComponent_ng_template_6_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24);
      const row_r20 = restoredCtx.row;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r25.changeOrder(row_r20, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "arrow_downward");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SignageDisplayModalComponent_ng_template_6_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24);
      const row_r20 = restoredCtx.row;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r26.previewPlaylist(row_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SignageDisplayModalComponent_ng_template_6_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24);
      const row_r20 = restoredCtx.row;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r27.removePlaylist(row_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const first_r21 = ctx.first;
    const last_r22 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", first_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", last_r22);
  }
}
function SignageDisplayModalComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "code", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "mediaDuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r28 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, data_r28), " ");
  }
}
function SignageDisplayModalComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "main", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-spinner", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Saving Display...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("diameter", 32);
  }
}
class SignageDisplayModalComponent {
  constructor(_data = {}, _state, _dialog, _dialog_ref) {
    this._data = _data;
    this._state = _state;
    this._dialog = _dialog;
    this._dialog_ref = _dialog_ref;
    this.loading = false;
    this.display = this._data;
    this.playlists = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this._state.playlists, this._state.media]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(([playlists, media]) => playlists.map(_ => ({
      ..._,
      duration: _.media.reduce((a, b) => a + (_.media_durations[b] || media.find(({
        id
      }) => id === b)?.duration || 0), 0)
    }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(console.log));
    this.search = new rxjs__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject('');
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({
      id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(this.display.id || ''),
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(this.display.name || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(this.display.description || ''),
      orientation: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(this.display.orientation || 'landscape', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]),
      playlists: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(this.display.playlists || [])
    });
    this.playlist_list = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this.playlists, this.form.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.startWith)(this.form.getRawValue()))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(([playlist_list, _]) => (this.form.getRawValue().playlists || []).map(id => playlist_list.find(_ => _.id === id) || new _signage_classes__WEBPACK_IMPORTED_MODULE_1__.SignagePlaylist({
      id
    }))));
    this.new_playlists = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this.playlists, this.search, this.form.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.startWith)(this.form.getRawValue()))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(([all_playlist, search, _]) => all_playlist.filter(_ => !this.form.getRawValue().playlists.includes(_.id)).filter(_ => _.name.toLowerCase().includes(search.toLowerCase()))));
  }
  focusSearchInput() {
    setTimeout(() => this.search_input.nativeElement?.focus(), 100);
  }
  saveDisplay() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.form.markAllAsTouched();
      _this.form.updateValueAndValidity();
      if (_this.form.invalid) return;
      _this.loading = true;
      yield _this._state.saveDisplay(_this.form.getRawValue()).catch(_ => {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_3__.notifyError)('Error saving display.');
        _this.loading = false;
        throw _;
      });
      _this._dialog_ref.close();
    })();
  }
  addPlaylist(item) {
    const {
      id
    } = item;
    const {
      playlists
    } = this.form.getRawValue();
    this.form.patchValue({
      playlists: [...playlists, id]
    });
  }
  removePlaylist(item) {
    const {
      playlists
    } = this.form.getRawValue();
    const index = playlists.indexOf(item.id);
    const new_playlists = [...playlists];
    new_playlists.splice(index, 1);
    this.form.patchValue({
      playlists: new_playlists
    });
  }
  changeOrder(item, direction) {
    const {
      playlists
    } = this.form.getRawValue();
    const index = playlists.indexOf(item.id);
    const new_playlists = [...playlists];
    new_playlists.splice(index, 1);
    new_playlists.splice(index + direction, 0, item.id);
    this.form.patchValue({
      playlists: new_playlists
    });
  }
  previewPlaylist(item) {}
  static #_ = this.ɵfac = function SignageDisplayModalComponent_Factory(t) {
    return new (t || SignageDisplayModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_signage_state_service__WEBPACK_IMPORTED_MODULE_2__.SignageStateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: SignageDisplayModalComponent,
    selectors: [["signage-display-modal"]],
    viewQuery: function SignageDisplayModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.search_input = _t.first);
      }
    },
    decls: 12,
    vars: 5,
    consts: [[1, "flex", "items-center", "justify-between", "p-2", "border-b", "border-base-300"], [1, "px-2"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-2 flex flex-col", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["class", "p-2 flex items-center justify-end space-x-2 border-t border-base-300", 4, "ngIf"], ["actions_template", ""], ["duration_template", ""], ["load_state", ""], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "p-2", "flex", "flex-col", 3, "formGroup"], ["for", "name"], ["required", ""], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "name", "placeholder", "Name", "formControlName", "name"], ["for", "description"], ["matInput", "", "name", "description", "placeholder", "Description", "formControlName", "description"], ["formControlName", "orientation"], ["value", "landscape"], ["value", "portrait"], ["for", "media"], [1, "block", "w-full", "mb-2", 3, "dataSource", "columns", "display_column", "column_size", "template"], ["btn", "", "matRipple", "", 1, "w-full", 3, "matMenuTriggerFor", "click"], [1, "w-[32rem]", "max-w-[80vw]"], ["media_menu", "matMenu"], ["appearance", "outline", 1, "w-[calc(100%-1rem)]", "mx-2", "no-subscript"], ["matPrefix", "", 1, "text-2xl", "-left-1"], ["matInput", "", "placeholder", "Media Name", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["search_input", ""], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "w-full"], [1, "flex-1", "truncate"], [1, "bg-base-300", "text-base-content"], [1, "p-2", "flex", "items-center", "justify-end", "space-x-2", "border-t", "border-base-300"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "w-full", "flex", "items-center", "justify-end"], ["icon", "", "matRipple", "", "matTooltip", "Move Playlist to previous item", 3, "disabled", "click"], ["icon", "", "matRipple", "", "matTooltip", "Move Playlist to next item", 3, "disabled", "click"], ["icon", "", "matRipple", "", "matTooltip", "Preview Playlist", 3, "click"], ["icon", "", "matRipple", "", "matTooltip", "Remove Playlist from Display", 1, "text-error", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8"], [3, "diameter"], [1, "mt-4"]],
    template: function SignageDisplayModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "header", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, SignageDisplayModalComponent_button_3_Template, 3, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, SignageDisplayModalComponent_main_4_Template, 40, 23, "main", 3)(5, SignageDisplayModalComponent_footer_5_Template, 3, 0, "footer", 4)(6, SignageDisplayModalComponent_ng_template_6_Template, 13, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"])(8, SignageDisplayModalComponent_ng_template_8_Template, 3, 3, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"])(10, SignageDisplayModalComponent_ng_template_10_Template, 4, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx.display.id ? "Edit" : "New", " Display");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatPrefix, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenuTrigger, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltip, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__.MatProgressSpinner, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogClose, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatRipple, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_4__.IconComponent, _libs_components_src_lib_custom_table_component__WEBPACK_IMPORTED_MODULE_5__.CustomTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.SlicePipe, _libs_components_src_lib_media_duration_pipe__WEBPACK_IMPORTED_MODULE_6__.MediaDurationPipe]
  });
}

/***/ }),

/***/ 67315:
/*!**********************************************************************!*\
  !*** ./apps/concierge/src/app/signage/signage-displays.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignageDisplaysComponent: () => (/* binding */ SignageDisplaysComponent)
/* harmony export */ });
/* harmony import */ var _signage_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signage-state.service */ 52578);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 64555);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 47422);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ 78173);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);
/* harmony import */ var _libs_components_src_lib_custom_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/custom-table.component */ 27442);
/* harmony import */ var _libs_components_src_lib_media_duration_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/media-duration.pipe */ 51537);











function SignageDisplaysComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r7 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r7.playlists.length, " Playlist(s) ");
  }
}
function SignageDisplaysComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "mediaDuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r8 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, row_r8.duration));
  }
}
function SignageDisplaysComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SignageDisplaysComponent_ng_template_5_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const row_r9 = restoredCtx.row;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.editItem(row_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SignageDisplaysComponent_ng_template_5_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const row_r9 = restoredCtx.row;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.deleteItem(row_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function SignageDisplaysComponent_mat_progress_bar_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-progress-bar", 7);
  }
}
const _c0 = () => ["name", "description", "playlists", "orientation", "duration", "actions"];
const _c1 = () => ["Name", "Description", "Media", "Orientation", "Duration", " "];
const _c2 = () => ["8r", "flex", "8r", "7r", "6r", "5r"];
const _c3 = (a0, a1, a2) => ({
  playlists: a0,
  duration: a1,
  actions: a2
});
class SignageDisplaysComponent {
  constructor(_state) {
    this._state = _state;
    this.loading = this._state.loading;
    this.displays = this._state.displays;
    this.playlists = this._state.playlists;
    this.media = this._state.media;
    this.deleteItem = i => this._state.removePlaylist(i);
    this.editItem = i => this._state.editPlaylist(i);
    this.display_list = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([this.displays, this.playlists, this.media]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(([displays, playlists, media]) => (displays || []).map(display => ({
      ...display,
      playlists: display.playlists?.map(id => playlists.find(i => i.id === id)) || [],
      duration: display.playlists.reduce((acc, id) => {
        const playlist = playlists.find(_ => _.id === id);
        if (!playlist) return acc;
        return acc + playlist.media.reduce((acc, item) => acc + (playlist.media_durations[item] || media.find(m => m.id === item)?.duration || 15), 0);
      }, 0)
    }))));
  }
  static #_ = this.ɵfac = function SignageDisplaysComponent_Factory(t) {
    return new (t || SignageDisplaysComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_signage_state_service__WEBPACK_IMPORTED_MODULE_0__.SignageStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SignageDisplaysComponent,
    selectors: [["signage-displays"]],
    decls: 9,
    vars: 15,
    consts: [[1, "block", "min-w-[52rem]", 3, "dataSource", "columns", "display_column", "column_size", "template"], ["playlists_template", ""], ["duration_template", ""], ["actions_template", ""], ["class", "absolute inset-x-0 bottom-0", "mode", "indeterminate", 4, "ngIf"], ["icon", "", "matRipple", "", 3, "click"], ["icon", "", "matRipple", "", 1, "text-error", 3, "click"], ["mode", "indeterminate", 1, "absolute", "inset-x-0", "bottom-0"]],
    template: function SignageDisplaysComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "custom-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SignageDisplaysComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"])(3, SignageDisplaysComponent_ng_template_3_Template, 3, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"])(5, SignageDisplaysComponent_ng_template_5_Template, 6, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"])(7, SignageDisplaysComponent_mat_progress_bar_7_Template, 1, 0, "mat-progress-bar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "async");
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.display_list)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c0))("display_column", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c1))("column_size", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c2))("template", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](11, _c3, _r1, _r3, _r5));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 6, ctx.loading));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__.MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent, _libs_components_src_lib_custom_table_component__WEBPACK_IMPORTED_MODULE_2__.CustomTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _libs_components_src_lib_media_duration_pipe__WEBPACK_IMPORTED_MODULE_3__.MediaDurationPipe]
  });
}

/***/ }),

/***/ 35910:
/*!*********************************************************************************!*\
  !*** ./apps/concierge/src/app/signage/signage-media-preview-modal.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignageMediaPreviewModalComponent: () => (/* binding */ SignageMediaPreviewModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ 33910);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);








function SignageMediaPreviewModalComponent_main_6_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 10);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r4.resource.toString(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function SignageMediaPreviewModalComponent_main_6_video_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "video", 11);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r5.resource.toString(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function SignageMediaPreviewModalComponent_main_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SignageMediaPreviewModalComponent_main_6_img_2_Template, 1, 1, "img", 8)(3, SignageMediaPreviewModalComponent_main_6_video_3_Template, 1, 1, "video", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.type === "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.type === "video");
  }
}
function SignageMediaPreviewModalComponent_footer_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 12)(1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignageMediaPreviewModalComponent_footer_7_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.save.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Save Media ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function SignageMediaPreviewModalComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("diameter", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.loading);
  }
}
class SignageMediaPreviewModalComponent {
  constructor(_data) {
    this._data = _data;
    this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.loading = '';
    this.resource = this._data.url;
    this.type = this._data.type;
    this.name = this._data.name;
    this.file = this._data.file;
    this.can_save = this._data.save !== false;
  }
  static #_ = this.ɵfac = function SignageMediaPreviewModalComponent_Factory(t) {
    return new (t || SignageMediaPreviewModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SignageMediaPreviewModalComponent,
    selectors: [["signage-media-preview-modal"]],
    outputs: {
      save: "save"
    },
    decls: 10,
    vars: 4,
    consts: [[1, "flex", "items-center", "justify-between", "p-2", "border-b", "border-base-300"], [1, "px-2"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], ["class", "bg-base-200", 4, "ngIf", "ngIfElse"], ["class", "p-2 flex items-center justify-end space-x-2 border-t border-base-300", 4, "ngIf"], ["load_state", ""], [1, "bg-base-200"], [1, "max-w-[80vw]", "max-h-[65vh]", "w-[80vw]", "h-[65vh]", "flex", "items-center", "justify-center"], ["class", "max-w-full max-h-full", 3, "src", 4, "ngIf"], ["class", "max-w-full max-h-full", "autoplay", "", "controls", "", 3, "src", 4, "ngIf"], [1, "max-w-full", "max-h-full", 3, "src"], ["autoplay", "", "controls", "", 1, "max-w-full", "max-h-full", 3, "src"], [1, "p-2", "flex", "items-center", "justify-end", "space-x-2", "border-t", "border-base-300"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8", "w-[28rem]", "h-[20rem]", "max-w-[80vw]", "max-h-[65vh]"], [3, "diameter"]],
    template: function SignageMediaPreviewModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2)(4, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SignageMediaPreviewModalComponent_main_6_Template, 4, 2, "main", 3)(7, SignageMediaPreviewModalComponent_footer_7_Template, 3, 0, "footer", 4)(8, SignageMediaPreviewModalComponent_ng_template_8_Template, 4, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Preview - ", ctx.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.can_save && !ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__.MatProgressSpinner, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_0__.IconComponent]
  });
}

/***/ }),

/***/ 22005:
/*!*******************************************************************!*\
  !*** ./apps/concierge/src/app/signage/signage-media.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignageMediaComponent: () => (/* binding */ SignageMediaComponent)
/* harmony export */ });
/* harmony import */ var _signage_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signage-state.service */ 52578);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ 33910);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);
/* harmony import */ var _libs_components_src_lib_media_duration_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/media-duration.pipe */ 51537);
/* harmony import */ var _libs_components_src_lib_thumbnail_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/thumbnail.pipe */ 44579);










function SignageMediaComponent_ng_container_1_ng_container_1_div_2_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "thumbnail");
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", item_r8.type === "video" ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, item_r8.url) : item_r8.url, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function SignageMediaComponent_ng_container_1_ng_container_1_div_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "mediaDuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 1, item_r8.duration), " ");
  }
}
function SignageMediaComponent_ng_container_1_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7)(1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SignageMediaComponent_ng_container_1_ng_container_1_div_2_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const item_r8 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.previewMedia(item_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SignageMediaComponent_ng_container_1_ng_container_1_div_2_img_2_Template, 2, 3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "thumbnail");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, SignageMediaComponent_ng_container_1_ng_container_1_div_2_div_12_Template, 5, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 15)(14, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "button", 17)(17, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r8.type === "video" ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 5, item_r8.url) : item_r8.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r8.type === "image" ? "Image" : "Video", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r7.count || 0, " Playlist(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r8.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r8.name, " ");
  }
}
function SignageMediaComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SignageMediaComponent_ng_container_1_ng_container_1_div_2_Template, 19, 7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, ctx_r6.media));
  }
}
function SignageMediaComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SignageMediaComponent_ng_container_1_ng_container_1_Template, 4, 3, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, ctx_r0.media)) == null ? null : tmp_0_0.length)("ngIfElse", _r3);
  }
}
function SignageMediaComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 21)(2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 23)(4, "app-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Drop file to upload file");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function SignageMediaComponent_div_3_Template_input_change_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.previewFile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function SignageMediaComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26)(1, "app-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "hide_image");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "No media found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function SignageMediaComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
class SignageMediaComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  onEnter(e) {
    this.show_dropzone = e?.dataTransfer?.types.includes('Files');
  }
  hideOverlay(e) {
    if (!(e.target instanceof HTMLInputElement)) {
      e.preventDefault();
    }
    this.timeout('hide_overlay', () => this.show_dropzone = false);
  }
  constructor(_state) {
    super();
    this._state = _state;
    this.loading = this._state.loading;
    this.media = this._state.media;
    this.show_dropzone = false;
    this.previewMedia = item => this._state.previewMedia(item);
  }
  previewFile(event) {
    const element = event.target;
    /* istanbul ignore else */
    if (!element?.files?.length) return;
    const files = element.files;
    const file = files[0];
    if (file && (file.type.includes('image') || file.type.includes('video'))) {
      this._state.previewFileMedia(file);
    } else {
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)('Invalid file type.');
    }
  }
  static #_ = this.ɵfac = function SignageMediaComponent_Factory(t) {
    return new (t || SignageMediaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_signage_state_service__WEBPACK_IMPORTED_MODULE_0__.SignageStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: SignageMediaComponent,
    selectors: [["signage-media"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
    decls: 8,
    vars: 5,
    consts: [[1, "relative", "bg-base-200", "min-h-full", "w-full", 3, "dragenter", "drop"], [4, "ngIf", "ngIfElse"], ["class", "absolute inset-0", 4, "ngIf"], ["empty_template", ""], ["load_template", ""], [1, "flex", "flex-wrap", "items-start", "justify-start", "w-full", "p-2"], ["class", "m-2 p-2 bg-base-100 rounded-lg overflow-hidden h-[13rem] w-[17rem] border border-base-300 shadow", 4, "ngFor", "ngForOf"], [1, "m-2", "p-2", "bg-base-100", "rounded-lg", "overflow-hidden", "h-[13rem]", "w-[17rem]", "border", "border-base-300", "shadow"], [1, "w-64", "h-36", "overflow-hidden", "bg-base-200", "rounded", "m-0", "p-0", "relative", 3, "click"], ["class", "object-contain w-full h-full", 3, "src", 4, "ngIf"], [1, "absolute", "top-2", "left-2", "flex", "items-center", "justify-center", "rounded", "overflow-hidden"], [1, "absolute", "inset-0", "bg-base-content", "opacity-60", "z-0"], [1, "relative", "text-base-100", "z-10", "px-2", "py-1", "text-xs"], [1, "absolute", "top-2", "right-2", "flex", "items-center", "justify-center", "rounded", "overflow-hidden"], ["class", "absolute bottom-2 right-2 flex items-center justify-center rounded overflow-hidden", 4, "ngIf"], [1, "flex", "items-center", "justify-between", "space-x-2"], [1, "truncate", "flex-1", "w-1/2", "px-2"], ["icon", "", "matRipple", ""], [1, "object-contain", "w-full", "h-full", 3, "src"], [1, "absolute", "bottom-2", "right-2", "flex", "items-center", "justify-center", "rounded", "overflow-hidden"], [1, "absolute", "inset-0"], [1, "absolute", "inset-0", "bg-base-200"], [1, "absolute", "inset-0", "bg-base-content", "opacity-70"], [1, "absolute", "inset-4", "border-4", "border-dashed", "border-neutral", "text-base-100", "rounded-xl", "flex", "flex-col", "items-center", "justify-center"], [1, "text-8xl"], ["type", "file", 1, "absolute", "inset-0", "w-full", "opacity-0", 3, "change"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "opacity-30"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], ["diameter", "32"]],
    template: function SignageMediaComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dragenter", function SignageMediaComponent_Template_div_dragenter_0_listener($event) {
          return ctx.onEnter($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveDocument"])("drop", function SignageMediaComponent_Template_div_drop_0_listener($event) {
          return ctx.hideOverlay($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveDocument"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SignageMediaComponent_ng_container_1_Template, 3, 4, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SignageMediaComponent_div_3_Template, 9, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SignageMediaComponent_ng_template_4_Template, 5, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(6, SignageMediaComponent_ng_template_6_Template, 4, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 3, ctx.loading))("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.show_dropzone);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MatProgressSpinner, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_2__.IconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _libs_components_src_lib_media_duration_pipe__WEBPACK_IMPORTED_MODULE_3__.MediaDurationPipe, _libs_components_src_lib_thumbnail_pipe__WEBPACK_IMPORTED_MODULE_4__.ThumbnailPipe],
    styles: ["[_nghost-%COMP%] {\n                min-height: 100%;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvc2lnbmFnZS9zaWduYWdlLW1lZGlhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksZ0JBQWdCO1lBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 350:
/*!****************************************************************************!*\
  !*** ./apps/concierge/src/app/signage/signage-playlist-modal.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignagePlaylistModalComponent: () => (/* binding */ SignagePlaylistModalComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _signage_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signage-state.service */ 52578);
/* harmony import */ var _signage_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signage.classes */ 39672);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 1062);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 47422);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 70462);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 64555);
/* harmony import */ var _signage_media_preview_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signage-media-preview-modal.component */ 35910);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-spinner */ 33910);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);
/* harmony import */ var _libs_components_src_lib_custom_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/custom-table.component */ 27442);
/* harmony import */ var _libs_components_src_lib_media_duration_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/media-duration.pipe */ 51537);


























const _c0 = ["search_input"];
function SignagePlaylistModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 8)(1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function SignagePlaylistModalComponent_main_4_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SignagePlaylistModalComponent_main_4_button_25_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14);
      const item_r12 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r13.addMedia(item_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 27)(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "code", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "code", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "mediaDuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r12.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 3, item_r12.duration));
  }
}
const _c1 = () => ["_index", "name", "type", "duration", "actions"];
const _c2 = () => [" ", "Name", "Type", "Duration", " "];
const _c3 = () => ["3r", "flex", "10r", "6r", "10r"];
const _c4 = (a0, a1) => ({
  duration: a0,
  actions: a1
});
const _c5 = () => ({
  standalone: true
});
function SignagePlaylistModalComponent_main_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "main", 9)(1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "textarea", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Media");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "custom-table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SignagePlaylistModalComponent_main_4_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r15.focusSearchInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, " Add Media ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "mat-menu", 19, 20)(20, "mat-form-field", 21)(21, "app-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, " search ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "input", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function SignagePlaylistModalComponent_main_4_Template_input_ngModelChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r17.search.next($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, SignagePlaylistModalComponent_main_4_button_25_Template, 9, 5, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](26, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](27, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](19);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](7);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx_r1.media_list)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](16, _c1))("display_column", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](17, _c2))("column_size", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](18, _c3))("template", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](19, _c4, _r4, _r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matMenuTriggerFor", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r1.search.getValue())("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](22, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](26, 10, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](27, 14, ctx_r1.new_media), 0, 8));
  }
}
function SignagePlaylistModalComponent_footer_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "footer", 31)(1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SignagePlaylistModalComponent_footer_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r18.savePlaylist());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Save Playlist ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function SignagePlaylistModalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 33)(1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "mediaDuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-menu", 34, 35)(6, "mat-form-field", 21)(7, "mat-select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function SignagePlaylistModalComponent_ng_template_6_Template_mat_select_ngModelChange_7_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r23);
      const row_r20 = restoredCtx.row;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r22.setDuration(row_r20.id, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Use Media Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "5 seconds");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "10 seconds");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "15 seconds");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "30 seconds");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "45 seconds");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "1 minute");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "1 minute 15 seconds");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "1 minute 30 seconds");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "1 minute 45 seconds");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "2 minute");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "2 minute 15 seconds");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "2 minute 30 seconds");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "2 minute 45 seconds");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "3 minute");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "3 minute 15 seconds");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "3 minute 30 seconds");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "3 minute 45 seconds");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, "4 minute");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, "4 minute 15 seconds");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "4 minute 30 seconds");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51, "4 minute 45 seconds");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, "5 minute");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const row_r20 = ctx.row;
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](5);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("pointer-events-none", row_r20.type !== "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matMenuTriggerFor", _r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("bg-warning", ctx_r3.form.value.media_durations[row_r20.id])("text-warning-content", ctx_r3.form.value.media_durations[row_r20.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 33, ctx_r3.form.value.media_durations[row_r20.id] || row_r20.duration), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r3.form.value.media_durations[row_r20.id] || 0)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](35, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 300);
  }
}
function SignagePlaylistModalComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 38)(1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SignagePlaylistModalComponent_ng_template_8_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28);
      const row_r24 = restoredCtx.row;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r27.changeOrder(row_r24, -1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "arrow_upward");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SignagePlaylistModalComponent_ng_template_8_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28);
      const row_r24 = restoredCtx.row;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r29.changeOrder(row_r24, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "arrow_downward");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SignagePlaylistModalComponent_ng_template_8_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28);
      const row_r24 = restoredCtx.row;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r30.previewMedia(row_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SignagePlaylistModalComponent_ng_template_8_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28);
      const row_r24 = restoredCtx.row;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r31.removeMedia(row_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const first_r25 = ctx.first;
    const last_r26 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", first_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", last_r26);
  }
}
function SignagePlaylistModalComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "main", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-spinner", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Saving Playlist...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("diameter", 32);
  }
}
class SignagePlaylistModalComponent {
  constructor(_data = {}, _state, _dialog, _dialog_ref) {
    this._data = _data;
    this._state = _state;
    this._dialog = _dialog;
    this._dialog_ref = _dialog_ref;
    this.loading = false;
    this.playlist = this._data;
    this.media = this._state.media;
    this.search = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject('');
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
      id: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.playlist.id || ''),
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.playlist.name || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.playlist.description || ''),
      media: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.playlist.media || []),
      media_durations: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.playlist.media_durations || {})
    });
    this.media_list = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([this.media, this.form.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)(this.form.getRawValue()))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(([media_list, {
      media
    }]) => (this.form.getRawValue().media || []).map(id => media_list.find(_ => _.id === id) || new _signage_classes__WEBPACK_IMPORTED_MODULE_2__.SignageMedia({
      id
    }))));
    this.new_media = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([this.media, this.search, this.form.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)(this.form.getRawValue()))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(([all_media, search, _]) => all_media.filter(_ => !this.form.getRawValue().media.includes(_.id)).filter(_ => _.name.toLowerCase().includes(search.toLowerCase()))));
  }
  indexOf(id) {
    return this.form.getRawValue().media.indexOf(id);
  }
  focusSearchInput() {
    setTimeout(() => this.search_input.nativeElement?.focus(), 100);
  }
  savePlaylist() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.form.markAllAsTouched();
      _this.form.updateValueAndValidity();
      if (_this.form.invalid) return;
      _this.loading = true;
      yield _this._state.savePlaylist(_this.form.getRawValue()).catch(_ => {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_4__.notifyError)('Error saving playlist');
        _this.loading = false;
        throw _;
      });
      _this._dialog_ref.close();
    })();
  }
  setDuration(id, duration) {
    const {
      media_durations
    } = this.form.getRawValue();
    const new_media_durations = {
      ...media_durations
    };
    new_media_durations[id] = duration;
    this.form.patchValue({
      media_durations: new_media_durations
    });
  }
  addMedia(item) {
    const {
      id
    } = item;
    const {
      media
    } = this.form.getRawValue();
    this.form.patchValue({
      media: [...media, id]
    });
  }
  removeMedia(item) {
    const {
      media,
      media_durations
    } = this.form.getRawValue();
    const index = media.indexOf(item.id);
    const new_media = [...media];
    delete media_durations[item.id];
    new_media.splice(index, 1);
    this.form.patchValue({
      media: new_media,
      media_durations: {
        ...media_durations
      }
    });
  }
  changeOrder(item, direction) {
    const {
      media
    } = this.form.getRawValue();
    const index = media.indexOf(item.id);
    const new_media = [...media];
    new_media.splice(index, 1);
    new_media.splice(index + direction, 0, item.id);
    this.form.patchValue({
      media: new_media
    });
  }
  previewMedia(item) {
    const {
      url,
      type,
      name
    } = item;
    const ref = this._dialog.open(_signage_media_preview_modal_component__WEBPACK_IMPORTED_MODULE_3__.SignageMediaPreviewModalComponent, {
      data: {
        url,
        type,
        name,
        save: false
      }
    });
    ref.afterClosed().subscribe(() => URL.revokeObjectURL(url));
  }
  static #_ = this.ɵfac = function SignagePlaylistModalComponent_Factory(t) {
    return new (t || SignagePlaylistModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_signage_state_service__WEBPACK_IMPORTED_MODULE_1__.SignageStateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: SignagePlaylistModalComponent,
    selectors: [["signage-playlist-modal"]],
    viewQuery: function SignagePlaylistModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.search_input = _t.first);
      }
    },
    decls: 12,
    vars: 5,
    consts: [[1, "flex", "items-center", "justify-between", "p-2", "border-b", "border-base-300"], [1, "px-2"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-2 flex flex-col", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["class", "p-2 flex items-center justify-end space-x-2 border-t border-base-300", 4, "ngIf"], ["duration_template", ""], ["actions_template", ""], ["load_state", ""], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "p-2", "flex", "flex-col", 3, "formGroup"], ["for", "name"], ["required", ""], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "name", "placeholder", "Name", "formControlName", "name"], ["for", "description"], ["matInput", "", "name", "description", "placeholder", "Description", "formControlName", "description"], ["for", "media"], [1, "block", "w-full", "mb-2", 3, "dataSource", "columns", "display_column", "column_size", "template"], ["btn", "", "matRipple", "", 1, "w-full", 3, "matMenuTriggerFor", "click"], [1, "w-[32rem]", "max-w-[80vw]"], ["media_menu", "matMenu"], ["appearance", "outline", 1, "w-[calc(100%-1rem)]", "mx-2", "no-subscript"], ["matPrefix", "", 1, "text-2xl", "-left-1"], ["matInput", "", "placeholder", "Media Name", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["search_input", ""], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "w-full"], [1, "flex-1", "truncate"], [1, "capitalize"], [1, "bg-base-300", "text-base-content"], [1, "p-2", "flex", "items-center", "justify-end", "space-x-2", "border-t", "border-base-300"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], ["matTooltip", "Set Custom Duration", 3, "matMenuTriggerFor"], [1, "w-[20rem]", "max-w-[80vw]"], ["duration_menu", "matMenu"], [3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value"], [1, "w-full", "flex", "items-center", "justify-end"], ["icon", "", "matRipple", "", "matTooltip", "Move Media to previous item", 3, "disabled", "click"], ["icon", "", "matRipple", "", "matTooltip", "Move Media to next item", 3, "disabled", "click"], ["icon", "", "matRipple", "", "matTooltip", "Preview Media", 3, "click"], ["icon", "", "matRipple", "", "matTooltip", "Remove Media from Playlist", 1, "text-error", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8"], [3, "diameter"], [1, "mt-4"]],
    template: function SignagePlaylistModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "header", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, SignagePlaylistModalComponent_button_3_Template, 3, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, SignagePlaylistModalComponent_main_4_Template, 28, 23, "main", 3)(5, SignagePlaylistModalComponent_footer_5_Template, 3, 0, "footer", 4)(6, SignagePlaylistModalComponent_ng_template_6_Template, 54, 36, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"])(8, SignagePlaylistModalComponent_ng_template_8_Template, 13, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"])(10, SignagePlaylistModalComponent_ng_template_10_Template, 4, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx.playlist.id ? "Edit" : "New", " Playlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatPrefix, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenuTrigger, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltip, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__.MatProgressSpinner, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogClose, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatRipple, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_5__.IconComponent, _libs_components_src_lib_custom_table_component__WEBPACK_IMPORTED_MODULE_6__.CustomTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.SlicePipe, _libs_components_src_lib_media_duration_pipe__WEBPACK_IMPORTED_MODULE_7__.MediaDurationPipe]
  });
}

/***/ }),

/***/ 81998:
/*!***********************************************************************!*\
  !*** ./apps/concierge/src/app/signage/signage-playlists.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignagePlaylistsComponent: () => (/* binding */ SignagePlaylistsComponent)
/* harmony export */ });
/* harmony import */ var _signage_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signage-state.service */ 52578);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 47422);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 64555);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ 78173);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon.component */ 94888);
/* harmony import */ var _libs_components_src_lib_custom_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/custom-table.component */ 27442);
/* harmony import */ var _libs_components_src_lib_media_duration_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/media-duration.pipe */ 51537);











function SignagePlaylistsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r7 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r7.media.length, " Media Item(s) ");
  }
}
function SignagePlaylistsComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "mediaDuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r8 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, row_r8.duration));
  }
}
function SignagePlaylistsComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SignagePlaylistsComponent_ng_template_5_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const row_r9 = restoredCtx.row;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.editItem(row_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SignagePlaylistsComponent_ng_template_5_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const row_r9 = restoredCtx.row;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.deleteItem(row_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "app-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function SignagePlaylistsComponent_mat_progress_bar_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-progress-bar", 7);
  }
}
const _c0 = () => ["name", "description", "media", "duration", "actions"];
const _c1 = () => ["Name", "Description", "Media", "Duration", " "];
const _c2 = () => ["8r", "flex", "10r", "6r", "5r"];
const _c3 = (a0, a1, a2) => ({
  media: a0,
  duration: a1,
  actions: a2
});
class SignagePlaylistsComponent {
  constructor(_state) {
    this._state = _state;
    this.loading = this._state.loading;
    this.playlists = this._state.playlists;
    this.media = this._state.media;
    this.deleteItem = i => this._state.removePlaylist(i);
    this.editItem = i => this._state.editPlaylist(i);
    this.playlist_list = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([this.playlists, this.media]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(([playlists, media]) => playlists.map(playlist => ({
      ...playlist,
      duration: playlist.media.reduce((acc, item) => acc + (playlist.media_durations[item] || media.find(m => m.id === item)?.duration || 15), 0)
    }))));
  }
  static #_ = this.ɵfac = function SignagePlaylistsComponent_Factory(t) {
    return new (t || SignagePlaylistsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_signage_state_service__WEBPACK_IMPORTED_MODULE_0__.SignageStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SignagePlaylistsComponent,
    selectors: [["signage-playlists"]],
    decls: 9,
    vars: 15,
    consts: [[1, "block", "min-w-[48rem]", 3, "dataSource", "columns", "display_column", "column_size", "template"], ["media_template", ""], ["duration_template", ""], ["actions_template", ""], ["class", "absolute inset-x-0 bottom-0", "mode", "indeterminate", 4, "ngIf"], ["icon", "", "matRipple", "", 3, "click"], ["icon", "", "matRipple", "", 1, "text-error", 3, "click"], ["mode", "indeterminate", 1, "absolute", "inset-x-0", "bottom-0"]],
    template: function SignagePlaylistsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "custom-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SignagePlaylistsComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"])(3, SignagePlaylistsComponent_ng_template_3_Template, 3, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"])(5, SignagePlaylistsComponent_ng_template_5_Template, 6, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"])(7, SignagePlaylistsComponent_mat_progress_bar_7_Template, 1, 0, "mat-progress-bar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "async");
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.playlist_list)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c0))("display_column", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c1))("column_size", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c2))("template", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](11, _c3, _r1, _r3, _r5));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 6, ctx.loading));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__.MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatRipple, _libs_components_src_lib_icon_component__WEBPACK_IMPORTED_MODULE_1__.IconComponent, _libs_components_src_lib_custom_table_component__WEBPACK_IMPORTED_MODULE_2__.CustomTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _libs_components_src_lib_media_duration_pipe__WEBPACK_IMPORTED_MODULE_3__.MediaDurationPipe]
  });
}

/***/ }),

/***/ 52578:
/*!*****************************************************************!*\
  !*** ./apps/concierge/src/app/signage/signage-state.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignageStateService: () => (/* binding */ SignageStateService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 5745);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ 64331);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 70462);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 64555);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 9681);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 85046);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 36520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 58175);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 47422);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 680);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 46939);
/* harmony import */ var _signage_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signage.classes */ 39672);
/* harmony import */ var _signage_media_preview_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signage-media-preview-modal.component */ 35910);
/* harmony import */ var _signage_playlist_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signage-playlist-modal.component */ 350);
/* harmony import */ var _signage_display_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signage-display-modal.component */ 63429);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 17401);














class SignageStateService {
  constructor(_org, _dialog) {
    this._org = _org;
    this._dialog = _dialog;
    this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(false);
    this._change = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(0);
    this._active_upload = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
    this.loading = this._loading.asObservable();
    this.media = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this._org.active_building, this._change]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(([_]) => !!_?.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(([bld]) => (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.showMetadata)(bld.id, 'signage-media').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)({})))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(_ => (_.details instanceof Array ? _.details : null) || []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.shareReplay)(1));
    this.playlists = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this._org.active_building, this._change]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(([_]) => !!_?.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(([bld]) => (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.showMetadata)(bld.id, 'signage-playlists').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)({})))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(_ => _.details instanceof Array ? _.details : []));
    this.displays = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this._org.active_building, this._change]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(([_]) => !!_?.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(([bld]) => (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.showMetadata)(bld.id, 'signage-displays').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)({})))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(_ => _.details instanceof Array ? _.details : []));
    this.zones = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this._org.active_building, this._change]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(([_]) => !!_?.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(([bld]) => (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.queryZones)({
      parent_id: bld.id,
      tags: 'signage',
      limit: 100
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)({
      data: []
    })))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(_ => _.data || []));
  }
  editPlaylist(playlist = new _signage_classes__WEBPACK_IMPORTED_MODULE_4__.SignagePlaylist()) {
    const ref = this._dialog.open(_signage_playlist_modal_component__WEBPACK_IMPORTED_MODULE_6__.SignagePlaylistModalComponent, {
      data: playlist
    });
    ref.afterClosed().subscribe(() => this._change.next(Date.now()));
  }
  savePlaylist(playlist, remove = false) {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const bld = _this._org.building.id;
      const playlist_list = (yield _this.playlists.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1)).toPromise()) || [];
      const idx = playlist_list.findIndex(_ => _.id === playlist.id);
      if (idx >= 0) playlist_list.splice(idx, 1);
      if (!playlist.id) playlist.id = `playlist-${(0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.randomString)(8)}`;
      if (!remove) playlist_list.push(playlist);
      yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.updateMetadata)(bld, {
        name: 'signage-playlists',
        details: playlist_list,
        description: 'Playlists for signage displays'
      }).toPromise();
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)(`Successfully ${remove ? 'removed' : 'saved'} playlist.`);
      _this._change.next(Date.now());
    })();
  }
  removePlaylist(playlist) {
    var _this2 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.savePlaylist(playlist, true);
    })();
  }
  editDisplay(display = new _signage_classes__WEBPACK_IMPORTED_MODULE_4__.SignageDisplay()) {
    const ref = this._dialog.open(_signage_display_modal_component__WEBPACK_IMPORTED_MODULE_7__.SignageDisplayModalComponent, {
      data: display
    });
    ref.afterClosed().subscribe(() => this._change.next(Date.now()));
  }
  saveDisplay(display, remove = false) {
    var _this3 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const bld = _this3._org.building.id;
      const display_list = yield _this3.displays.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1)).toPromise();
      const idx = display_list.findIndex(_ => _.id === display.id);
      if (idx >= 0) display_list.splice(idx, 1);
      if (!display.id) display.id = `display-${(0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.randomString)(8)}`;
      if (!remove) display_list.push(display);
      yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.updateMetadata)(bld, {
        name: 'signage-displays',
        details: display_list,
        description: 'Displays for signage displays'
      }).toPromise();
      (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifySuccess)(`Successfully ${remove ? 'removed' : 'saved'} display.`);
      _this3._change.next(Date.now());
    })();
  }
  removeDisplay(display) {
    var _this4 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4.saveDisplay(display, true);
    })();
  }
  previewMedia(item) {
    const {
      url,
      type,
      name
    } = item;
    const ref = this._dialog.open(_signage_media_preview_modal_component__WEBPACK_IMPORTED_MODULE_5__.SignageMediaPreviewModalComponent, {
      data: {
        url,
        type,
        name,
        save: false
      }
    });
    ref.afterClosed().subscribe(() => URL.revokeObjectURL(url));
  }
  previewFileMedia(media) {
    var _this5 = this;
    const url = URL.createObjectURL(media);
    const type = media.type.includes('image') ? 'image' : 'video';
    const ref = this._dialog.open(_signage_media_preview_modal_component__WEBPACK_IMPORTED_MODULE_5__.SignageMediaPreviewModalComponent, {
      data: {
        url,
        type,
        name: media.name,
        save: true,
        file: media
      }
    });
    ref.afterClosed().subscribe(() => URL.revokeObjectURL(url));
    ref.componentInstance.save.subscribe( /*#__PURE__*/(0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      ref.componentInstance.loading = 'Saving...';
      yield _this5.addMedia(media).catch(e => {
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.notifyError)('Error saving media.');
        ref.componentInstance.loading = '';
        throw e;
      });
      ref.close();
    }));
  }
  addMedia(file) {
    var _this6 = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const upload = () => new Promise((resolve, reject) => {
        let state = null;
        let resolved = false;
        (0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.uploadFile)(file).subscribe(s => {
          state = s;
          if (s.link) {
            resolved = true;
            resolve(s.link);
          }
        }, reject, () => !resolved ? resolve(state) : null);
      });
      const media = yield upload();
      const media_list = yield _this6.media.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1)).toPromise();
      const video_metadata = new Promise(resolve => {
        const url = URL.createObjectURL(file);
        // file is loaded
        if (file.type.includes('video')) {
          let video = document.createElement('video');
          video.src = url.toString();
          video.addEventListener('loadedmetadata', () => {
            const {
              videoWidth,
              videoHeight
            } = video;
            resolve([videoWidth > videoHeight, duration]);
          });
          video.load();
        } else {
          let img = new Image();
          img.onload = () => resolve([img.width > img.height, 0]);
          img.src = url.toString(); // is the data URL because called with readAsDataURL
        }
      });
      const [is_landscape, duration] = yield video_metadata;
      media_list.push({
        id: `media-${(0,_placeos_common__WEBPACK_IMPORTED_MODULE_1__.randomString)(8)}`,
        name: file.name,
        description: '',
        url: media,
        type: file.type.includes('image') ? 'image' : 'video',
        orientation: is_landscape ? 'landscape' : 'portrait',
        duration: duration || 15
      });
      const bld = _this6._org.building.id;
      yield (0,_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__.updateMetadata)(bld, {
        name: 'signage-media',
        details: media_list,
        description: 'Media for signage displays'
      }).toPromise();
      _this6._active_upload.next(null);
      _this6._change.next(Date.now());
    })();
  }
  static #_ = this.ɵfac = function SignageStateService_Factory(t) {
    return new (t || SignageStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialog));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjectable"]({
    token: SignageStateService,
    factory: SignageStateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 99837:
/*!********************************************************************!*\
  !*** ./apps/concierge/src/app/signage/signage-topbar.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignageTopbarComponent: () => (/* binding */ SignageTopbarComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 17627);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _placeos_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/organisation */ 5745);
/* harmony import */ var _signage_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signage-state.service */ 52578);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 27947);










class SignageTopbarComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  // public readonly filters = this._state.filters;
  // /** Set filtered date */
  // public readonly setDate = (date) => this._state.setFilters({ date });
  // /** Set filtered date */
  // public readonly setFilters = (filters) => this._state.setFilters(filters);
  // /** Set filter string */
  // public readonly setSearch = (str) => this._state.setSearchString(str);
  // /** Update active zones for desks */
  // public readonly updateZones = (zones) => {
  //     this._router.navigate([], {
  //         relativeTo: this._route,
  //         queryParams: { zone_ids: zones.join(',') },
  //     });
  //     this._state.setFilters({ zones });
  // };
  constructor(_state, _org, _route, _router) {
    super();
    this._state = _state;
    this._org = _org;
    this._route = _route;
    this._router = _router;
    /** List of selected levels */
    this.zones = [];
    /** List of levels for the active building */
    this.levels = this._org.active_levels;
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_user_interfaces_user_interfaces_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this._org.initialised.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)(_ => _)).toPromise();
      _this.subscription('route.query', _this._route.queryParamMap.subscribe(params => {
        if (params.has('zone_ids')) {
          const zones = params.get('zone_ids').split(',');
          if (zones.length) {
            const level = _this._org.levelWithID(zones);
            if (!level) {
              return;
            }
            _this._org.building = _this._org.buildings.find(bld => bld.id === level.parent_id);
            _this.zones = zones;
          }
        }
      }));
      _this.subscription('levels', _this._org.active_levels.subscribe(levels => {
        _this.zones = _this.zones.filter(zone => levels.find(lvl => lvl.id === zone));
        if (!_this.zones.length && levels.length) {
          _this.zones.push(levels[0].id);
        }
        // this.updateZones(this.zones);
      }));
      // this.setSearch('');
    })();
  }
  static #_ = this.ɵfac = function SignageTopbarComponent_Factory(t) {
    return new (t || SignageTopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_signage_state_service__WEBPACK_IMPORTED_MODULE_3__.SignageStateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_placeos_organisation__WEBPACK_IMPORTED_MODULE_2__.OrganisationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: SignageTopbarComponent,
    selectors: [["signage-topbar"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
    decls: 1,
    vars: 0,
    consts: [[1, "flex", "items-center", "bg-base-100", "h-20", "px-4", "border-b", "border-base-200", "space-x-2"]],
    template: function SignageTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 0);
      }
    },
    styles: ["mat-form-field[_ngcontent-%COMP%] {\n                height: 3.25em;\n                width: 8em;\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvc2lnbmFnZS9zaWduYWdlLXRvcGJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZO2dCQUNJLGNBQWM7Z0JBQ2QsVUFBVTtZQUNkIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzLjI1ZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDhlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 21127:
/*!**********************************************************************!*\
  !*** ./apps/concierge/src/app/signage/signage-triggers.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignageTriggersComponent: () => (/* binding */ SignageTriggersComponent)
/* harmony export */ });
/* harmony import */ var _signage_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signage-state.service */ 52578);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);



class SignageTriggersComponent {
  constructor(_state) {
    this._state = _state;
    this.loading = this._state.loading;
  }
  static #_ = this.ɵfac = function SignageTriggersComponent_Factory(t) {
    return new (t || SignageTriggersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_signage_state_service__WEBPACK_IMPORTED_MODULE_0__.SignageStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SignageTriggersComponent,
    selectors: [["signage-triggers"]],
    decls: 0,
    vars: 0,
    template: function SignageTriggersComponent_Template(rf, ctx) {}
  });
}

/***/ }),

/***/ 60361:
/*!*******************************************************************!*\
  !*** ./apps/concierge/src/app/signage/signage-zones.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignageZonesComponent: () => (/* binding */ SignageZonesComponent)
/* harmony export */ });
/* harmony import */ var _signage_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signage-state.service */ 52578);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);



class SignageZonesComponent {
  constructor(_state) {
    this._state = _state;
    this.loading = this._state.loading;
  }
  static #_ = this.ɵfac = function SignageZonesComponent_Factory(t) {
    return new (t || SignageZonesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_signage_state_service__WEBPACK_IMPORTED_MODULE_0__.SignageStateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SignageZonesComponent,
    selectors: [["signage-zones"]],
    decls: 0,
    vars: 0,
    template: function SignageZonesComponent_Template(rf, ctx) {}
  });
}

/***/ }),

/***/ 39672:
/*!***********************************************************!*\
  !*** ./apps/concierge/src/app/signage/signage.classes.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignageDisplay: () => (/* binding */ SignageDisplay),
/* harmony export */   SignageMedia: () => (/* binding */ SignageMedia),
/* harmony export */   SignagePlaylist: () => (/* binding */ SignagePlaylist),
/* harmony export */   SignageTrigger: () => (/* binding */ SignageTrigger),
/* harmony export */   SignageZone: () => (/* binding */ SignageZone)
/* harmony export */ });
class SignagePlaylist {
  constructor(_data = {}) {
    this.id = _data.id || '';
    this.name = _data.name || '';
    this.description = _data.description || '';
    this.media = _data.media || [];
    this.media_durations = _data.media_durations || {};
  }
}
class SignageDisplay {
  constructor(_data = {}) {
    this.id = _data.id || '';
    this.name = _data.name || '';
    this.description = _data.description || '';
    this.orientation = _data.orientation || 'landscape';
    this.playlists = _data.playlists || [];
  }
}
class SignageZone {
  constructor(_data = {}) {
    this.id = _data.id || '';
    this.zone_id = _data.zone_id || '';
    this.name = _data.name || '';
    this.description = _data.description || '';
    this.playlists = _data.playlists || [];
  }
}
class SignageTrigger {
  constructor(_data = {}) {
    this.id = _data.id || '';
    this.zone_id = _data.zone_id || '';
    this.name = _data.name || '';
    this.description = _data.description || '';
    this.playlists = _data.playlists || [];
  }
}
class SignageMedia {
  constructor(_data = {}) {
    this.id = _data.id || '';
    this.name = _data.name || '';
    this.description = _data.description || '';
    this.type = _data.type || 'image';
    this.duration = _data.duration || 15;
    this.orientation = _data.orientation || 'landscape';
    this.url = _data.url || '';
  }
}

/***/ }),

/***/ 14424:
/*!*************************************************************!*\
  !*** ./apps/concierge/src/app/signage/signage.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignageComponent: () => (/* binding */ SignageComponent)
/* harmony export */ });
/* harmony import */ var _signage_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signage-state.service */ 52578);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _placeos_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/common */ 57314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/app-topbar.component */ 33005);
/* harmony import */ var _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/app-sidebar.component */ 19842);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ 60989);











const _c0 = ["app-new-staff", ""];
function SignageComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SignageComponent_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.newItem(ctx_r3.active_link));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Add ", ctx_r0.singular(ctx_r0.active_link), " ");
  }
}
function SignageComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SignageComponent_For_10_Template_a_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const link_r5 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.active_link = link_r5);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const link_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/signage/" + _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 3, link_r5))("active", ctx_r1.active_link == link_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", link_r5, " ");
  }
}
class SignageComponent extends _placeos_common__WEBPACK_IMPORTED_MODULE_1__.AsyncHandler {
  singular(name) {
    return name.replace(/s$/, '');
  }
  newItem(name) {
    switch (name) {
      case 'Playlists':
        this._state.editPlaylist();
        break;
      case 'Displays':
        this._state.editDisplay();
        break;
      case 'Zones':
        // this._state.editZone();
        break;
      case 'Triggers':
        // this._state.editTrigger();
        break;
    }
  }
  constructor(_state, _router) {
    super();
    this._state = _state;
    this._router = _router;
    this.loading = this._state.loading;
    this.links = ['Playlists', 'Media', 'Displays', 'Zones', 'Triggers'];
    this.active_link = this.links[0];
  }
  ngOnInit() {
    this.subscription('route.query', this._router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd) {
        this.active_link = this.links.find(_ => this._router.url.includes(_.toLowerCase()));
      }
    }));
    this.active_link = this.links.find(_ => this._router.url.includes(_.toLowerCase()));
  }
  static #_ = this.ɵfac = function SignageComponent_Factory(t) {
    return new (t || SignageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_signage_state_service__WEBPACK_IMPORTED_MODULE_0__.SignageStateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SignageComponent,
    selectors: [["", "app-new-staff", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
    attrs: _c0,
    decls: 14,
    vars: 3,
    consts: [[1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full"], [1, "p-8", "h-28", "flex", "items-center", "justify-between"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", "class", "w-32", 3, "click", 4, "ngIf"], ["mat-tab-nav-bar", "", 3, "tabPanel"], [1, "flex-1", "h-1/2", "overflow-auto"], ["tabPanel", ""], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], ["mat-tab-link", "", 3, "routerLink", "active", "click"], ["mat-tab-link", "", 3, "routerLink", "active"]],
    template: function SignageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "main", 1)(4, "div", 2)(5, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, SignageComponent_button_7_Template, 2, 1, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](9, SignageComponent_For_10_Template, 3, 5, "a", 10, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-tab-nav-panel", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Signage - ", ctx.active_link, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.active_link !== "Media");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tabPanel", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.links);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ui_app_topbar_component__WEBPACK_IMPORTED_MODULE_2__.ApplicationTopbarComponent, _ui_app_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.ApplicationSidebarComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatRipple, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabNav, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabNavPanel, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabLink, _angular_common__WEBPACK_IMPORTED_MODULE_6__.LowerCasePipe],
    styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n                background-color: var(--b1);\n            }\n        \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY29uY2llcmdlL3NyYy9hcHAvc2lnbmFnZS9zaWduYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1lBQ1k7Z0JBQ0ksYUFBYTtnQkFDYixzQkFBc0I7Z0JBQ3RCLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCwyQkFBMkI7WUFDL0IiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWIxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 96492:
/*!**********************************************************!*\
  !*** ./apps/concierge/src/app/signage/signage.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COMPONENTS: () => (/* binding */ COMPONENTS),
/* harmony export */   SignageModule: () => (/* binding */ SignageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/ui.module */ 97428);
/* harmony import */ var _signage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signage.component */ 14424);
/* harmony import */ var _signage_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signage-topbar.component */ 99837);
/* harmony import */ var _signage_playlists_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signage-playlists.component */ 81998);
/* harmony import */ var _signage_displays_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signage-displays.component */ 67315);
/* harmony import */ var _signage_zones_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signage-zones.component */ 60361);
/* harmony import */ var _signage_triggers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signage-triggers.component */ 21127);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tabs */ 60989);
/* harmony import */ var _signage_media_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signage-media.component */ 22005);
/* harmony import */ var _signage_media_preview_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signage-media-preview-modal.component */ 35910);
/* harmony import */ var _placeos_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @placeos/components */ 24815);
/* harmony import */ var _signage_playlist_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signage-playlist-modal.component */ 350);
/* harmony import */ var _signage_display_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signage-display-modal.component */ 63429);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 61699);



















const ROUTES = [{
  path: '',
  component: _signage_component__WEBPACK_IMPORTED_MODULE_1__.SignageComponent,
  children: [{
    path: '',
    redirectTo: 'playlists',
    pathMatch: 'full'
  }, {
    path: 'playlists',
    component: _signage_playlists_component__WEBPACK_IMPORTED_MODULE_3__.SignagePlaylistsComponent
  }, {
    path: 'media',
    component: _signage_media_component__WEBPACK_IMPORTED_MODULE_7__.SignageMediaComponent
  }, {
    path: 'displays',
    component: _signage_displays_component__WEBPACK_IMPORTED_MODULE_4__.SignageDisplaysComponent
  }, {
    path: 'zones',
    component: _signage_zones_component__WEBPACK_IMPORTED_MODULE_5__.SignageZonesComponent
  }, {
    path: 'triggers',
    component: _signage_triggers_component__WEBPACK_IMPORTED_MODULE_6__.SignageTriggersComponent
  }, {
    path: '*',
    redirectTo: 'playlists',
    pathMatch: 'full'
  }]
}];
const COMPONENTS = [_signage_component__WEBPACK_IMPORTED_MODULE_1__.SignageComponent, _signage_topbar_component__WEBPACK_IMPORTED_MODULE_2__.SignageTopbarComponent, _signage_playlists_component__WEBPACK_IMPORTED_MODULE_3__.SignagePlaylistsComponent, _signage_media_component__WEBPACK_IMPORTED_MODULE_7__.SignageMediaComponent, _signage_displays_component__WEBPACK_IMPORTED_MODULE_4__.SignageDisplaysComponent, _signage_zones_component__WEBPACK_IMPORTED_MODULE_5__.SignageZonesComponent, _signage_triggers_component__WEBPACK_IMPORTED_MODULE_6__.SignageTriggersComponent, _signage_media_preview_modal_component__WEBPACK_IMPORTED_MODULE_8__.SignageMediaPreviewModalComponent, _signage_playlist_modal_component__WEBPACK_IMPORTED_MODULE_10__.SignagePlaylistModalComponent, _signage_display_modal_component__WEBPACK_IMPORTED_MODULE_11__.SignageDisplayModalComponent];
class SignageModule {
  static #_ = this.ɵfac = function SignageModule_Factory(t) {
    return new (t || SignageModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
    type: SignageModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, _placeos_components__WEBPACK_IMPORTED_MODULE_9__.ComponentsModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forChild(ROUTES), _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__.MatTabsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](SignageModule, {
    declarations: [_signage_component__WEBPACK_IMPORTED_MODULE_1__.SignageComponent, _signage_topbar_component__WEBPACK_IMPORTED_MODULE_2__.SignageTopbarComponent, _signage_playlists_component__WEBPACK_IMPORTED_MODULE_3__.SignagePlaylistsComponent, _signage_media_component__WEBPACK_IMPORTED_MODULE_7__.SignageMediaComponent, _signage_displays_component__WEBPACK_IMPORTED_MODULE_4__.SignageDisplaysComponent, _signage_zones_component__WEBPACK_IMPORTED_MODULE_5__.SignageZonesComponent, _signage_triggers_component__WEBPACK_IMPORTED_MODULE_6__.SignageTriggersComponent, _signage_media_preview_modal_component__WEBPACK_IMPORTED_MODULE_8__.SignageMediaPreviewModalComponent, _signage_playlist_modal_component__WEBPACK_IMPORTED_MODULE_10__.SignagePlaylistModalComponent, _signage_display_modal_component__WEBPACK_IMPORTED_MODULE_11__.SignageDisplayModalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule, _placeos_components__WEBPACK_IMPORTED_MODULE_9__.ComponentsModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__.MatTabsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=apps_concierge_src_app_signage_signage_module_ts.js.map