(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "05Mk":
/*!************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/index.ts ***!
  \************************************************************************************/
/*! exports provided: Booking, BOOKING_MUTABLE_FIELDS, setMockBookingStartDatetime, generateMockBooking, getFreeBookingSlots, getNextFreeBookingSlot, storeBookingFormData, retrieveBookingFormData, clearBookingFormData, storeDeskBookingFormData, retrieveDeskBookingFormData, clearDeskBookingFormData, filterSpacesRules, rulesForSpace, getMinLength, durationGreaterThanOrEqual, stringToMinutes, statusFromBookings, SharedBookingsModule, BookingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_bookings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/bookings */ "RB0m");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Booking", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["Booking"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BOOKING_MUTABLE_FIELDS", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["BOOKING_MUTABLE_FIELDS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setMockBookingStartDatetime", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["setMockBookingStartDatetime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateMockBooking", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["generateMockBooking"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFreeBookingSlots", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["getFreeBookingSlots"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNextFreeBookingSlot", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["getNextFreeBookingSlot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "storeBookingFormData", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["storeBookingFormData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "retrieveBookingFormData", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["retrieveBookingFormData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearBookingFormData", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["clearBookingFormData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "storeDeskBookingFormData", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["storeDeskBookingFormData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "retrieveDeskBookingFormData", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["retrieveDeskBookingFormData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearDeskBookingFormData", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["clearDeskBookingFormData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterSpacesRules", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["filterSpacesRules"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rulesForSpace", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["rulesForSpace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMinLength", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["getMinLength"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "durationGreaterThanOrEqual", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["durationGreaterThanOrEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringToMinutes", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["stringToMinutes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "statusFromBookings", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["statusFromBookings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedBookingsModule", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["SharedBookingsModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BookingsService", function() { return _lib_bookings__WEBPACK_IMPORTED_MODULE_0__["BookingsService"]; });




/***/ }),

/***/ "Eveq":
/*!************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/booking.class.ts ***!
  \************************************************************************************************/
/*! exports provided: Booking */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Booking", function() { return Booking; });
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "BQ33");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);


/** General purpose booking class */
class Booking extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_0__["BaseDataClass"] {
    constructor(data = {}) {
        super(data);
        this.asset_id = data.asset_id;
        this.zones = data.zones;
        this.booking_type = data.booking_type;
        this.type = data.type || 'booking';
        const time = data.booking_start * 1000 || data.date;
        const start = time
            ? dayjs__WEBPACK_IMPORTED_MODULE_1__(time).valueOf()
            : dayjs__WEBPACK_IMPORTED_MODULE_1__()
                .minute(Math.ceil(dayjs__WEBPACK_IMPORTED_MODULE_1__().minute() / 5) * 5)
                .startOf('m')
                .valueOf();
        this.date = start;
        this.duration = data.duration || dayjs__WEBPACK_IMPORTED_MODULE_1__(data.booking_end * 1000).diff(start, 'm') || 60;
        this.timezone = data.timezone;
        this.user_email = data.user_email;
        this.user_id = data.user_id;
        this.user_name = data.user_name;
        this.title = data.title || 'Desk booking';
        this.description = data.description;
        this.checked_in = data.checked_in;
        this.rejected = !!data.rejected;
        this.approved = !!data.approved;
        this.approver_id = data.approver_id;
        this.approver_email = data.approver_email;
        this.approver_name = data.approver_name;
        this.extension_data = data.extension_data;
        this.all_day = data.all_day || true;
        this.status = this.rejected ? 'declined' : this.approved ? 'approved' : 'tentative';
    }
    toJSON() {
        const data = super.toJSON();
        data.booking_start = dayjs__WEBPACK_IMPORTED_MODULE_1__(this.date).unix();
        if (this.all_day) {
            data.booking_end = dayjs__WEBPACK_IMPORTED_MODULE_1__(this.date).endOf('d').unix();
        }
        else {
            data.booking_end = dayjs__WEBPACK_IMPORTED_MODULE_1__(this.date).add(this.duration, 'm').unix();
        }
        if (!data.timezone) {
            data.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        }
        if (!this.id) {
            delete data.id;
        }
        delete data.date;
        delete data.duration;
        delete data.email;
        delete data.name;
        return data;
    }
    get location() {
        return this.description;
    }
    get is_today() {
        return dayjs__WEBPACK_IMPORTED_MODULE_1__(this.date).isSame(dayjs__WEBPACK_IMPORTED_MODULE_1__(), 'd');
    }
    /** Whether booking is done */
    get is_done() {
        const start = dayjs__WEBPACK_IMPORTED_MODULE_1__(this.date);
        const end = this.all_day ? dayjs__WEBPACK_IMPORTED_MODULE_1__(this.date).endOf('d') : start.add(this.duration, 'm');
        return start.isAfter(end, 'm');
    }
}


/***/ }),

/***/ "KnVQ":
/*!**************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/bookings.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: SharedBookingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedBookingsModule", function() { return SharedBookingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


class SharedBookingsModule {
}
SharedBookingsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedBookingsModule });
SharedBookingsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedBookingsModule_Factory(t) { return new (t || SharedBookingsModule)(); }, providers: [], imports: [[]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedBookingsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [],
                providers: [],
                exports: []
            }]
    }], null, null); })();


/***/ }),

/***/ "Pp7a":
/*!*****************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/booking.interfaces.ts ***!
  \*****************************************************************************************************/
/*! exports provided: BOOKING_MUTABLE_FIELDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOKING_MUTABLE_FIELDS", function() { return BOOKING_MUTABLE_FIELDS; });
const BOOKING_MUTABLE_FIELDS = [
    'name',
    'email',
    'title',
    'date',
    'duration',
    'organiser',
    'body',
    'type',
    'has_catering',
    'recurrence',
    'space_list',
    'attendees',
    'configuration',
];


/***/ }),

/***/ "RB0m":
/*!*******************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/bookings.ts ***!
  \*******************************************************************************************/
/*! exports provided: Booking, BOOKING_MUTABLE_FIELDS, setMockBookingStartDatetime, generateMockBooking, getFreeBookingSlots, getNextFreeBookingSlot, storeBookingFormData, retrieveBookingFormData, clearBookingFormData, storeDeskBookingFormData, retrieveDeskBookingFormData, clearDeskBookingFormData, filterSpacesRules, rulesForSpace, getMinLength, durationGreaterThanOrEqual, stringToMinutes, statusFromBookings, SharedBookingsModule, BookingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _booking_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking.class */ "Eveq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Booking", function() { return _booking_class__WEBPACK_IMPORTED_MODULE_0__["Booking"]; });

/* harmony import */ var _booking_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booking.interfaces */ "Pp7a");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BOOKING_MUTABLE_FIELDS", function() { return _booking_interfaces__WEBPACK_IMPORTED_MODULE_1__["BOOKING_MUTABLE_FIELDS"]; });

/* harmony import */ var _booking_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking.utilities */ "c1e6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setMockBookingStartDatetime", function() { return _booking_utilities__WEBPACK_IMPORTED_MODULE_2__["setMockBookingStartDatetime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateMockBooking", function() { return _booking_utilities__WEBPACK_IMPORTED_MODULE_2__["generateMockBooking"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFreeBookingSlots", function() { return _booking_utilities__WEBPACK_IMPORTED_MODULE_2__["getFreeBookingSlots"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNextFreeBookingSlot", function() { return _booking_utilities__WEBPACK_IMPORTED_MODULE_2__["getNextFreeBookingSlot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "storeBookingFormData", function() { return _booking_utilities__WEBPACK_IMPORTED_MODULE_2__["storeBookingFormData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "retrieveBookingFormData", function() { return _booking_utilities__WEBPACK_IMPORTED_MODULE_2__["retrieveBookingFormData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearBookingFormData", function() { return _booking_utilities__WEBPACK_IMPORTED_MODULE_2__["clearBookingFormData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "storeDeskBookingFormData", function() { return _booking_utilities__WEBPACK_IMPORTED_MODULE_2__["storeDeskBookingFormData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "retrieveDeskBookingFormData", function() { return _booking_utilities__WEBPACK_IMPORTED_MODULE_2__["retrieveDeskBookingFormData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearDeskBookingFormData", function() { return _booking_utilities__WEBPACK_IMPORTED_MODULE_2__["clearDeskBookingFormData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterSpacesRules", function() { return _booking_utilities__WEBPACK_IMPORTED_MODULE_2__["filterSpacesRules"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rulesForSpace", function() { return _booking_utilities__WEBPACK_IMPORTED_MODULE_2__["rulesForSpace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMinLength", function() { return _booking_utilities__WEBPACK_IMPORTED_MODULE_2__["getMinLength"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "durationGreaterThanOrEqual", function() { return _booking_utilities__WEBPACK_IMPORTED_MODULE_2__["durationGreaterThanOrEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringToMinutes", function() { return _booking_utilities__WEBPACK_IMPORTED_MODULE_2__["stringToMinutes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "statusFromBookings", function() { return _booking_utilities__WEBPACK_IMPORTED_MODULE_2__["statusFromBookings"]; });

/* harmony import */ var _bookings_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookings.module */ "KnVQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedBookingsModule", function() { return _bookings_module__WEBPACK_IMPORTED_MODULE_3__["SharedBookingsModule"]; });

/* harmony import */ var _bookings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bookings.service */ "czta");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BookingsService", function() { return _bookings_service__WEBPACK_IMPORTED_MODULE_4__["BookingsService"]; });








/***/ }),

/***/ "czta":
/*!***************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/bookings.service.ts ***!
  \***************************************************************************************************/
/*! exports provided: BookingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsService", function() { return BookingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _booking_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking.class */ "Eveq");




class BookingsService extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["BaseAPIService"] {
    constructor() {
        super();
        this._name = 'Bookings';
        this._api_route = 'bookings';
    }
    checkIn(booking, state = true) {
        return this.task(booking.id, 'check_in', {}, 'post', { state });
    }
    approve(id, fields) {
        return this.task(id, 'approve', fields);
    }
    reject(id, fields) {
        return this.task(id, 'reject', fields);
    }
    process(raw_data) {
        return new _booking_class__WEBPACK_IMPORTED_MODULE_2__["Booking"](raw_data);
    }
}
BookingsService.ɵfac = function BookingsService_Factory(t) { return new (t || BookingsService)(); };
BookingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BookingsService, factory: BookingsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookingsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map