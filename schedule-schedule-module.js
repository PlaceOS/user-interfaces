(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["schedule-schedule-module"],{

/***/ "3EMe":
/*!**********************************************************************************!*\
  !*** ./src/app/schedule/view-event/booking-details/booking-details.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BookingDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingDetailsComponent", function() { return BookingDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_bookings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @user-interfaces/bookings */ "05Mk");
/* harmony import */ var _user_interfaces_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @user-interfaces/events */ "eZII");
/* harmony import */ var _user_interfaces_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @user-interfaces/components */ "Rc+I");
/* harmony import */ var _user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @user-interfaces/spaces */ "6CBO");
/* harmony import */ var _overlays_view_room_modal_view_room_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../overlays/view-room-modal/view-room-modal.component */ "ceWj");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dayjs */ "BQ33");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");


















function BookingDetailsComponent_div_0_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookingDetailsComponent_div_0_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r2.showSpace(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { type: "icon", class: "material-icons", content: "delete_forever" }; };
const _c1 = function () { return { type: "icon", class: "material-icons", content: "perm_identity" }; };
const _c2 = function () { return { type: "icon", class: "material-icons", content: "schedule" }; };
const _c3 = function () { return { type: "icon", class: "material-icons", content: "place" }; };
function BookingDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookingDetailsComponent_div_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "app-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, BookingDetailsComponent_div_0_button_24_Template, 2, 0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.item.title || "No Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.item.user_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.when);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.item.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.item.asset_id);
} }
class BookingDetailsComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["BaseClass"] {
    constructor(_dialog, _router, _events) {
        super();
        this._dialog = _dialog;
        this._router = _router;
        this._events = _events;
        /** Emitter for changes to the loading state */
        this.loading = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /** Display string of when the event will occur */
    get when() {
        if (!this.item) {
            return 'Unable to determine.';
        }
        const date = dayjs__WEBPACK_IMPORTED_MODULE_10__(this.item.date);
        const end = date.add(this.item.duration || 60, 'm');
        if (this.item.all_day || this.item.duration > 23 * 60) {
            return `${date.format('DD MMM YYYY')} - All Day`;
        }
        else {
            if (date.isSame(end, 'd')) {
                return `${date.format('DD MMM YYYY, h:mm A')} - ${end.format('h:mm A')}`;
            }
            else {
                return `${date.format('DD MMM YYYY, h:mm A')} - ${end.format('DD MMM YYYY, h:mm A')}`;
            }
        }
    }
    cancel() {
        this.confirmDelete();
    }
    showSpace() {
        const space = new _user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_8__["Space"]({
            name: 'Desk Booking',
            map_id: this.item.asset_id,
            zones: this.item.zones,
        });
        if (!space.level) {
            // this._service.notifyInfo('The space cannot be located.');
        }
        const dialog_ref = this._dialog.open(_overlays_view_room_modal_view_room_modal_component__WEBPACK_IMPORTED_MODULE_9__["ViewRoomModalComponent"], {
            width: '32em',
            maxWidth: '95vw',
            maxHeight: '95vh',
            data: { space },
        });
    }
    confirmDelete() {
        const dialog_ref = this._dialog.open(_user_interfaces_components__WEBPACK_IMPORTED_MODULE_7__["ConfirmModalComponent"], {
            data: {
                title: 'Cancel Meeting',
                content: `Are you sure you want to cancel this desk booking ?`,
                okText: `I'm sure`,
                cancelText: 'No',
            },
        });
        dialog_ref.afterClosed().subscribe((evt) => {
            if (evt) {
                this.deleteBooking();
            }
        });
    }
    deleteBooking() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading.emit('Cancelling booking...');
            yield this._events.delete(this.item.id)
                .then(() => {
                // this._service.notifySuccess('Booking was successfuly deleted.');
            })
                .catch(() => {
                // this._service.notifyError('Booking could not be deleted.');
            });
            this._router.navigate(['schedule']);
            this.loading.emit('');
        });
    }
}
BookingDetailsComponent.ɵfac = function BookingDetailsComponent_Factory(t) { return new (t || BookingDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_events__WEBPACK_IMPORTED_MODULE_6__["EventsService"])); };
BookingDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BookingDetailsComponent, selectors: [["schedule-booking-details"]], inputs: { item: "item" }, outputs: { loading: "loading" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "booking-details", 4, "ngIf"], [1, "booking-details"], [1, "header"], [1, "title"], [1, "icons"], ["mat-fab", "", "color", "primary", 3, "click"], ["name", "cancel", 3, "icon"], [1, "row"], [1, "booking"], [1, "field"], [1, "icon"], [3, "icon"], [1, "value"], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", 3, "click"]], template: function BookingDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, BookingDetailsComponent_div_0_Template, 25, 13, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.item);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_13__["IconComponent"]], styles: ["@keyframes wait {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.header[_ngcontent-%COMP%] {\n  padding: 1em 0;\n  width: 100%;\n}\n.header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  font-size: 1.1em;\n  font-weight: 600;\n  margin-bottom: 0.5em;\n}\n.header[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 0.5em;\n}\n.header[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.booking[_ngcontent-%COMP%] {\n  background-color: #fff;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\nbutton[_ngcontent-%COMP%] {\n  color: #d04a02;\n}\n.field[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 1em;\n  display: flex;\n  align-items: center;\n}\n.field[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 2em;\n  margin-right: 0.2em;\n}\n.field[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.field[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  right: 0;\n  bottom: -2px;\n  left: 0;\n  height: 2px;\n  z-index: 1;\n  border-radius: inherit;\n  background: linear-gradient(to left, #f0f0f0 calc(100% - 3em), transparent 3em);\n}\n.field[_ngcontent-%COMP%]:last-of-type:after {\n  content: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC1zdHlsZXMvdmFyaWFibGVzLnNjc3MiLCJzaGFyZWQtc3R5bGVzL21peGlucy5zY3NzIiwiYXBwcy93b3JrcGxhY2Uvc3JjL2FwcC9zY2hlZHVsZS92aWV3LWV2ZW50L2Jvb2tpbmctZGV0YWlscy9ib29raW5nLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O3FCQUFBO0FBZUE7OzBCQUFBO0FBd0NBOztjQUFBO0FBYUE7O3NCQUFBO0FBcEVBOztxQkFBQTtBQWVBOzswQkFBQTtBQXdDQTs7Y0FBQTtBQWFBOztzQkFBQTtBQy9DQTtFQUNJO0lBQUssVUFBQTtFQ0tQO0VESkU7SUFBTyxVQUFBO0VDT1Q7QUFDRjtBRExBO0VBQ0k7SUFBSyxVQUFBO0VDUVA7RURQRTtJQUFPLFVBQUE7RUNVVDtBQUNGO0FEUkE7O3NCQUFBO0FDM0JBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUF3Q0Y7QUF2Q0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUF5Q0o7QUF2Q0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQXlDSjtBQXhDSTtFQUNFLG1CQUFBO0FBMENOO0FBeENJO0VBQ0UsZ0JBQUE7QUEwQ047QUFyQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUF3Q0Y7QUFyQ0E7RUFDRSxzQkFBQTtFRHZCRSxpSEFBQTtBQ2dFSjtBQXJDQTtFQUNFLGNGSmM7QUU0Q2hCO0FBckNBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBd0NGO0FBdkNFO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBeUNKO0FBdkNFO0VBQ0UsT0FBQTtBQXlDSjtBQXZDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsK0VBQUE7QUF5Q0o7QUF0Q0k7RUFDRSxjQUFBO0FBd0NOIiwiZmlsZSI6ImFwcHMvd29ya3BsYWNlL3NyYy9hcHAvc2NoZWR1bGUvdmlldy1ldmVudC9ib29raW5nLWRldGFpbHMvYm9va2luZy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo9PT09PT09PT09PT09PT09PT0qXFxcbnx8IEJyYW5kaW5nIENvbG91cnMgfHxcblxcKj09PT09PT09PT09PT09PT09PSovXG5cbiRwd2Mtb3JhbmdlOiAjRDA0QTAyO1xuJHB3Yy1yb3NlOiAjRDkzOTU0O1xuJHB3Yy1yZWQ6ICNFMDMwMUU7XG4kcHdjLXllbGxvdzogI0ZGQjYwMDtcbiRwd2MtdGFuZ2VyaW5lOiAjRUI4QzAwO1xuXG4kbGlnaHQtZ3JleTogI2RkZGRkZDtcblxuJGJveFNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgjMDAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKCMwMDAsIDAuMTQpLFxuICAgIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwgMC4xMik7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjMjFhNDUzO1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYmYxZjtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZjQ0MzM2O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICNkMDRhMDI7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICNlMDMwMWU7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJnLWxpZ2h0OiAjZjBmMGYwO1xuJGJnLWRhcms6ICMyNjMyMzg7XG4kZm9vdGVyLWJhY2s6ICMyNjMyMzg7XG4kZ3JleTogIzk2OTY5NjtcblxuJGNvbG9yLXRlcm5hcnk6ICMwYTBkMmU7XG4kY29sb3ItZXh0ZXJuYWw6ICMxNTFjNmE7XG5cbi8vIFR5cGUgY29sb3JzIGZvciBib29raW5nIHN0YXR1c1xuJGludGVybmFsOiAkY29sb3ItcHJpbWFyeTtcbiRleHRlcm5hbDogJGNvbG9yLWV4dGVybmFsO1xuJGNhbmNlbGxlZDogJGdyZXk7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udC1zdGFjazogJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcblxuJGhlYWRpbmctZm9udDogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiRmb250OiAkZm9udC1zdGFjaztcblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuIiwiXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gaGlkZS10ZXh0LW92ZXJmbG93IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93KCRjb2xvcjogIzAwMCwgJGRlcHRoOiAxKSB7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDFweCAqICgkZGVwdGggLSAxKSByZ2JhKCMwMDAsIC4yKSxcbiAgICAgICAgICAgICAgICAwIDFweCAxcHggMCByZ2JhKCMwMDAsIC4xNCksXG4gICAgICAgICAgICAgICAgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLCAuMTIpO1xufVxuXG5AbWl4aW4gZmFkZS1pbigkd2FpdCkge1xuICAgIGFuaW1hdGlvbjpcbiAgICAgICAgd2FpdCAjeyR3YWl0fSxcbiAgICAgICAgZmFkZS1pbiA0MDBtcyAjeyR3YWl0fTtcbn1cblxuQGtleWZyYW1lcyB3YWl0IHtcbiAgICAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgICAxMDAlIHsgb3BhY2l0eTogMDsgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAgIDAlIHsgb3BhY2l0eTogMDsgfVxuICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AaW1wb3J0ICdtaXhpbnMnO1xuXG4uaGVhZGVyIHtcbiAgcGFkZGluZzogMWVtIDA7XG4gIHdpZHRoOiAxMDAlO1xuICAudGl0bGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gIH1cbiAgLmljb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYnV0dG9uIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMC41ZW07XG4gICAgfVxuICAgIGFwcC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgfVxuICB9XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJvb2tpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBAaW5jbHVkZSBib3gtc2hhZG93O1xufVxuXG5idXR0b24ge1xuICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG59XG5cbi5maWVsZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAuaWNvbiB7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjJlbTtcbiAgfVxuICAudmFsdWUge1xuICAgIGZsZXg6IDE7XG4gIH1cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwJTtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IC0ycHg7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICRiZy1saWdodCBjYWxjKDEwMCUgLSAzZW0pLCB0cmFuc3BhcmVudCAzZW0pO1xuICB9XG4gICY6bGFzdC1vZi10eXBlIHtcbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IHVuc2V0O1xuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BookingDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'schedule-booking-details',
                templateUrl: './booking-details.component.html',
                styleUrls: ['./booking-details.component.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _user_interfaces_events__WEBPACK_IMPORTED_MODULE_6__["EventsService"] }]; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "L0xO":
/*!*********************************************!*\
  !*** ./src/app/schedule/schedule.module.ts ***!
  \*********************************************/
/*! exports provided: ScheduleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleModule", function() { return ScheduleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/scrolling */ "qvOF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _schedule_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schedule.routes */ "f/16");
/* harmony import */ var _ui_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/shared.module */ "R3Ii");
/* harmony import */ var _schedule_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./schedule.component */ "lBL1");
/* harmony import */ var _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./event-list/event-list.component */ "ZeEs");
/* harmony import */ var _view_event_view_event_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-event/view-event.component */ "Puyi");
/* harmony import */ var _event_list_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./event-list/list-item/list-item.component */ "Rufb");
/* harmony import */ var _view_event_event_details_event_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view-event/event-details/event-details.component */ "fxfZ");
/* harmony import */ var _view_event_event_edit_event_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view-event/event-edit/event-edit.component */ "MifO");
/* harmony import */ var _view_event_booking_details_booking_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./view-event/booking-details/booking-details.component */ "3EMe");
















class ScheduleModule {
}
ScheduleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ScheduleModule });
ScheduleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ScheduleModule_Factory(t) { return new (t || ScheduleModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_schedule_routes__WEBPACK_IMPORTED_MODULE_5__["ROUTES"]),
            _ui_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedContentModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ScheduleModule, { declarations: [_schedule_component__WEBPACK_IMPORTED_MODULE_7__["ScheduleComponent"],
        _view_event_view_event_component__WEBPACK_IMPORTED_MODULE_9__["ScheduleViewEventComponent"],
        _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_8__["ScheduleEventListComponent"],
        _event_list_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_10__["ScheduleEventListItemComponent"],
        _view_event_event_details_event_details_component__WEBPACK_IMPORTED_MODULE_11__["EventDetailsComponent"],
        _view_event_event_edit_event_edit_component__WEBPACK_IMPORTED_MODULE_12__["EventEditComponent"],
        _view_event_booking_details_booking_details_component__WEBPACK_IMPORTED_MODULE_13__["BookingDetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _ui_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedContentModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScheduleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _schedule_component__WEBPACK_IMPORTED_MODULE_7__["ScheduleComponent"],
                    _view_event_view_event_component__WEBPACK_IMPORTED_MODULE_9__["ScheduleViewEventComponent"],
                    _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_8__["ScheduleEventListComponent"],
                    _event_list_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_10__["ScheduleEventListItemComponent"],
                    _view_event_event_details_event_details_component__WEBPACK_IMPORTED_MODULE_11__["EventDetailsComponent"],
                    _view_event_event_edit_event_edit_component__WEBPACK_IMPORTED_MODULE_12__["EventEditComponent"],
                    _view_event_booking_details_booking_details_component__WEBPACK_IMPORTED_MODULE_13__["BookingDetailsComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_schedule_routes__WEBPACK_IMPORTED_MODULE_5__["ROUTES"]),
                    _ui_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedContentModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "MifO":
/*!************************************************************************!*\
  !*** ./src/app/schedule/view-event/event-edit/event-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: EventEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventEditComponent", function() { return EventEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interfaces/events */ "eZII");
/* harmony import */ var _bookings_overlays_booking_confirm_booking_confirm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../bookings/overlays/booking-confirm/booking-confirm.component */ "2QvJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _ui_forms_booking_edit_booking_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/forms/booking-edit/booking-edit.component */ "RlfO");










function EventEditComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EventEditComponent_form_0_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "booking-edit", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventEditComponent_form_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r0.form)("event", ctx_r0.event);
} }
class EventEditComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["BaseClass"] {
    constructor(_dialog) {
        super();
        this._dialog = _dialog;
        /** Emitter for action on the display view */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Emitter for changes to the loading state */
        this.loading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        if (this.event) {
            this.form = Object(_user_interfaces_events__WEBPACK_IMPORTED_MODULE_3__["generateEventForm"])(this.event);
        }
    }
    ngOnChanges(changes) {
        if (changes.event && this.event) {
            this.form = Object(_user_interfaces_events__WEBPACK_IMPORTED_MODULE_3__["generateEventForm"])(this.event);
        }
    }
    /**
     * Exit the edit form
     */
    cancel() {
        this.change.emit({ type: 'cancel_edit' });
    }
    /**
     * Save changes to the booking
     */
    save() {
        this.form.markAllAsTouched();
        if (this.form.valid) {
            const dialog_ref = this._dialog.open(_bookings_overlays_booking_confirm_booking_confirm_component__WEBPACK_IMPORTED_MODULE_4__["BookingConfirmComponent"], {
                width: '32em',
                maxWidth: '95vw',
                maxHeight: '95vh',
                data: { booking: this.event },
            });
            dialog_ref.componentInstance.event.subscribe((event) => {
                if (event.reason === 'success') {
                    this.change.emit({ type: 'view' });
                    dialog_ref.close();
                }
            });
        }
        else {
            console.warn('Some form fields are invalid:', this.form);
        }
    }
    handleEvent(event) { }
}
EventEditComponent.ɵfac = function EventEditComponent_Factory(t) { return new (t || EventEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
EventEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventEditComponent, selectors: [["schedule-event-edit"]], inputs: { event: "event" }, outputs: { change: "change", loading: "loading" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [3, "form", "event"], [1, "footer"], ["type", "button", "type", "button", "name", "cancel", 3, "click"], ["type", "submit", 1, "black"]], template: function EventEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EventEditComponent_form_0_Template, 7, 3, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form && ctx.event);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _ui_forms_booking_edit_booking_edit_component__WEBPACK_IMPORTED_MODULE_7__["BookingEditComponent"]], styles: ["form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: -webkit-max-content;\n  grid-template-columns: max-content;\n  grid-template-rows: 1fr auto;\n  grid-template-areas: \"edit\" \"actions\";\n  margin: auto;\n  margin-top: 2em;\n  max-width: 600px;\n}\n\nbooking-edit[_ngcontent-%COMP%], schedule-event-view[_ngcontent-%COMP%] {\n  grid-area: edit;\n}\n\n.footer[_ngcontent-%COMP%] {\n  grid-area: actions;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 0.5em;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 6em;\n  margin: 0.25em;\n  padding: 0.33em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvd29ya3BsYWNlL3NyYy9hcHAvc2NoZWR1bGUvdmlldy1ldmVudC9ldmVudC1lZGl0L2V2ZW50LWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQ007RUFFTixZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQURGIiwiZmlsZSI6ImFwcHMvd29ya3BsYWNlL3NyYy9hcHAvc2NoZWR1bGUvdmlldy1ldmVudC9ldmVudC1lZGl0L2V2ZW50LWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAtd2Via2l0LW1heC1jb250ZW50O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAnZWRpdCdcbiAgICAgICAgJ2FjdGlvbnMnO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDJlbTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbn1cblxuYm9va2luZy1lZGl0LCBzY2hlZHVsZS1ldmVudC12aWV3IHtcbiAgZ3JpZC1hcmVhOiBlZGl0O1xufVxuXG4uZm9vdGVyIHtcbiAgZ3JpZC1hcmVhOiBhY3Rpb25zO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IC41ZW07XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiA2ZW07XG4gIG1hcmdpbjogMC4yNWVtO1xuICBwYWRkaW5nOiAwLjMzZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'schedule-event-edit',
                templateUrl: './event-edit.component.html',
                styleUrls: ['./event-edit.component.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, { event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Puyi":
/*!*************************************************************!*\
  !*** ./src/app/schedule/view-event/view-event.component.ts ***!
  \*************************************************************/
/*! exports provided: ScheduleViewEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleViewEventComponent", function() { return ScheduleViewEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @user-interfaces/events */ "eZII");
/* harmony import */ var _user_interfaces_bookings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @user-interfaces/bookings */ "05Mk");
/* harmony import */ var _user_interfaces_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @user-interfaces/components */ "Rc+I");
/* harmony import */ var _ui_topbar_header_topbar_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/topbar-header/topbar-header.component */ "e81E");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");
/* harmony import */ var _ui_footer_menu_footer_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/footer-menu/footer-menu.component */ "C9Ki");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ "csyo");
/* harmony import */ var _booking_details_booking_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./booking-details/booking-details.component */ "3EMe");
/* harmony import */ var _event_details_event_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./event-details/event-details.component */ "fxfZ");























function ScheduleViewEventComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-spinner", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.loading, " ");
} }
function ScheduleViewEventComponent_div_12_schedule_booking_details_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "schedule-booking-details", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("loading", function ScheduleViewEventComponent_div_12_schedule_booking_details_2_Template_schedule_booking_details_loading_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.loading = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", ctx_r2.event);
} }
function ScheduleViewEventComponent_div_12_schedule_event_details_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "schedule-event-details", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("event", function ScheduleViewEventComponent_div_12_schedule_event_details_3_Template_schedule_event_details_event_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r6.onChange($event); })("loading", function ScheduleViewEventComponent_div_12_schedule_event_details_3_Template_schedule_event_details_loading_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.loading = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", ctx_r3.event);
} }
function ScheduleViewEventComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ScheduleViewEventComponent_div_12_schedule_booking_details_2_Template, 1, 1, "schedule-booking-details", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ScheduleViewEventComponent_div_12_schedule_event_details_3_Template, 1, 1, "schedule-event-details", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "booking");
} }
const _c0 = function () { return { tye: "icon", class: "material-icons", content: "keyboard_backspace" }; };
class ScheduleViewEventComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_6__["BaseClass"] {
    constructor(_bookings, _events, _router, _route, _dialog, _location) {
        super();
        this._bookings = _bookings;
        this._events = _events;
        this._router = _router;
        this._route = _route;
        this._dialog = _dialog;
        this._location = _location;
        /** Menu event */
        this.menu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false);
    }
    ngOnInit() {
        this.subscription('route.params', Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([this._route.paramMap, this._route.queryParamMap]).subscribe(([param, queryParam]) => {
            if (param.has('id')) {
                this.id = param.get('id');
            }
            if (queryParam.has('calendar')) {
                this.calendar = queryParam.get('calendar');
            }
            if (queryParam.has('type')) {
                this.type = queryParam.get('type');
            }
            if (this.id) {
                this.loadEvent();
            }
        }));
    }
    back() {
        if (this.editing) {
            this.onChange({ type: 'cancel_edit' });
        }
        else {
            this._location.back();
        }
    }
    /**
     * Load the details of the active event
     */
    loadEvent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.deleting) {
                return;
            }
            this.loading = 'Loading booking data...';
            let booking;
            try {
                switch (this.type) {
                    case 'booking':
                        booking = yield this._bookings.show(this.id);
                        break;
                    default:
                        booking = yield this._events.show(this.id, { calendar: this.calendar });
                }
                this.loading = '';
                this.event = booking;
            }
            catch (err) {
                this.loading = '';
                // this._service.notifyError(`Failed to load booking data\nID: ${this.id}`);
                this._router.navigate(['/schedule']);
            }
        });
    }
    /**
     * Delete event
     */
    deleteEvent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.event && !this.loading) {
                this.loading = 'Cancelling meeting...';
                const { id, title } = this.event;
                this.deleting = true;
                yield this._events
                    .delete(id, { calendar: this.event.calendar })
                    .catch(() => {
                    // this._service.notifyError(`Failed to cancel booking \n ${title}`);
                });
                // this._service.notifySuccess(`Booking ${title} was successfully cancelled`);
                this._router.navigate(['/schedule']);
                this.event = null;
                this.loading = '';
                this.deleting = false;
            }
        });
    }
    confirmDelete() {
        const dialog_ref = this._dialog.open(_user_interfaces_components__WEBPACK_IMPORTED_MODULE_9__["ConfirmModalComponent"], {
            data: {
                title: 'Cancel Meeting',
                content: `Are you sure you want to cancel this meeting: ${this.event.title}`,
                okText: `I'm sure`,
                cancelText: 'No',
            },
        });
        dialog_ref.afterClosed().subscribe((evt) => {
            if (evt) {
                this.deleteEvent();
            }
        });
    }
    /**
     * Handle changes to sub-components
     */
    onChange(event) {
        if (event.type === 'edit') {
            if (localStorage) {
                const booking = new _user_interfaces_events__WEBPACK_IMPORTED_MODULE_7__["CalendarEvent"](Object.assign({}, this.event));
                localStorage.setItem('STAFF.booking_form', JSON.stringify(booking));
            }
            this._router.navigate(['/book', 'spaces']);
        }
        else if (event.type === 'view' || event.type === 'cancel_edit') {
            this.editing = false;
        }
        else if (event.type === 'cancel_booking') {
            this.editing = false;
            this.confirmDelete();
        }
    }
}
ScheduleViewEventComponent.ɵfac = function ScheduleViewEventComponent_Factory(t) { return new (t || ScheduleViewEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_bookings__WEBPACK_IMPORTED_MODULE_8__["BookingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_events__WEBPACK_IMPORTED_MODULE_7__["EventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"])); };
ScheduleViewEventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ScheduleViewEventComponent, selectors: [["schedule-view-event"]], outputs: { menu: "menu" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 8, consts: [[1, "event", "page"], [1, "header"], [3, "menuChange"], [1, "actions"], [1, "back"], ["mat-button", "", 3, "click"], [1, "row"], [3, "icon"], [1, "search"], [1, "body"], [4, "ngIf"], [3, "hidden", 4, "ngIf"], [1, "footer"], [1, "no-item", "center"], [1, "icon"], ["diameter", "100"], [1, "text"], [3, "hidden"], [3, "ngSwitch"], [3, "item", "loading", 4, "ngSwitchCase"], [3, "item", "event", "loading", 4, "ngSwitchDefault"], [3, "item", "loading"], [3, "item", "event", "loading"]], template: function ScheduleViewEventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a-topbar-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("menuChange", function ScheduleViewEventComponent_Template_a_topbar_header_menuChange_2_listener($event) { return ctx.menu.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScheduleViewEventComponent_Template_button_click_5_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "main", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ScheduleViewEventComponent_ng_container_11_Template, 6, 1, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ScheduleViewEventComponent_div_12_Template, 4, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "footer", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "a-footer-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("blank", false)("has-back", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.event);
    } }, directives: [_ui_topbar_header_topbar_header_component__WEBPACK_IMPORTED_MODULE_10__["TopbarHeaderComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_12__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ui_footer_menu_footer_menu_component__WEBPACK_IMPORTED_MODULE_13__["FooterMenuComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], _booking_details_booking_details_component__WEBPACK_IMPORTED_MODULE_15__["BookingDetailsComponent"], _event_details_event_details_component__WEBPACK_IMPORTED_MODULE_16__["EventDetailsComponent"]], styles: ["@keyframes wait {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.page[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  background: #f0f0f0;\n}\n.page[_ngcontent-%COMP%]   main[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n}\n.page[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  height: 3.5em;\n}\n.page[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  background: white;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.page[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.page[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex: 1;\n}\n.page[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: none;\n}\n.page[_ngcontent-%COMP%]   .actions.has-back[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: block;\n}\n.page[_ngcontent-%COMP%]   .actions.has-back[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  margin-left: 0.5em;\n  font-size: 1.5em;\n}\n.page[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.page[_ngcontent-%COMP%]   .actions.blank[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.page[_ngcontent-%COMP%]   .actions.blank[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%], .page[_ngcontent-%COMP%]   .actions.blank[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  display: none;\n}\n.page[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  height: 3.5em;\n  background: white;\n}\n.event.page[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  position: relative;\n}\n.icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC1zdHlsZXMvdmFyaWFibGVzLnNjc3MiLCJzaGFyZWQtc3R5bGVzL21peGlucy5zY3NzIiwiYXBwcy93b3JrcGxhY2Uvc3JjL2FwcC9zY2hlZHVsZS92aWV3LWV2ZW50L3ZpZXctZXZlbnQuY29tcG9uZW50LnNjc3MiLCJhcHBzL3dvcmtwbGFjZS9zcmMvYXBwL3NoZWxsLWxheW91dC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztxQkFBQTtBQWVBOzswQkFBQTtBQXdDQTs7Y0FBQTtBQWFBOztzQkFBQTtBQXBFQTs7cUJBQUE7QUFlQTs7MEJBQUE7QUF3Q0E7O2NBQUE7QUFhQTs7c0JBQUE7QUMvQ0E7RUFDSTtJQUFLLFVBQUE7RUNLUDtFREpFO0lBQU8sVUFBQTtFQ09UO0FBQ0Y7QURMQTtFQUNJO0lBQUssVUFBQTtFQ1FQO0VEUEU7SUFBTyxVQUFBO0VDVVQ7QUFDRjtBRFJBOztzQkFBQTtBRS9CQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FENENKO0FDMUNJO0VBQ0ksT0FBQTtFQUNBLGNBQUE7QUQ0Q1I7QUN6Q0k7RUFDSSxhQUFBO0FEMkNSO0FDeENJO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FEMENSO0FDeENRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUQwQ1o7QUN2Q1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0FEeUNaO0FDeENZO0VBQ0ksYUFBQTtBRDBDaEI7QUNwQ2dCO0VBQ0ksY0FBQTtBRHNDcEI7QUNyQ29CO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBRHVDeEI7QUNqQ1E7RUFDSSxZQUFBO0FEbUNaO0FDaENRO0VBQ0ksdUJBQUE7QURrQ1o7QUNoQ1k7O0VBRUksYUFBQTtBRGtDaEI7QUM3Qkk7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7QUQrQlI7QUEzRkk7RUFDRSxrQkFBQTtBQThGTjtBQXpGQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQTRGRiIsImZpbGUiOiJhcHBzL3dvcmtwbGFjZS9zcmMvYXBwL3NjaGVkdWxlL3ZpZXctZXZlbnQvdmlldy1ldmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qPT09PT09PT09PT09PT09PT09KlxcXG58fCBCcmFuZGluZyBDb2xvdXJzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT0qL1xuXG4kcHdjLW9yYW5nZTogI0QwNEEwMjtcbiRwd2Mtcm9zZTogI0Q5Mzk1NDtcbiRwd2MtcmVkOiAjRTAzMDFFO1xuJHB3Yy15ZWxsb3c6ICNGRkI2MDA7XG4kcHdjLXRhbmdlcmluZTogI0VCOEMwMDtcblxuJGxpZ2h0LWdyZXk6ICNkZGRkZGQ7XG5cbiRib3hTaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoIzAwMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgjMDAwLCAwLjE0KSxcbiAgICAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsIDAuMTIpO1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzIxYTQ1MztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmc6ICNmZmJmMWY7XG4kcGVuZGluZy1saWdodDogbGlnaHRlbigkcGVuZGluZywgMTApO1xuJHBlbmRpbmctZGFyazogZGFya2VuKCRwZW5kaW5nLCAxMCk7XG5cbiRlcnJvcjogI2Y0NDMzNjtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbiRjb2xvci1wcmltYXJ5OiAjZDA0YTAyO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjZTAzMDFlO1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiZy1saWdodDogI2YwZjBmMDtcbiRiZy1kYXJrOiAjMjYzMjM4O1xuJGZvb3Rlci1iYWNrOiAjMjYzMjM4O1xuJGdyZXk6ICM5Njk2OTY7XG5cbiRjb2xvci10ZXJuYXJ5OiAjMGEwZDJlO1xuJGNvbG9yLWV4dGVybmFsOiAjMTUxYzZhO1xuXG4vLyBUeXBlIGNvbG9ycyBmb3IgYm9va2luZyBzdGF0dXNcbiRpbnRlcm5hbDogJGNvbG9yLXByaW1hcnk7XG4kZXh0ZXJuYWw6ICRjb2xvci1leHRlcm5hbDtcbiRjYW5jZWxsZWQ6ICRncmV5O1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQtc3RhY2s6ICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5nLWZvbnQ6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4kZm9udDogJGZvbnQtc3RhY2s7XG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE2cHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcbiIsIlxuQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGhpZGUtdGV4dC1vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygkY29sb3I6ICMwMDAsICRkZXB0aDogMSkge1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAxcHggKiAoJGRlcHRoIC0gMSkgcmdiYSgjMDAwLCAuMiksXG4gICAgICAgICAgICAgICAgMCAxcHggMXB4IDAgcmdiYSgjMDAwLCAuMTQpLFxuICAgICAgICAgICAgICAgIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwgLjEyKTtcbn1cblxuQG1peGluIGZhZGUtaW4oJHdhaXQpIHtcbiAgICBhbmltYXRpb246XG4gICAgICAgIHdhaXQgI3skd2FpdH0sXG4gICAgICAgIGZhZGUtaW4gNDAwbXMgI3skd2FpdH07XG59XG5cbkBrZXlmcmFtZXMgd2FpdCB7XG4gICAgMCUgeyBvcGFjaXR5OiAwOyB9XG4gICAgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbn1cblxuQGtleWZyYW1lcyBmYWRlLWluIHtcbiAgICAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxufVxuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuQGltcG9ydCAnbWl4aW5zJztcblxuQGltcG9ydCAnLi4vLi4vc2hlbGwtbGF5b3V0LnNjc3MnO1xuXG4uZXZlbnQucGFnZSB7XG4gIC5hY3Rpb25zIHtcbiAgICAuc2VhcmNoIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gIH1cbn1cblxuLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsIi5wYWdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuXG4gICAgbWFpbiB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIH1cblxuICAgIGhlYWRlciB7XG4gICAgICAgIGhlaWdodDogMy41ZW07XG4gICAgfVxuXG4gICAgLmFjdGlvbnMge1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgIC5yb3cge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYWNrIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuaGFzLWJhY2sge1xuICAgICAgICAgICAgLmJhY2sge1xuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBhcHAtaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC41ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnNlYXJjaCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAmLmJsYW5rIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgICAgICAgICAuc2VhcmNoLFxuICAgICAgICAgICAgLmJhY2stYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9vdGVyIHtcbiAgICAgICAgaGVpZ2h0OiAzLjVlbTtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScheduleViewEventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'schedule-view-event',
                templateUrl: './view-event.component.html',
                styleUrls: ['./view-event.component.scss'],
            }]
    }], function () { return [{ type: _user_interfaces_bookings__WEBPACK_IMPORTED_MODULE_8__["BookingsService"] }, { type: _user_interfaces_events__WEBPACK_IMPORTED_MODULE_7__["EventsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }]; }, { menu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "Rufb":
/*!**********************************************************************!*\
  !*** ./src/app/schedule/event-list/list-item/list-item.component.ts ***!
  \**********************************************************************/
/*! exports provided: ScheduleEventListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleEventListItemComponent", function() { return ScheduleEventListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _user_interfaces_bookings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/bookings */ "05Mk");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "BQ33");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");










const _c0 = function () { return { type: "icon", class: "material-icons", content: "radio_button_checked" }; };
function ScheduleEventListItemComponent_div_0_div_1_app_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-icon", 7);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function ScheduleEventListItemComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ScheduleEventListItemComponent_div_0_div_1_app_icon_1_Template, 1, 2, "app-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r1.event.is_today);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.event.title, " ");
} }
function ScheduleEventListItemComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.event.title, " ");
} }
const _c1 = function () { return { type: "icon", class: "material-icons", content: "cancel" }; };
function ScheduleEventListItemComponent_div_0_div_3_app_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-icon", 7);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
const _c2 = function () { return { type: "icon", class: "material-icons", content: "forum" }; };
function ScheduleEventListItemComponent_div_0_div_3_app_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-icon", 7);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
function ScheduleEventListItemComponent_div_0_div_3_label_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "(Cancelled)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c3 = function () { return { type: "icon", class: "material-icons", content: "place" }; };
function ScheduleEventListItemComponent_div_0_div_3_app_icon_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-icon", 7);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c3));
} }
function ScheduleEventListItemComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScheduleEventListItemComponent_div_0_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.view(ctx_r9.event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ScheduleEventListItemComponent_div_0_div_3_app_icon_3_Template, 1, 2, "app-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ScheduleEventListItemComponent_div_0_div_3_app_icon_4_Template, 1, 2, "app-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ScheduleEventListItemComponent_div_0_div_3_label_7_Template, 2, 0, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ScheduleEventListItemComponent_div_0_div_3_app_icon_12_Template, 1, 2, "app-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("done", ctx_r3.is_done);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "time " + ctx_r3.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r3.event.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.event.status === "cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.event.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r3.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.location || "No location");
} }
function ScheduleEventListItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ScheduleEventListItemComponent_div_0_div_1_Template, 3, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ScheduleEventListItemComponent_div_0_div_2_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ScheduleEventListItemComponent_div_0_div_3_Template, 15, 10, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r0.event.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "empty");
} }
class ScheduleEventListItemComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["BaseClass"] {
    constructor(_bookings, _router) {
        super();
        this._bookings = _bookings;
        this._router = _router;
    }
    get isFuture() {
        return dayjs__WEBPACK_IMPORTED_MODULE_4__(this.event.date).isAfter(dayjs__WEBPACK_IMPORTED_MODULE_4__(), 'm');
    }
    get status() {
        return this.event.status;
    }
    get is_done() {
        return this.event.is_done;
    }
    /** Display location of the booking event */
    get location() {
        if (!this.event || this.event.type === 'date' || this.event.type === 'empty') {
            return 'No location';
        }
        return this.event.location;
    }
    /** Image name to display for the event */
    get type_image() {
        if (!this.event || this.event.type === 'date' || this.event.type === 'empty') {
            return 'block';
        }
        if (this.event.has_visitors) {
            return 'external';
        }
        return 'book_room';
    }
    get time() {
        if (!this.event || this.event.type === 'date' || this.event.type === 'empty') {
            return '';
        }
        return this.event.all_day || this.event.duration > 23 * 60
            ? 'All Day'
            : dayjs__WEBPACK_IMPORTED_MODULE_4__(this.event.date).format('h:mm A');
    }
    view() {
        const query = Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["toQueryString"])({
            calendar: this.event.calendar,
            type: this.event.type,
        });
        const url = `/schedule/view/${this.event.id}?${query}`;
        this._router.navigateByUrl(url);
    }
}
ScheduleEventListItemComponent.ɵfac = function ScheduleEventListItemComponent_Factory(t) { return new (t || ScheduleEventListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_bookings__WEBPACK_IMPORTED_MODULE_2__["BookingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ScheduleEventListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScheduleEventListItemComponent, selectors: [["schedule-event-item"]], inputs: { event: "event" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "item", 3, "ngSwitch", 4, "ngIf"], [1, "item", 3, "ngSwitch"], ["class", "date", 4, "ngSwitchCase"], ["class", "empty", 4, "ngSwitchCase"], ["class", "event", 3, "click", 4, "ngSwitchDefault"], [1, "date"], [3, "icon", 4, "ngIf"], [3, "icon"], [1, "empty"], [1, "event", 3, "click"], [3, "ngClass"], [1, "icon", 3, "ngSwitch"], [3, "icon", 4, "ngSwitchCase"], [3, "icon", 4, "ngSwitchDefault"], [4, "ngIf"], [1, "details"], [1, "title"], [1, "location"], [1, "text"]], template: function ScheduleEventListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ScheduleEventListItemComponent_div_0_Template, 4, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.event);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchDefault"], _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: ["@keyframes wait {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n  margin-top: 1px;\n}\n.empty[_ngcontent-%COMP%] {\n  height: 3em;\n  font-size: 1.6em;\n  color: rgba(0, 0, 0, 0.35);\n  padding-left: 1em;\n  display: flex;\n  align-items: center;\n}\n.date[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 1.2em;\n  margin: 1em 0 0.5em;\n}\n.event[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 5em;\n  width: 100%;\n  background: #fff;\n  cursor: pointer;\n}\n.event[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 5em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.event[_ngcontent-%COMP%]   .time.done[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.35);\n}\n.event[_ngcontent-%COMP%]   .time.cancelled[_ngcontent-%COMP%] {\n  background: #e0301e;\n  color: #fff;\n}\n.event[_ngcontent-%COMP%]   .time.confirmed[_ngcontent-%COMP%] {\n  background: #21a453;\n}\n.event[_ngcontent-%COMP%]   .time.tentative[_ngcontent-%COMP%] {\n  background: #ffbf1f;\n}\n.event[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-left: 0.5em;\n}\n.event[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-top: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC1zdHlsZXMvdmFyaWFibGVzLnNjc3MiLCJzaGFyZWQtc3R5bGVzL21peGlucy5zY3NzIiwiYXBwcy93b3JrcGxhY2Uvc3JjL2FwcC9zY2hlZHVsZS9ldmVudC1saXN0L2xpc3QtaXRlbS9saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O3FCQUFBO0FBZUE7OzBCQUFBO0FBd0NBOztjQUFBO0FBYUE7O3NCQUFBO0FBcEVBOztxQkFBQTtBQWVBOzswQkFBQTtBQXdDQTs7Y0FBQTtBQWFBOztzQkFBQTtBQy9DQTtFQUNJO0lBQUssVUFBQTtFQ0tQO0VESkU7SUFBTyxVQUFBO0VDT1Q7QUFDRjtBRExBO0VBQ0k7SUFBSyxVQUFBO0VDUVA7RURQRTtJQUFPLFVBQUE7RUNVVDtBQUNGO0FEUkE7O3NCQUFBO0FDM0JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQXdDRjtBQXJDQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUF3Q0Y7QUFyQ0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQXdDRjtBQXJDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBd0NGO0FBdkNFO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBeUNKO0FBeENJO0VBQ0UsK0JBQUE7QUEwQ047QUF4Q0k7RUFDRSxtQkZQWTtFRVFaLFdBQUE7QUEwQ047QUF4Q0k7RUFDRSxtQkYzQkk7QUVxRVY7QUF4Q0k7RUFDRSxtQkYxQkk7QUVvRVY7QUF2Q0U7RUFDRSxPQUFBO0VBQ0EsbUJBQUE7QUF5Q0o7QUF4Q0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQTBDTiIsImZpbGUiOiJhcHBzL3dvcmtwbGFjZS9zcmMvYXBwL3NjaGVkdWxlL2V2ZW50LWxpc3QvbGlzdC1pdGVtL2xpc3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qPT09PT09PT09PT09PT09PT09KlxcXG58fCBCcmFuZGluZyBDb2xvdXJzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT0qL1xuXG4kcHdjLW9yYW5nZTogI0QwNEEwMjtcbiRwd2Mtcm9zZTogI0Q5Mzk1NDtcbiRwd2MtcmVkOiAjRTAzMDFFO1xuJHB3Yy15ZWxsb3c6ICNGRkI2MDA7XG4kcHdjLXRhbmdlcmluZTogI0VCOEMwMDtcblxuJGxpZ2h0LWdyZXk6ICNkZGRkZGQ7XG5cbiRib3hTaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoIzAwMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgjMDAwLCAwLjE0KSxcbiAgICAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsIDAuMTIpO1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzIxYTQ1MztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmc6ICNmZmJmMWY7XG4kcGVuZGluZy1saWdodDogbGlnaHRlbigkcGVuZGluZywgMTApO1xuJHBlbmRpbmctZGFyazogZGFya2VuKCRwZW5kaW5nLCAxMCk7XG5cbiRlcnJvcjogI2Y0NDMzNjtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbiRjb2xvci1wcmltYXJ5OiAjZDA0YTAyO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjZTAzMDFlO1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiZy1saWdodDogI2YwZjBmMDtcbiRiZy1kYXJrOiAjMjYzMjM4O1xuJGZvb3Rlci1iYWNrOiAjMjYzMjM4O1xuJGdyZXk6ICM5Njk2OTY7XG5cbiRjb2xvci10ZXJuYXJ5OiAjMGEwZDJlO1xuJGNvbG9yLWV4dGVybmFsOiAjMTUxYzZhO1xuXG4vLyBUeXBlIGNvbG9ycyBmb3IgYm9va2luZyBzdGF0dXNcbiRpbnRlcm5hbDogJGNvbG9yLXByaW1hcnk7XG4kZXh0ZXJuYWw6ICRjb2xvci1leHRlcm5hbDtcbiRjYW5jZWxsZWQ6ICRncmV5O1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQtc3RhY2s6ICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5nLWZvbnQ6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4kZm9udDogJGZvbnQtc3RhY2s7XG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE2cHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcbiIsIlxuQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGhpZGUtdGV4dC1vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygkY29sb3I6ICMwMDAsICRkZXB0aDogMSkge1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAxcHggKiAoJGRlcHRoIC0gMSkgcmdiYSgjMDAwLCAuMiksXG4gICAgICAgICAgICAgICAgMCAxcHggMXB4IDAgcmdiYSgjMDAwLCAuMTQpLFxuICAgICAgICAgICAgICAgIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwgLjEyKTtcbn1cblxuQG1peGluIGZhZGUtaW4oJHdhaXQpIHtcbiAgICBhbmltYXRpb246XG4gICAgICAgIHdhaXQgI3skd2FpdH0sXG4gICAgICAgIGZhZGUtaW4gNDAwbXMgI3skd2FpdH07XG59XG5cbkBrZXlmcmFtZXMgd2FpdCB7XG4gICAgMCUgeyBvcGFjaXR5OiAwOyB9XG4gICAgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbn1cblxuQGtleWZyYW1lcyBmYWRlLWluIHtcbiAgICAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxufVxuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuQGltcG9ydCAnbWl4aW5zJztcblxuLml0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG5cbi5lbXB0eSB7XG4gIGhlaWdodDogM2VtO1xuICBmb250LXNpemU6IDEuNmVtO1xuICBjb2xvcjogcmdiYSgjMDAwLCAwLjM1KTtcbiAgcGFkZGluZy1sZWZ0OiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kYXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbWFyZ2luOiAxZW0gMCAwLjVlbTtcbn1cblxuLmV2ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA1ZW07XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC50aW1lIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDVlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAmLmRvbmUge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgjMDAwLCAwLjM1KTtcbiAgICB9XG4gICAgJi5jYW5jZWxsZWQge1xuICAgICAgYmFja2dyb3VuZDogJGNvbG9yLXNlY29uZGFyeTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICAmLmNvbmZpcm1lZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAkc3VjY2VzcztcbiAgICB9XG4gICAgJi50ZW50YXRpdmUge1xuICAgICAgYmFja2dyb3VuZDogJHBlbmRpbmc7XG4gICAgfVxuICB9XG4gIC5kZXRhaWxzIHtcbiAgICBmbGV4OiAxO1xuICAgIHBhZGRpbmctbGVmdDogMC41ZW07XG4gICAgLmxvY2F0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgbWFyZ2luLXRvcDogMC41ZW07XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScheduleEventListItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'schedule-event-item',
                templateUrl: './list-item.component.html',
                styleUrls: ['./list-item.component.scss'],
            }]
    }], function () { return [{ type: _user_interfaces_bookings__WEBPACK_IMPORTED_MODULE_2__["BookingsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZeEs":
/*!*************************************************************!*\
  !*** ./src/app/schedule/event-list/event-list.component.ts ***!
  \*************************************************************/
/*! exports provided: ScheduleEventListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleEventListComponent", function() { return ScheduleEventListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "Jb3d");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @user-interfaces/calendar */ "7JBE");
/* harmony import */ var _user_interfaces_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @user-interfaces/events */ "eZII");
/* harmony import */ var _user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @user-interfaces/spaces */ "6CBO");
/* harmony import */ var _user_interfaces_bookings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @user-interfaces/bookings */ "05Mk");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dayjs */ "BQ33");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ui_topbar_header_topbar_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/topbar-header/topbar-header.component */ "e81E");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "mFH5");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ "gcUQ");
/* harmony import */ var _ui_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../ui/infinite-scroll.component */ "fQIa");
/* harmony import */ var _ui_footer_menu_footer_menu_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../ui/footer-menu/footer-menu.component */ "C9Ki");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-bar */ "66mq");
/* harmony import */ var _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./list-item/list-item.component */ "Rufb");

































const _c0 = ["dateMenu"];
function ScheduleEventListComponent_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cal_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", cal_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", cal_r8.summary, " ");
} }
function ScheduleEventListComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", item_r9.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r9.name, " ");
} }
function ScheduleEventListComponent_mat_progress_bar_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-bar", 29);
} }
function ScheduleEventListComponent_schedule_event_item_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "schedule-event-item", 30);
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", i_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("event", item_r10);
} }
function ScheduleEventListComponent_mat_progress_bar_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-bar", 29);
} }
const _c1 = function () { return { class: "material-icons", content: "event" }; };
class ScheduleEventListComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_5__["BaseClass"] {
    constructor(_settings, _events, _spaces, _calendars, _bookings, _route, _router) {
        super();
        this._settings = _settings;
        this._events = _events;
        this._spaces = _spaces;
        this._calendars = _calendars;
        this._bookings = _bookings;
        this._route = _route;
        this._router = _router;
        /** Emitter  */
        this.event_list = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** List of items to display on the event list */
        this.events = [];
        /** Number of days to render in the list from the current date */
        this.shown_offset = 7;
        /** Offset of the date to show events for */
        this.date_offset = 0;
        /** Current UTC epoch */
        this.from = dayjs__WEBPACK_IMPORTED_MODULE_10__().valueOf();
        /** Legend */
        this.legend_list = [];
        /** Menu event */
        this.menu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.subscription('route.query', this._route.queryParamMap.subscribe((params) => {
            if (params.has('email')) {
                this.calendar = params.get('email');
            }
        }));
        this._spaces.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])((_) => _)).subscribe(() => {
            this._calendars.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])((_) => _)).subscribe((value) => {
                var _a, _b;
                this.calendar_list = this._calendars.calendars;
                if (!this.calendar) {
                    this.calendar =
                        ((_a = this.calendar_list.find((i) => i.primary)) === null || _a === void 0 ? void 0 : _a.id) || ((_b = this.calendar_list[0]) === null || _b === void 0 ? void 0 : _b.id);
                }
                this.updateList();
                this.interval('update_events', () => this.updateList(), 100 * 1000);
            });
        });
        this.legend_list = this._settings.get('app.schedule.legend');
    }
    /**
     * Update the list of events for the currently visible period
     */
    updateList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            const start = dayjs__WEBPACK_IMPORTED_MODULE_10__().add(this.date_offset, 'd').startOf('d');
            const end = start.add(7, 'd').endOf('d');
            let events;
            if (this.calendar === 'desks') {
                events = yield this._bookings.query({
                    period_start: start.unix(),
                    period_end: end.unix(),
                    type: 'desk',
                    user: 'current',
                });
            }
            else {
                events = yield this._events.query({
                    calendars: this.calendar,
                    period_start: start.unix(),
                    period_end: end.unix(),
                });
            }
            const list = events;
            const old_events = this.events.filter((i) => {
                const date = dayjs__WEBPACK_IMPORTED_MODULE_10__(i.date);
                return (i.type !== 'date' &&
                    i.type !== 'empty' &&
                    (date.isBefore(start, 's') || date.isAfter(end, 's')));
            });
            this.events = this.processEvents(list, old_events);
            // Update event list for view listing
            const event_list = this.events.filter((i) => i.type !== 'date' && i.type !== 'empty');
            this.event_list.emit(event_list.map((i) => ({ id: i.id, date: i.date })));
            // Scroll to date if needed
            this.timeout('scroll_to', () => this.scrollTo());
            this.loading = false;
        });
    }
    /**
     * Process list of new items and merge with the old
     * @param list List of new bookings to generate event blocks for
     * @param old_events List of relevant old event blocks
     */
    processEvents(list, old_events = []) {
        let events = [];
        const now = dayjs__WEBPACK_IMPORTED_MODULE_10__();
        let date = dayjs__WEBPACK_IMPORTED_MODULE_10__().startOf('d');
        const end = date.add(this.date_offset + this.shown_offset, 'd').endOf('d');
        for (; date.isBefore(end); date = date.add(1, 'd')) {
            const date_str = date.format('YYYY-MM-DD');
            // Add date block
            events.push({
                id: date_str,
                type: 'date',
                title: date.format('dddd, DD MMM'),
                date: date.valueOf(),
            });
            const filter_fn = (i) => {
                const day = dayjs__WEBPACK_IMPORTED_MODULE_10__(i.date);
                return day.isSame(date, 'd');
            };
            // Add events for today to list
            const new_items = list.filter(filter_fn);
            const old_items = old_events.filter(filter_fn);
            if (new_items.length || old_items.length) {
                events = events.concat(new_items).concat(old_items);
            }
            else {
                // Add block for no events if so
                events.push({
                    id: `${date_str}-empty`,
                    type: 'empty',
                    title: `No items for ${date.format('dddd, DD MMM')}`,
                    date: date.valueOf() + 1,
                });
            }
        }
        events.sort((a, b) => a.date - b.date);
        return Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_5__["unique"])(events, 'id');
    }
    /**
     * Handle scrolling on the event list
     */
    onScroll() {
        if (!this.event_promise && this.calendar_list) {
            this.date_offset = this.date_offset + 7;
            this.updateList();
        }
    }
    /**
     * Update the date offset
     * @param date UTC milliseconds epoch of new date offset
     */
    updateDate(date) {
        const day = dayjs__WEBPACK_IMPORTED_MODULE_10__(date);
        this.date_offset = day.diff(dayjs__WEBPACK_IMPORTED_MODULE_10__(), 'd') - 1;
        this.shown_offset = Math.max(this.shown_offset, this.date_offset + 3);
        this.scroll_to = day.format('YYYY-MM-DD');
        delete this.event_promise;
        // this.date = dayjs().add(this.date_offset, 'd').valueOf();
        this.updateList();
    }
    /**
     * Scroll to a previously defined date on the event list
     */
    scrollTo() {
        if (this.scroll_to) {
            const index = this.events.findIndex((i) => i.id === this.scroll_to);
            if (index > -1) {
                document.getElementById(`${index}`).scrollIntoView({ behavior: 'smooth' });
            }
            this.scroll_to = '';
        }
    }
    /** On calendar change */
    onCalendarChange() {
        this.events = [];
        this.date_offset = 0;
        this.date = dayjs__WEBPACK_IMPORTED_MODULE_10__().valueOf();
        this.updateList();
        this._router.navigate(['/schedule'], {
            queryParams: {
                email: this.calendar,
            },
            queryParamsHandling: 'merge',
        });
    }
    /** Close calendar */
    closeDatePicker() {
        this.trigger.closeMenu();
    }
}
ScheduleEventListComponent.ɵfac = function ScheduleEventListComponent_Factory(t) { return new (t || ScheduleEventListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_common__WEBPACK_IMPORTED_MODULE_5__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_events__WEBPACK_IMPORTED_MODULE_7__["EventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_8__["SpacesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_bookings__WEBPACK_IMPORTED_MODULE_9__["BookingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ScheduleEventListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ScheduleEventListComponent, selectors: [["schedule-event-list"]], viewQuery: function ScheduleEventListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.trigger = _t.first);
    } }, outputs: { event_list: "eventList", menu: "menu" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 34, vars: 12, consts: [[1, "schedule", "page"], [1, "header"], [3, "menuChange"], [1, "actions"], [1, "calendars"], ["appearance", "outline"], ["name", "calendars", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "desks"], [1, "legend"], ["mat-button", "", 1, "clear", 3, "matMenuTriggerFor"], ["legend", "matMenu"], ["class", "legend", 4, "ngFor", "ngForOf"], [1, "date"], ["mat-icon-button", "", 1, "relative"], ["dateMenu", ""], [3, "icon"], ["matInput", "", 1, "opacity-0", "absolute", "inset-0", 3, "ngModel", "matDatepicker", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "body"], [1, "event-list"], [1, "progress"], ["mode", "indeterminate", 4, "ngIf"], [3, "scrolled"], [3, "id", "event", 4, "ngFor", "ngForOf"], [1, "footer"], [3, "value"], [1, "color"], ["mode", "indeterminate"], [3, "id", "event"]], template: function ScheduleEventListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a-topbar-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("menuChange", function ScheduleEventListComponent_Template_a_topbar_header_menuChange_2_listener($event) { return ctx.menu.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ScheduleEventListComponent_Template_mat_select_ngModelChange_6_listener($event) { return ctx.calendar = $event; })("ngModelChange", function ScheduleEventListComponent_Template_mat_select_ngModelChange_6_listener() { return ctx.onCalendarChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ScheduleEventListComponent_mat_option_7_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Desks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Legend ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-menu", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ScheduleEventListComponent_div_15_Template, 3, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "app-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ScheduleEventListComponent_Template_input_ngModelChange_20_listener($event) { return ctx.updateDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "mat-datepicker-toggle", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "mat-datepicker", null, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "main", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ScheduleEventListComponent_mat_progress_bar_27_Template, 1, 0, "mat-progress-bar", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a-infinite-scroll", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scrolled", function ScheduleEventListComponent_Template_a_infinite_scroll_scrolled_29_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ScheduleEventListComponent_schedule_event_item_30_Template, 1, 2, "schedule-event-item", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ScheduleEventListComponent_mat_progress_bar_31_Template, 1, 0, "mat-progress-bar", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "footer", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "a-footer-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.calendar);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.calendar_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.legend_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.date)("matDatepicker", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.events);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading && ctx.events.length > 0);
    } }, directives: [_ui_topbar_header_topbar_header_component__WEBPACK_IMPORTED_MODULE_11__["TopbarHeaderComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["_MatMenu"], _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_18__["IconComponent"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _ui_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_21__["InfiniteScrollComponent"], _ui_footer_menu_footer_menu_component__WEBPACK_IMPORTED_MODULE_22__["FooterMenuComponent"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__["MatProgressBar"], _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_24__["ScheduleEventListItemComponent"]], styles: ["@keyframes wait {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.page[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  background: #f0f0f0;\n}\n.page[_ngcontent-%COMP%]   main[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n}\n.page[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  height: 3.5em;\n}\n.page[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  background: white;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.page[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.page[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex: 1;\n}\n.page[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: none;\n}\n.page[_ngcontent-%COMP%]   .actions.has-back[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: block;\n}\n.page[_ngcontent-%COMP%]   .actions.has-back[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  margin-left: 0.5em;\n  font-size: 1.5em;\n}\n.page[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.page[_ngcontent-%COMP%]   .actions.blank[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.page[_ngcontent-%COMP%]   .actions.blank[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%], .page[_ngcontent-%COMP%]   .actions.blank[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  display: none;\n}\n.page[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  height: 3.5em;\n  background: white;\n}\n.actions[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.actions[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  position: relative;\n}\n.actions[_ngcontent-%COMP%]   .legend[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.actions[_ngcontent-%COMP%]   .legend[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.calendars[_ngcontent-%COMP%] {\n  margin-left: 0.5em;\n  flex: 1;\n  height: 4em;\n}\n.calendars[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 15em;\n}\n.event-list[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n.event-list[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  padding: 0 1em;\n}\n.event-list[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   a-infinite-scroll[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n  height: 2px;\n}\n.tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: -0.25em;\n  background-color: #fff;\n  padding: 0.5em;\n  border-radius: 4px;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  z-index: 999;\n  color: #000;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .date-picker[_ngcontent-%COMP%] {\n    font-size: 0.8em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .date-picker[_ngcontent-%COMP%] {\n    font-size: 0.8em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC1zdHlsZXMvdmFyaWFibGVzLnNjc3MiLCJzaGFyZWQtc3R5bGVzL21peGlucy5zY3NzIiwiYXBwcy93b3JrcGxhY2Uvc3JjL2FwcC9zY2hlZHVsZS9ldmVudC1saXN0L2V2ZW50LWxpc3QuY29tcG9uZW50LnNjc3MiLCJhcHBzL3dvcmtwbGFjZS9zcmMvYXBwL3NoZWxsLWxheW91dC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztxQkFBQTtBQWVBOzswQkFBQTtBQXdDQTs7Y0FBQTtBQWFBOztzQkFBQTtBQXBFQTs7cUJBQUE7QUFlQTs7MEJBQUE7QUF3Q0E7O2NBQUE7QUFhQTs7c0JBQUE7QUMvQ0E7RUFDSTtJQUFLLFVBQUE7RUNLUDtFREpFO0lBQU8sVUFBQTtFQ09UO0FBQ0Y7QURMQTtFQUNJO0lBQUssVUFBQTtFQ1FQO0VEUEU7SUFBTyxVQUFBO0VDVVQ7QUFDRjtBRFJBOztzQkFBQTtBRS9CQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FENENKO0FDMUNJO0VBQ0ksT0FBQTtFQUNBLGNBQUE7QUQ0Q1I7QUN6Q0k7RUFDSSxhQUFBO0FEMkNSO0FDeENJO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FEMENSO0FDeENRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUQwQ1o7QUN2Q1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0FEeUNaO0FDeENZO0VBQ0ksYUFBQTtBRDBDaEI7QUNwQ2dCO0VBQ0ksY0FBQTtBRHNDcEI7QUNyQ29CO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBRHVDeEI7QUNqQ1E7RUFDSSxZQUFBO0FEbUNaO0FDaENRO0VBQ0ksdUJBQUE7QURrQ1o7QUNoQ1k7O0VBRUksYUFBQTtBRGtDaEI7QUM3Qkk7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7QUQrQlI7QUE3RkE7RUFDRSx5QkFBQTtBQWdHRjtBQS9GRTtFQUNFLGtCQUFBO0FBaUdKO0FBL0ZFO0VBQ0UsWUFBQTtBQWlHSjtBQWhHSTtFQUNFLFlBQUE7QUFrR047QUE3RkE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FBZ0dGO0FBL0ZFO0VBQ0UsV0FBQTtBQWlHSjtBQTdGQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFnR0Y7QUEvRkU7RUFDRSxjQUFBO0FBaUdKO0FBL0ZNO0VBQ0UsV0FBQTtBQWlHUjtBQTNGQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFRHRDRSxpSEFBQTtFQ3dDRixZQUFBO0VBQ0EsV0ZoQ1U7QUU4SFo7QUQ1R1E7RUNpQlI7SUFFSSxnQkFBQTtFQThGRjtBQUNGO0FEL0dRO0VDY1I7SUFFSSxnQkFBQTtFQW1HRjtBQUNGIiwiZmlsZSI6ImFwcHMvd29ya3BsYWNlL3NyYy9hcHAvc2NoZWR1bGUvZXZlbnQtbGlzdC9ldmVudC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo9PT09PT09PT09PT09PT09PT0qXFxcbnx8IEJyYW5kaW5nIENvbG91cnMgfHxcblxcKj09PT09PT09PT09PT09PT09PSovXG5cbiRwd2Mtb3JhbmdlOiAjRDA0QTAyO1xuJHB3Yy1yb3NlOiAjRDkzOTU0O1xuJHB3Yy1yZWQ6ICNFMDMwMUU7XG4kcHdjLXllbGxvdzogI0ZGQjYwMDtcbiRwd2MtdGFuZ2VyaW5lOiAjRUI4QzAwO1xuXG4kbGlnaHQtZ3JleTogI2RkZGRkZDtcblxuJGJveFNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgjMDAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKCMwMDAsIDAuMTQpLFxuICAgIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwgMC4xMik7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjMjFhNDUzO1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYmYxZjtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZjQ0MzM2O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICNkMDRhMDI7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICNlMDMwMWU7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJnLWxpZ2h0OiAjZjBmMGYwO1xuJGJnLWRhcms6ICMyNjMyMzg7XG4kZm9vdGVyLWJhY2s6ICMyNjMyMzg7XG4kZ3JleTogIzk2OTY5NjtcblxuJGNvbG9yLXRlcm5hcnk6ICMwYTBkMmU7XG4kY29sb3ItZXh0ZXJuYWw6ICMxNTFjNmE7XG5cbi8vIFR5cGUgY29sb3JzIGZvciBib29raW5nIHN0YXR1c1xuJGludGVybmFsOiAkY29sb3ItcHJpbWFyeTtcbiRleHRlcm5hbDogJGNvbG9yLWV4dGVybmFsO1xuJGNhbmNlbGxlZDogJGdyZXk7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udC1zdGFjazogJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcblxuJGhlYWRpbmctZm9udDogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiRmb250OiAkZm9udC1zdGFjaztcblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuIiwiXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gaGlkZS10ZXh0LW92ZXJmbG93IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93KCRjb2xvcjogIzAwMCwgJGRlcHRoOiAxKSB7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDFweCAqICgkZGVwdGggLSAxKSByZ2JhKCMwMDAsIC4yKSxcbiAgICAgICAgICAgICAgICAwIDFweCAxcHggMCByZ2JhKCMwMDAsIC4xNCksXG4gICAgICAgICAgICAgICAgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLCAuMTIpO1xufVxuXG5AbWl4aW4gZmFkZS1pbigkd2FpdCkge1xuICAgIGFuaW1hdGlvbjpcbiAgICAgICAgd2FpdCAjeyR3YWl0fSxcbiAgICAgICAgZmFkZS1pbiA0MDBtcyAjeyR3YWl0fTtcbn1cblxuQGtleWZyYW1lcyB3YWl0IHtcbiAgICAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgICAxMDAlIHsgb3BhY2l0eTogMDsgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAgIDAlIHsgb3BhY2l0eTogMDsgfVxuICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AaW1wb3J0ICdtaXhpbnMnO1xuXG5AaW1wb3J0ICcuLi8uLi9zaGVsbC1sYXlvdXQuc2Nzcyc7XG5cbi5hY3Rpb25zIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgLmRhdGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAubGVnZW5kIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYnV0dG9uIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cbn1cblxuLmNhbGVuZGFycyB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiA0ZW07XG4gIG1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTVlbTtcbiAgfVxufVxuXG4uZXZlbnQtbGlzdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLmJvZHkge1xuICAgIHBhZGRpbmc6IDAgMWVtO1xuICAgIGEtaW5maW5pdGUtc2Nyb2xsIHtcbiAgICAgIGRpdjpsYXN0LWNoaWxkIHtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi50b29sdGlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIHJpZ2h0OiAtMC4yNWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBAaW5jbHVkZSBib3gtc2hhZG93O1xuICB6LWluZGV4OiA5OTk7XG4gIGNvbG9yOiAkZm9udC1kYXJrO1xufVxuXG4uZGF0ZS1waWNrZXIge1xuICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gIH1cbn1cbiIsIi5wYWdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuXG4gICAgbWFpbiB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIH1cblxuICAgIGhlYWRlciB7XG4gICAgICAgIGhlaWdodDogMy41ZW07XG4gICAgfVxuXG4gICAgLmFjdGlvbnMge1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgIC5yb3cge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYWNrIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuaGFzLWJhY2sge1xuICAgICAgICAgICAgLmJhY2sge1xuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBhcHAtaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC41ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnNlYXJjaCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAmLmJsYW5rIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgICAgICAgICAuc2VhcmNoLFxuICAgICAgICAgICAgLmJhY2stYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9vdGVyIHtcbiAgICAgICAgaGVpZ2h0OiAzLjVlbTtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScheduleEventListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'schedule-event-list',
                templateUrl: './event-list.component.html',
                styleUrls: ['./event-list.component.scss'],
            }]
    }], function () { return [{ type: _user_interfaces_common__WEBPACK_IMPORTED_MODULE_5__["SettingsService"] }, { type: _user_interfaces_events__WEBPACK_IMPORTED_MODULE_7__["EventsService"] }, { type: _user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_8__["SpacesService"] }, { type: _user_interfaces_calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarService"] }, { type: _user_interfaces_bookings__WEBPACK_IMPORTED_MODULE_9__["BookingsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { event_list: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['eventList']
        }], menu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], trigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['dateMenu', { read: _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], static: false }]
        }] }); })();


/***/ }),

/***/ "f/16":
/*!*********************************************!*\
  !*** ./src/app/schedule/schedule.routes.ts ***!
  \*********************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _schedule_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.component */ "lBL1");

const ROUTES = [
    { path: '', component: _schedule_component__WEBPACK_IMPORTED_MODULE_0__["ScheduleComponent"] },
    { path: ':page', component: _schedule_component__WEBPACK_IMPORTED_MODULE_0__["ScheduleComponent"] },
    { path: ':page/:id', component: _schedule_component__WEBPACK_IMPORTED_MODULE_0__["ScheduleComponent"] },
    { path: '**', redirectTo: '' }
];


/***/ }),

/***/ "fxfZ":
/*!******************************************************************************!*\
  !*** ./src/app/schedule/view-event/event-details/event-details.component.ts ***!
  \******************************************************************************/
/*! exports provided: EventDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailsComponent", function() { return EventDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _user_interfaces_bookings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/bookings */ "05Mk");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/events */ "eZII");
/* harmony import */ var _user_interfaces_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @user-interfaces/users */ "mjT4");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs */ "BQ33");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _event_view_event_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../event-view/event-view.component */ "XTcU");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");














const _c0 = function () { return { type: "icon", class: "material-icons", content: "delete_forever" }; };
function EventDetailsComponent_div_0_div_4_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventDetailsComponent_div_0_div_4_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r3.cancelBooking(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return { type: "icon", class: "material-icons", content: "edit" }; };
const _c2 = function () { return { type: "icon", class: "material-icons", content: "control_point_duplicate" }; };
function EventDetailsComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventDetailsComponent_div_0_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.edit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EventDetailsComponent_div_0_div_4_button_3_Template, 2, 2, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventDetailsComponent_div_0_div_4_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.duplicate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.can_cancel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c2));
} }
function EventDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EventDetailsComponent_div_0_div_4_Template, 6, 5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "schedule-event-view", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.item.title || "No Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.can_edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", ctx_r0.item);
} }
class EventDetailsComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["BaseClass"] {
    constructor(_users, _router) {
        super();
        this._users = _users;
        this._router = _router;
        /** Emitter for action on the display view */
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Emitter for changes to the loading state */
        this.loading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Mapping of spaces to last checkin time */
        this.last_start = {};
    }
    /** List of spaces associated with the event */
    get spaces() {
        return this.item.resources;
    }
    /** Host of the event */
    get organiser() {
        return this.item.creator || this._users.current.name;
    }
    /** Whether the user is allowed to edit the event */
    get can_edit() {
        const organiser = this.organiser;
        const user = this._users.current;
        return this.item.creator === user.email && this.status !== 'done';
    }
    /** can the user cancel the meeting */
    get can_cancel() {
        return this.can_edit && this.status === 'future';
    }
    /** Status of the event */
    get status() {
        if (this.item) {
            const now = dayjs__WEBPACK_IMPORTED_MODULE_6__();
            const date = dayjs__WEBPACK_IMPORTED_MODULE_6__(this.item.date);
            if (now.isBefore(date.subtract(15, 'm'), 'm')) {
                return 'future';
            }
            else if (now.isBefore(date, 'm')) {
                return 'upcoming';
            }
            else if (now.isBefore(date.add(15, 'm'), 'm')) {
                return 'started';
            }
            else if (now.isBefore(date.add(this.item.duration, 'm'), 'm')) {
                return 'in_progress';
            }
        }
        return 'done';
    }
    /** Whether the user has checkin to all the spaces in the event */
    get is_checked_in() {
        return this.spaces.reduce((a, v) => a && this.item.date <= (this.last_start[v.id] || 0), true);
    }
    /** Whether the spaces can be controlled */
    get can_control() {
        return this.spaces.length > 0 && this.status !== 'future' && this.status !== 'done';
    }
    /** Whether the user is able to checkin to the event */
    get can_checkin() {
        return this.spaces.length > 0 && (this.status === 'upcoming' || this.status === 'started');
    }
    /**
     * Enter edit mode for the booking
     */
    edit() {
        this.event.emit({ type: 'edit' });
    }
    /**
     * Checkin the current booking
     */
    checkin() {
        this.checked_in = !this.checked_in;
    }
    /**
     * Store the booking data and navigate to the booking form
     */
    duplicate() {
        if (localStorage) {
            const booking = new _user_interfaces_bookings__WEBPACK_IMPORTED_MODULE_2__["Booking"](Object.assign(Object.assign({}, this.item), { id: '' }));
            localStorage.setItem('STAFF.booking_form', JSON.stringify(booking));
        }
        this._router.navigate(['/book']);
    }
    /**
     * Cancel the booking
     */
    cancelBooking() {
        this.event.emit({ type: 'cancel_booking' });
    }
}
EventDetailsComponent.ɵfac = function EventDetailsComponent_Factory(t) { return new (t || EventDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_users__WEBPACK_IMPORTED_MODULE_5__["StaffService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
EventDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventDetailsComponent, selectors: [["schedule-event-details"]], inputs: { item: "item" }, outputs: { event: "event", loading: "loading" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "event-details", 4, "ngIf"], [1, "event-details"], [1, "header"], [1, "title"], ["class", "icons", 4, "ngIf"], [1, "event"], [3, "event"], [1, "icons"], ["mat-fab", "", "color", "primary", 3, "click"], ["name", "edit", 3, "icon"], ["mat-fab", "", "color", "primary", 3, "click", 4, "ngIf"], ["name", "duplicate", 3, "icon"], ["name", "cancel", 3, "icon"]], template: function EventDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EventDetailsComponent_div_0_Template, 7, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _event_view_event_view_component__WEBPACK_IMPORTED_MODULE_8__["EventViewComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__["IconComponent"]], styles: ["@keyframes wait {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.header[_ngcontent-%COMP%] {\n  padding: 1em 0;\n  width: 100%;\n}\n.header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  font-size: 1.1em;\n  font-weight: 600;\n  margin-bottom: 0.5em;\n}\n.header[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 0.5em;\n}\n.header[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n.event[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC1zdHlsZXMvdmFyaWFibGVzLnNjc3MiLCJzaGFyZWQtc3R5bGVzL21peGlucy5zY3NzIiwiYXBwcy93b3JrcGxhY2Uvc3JjL2FwcC9zY2hlZHVsZS92aWV3LWV2ZW50L2V2ZW50LWRldGFpbHMvZXZlbnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7cUJBQUE7QUFlQTs7MEJBQUE7QUF3Q0E7O2NBQUE7QUFhQTs7c0JBQUE7QUFwRUE7O3FCQUFBO0FBZUE7OzBCQUFBO0FBd0NBOztjQUFBO0FBYUE7O3NCQUFBO0FDL0NBO0VBQ0k7SUFBSyxVQUFBO0VDS1A7RURKRTtJQUFPLFVBQUE7RUNPVDtBQUNGO0FETEE7RUFDSTtJQUFLLFVBQUE7RUNRUDtFRFBFO0lBQU8sVUFBQTtFQ1VUO0FBQ0Y7QURSQTs7c0JBQUE7QUMzQkE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQXdDRjtBQXZDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQXlDSjtBQXZDRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBeUNKO0FBeENJO0VBQ0UsbUJBQUE7QUEwQ047QUF4Q0k7RUFDRSxnQkFBQTtBQTBDTjtBQXJDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQXdDRiIsImZpbGUiOiJhcHBzL3dvcmtwbGFjZS9zcmMvYXBwL3NjaGVkdWxlL3ZpZXctZXZlbnQvZXZlbnQtZGV0YWlscy9ldmVudC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo9PT09PT09PT09PT09PT09PT0qXFxcbnx8IEJyYW5kaW5nIENvbG91cnMgfHxcblxcKj09PT09PT09PT09PT09PT09PSovXG5cbiRwd2Mtb3JhbmdlOiAjRDA0QTAyO1xuJHB3Yy1yb3NlOiAjRDkzOTU0O1xuJHB3Yy1yZWQ6ICNFMDMwMUU7XG4kcHdjLXllbGxvdzogI0ZGQjYwMDtcbiRwd2MtdGFuZ2VyaW5lOiAjRUI4QzAwO1xuXG4kbGlnaHQtZ3JleTogI2RkZGRkZDtcblxuJGJveFNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgjMDAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKCMwMDAsIDAuMTQpLFxuICAgIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwgMC4xMik7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjMjFhNDUzO1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYmYxZjtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZjQ0MzM2O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICNkMDRhMDI7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICNlMDMwMWU7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJnLWxpZ2h0OiAjZjBmMGYwO1xuJGJnLWRhcms6ICMyNjMyMzg7XG4kZm9vdGVyLWJhY2s6ICMyNjMyMzg7XG4kZ3JleTogIzk2OTY5NjtcblxuJGNvbG9yLXRlcm5hcnk6ICMwYTBkMmU7XG4kY29sb3ItZXh0ZXJuYWw6ICMxNTFjNmE7XG5cbi8vIFR5cGUgY29sb3JzIGZvciBib29raW5nIHN0YXR1c1xuJGludGVybmFsOiAkY29sb3ItcHJpbWFyeTtcbiRleHRlcm5hbDogJGNvbG9yLWV4dGVybmFsO1xuJGNhbmNlbGxlZDogJGdyZXk7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udC1zdGFjazogJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcblxuJGhlYWRpbmctZm9udDogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiRmb250OiAkZm9udC1zdGFjaztcblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuIiwiXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gaGlkZS10ZXh0LW92ZXJmbG93IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93KCRjb2xvcjogIzAwMCwgJGRlcHRoOiAxKSB7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDFweCAqICgkZGVwdGggLSAxKSByZ2JhKCMwMDAsIC4yKSxcbiAgICAgICAgICAgICAgICAwIDFweCAxcHggMCByZ2JhKCMwMDAsIC4xNCksXG4gICAgICAgICAgICAgICAgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLCAuMTIpO1xufVxuXG5AbWl4aW4gZmFkZS1pbigkd2FpdCkge1xuICAgIGFuaW1hdGlvbjpcbiAgICAgICAgd2FpdCAjeyR3YWl0fSxcbiAgICAgICAgZmFkZS1pbiA0MDBtcyAjeyR3YWl0fTtcbn1cblxuQGtleWZyYW1lcyB3YWl0IHtcbiAgICAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgICAxMDAlIHsgb3BhY2l0eTogMDsgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAgIDAlIHsgb3BhY2l0eTogMDsgfVxuICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AaW1wb3J0ICdtaXhpbnMnO1xuXG4uaGVhZGVyIHtcbiAgcGFkZGluZzogMWVtIDA7XG4gIHdpZHRoOiAxMDAlO1xuICAudGl0bGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gIH1cbiAgLmljb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYnV0dG9uIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMC41ZW07XG4gICAgfVxuICAgIGFwcC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgfVxuICB9XG59XG5cbi5ldmVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'schedule-event-details',
                templateUrl: './event-details.component.html',
                styleUrls: ['./event-details.component.scss'],
            }]
    }], function () { return [{ type: _user_interfaces_users__WEBPACK_IMPORTED_MODULE_5__["StaffService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "lBL1":
/*!************************************************!*\
  !*** ./src/app/schedule/schedule.component.ts ***!
  \************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _ui_overlay_menu_overlay_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/overlay-menu/overlay-menu.component */ "d4mj");
/* harmony import */ var _view_event_view_event_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-event/view-event.component */ "Puyi");
/* harmony import */ var _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event-list/event-list.component */ "ZeEs");










function ScheduleComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "schedule-view-event", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("menu", function ScheduleComponent_ng_container_1_Template_schedule_view_event_menu_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.show_menu = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ScheduleComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "schedule-event-list", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("menu", function ScheduleComponent_ng_container_2_Template_schedule_event_list_menu_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.show_menu = $event; })("eventList", function ScheduleComponent_ng_container_2_Template_schedule_event_list_eventList_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.updateEvents($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class ScheduleComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["BaseClass"] {
    constructor(_route, _settings) {
        super();
        this._route = _route;
        this._settings = _settings;
        /** Whether to show menu */
        this.show_menu = false;
    }
    ngOnInit() {
        this._settings.post('navTitle', 'My Day');
        this.subscription('route.route', this._route.paramMap.subscribe((params) => {
            if (params.has('page')) {
                this.page = params.get('page');
            }
        }));
        this.loadEvents();
    }
    /**
     * Update local event listing
     * @param event_list New list of events
     */
    updateEvents(event_list) {
        this.events = event_list;
        this.saveEvents();
    }
    /**
     * Save the current event listing
     */
    saveEvents() {
        if (localStorage) {
            localStorage.setItem('STAFF.events', JSON.stringify(this.events || []));
        }
    }
    /**
     * Load the last saved event listing
     */
    loadEvents() {
        if (localStorage) {
            const data = localStorage.getItem('STAFF.events');
            this.events = JSON.parse(data || '[]');
        }
    }
}
ScheduleComponent.ɵfac = function ScheduleComponent_Factory(t) { return new (t || ScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["SettingsService"])); };
ScheduleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScheduleComponent, selectors: [["app-schedule"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 3, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "show", "showChange"], [3, "menu"], [3, "menu", "eventList"]], template: function ScheduleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ScheduleComponent_ng_container_1_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ScheduleComponent_ng_container_2_Template, 2, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a-overlay-menu", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("showChange", function ScheduleComponent_Template_a_overlay_menu_showChange_3_listener($event) { return ctx.show_menu = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.page);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.show_menu);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchDefault"], _ui_overlay_menu_overlay_menu_component__WEBPACK_IMPORTED_MODULE_4__["OverlayMenuComponent"], _view_event_view_event_component__WEBPACK_IMPORTED_MODULE_5__["ScheduleViewEventComponent"], _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_6__["ScheduleEventListComponent"]], styles: [".shell[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #f0f0f0;\n}\n.view[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n.loading-block[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 0.9em;\n  background-color: #f0f0f0;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%23ad1457' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E\");\n  z-index: 2;\n  overflow: auto;\n  z-index: 9999;\n}\n.info-block[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1em;\n  left: 50%;\n  transform: translateX(-50%);\n  margin: 0;\n  background-color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  padding: 1em;\n  max-width: calc(100vw - 2em);\n}\nimg[_ngcontent-%COMP%] {\n  max-height: 60px;\n  max-width: 240px;\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.25em 0.5em 0.25em 1em;\n  width: 100%;\n}\n.item[_ngcontent-%COMP%]:nth-child(2n+1) {\n  background-color: rgba(0, 0, 0, 0.05);\n  border-radius: 8px;\n}\n.message[_ngcontent-%COMP%] {\n  padding-right: 0.5em;\n  width: 20em;\n  max-width: calc(100vw - 5em);\n}\n.success[_ngcontent-%COMP%] {\n  color: #21a453;\n}\n.failure[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC1zdHlsZXMvdmFyaWFibGVzLnNjc3MiLCJhcHBzL3dvcmtwbGFjZS9zcmMvYXBwL3NoZWxsLmNvbXBvbmVudC5zY3NzIiwiYXBwcy93b3JrcGxhY2Uvc3JjL2FwcC9zY2hlZHVsZS9zY2hlZHVsZS5zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7cUJBQUE7QUFlQTs7MEJBQUE7QUF3Q0E7O2NBQUE7QUFhQTs7c0JBQUE7QUNsRUE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0FDV0o7QURQQTtFQUNJLFVBQUE7QUNVSjtBRFBBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNHRCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDVUo7QURQQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0dBQUE7RUFFQSxZQUFBO0VBQ0EsNEJBQUE7QUNTSjtBRE5BO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ1NKO0FETkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7QUNTSjtBRFBJO0VBQ0kscUNBQUE7RUFDQSxrQkFBQTtBQ1NSO0FETEE7RUFDSSxvQkFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQ1FKO0FETEE7RUFDSSxjRDlDTTtBRXNEVjtBRExBO0VBQ0ksY0QxQ0k7QUVrRFI7QUZoRkE7O3FCQUFBO0FBZUE7OzBCQUFBO0FBd0NBOztjQUFBO0FBYUE7O3NCQUFBIiwiZmlsZSI6ImFwcHMvd29ya3BsYWNlL3NyYy9hcHAvc2NoZWR1bGUvc2NoZWR1bGUuc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKj09PT09PT09PT09PT09PT09PSpcXFxufHwgQnJhbmRpbmcgQ29sb3VycyB8fFxuXFwqPT09PT09PT09PT09PT09PT09Ki9cblxuJHB3Yy1vcmFuZ2U6ICNEMDRBMDI7XG4kcHdjLXJvc2U6ICNEOTM5NTQ7XG4kcHdjLXJlZDogI0UwMzAxRTtcbiRwd2MteWVsbG93OiAjRkZCNjAwO1xuJHB3Yy10YW5nZXJpbmU6ICNFQjhDMDA7XG5cbiRsaWdodC1ncmV5OiAjZGRkZGRkO1xuXG4kYm94U2hhZG93OiAwIDFweCAzcHggMCByZ2JhKCMwMDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoIzAwMCwgMC4xNCksXG4gICAgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLCAwLjEyKTtcblxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICMyMWE0NTM7XG4kc3VjY2Vzcy1saWdodDogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyazogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiRwZW5kaW5nOiAjZmZiZjFmO1xuJHBlbmRpbmctbGlnaHQ6IGxpZ2h0ZW4oJHBlbmRpbmcsIDEwKTtcbiRwZW5kaW5nLWRhcms6IGRhcmtlbigkcGVuZGluZywgMTApO1xuXG4kZXJyb3I6ICNmNDQzMzY7XG4kZXJyb3ItbGlnaHQ6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyazogZGFya2VuKCRlcnJvciwgMTApO1xuXG4kY29sb3ItcHJpbWFyeTogI2QwNGEwMjtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogI2UwMzAxZTtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmctbGlnaHQ6ICNmMGYwZjA7XG4kYmctZGFyazogIzI2MzIzODtcbiRmb290ZXItYmFjazogIzI2MzIzODtcbiRncmV5OiAjOTY5Njk2O1xuXG4kY29sb3ItdGVybmFyeTogIzBhMGQyZTtcbiRjb2xvci1leHRlcm5hbDogIzE1MWM2YTtcblxuLy8gVHlwZSBjb2xvcnMgZm9yIGJvb2tpbmcgc3RhdHVzXG4kaW50ZXJuYWw6ICRjb2xvci1wcmltYXJ5O1xuJGV4dGVybmFsOiAkY29sb3ItZXh0ZXJuYWw7XG4kY2FuY2VsbGVkOiAkZ3JleTtcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250LXN0YWNrOiAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuXG4kaGVhZGluZy1mb250OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuJGZvbnQ6ICRmb250LXN0YWNrO1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNnB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG4uc2hlbGwge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgdmlld0JveD0nMCAwIDY0IDY0JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNOCAxNmM0LjQxOCAwIDgtMy41ODIgOC04cy0zLjU4Mi04LTgtOC04IDMuNTgyLTggOCAzLjU4MiA4IDggOHptMC0yYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0zMy40MTQtNmw1Ljk1LTUuOTVMNDUuOTUuNjM2IDQwIDYuNTg2IDM0LjA1LjYzNiAzMi42MzYgMi4wNSAzOC41ODYgOGwtNS45NSA1Ljk1IDEuNDE0IDEuNDE0TDQwIDkuNDE0bDUuOTUgNS45NSAxLjQxNC0xLjQxNEw0MS40MTQgOHpNNDAgNDhjNC40MTggMCA4LTMuNTgyIDgtOHMtMy41ODItOC04LTgtOCAzLjU4Mi04IDggMy41ODIgOCA4IDh6bTAtMmMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnpNOS40MTQgNDBsNS45NS01Ljk1LTEuNDE0LTEuNDE0TDggMzguNTg2bC01Ljk1LTUuOTVMLjYzNiAzNC4wNSA2LjU4NiA0MGwtNS45NSA1Ljk1IDEuNDE0IDEuNDE0TDggNDEuNDE0bDUuOTUgNS45NSAxLjQxNC0xLjQxNEw5LjQxNCA0MHonIGZpbGw9JyUyM2FkMTQ1NycgZmlsbC1vcGFjaXR5PScwLjInIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVwiKTtcbn1cblxuLnZpZXcge1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5sb2FkaW5nLWJsb2NrIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgdmlld0JveD0nMCAwIDY0IDY0JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNOCAxNmM0LjQxOCAwIDgtMy41ODIgOC04cy0zLjU4Mi04LTgtOC04IDMuNTgyLTggOCAzLjU4MiA4IDggOHptMC0yYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0zMy40MTQtNmw1Ljk1LTUuOTVMNDUuOTUuNjM2IDQwIDYuNTg2IDM0LjA1LjYzNiAzMi42MzYgMi4wNSAzOC41ODYgOGwtNS45NSA1Ljk1IDEuNDE0IDEuNDE0TDQwIDkuNDE0bDUuOTUgNS45NSAxLjQxNC0xLjQxNEw0MS40MTQgOHpNNDAgNDhjNC40MTggMCA4LTMuNTgyIDgtOHMtMy41ODItOC04LTgtOCAzLjU4Mi04IDggMy41ODIgOCA4IDh6bTAtMmMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnpNOS40MTQgNDBsNS45NS01Ljk1LTEuNDE0LTEuNDE0TDggMzguNTg2bC01Ljk1LTUuOTVMLjYzNiAzNC4wNSA2LjU4NiA0MGwtNS45NSA1Ljk1IDEuNDE0IDEuNDE0TDggNDEuNDE0bDUuOTUgNS45NSAxLjQxNC0xLjQxNEw5LjQxNCA0MHonIGZpbGw9JyUyM2FkMTQ1NycgZmlsbC1vcGFjaXR5PScwLjInIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgICB6LWluZGV4OiAyO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHotaW5kZXg6IDk5OTk7XG59XG5cbi5pbmZvLWJsb2NrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxZW07XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgjMDAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKCMwMDAsIDAuMTQpLFxuICAgICAgICAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsIDAuMTIpO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAyZW0pO1xufVxuXG5pbWcge1xuICAgIG1heC1oZWlnaHQ6IDYwcHg7XG4gICAgbWF4LXdpZHRoOiAyNDBweDtcbn1cblxuLml0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMC41ZW0gMC4yNWVtIDFlbTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgICY6bnRoLWNoaWxkKDJuICsgMSkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMwMDAsIDAuMDUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgfVxufVxuXG4ubWVzc2FnZSB7XG4gICAgcGFkZGluZy1yaWdodDogMC41ZW07XG4gICAgd2lkdGg6IDIwZW07XG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gNWVtKTtcbn1cblxuLnN1Y2Nlc3Mge1xuICAgIGNvbG9yOiAkc3VjY2Vzcztcbn1cblxuLmZhaWx1cmUge1xuICAgIGNvbG9yOiAkZXJyb3I7XG59XG5cbiIsIi8qPT09PT09PT09PT09PT09PT09KlxcXG58fCBCcmFuZGluZyBDb2xvdXJzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLnNoZWxsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG59XG5cbi52aWV3IHtcbiAgei1pbmRleDogMTtcbn1cblxuLmxvYWRpbmctYmxvY2sge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nNjQnIGhlaWdodD0nNjQnIHZpZXdCb3g9JzAgMCA2NCA2NCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTggMTZjNC40MTggMCA4LTMuNTgyIDgtOHMtMy41ODItOC04LTgtOCAzLjU4Mi04IDggMy41ODIgOCA4IDh6bTAtMmMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMzMuNDE0LTZsNS45NS01Ljk1TDQ1Ljk1LjYzNiA0MCA2LjU4NiAzNC4wNS42MzYgMzIuNjM2IDIuMDUgMzguNTg2IDhsLTUuOTUgNS45NSAxLjQxNCAxLjQxNEw0MCA5LjQxNGw1Ljk1IDUuOTUgMS40MTQtMS40MTRMNDEuNDE0IDh6TTQwIDQ4YzQuNDE4IDAgOC0zLjU4MiA4LThzLTMuNTgyLTgtOC04LTggMy41ODItOCA4IDMuNTgyIDggOCA4em0wLTJjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6TTkuNDE0IDQwbDUuOTUtNS45NS0xLjQxNC0xLjQxNEw4IDM4LjU4NmwtNS45NS01Ljk1TC42MzYgMzQuMDUgNi41ODYgNDBsLTUuOTUgNS45NSAxLjQxNCAxLjQxNEw4IDQxLjQxNGw1Ljk1IDUuOTUgMS40MTQtMS40MTRMOS40MTQgNDB6JyBmaWxsPSclMjNhZDE0NTcnIGZpbGwtb3BhY2l0eT0nMC4yJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcIik7XG4gIHotaW5kZXg6IDI7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4uaW5mby1ibG9jayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxZW07XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBwYWRkaW5nOiAxZW07XG4gIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDJlbSk7XG59XG5cbmltZyB7XG4gIG1heC1oZWlnaHQ6IDYwcHg7XG4gIG1heC13aWR0aDogMjQwcHg7XG59XG5cbi5pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC4yNWVtIDAuNWVtIDAuMjVlbSAxZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuLml0ZW06bnRoLWNoaWxkKDJuKzEpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4ubWVzc2FnZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDAuNWVtO1xuICB3aWR0aDogMjBlbTtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gNWVtKTtcbn1cblxuLnN1Y2Nlc3Mge1xuICBjb2xvcjogIzIxYTQ1Mztcbn1cblxuLmZhaWx1cmUge1xuICBjb2xvcjogI2Y0NDMzNjtcbn1cblxuLyo9PT09PT09PT09PT09PT09PT0qXFxcbnx8IEJyYW5kaW5nIENvbG91cnMgfHxcblxcKj09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScheduleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-schedule',
                templateUrl: './schedule.template.html',
                styleUrls: ['./schedule.styles.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=schedule-schedule-module.js.map