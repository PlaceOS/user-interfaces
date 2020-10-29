(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["control-control-module"],{

/***/ "5mWI":
/*!************************************************************!*\
  !*** ./src/app/control/space-list/space-list.component.ts ***!
  \************************************************************/
/*! exports provided: ControlSpaceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlSpaceListComponent", function() { return ControlSpaceListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interfaces/organisation */ "dJst");
/* harmony import */ var _user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/spaces */ "6CBO");
/* harmony import */ var _ui_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/searchbar/searchbar.component */ "ek5h");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item/item.component */ "CohY");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");












function ControlSpaceListComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a-control-space-list-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const space_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("space", space_r4);
} }
function ControlSpaceListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ControlSpaceListComponent_div_3_div_1_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.filtered_list);
} }
const _c0 = function () { return { type: "icon", class: "material-icons", content: "close" }; };
function ControlSpaceListComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.search_str ? " No matches for \"" + ctx_r2.search_str + "\"" : "No controllable spaces", " ");
} }
class ControlSpaceListComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["BaseClass"] {
    constructor(_spaces, _org) {
        super();
        this._spaces = _spaces;
        this._org = _org;
        /** List of controllable spaces */
        this.space_list = [];
    }
    ngOnInit() {
        this._spaces.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(_ => _)).subscribe(() => {
            this.space_list = this._spaces.filter(space => !!space.support_url);
            this.space_list.sort((a, b) => {
                const bld_a = this._org.buildings.find(building => building.id === a.level.parent_id);
                const space_a_name = (a.name || '').toLowerCase();
                const level_a_name = ((a.level ? a.level.name : '') || '').toLowerCase();
                const bld_a_name = ((bld_a ? bld_a.name : '') || '').toLowerCase();
                const bld_b = this._org.buildings.find(building => building.id === b.level.parent_id);
                const space_b_name = (b.name || '').toLowerCase();
                const level_b_name = ((b.level ? b.level.name : '') || '').toLowerCase();
                const bld_b_name = ((bld_b ? bld_b.name : '') || '').toLowerCase();
                return (bld_a_name.localeCompare(bld_b_name) ||
                    level_a_name.localeCompare(level_b_name) ||
                    space_a_name.localeCompare(space_b_name));
            });
        });
    }
    /** List of spaces filtered using the search string */
    get filtered_list() {
        const search = (this.search_str || '').toLowerCase();
        return (this.space_list || []).filter(space => {
            const bld = this._org.buildings.find(building => building.id === space.level.parent_id);
            const space_name = (space.name || '').toLowerCase();
            const level_name = ((space.level ? space.level.name : '') || '').toLowerCase();
            const bld_name = ((bld ? bld.name : '') || '').toLowerCase();
            return (space_name.indexOf(search) >= 0 ||
                (level_name && level_name.indexOf(search) >= 0) ||
                (bld_name && bld_name.indexOf(search) >= 0));
        });
    }
}
ControlSpaceListComponent.ɵfac = function ControlSpaceListComponent_Factory(t) { return new (t || ControlSpaceListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_4__["SpacesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_3__["OrganisationService"])); };
ControlSpaceListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ControlSpaceListComponent, selectors: [["a-control-space-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 5, consts: [[1, "control-list"], [1, "filter"], [3, "value", "loading", "autofocus", "valueChange"], ["class", "list", 4, "ngIf", "ngIfElse"], ["empty_state", ""], [1, "list"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], [3, "space"], [1, "info-block"], [1, "icon"], [3, "icon"], [1, "text"]], template: function ControlSpaceListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a-searchbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ControlSpaceListComponent_Template_a_searchbar_valueChange_2_listener($event) { return ctx.search_str = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ControlSpaceListComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ControlSpaceListComponent_ng_template_4_Template, 6, 3, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.search_str)("loading", ctx.loading)("autofocus", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filtered_list.length)("ngIfElse", _r1);
    } }, directives: [_ui_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_5__["SearchbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _item_item_component__WEBPACK_IMPORTED_MODULE_7__["ControlSpaceListItemComponent"], _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__["IconComponent"]], styles: ["[_nghost-%COMP%], .control-list[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.filter[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.control-list[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: auto;\n  background-color: #f0f0f0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC1zdHlsZXMvdmFyaWFibGVzLnNjc3MiLCJhcHBzL3dvcmtwbGFjZS9zcmMvYXBwL2NvbnRyb2wvc3BhY2UtbGlzdC9zcGFjZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztxQkFBQTtBQWVBOzswQkFBQTtBQXdDQTs7Y0FBQTtBQWFBOztzQkFBQTtBQ2xFQTs7RUFFRSxZQUFBO0VBQ0EsV0FBQTtBQVdGO0FBUkE7RUFDRSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FBV0Y7QUFSQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCRHlCUztBQ2RYIiwiZmlsZSI6ImFwcHMvd29ya3BsYWNlL3NyYy9hcHAvY29udHJvbC9zcGFjZS1saXN0L3NwYWNlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKj09PT09PT09PT09PT09PT09PSpcXFxufHwgQnJhbmRpbmcgQ29sb3VycyB8fFxuXFwqPT09PT09PT09PT09PT09PT09Ki9cblxuJHB3Yy1vcmFuZ2U6ICNEMDRBMDI7XG4kcHdjLXJvc2U6ICNEOTM5NTQ7XG4kcHdjLXJlZDogI0UwMzAxRTtcbiRwd2MteWVsbG93OiAjRkZCNjAwO1xuJHB3Yy10YW5nZXJpbmU6ICNFQjhDMDA7XG5cbiRsaWdodC1ncmV5OiAjZGRkZGRkO1xuXG4kYm94U2hhZG93OiAwIDFweCAzcHggMCByZ2JhKCMwMDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoIzAwMCwgMC4xNCksXG4gICAgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLCAwLjEyKTtcblxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICMyMWE0NTM7XG4kc3VjY2Vzcy1saWdodDogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyazogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiRwZW5kaW5nOiAjZmZiZjFmO1xuJHBlbmRpbmctbGlnaHQ6IGxpZ2h0ZW4oJHBlbmRpbmcsIDEwKTtcbiRwZW5kaW5nLWRhcms6IGRhcmtlbigkcGVuZGluZywgMTApO1xuXG4kZXJyb3I6ICNmNDQzMzY7XG4kZXJyb3ItbGlnaHQ6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyazogZGFya2VuKCRlcnJvciwgMTApO1xuXG4kY29sb3ItcHJpbWFyeTogI2QwNGEwMjtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogI2UwMzAxZTtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmctbGlnaHQ6ICNmMGYwZjA7XG4kYmctZGFyazogIzI2MzIzODtcbiRmb290ZXItYmFjazogIzI2MzIzODtcbiRncmV5OiAjOTY5Njk2O1xuXG4kY29sb3ItdGVybmFyeTogIzBhMGQyZTtcbiRjb2xvci1leHRlcm5hbDogIzE1MWM2YTtcblxuLy8gVHlwZSBjb2xvcnMgZm9yIGJvb2tpbmcgc3RhdHVzXG4kaW50ZXJuYWw6ICRjb2xvci1wcmltYXJ5O1xuJGV4dGVybmFsOiAkY29sb3ItZXh0ZXJuYWw7XG4kY2FuY2VsbGVkOiAkZ3JleTtcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250LXN0YWNrOiAnSGVsdmV0aWNhIE5ldWUnLCBSb2JvdG8sIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcblxuJGhlYWRpbmctZm9udDogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiRmb250OiAkZm9udC1zdGFjaztcblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuOmhvc3QsXG4uY29udHJvbC1saXN0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZpbHRlciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5jb250cm9sLWxpc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctbGlnaHQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlSpaceListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-control-space-list',
                templateUrl: './space-list.component.html',
                styleUrls: ['./space-list.component.scss']
            }]
    }], function () { return [{ type: _user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_4__["SpacesService"] }, { type: _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_3__["OrganisationService"] }]; }, null); })();


/***/ }),

/***/ "CohY":
/*!***********************************************************!*\
  !*** ./src/app/control/space-list/item/item.component.ts ***!
  \***********************************************************/
/*! exports provided: ControlSpaceListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlSpaceListItemComponent", function() { return ControlSpaceListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/organisation */ "dJst");
/* harmony import */ var _user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interfaces/spaces */ "6CBO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @acaprojects/ngx-pipes */ "81Qw");












function ControlSpaceListItemComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 13);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx_r1.space.image + ")");
} }
const _c0 = function () { return { type: "icon", class: "material-icons", content: "account_circle" }; };
const _c1 = function () { return ["/explore"]; };
const _c2 = function (a0) { return { space: a0 }; };
function ControlSpaceListItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ControlSpaceListItemComponent_div_0_div_2_Template, 1, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Find ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Control ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("with-image", ctx_r0.show_image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.show_image && ctx_r0.space.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.space.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.space.capacity || "0", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c2, ctx_r0.space.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 10, ctx_r0.space.support_url, "url"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ControlSpaceListItemComponent {
    constructor(_settings, _org) {
        this._settings = _settings;
        this._org = _org;
    }
    get show_image() {
        return this._settings.get('app.space_display.show_images');
    }
    /** Display location of the space */
    get location() {
        if (!this.space) {
            return 'Unable to determine location';
        }
        const level = this.space.level;
        const bld = this._org.buildings.find(building => building.id === level.parent_id);
        return `${bld ? bld.name + ', ' : ''}${level.name}`;
    }
}
ControlSpaceListItemComponent.ɵfac = function ControlSpaceListItemComponent_Factory(t) { return new (t || ControlSpaceListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_2__["OrganisationService"])); };
ControlSpaceListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ControlSpaceListItemComponent, selectors: [["a-control-space-list-item"]], inputs: { space: "space" }, decls: 1, vars: 1, consts: [["class", "space-details", 3, "with-image", 4, "ngIf"], [1, "space-details"], [1, "details"], ["class", "image", 3, "background-image", 4, "ngIf"], [1, "overlay"], [1, "name"], [1, "info"], [1, "location"], [1, "capacity"], [3, "icon"], [1, "actions"], ["mat-button", "", "color", "primary", "button", "", 3, "routerLink", "queryParams"], ["mat-button", "", "color", "primary", "button", "", 3, "href"], [1, "image"]], template: function ControlSpaceListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ControlSpaceListItemComponent_div_0_Template, 18, 17, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.space);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__["IconComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]], pipes: [_acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_8__["ɵa"]], styles: ["@keyframes wait {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.space-details[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 768px;\n  max-width: calc(100vw - 2em);\n  margin: 0.5em auto;\n  background-color: #fff;\n  flex-wrap: wrap;\n  border-radius: 4px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  transition: box-shadow 200ms, top 200ms;\n  top: 0;\n}\n.space-details[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 1px 3px 2px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  top: -2px;\n}\n.space-details[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  display: none;\n}\n.with-image[_ngcontent-%COMP%] {\n  padding-top: 0;\n  width: 480px;\n}\n.with-image[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  display: initial;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.65);\n  color: #fff;\n  transition: opacity 200ms;\n}\n.with-image[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  background-position: center;\n  background-size: cover;\n}\n.with-image[_ngcontent-%COMP%]:hover   .details[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .with-image[_ngcontent-%COMP%]:hover   .details[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%], .with-image[_ngcontent-%COMP%]:hover   .details[_ngcontent-%COMP%]   .capacity[_ngcontent-%COMP%] {\n  filter: drop-shadow(0px 0px 2px black);\n  color: #fff;\n}\n.with-image[_ngcontent-%COMP%]:hover   .details[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.with-image[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  position: relative;\n  height: 6em;\n  width: 24em;\n  margin: 0 auto 0 0;\n  max-width: 24em;\n  overflow: hidden;\n}\n.with-image[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .with-image[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%], .with-image[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .capacity[_ngcontent-%COMP%] {\n  transition: filter 200ms;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .with-image[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n    height: 12em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .with-image[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n    height: 12em;\n  }\n}\n.with-image[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 2em;\n  color: #fff;\n}\n.with-image[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1em;\n  color: rgba(255, 255, 255, 0.65);\n  width: calc(100% - 2em);\n}\n.details[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 50%;\n  padding: 0.5em 1em;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .details[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #ccc;\n    padding: 1em;\n    margin-bottom: 0.5em;\n    min-width: 99%;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .details[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #ccc;\n    padding: 1em;\n    margin-bottom: 0.5em;\n    min-width: 99%;\n  }\n}\n.info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: rgba(0, 0, 0, 0.65);\n}\n.name[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n.location[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  flex: 1;\n  min-width: 50%;\n}\n.capacity[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .actions[_ngcontent-%COMP%] {\n    flex-direction: row;\n    flex: 1;\n    margin-bottom: 0.5em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .actions[_ngcontent-%COMP%] {\n    flex-direction: row;\n    flex: 1;\n    margin-bottom: 0.5em;\n  }\n}\na[_ngcontent-%COMP%] {\n  width: 8em;\n  margin: 0.5em 0.5em 0;\n}\na[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0.5em;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  a[_ngcontent-%COMP%] {\n    width: 12em;\n    margin: 0.5em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  a[_ngcontent-%COMP%] {\n    width: 12em;\n    margin: 0.5em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC1zdHlsZXMvdmFyaWFibGVzLnNjc3MiLCJzaGFyZWQtc3R5bGVzL21peGlucy5zY3NzIiwiYXBwcy93b3JrcGxhY2Uvc3JjL2FwcC9jb250cm9sL3NwYWNlLWxpc3QvaXRlbS9pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztxQkFBQTtBQWVBOzswQkFBQTtBQXdDQTs7Y0FBQTtBQWFBOztzQkFBQTtBQXBFQTs7cUJBQUE7QUFlQTs7MEJBQUE7QUF3Q0E7O2NBQUE7QUFhQTs7c0JBQUE7QUMvQ0E7RUFDSTtJQUFLLFVBQUE7RUNLUDtFREpFO0lBQU8sVUFBQTtFQ09UO0FBQ0Y7QURMQTtFQUNJO0lBQUssVUFBQTtFQ1FQO0VEUEU7SUFBTyxVQUFBO0VDVVQ7QUFDRjtBRFJBOztzQkFBQTtBQzNCQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VESkUsaUhBQUE7RUNNRix1Q0FBQTtFQUNBLE1BQUE7QUF3Q0Y7QUF2Q0U7RURSRSxpSEFBQTtFQ1VBLFNBQUE7QUF5Q0o7QUF2Q0U7RUFDRSxhQUFBO0FBeUNKO0FBckNBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUF3Q0Y7QUF2Q0U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHFDQUFBO0VBQ0EsV0ZsQlM7RUVtQlQseUJBQUE7QUF5Q0o7QUF2Q0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUF5Q0o7QUFyQ007OztFQUdFLHNDQUFBO0VBQ0EsV0FBQTtBQXVDUjtBQXJDTTtFQUNFLFVBQUE7QUF1Q1I7QUFuQ0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFxQ0o7QUFwQ0k7OztFQUdFLHdCQUFBO0FBc0NOO0FEM0VRO0VDMkJOO0lBYUksWUFBQTtFQXVDSjtBQUNGO0FEN0VRO0VDd0JOO0lBYUksWUFBQTtFQTRDSjtBQUNGO0FBMUNFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0YvRFM7QUUyR2I7QUExQ0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLHVCQUFBO0FBNENKO0FBeENBO0VBQ0UsT0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQTJDRjtBRHRHUTtFQ3dEUjtJQUtJLDZCQUFBO0lBRUEsWUFBQTtJQUVBLG9CQUFBO0lBRUEsY0FBQTtFQTBDRjtBQUNGO0FEM0dRO0VDcURSO0lBS0ksNkJBQUE7SUFFQSxZQUFBO0lBRUEsb0JBQUE7SUFFQSxjQUFBO0VBa0RGO0FBQ0Y7QUEvQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQWtERjtBQS9DQTtFQUNFLGdCQUFBO0FBa0RGO0FBL0NBO0VBQ0UsZ0JBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtBQWtERjtBQS9DQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQWtERjtBQS9DQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFrREY7QURsSlE7RUM0RlI7SUFNSSxtQkFBQTtJQUVBLE9BQUE7SUFFQSxvQkFBQTtFQWtERjtBQUNGO0FEdEpRO0VDeUZSO0lBTUksbUJBQUE7SUFFQSxPQUFBO0lBRUEsb0JBQUE7RUF5REY7QUFDRjtBQXREQTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtBQXlERjtBQXhERTtFQUNFLG9CQUFBO0FBMERKO0FEeEtRO0VDMEdSO0lBT0ksV0FBQTtJQUVBLGFBQUE7RUEwREY7QUFDRjtBRDNLUTtFQ3VHUjtJQU9JLFdBQUE7SUFFQSxhQUFBO0VBZ0VGO0FBQ0YiLCJmaWxlIjoiYXBwcy93b3JrcGxhY2Uvc3JjL2FwcC9jb250cm9sL3NwYWNlLWxpc3QvaXRlbS9pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo9PT09PT09PT09PT09PT09PT0qXFxcbnx8IEJyYW5kaW5nIENvbG91cnMgfHxcblxcKj09PT09PT09PT09PT09PT09PSovXG5cbiRwd2Mtb3JhbmdlOiAjRDA0QTAyO1xuJHB3Yy1yb3NlOiAjRDkzOTU0O1xuJHB3Yy1yZWQ6ICNFMDMwMUU7XG4kcHdjLXllbGxvdzogI0ZGQjYwMDtcbiRwd2MtdGFuZ2VyaW5lOiAjRUI4QzAwO1xuXG4kbGlnaHQtZ3JleTogI2RkZGRkZDtcblxuJGJveFNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgjMDAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKCMwMDAsIDAuMTQpLFxuICAgIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwgMC4xMik7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjMjFhNDUzO1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYmYxZjtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZjQ0MzM2O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICNkMDRhMDI7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICNlMDMwMWU7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJnLWxpZ2h0OiAjZjBmMGYwO1xuJGJnLWRhcms6ICMyNjMyMzg7XG4kZm9vdGVyLWJhY2s6ICMyNjMyMzg7XG4kZ3JleTogIzk2OTY5NjtcblxuJGNvbG9yLXRlcm5hcnk6ICMwYTBkMmU7XG4kY29sb3ItZXh0ZXJuYWw6ICMxNTFjNmE7XG5cbi8vIFR5cGUgY29sb3JzIGZvciBib29raW5nIHN0YXR1c1xuJGludGVybmFsOiAkY29sb3ItcHJpbWFyeTtcbiRleHRlcm5hbDogJGNvbG9yLWV4dGVybmFsO1xuJGNhbmNlbGxlZDogJGdyZXk7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udC1zdGFjazogJ0hlbHZldGljYSBOZXVlJywgUm9ib3RvLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5nLWZvbnQ6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4kZm9udDogJGZvbnQtc3RhY2s7XG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE2cHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcbiIsIlxuQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGhpZGUtdGV4dC1vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygkY29sb3I6ICMwMDAsICRkZXB0aDogMSkge1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAxcHggKiAoJGRlcHRoIC0gMSkgcmdiYSgjMDAwLCAuMiksXG4gICAgICAgICAgICAgICAgMCAxcHggMXB4IDAgcmdiYSgjMDAwLCAuMTQpLFxuICAgICAgICAgICAgICAgIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwgLjEyKTtcbn1cblxuQG1peGluIGZhZGUtaW4oJHdhaXQpIHtcbiAgICBhbmltYXRpb246XG4gICAgICAgIHdhaXQgI3skd2FpdH0sXG4gICAgICAgIGZhZGUtaW4gNDAwbXMgI3skd2FpdH07XG59XG5cbkBrZXlmcmFtZXMgd2FpdCB7XG4gICAgMCUgeyBvcGFjaXR5OiAwOyB9XG4gICAgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbn1cblxuQGtleWZyYW1lcyBmYWRlLWluIHtcbiAgICAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxufVxuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuQGltcG9ydCAnbWl4aW5zJztcblxuLnNwYWNlLWRldGFpbHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA3NjhweDtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gMmVtKTtcbiAgbWFyZ2luOiAuNWVtIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBAaW5jbHVkZSBib3gtc2hhZG93O1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zLCB0b3AgMjAwbXM7XG4gIHRvcDogMDtcbiAgJjpob3ZlciB7XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdygjMDAwLCAzKTtcbiAgICB0b3A6IC0ycHhcbiAgfVxuICAub3ZlcmxheSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4ud2l0aC1pbWFnZSB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICB3aWR0aDogNDgwcHg7XG4gIC5vdmVybGF5IHtcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkZm9udC1kYXJrLCAuNjUpO1xuICAgIGNvbG9yOiAkZm9udC1saWdodDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xuICB9XG4gIC5pbWFnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG4gICY6aG92ZXIge1xuICAgIC5kZXRhaWxzIHtcbiAgICAgIC5uYW1lLFxuICAgICAgICAgICAgLmxvY2F0aW9uLFxuICAgICAgICAgICAgLmNhcGFjaXR5IHtcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDJweCBibGFjayk7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuICAgICAgLm92ZXJsYXkge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuZGV0YWlscyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogNmVtO1xuICAgIHdpZHRoOiAyNGVtO1xuICAgIG1hcmdpbjogMCBhdXRvIDAgMDtcbiAgICBtYXgtd2lkdGg6IDI0ZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAubmFtZSxcbiAgICAgICAgLmxvY2F0aW9uLFxuICAgICAgICAuY2FwYWNpdHkge1xuICAgICAgdHJhbnNpdGlvbjogZmlsdGVyIDIwMG1zO1xuICAgIH1cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgaGVpZ2h0OiAxMmVtO1xuICAgIH1cbiAgfVxuICAubmFtZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMmVtO1xuICAgIGNvbG9yOiAkZm9udC1saWdodDtcbiAgfVxuICAuaW5mbyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMWVtO1xuICAgIGNvbG9yOiByZ2JhKCRmb250LWxpZ2h0LCAuNjUpO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyZW0pO1xuICB9XG59XG5cbi5kZXRhaWxzIHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IC41ZW0gMWVtO1xuICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuXG4gICAgcGFkZGluZzogMWVtO1xuXG4gICAgbWFyZ2luLWJvdHRvbTogLjVlbTtcblxuICAgIG1pbi13aWR0aDogOTklO1xuICB9XG59XG5cbi5pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHJnYmEoJGZvbnQtZGFyaywgLjY1KTtcbn1cblxuLm5hbWUge1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4ubG9jYXRpb24ge1xuICBmb250LXNpemU6IC44ZW07XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogNTAlO1xufVxuXG4uY2FwYWNpdHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICBmbGV4OiAxO1xuXG4gICAgbWFyZ2luLWJvdHRvbTogLjVlbTtcbiAgfVxufVxuXG5hIHtcbiAgd2lkdGg6IDhlbTtcbiAgbWFyZ2luOiAuNWVtIC41ZW0gMDtcbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xuICB9XG4gIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgd2lkdGg6IDEyZW07XG5cbiAgICBtYXJnaW46IC41ZW07XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlSpaceListItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-control-space-list-item',
                templateUrl: './item.component.html',
                styleUrls: ['./item.component.scss']
            }]
    }], function () { return [{ type: _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["SettingsService"] }, { type: _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_2__["OrganisationService"] }]; }, { space: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "dgxB":
/*!*******************************************!*\
  !*** ./src/app/control/control.module.ts ***!
  \*******************************************/
/*! exports provided: ControlModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlModule", function() { return ControlModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _control_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./control.component */ "wikr");
/* harmony import */ var _ui_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/shared.module */ "R3Ii");
/* harmony import */ var _space_list_space_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./space-list/space-list.component */ "5mWI");
/* harmony import */ var _space_list_item_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./space-list/item/item.component */ "CohY");









const ROUTES = [
    { path: '', component: _control_component__WEBPACK_IMPORTED_MODULE_3__["ControlComponent"] }
];
class ControlModule {
}
ControlModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ControlModule });
ControlModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ControlModule_Factory(t) { return new (t || ControlModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES),
            _ui_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedContentModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ControlModule, { declarations: [_control_component__WEBPACK_IMPORTED_MODULE_3__["ControlComponent"], _space_list_space_list_component__WEBPACK_IMPORTED_MODULE_5__["ControlSpaceListComponent"], _space_list_item_item_component__WEBPACK_IMPORTED_MODULE_6__["ControlSpaceListItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ui_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedContentModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_control_component__WEBPACK_IMPORTED_MODULE_3__["ControlComponent"], _space_list_space_list_component__WEBPACK_IMPORTED_MODULE_5__["ControlSpaceListComponent"], _space_list_item_item_component__WEBPACK_IMPORTED_MODULE_6__["ControlSpaceListItemComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES),
                    _ui_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedContentModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "wikr":
/*!**********************************************!*\
  !*** ./src/app/control/control.component.ts ***!
  \**********************************************/
/*! exports provided: ControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlComponent", function() { return ControlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _ui_topbar_header_topbar_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/topbar-header/topbar-header.component */ "e81E");
/* harmony import */ var _space_list_space_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./space-list/space-list.component */ "5mWI");
/* harmony import */ var _ui_footer_menu_footer_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/footer-menu/footer-menu.component */ "C9Ki");
/* harmony import */ var _ui_overlay_menu_overlay_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/overlay-menu/overlay-menu.component */ "d4mj");








class ControlComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["BaseClass"] {
    constructor(_settings) {
        super();
        this._settings = _settings;
    }
    ngOnInit() {
        this._settings.title = 'Control';
    }
}
ControlComponent.ɵfac = function ControlComponent_Factory(t) { return new (t || ControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["SettingsService"])); };
ControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ControlComponent, selectors: [["app-control"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 2, consts: [[1, "control", "page"], [1, "header"], [3, "menu", "menuChange"], [1, "body"], [1, "footer"], [3, "show", "showChange"]], template: function ControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a-topbar-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("menuChange", function ControlComponent_Template_a_topbar_header_menuChange_2_listener($event) { return ctx.show_menu = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "a-control-space-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "footer", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "a-footer-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a-overlay-menu", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("showChange", function ControlComponent_Template_a_overlay_menu_showChange_7_listener($event) { return ctx.show_menu = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menu", ctx.show_menu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.show_menu);
    } }, directives: [_ui_topbar_header_topbar_header_component__WEBPACK_IMPORTED_MODULE_2__["TopbarHeaderComponent"], _space_list_space_list_component__WEBPACK_IMPORTED_MODULE_3__["ControlSpaceListComponent"], _ui_footer_menu_footer_menu_component__WEBPACK_IMPORTED_MODULE_4__["FooterMenuComponent"], _ui_overlay_menu_overlay_menu_component__WEBPACK_IMPORTED_MODULE_5__["OverlayMenuComponent"]], styles: [".page[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.page[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.body[_ngcontent-%COMP%] {\n  min-width: 50%;\n  flex: 1;\n  z-index: 0;\n  min-height: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC1zdHlsZXMvdmFyaWFibGVzLnNjc3MiLCJhcHBzL3dvcmtwbGFjZS9zcmMvYXBwL2NvbnRyb2wvY29udHJvbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7cUJBQUE7QUFlQTs7MEJBQUE7QUF3Q0E7O2NBQUE7QUFhQTs7c0JBQUE7QUNsRUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQVdGO0FBVkU7RUFDRSxXQUFBO0FBWUo7QUFSQTtFQUNFLGNBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFXRiIsImZpbGUiOiJhcHBzL3dvcmtwbGFjZS9zcmMvYXBwL2NvbnRyb2wvY29udHJvbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qPT09PT09PT09PT09PT09PT09KlxcXG58fCBCcmFuZGluZyBDb2xvdXJzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT0qL1xuXG4kcHdjLW9yYW5nZTogI0QwNEEwMjtcbiRwd2Mtcm9zZTogI0Q5Mzk1NDtcbiRwd2MtcmVkOiAjRTAzMDFFO1xuJHB3Yy15ZWxsb3c6ICNGRkI2MDA7XG4kcHdjLXRhbmdlcmluZTogI0VCOEMwMDtcblxuJGxpZ2h0LWdyZXk6ICNkZGRkZGQ7XG5cbiRib3hTaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoIzAwMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgjMDAwLCAwLjE0KSxcbiAgICAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsIDAuMTIpO1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzIxYTQ1MztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmc6ICNmZmJmMWY7XG4kcGVuZGluZy1saWdodDogbGlnaHRlbigkcGVuZGluZywgMTApO1xuJHBlbmRpbmctZGFyazogZGFya2VuKCRwZW5kaW5nLCAxMCk7XG5cbiRlcnJvcjogI2Y0NDMzNjtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbiRjb2xvci1wcmltYXJ5OiAjZDA0YTAyO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjZTAzMDFlO1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiZy1saWdodDogI2YwZjBmMDtcbiRiZy1kYXJrOiAjMjYzMjM4O1xuJGZvb3Rlci1iYWNrOiAjMjYzMjM4O1xuJGdyZXk6ICM5Njk2OTY7XG5cbiRjb2xvci10ZXJuYXJ5OiAjMGEwZDJlO1xuJGNvbG9yLWV4dGVybmFsOiAjMTUxYzZhO1xuXG4vLyBUeXBlIGNvbG9ycyBmb3IgYm9va2luZyBzdGF0dXNcbiRpbnRlcm5hbDogJGNvbG9yLXByaW1hcnk7XG4kZXh0ZXJuYWw6ICRjb2xvci1leHRlcm5hbDtcbiRjYW5jZWxsZWQ6ICRncmV5O1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQtc3RhY2s6ICdIZWx2ZXRpY2EgTmV1ZScsIFJvYm90bywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuXG4kaGVhZGluZy1mb250OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuJGZvbnQ6ICRmb250LXN0YWNrO1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNnB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG4ucGFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICA+ICoge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5ib2R5IHtcbiAgbWluLXdpZHRoOiA1MCU7XG4gIGZsZXg6IDE7XG4gIHotaW5kZXg6IDA7XG4gIG1pbi1oZWlnaHQ6IDUwJTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-control',
                templateUrl: './control.component.html',
                styleUrls: ['./control.component.scss']
            }]
    }], function () { return [{ type: _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["SettingsService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=control-control-module.js.map