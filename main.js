(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+OeS":
/*!*************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/organisation/src/lib/organisation.utilities.ts ***!
  \*************************************************************************************************************/
/*! exports provided: generateMockOrganisation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateMockOrganisation", function() { return generateMockOrganisation; });
/* harmony import */ var _building_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./building.utilities */ "hcVY");

let ORG_COUNT = 0;
function generateMockOrganisation() {
    return {
        id: `zone_org-${ORG_COUNT++}`,
        name: `Organisation ${ORG_COUNT}`,
        buildings: Array(3).fill(0).map(i => Object(_building_utilities__WEBPACK_IMPORTED_MODULE_0__["generateMockBuilding"])()),
        settings: {
            test: {
                nested: {
                    org: true
                }
            }
        }
    };
}


/***/ }),

/***/ "/dba":
/*!***********************************************!*\
  !*** ./src/app/ui/topbar-header.component.ts ***!
  \***********************************************/
/*! exports provided: TopbarHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarHeaderComponent", function() { return TopbarHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "BQ33");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "sEIs");






const _c0 = function () { return ["/home"]; };
class TopbarHeaderComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["BaseClass"] {
    get time() {
        return dayjs__WEBPACK_IMPORTED_MODULE_2__().format('dddd h:mmA');
    }
}
TopbarHeaderComponent.ɵfac = function TopbarHeaderComponent_Factory(t) { return ɵTopbarHeaderComponent_BaseFactory(t || TopbarHeaderComponent); };
TopbarHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopbarHeaderComponent, selectors: [["a-topbar-header"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 3, consts: [[1, "flex", "items-center", "bg-gray-900", "shadow"], ["mat-button", "", 1, "h-full", "flex", "flex-col", "justify-center", "bg-black", "px-4", 3, "routerLink"], ["src", "assets/logo-dark.svg", 1, "h-10", "my-2"], [1, "ml-auto", "h-full", "flex", "flex-col", "justify-center", "text-white", "px-4"]], template: function TopbarHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.time, " ");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n                height: 3.5rem;\n            }\n\n            a[_ngcontent-%COMP%] {\n                border-radius: 0;\n            }\n\n            img[_ngcontent-%COMP%] {\n                max-height: 2.5rem;\n                max-width: 50vw;\n            }"] });
const ɵTopbarHeaderComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TopbarHeaderComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopbarHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-topbar-header',
                template: `
        <div class="flex items-center bg-gray-900 shadow">
            <a
                mat-button
                [routerLink]="['/home']"
                class="h-full flex flex-col justify-center bg-black px-4"
            >
                <img class="h-10 my-2" src="assets/logo-dark.svg" />
            </a>
            <div
                class="ml-auto h-full flex flex-col justify-center text-white px-4"
            >
                {{ time }}
            </div>
        </div>
    `,
                styles: [
                    `
            :host > div {
                height: 3.5rem;
            }

            a {
                border-radius: 0;
            }

            img {
                max-height: 2.5rem;
                max-width: 50vw;
            }
        `,
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/user-interfaces/user-interfaces/apps/visitor-kiosk/src/main.ts */"zUnb");


/***/ }),

/***/ "0Dh+":
/*!**********************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/spaces/src/lib/spaces.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: SharedSpacesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedSpacesModule", function() { return SharedSpacesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _user_interfaces_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interfaces/components */ "Rc+I");
/* harmony import */ var _space_select_modal_item_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./space-select-modal/item/item.component */ "7ow8");
/* harmony import */ var _space_select_modal_space_select_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./space-select-modal/space-select-modal.component */ "a1dc");
/* harmony import */ var _components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/src/lib/icon/icon.component */ "ukpX");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "mFH5");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "csyo");















const COMPONENTS = [
    _space_select_modal_space_select_modal_component__WEBPACK_IMPORTED_MODULE_5__["SpaceSelectModalComponent"],
    _space_select_modal_item_item_component__WEBPACK_IMPORTED_MODULE_4__["SpaceSelectItemComponent"],
];
class SharedSpacesModule {
}
SharedSpacesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedSpacesModule });
SharedSpacesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedSpacesModule_Factory(t) { return new (t || SharedSpacesModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _user_interfaces_components__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedSpacesModule, { declarations: [_space_select_modal_space_select_modal_component__WEBPACK_IMPORTED_MODULE_5__["SpaceSelectModalComponent"],
        _space_select_modal_item_item_component__WEBPACK_IMPORTED_MODULE_4__["SpaceSelectItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
        _user_interfaces_components__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"]], exports: [_space_select_modal_space_select_modal_component__WEBPACK_IMPORTED_MODULE_5__["SpaceSelectModalComponent"],
        _space_select_modal_item_item_component__WEBPACK_IMPORTED_MODULE_4__["SpaceSelectItemComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedSpacesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [...COMPONENTS],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                    _user_interfaces_components__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"]
                ],
                providers: [],
                exports: [...COMPONENTS]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_space_select_modal_space_select_modal_component__WEBPACK_IMPORTED_MODULE_5__["SpaceSelectModalComponent"], [_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _space_select_modal_item_item_component__WEBPACK_IMPORTED_MODULE_4__["SpaceSelectItemComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatSpinner"]], []);
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_space_select_modal_item_item_component__WEBPACK_IMPORTED_MODULE_4__["SpaceSelectItemComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], []);


/***/ }),

/***/ "1ol4":
/*!*********************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/common/src/lib/base.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: BaseAPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseAPIService", function() { return BaseAPIService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ "/It1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _base_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.class */ "U6W6");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api */ "SQ91");







class BaseAPIService extends _base_class__WEBPACK_IMPORTED_MODULE_4__["BaseClass"] {
    constructor() {
        super();
        /** Map of state variables for Service */
        this._subjects = {};
        /** Map of observables for state variables */
        this._observers = {};
        /** Map of poll subscribers for API endpoints */
        this._subscribers = {};
        /** Map of promises for Service */
        this._promises = {};
        /** Comparison function for service items */
        this._compare = (a, b) => a === b || a.id === b.id;
        /** Default filter function for list method */
        this._list_filter = (a) => !!a;
        this._name = 'Base';
        this._api_route = 'base';
        this._api_url = '/api/engine/v2';
        this.set('list', []);
    }
    /**
     * Initailise service
     */
    init() {
        this.load().then((_) => this._initialised.next(true), (err) => {
            this.timeout('init', () => this.init(), 1000);
        });
    }
    /**
     * Get API route for the service
     * @param engine Whether endpoint is using the application API or engine API
     */
    route() {
        return `/api/staff/v1/${this._api_route}`;
    }
    /** API Route of the service */
    get api_route() {
        return this._api_route;
    }
    /**
     * Get the current value of the named property
     * @param name Property name
     */
    get(name) {
        if (!this._observers[name]) {
            this.set(name, null);
        }
        return this._subjects[name].getValue();
    }
    /**
     * Listen to value change of the named property
     * @param name Property name
     * @param next Callback for value changes
     */
    listen(name) {
        if (!this._observers[name]) {
            this.set(name, null);
        }
        return this._observers[name];
    }
    /**
     * Update the value of the named property
     * @param name Property name
     * @param value New value
     */
    set(name, value) {
        if (!this._subjects[name]) {
            this._subjects[name] = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](value);
            this._observers[name] = this._subjects[name].asObservable();
        }
        else {
            this._subjects[name].next(value);
        }
    }
    /**
     * Get list of loaded items
     * @param filterFn Function for filtering the list
     */
    list(filterFn = this._list_filter) {
        const list = this.get('list') || [];
        return list.reduce((a, i) => {
            if (filterFn(i)) {
                a.push(i);
            }
            return a;
        }, []);
    }
    /**
     * Get item with the given id from the loaded items
     * @param id ID of the item
     */
    item(id) {
        const list = this.get('list') || [];
        return list.find((i) => i.id === id || i.email === id);
    }
    /**
     * Query the index of the API route associated with this service
     * @param query_params Map of query paramaters to add to the request URL
     */
    query(query_params = { update_list: true }) {
        let cache = 1000;
        let subroute = '';
        if (query_params) {
            cache = query_params.cache || 1000;
            delete query_params.cache;
            subroute = query_params.subroute;
            delete query_params.subroute;
        }
        const query = Object(_api__WEBPACK_IMPORTED_MODULE_5__["toQueryString"])(query_params);
        const key = `query|${query}`;
        if (!this._promises[key]) {
            this._promises[key] = new Promise((resolve, reject) => {
                const url = `${this.route()}${subroute ? '/' + subroute : ''}${query ? '?' + query : ''}`;
                let result = [];
                Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["get"])(url).subscribe((d) => {
                    result =
                        d && d instanceof Array
                            ? d.map((i) => this.process(i))
                            : d && !(d instanceof Array) && d.results
                                ? d.results
                                : [];
                }, (e) => {
                    reject(e);
                    this._promises[key] = null;
                }, () => {
                    resolve(result);
                    this.timeout(key, () => (this._promises[key] = null), cache);
                });
            });
        }
        return this._promises[key];
    }
    /**
     * Query the API route for a specific item
     * @param id ID of the item
     * @param query_params Map of query paramaters to add to the request URL
     */
    show(id, query_params = {}) {
        const query = Object(_api__WEBPACK_IMPORTED_MODULE_5__["toQueryString"])(query_params);
        const key = `show|${id}|${query}`;
        if (!this._promises[key]) {
            this._promises[key] = new Promise((resolve, reject) => {
                const url = `${this.route()}/${id}${query ? '?' + query : ''}`;
                let result = null;
                Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["get"])(url).subscribe((d) => (result = this.process(d)), (e) => {
                    reject(e);
                    this._promises[key] = null;
                }, () => {
                    resolve(result);
                    this.timeout(key, () => (this._promises[key] = null), 1000);
                });
            });
        }
        return this._promises[key];
    }
    /**
     * Make post request for a new item to the service
     * @param form_data Data to post to the server
     * @param query_params Map of query paramaters to add to the request URL
     */
    add(form_data, query_params = {}) {
        if (!this._promises.new_item) {
            this._promises.new_item = new Promise((resolve, reject) => {
                const query = Object(_api__WEBPACK_IMPORTED_MODULE_5__["toQueryString"])(query_params);
                const url = `${this.route()}${query ? '?' + query : ''}`;
                let result = null;
                Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["post"])(url, form_data).subscribe((d) => (result = this.process(d)), (e) => {
                    reject(e);
                    this._promises.new_item = null;
                }, () => {
                    resolve(result);
                    this._promises.new_item = null;
                });
            });
        }
        return this._promises.new_item;
    }
    /**
     * Save changes to item. Create a new item if it doesn't exist
     * @param data Updated state of the item
     * @param q Query parameters to pass to request
     */
    save(data, q = {}) {
        return data.id ? this.update(data.id, data, q) : this.add(data, q);
    }
    /**
     * Perform API task for the given item ID
     * @param id ID of the item
     * @param task_name Name of the task
     * @param form_data Map of data to pass to the API
     * @param method Verb to use for request
     * @param query_params Query Params
     */
    task(id, task_name, form_data = {}, method = 'post', query_params = {}) {
        const query = Object(_api__WEBPACK_IMPORTED_MODULE_5__["toQueryString"])(form_data);
        const _query = Object(_api__WEBPACK_IMPORTED_MODULE_5__["toQueryString"])(query_params);
        const key = `task|${id}|${task_name}|${query}`;
        /* istanbul ignore else */
        if (!this._promises[key]) {
            this._promises[key] = new Promise((resolve, reject) => {
                const post_data = Object.assign(Object.assign({}, form_data), { id, _task: task_name });
                const url = `${this.route()}/${id}/${task_name}${_query ? '?' + _query : ''}`;
                let result;
                const request = method === 'post'
                    ? Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["post"])(url, post_data)
                    : Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["get"])(`${url}${query ? '?' + query : ''}`);
                request.subscribe((d) => (result = d), (e) => {
                    reject(e);
                    delete this._promises[key];
                }, () => {
                    resolve(result);
                    this.timeout(key, () => delete this._promises[key], 1000);
                });
            });
        }
        return this._promises[key];
    }
    /**
     * Make put request for changes to the item with the given id
     * @param id ID of the item being updated
     * @param form_data New values for the item
     * @param query_params Map of query paramaters to add to the request URL
     */
    update(id, form_data, query_params = {}, method = 'put') {
        const key = `update|${id}`;
        if (!this._promises[key]) {
            this._promises[key] = new Promise((resolve, reject) => {
                const query = Object(_api__WEBPACK_IMPORTED_MODULE_5__["toQueryString"])(query_params);
                const url = `${this.route()}/${id}${query ? '?' + query : ''}`;
                let result = null;
                (method === 'patch' ? _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["patch"] : _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["put"])(url, form_data).subscribe((d) => (result = this.process(d)), (e) => {
                    reject(e);
                    this._promises[key] = null;
                }, () => {
                    resolve(result);
                    this._promises[key] = null;
                });
            });
        }
        return this._promises[key];
    }
    /**
     * Make patch request for changes to the item with the given id
     * @param id ID of the item being patched
     * @param form_data New values for the item
     * @param query_params Map of query paramaters to add to the request URL
     */
    patch(id, form_data, query_params = {}) {
        const key = `patch|${id}`;
        if (!this._promises[key]) {
            this._promises[key] = new Promise((resolve, reject) => {
                const query = Object(_api__WEBPACK_IMPORTED_MODULE_5__["toQueryString"])(query_params);
                const url = `${this.route()}/${id}${query ? '?' + query : ''}`;
                let result = null;
                Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["patch"])(url, form_data).subscribe((d) => (result = this.process(d)), (e) => {
                    reject(e);
                    this._promises[key] = null;
                }, () => {
                    resolve(result);
                    this._promises[key] = null;
                });
            });
        }
        return this._promises[key];
    }
    /**
     * Make delete request for the given item
     * @param id ID of item
     */
    delete(id, query_params = {}) {
        const key = `delete|${id}`;
        const query = Object(_api__WEBPACK_IMPORTED_MODULE_5__["toQueryString"])(query_params);
        if (!this._promises[key]) {
            this._promises[key] = new Promise((resolve, reject) => {
                const url = `${this.route()}/${id}${query ? '?' + query : ''}`;
                Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["del"])(url).subscribe((_) => null, (e) => reject(e), () => {
                    resolve();
                });
            });
        }
        return this._promises[key];
    }
    /**
     * Load initial data for the service
     */
    load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { });
    }
    /**
     * Convert raw API data into a valid API Object
     * @param raw_item Raw API data
     */
    process(raw_item) {
        return raw_item;
    }
}
BaseAPIService.ɵfac = function BaseAPIService_Factory(t) { return new (t || BaseAPIService)(); };
BaseAPIService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BaseAPIService, factory: BaseAPIService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BaseAPIService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "20lr":
/*!**********************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/common/src/index.ts ***!
  \**********************************************************************************/
/*! exports provided: BaseClass, BaseAPIService, GoogleAnalyticsService, HotkeysService, SettingsService, VorlonService, VERSION, ANIMATION_SHOW_ENTER_LEAVE, ANIMATION_SHOW_CONTRACT_EXPAND, toQueryString, setupCache, BaseDataClass, formatRecurrence, setAppName, log, getItemWithKeys, unique, randomInt, csvToJson, jsonToCsv, downloadFile, parseJWT, flatten, timePeriodsIntersect, predictableRandomInt, timeFormatString, is24HourTime, setNotifyOutlet, notify, notifySuccess, notifyError, notifyWarn, notifyInfo, setupPlace, mergeRoomConfig, roomConfigBuilder, DEFAULT_SETTINGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/common */ "K1US");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseClass", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["BaseClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseAPIService", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["BaseAPIService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleAnalyticsService", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["GoogleAnalyticsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HotkeysService", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["HotkeysService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["SettingsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VorlonService", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["VorlonService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["VERSION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ANIMATION_SHOW_ENTER_LEAVE", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["ANIMATION_SHOW_ENTER_LEAVE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ANIMATION_SHOW_CONTRACT_EXPAND", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["ANIMATION_SHOW_CONTRACT_EXPAND"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toQueryString", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["toQueryString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setupCache", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["setupCache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseDataClass", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["BaseDataClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatRecurrence", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["formatRecurrence"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setAppName", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["setAppName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "log", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["log"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getItemWithKeys", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["getItemWithKeys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unique", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["unique"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "randomInt", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["randomInt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csvToJson", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["csvToJson"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jsonToCsv", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["jsonToCsv"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["downloadFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseJWT", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["parseJWT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["flatten"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timePeriodsIntersect", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["timePeriodsIntersect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "predictableRandomInt", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["predictableRandomInt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFormatString", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["timeFormatString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "is24HourTime", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["is24HourTime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setNotifyOutlet", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["setNotifyOutlet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notify", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["notify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notifySuccess", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["notifySuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notifyError", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["notifyError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notifyWarn", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["notifyWarn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notifyInfo", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["notifyInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setupPlace", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["setupPlace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeRoomConfig", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["mergeRoomConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "roomConfigBuilder", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["roomConfigBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SETTINGS", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_SETTINGS"]; });




/***/ }),

/***/ "2eSb":
/*!************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/spaces/src/lib/space.utilities.ts ***!
  \************************************************************************************************/
/*! exports provided: generateMockSpace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateMockSpace", function() { return generateMockSpace; });
/* harmony import */ var _users_src_lib_user_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../users/src/lib/user.utilities */ "HTl7");

let SPACE_COUNT = 0;
function generateMockSpace(overrides = {}) {
    const id = `space-${SPACE_COUNT++}`;
    const name = `Test Space ${SPACE_COUNT}`;
    const linked = Math.floor(Math.random() * 99999) % 2 === 0 && SPACE_COUNT > 1;
    const space = Object.assign({ id,
        name, long_name: `${name} with an long name`, map_id: `${SPACE_COUNT}`, capacity: Math.floor(Math.random() * 20 + 1) * 2, email: `${name.toLowerCase().split(' ').join('.')}@${_users_src_lib_user_utilities__WEBPACK_IMPORTED_MODULE_0__["USER_DOMAIN"]}`, type: '', searchable: Math.floor(Math.random() * 99999) % 2 === 0, controlable: Math.floor(Math.random() * 99999) % 2 === 0, bookable: Math.floor(Math.random() * 99999) % 2 === 0, cost_hour: Math.floor(Math.random() * 300) * 100, setup: Math.floor(Math.random() * 6) * 5, breakdown: Math.floor(Math.random() * 6) * 5, zones: ['zone_lvl-0'], support_url: `/control/#/${id}`, bookings: [], linked_rooms: linked ? [`space-${Math.floor(Math.random() * (SPACE_COUNT - 1))}`] : [], image: '' }, overrides);
    if (space['configurations'] && space['configurations'].length > 0) {
        space['configurations'].forEach(config => config.capacity = Math.floor(Math.random() * space.capacity) + 1);
        space['configurations'][0].capacity = space.capacity;
    }
    return space;
}


/***/ }),

/***/ "3Hra":
/*!*****************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/guards/authorised-user.guard.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: AuthorisedUserGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorisedUserGuard", function() { return AuthorisedUserGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ "/It1");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _users_src_lib_staff_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../users/src/lib/staff.service */ "Vai6");









class AuthorisedUserGuard {
    constructor(_router, _users) {
        this._router = _router;
        this._users = _users;
    }
    canActivate(next, state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["onlineState"])()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])((_) => _))
                .toPromise();
            const user = yield this._users.active_user
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])((_) => !!_))
                .toPromise();
            const can_activate = !!(user && user.groups);
            if (!can_activate) {
                this._router.navigate(['/unauthorised']);
            }
            return !!can_activate;
        });
    }
    canLoad(route, segments) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["onlineState"])()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])((_) => _))
                .toPromise();
            const user = yield this._users.active_user
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])((_) => !!_))
                .toPromise();
            const can_activate = !!(user && user.groups);
            if (!can_activate) {
                this._router.navigate(['/unauthorised']);
            }
            return !!can_activate;
        });
    }
}
AuthorisedUserGuard.ɵfac = function AuthorisedUserGuard_Factory(t) { return new (t || AuthorisedUserGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_users_src_lib_staff_service__WEBPACK_IMPORTED_MODULE_5__["StaffService"])); };
AuthorisedUserGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthorisedUserGuard, factory: AuthorisedUserGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthorisedUserGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _users_src_lib_staff_service__WEBPACK_IMPORTED_MODULE_5__["StaffService"] }]; }, null); })();


/***/ }),

/***/ "3ePk":
/*!****************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/common/src/lib/general.ts ***!
  \****************************************************************************************/
/*! exports provided: setAppName, log, getItemWithKeys, unique, randomInt, csvToJson, jsonToCsv, downloadFile, parseJWT, flatten, timePeriodsIntersect, predictableRandomInt, timeFormatString, is24HourTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAppName", function() { return setAppName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemWithKeys", function() { return getItemWithKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unique", function() { return unique; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomInt", function() { return randomInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "csvToJson", function() { return csvToJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonToCsv", function() { return jsonToCsv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return downloadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseJWT", function() { return parseJWT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timePeriodsIntersect", function() { return timePeriodsIntersect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "predictableRandomInt", function() { return predictableRandomInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeFormatString", function() { return timeFormatString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is24HourTime", function() { return is24HourTime; });
let _app_name = 'APP';
function setAppName(name) {
    _app_name = name;
}
/**
 * Log data to the browser console
 * @param type Type of message
 * @param msg Message body
 * @param args array of argments to log to the console
 * @param stream Stream to emit the console on. 'debug', 'log', 'warn' or 'error'
 * @param force Whether to force message to be emitted when debug is disabled
 */
function log(type, msg, args, stream = 'debug', force = false, app_name = _app_name) {
    if (window.debug || force) {
        const colors = ['color: #E91E63', 'color: #3F51B5', 'color: default'];
        if (args) {
            console[stream](`%c[${app_name}]%c[${type}] %c${msg}`, ...colors, args);
        }
        else {
            console[stream](`%c[${app_name}]%c[${type}] %c${msg}`, ...colors);
        }
    }
}
/**
 * Get item from the nested object
 * @param keys List of sub-keys to search for
 * @param map Object to search
 */
function getItemWithKeys(keys, map) {
    const key = keys.shift();
    if (map[key]) {
        return keys.length > 0 ? getItemWithKeys(keys, map[key]) : map[key];
    }
    return null;
}
/**
 * Remove duplicates from the given array
 * @param array List of items to remove duplicates from
 * @param key Key on array objects to compare for uniqueness
 */
function unique(array, key = '') {
    return array.filter((el, pos, arr) => arr.indexOf(key ? arr.find((i) => i[key] === el[key]) : arr.find((i) => i === el)) ===
        pos);
}
/**
 * Generate a random number
 * @param ceil Biggest value to generate not inclusive
 * @param floor Smallest value to generate. Defaults to 0
 */
function randomInt(ceil, floor = 0) {
    return Math.floor(Math.random() * (ceil - floor)) + floor;
}
/**
 * Parse raw CSV data into a JSON object
 * @param csv CSV data to parse
 */
function csvToJson(csv) {
    const lines = csv.split('\n');
    let fields = lines.splice(0, 1)[0].split(',');
    fields = fields.map((v) => v.replace('\r', ''));
    const list = [];
    for (const line of lines) {
        let parts = line.split(',');
        parts = parts.map((v) => v.replace('\r', ''));
        if (parts.length >= fields.length) {
            const item = {};
            for (let i = 0; i <= parts.length; i++) {
                let part = null;
                part = parts[i];
                if (part !== undefined) {
                    let value = part;
                    try {
                        value = JSON.parse(part);
                    }
                    catch (e) { }
                    item[(fields[i] || '').split(' ').join('_').toLowerCase()] = value;
                }
            }
            list.push(item);
        }
    }
    return list;
}
/**
 * Convert javascript array to CSV string
 * @param json Javascript array to convert
 */
function jsonToCsv(json) {
    if (json instanceof Array && json.length > 0) {
        const keys = Object.keys(json[0]);
        const valid_keys = keys.filter((key) => json[0].hasOwnProperty(key));
        return `${valid_keys.join(',')}\n${json
            .map((item) => valid_keys.map((key) => JSON.stringify(item[key])).join(','))
            .join('\n')}`;
    }
    return '';
}
/**
 * Downloads a file to the users computer with the given filename and contents
 * @param filename Name of the file to download
 * @param contents Contents of the file to download
 */
function downloadFile(filename, contents) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(contents));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
function parseJWT(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64)
        .split('')
        .map((c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    })
        .join(''));
    return JSON.parse(jsonPayload);
}
/* istanbul ignore next */
/**
 * Flatten nested array
 * @param an_array Array to flatten
 */
function flatten(an_array) {
    const stack = [...an_array];
    const res = [];
    while (stack.length) {
        // pop value from stack
        const next = stack.pop();
        if (Array.isArray(next)) {
            // push back array items, won't modify the original input
            stack.push(...next);
        }
        else {
            res.push(next);
        }
    }
    // reverse to restore input order
    return res.reverse();
}
/**
 * Check whether two time periods intersect with each other
 * @param start1 Unix epoch in ms of the first period's start time
 * @param end1 Unix epoch in ms of the first period's end time
 * @param start2 Unix epoch in ms of the second period's start time
 * @param end2 Unix epoch in ms of the second period's end time
 */
function timePeriodsIntersect(start1, end1, start2, end2) {
    return ((start1 >= start2 && start1 < end2) ||
        (end1 > start2 && end1 < end2) ||
        (start2 >= start1 && start2 < end1) ||
        (end2 > start1 && end2 <= end1));
}
const seed = xmur3('PlaceOS');
const rand = sfc32(0x9e3779b9, 0x243f6a88, 0xb7e15162, seed());
function predictableRandomInt(ceil = 100, floor = 0) {
    return Math.floor(rand() * (ceil - floor)) + floor;
}
// https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
function xmur3(str) {
    for (var i = 0, h = 1779033703 ^ str.length; i < str.length; i++)
        (h = Math.imul(h ^ str.charCodeAt(i), 3432918353)), (h = (h << 13) | (h >>> 19));
    return function () {
        h = Math.imul(h ^ (h >>> 16), 2246822507);
        h = Math.imul(h ^ (h >>> 13), 3266489909);
        return (h ^= h >>> 16) >>> 0;
    };
}
function sfc32(a, b, c, d) {
    return function () {
        a >>>= 0;
        b >>>= 0;
        c >>>= 0;
        d >>>= 0;
        var t = (a + b) | 0;
        a = b ^ (b >>> 9);
        b = (c + (c << 3)) | 0;
        c = (c << 21) | (c >>> 11);
        d = (d + 1) | 0;
        t = (t + d) | 0;
        c = (c + t) | 0;
        return (t >>> 0) / 4294967296;
    };
}
/** Get time format string for locale */
function timeFormatString() {
    return is24HourTime() ? 'HH:mm' : 'hh:mm a';
}
/** Whether locale string is displayed in 24 hour time */
function is24HourTime() {
    const date = new Date();
    const localeString = date
        .toLocaleTimeString(document.querySelector('html').getAttribute('lang') || navigator.language)
        .toLowerCase();
    return localeString.indexOf('am') < 0 && localeString.indexOf('pm') < 0;
}


/***/ }),

/***/ "4si7":
/*!*************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/users/src/lib/user-form/user-form.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "+Tre");








function UserFormComponent_div_0_div_2_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserFormComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserFormComponent_div_0_div_2_mat_error_8_Template, 2, 0, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("error", ctx_r1.form.controls.name.invalid && ctx_r1.form.controls.name.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.controls.name.invalid);
} }
function UserFormComponent_div_0_div_3_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A valid email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserFormComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserFormComponent_div_0_div_3_mat_error_8_Template, 2, 0, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("error", ctx_r2.form.controls.email.invalid && ctx_r2.form.controls.email.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.form.controls.email.invalid);
} }
function UserFormComponent_div_0_div_4_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Organisation is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserFormComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Organisation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserFormComponent_div_0_div_4_mat_error_8_Template, 2, 0, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("error", ctx_r3.form.controls.organisation.invalid && ctx_r3.form.controls.organisation.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.form.controls.organisation.invalid);
} }
function UserFormComponent_div_0_div_5_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone format is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserFormComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Phone:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserFormComponent_div_0_div_5_mat_error_5_Template, 2, 0, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("error", ctx_r4.form.controls.phone.invalid && ctx_r4.form.controls.phone.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.form.controls.phone.invalid);
} }
function UserFormComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Assistance required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserFormComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserFormComponent_div_0_div_2_Template, 9, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserFormComponent_div_0_div_3_Template, 9, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserFormComponent_div_0_div_4_Template, 9, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserFormComponent_div_0_div_5_Template, 6, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserFormComponent_div_0_div_6_Template, 3, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.organisation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.assistance_required);
} }
class UserFormComponent {
}
UserFormComponent.ɵfac = function UserFormComponent_Factory(t) { return new (t || UserFormComponent)(); };
UserFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserFormComponent, selectors: [["user-form"]], inputs: { form: "form" }, decls: 1, vars: 1, consts: [["class", "user form", 4, "ngIf"], [1, "user", "form"], [3, "formGroup"], ["class", "field", 4, "ngIf"], [1, "field"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "name", "name", "placeholder", "Name", "formControlName", "name"], [4, "ngIf"], ["for", "email"], ["matInput", "", "name", "email", "placeholder", "Email Address", "formControlName", "email"], ["for", "organisation"], ["matInput", "", "name", "organisation", "placeholder", "Organisation", "formControlName", "organisation"], ["for", "phone"], ["matInput", "", "name", "phone", "placeholder", "Phone", "formControlName", "phone"], ["color", "primary", "formControlName", "assistance_required"]], template: function UserFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserFormComponent_div_0_Template, 7, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckbox"]], styles: ["label[_ngcontent-%COMP%] {\n  min-width: 100%;\n  margin-top: 1.25em;\n  margin-right: 1em;\n  font-weight: bold;\n  font-size: 0.8em;\n  width: 100%;\n  margin-top: 0;\n  margin-bottom: 0.5em;\n}\nlabel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--pending);\n}\nlabel.error[_ngcontent-%COMP%] {\n  color: var(--error);\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvdXNlcnMvc3JjL2xpYi91c2VyLWZvcm0vdXNlci1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQUFGO0FBRUU7RUFDRSxxQkFBQTtBQUFKO0FBRUU7RUFDRSxtQkFBQTtBQUFKO0FBSUE7RUFDRSxhQUFBO0VBRUEsZUFBQTtBQUZGO0FBTUE7RUFDRSxXQUFBO0FBSEYiLCJmaWxlIjoibGlicy91c2Vycy9zcmMvbGliL3VzZXItZm9ybS91c2VyLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMS4yNWVtO1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogLjhlbTtcbiAgLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IC41ZW07XG4gIC8vIH1cbiAgc3BhbiB7XG4gICAgY29sb3I6IHZhcigtLXBlbmRpbmcpO1xuICB9XG4gICYuZXJyb3Ige1xuICAgIGNvbG9yOiB2YXIoLS1lcnJvcik7XG4gIH1cbn1cblxuLmZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgZmxleC13cmFwOiB3cmFwO1xuICAvLyB9XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'user-form',
                templateUrl: './user-form.component.html',
                styleUrls: ['./user-form.component.scss']
            }]
    }], null, { form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "6CBO":
/*!**********************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/spaces/src/index.ts ***!
  \**********************************************************************************/
/*! exports provided: SpaceSelectItemComponent, SpaceSelectModalComponent, Space, generateMockSpace, SharedSpacesModule, SpacesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_spaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/spaces */ "nWvK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpaceSelectItemComponent", function() { return _lib_spaces__WEBPACK_IMPORTED_MODULE_0__["SpaceSelectItemComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpaceSelectModalComponent", function() { return _lib_spaces__WEBPACK_IMPORTED_MODULE_0__["SpaceSelectModalComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Space", function() { return _lib_spaces__WEBPACK_IMPORTED_MODULE_0__["Space"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateMockSpace", function() { return _lib_spaces__WEBPACK_IMPORTED_MODULE_0__["generateMockSpace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedSpacesModule", function() { return _lib_spaces__WEBPACK_IMPORTED_MODULE_0__["SharedSpacesModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpacesService", function() { return _lib_spaces__WEBPACK_IMPORTED_MODULE_0__["SpacesService"]; });




/***/ }),

/***/ "6P+R":
/*!***********************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/organisation/src/lib/organisation.service.ts ***!
  \***********************************************************************************************************/
/*! exports provided: OrganisationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationService", function() { return OrganisationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ "/It1");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _organisation_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation.class */ "hHhb");
/* harmony import */ var _building_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./building.class */ "o6WN");
/* harmony import */ var _level_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./level.class */ "rrlD");
/* harmony import */ var _desk_class__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./desk.class */ "A/X2");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");












class OrganisationService {
    constructor(_service) {
        this._service = _service;
        /** Subject which stores the initialised state of the object */
        this._initialised = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        /** Observable of the initialised state of the object */
        this.initialised = this._initialised.asObservable();
        this.buildings_subject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.active_building_subject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.levels_subject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        /** Observable for the list of buildings */
        this.building_list = this.buildings_subject.asObservable();
        /** Observable for the list of levels */
        this.level_list = this.levels_subject.asObservable();
        /** Observable for the currently active building */
        this.active_building = this.active_building_subject.asObservable();
        /** Observable for the levels associated with the currently active building */
        this.active_levels = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.level_list, this.active_building]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((details) => (details[1] ? this.levelsForBuilding(details[1]) : [])));
        /** Mapping of organisation settings overrides */
        this._settings = {};
        /** Mapping of buildings to settings overrides */
        this._building_settings = {};
        Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["onlineState"])()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])((_) => _))
            .subscribe(() => setTimeout(() => this.init(), 1000));
        this.active_building.subscribe((bld) => {
            if (bld) {
                this._service.overrides = [this._settings, this.buildingSettings(bld.id)];
            }
        });
    }
    /** Mapping of organisation settings overrides */
    get settings() {
        return this._settings;
    }
    /** Mapping of builgins to settings overrides */
    get building_settings() {
        return this._building_settings;
    }
    /** Mapping building settings overrides */
    buildingSettings(bld_id = '') {
        if (!bld_id && this.building) {
            bld_id = this.building.id;
        }
        return this._building_settings ? this._building_settings[bld_id] || {} : {};
    }
    /** Organisation data for the application */
    get organisation() {
        return this._organisation;
    }
    /** List of available buildings */
    get buildings() {
        return this.buildings_subject.getValue();
    }
    /** Currently active building */
    get building() {
        return this.active_building_subject.getValue();
    }
    set building(bld) {
        this.active_building_subject.next(bld);
    }
    /** Get building by id */
    find(id) {
        return this.buildings.find((i) => i.id === id || i.email === id);
    }
    /** List of available levels */
    get levels() {
        return this.levels_subject.getValue();
    }
    /**
     * Get level with a matching ID
     * @param id_list List of IDs to find a match
     */
    levelWithID(id_list) {
        return this.levels.find((lvl) => id_list.includes(lvl.id));
    }
    /**
     * Get list of levels for the given building
     * @param bld Building to list levels for
     */
    levelsForBuilding(bld) {
        return this.levels.filter((lvl) => lvl.parent_id === bld.id);
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._initialised.next(false);
            yield this.load().catch((err) => {
                Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_9__["notifyError"])('Error loading organisation data. Retrying...');
                setTimeout(() => this.init(), 300);
                throw err;
            });
            this._initialised.next(true);
        });
    }
    /**
     * Initialise service data
     */
    load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadOrganisation();
            yield this.loadBuildings();
            yield this.loadLevels();
            yield this.loadSettings();
        });
    }
    /**
     * Load organisation data for application
     */
    loadOrganisation() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const org_list = yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["queryZones"])({ tags: 'org' })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((i) => i.data))
                .toPromise();
            if (org_list.length) {
                const org = org_list.find(list => { var _a; return list.id === ((_a = Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["authority"])().config) === null || _a === void 0 ? void 0 : _a.org_zone); }) || org_list[0];
                const bindings = (_a = (yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["showMetadata"])(org.id, { name: 'bindings' }).toPromise())) === null || _a === void 0 ? void 0 : _a.details;
                this._organisation = new _organisation_class__WEBPACK_IMPORTED_MODULE_5__["Organisation"](Object.assign(Object.assign({}, org_list[0]), { bindings }));
            }
        });
    }
    /**
     * Load buildings data for the organisation
     */
    loadBuildings() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const building_list = yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["queryZones"])({
                tags: 'building',
                limit: 500,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((i) => i.data))
                .toPromise();
            const buildings = building_list.map((bld) => new _building_class__WEBPACK_IMPORTED_MODULE_6__["Building"](bld));
            this.buildings_subject.next(buildings);
            const id = localStorage.getItem(`CATERING.building`);
            if (id && this.buildings.find((bld) => bld.id === id)) {
                this.active_building_subject.next(this.buildings.find((bld) => bld.id === id));
            }
            if (!this.building && buildings && buildings.length > 0) {
                this.building = buildings[0];
            }
        });
    }
    /**
     * Load levels data for the buildings
     */
    loadLevels() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const level_list = yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["queryZones"])({ tags: 'level', limit: 2500 })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((i) => i.data))
                .toPromise();
            const levels = level_list.map((lvl) => new _level_class__WEBPACK_IMPORTED_MODULE_7__["BuildingLevel"](lvl));
            levels.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
            this.levels_subject.next(levels);
        });
    }
    get available_room_configs() {
        return this.buildings
            .map((m) => [...m.room_configurations])
            .reduce((prev, curr) => prev.concat(curr), [])
            .sort((a, b) => a.name.localeCompare(b.name));
    }
    /** Load metadata for the zone id */
    loadMetadata(zone_id, query) {
        return Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["showMetadata"])(zone_id, query);
    }
    /** Update Desks for zone */
    updateDesks(zone_id, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["updateMetadata"])(zone_id, {
                name: 'desks',
                description: 'desks',
                details: data,
            }).toPromise();
        });
    }
    /** Load Desks zone */
    loadZoneDesks(zone_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const metadata = yield this.loadMetadata(zone_id, { name: 'desks' }).toPromise();
            const data = metadata.details;
            if (!data) {
                return [];
            }
            return data.map((i) => new _desk_class__WEBPACK_IMPORTED_MODULE_8__["Desk"](Object.assign(Object.assign({}, i), { parent_id: data.parent_id })));
        });
    }
    /** Load desks metadata for the parent zone_id */
    loadDesks(zone_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const levels = yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["listChildMetadata"])(zone_id, {
                tags: 'level',
                name: 'desks',
            }).toPromise();
            const desks = [];
            levels.forEach((level) => {
                var _a, _b;
                if ((_b = (_a = level.metadata) === null || _a === void 0 ? void 0 : _a.desks) === null || _b === void 0 ? void 0 : _b.details) {
                    level.metadata.desks.details.forEach((desk) => {
                        desks.push(new _desk_class__WEBPACK_IMPORTED_MODULE_8__["Desk"](Object.assign(Object.assign({}, desk), { zone: level.zone })));
                    });
                }
            });
            return desks;
        });
    }
    loadSettings() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this._organisation)
                return;
            const app_name = `${(this._service.get('app.name') || 'workplace').toLowerCase()}_app`;
            this._settings = yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["showMetadata"])(this._organisation.id, {
                name: app_name
            }).toPromise();
            const buildings = this.buildings;
            for (const bld of buildings) {
                this._building_settings[bld.id] = yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["showMetadata"])(bld.id, {
                    name: app_name,
                }).toPromise();
            }
            this._service.overrides = [
                this._settings.details,
                this.buildingSettings(this.building.id).details,
            ];
        });
    }
    /** Save building selection */
    saveBuilding(id) {
        localStorage.setItem(`CATERING.building`, id);
    }
}
OrganisationService.ɵfac = function OrganisationService_Factory(t) { return new (t || OrganisationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_interfaces_common__WEBPACK_IMPORTED_MODULE_9__["SettingsService"])); };
OrganisationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrganisationService, factory: OrganisationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrganisationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _user_interfaces_common__WEBPACK_IMPORTED_MODULE_9__["SettingsService"] }]; }, null); })();


/***/ }),

/***/ "7C6v":
/*!**************************************************!*\
  !*** ./src/app/bootstrap/bootstrap.component.ts ***!
  \**************************************************/
/*! exports provided: BootstrapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapComponent", function() { return BootstrapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interfaces/organisation */ "dJst");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "mFH5");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "csyo");













const _c0 = ["bootstrap", ""];
function BootstrapComponent_main_3_div_1_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r10.name, " ");
} }
function BootstrapComponent_main_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please select a building from the dropdown below");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function BootstrapComponent_main_3_div_1_Template_mat_select_valueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.active_building = $event; })("valueChange", function BootstrapComponent_main_3_div_1_Template_mat_select_valueChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.updateRotations(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BootstrapComponent_main_3_div_1_mat_option_6_Template, 2, 2, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r4.active_building);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.buildings);
} }
function BootstrapComponent_main_3_div_2_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r16.name, " ");
} }
function BootstrapComponent_main_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please select a level from the dropdown below");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 11, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function BootstrapComponent_main_3_div_2_Template_mat_select_valueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.active_level = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BootstrapComponent_main_3_div_2_mat_option_6_Template, 2, 2, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r5.active_level);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.levels);
} }
function BootstrapComponent_main_3_div_3_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r21.name, " ");
} }
function BootstrapComponent_main_3_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please select an orientation from the dropdown below");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 12, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function BootstrapComponent_main_3_div_3_Template_mat_select_valueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.active_rotation = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BootstrapComponent_main_3_div_3_mat_option_6_Template, 2, 2, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r6.active_rotation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.rotations);
} }
function BootstrapComponent_main_3_div_4_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r26.name, " ");
} }
function BootstrapComponent_main_3_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please select an fixed location from the dropdown below");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 13, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function BootstrapComponent_main_3_div_4_Template_mat_select_valueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.active_location = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BootstrapComponent_main_3_div_4_mat_option_6_Template, 2, 2, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r7.active_location);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.locations);
} }
function BootstrapComponent_main_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BootstrapComponent_main_3_div_1_Template, 7, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BootstrapComponent_main_3_div_2_Template, 7, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BootstrapComponent_main_3_div_3_Template, 7, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BootstrapComponent_main_3_div_4_Template, 7, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.buildings && ctx_r0.buildings.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.levels && ctx_r0.levels.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.rotations && ctx_r0.rotations.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.locations && ctx_r0.locations.length);
} }
function BootstrapComponent_footer_4_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BootstrapComponent_footer_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.bootstrapKiosk(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Finish Setup ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.active_building && !ctx_r1.active_level);
} }
function BootstrapComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-spinner", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.loading);
} }
class BootstrapComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["BaseClass"] {
    constructor(_org, _route, _router) {
        super();
        this._org = _org;
        this._route = _route;
        this._router = _router;
        this.rotations = [];
    }
    /** List of available buildings */
    get buildings() {
        return this._org.buildings;
    }
    /** List of available levels */
    get levels() {
        if (!this.active_building) {
            return [];
        }
        return this._org.levelsForBuilding(this.active_building) || [];
    }
    /** List of available locations */
    get locations() {
        if (!this.active_level) {
            return [];
        }
        return this.active_level.locations || [];
    }
    ngOnInit() {
        this.subscription('route.query', this._route.queryParamMap.subscribe((params) => {
            if (params.has('clear') && params.get('clear') === 'true') {
                localStorage.removeItem('KIOSK.building');
                localStorage.removeItem('KIOSK.level');
                localStorage.removeItem('KIOSK.orientation');
            }
        }));
        this.timeout('check', () => this.checkBootstrap(), 1000);
    }
    updateRotations() {
        const orientations = this.active_building.orientations;
        const rotations = [];
        for (const key in orientations) {
            if (orientations.hasOwnProperty(key)) {
                rotations.push({
                    id: key,
                    name: `${key.split('_').join(' ')} (${orientations[key] * 90}°)`,
                    value: orientations[key],
                });
            }
        }
        this.rotations = rotations;
        this.active_rotation = this.rotations[0];
    }
    /**
     * Store bootstrapped values and navigate to the main page
     */
    bootstrapKiosk() {
        this.loading = 'Bootstrapping application...';
        if (this.active_building && this.active_level) {
            if (localStorage) {
                localStorage.setItem('KIOSK.building', this.active_building.id);
                localStorage.setItem('KIOSK.level', this.active_level.id);
                if (this.active_rotation) {
                    localStorage.setItem('KIOSK.orientation', this.active_rotation.value);
                }
                if (this.active_location) {
                    localStorage.setItem('KIOSK.location', `${this.active_location.id}`);
                }
            }
            this._router.navigate(['/welcome']);
        }
        this.loading = null;
    }
    /**
     * Check for any existing bootstrapped values
     */
    checkBootstrap() {
        this.loading = 'Checking for existing parameters...';
        if (localStorage) {
            const building_id = localStorage.getItem('KIOSK.building');
            const level_id = localStorage.getItem('KIOSK.level');
            if (building_id && level_id) {
                this._router.navigate(['/welcome']);
            }
            else {
                this.checkForOldBootstrapParameters();
            }
        }
        this.loading = null;
    }
    checkForOldBootstrapParameters() {
        const building_id = localStorage.getItem('KIOSK.bld');
        const level_id = localStorage.getItem('KIOSK.lvl');
        const orientation = localStorage.getItem('map_orientation');
        if (orientation) {
            switch (orientation) {
                case 'portrait':
                    localStorage.setItem('KIOSK.orientation', `1`);
                    break;
                case 'landscape_reverse':
                    localStorage.setItem('KIOSK.orientation', `2`);
                    break;
                case 'portrait_reverse':
                    localStorage.setItem('KIOSK.orientation', `3`);
                    break;
            }
        }
        if (building_id && level_id) {
            localStorage.setItem('KIOSK.building', building_id);
            localStorage.setItem('KIOSK.level', level_id);
            this._router.navigate(['/welcome']);
        }
    }
}
BootstrapComponent.ɵfac = function BootstrapComponent_Factory(t) { return new (t || BootstrapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_3__["OrganisationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
BootstrapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BootstrapComponent, selectors: [["", "bootstrap", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], attrs: _c0, decls: 7, vars: 3, consts: [[1, "details"], [4, "ngIf", "ngIfElse"], [4, "ngIf"], ["load_state", ""], ["class", "field", 4, "ngIf"], [1, "field"], ["appearance", "outline"], ["placeholder", "Select building", 3, "value", "valueChange"], ["select", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["placeholder", "Select level", 3, "value", "valueChange"], ["placeholder", "Select orientation", 3, "value", "valueChange"], ["placeholder", "Select location", 3, "value", "valueChange"], ["mat-button", "", 3, "disabled", "click"], [1, "info-block"], [1, "icon"], ["diameter", "64"], [1, "text"]], template: function BootstrapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Visitor Kiosk Setup ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BootstrapComponent_main_3_Template, 5, 4, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BootstrapComponent_footer_4_Template, 3, 1, "footer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BootstrapComponent_ng_template_5_Template, 6, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatSpinner"]], styles: ["[_nghost-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #f0f0f0;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%23ccc' fill-opacity='0.4' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E\");\n  overflow: auto;\n}\n\n.details[_ngcontent-%COMP%] {\n  background-color: #fff;\n  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  border-radius: 4px;\n  width: 32em;\n  max-width: calc(100vw - 2em);\n  margin: 1em auto;\n  overflow: hidden;\n}\n\nheader[_ngcontent-%COMP%] {\n  background-color: #b71c1c;\n  color: #fff;\n  padding: 0.5rem 1em;\n  font-size: 1.5em;\n  font-weight: 400;\n  text-align: center;\n}\n\nmain[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n\nfooter[_ngcontent-%COMP%] {\n  padding: 0.5em;\n  text-align: center;\n}\n\nlabel[_ngcontent-%COMP%] {\n  min-width: 100%;\n  margin-top: 1.25em;\n  margin-right: 1em;\n  font-weight: bold;\n  font-size: 0.8em;\n  text-align: center;\n  width: 100%;\n  margin-top: 0;\n  margin-bottom: 0.5em;\n}\n\nlabel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--pending);\n}\n\nlabel.error[_ngcontent-%COMP%] {\n  color: var(--error);\n}\n\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\nmat-form-field[_ngcontent-%COMP%], a-date-field[_ngcontent-%COMP%], an-action-field[_ngcontent-%COMP%], editor[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 50%;\n}\n\n@media screen and (max-width: 639px) {\n  mat-form-field[_ngcontent-%COMP%], a-date-field[_ngcontent-%COMP%], an-action-field[_ngcontent-%COMP%], editor[_ngcontent-%COMP%] {\n    min-width: 16em;\n  }\n}\n\nmat-option[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvdmlzaXRvci1raW9zay9zcmMvYXBwL2Jvb3RzdHJhcC9ib290c3RyYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsaW1EQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSw0RUFBQTtFQUNBLHVHQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUFBRjs7QUFFRTtFQUNFLHFCQUFBO0FBQUo7O0FBRUU7RUFDRSxtQkFBQTtBQUFKOztBQUlBO0VBQ0UsYUFBQTtFQUVBLGVBQUE7QUFGRjs7QUFNQTs7OztFQUlFLE9BQUE7RUFDQSxjQUFBO0FBSEY7O0FBSUU7RUFORjs7OztJQU9JLGVBQUE7RUFFRjtBQUNGOztBQUNBO0VBQ0UsMEJBQUE7QUFFRiIsImZpbGUiOiJhcHBzL3Zpc2l0b3Ita2lvc2svc3JjL2FwcC9ib290c3RyYXAvYm9vdHN0cmFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1NiAyOCcgd2lkdGg9JzU2JyBoZWlnaHQ9JzI4JyUzRSUzQ3BhdGggZmlsbD0nJTIzY2NjJyBmaWxsLW9wYWNpdHk9JzAuNCcgZD0nTTU2IDI2djJoLTcuNzVjMi4zLTEuMjcgNC45NC0yIDcuNzUtMnptLTI2IDJhMiAyIDAgMSAwLTQgMGgtNC4wOUEyNS45OCAyNS45OCAwIDAgMCAwIDE2di0yYy42NyAwIDEuMzQuMDIgMiAuMDdWMTRhMiAyIDAgMCAwLTItMnYtMmE0IDQgMCAwIDEgMy45OCAzLjYgMjguMDkgMjguMDkgMCAwIDEgMi44LTMuODZBOCA4IDAgMCAwIDAgNlY0YTkuOTkgOS45OSAwIDAgMSA4LjE3IDQuMjNjLjk0LS45NSAxLjk2LTEuODMgMy4wMy0yLjYzQTEzLjk4IDEzLjk4IDAgMCAwIDAgMGg3Ljc1YzIgMS4xIDMuNzMgMi42MyA1LjEgNC40NSAxLjEyLS43MiAyLjMtMS4zNyAzLjUzLTEuOTNBMjAuMSAyMC4xIDAgMCAwIDE0LjI4IDBoMi43Yy40NS41Ni44OCAxLjE0IDEuMjkgMS43NCAxLjMtLjQ4IDIuNjMtLjg3IDQtMS4xNS0uMTEtLjItLjIzLS40LS4zNi0uNTlIMjZ2LjA3YTI4LjQgMjguNCAwIDAgMSA0IDBWMGg0LjA5bC0uMzcuNTljMS4zOC4yOCAyLjcyLjY3IDQuMDEgMS4xNS40LS42Ljg0LTEuMTggMS4zLTEuNzRoMi42OWEyMC4xIDIwLjEgMCAwIDAtMi4xIDIuNTJjMS4yMy41NiAyLjQxIDEuMiAzLjU0IDEuOTNBMTYuMDggMTYuMDggMCAwIDEgNDguMjUgMEg1NmMtNC41OCAwLTguNjUgMi4yLTExLjIgNS42IDEuMDcuOCAyLjA5IDEuNjggMy4wMyAyLjYzQTkuOTkgOS45OSAwIDAgMSA1NiA0djJhOCA4IDAgMCAwLTYuNzcgMy43NGMxLjAzIDEuMiAxLjk3IDIuNSAyLjc5IDMuODZBNCA0IDAgMCAxIDU2IDEwdjJhMiAyIDAgMCAwLTIgMi4wNyAyOC40IDI4LjQgMCAwIDEgMi0uMDd2MmMtOS4yIDAtMTcuMyA0Ljc4LTIxLjkxIDEySDMwek03Ljc1IDI4SDB2LTJjMi44MSAwIDUuNDYuNzMgNy43NSAyek01NiAyMHYyYy01LjYgMC0xMC42NSAyLjMtMTQuMjggNmgtMi43YzQuMDQtNC44OSAxMC4xNS04IDE2Ljk4LTh6bS0zOS4wMyA4aC0yLjY5QzEwLjY1IDI0LjMgNS42IDIyIDAgMjJ2LTJjNi44MyAwIDEyLjk0IDMuMTEgMTYuOTcgOHptMTUuMDEtLjRhMjguMDkgMjguMDkgMCAwIDEgMi44LTMuODYgOCA4IDAgMCAwLTEzLjU1IDBjMS4wMyAxLjIgMS45NyAyLjUgMi43OSAzLjg2YTQgNCAwIDAgMSA3Ljk2IDB6bTE0LjI5LTExLjg2YzEuMy0uNDggMi42My0uODcgNC0xLjE1YTI1Ljk5IDI1Ljk5IDAgMCAwLTQ0LjU1IDBjMS4zOC4yOCAyLjcyLjY3IDQuMDEgMS4xNWEyMS45OCAyMS45OCAwIDAgMSAzNi41NCAwem0tNS40MyAyLjcxYzEuMTMtLjcyIDIuMy0xLjM3IDMuNTQtMS45M2ExOS45OCAxOS45OCAwIDAgMC0zMi43NiAwYzEuMjMuNTYgMi40MSAxLjIgMy41NCAxLjkzYTE1Ljk4IDE1Ljk4IDAgMCAxIDI1LjY4IDB6bS00LjY3IDMuNzhjLjk0LS45NSAxLjk2LTEuODMgMy4wMy0yLjYzYTEzLjk4IDEzLjk4IDAgMCAwLTIyLjQgMGMxLjA3LjggMi4wOSAxLjY4IDMuMDMgMi42M2E5Ljk5IDkuOTkgMCAwIDEgMTYuMzQgMHonJTNFJTNDL3BhdGglM0UlM0Mvc3ZnJTNFXCIpO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmRldGFpbHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtLXR3LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiAzMmVtO1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAyZW0pO1xuICBtYXJnaW46IDFlbSBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjcxYzFjO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogLjVyZW0gMWVtO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbm1haW4ge1xuICBwYWRkaW5nOiAxZW07XG59XG5cbmZvb3RlciB7XG4gIHBhZGRpbmc6IC41ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubGFiZWwge1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEuMjVlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IC44ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IC41ZW07XG4gIC8vIH1cbiAgc3BhbiB7XG4gICAgY29sb3I6IHZhcigtLXBlbmRpbmcpO1xuICB9XG4gICYuZXJyb3Ige1xuICAgIGNvbG9yOiB2YXIoLS1lcnJvcik7XG4gIH1cbn1cblxuLmZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgZmxleC13cmFwOiB3cmFwO1xuICAvLyB9XG59XG5cbm1hdC1mb3JtLWZpZWxkLFxuYS1kYXRlLWZpZWxkLFxuYW4tYWN0aW9uLWZpZWxkLFxuZWRpdG9yIHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiA1MCU7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gICAgbWluLXdpZHRoOiAxNmVtO1xuICB9XG59XG5cbm1hdC1vcHRpb24ge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BootstrapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[bootstrap]',
                templateUrl: './bootstrap.component.html',
                styleUrls: ['./bootstrap.component.scss'],
            }]
    }], function () { return [{ type: _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_3__["OrganisationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "7WPI":
/*!*************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/mocks/src/lib/api/bookings.mock.ts ***!
  \*************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/ts-client */ "/It1");

Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__["registerMockEndpoint"])({
    path: '/api/staff/v1/bookings',
    metadata: {},
    method: 'GET',
    callback: (request) => {
        return [];
    },
});


/***/ }),

/***/ "7ow8":
/*!***********************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/spaces/src/lib/space-select-modal/item/item.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: SpaceSelectItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceSelectItemComponent", function() { return SpaceSelectItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _space_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../space.class */ "mh7C");



const _c0 = function () { return { class: "material-icons", content: "account_circle" }; };
function SpaceSelectItemComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.space.capacity);
} }
const _c1 = function (a1) { return { class: "material-icons", content: a1 }; };
function SpaceSelectItemComponent_div_0_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpaceSelectItemComponent_div_0_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.action.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r4.type === "available" ? "add" : "close"));
} }
function SpaceSelectItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SpaceSelectItemComponent_div_0_div_6_Template, 4, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SpaceSelectItemComponent_div_0_button_8_Template, 2, 3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.space.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r0.space.level == null ? null : ctx_r0.space.level.display_name) || (ctx_r0.space.level == null ? null : ctx_r0.space.level.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.space.capacity !== -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.multiple)("ngIfElse", _r1);
} }
function SpaceSelectItemComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("request", ctx_r2.space.by_request);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.space.by_request ? "Request" : "Book", " ");
} }
class SpaceSelectItemComponent {
    constructor() { }
    ngOnInit() { }
}
SpaceSelectItemComponent.ɵfac = function SpaceSelectItemComponent_Factory(t) { return new (t || SpaceSelectItemComponent)(); };
SpaceSelectItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpaceSelectItemComponent, selectors: [["a-space-select-item"]], inputs: { space: "space", type: "type", multiple: "multiple" }, decls: 3, vars: 1, consts: [["class", "item", 4, "ngIf"], ["single_button", ""], [1, "item"], [1, "details"], [1, "name", "truncate"], [1, "info"], ["class", "capacity", 4, "ngIf"], [1, "actions"], ["mat-icon-button", "", 3, "click", 4, "ngIf", "ngIfElse"], [1, "capacity"], [3, "icon"], [1, "text"], ["mat-icon-button", "", 3, "click"], ["mat-button", ""]], template: function SpaceSelectItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpaceSelectItemComponent_div_0_Template, 9, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SpaceSelectItemComponent_ng_template_1_Template, 2, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.space);
    } }, styles: [".item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.5em;\n  width: 100%;\n}\n\n.details[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 50%;\n}\n\n.name[_ngcontent-%COMP%] {\n  font-size: 1em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.info[_ngcontent-%COMP%] {\n  font-size: 0.65em;\n}\n\n.capacity[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: 0.5em;\n}\n\n.actions[_ngcontent-%COMP%] {\n  margin-left: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvc3BhY2VzL3NyYy9saWIvc3BhY2Utc2VsZWN0LW1vZGFsL2l0ZW0vaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxPQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6ImxpYnMvc3BhY2VzL3NyYy9saWIvc3BhY2Utc2VsZWN0LW1vZGFsL2l0ZW0vaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogLjVlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kZXRhaWxzIHtcbiAgZmxleDogMTtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLm5hbWUge1xuICBmb250LXNpemU6IDFlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5pbmZvIHtcbiAgZm9udC1zaXplOiAuNjVlbTtcbn1cblxuLmNhcGFjaXR5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IC41ZW07XG59XG5cbi5hY3Rpb25zIHtcbiAgbWFyZ2luLWxlZnQ6IC41ZW07XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpaceSelectItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-space-select-item',
                templateUrl: './item.component.html',
                styleUrls: ['./item.component.scss']
            }]
    }], function () { return []; }, { space: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "7u5P":
/*!************************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/action-field/action-field.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: ActionFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionFieldComponent", function() { return ActionFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


const _c0 = function (a2) { return { type: "icon", class: "material-icons", content: a2 }; };
class ActionFieldComponent {
    constructor() {
        /** Emitter for user interaction events */
        this.on_action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Whether to show tooltip */
        this.show_tooltip = false;
    }
    /**
     * Emit that the user has performed an action on the field
     */
    performAction() {
        this.show_tooltip = !this.show_tooltip;
        this.on_action.emit();
    }
}
ActionFieldComponent.ɵfac = function ActionFieldComponent_Factory(t) { return new (t || ActionFieldComponent)(); };
ActionFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActionFieldComponent, selectors: [["an-action-field"]], inputs: { name: "name", placeholder: "placeholder", disabled: "disabled" }, outputs: { on_action: "onAction" }, decls: 5, vars: 7, consts: [["role", "button", "form-field", "", "tabindex", "0", 1, "flex", "items-center", "rounded", "p-2", "border", "border-gray-300", "hover:border-black", 3, "keydown.enter"], [1, "flex-1", "w-0", "truncate", 3, "innerHTML", "click"], [1, "text-xl", 3, "click"], [3, "icon"]], template: function ActionFieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function ActionFieldComponent_Template_div_keydown_enter_0_listener() { return ctx.performAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionFieldComponent_Template_div_click_1_listener() { return ctx.performAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionFieldComponent_Template_div_click_3_listener() { return ctx.performAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx.placeholder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.show_tooltip ? "arrow_drop_up" : "arrow_drop_down"));
    } }, styles: ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%]:hover {\n            box-shadow: inset 0 0 0 1px #000;\n        }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionFieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'an-action-field',
                template: `
        <div
            class="flex items-center rounded p-2 border border-gray-300 hover:border-black"
            role="button"
            [attr.disabled]="disabled"
            form-field
            tabindex="0"
            (keydown.enter)="performAction()"
        >
            <div class="flex-1 w-0 truncate" (click)="performAction()" [innerHTML]="placeholder | safe"></div>
            <div class="text-xl" (click)="performAction()">
                <app-icon
                    [icon]="{
                        type: 'icon',
                        class: 'material-icons',
                        content: show_tooltip ? 'arrow_drop_up' : 'arrow_drop_down'
                    }"
                ></app-icon>
            </div>
        </div>
    `,
                styles: [`
        :host > div:hover {
            box-shadow: inset 0 0 0 1px #000;
        }
    `],
            }]
    }], null, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], on_action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['onAction']
        }] }); })();


/***/ }),

/***/ "8Ss5":
/*!************************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/unauthorised/unauthorised.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: UnauthorisedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthorisedComponent", function() { return UnauthorisedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


class UnauthorisedComponent {
}
UnauthorisedComponent.ɵfac = function UnauthorisedComponent_Factory(t) { return new (t || UnauthorisedComponent)(); };
UnauthorisedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnauthorisedComponent, selectors: [["app-unauthorised"]], decls: 9, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_forbiddenLabel$$LIBS_COMPONENTS_SRC_LIB_UNAUTHORISED_UNAUTHORISED_COMPONENT_TS_1 = goog.getMsg("Access forbidden.");
        i18n_0 = MSG_EXTERNAL_forbiddenLabel$$LIBS_COMPONENTS_SRC_LIB_UNAUTHORISED_UNAUTHORISED_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:@@forbiddenLabel␟56a20d819b6e59b0de025988a3f9ed7d6a1bc08c␟4136336337692896315:Access forbidden.`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_invalidPermissionLabel$$LIBS_COMPONENTS_SRC_LIB_UNAUTHORISED_UNAUTHORISED_COMPONENT_TS_3 = goog.getMsg(" You do not have permission to view this page and your access attempt has been recorded. ");
        i18n_2 = MSG_EXTERNAL_invalidPermissionLabel$$LIBS_COMPONENTS_SRC_LIB_UNAUTHORISED_UNAUTHORISED_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:@@invalidPermissionLabel␟7afe2eb69e486929c5a29d67e6f24975f97604c4␟8887025903012875176: You do not have permission to view this page and your access attempt has been recorded. `;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_contactAdminLabel$$LIBS_COMPONENTS_SRC_LIB_UNAUTHORISED_UNAUTHORISED_COMPONENT_TS_5 = goog.getMsg(" Contact your Administrator if you feel that you should have access. ");
        i18n_4 = MSG_EXTERNAL_contactAdminLabel$$LIBS_COMPONENTS_SRC_LIB_UNAUTHORISED_UNAUTHORISED_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:@@contactAdminLabel␟1520ecc736c82366b62d64a515b1c3b222c9e1df␟1824441478452454363: Contact your Administrator if you feel that you should have access. `;
    } return [[1, "unauthorised", "rounded", "m-4", "text-center", "bg-white", "text-black", "border", "border-gray-400", "p-4", "shadow"], [1, "text-4xl"], [1, "text-2xl"], i18n_0, [1, "py-4"], i18n_2, i18n_4]; }, template: function UnauthorisedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "403");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n                display: flex;\n                align-items: center;\n                justify-content: center;\n            }\n\n            .unauthorised[_ngcontent-%COMP%] {\n                width: 28em;\n                max-width: calc(100vw - 1rem);\n            }\n\n            @media (prefers-color-scheme: dark) {\n                .unauthorised[_ngcontent-%COMP%] {\n                    background-color: #262626;\n                    color: #fff;\n                }\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnauthorisedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-unauthorised',
                template: `
        <div
            class="unauthorised rounded m-4 text-center bg-white text-black border border-gray-400 p-4 shadow"
        >
            <h1 class="text-4xl">403</h1>
            <h3 class="text-2xl" i18n="@@forbiddenLabel">Access forbidden.</h3>
            <p class="py-4" i18n="@@invalidPermissionLabel">
                You do not have permission to view this page and your access
                attempt has been recorded.
            </p>
            <p i18n="@@contactAdminLabel">
                Contact your Administrator if you feel that you should have
                access.
            </p>
        </div>
    `,
                styles: [
                    `
            :host {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .unauthorised {
                width: 28em;
                max-width: calc(100vw - 1rem);
            }

            @media (prefers-color-scheme: dark) {
                .unauthorised {
                    background-color: #262626;
                    color: #fff;
                }
            }
        `,
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "9Yl1":
/*!***************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/calendar/src/lib/calendar.service.ts ***!
  \***************************************************************************************************/
/*! exports provided: CalendarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarService", function() { return CalendarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _calendar_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar.class */ "pu6a");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @user-interfaces/organisation */ "dJst");
/* harmony import */ var _spaces_src_lib_space_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../spaces/src/lib/space.class */ "mh7C");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dayjs */ "BQ33");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_8__);












class CalendarService extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_5__["BaseAPIService"] {
    constructor(_settings, _org) {
        super();
        this._settings = _settings;
        this._org = _org;
        this.calendars_subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        /** Observable for the list of calendars */
        this.calendar_list = this.calendars_subject.asObservable();
        this._name = 'Calendars';
        this._api_route = 'calendars';
        this._org.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])((_) => _)).subscribe(() => this.init());
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.load().catch((err) => {
                Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_5__["notifyError"])('Error loading calendars data');
            });
            this._initialised.next(true);
        });
    }
    get calendars() {
        return this.calendars_subject.getValue();
    }
    /**
     * List available rooms
     * @param q Query parameters to pass to the request
     * @param all_day Whether it is an all day booking
     */
    availability(q = {}, all_day = false) {
        const query = Object.assign({}, q);
        const breakdown = this._settings.get('app.booking.breakdown') || 0;
        if (all_day) {
            query.period_start = dayjs__WEBPACK_IMPORTED_MODULE_8__(q.period_start * 1000)
                .startOf('d')
                .unix();
            query.period_end = dayjs__WEBPACK_IMPORTED_MODULE_8__(q.period_end * 1000)
                .endOf('d')
                .unix();
        }
        else {
            query.period_start = dayjs__WEBPACK_IMPORTED_MODULE_8__(q.period_start * 1000)
                .subtract(breakdown, 'm')
                .unix();
            query.period_end = dayjs__WEBPACK_IMPORTED_MODULE_8__(q.period_end * 1000)
                .add(breakdown, 'm')
                .unix();
        }
        return this.query(Object.assign(Object.assign({}, query), { subroute: 'availability' })).then((list) => {
            return list
                .map((i) => new _spaces_src_lib_space_class__WEBPACK_IMPORTED_MODULE_7__["Space"](Object.assign(Object.assign({}, i.resource), { level: this._org.levelWithID(i.resource.zones) })))
                .filter((i) => i.bookable);
        });
    }
    /** List periods where room or calendars are busy */
    freeBusy(q = {}) {
        const query = Object.assign({}, q);
        return this.query(Object.assign(Object.assign({}, query), { subroute: 'free_busy' }));
    }
    /** Get Free busy for the selected day
     * @param calendar_id User calendar
     * @param date Selected day
     */
    getFreeBusyDate(date, calendar_id) {
        const period_start = dayjs__WEBPACK_IMPORTED_MODULE_8__(date).startOf('d').unix();
        const period_end = dayjs__WEBPACK_IMPORTED_MODULE_8__(date).endOf('d').unix();
        const calendars = calendar_id;
        return this.freeBusy({
            period_start,
            period_end,
            calendars,
        });
    }
    /** Check rooms availability */
    checkSpacesAvailability(system_ids, period_start, period_end, old_booking) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.freeBusy({
                period_start,
                period_end,
                system_ids: system_ids.join(','),
            });
            const available = result.every((i) => {
                var _a;
                const availability = i.availability;
                if (old_booking && i.id === ((_a = old_booking.system) === null || _a === void 0 ? void 0 : _a.email)) {
                    const start = dayjs__WEBPACK_IMPORTED_MODULE_8__(old_booking.date).valueOf();
                    const end = dayjs__WEBPACK_IMPORTED_MODULE_8__(start).add(old_booking.duration, 'm').valueOf();
                    const index = availability.findIndex((block) => {
                        return (block.date >= start &&
                            dayjs__WEBPACK_IMPORTED_MODULE_8__(block.date).add(block.duration, 'm').valueOf() <= end);
                    });
                    if (index !== -1) {
                        availability.splice(index, 1);
                    }
                }
                return !availability.length;
            });
            return available ? true : false;
        });
    }
    /** Load calendars */
    loadCalendars() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const calendars = yield this.query();
            this.calendars_subject.next(calendars);
        });
    }
    load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadCalendars();
        });
    }
    process(raw_data) {
        return new _calendar_class__WEBPACK_IMPORTED_MODULE_4__["Calendar"](raw_data);
    }
}
CalendarService.ɵfac = function CalendarService_Factory(t) { return new (t || CalendarService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_interfaces_common__WEBPACK_IMPORTED_MODULE_5__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_6__["OrganisationService"])); };
CalendarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CalendarService, factory: CalendarService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _user_interfaces_common__WEBPACK_IMPORTED_MODULE_5__["SettingsService"] }, { type: _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_6__["OrganisationService"] }]; }, null); })();


/***/ }),

/***/ "9hUz":
/*!***********************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/events/src/lib/events.service.ts ***!
  \***********************************************************************************************/
/*! exports provided: EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/ts-client */ "/It1");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _event_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event.class */ "SUR7");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "BQ33");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);






class EventsService extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["BaseAPIService"] {
    constructor() {
        super();
        this._name = 'Events';
        this._api_route = 'events';
    }
    /** Retrieve events for selected date for the given calendar
     * @param calendar_ids Array of user calendars
     * @param date Date in unix ms
     */
    getDayEvents(date, calendar_ids) {
        const period_start = dayjs__WEBPACK_IMPORTED_MODULE_4__(date).startOf('d').unix();
        const period_end = dayjs__WEBPACK_IMPORTED_MODULE_4__(date).endOf('d').unix();
        const calendars = calendar_ids.join(',');
        return this.query({
            period_start,
            period_end,
            calendars,
        });
    }
    /** Get event */
    getEvent(id, query_params = {}) {
        const query = Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["toQueryString"])(query_params);
        const url = `${this.route()}/${id}?${query}`;
        return Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["get"])(url)
            .toPromise()
            .then((res) => this.process(res));
    }
    /** Check in guest
     * @param query_params Need `system_id` and `state`
     */
    checkInGuest(event_id, guest_id, query_params = {}) {
        const query = Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["toQueryString"])(query_params);
        const url = `${this.route()}/${event_id}/guests/${guest_id}/checkin?${query}`;
        return Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["post"])(url, {}).toPromise();
    }
    accept(id, fields) {
        return this.task(id, 'approve', fields, 'post', fields);
    }
    decline(id, fields) {
        return this.task(id, 'reject', fields, 'post', fields);
    }
    process(raw_data) {
        return new _event_class__WEBPACK_IMPORTED_MODULE_3__["CalendarEvent"](raw_data);
    }
}
EventsService.ɵfac = function EventsService_Factory(t) { return new (t || EventsService)(); };
EventsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EventsService, factory: EventsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "A/X2":
/*!*************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/organisation/src/lib/desk.class.ts ***!
  \*************************************************************************************************/
/*! exports provided: Desk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Desk", function() { return Desk; });
class Desk {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.bookable = data.bookable;
        this.zone = data.zone;
        this.group = data.group;
    }
    format() {
        const { id, name, bookable, group } = this;
        return {
            id,
            name,
            bookable,
            group,
        };
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced durinx build by using the `fileReplacements` array.
// `nx build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuE4":
/*!*************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/common/src/lib/room-configuration.interface.ts ***!
  \*************************************************************************************************************/
/*! exports provided: mergeRoomConfig, roomConfigBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeRoomConfig", function() { return mergeRoomConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roomConfigBuilder", function() { return roomConfigBuilder; });
const mergeRoomConfig = (a, b) => {
    const c = Object.assign(Object.assign({}, a), b);
    return c;
};
const roomConfigBuilder = (buildingConfigs = [], roomConfigs = []) => {
    const map = {};
    buildingConfigs.forEach((f) => (map[f.id] = f));
    const output = [];
    roomConfigs.forEach((r) => {
        if (!!map[r.id]) {
            output.push(mergeRoomConfig(map[r.id], r));
        }
    });
    return output;
};


/***/ }),

/***/ "C9Ki":
/*!*********************************************************!*\
  !*** ./src/app/ui/footer-menu/footer-menu.component.ts ***!
  \*********************************************************/
/*! exports provided: FooterMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterMenuComponent", function() { return FooterMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");
/* harmony import */ var _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @acaprojects/ngx-pipes */ "81Qw");








const _c0 = function (a0) { return [a0]; };
function FooterMenuComponent_div_0_ng_container_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, item_r2.route));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", item_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.name);
} }
function FooterMenuComponent_div_0_ng_container_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 3, item_r2.link, "url"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", item_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.name);
} }
function FooterMenuComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterMenuComponent_div_0_ng_container_1_a_1_Template, 6, 5, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FooterMenuComponent_div_0_ng_container_1_a_2_Template, 7, 6, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r2.route);
} }
function FooterMenuComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterMenuComponent_div_0_ng_container_1_Template, 3, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.tiles);
} }
class FooterMenuComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["BaseClass"] {
    constructor(_settings) {
        super();
        this._settings = _settings;
        /** Tiles to display on the home page */
        this.tiles = [];
    }
    /** Angular Component initialisation lifecycle hook */
    ngOnInit() {
        this.tiles = this._settings.get('app.home.tiles') || [];
    }
}
FooterMenuComponent.ɵfac = function FooterMenuComponent_Factory(t) { return new (t || FooterMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["SettingsService"])); };
FooterMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterMenuComponent, selectors: [["a-footer-menu"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "footer-menu", 4, "ngIf"], [1, "footer-menu"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], [3, "href", 4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink"], [1, "tile"], [1, "icon"], [3, "icon"], [1, "text"], [3, "href"]], template: function FooterMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FooterMenuComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tiles && ctx.tiles.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"]], pipes: [_acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_5__["ɵa"]], styles: [".footer-menu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 3.5em;\n  background-color: var(--bg-dark);\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\n\na[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 100%;\n  min-width: 2em;\n  text-decoration: none;\n  color: #fff;\n  border-right: 1px solid #767676;\n  transition: background-color 200ms, border-color 200ms;\n  border-bottom: 4px solid rgba(0, 0, 0, 0);\n}\n\na[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n  border-bottom-color: var(--primary);\n}\n\n.tile[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.text[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n}\n\n@media screen and (max-width: 639px) {\n  .text[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\napp-icon[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvdmlzaXRvci1raW9zay9zcmMvYXBwL3VpL2Zvb3Rlci1tZW51L2Zvb3Rlci1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLCtHQUFBO0FBQ0Y7O0FBSUE7RUFDRSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLHNEQUFBO0VBQ0EseUNBQUE7QUFERjs7QUFFRTtFQUNFLDBDQUFBO0FBQUo7O0FBSUE7RUFDRSwwQ0FBQTtFQUNBLG1DQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFFRTtFQUZGO0lBR0ksYUFBQTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6ImFwcHMvdmlzaXRvci1raW9zay9zcmMvYXBwL3VpL2Zvb3Rlci1tZW51L2Zvb3Rlci1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMy41ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWRhcmspO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKCMwMDAsIC4yKSxcbiAgICAgICAgICAgICAgICAwIDFweCAxcHggMCByZ2JhKCMwMDAsIC4xNCksXG4gICAgICAgICAgICAgICAgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLCAuMTIpO1xufVxuXG5hIHtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzc2NzY3NjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcywgYm9yZGVyLWNvbG9yIDIwMG1zO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgcmdiYSgjMDAwLCAwKTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjZmZmLCAuMSk7XG4gIH1cbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoI2ZmZiwgLjEpO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLnRpbGUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udGV4dCB7XG4gIGZvbnQtc2l6ZTogLjhlbTtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbmFwcC1pY29uIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-footer-menu',
                templateUrl: './footer-menu.component.html',
                styleUrls: ['./footer-menu.component.scss']
            }]
    }], function () { return [{ type: _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["SettingsService"] }]; }, null); })();


/***/ }),

/***/ "DZJm":
/*!*******************************************************!*\
  !*** ./src/app/ui/take-photo/take-photo.component.ts ***!
  \*******************************************************/
/*! exports provided: TakePhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakePhotoComponent", function() { return TakePhotoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/progress-spinner */ "csyo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "PBFl");





function TakePhotoComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TakePhotoComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.takePhoto(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Take Photo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TakePhotoComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TakePhotoComponent_ng_template_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.cancelPhoto(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TakePhotoComponent_ng_template_10_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.acceptPhoto(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Accept ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TakePhotoComponent {
    constructor() {
        this.photoAccepted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hasPhoto = false;
        this.canvasContext = null;
        this.constraints = {
            audio: false,
            video: {
                width: { min: 360, max: 360 },
                height: { min: 400, max: 400 },
            },
        };
        this.imgSrc = null;
    }
    ngOnInit() {
        setTimeout(() => this.getCanvasContext(), 500);
    }
    ngOnDestroy() {
        this.stopCapture();
        this.video = null;
        this.canvasContext = null;
        this.canvas = null;
        this.imgSrc = null;
    }
    startCapture() {
        this.imgSrc = null;
        console.log('TakePhotoComponent::startCapture');
        this.video = document.getElementById('video');
        if (!this.video) {
            return setTimeout(() => this.startCapture(), 200);
        }
        else {
            navigator.mediaDevices
                .getUserMedia(this.constraints)
                .then((stream) => {
                this.video.srcObject = stream;
            });
        }
    }
    stopCapture() {
        console.log('TakePhotoComponent::stopCapture');
        if (this.video && this.video.srcObject) {
            this.video.srcObject
                .getVideoTracks()
                .forEach((track) => track.stop());
        }
    }
    getCanvasContext() {
        console.log('TakePhotoComponent::getCanvasContext');
        this.canvas = document.getElementById('canvas');
        if (!this.canvas) {
            return setTimeout(() => this.getCanvasContext(), 200);
        }
        this.canvasContext = this.canvas.getContext('2d');
        setTimeout(() => this.startCapture(), 200);
    }
    takePhoto() {
        console.log('TakePhotoComponent::takePhoto');
        this.canvasContext.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
        this.hasPhoto = true;
        this.stopCapture();
    }
    cancelPhoto() {
        console.log('TakePhotoComponent::cancelPhoto');
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.hasPhoto = false;
        this.startCapture();
    }
    acceptPhoto() {
        try {
            this.imgSrc = this.canvas.toDataURL('image/jpeg', 0.75);
            this.photoAccepted.emit(this.imgSrc);
            console.log('TakePhotoComponent::acceptPhoto Success');
        }
        catch (err) {
            console.error('TakePhotoComponent::acceptPhoto Error converting image', err);
            this.photoAccepted.emit(null);
            this.cancelPhoto();
        }
    }
}
TakePhotoComponent.ɵfac = function TakePhotoComponent_Factory(t) { return new (t || TakePhotoComponent)(); };
TakePhotoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TakePhotoComponent, selectors: [["a-take-photo"]], hostVars: 2, hostBindings: function TakePhotoComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("has-photo", ctx.hasPhoto);
    } }, outputs: { photoAccepted: "photoAccepted" }, decls: 12, vars: 2, consts: [["name", "camera", 1, "flex", "flex-col", "items-center", "justify-center", "rounded", "overflow-hidden", "relative"], ["diameter", "32"], [1, "text"], ["id", "video", "autoplay", "", "width", "360", "height", "400", 1, "absolute", "inset-0"], ["video", ""], ["id", "canvas", "width", "360", "height", "400", 1, "absolute", "inset-0"], ["canvas", ""], [1, "flex", "items-center", "justify-center", "mt-4", "space-x-2"], ["class", "take-photo", "mat-button", "", 3, "click", 4, "ngIf", "ngIfElse"], ["accept_state", ""], ["mat-button", "", 1, "take-photo", 3, "click"], ["mat-button", "", 1, "inverse", 3, "click"], ["mat-button", "", 3, "click"]], template: function TakePhotoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Please wait...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "video", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "canvas", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TakePhotoComponent_button_9_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TakePhotoComponent_ng_template_10_Template, 4, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hasPhoto)("ngIfElse", _r3);
    } }, directives: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n            }\n\n            [name=\"camera\"][_ngcontent-%COMP%] {\n                width: 22.5rem;\n                height: 25rem;\n            }\n\n            button[_ngcontent-%COMP%] {\n                width: 8rem;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TakePhotoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-take-photo',
                template: `
        <div name="camera" class="flex flex-col items-center justify-center rounded overflow-hidden relative">
            <mat-spinner diameter="32"></mat-spinner>
            <div class="text">Please wait...</div>
            <video
                id="video"
                #video
                autoplay
                width="360"
                height="400"
                class="absolute inset-0"
            ></video>
            <canvas
                id="canvas"
                #canvas
                class="absolute inset-0"
                width="360"
                height="400"
            ></canvas>
        </div>
        <div class="flex items-center justify-center mt-4 space-x-2">
            <button class="take-photo" *ngIf="!hasPhoto; else accept_state" mat-button (click)="takePhoto()">
                Take Photo
            </button>
        </div>
        <ng-template #accept_state>
            <button class="inverse" mat-button (click)="cancelPhoto()">
                Cancel
            </button>
            <button mat-button (click)="acceptPhoto()">
                Accept
            </button>
        </ng-template>
    `,
                styles: [
                    `
            :host {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            [name="camera"] {
                width: 22.5rem;
                height: 25rem;
            }

            button {
                width: 8rem;
            }
        `,
                ],
            }]
    }], function () { return []; }, { photoAccepted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], hasPhoto: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.has-photo']
        }] }); })();


/***/ }),

/***/ "DjF3":
/*!************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/events/src/lib/event.utilities.ts ***!
  \************************************************************************************************/
/*! exports provided: generateEventForm, isNotEmpty, isFuture, setMockBookingStartDatetime, rulesForSpace, durationGreaterThanOrEqual, stringToMinutes, statusFromBookings, getFreeBookingSlots, getNextFreeBookingSlot, replaceBookings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateEventForm", function() { return generateEventForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNotEmpty", function() { return isNotEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFuture", function() { return isFuture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMockBookingStartDatetime", function() { return setMockBookingStartDatetime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rulesForSpace", function() { return rulesForSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationGreaterThanOrEqual", function() { return durationGreaterThanOrEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToMinutes", function() { return stringToMinutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusFromBookings", function() { return statusFromBookings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFreeBookingSlots", function() { return getFreeBookingSlots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextFreeBookingSlot", function() { return getNextFreeBookingSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceBookings", function() { return replaceBookings; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "w8Fe");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");



const MINUTE = 1;
const HOUR = 60;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;
const MONTH = 30 * DAY;
const DURATION_MAP = {
    month: MONTH,
    months: MONTH,
    week: WEEK,
    weeks: WEEK,
    day: DAY,
    days: DAY,
    hour: HOUR,
    hours: HOUR,
    minute: MINUTE,
    minutes: MINUTE,
};
let BOOKING_DATE = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["add"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["setMinutes"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["setHours"])(new Date(), 6), 0), { days: -1 });
function generateEventForm(event) {
    const form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
        id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](event.id),
        host: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](event.host || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
        organiser: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](event.organiser || {}, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
        creator: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](event.creator, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
        calendar: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](event.calendar),
        attendees: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](event.attendees || []),
        resources: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](event.resources || []),
        title: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](event.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
        body: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](event.body),
        private: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](event.private),
        date: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](event.date, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, isFuture]),
        duration: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](event.duration),
        all_day: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](event.all_day),
        recurring: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](event.recurring),
        recurrence: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](event.recurrence),
        recurring_master_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](event.recurring_master_id),
        master: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](event.master),
        attachments: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](event.attachments),
        catering: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](event.extension_data.catering || []),
        // has_catering: new FormControl(event.has_catering || false),
        visitor_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](event.extension_data.visitor_type),
        location: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](event.location),
        needs_space: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](true),
        needs_parking: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](event.needs_parking || false),
        system: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](event.system),
    });
    form.controls.organiser.valueChanges.subscribe((o) => {
        form.controls.host.setValue(o === null || o === void 0 ? void 0 : o.email);
    });
    return form;
}
/** Array is not empty */
function isNotEmpty(control) {
    if (Array.isArray(control.value) && !control.value.length) {
        return { isNotEmpty: true };
    }
    return null;
}
/** Check that date in unix ms is in the future */
function isFuture(control) {
    if (control.value !== undefined && Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isBefore"])(new Date(control.value), new Date())) {
        return { isFuture: true };
    }
    return null;
}
/**
 * Set the initial time used for generating mock bookings
 * @param time New initial time as ms from UTC epoch
 */
function setMockBookingStartDatetime(time) {
    BOOKING_DATE = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfMinute"])(new Date(time));
}
/**
 * Get booking rules for the given user and space
 * @param user User to determine applicable rules
 * @param space Space to get rules for
 * @param time Booking start time in ms since UTC epoch
 * @param rules List of booking rules for the building
 */
function rulesForSpace(options) {
    if (!options) {
        throw Error('Options are needed to check for rule matches');
    }
    const space_rules_for_user = {
        auto_approve: true,
        hide: true,
    };
    /* istanbul ignore else */
    if (options.space) {
        for (const type of Object.keys(options.rules)) {
            if (options.rules.hasOwnProperty(type) &&
                options.rules[type] instanceof Array &&
                options.space.zones.find((zone) => zone === type)) {
                for (const rule_block of options.rules[type]) {
                    /* istanbul ignore else */
                    if (checkRules({
                        user: options.user,
                        space: options.space,
                        time: options.time,
                        recurr_end: options.recurr_end,
                        duration: options.duration,
                        rules: rule_block.conditions,
                    })) {
                        const ruleset = rule_block.rules;
                        const conditions = rule_block.conditions;
                        space_rules_for_user.hide = false;
                        /* istanbul ignore else */
                        if (conditions.max_length) {
                            space_rules_for_user.max_length = stringToMinutes(conditions.max_length);
                        }
                        /* istanbul ignore else */
                        if (conditions.min_length) {
                            space_rules_for_user.min_length = stringToMinutes(conditions.min_length);
                        }
                        // NOTE: use max_length in conditions instead of book_length in rules
                        // if (ruleset.book_length) {
                        //     space_rules_for_user.max_length = stringToMinutes(ruleset.book_length as string);
                        // }
                        /* istanbul ignore else */
                        if (ruleset.auto_approve !== undefined) {
                            space_rules_for_user.auto_approve = ruleset.auto_approve;
                        }
                        break;
                    }
                }
            }
            /* istanbul ignore else */
            if (!space_rules_for_user.hide) {
                break;
            }
        }
    }
    return space_rules_for_user;
}
/**
 * Check if user matches the given ruleset
 * @param user User to determine applicable rules
 * @param space Space to get rules for
 * @param time Booking start time in ms since UTC epoch
 * @param rules List of booking rules for the building
 */
function checkRules(options) {
    /* istanbul ignore else */
    if (options.rules) {
        const time = new Date(options.time);
        const recurr = options.recurr_end ? new Date(options.recurr_end) : new Date();
        const count = Object.keys(options.rules).length;
        let matches = 0;
        for (const key of Object.keys(options.rules)) {
            let counter = 0;
            const condition = options.rules[key] instanceof Array
                ? options.rules[key]
                : [options.rules[key]];
            switch (key) {
                // case 'groups':
                //     /* istanbul ignore else */
                //     if (options.user && options.user.groups) {
                //         counter = 0;
                //         condition.forEach((i) =>
                //             options.user.groups.find((j) => j === i) ? counter++ : null
                //         );
                //         /* istanbul ignore else */
                //         if (counter > 0) {
                //             matches++;
                //         }
                //     }
                //     break;
                // case 'locations':
                //     /* istanbul ignore else */
                //     if (options.user && options.user.location) {
                //         counter = 0;
                //         condition.forEach((i) =>
                //             (options.user.last_location.name || '').indexOf(i) >= 0
                //                 ? counter++
                //                 : null
                //         );
                //         /* istanbul ignore else */
                //         if (counter >= options.rules[key].length) {
                //             matches++;
                //         }
                //     }
                //     break;
                case 'is_before':
                    /* istanbul ignore else */
                    if (options.time) {
                        const duration = stringToMinutes(condition[0]);
                        const check = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["add"])(new Date(), { minutes: duration });
                        let match = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isBefore"])(time, check);
                        /* istanbul ignore else */
                        if (recurr) {
                            match = match && Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isBefore"])(recurr, check);
                        }
                        matches += match ? 1 : 0;
                    }
                    break;
                case 'is_after':
                    /* istanbul ignore else */
                    if (options.time) {
                        const duration = stringToMinutes(condition[0]);
                        const check = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["add"])(new Date(), { minutes: duration });
                        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isAfter"])(time, check)) {
                            matches++;
                        }
                    }
                    break;
                case 'min_length':
                    /* istanbul ignore else */
                    if (options.duration &&
                        durationGreaterThanOrEqual(options.duration, condition[0])) {
                        matches++;
                    }
                    break;
                case 'max_length':
                    /* istanbul ignore else */
                    if (options.duration &&
                        durationGreaterThanOrEqual(condition[0], options.duration)) {
                        matches++;
                    }
                    break;
            }
        }
        return matches >= count;
    }
    return false;
}
/**
 * Whether the first input is greater than the last. Converts duration strings into minutes
 * @param duration_1 First input can be a number in minutes or a duration string e.g. `1 hour`
 * @param duration_2 Second input can be a number in minutes or a duration string e.g. `30 minutes`
 */
function durationGreaterThanOrEqual(duration_1, duration_2) {
    const first = typeof duration_1 === 'string' ? stringToMinutes(duration_1) : duration_1;
    const second = typeof duration_2 === 'string' ? stringToMinutes(duration_2) : duration_2;
    return first >= second;
}
/**
 * Conver time string into minutes
 * @param str timestring e.g. `'1 day'`, `'15 minutes'`, `'2 weeks'`
 */
function stringToMinutes(str) {
    const parts = str.split(' ');
    return +parts[0] * DURATION_MAP[parts[1]];
}
/**
 * Get current status within bookings
 * @param bookings List of bookings
 * @param host Host of the new event
 * @param date Datetime of the new event
 */
function statusFromBookings(bookings, bookable, requestable, date = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getTime"])(new Date())) {
    const free_slots = getFreeBookingSlots(bookings);
    const now = new Date(date);
    const next_free_slot = free_slots.find((slot) => {
        const start = new Date(slot.start);
        const end = new Date(slot.end);
        return Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isAfter"])(start, now) || Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["timePeriodsIntersect"])(date, date, slot.start, slot.end);
    });
    const start = new Date(next_free_slot.start);
    const end = new Date(next_free_slot.end);
    const currently_free = Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["timePeriodsIntersect"])(date, date, next_free_slot.start, next_free_slot.end);
    const time_until_next_block = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["formatDuration"])({
        minutes: currently_free ? Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["differenceInMinutes"])(end, now) : Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["differenceInMinutes"])(start, now),
    });
    const free_tomorrow = !currently_free && !Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameDay"])(start, now);
    const free_today = currently_free && !Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameDay"])(end, now);
    return {
        status: !bookable
            ? 'Not Bookable'
            : currently_free
                ? requestable
                    ? 'Available by Request'
                    : 'Available'
                : 'Meeting in Progress',
        available_until: free_today
            ? 'No meetings today'
            : currently_free
                ? `Free until ${Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(end, 'h:mm B')}(${time_until_next_block})`
                : free_tomorrow
                    ? 'Unavailable today'
                    : `Free at ${Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(start, 'h:mm B')}(${time_until_next_block})`,
    };
}
/**
 * Generate a list of free time slots between the given bookings
 * @param list List of bookings to find slots between
 * @param min_size Minimum length of a free slot in minutes
 */
function getFreeBookingSlots(list, min_size = 30) {
    /* istanbul ignore else */
    if (!list) {
        return [
            {
                start: 0,
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfMinute"])(new Date()).getTime() * 10,
            },
        ];
    }
    const slots = [];
    let start = new Date(0);
    list.sort((a, b) => a.date - b.date);
    for (const booking of list) {
        const bkn_start = new Date(booking.date);
        const bkn_end = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["add"])(bkn_start, { minutes: booking.duration });
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isAfter"])(bkn_start, start)) {
            const diff = Math.abs(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["differenceInMinutes"])(bkn_start, start));
            /* istanbul ignore else */
            if (diff >= min_size) {
                slots.push({ start: start.valueOf(), end: bkn_start.valueOf() });
            }
            start = bkn_end;
        }
        else if (Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfMinute"])(start).getTime() === Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfMinute"])(bkn_start).getTime()) {
            start = bkn_end;
        }
    }
    slots.push({
        start: start.getTime(),
        end: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfMinute"])(new Date()).getTime() * 10,
    });
    return slots;
}
/**
 * Get the next free time slot from the given bookings
 * @param list List of bookings to find the next slot
 * @param date Date to find next slot after in ms since UTC epoch
 * @param min_size Minimum length of the free slot in minutes
 */
function getNextFreeBookingSlot(list, date = new Date().valueOf(), min_size = 30) {
    const slots = getFreeBookingSlots(list, min_size);
    const time = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["add"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfMinute"])(new Date(date)), { seconds: 1 });
    for (const block of slots) {
        const start = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfMinute"])(new Date(block.start));
        const end = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfMinute"])(new Date(block.end));
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isAfter"])(start, time)) {
            return block;
        }
        else if (Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isBefore"])(time, end)) {
            const duration = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["differenceInMinutes"])(end, time);
            /* istanbul ignore else */
            if (duration >= min_size) {
                return block;
            }
        }
    }
    return slots[slots.length - 1];
}
function replaceBookings(list, new_bookings, filter_options) {
    const from = filter_options.from;
    const to = filter_options.to;
    const filtered_list = list.filter((booking) => {
        const start = new Date(booking.date);
        const end = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addMinutes"])(start, booking.duration);
        return (!booking.resources.find((space) => space.email === filter_options.space) ||
            !Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["timePeriodsIntersect"])(from, to, start.valueOf(), end.valueOf()));
    });
    const updated_list = filtered_list.concat(new_bookings);
    updated_list.sort((a, b) => a.date - b.date);
    return Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["unique"])(updated_list, 'id');
}


/***/ }),

/***/ "Ey1g":
/*!**********************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/mocks/src/lib/realtime/desks.ts ***!
  \**********************************************************************************************/
/*! exports provided: MockLocationServicesModule, createLocationServicesModule, updateLocations, generateLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockLocationServicesModule", function() { return MockLocationServicesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLocationServicesModule", function() { return createLocationServicesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLocations", function() { return updateLocations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateLocation", function() { return generateLocation; });
/* harmony import */ var ts_md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-md5 */ "7dy/");
/* harmony import */ var ts_md5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ts_md5__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _api_zone_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/zone.data */ "MNob");
/* harmony import */ var _api_users_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/users.data */ "QgMi");




class MockLocationServicesModule {
    constructor() {
        /** Overview of the zones */
        this.overview = {};
    }
    $locate_user(email, username) { }
}
function padZero(no, len = 3) {
    let str = `${no}`;
    while (str.length < len) {
        str = '0' + str;
    }
    return str;
}
function createLocationServicesModule(space, overrides = {}) {
    const mod = new MockLocationServicesModule();
    for (const lvl of _api_zone_data__WEBPACK_IMPORTED_MODULE_2__["MOCK_LEVELS"]) {
        mod.overview[lvl.id] = {
            desk_count: 100,
            desk_usage: 0,
            device_capacity: 100,
            device_count: 0,
            estimated_people: 0,
            percentage_use: 0,
            recommendation: 10000,
        };
        mod[`${lvl.id}:desk_ids`] = new Array(mod.overview[lvl.id].desk_count)
            .fill(0)
            .map((_, idx) => `table-${lvl.number}.${padZero(idx)}`);
        mod[`${lvl.id}`] = { value: [] };
    }
    updateLocations(mod, _api_zone_data__WEBPACK_IMPORTED_MODULE_2__["MOCK_LEVELS"]);
    setInterval(() => updateLocations(mod, _api_zone_data__WEBPACK_IMPORTED_MODULE_2__["MOCK_LEVELS"]), 60 * 1000);
    return mod;
}
function updateLocations(mod, levels) {
    for (const lvl of levels) {
        mod[lvl.id] = {
            value: new Array(Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["predictableRandomInt"])(20))
                .fill(0)
                .map(() => generateLocation(lvl, mod[`${lvl.id}:desk_ids`])),
        };
    }
}
function generateLocation(lvl, desks, users = _api_users_data__WEBPACK_IMPORTED_MODULE_3__["MOCK_STAFF"]) {
    const fixed = Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["predictableRandomInt"])(9999) % 3 === 0;
    return fixed
        ? {
            location: 'desk',
            at_location: Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["predictableRandomInt"])(9999) % 5 !== 0,
            map_id: desks[Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["predictableRandomInt"])(desks.length)],
            mac: ts_md5__WEBPACK_IMPORTED_MODULE_0__["Md5"].hashStr(users[Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["predictableRandomInt"])(users.length)].email),
            level: lvl.id,
            building: lvl.parent_id,
        }
        : {
            location: 'wireless',
            coordinates_from: 'bottom-left',
            x: Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["predictableRandomInt"])(1000) / 10,
            y: Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["predictableRandomInt"])(1000) / 10,
            lon: 55.27476066828535,
            lat: 25.20106100633537,
            s2_cell_id: '3e5f4281459c',
            mac: ts_md5__WEBPACK_IMPORTED_MODULE_0__["Md5"].hashStr(users[Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["predictableRandomInt"])(users.length)].email),
            variance: 9.62534032222287,
            last_seen: Math.floor(new Date().valueOf() / 1000),
            map_width: 100,
            map_height: 100,
        };
}


/***/ }),

/***/ "F0vd":
/*!***********************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/common/src/lib/base-api.class.ts ***!
  \***********************************************************************************************/
/*! exports provided: BaseDataClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseDataClass", function() { return BaseDataClass; });
class BaseDataClass {
    constructor(raw_data) {
        /** Map of local property names to server ones */
        this._server_names = {};
        this.id = raw_data.id || raw_data.zone_id || raw_data.email || '';
        this.name = raw_data.name || '';
        this.email = (raw_data.email || '').toLowerCase();
    }
    /**
     * Convert object into plain object
     */
    toJSON(with_changes = true) {
        const obj = Object.assign({}, this);
        // Remove local private members
        // Convert remaining members to be public
        const keys = Object.keys(obj);
        for (const key of keys) {
            if (key[0] === '_') {
                const new_key = this._server_names[key.substr(1)] || key.substr(1);
                obj[new_key] = obj[key];
                delete obj[key];
            }
            else if (obj[key] === undefined) {
                delete obj[key];
            }
        }
        return obj;
    }
    /**
     * Make a copy of this object
     */
    clone() {
        return new BaseDataClass(this);
    }
    /**
     * Make a copy of this object without identification data
     */
    duplicate() {
        return new BaseDataClass(Object.assign(Object.assign({}, this), { id: null, email: null }));
    }
}


/***/ }),

/***/ "FGQ9":
/*!**********************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/user-avatar/user-avatar.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: UserAvatarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAvatarComponent", function() { return UserAvatarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _users_src_lib_user_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../users/src/lib/user.class */ "xuqh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acaprojects/ngx-pipes */ "81Qw");





function UserAvatarComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.initials);
} }
function UserAvatarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserAvatarComponent_div_0_div_1_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("user-id", ctx_r0.user.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.user.photo)("ngIfElse", _r1);
} }
function UserAvatarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "safe");
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, ctx_r2.user.photo, "resource"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class UserAvatarComponent {
    get initials() {
        if (!this.user) {
            return 'NA';
        }
        const parts = this.user.name.split(' ');
        return parts.length > 1
            ? `${parts[0][0]}${parts[parts.length - 1][0]}`
            : this.user.name.slice(0, 2);
    }
}
UserAvatarComponent.ɵfac = function UserAvatarComponent_Factory(t) { return new (t || UserAvatarComponent)(); };
UserAvatarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserAvatarComponent, selectors: [["a-user-avatar"]], inputs: { user: "user" }, decls: 3, vars: 1, consts: [["class", "user-avatar", 4, "ngIf"], ["image_state", ""], [1, "user-avatar"], ["class", "initials", 4, "ngIf", "ngIfElse"], [1, "initials"], [3, "src"]], template: function UserAvatarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserAvatarComponent_div_0_Template, 2, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserAvatarComponent_ng_template_1_Template, 2, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_3__["ɵa"]], styles: [".user-avatar[_ngcontent-%COMP%] {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            height: 2em;\n            width: 2em;\n            border-radius: 100%;\n            background-color: #f0f0f0;\n            overflow: hidden;\n        }\n\n        .initials[_ngcontent-%COMP%] {\n            font-size: 1em;\n            color: rgba(#000, .35);\n            text-transform: uppercase;\n        }\n\n        img[_ngcontent-%COMP%] {\n            height: 100%;\n            width: 100%;\n        }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserAvatarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-user-avatar',
                template: `
        <div class="user-avatar" *ngIf="user" [attr.user-id]="user.id">
            <div class="initials" *ngIf="!user.photo; else image_state">{{ initials }}</div>
        </div>
        <ng-template #image_state>
            <img [src]="user.photo | safe: 'resource'" />
        </ng-template>
    `,
                styles: [`
        .user-avatar {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 2em;
            width: 2em;
            border-radius: 100%;
            background-color: #f0f0f0;
            overflow: hidden;
        }

        .initials {
            font-size: 1em;
            color: rgba(#000, .35);
            text-transform: uppercase;
        }

        img {
            height: 100%;
            width: 100%;
        }
    `]
            }]
    }], null, { user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "G8CV":
/*!***********************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/common/src/lib/vorlon.service.ts ***!
  \***********************************************************************************************/
/*! exports provided: VorlonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VorlonService", function() { return VorlonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ "/It1");
/* harmony import */ var _base_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.class */ "U6W6");





class VorlonService extends _base_class__WEBPACK_IMPORTED_MODULE_3__["BaseClass"] {
    constructor() {
        super();
    }
    /**
     * Initailise service
     */
    init() {
        if (!this.parent || !this.parent.has_settings || !this.parent.Organisation.details) {
            return this.timeout('init', () => this.init());
        }
        this.load();
    }
    load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const org = this.parent.Organisation.details;
            const system = org.setting('vorlon_system');
            if (system) {
                const module = Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["getModule"])(system, 'Vorlon');
                if (module) {
                    const binding = module.binding('enabled');
                    this.subscription('binding', binding.bind());
                    this.subscription('binding_value', binding.listen().subscribe((state) => {
                        state ? this.injectVorlonScript() : this.removeVorlonScript();
                    }));
                }
            }
        });
    }
    injectVorlonScript() {
        this.removeVorlonScript();
        this._script = document.createElement('script');
        const org = this.parent.Organisation.details;
        const url = org.setting('vorlon_url');
        this._script.src = url || `./assets/vorlon.js`;
        document.head.appendChild(this._script);
    }
    removeVorlonScript() {
        if (this._script) {
            this._script.parentNode.removeChild(this._script);
            delete this._script;
            this._script = null;
        }
    }
}
VorlonService.ɵfac = function VorlonService_Factory(t) { return new (t || VorlonService)(); };
VorlonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VorlonService, factory: VorlonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VorlonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "GrKa":
/*!**********************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/users/src/lib/people.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: PeopleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleService", function() { return PeopleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");




class PeopleService extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["BaseAPIService"] {
    constructor() {
        super();
        this._name = 'People';
        this._api_route = 'people';
        this._compare = (a, b) => !a.id.localeCompare(b.id) || !a.email.localeCompare(b.email);
    }
    search(search) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.query({ q: search });
        });
    }
    locate(email) {
        return this.show(email);
    }
}
PeopleService.ɵfac = function PeopleService_Factory(t) { return new (t || PeopleService)(); };
PeopleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PeopleService, factory: PeopleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PeopleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "HTl7":
/*!**********************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/users/src/lib/user.utilities.ts ***!
  \**********************************************************************************************/
/*! exports provided: USER_DOMAIN, generateMockUser, generateUserForm, generateGuestForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_DOMAIN", function() { return USER_DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateMockUser", function() { return generateMockUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateUserForm", function() { return generateUserForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateGuestForm", function() { return generateGuestForm; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");


let USER_COUNT = 0;
let USER_DOMAIN = 'acaprojects.com';
const USER_EMAILS = [];
/**
 * Generate raw mock data for a user
 * @param id Forced ID for the mock
 * @param name Forced name for the user
 * @param external Whether user is external of the organisation
 */
function generateMockUser(id, name, external) {
    if (!id) {
        id = `user-${USER_COUNT++}`;
    }
    if (!name) {
        name = `User ${USER_COUNT}`;
    }
    if (external === undefined) {
        external = !(Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["predictableRandomInt"])(99999) % 2);
    }
    const organisation = external ? `Fake Co.` : USER_DOMAIN.split('.')[0];
    let delegates = [];
    const delegate_count = Math.min(Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["predictableRandomInt"])(4) + 1, USER_EMAILS.length);
    for (let i = 0; i < delegate_count; i++) {
        delegates.push(USER_EMAILS[Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["predictableRandomInt"])(USER_EMAILS.length)]);
    }
    delegates = Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["unique"])(delegates);
    const email = `${name.split(' ').join('.').toLowerCase()}@${external ? 'not-' : ''}${USER_DOMAIN}`;
    USER_EMAILS.push(email);
    return {
        id,
        name,
        first_name: name.split(' ')[0],
        last_name: name.split(' ')[1],
        email,
        phone: `(02) 4567 8901`,
        visitor: external,
        organisation: {
            id: organisation.split(' ').join('.').toLowerCase(),
            name: organisation,
        },
        department: `Department ${Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["predictableRandomInt"])(10)}`,
        staff_code: Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["predictableRandomInt"])(999999),
        delegates,
        image: `${id}.png`,
    };
}
/**
 * Generate form fields for the given user
 * @param user User to generate form for
 */
function generateUserForm(user) {
    if (!user) {
        throw Error('No user passed');
    }
    const fields = {
        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](user.name || ''),
        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](user.email || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
        organisation: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](user.organisation || '', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
        phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](user.phone || ''),
        assistance_required: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](user.assistance_required || false),
    };
    // Generate form group for the user
    const form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"](fields);
    return form;
}
function generateGuestForm(user, host = '') {
    const fields = {
        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](user.name || ''),
        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](user.email || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
        organisation: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](user.organisation || '', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
        phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](user.phone || ''),
        host: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](host || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
    };
    // Generate form group for the guest
    const form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"](fields);
    return form;
}


/***/ }),

/***/ "HVAD":
/*!*************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/organisation/src/lib/zone.class.ts ***!
  \*************************************************************************************************/
/*! exports provided: Zone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zone", function() { return Zone; });
class Zone {
    constructor(raw_data = {}) {
        this.id = raw_data.id || '';
        this.name = raw_data.name || '';
        this.level = raw_data.level;
    }
}


/***/ }),

/***/ "ILxS":
/*!**********************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/popout-menu/popout-menu.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: PopoutMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoutMenuComponent", function() { return PopoutMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");



function PopoutMenuComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoutMenuComponent_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const item_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r3.action.emit(item_r1.id); return ctx_r3.show = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx_r0.show ? -110 * i_r2 - 60 + "%" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", item_r1);
} }
const _c0 = function (a1) { return { class: "material-icons", content: a1 }; };
class PopoutMenuComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["BaseClass"] {
    constructor() {
        super(...arguments);
        /** List of available actions */
        this.actions = [];
        /** Emitter for user actions */
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    close() {
        this.timeout('close', () => {
            this.show = false;
        });
    }
}
PopoutMenuComponent.ɵfac = function PopoutMenuComponent_Factory(t) { return ɵPopoutMenuComponent_BaseFactory(t || PopoutMenuComponent); };
PopoutMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopoutMenuComponent, selectors: [["a-popout-menu"]], inputs: { actions: "actions" }, outputs: { action: "action" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 6, consts: [["mat-icon-button", "", "class", "small shadow", 3, "top", "click", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", 3, "click"], [3, "icon"], ["mat-icon-button", "", 1, "small", "shadow", 3, "click"]], template: function PopoutMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PopoutMenuComponent_button_0_Template, 2, 3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoutMenuComponent_Template_button_click_1_listener() { return ctx.show = !ctx.show; })("click", function PopoutMenuComponent_Template_button_click_1_listener() { return ctx.show ? ctx.close() : ""; }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.actions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.show ? "add" : "more_vert"));
    } }, styles: ["[_nghost-%COMP%] {\n                position: relative;\n            }\n\n            app-icon[_ngcontent-%COMP%] {\n                transition: transform 200ms;\n            }\n\n            button[_ngcontent-%COMP%] {\n                background-color: #fff;\n                color: rgba(#000, 0.85);\n                font-size: 1.25rem;\n                height: 2.5em;\n                width: 2.5em;\n            }\n\n            button.show[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n                transform: rotate(45deg);\n            }\n\n            button.small[_ngcontent-%COMP%] {\n                position: absolute;\n                font-size: 1rem;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%);\n                transition: top 200ms, left 200ms;\n            }"] });
const ɵPopoutMenuComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](PopoutMenuComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoutMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-popout-menu',
                template: `
        <button
            mat-icon-button
            class="small shadow"
            *ngFor="let item of actions; let i = index"
            [style.top]="show ? -110 * i - 60 + '%' : ''"
            (click)="action.emit(item.id); show = false"
        >
            <app-icon [icon]="item"></app-icon>
        </button>
        <button
            mat-icon-button
            [class.show]="show"
            (click)="show = !show"
            (window:click)="show ? close() : ''"
        >
            <app-icon
                [icon]="{
                    class: 'material-icons',
                    content: show ? 'add' : 'more_vert'
                }"
            ></app-icon>
        </button>
    `,
                styles: [
                    `
            :host {
                position: relative;
            }

            app-icon {
                transition: transform 200ms;
            }

            button {
                background-color: #fff;
                color: rgba(#000, 0.85);
                font-size: 1.25rem;
                height: 2.5em;
                width: 2.5em;
            }

            button.show app-icon {
                transform: rotate(45deg);
            }

            button.small {
                position: absolute;
                font-size: 1rem;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                transition: top 200ms, left 200ms;
            }
        `,
                ],
            }]
    }], null, { actions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "JpQ1":
/*!***********************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/mocks/src/lib/api/events.mock.ts ***!
  \***********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/ts-client */ "/It1");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _events_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events.data */ "dZoG");
/* harmony import */ var _users_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.data */ "QgMi");




Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__["registerMockEndpoint"])({
    path: '/api/staff/v1/events',
    metadata: {},
    method: 'GET',
    callback: (_) => {
        const events = _events_data__WEBPACK_IMPORTED_MODULE_2__["MOCK_EVENTS"].filter((event) => !!event.attendees.find((user) => user.email === _users_data__WEBPACK_IMPORTED_MODULE_3__["ACTIVE_USER"].email));
        return events;
    },
});
Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__["registerMockEndpoint"])({
    path: '/api/staff/v1/events',
    metadata: {},
    method: 'POST',
    callback: (request) => {
        const new_event = Object.assign(Object.assign({}, request.body), { id: `-cal-event-${Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["predictableRandomInt"])(999)}` });
        new_event.attendees.forEach(user => {
            if (user.zones) {
                user.resource = true;
            }
        });
        _events_data__WEBPACK_IMPORTED_MODULE_2__["MOCK_EVENTS"].push(new_event);
        return new_event;
    },
});
Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__["registerMockEndpoint"])({
    path: '/api/staff/v1/events/:id',
    metadata: {},
    method: 'GET',
    callback: (request) => {
        const item = _events_data__WEBPACK_IMPORTED_MODULE_2__["MOCK_EVENTS"].find((event) => event.id === request.route_params.id);
        if (item) {
            return item;
        }
        throw { status: 404, message: 'Event not found' };
    },
});
Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__["registerMockEndpoint"])({
    path: '/api/staff/v1/events/:id',
    metadata: {},
    method: 'PATCH',
    callback: (request) => {
        const index = _events_data__WEBPACK_IMPORTED_MODULE_2__["MOCK_EVENTS"].findIndex((event) => event.id === request.route_params.id);
        if (index >= 0) {
            return _events_data__WEBPACK_IMPORTED_MODULE_2__["MOCK_EVENTS"].splice(index, 1, request.body);
        }
        throw { status: 404, message: 'Event not found' };
    },
});
Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__["registerMockEndpoint"])({
    path: '/api/staff/v1/events/:id/guests/:email/checkin',
    metadata: {},
    method: 'POST',
    callback: (request) => {
        const event = _events_data__WEBPACK_IMPORTED_MODULE_2__["MOCK_EVENTS"].find(event => event.id === request.route_params.id);
        if (event) {
            const checked_in = event.extension_data.checked_in || [];
            event.extension_data.checked_in = checked_in.concat([request.route_params.email]);
            return event;
        }
        throw { status: 404, message: 'Guest not found' };
    },
});


/***/ }),

/***/ "K1US":
/*!***************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/common/src/lib/common.ts ***!
  \***************************************************************************************/
/*! exports provided: BaseClass, BaseAPIService, GoogleAnalyticsService, HotkeysService, SettingsService, VorlonService, VERSION, ANIMATION_SHOW_ENTER_LEAVE, ANIMATION_SHOW_CONTRACT_EXPAND, toQueryString, setupCache, BaseDataClass, formatRecurrence, setAppName, log, getItemWithKeys, unique, randomInt, csvToJson, jsonToCsv, downloadFile, parseJWT, flatten, timePeriodsIntersect, predictableRandomInt, timeFormatString, is24HourTime, setNotifyOutlet, notify, notifySuccess, notifyError, notifyWarn, notifyInfo, setupPlace, mergeRoomConfig, roomConfigBuilder, DEFAULT_SETTINGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.class */ "U6W6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseClass", function() { return _base_class__WEBPACK_IMPORTED_MODULE_0__["BaseClass"]; });

/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ "1ol4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseAPIService", function() { return _base_service__WEBPACK_IMPORTED_MODULE_1__["BaseAPIService"]; });

/* harmony import */ var _google_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./google-analytics.service */ "kEdz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleAnalyticsService", function() { return _google_analytics_service__WEBPACK_IMPORTED_MODULE_2__["GoogleAnalyticsService"]; });

/* harmony import */ var _hotkeys_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hotkeys.service */ "Pq1o");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HotkeysService", function() { return _hotkeys_service__WEBPACK_IMPORTED_MODULE_3__["HotkeysService"]; });

/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings.service */ "vrEj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return _settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"]; });

/* harmony import */ var _vorlon_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vorlon.service */ "G8CV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VorlonService", function() { return _vorlon_service__WEBPACK_IMPORTED_MODULE_5__["VorlonService"]; });

/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./version */ "qep/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return _version__WEBPACK_IMPORTED_MODULE_6__["VERSION"]; });

/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./angular-animations */ "h6+u");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ANIMATION_SHOW_ENTER_LEAVE", function() { return _angular_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_SHOW_ENTER_LEAVE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ANIMATION_SHOW_CONTRACT_EXPAND", function() { return _angular_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_SHOW_CONTRACT_EXPAND"]; });

/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api */ "SQ91");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toQueryString", function() { return _api__WEBPACK_IMPORTED_MODULE_8__["toQueryString"]; });

/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./application */ "lhWS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setupCache", function() { return _application__WEBPACK_IMPORTED_MODULE_9__["setupCache"]; });

/* harmony import */ var _base_api_class__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./base-api.class */ "F0vd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseDataClass", function() { return _base_api_class__WEBPACK_IMPORTED_MODULE_10__["BaseDataClass"]; });

/* harmony import */ var _formatting__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./formatting */ "Xhi5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatRecurrence", function() { return _formatting__WEBPACK_IMPORTED_MODULE_11__["formatRecurrence"]; });

/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./general */ "3ePk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setAppName", function() { return _general__WEBPACK_IMPORTED_MODULE_12__["setAppName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "log", function() { return _general__WEBPACK_IMPORTED_MODULE_12__["log"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getItemWithKeys", function() { return _general__WEBPACK_IMPORTED_MODULE_12__["getItemWithKeys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unique", function() { return _general__WEBPACK_IMPORTED_MODULE_12__["unique"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "randomInt", function() { return _general__WEBPACK_IMPORTED_MODULE_12__["randomInt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csvToJson", function() { return _general__WEBPACK_IMPORTED_MODULE_12__["csvToJson"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jsonToCsv", function() { return _general__WEBPACK_IMPORTED_MODULE_12__["jsonToCsv"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return _general__WEBPACK_IMPORTED_MODULE_12__["downloadFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseJWT", function() { return _general__WEBPACK_IMPORTED_MODULE_12__["parseJWT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return _general__WEBPACK_IMPORTED_MODULE_12__["flatten"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timePeriodsIntersect", function() { return _general__WEBPACK_IMPORTED_MODULE_12__["timePeriodsIntersect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "predictableRandomInt", function() { return _general__WEBPACK_IMPORTED_MODULE_12__["predictableRandomInt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFormatString", function() { return _general__WEBPACK_IMPORTED_MODULE_12__["timeFormatString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "is24HourTime", function() { return _general__WEBPACK_IMPORTED_MODULE_12__["is24HourTime"]; });

/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./notifications */ "ztAP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setNotifyOutlet", function() { return _notifications__WEBPACK_IMPORTED_MODULE_13__["setNotifyOutlet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notify", function() { return _notifications__WEBPACK_IMPORTED_MODULE_13__["notify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notifySuccess", function() { return _notifications__WEBPACK_IMPORTED_MODULE_13__["notifySuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notifyError", function() { return _notifications__WEBPACK_IMPORTED_MODULE_13__["notifyError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notifyWarn", function() { return _notifications__WEBPACK_IMPORTED_MODULE_13__["notifyWarn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notifyInfo", function() { return _notifications__WEBPACK_IMPORTED_MODULE_13__["notifyInfo"]; });

/* harmony import */ var _placeos__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./placeos */ "UCR0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setupPlace", function() { return _placeos__WEBPACK_IMPORTED_MODULE_14__["setupPlace"]; });

/* harmony import */ var _room_configuration_interface__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./room-configuration.interface */ "BuE4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeRoomConfig", function() { return _room_configuration_interface__WEBPACK_IMPORTED_MODULE_15__["mergeRoomConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "roomConfigBuilder", function() { return _room_configuration_interface__WEBPACK_IMPORTED_MODULE_15__["roomConfigBuilder"]; });

/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./settings */ "U0kR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SETTINGS", function() { return _settings__WEBPACK_IMPORTED_MODULE_16__["DEFAULT_SETTINGS"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./types */ "mN87");
/* empty/unused harmony star reexport */



















/***/ }),

/***/ "M6W0":
/*!************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/mocks/src/lib/realtime/control.ts ***!
  \************************************************************************************************/
/*! exports provided: createSystemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSystemModule", function() { return createSystemModule; });
function createSystemModule(space, overrides = {}) {
    const mod = {
        name: 'Test System',
        connected: true,
        power: false,
        $power_on: function () {
            this.power = true;
        },
        $power_off: function () {
            this.power = false;
        }
    };
    mod.name = space.name;
    return mod;
}


/***/ }),

/***/ "MIKl":
/*!***********************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/users/src/lib/new-user-modal/new-user-modal.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: NewUserModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserModalComponent", function() { return NewUserModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.class */ "xuqh");
/* harmony import */ var _user_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.utilities */ "HTl7");






function NewUserModalComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "user-form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r0.form);
} }
function NewUserModalComponent_footer_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewUserModalComponent_footer_9_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.saveChanges(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewUserModalComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-spinner", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Saving attendee...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { type: "icon", class: "material-icons", content: "close" }; };
class NewUserModalComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["BaseClass"] {
    constructor(_data) {
        super();
        this._data = _data;
        /** Emitter for user action on the modal */
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.user = this._data.user || {};
        this.form = Object(_user_utilities__WEBPACK_IMPORTED_MODULE_4__["generateUserForm"])(this.user);
    }
    saveChanges() {
        this.form.markAllAsTouched();
        if (this.form.valid) {
            const new_user = new _user_class__WEBPACK_IMPORTED_MODULE_3__["User"](Object.assign(Object.assign({}, this.form.value), { type: 'external', visit_expected: !this.form.value.email.endsWith('place.tech') }));
            this.event.emit({ reason: 'done', metadata: new_user });
        }
    }
}
NewUserModalComponent.ɵfac = function NewUserModalComponent_Factory(t) { return new (t || NewUserModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
NewUserModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewUserModalComponent, selectors: [["new-user-modal"]], outputs: { event: "event" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 12, vars: 6, consts: [["mat-dialog-title", "", 1, "heading"], [1, "flex-1"], ["mat-icon-button", "", "mat-dialog-close", ""], [3, "icon"], ["class", "body", 4, "ngIf", "ngIfElse"], [4, "ngIf"], ["load_state", ""], [1, "body"], [3, "form"], ["mat-button", "", "mat-dialog-close", "", 1, "inverse"], ["mat-button", "", 3, "click"], [1, "info-block"], [1, "icon"], ["diameter", "32"], [1, "text"]], template: function NewUserModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NewUserModalComponent_div_7_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NewUserModalComponent_footer_9_Template, 5, 0, "footer", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NewUserModalComponent_ng_template_10_Template, 6, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx.user == null ? null : ctx.user.id) ? "Edit" : "Add", " External Attendee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, styles: [".body[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  min-height: 20em !important;\n  width: 100%;\n}\n\nfooter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 0.35em;\n  border-top: 1px solid #ccc;\n}\n\nfooter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 8em;\n}\n\n.icon[_ngcontent-%COMP%] {\n  height: 1.2em;\n  width: 1.2em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2em;\n}\n\n.content[_ngcontent-%COMP%] {\n  width: 16rem;\n  text-align: center;\n  font-size: 0.8em;\n}\n\napp-icon[_ngcontent-%COMP%] {\n  transition: font-size 200ms;\n}\n\n.close[_ngcontent-%COMP%] {\n  font-size: 1em;\n  cursor: pointer;\n}\n\n.close[_ngcontent-%COMP%]:hover   app-icon[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n}\n\nbutton[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  margin: 0 0.25em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvdXNlcnMvc3JjL2xpYi9uZXctdXNlci1tb2RhbC9uZXctdXNlci1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQUNGOztBQUFFO0VBQ0UsY0FBQTtBQUVKOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFDSTtFQUNFLGdCQUFBO0FBQ047O0FBSUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQURGIiwiZmlsZSI6ImxpYnMvdXNlcnMvc3JjL2xpYi9uZXctdXNlci1tb2RhbC9uZXctdXNlci1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAyMGVtICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuMzVlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG4gIGJ1dHRvbiB7XG4gICAgbWluLXdpZHRoOiA4ZW07XG4gIH1cbn1cblxuLmljb24ge1xuICBoZWlnaHQ6IDEuMmVtO1xuICB3aWR0aDogMS4yZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDJlbTtcbn1cblxuLmNvbnRlbnQge1xuICB3aWR0aDogMTZyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cblxuYXBwLWljb24ge1xuICB0cmFuc2l0aW9uOiBmb250LXNpemUgMjAwbXM7XG59XG5cbi5jbG9zZSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gICY6aG92ZXIge1xuICAgIGFwcC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgfVxuICB9XG59XG5cbmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbjogMCAwLjI1ZW07XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewUserModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'new-user-modal',
                templateUrl: './new-user-modal.component.html',
                styleUrls: ['./new-user-modal.component.scss'],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, { event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "MNob":
/*!*********************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/mocks/src/lib/api/zone.data.ts ***!
  \*********************************************************************************************/
/*! exports provided: MOCK_ORGS, MOCK_BUILDINGS, MOCK_LEVELS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOCK_ORGS", function() { return MOCK_ORGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOCK_BUILDINGS", function() { return MOCK_BUILDINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOCK_LEVELS", function() { return MOCK_LEVELS; });
const MOCK_ORGS = [
    {
        created_at: 1587057070,
        updated_at: 1587692680,
        name: 'PlaceOS',
        description: '',
        tags: 'org',
        count: 0,
        capacity: 0,
        parent_id: '',
        triggers: [],
        id: 'zone-EmWFTjuYExK',
    },
];
const MOCK_BUILDINGS = [
    {
        name: 'Sydney',
        description: '',
        tags: 'building',
        count: 0,
        capacity: 0,
        parent_id: 'zone-EmWFTjuYExK',
        triggers: [],
        id: 'bld-01',
    },
    {
        name: 'Brisbane',
        description: '',
        tags: 'building',
        count: 0,
        capacity: 0,
        parent_id: 'zone-EmWFTjuYExK',
        triggers: [],
        id: 'bld-02',
    },
    {
        name: 'Melbourne',
        description: '',
        tags: 'building',
        count: 0,
        capacity: 0,
        parent_id: 'zone-EmWFTjuYExK',
        triggers: [],
        id: 'bld-03',
    },
];
const levels = [
    'lvl-00',
    'lvl-01',
    'lvl-02',
    'lvl-03',
    'lvl-04',
    'lvl-05',
    'lvl-06',
];
const mockLevel = (id, idx, building) => {
    let map_id = id.substr(4);
    map_id = `https://s3-ap-southeast-2.amazonaws.com/os.place.tech/16012682998688307492.svg`;
    return {
        id: `${building.id}_${id}`,
        name: `Level ${id.endsWith('0') ? 'G' : idx}`,
        parent_id: building.id,
        description: '',
        tags: 'level',
        map_id,
        code: 'level code 12',
        type: 'staff floor',
        count: 5,
        capacity: 30,
        location: 'optional lat,long',
        display_name: '',
    };
};
const MOCK_LEVELS = MOCK_BUILDINGS.map((bld) => levels.map((level, idx) => mockLevel(level, idx, bld))).reduce((p, c) => p.concat(c), []);


/***/ }),

/***/ "NhjZ":
/*!********************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/time-field/time-field.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: TimeFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeFieldComponent", function() { return TimeFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "BQ33");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);






const _c0 = ["select"];
function TimeFieldComponent_mat_form_field_5_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r3.name, " ");
} }
function TimeFieldComponent_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TimeFieldComponent_mat_form_field_5_Template_mat_select_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.setValue($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TimeFieldComponent_mat_form_field_5_mat_option_3_Template, 2, 2, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.time)("disabled", ctx_r0.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.time_options);
} }
const _c1 = function (a2) { return { type: "icon", class: "material-icons", content: a2 }; };
class TimeFieldComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["BaseClass"] {
    constructor() {
        super(...arguments);
        /** Time step between each allowed time option */
        this.step = 15;
        /** Whether past times are allowed */
        this.no_past_times = true;
        /** String representing the currently set time */
        this.date = dayjs__WEBPACK_IMPORTED_MODULE_4__().valueOf();
        /** String representing the currently set time */
        this.time = dayjs__WEBPACK_IMPORTED_MODULE_4__().format('HH:mm');
    }
    ngOnInit() {
        this.show_select = true;
        this._time_options = this.generateAvailableTimes(this.date, !this.no_past_times, this.step);
        this.timeout('hide', () => (this.show_select = false));
    }
    ngOnChanges(changes) {
        if (changes.no_past_times || changes.step) {
            this._time_options = this.generateAvailableTimes(this.date, !this.no_past_times, this.step);
        }
    }
    /** Available time blocks for the selected date */
    get time_options() {
        const time = (this.time || '00:00').split(':');
        const date = dayjs__WEBPACK_IMPORTED_MODULE_4__(this.date)
            .hour(+time[0])
            .minute(+time[1]);
        if (date.minute() % 15 !== 0 &&
            !this._time_options.find((time) => time.id === date.format('HH:mm'))) {
            this._time_options.push({
                name: `${date.format(Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["timeFormatString"])())}`,
                id: date.format('HH:mm'),
            });
            this._time_options.sort((a, b) => `${a.id}`.localeCompare(`${b.id}`));
        }
        return this._time_options;
    }
    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    setValue(new_value) {
        this.time = new_value;
        if (this._onChange) {
            const time = (this.time || '00:00').split(':');
            const date = dayjs__WEBPACK_IMPORTED_MODULE_4__(this.date)
                .hour(+time[0])
                .minute(+time[1])
                .startOf('m');
            this._onChange(date.valueOf());
        }
    }
    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    writeValue(value) {
        this.date = value;
        let date = dayjs__WEBPACK_IMPORTED_MODULE_4__(this.date).startOf('m');
        date = date.minute(Math.ceil(date.minute() / 5) * 5);
        this.time = date.format('HH:mm');
        this._time_options = this.generateAvailableTimes(this.date, !this.no_past_times, this.step);
    }
    setDisabledState(disabled) {
        this.disabled = disabled;
    }
    /**
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param fn The callback function to register
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * Registers a callback function is called by the forms API on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    registerOnTouched(fn) {
        this._onTouch = fn;
    }
    /**
     * Show select field for time options
     */
    showSelect() {
        this.show_select = true;
        this.timeout('on_shown', () => {
            if (this.select_field) {
                this.select_field.focus();
                this.select_field.open();
                this.subscription('listen_close', this.select_field.openedChange.subscribe((state) => {
                    if (!state) {
                        this.show_select = false;
                    }
                }));
            }
        });
    }
    /**
     * Generate a list of time options for the given date
     * @param datestamp Date to generate options for
     * @param show_past Whether past times should be options
     */
    generateAvailableTimes(datestamp, show_past, step = 15) {
        const now = dayjs__WEBPACK_IMPORTED_MODULE_4__();
        let date = dayjs__WEBPACK_IMPORTED_MODULE_4__(datestamp);
        const blocks = [];
        if (show_past || date.isAfter(now, 'd')) {
            date = date.startOf('d');
        }
        else if (date.isAfter(now, 'm')) {
            date = now;
        }
        date = date.minute(Math.ceil(date.minute() / step) * step);
        const end = date.endOf('d');
        // Add options for the rest of the day
        while (date.isBefore(end, 'm')) {
            blocks.push({
                name: `${date.format(Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["timeFormatString"])())}`,
                id: date.format('HH:mm'),
            });
            date = date.add(step, 'm');
        }
        return blocks;
    }
}
TimeFieldComponent.ɵfac = function TimeFieldComponent_Factory(t) { return ɵTimeFieldComponent_BaseFactory(t || TimeFieldComponent); };
TimeFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimeFieldComponent, selectors: [["a-time-field"]], viewQuery: function TimeFieldComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.select_field = _t.first);
    } }, inputs: { step: "step", disabled: "disabled", no_past_times: "no_past_times" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => TimeFieldComponent),
                multi: true,
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 9, consts: [["role", "button", "form-field", "", "tabindex", "0", 1, "time-field", 3, "keydown.enter"], [1, "display", "truncate"], ["matInput", "", "type", "time", 3, "disabled", "ngModel", "ngModelChange"], [1, "icon", 3, "click"], [3, "icon"], ["appearance", "outline", 4, "ngIf"], ["appearance", "outline"], [3, "value", "disabled", "valueChange"], ["select", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function TimeFieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function TimeFieldComponent_Template_div_keydown_enter_0_listener() { return ctx.showSelect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimeFieldComponent_Template_input_ngModelChange_2_listener($event) { return ctx.setValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimeFieldComponent_Template_div_click_3_listener() { return ctx.showSelect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TimeFieldComponent_mat_form_field_5_Template, 4, 3, "mat-form-field", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.show_select ? "none" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled)("ngModel", ctx.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.show_select ? "arrow_drop_up" : "arrow_drop_down"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show_select);
    } }, styles: ["[_nghost-%COMP%] {\n  margin-bottom: 1em;\n  height: 2.75em;\n  width: 100%;\n}\n\n.time-field[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 2.75em;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  box-shadow: inset 0 0 0 1px #fff;\n  padding: 0.5em 0.25em;\n  transition: border 200ms, box-shadow 200ms;\n}\n\n.time-field[_ngcontent-%COMP%]:hover {\n  box-shadow: inset 0 0 0 1px #464646;\n  border-color: #464646;\n}\n\n.time-field[_ngcontent-%COMP%]:focus {\n  box-shadow: inset 0 0 0 1px var(--primary);\n  border-color: var(--primary);\n  outline-color: var(--primary);\n}\n\n.time-field[disabled=true][_ngcontent-%COMP%] {\n  pointer-events: none;\n  border-color: #f0f0f0;\n  color: #ccc;\n}\n\n.display[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 50%;\n  padding: 0.5em;\n}\n\n.icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 2em;\n  width: 2em;\n  min-height: 100%;\n}\n\napp-icon[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  margin-top: -0.25em;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvY29tcG9uZW50cy9zcmMvbGliL3RpbWUtZmllbGQvdGltZS1maWVsZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLDBDQUFBO0FBQ0Y7O0FBQUU7RUFDRSxtQ0FBQTtFQUNBLHFCQUFBO0FBRUo7O0FBQUU7RUFDRSwwQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFFSjs7QUFBRTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBRUo7O0FBRUE7RUFDRSxPQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQUNGIiwiZmlsZSI6ImxpYnMvY29tcG9uZW50cy9zcmMvbGliL3RpbWUtZmllbGQvdGltZS1maWVsZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBoZWlnaHQ6IDIuNzVlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50aW1lLWZpZWxkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyLjc1ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNmZmY7XG4gIHBhZGRpbmc6IDAuNWVtIDAuMjVlbTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDIwMG1zLCBib3gtc2hhZG93IDIwMG1zO1xuICAmOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggIzQ2NDY0NjtcbiAgICBib3JkZXItY29sb3I6ICM0NjQ2NDY7XG4gIH1cbiAgJjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHZhcigtLXByaW1hcnkpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgb3V0bGluZS1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIH1cbiAgJltkaXNhYmxlZD0ndHJ1ZSddIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBib3JkZXItY29sb3I6ICNmMGYwZjA7XG4gICAgY29sb3I6ICNjY2M7XG4gIH1cbn1cblxuLmRpc3BsYXkge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMC41ZW07XG59XG5cbi5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMmVtO1xuICB3aWR0aDogMmVtO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG5hcHAtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLXRvcDogLTAuMjVlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"] });
const ɵTimeFieldComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TimeFieldComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeFieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-time-field',
                templateUrl: './time-field.component.html',
                styleUrls: ['./time-field.component.scss'],
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => TimeFieldComponent),
                        multi: true,
                    },
                ],
            }]
    }], null, { step: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], no_past_times: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], select_field: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['select']
        }] }); })();


/***/ }),

/***/ "Pq1o":
/*!************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/common/src/lib/hotkeys.service.ts ***!
  \************************************************************************************************/
/*! exports provided: HotkeysService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotkeysService", function() { return HotkeysService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general */ "3ePk");




/** List of keys that cannot be in a combination by themselves or with each other */
const INVALID_STANDALONE_KEYS = ['control', 'shift', 'alt', 'meta', 'os'];
class HotkeysService {
    constructor() {
        /** Map of subjects which store press states of keys */
        this.keydown_states = {};
        /** Map of obserers for key state subjects */
        this.keydown_observers = {};
        /** List of keys at the end of a combination */
        this.combo_end = [];
        /** List of registered hotkey combinations */
        this.registered_combos = [];
        /** Counter for the number of keydown events. Used for checking order of key presses */
        this.counter = 0;
        window.addEventListener('keydown', (event) => {
            const code = this.mapKey((event.code || '').toLowerCase());
            if (this.last_down !== code) {
                if (!this.keydown_states[code]) {
                    this.keydown_states[code] = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
                    this.keydown_observers[code] = this.keydown_states[code].asObservable();
                }
                this.keydown_states[code].next(++this.counter);
                if (this.combo_end.indexOf(code) >= 0) {
                    event.preventDefault();
                }
                this.last_down = code;
            }
        });
        window.addEventListener('keyup', (event) => {
            const code = this.mapKey((event.code || '').toLowerCase());
            this.keydown_states[code].next(null);
            if (this.last_down === code) {
                this.last_down = null;
            }
        });
    }
    /**
     * Listen to the given key combination
     * @param combo Array of key codes to listen to or a hotkey string e.g. `Alt+Shift+KeyK`
     * @param next Callback for combination presses
     */
    listen(combo, next) {
        combo = (combo instanceof Array ? combo : combo.split('+'));
        const combination = combo.map(i => this.mapKey(i.toLowerCase()));
        if (combination.length > 0 && this.validCombination(combination)) {
            this.registered_combos.push(combination);
            const last_key = combination[combination.length - 1];
            if (!this.keydown_states[last_key]) {
                this.keydown_states[last_key] = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
                this.keydown_observers[last_key] = this.keydown_states[last_key].asObservable();
            }
            this.updateCombinationEndList();
            return this.keydown_observers[last_key].subscribe((count) => {
                if (count) {
                    const presses = [];
                    if (combination.length > 0) {
                        // Check that keys are pressed
                        for (const key of combination) {
                            const state = this.keydown_states[key];
                            presses.push(state ? state.getValue() || -1 : -1);
                        }
                        // Check that keys are pressed in the correct order
                        for (let i = 0; i < combination.length - 1; i++) {
                            if (presses[i] > presses[i + 1]) {
                                return;
                            }
                        }
                    }
                    const total = presses.reduce((a, v) => a + (v > 0 ? 1 : -1), 0);
                    if (total >= combination.length) {
                        next();
                    }
                }
            });
        }
        return null;
    }
    /**
     * Map key codes with multiple versions to simple form
     * @param code Code to transform
     */
    mapKey(code) {
        if (code.indexOf('alt') >= 0 || code.indexOf('shift') >= 0 || code.indexOf('control') >= 0) {
            return code.replace('left', '').replace('right', '');
        }
        return code;
    }
    /**
     * Update the list of the last keys in combinations to allow for prevent default actions on pre-existing hotkeys
     */
    updateCombinationEndList() {
        const key_list = [];
        for (const combo of this.registered_combos) {
            this.combo_end.push(combo[combo.length - 1]);
        }
        this.combo_end = Object(_general__WEBPACK_IMPORTED_MODULE_2__["unique"])(key_list);
    }
    /**
     * Checks if the given hotkey combination is allowed and valid
     * @param combo Array of key codes
     */
    validCombination(combo) {
        let non_meta = 0;
        for (const key of combo) {
            if (INVALID_STANDALONE_KEYS.indexOf(key) < 0) {
                non_meta++;
            }
        }
        return non_meta > 0;
    }
}
HotkeysService.ɵfac = function HotkeysService_Factory(t) { return new (t || HotkeysService)(); };
HotkeysService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HotkeysService, factory: HotkeysService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HotkeysService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Pw6A":
/*!******************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/map-pin.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: MapPinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPinComponent", function() { return MapPinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _interactive_map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive-map.component */ "lYMz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");




const _c0 = ["map-pin", ""];
function MapPinComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.message, " ");
} }
function MapPinComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MapPinComponent_ng_container_0_div_1_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapPinComponent_ng_container_0_Template__svg_svg_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.action(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.message && ctx_r0.show_message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("action", ctx_r0.action);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("fill", ctx_r0.fill)("stroke", ctx_r0.stroke);
} }
class MapPinComponent {
    constructor(_details) {
        this._details = _details;
        /** Message to display above the pin */
        this.message = this._details.message;
        /** Fill colour for the pin SVG */
        this.fill = this._details.fill || '#e53935';
        /** Stroke colour for the pin SVG */
        this.stroke = this._details.stroke || '#fff';
        /** Action to perform when clicking pin */
        this.action = this._details.action || null;
    }
    ngOnInit() {
        setTimeout(() => (this.show = true), 300);
        setTimeout(() => (this.show_message = true), 1000);
    }
}
MapPinComponent.ɵfac = function MapPinComponent_Factory(t) { return new (t || MapPinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_interactive_map_component__WEBPACK_IMPORTED_MODULE_1__["MAP_FEATURE_DATA"])); };
MapPinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapPinComponent, selectors: [["", "map-pin", ""]], attrs: _c0, decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "p-2 m-2 rounded bg-white text-gray-700 shadow", 4, "ngIf"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 380 560", "enable-background", "new 0 0 380 560", 0, "xml", "space", "preserve", 3, "click"], ["stroke-width", "25", "d", "M182.9,551.7c0,0.1,0.2,0.3,0.2,0.3S358.3,283,358.3,194.6c0-130.1-88.8-186.7-175.4-186.9\n            C96.3,7.9,7.5,64.5,7.5,194.6c0,88.4,175.3,357.4,175.3,357.4S182.9,551.7,182.9,551.7z M122.2,187.2c0-33.6,27.2-60.8,60.8-60.8\n            c33.6,0,60.8,27.2,60.8,60.8S216.5,248,182.9,248C149.4,248,122.2,220.8,122.2,187.2z"], [1, "p-2", "m-2", "rounded", "bg-white", "text-gray-700", "shadow"]], template: function MapPinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MapPinComponent_ng_container_0_Template, 5, 7, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["[_nghost-%COMP%] {\n                position: absolute;\n                bottom: 0;\n                left: 50%;\n                width: 24rem;\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n                transform: translateX(-50%);\n                z-index: -1;\n            }\n\n            div[_ngcontent-%COMP%] {\n                animation: fade-in-top 1s;\n            }\n\n            .action[_ngcontent-%COMP%] {\n                pointer-events: auto;\n            }\n\n            svg[_ngcontent-%COMP%] {\n                width: 2rem;\n                animation: fade-in-top 1s;\n            }\n\n            @keyframes fade-in-top {\n                0% {\n                    opacity: 0;\n                    transform: translateY(-100%)\n                }\n                100% {\n                    opacity: 1;\n                    transform translateY(0%);\n                }\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapPinComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[map-pin]',
                template: `
        <ng-container *ngIf="show">
            <div
                *ngIf="message && show_message"
                class="p-2 m-2 rounded bg-white text-gray-700 shadow"
            >
                {{ message }}
            </div>
            <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 380 560"
                enable-background="new 0 0 380 560"
                xml:space="preserve"
                [class.action]="action"
                (click)="action()"
            >
                <g>
                    <path
                        [style.fill]="fill"
                        [style.stroke]="stroke"
                        stroke-width="25"
                        d="M182.9,551.7c0,0.1,0.2,0.3,0.2,0.3S358.3,283,358.3,194.6c0-130.1-88.8-186.7-175.4-186.9
            C96.3,7.9,7.5,64.5,7.5,194.6c0,88.4,175.3,357.4,175.3,357.4S182.9,551.7,182.9,551.7z M122.2,187.2c0-33.6,27.2-60.8,60.8-60.8
            c33.6,0,60.8,27.2,60.8,60.8S216.5,248,182.9,248C149.4,248,122.2,220.8,122.2,187.2z"
                    />
                </g>
            </svg>
        </ng-container>
    `,
                styles: [
                    `
            :host {
                position: absolute;
                bottom: 0;
                left: 50%;
                width: 24rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                transform: translateX(-50%);
                z-index: -1;
            }

            div {
                animation: fade-in-top 1s;
            }

            .action {
                pointer-events: auto;
            }

            svg {
                width: 2rem;
                animation: fade-in-top 1s;
            }

            @keyframes fade-in-top {
                0% {
                    opacity: 0;
                    transform: translateY(-100%)
                }
                100% {
                    opacity: 1;
                    transform translateY(0%);
                }
            }
        `,
                ],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_interactive_map_component__WEBPACK_IMPORTED_MODULE_1__["MAP_FEATURE_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "QQt5":
/*!*****************************************************************!*\
  !*** ./src/app/ui/forms/booking-form/booking-form.component.ts ***!
  \*****************************************************************/
/*! exports provided: BookingFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingFormComponent", function() { return BookingFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/users */ "mjT4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _libs_components_src_lib_action_field_action_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../libs/components/src/lib/action-field/action-field.component */ "7u5P");
/* harmony import */ var _libs_components_src_lib_date_field_date_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../libs/components/src/lib/date-field/date-field.component */ "kD+q");
/* harmony import */ var _libs_components_src_lib_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../libs/components/src/lib/time-field/time-field.component */ "NhjZ");
/* harmony import */ var _libs_components_src_lib_duration_field_duration_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../libs/components/src/lib/duration-field/duration-field.component */ "gpkD");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _libs_components_src_lib_user_search_field_user_search_field_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../libs/components/src/lib/user-search-field/user-search-field.component */ "lfZe");
/* harmony import */ var _libs_components_src_lib_user_list_field_user_list_field_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../libs/components/src/lib/user-list-field/user-list-field.component */ "mnsz");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "mFH5");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "4xCi");





















function BookingFormComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Spaces: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "an-action-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onAction", function BookingFormComponent_div_0_div_1_Template_an_action_field_onAction_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.openSpacesModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r1.spaces);
} }
function BookingFormComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a-date-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookingFormComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Recurrence: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "an-action-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onAction", function BookingFormComponent_div_0_div_4_Template_an_action_field_onAction_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.openRecurrenceModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r3.recurrence);
} }
function BookingFormComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Start Time: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a-time-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookingFormComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Duration: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a-duration-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookingFormComponent_div_0_div_8_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Title is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookingFormComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BookingFormComponent_div_0_div_8_mat_error_8_Template, 2, 0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("error", ctx_r6.form.controls.title.invalid && ctx_r6.form.controls.title.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.form.controls.title.invalid);
} }
function BookingFormComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Host: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a-user-search-field", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookingFormComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Attendees: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a-user-list-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newUser", function BookingFormComponent_div_0_div_10_Template_a_user_list_field_newUser_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.openNewUserModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookingFormComponent_div_0_div_11_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r20.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r20.display, " ");
} }
function BookingFormComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Booking Type: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BookingFormComponent_div_0_div_11_mat_option_5_Template, 2, 2, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.booking_types);
} }
function BookingFormComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Catering: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "an-action-field", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onAction", function BookingFormComponent_div_0_div_12_Template_an_action_field_onAction_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.openCateringModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r10.catering);
} }
function BookingFormComponent_div_0_div_13_mat_form_field_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "textarea", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookingFormComponent_div_0_div_13_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "editor", 35);
} }
function BookingFormComponent_div_0_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Notes: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BookingFormComponent_div_0_div_13_mat_form_field_3_Template, 2, 0, "mat-form-field", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BookingFormComponent_div_0_div_13_ng_template_4_Template, 1, 0, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.use_html)("ngIfElse", _r24);
} }
function BookingFormComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookingFormComponent_div_0_div_1_Template, 4, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BookingFormComponent_div_0_div_3_Template, 4, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BookingFormComponent_div_0_div_4_Template, 4, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BookingFormComponent_div_0_div_6_Template, 4, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BookingFormComponent_div_0_div_7_Template, 4, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BookingFormComponent_div_0_div_8_Template, 9, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BookingFormComponent_div_0_div_9_Template, 4, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BookingFormComponent_div_0_div_10_Template, 4, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BookingFormComponent_div_0_div_11_Template, 6, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BookingFormComponent_div_0_div_12_Template, 4, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BookingFormComponent_div_0_div_13_Template, 6, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.id && ctx_r0.form.controls.id.value && ctx_r0.form.controls.space_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.recurrence);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.organiser);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.attendees);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.type && ctx_r0.booking_types.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.catering);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.body);
} }
class BookingFormComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["BaseClass"] {
    constructor(_settings, _dialog) {
        super();
        this._settings = _settings;
        this._dialog = _dialog;
    }
    /** Display string for the recurrence value of the booking */
    get recurrence() {
        return 'No Recurrence';
    }
    /** Display string for the catering value of the booking */
    get catering() {
        return 'No Catering';
    }
    /** Whether notes and description should use the HTML editor */
    get use_html() {
        return this._settings.get('app.booking.html_body') || false;
    }
    /** List of available types for bookings */
    get booking_types() {
        return this._settings.get('app.booking.booking_types') || [];
    }
    /** Display string for the list of active spaces */
    get spaces() {
        return ((this.form.controls.space_list.value || []).map(space => space.name).join(', ') ||
            'No Spaces selected');
    }
    /**
     * Open modal to change the space details for the booking
     */
    openSpacesModal() {
        console.log('Open Spaces Modal');
    }
    /**
     * Open modal to change the recurrence details for the booking
     */
    openRecurrenceModal() {
        console.log('Open Recurrence Modal');
    }
    /**
     * Open modal to change the recurrence details for the booking
     */
    openCateringModal() {
        console.log('Open Catering Modal');
    }
    /**
     * Open modal to change the recurrence details for the booking
     */
    openNewUserModal() {
        const ref = this._dialog.open(_user_interfaces_users__WEBPACK_IMPORTED_MODULE_4__["NewUserModalComponent"], {
            width: 'auto',
            height: 'auto'
        });
        this.subscription('new_user', ref.componentInstance.event.subscribe(event => {
            if (event.reason === 'done') {
                const attendees = this.form.controls.attendees.value || [];
                attendees.push(event.metadata);
                this.form.controls.attendees.setValue(Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["unique"])(attendees, 'email'));
                ref.close();
                this.unsub('new_user');
            }
        }));
    }
}
BookingFormComponent.ɵfac = function BookingFormComponent_Factory(t) { return new (t || BookingFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
BookingFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookingFormComponent, selectors: [["a-booking-form"]], inputs: { form: "form" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "booking-form", 3, "formGroup", 4, "ngIf"], [1, "booking-form", 3, "formGroup"], ["class", "field", 4, "ngIf"], [1, "group", "date"], [1, "group", "time"], [1, "field"], ["for", "spaces"], ["name", "spaces", 3, "placeholder", "onAction"], ["for", "date"], ["name", "date", "formControlName", "date"], ["for", "recurrence"], ["name", "recurrence", 3, "placeholder", "onAction"], ["for", "start-time"], ["name", "start-time", "formControlName", "date"], ["for", "duration"], ["name", "duration", "formControlName", "duration"], ["for", "title"], ["appearance", "outline"], ["matInput", "", "name", "title", "placeholder", "Meeting Title", "formControlName", "title"], [4, "ngIf"], ["for", "organiser"], ["name", "organiser", "formControlName", "organiser"], ["for", "attendees"], ["name", "attendees", "formControlName", "attendees", 3, "newUser"], ["for", "booking-type"], ["name", "booking-type", "formControlName", "type"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["for", "catering"], ["name", "catering", 3, "placeholder", "onAction"], ["for", "body"], ["name", "body", "appearance", "outline", 4, "ngIf", "ngIfElse"], ["html_editor", ""], ["name", "body", "appearance", "outline"], ["matInput", "", "name", "description", "placeholder", "Meeting Description", "formControlName", "body"], ["formControlName", "body"]], template: function BookingFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BookingFormComponent_div_0_Template, 14, 12, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _libs_components_src_lib_action_field_action_field_component__WEBPACK_IMPORTED_MODULE_6__["ActionFieldComponent"], _libs_components_src_lib_date_field_date_field_component__WEBPACK_IMPORTED_MODULE_7__["DateFieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _libs_components_src_lib_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_8__["TimeFieldComponent"], _libs_components_src_lib_duration_field_duration_field_component__WEBPACK_IMPORTED_MODULE_9__["DurationFieldComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"], _libs_components_src_lib_user_search_field_user_search_field_component__WEBPACK_IMPORTED_MODULE_12__["UserSearchFieldComponent"], _libs_components_src_lib_user_list_field_user_list_field_component__WEBPACK_IMPORTED_MODULE_13__["UserListFieldComponent"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_16__["EditorComponent"]], styles: ["label[_ngcontent-%COMP%] {\n  min-width: 100%;\n  margin-top: 1.25em;\n  margin-right: 1em;\n  font-weight: bold;\n  font-size: 0.8em;\n  width: 100%;\n  margin-top: 0;\n  margin-bottom: 0.5em;\n}\nlabel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--pending);\n}\nlabel.error[_ngcontent-%COMP%] {\n  color: var(--error);\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\nmat-form-field[_ngcontent-%COMP%], a-date-field[_ngcontent-%COMP%], an-action-field[_ngcontent-%COMP%], editor[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 50%;\n}\n@media screen and (max-width: 639px) {\n  mat-form-field[_ngcontent-%COMP%], a-date-field[_ngcontent-%COMP%], an-action-field[_ngcontent-%COMP%], editor[_ngcontent-%COMP%] {\n    min-width: 16em;\n  }\n}\n.group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.group[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  min-width: 18em;\n  flex: 1;\n  margin: 0.5em;\n}\n.group[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n.group[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n@media screen and (max-width: 639px) {\n  .group[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvdmlzaXRvci1raW9zay9zcmMvYXBwL3VpL2Zvcm1zL2Jvb2tpbmctZm9ybS9ib29raW5nLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FBQUY7QUFFRTtFQUNFLHFCQUFBO0FBQUo7QUFFRTtFQUNFLG1CQUFBO0FBQUo7QUFJQTtFQUNFLGFBQUE7RUFFQSxlQUFBO0FBRkY7QUFNQTs7OztFQUlFLE9BQUE7RUFDQSxjQUFBO0FBSEY7QUFJRTtFQU5GOzs7O0lBT0ksZUFBQTtFQUVGO0FBQ0Y7QUFDQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBRUY7QUFERTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtBQUdKO0FBRkk7RUFDRSxjQUFBO0FBSU47QUFGSTtFQUNFLGVBQUE7QUFJTjtBQUZJO0VBVkY7SUFXSSxTQUFBO0VBS0o7QUFDRiIsImZpbGUiOiJhcHBzL3Zpc2l0b3Ita2lvc2svc3JjL2FwcC91aS9mb3Jtcy9ib29raW5nLWZvcm0vYm9va2luZy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEuMjVlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IC44ZW07XG4gIC8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAuNWVtO1xuICAvLyB9XG4gIHNwYW4ge1xuICAgIGNvbG9yOiB2YXIoLS1wZW5kaW5nKTtcbiAgfVxuICAmLmVycm9yIHtcbiAgICBjb2xvcjogdmFyKC0tZXJyb3IpO1xuICB9XG59XG5cbi5maWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLy8gfVxufVxuXG5tYXQtZm9ybS1maWVsZCxcbmEtZGF0ZS1maWVsZCxcbmFuLWFjdGlvbi1maWVsZCxcbmVkaXRvciB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogNTAlO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzlweCkge1xuICAgIG1pbi13aWR0aDogMTZlbTtcbiAgfVxufVxuXG4uZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gID4gKiB7XG4gICAgbWluLXdpZHRoOiAxOGVtO1xuICAgIGZsZXg6IDE7XG4gICAgbWFyZ2luOiAuNWVtO1xuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookingFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-booking-form',
                templateUrl: './booking-form.component.html',
                styleUrls: ['./booking-form.component.scss']
            }]
    }], function () { return [{ type: _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, { form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "QgMi":
/*!**********************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/mocks/src/lib/api/users.data.ts ***!
  \**********************************************************************************************/
/*! exports provided: ACTIVE_USER, MOCK_STAFF, MOCK_GUESTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIVE_USER", function() { return ACTIVE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOCK_STAFF", function() { return MOCK_STAFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOCK_GUESTS", function() { return MOCK_GUESTS; });
/* harmony import */ var _common_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.mock */ "iEsz");

const PREDEF_USERS = [
    'Jonathan McFarlane',
    'Alex Sorafumo',
    'Jim Doe',
    'Cristina Boston',
    'Jeremy West',
    'Alexandre Chuvand',
    'Viv Briffa',
    'Candy Russo',
    'Jeff Wiz',
    'Sravani Kotha',
    'Kim Burgess',
    'Landell Archer',
    'Caspian Baska',
    'Stephen Von Takach',
    'Cameron Reeves',
    'Shane Boseley'
];
const ACTIVE_USER = {
    id: 'current',
    name: 'PlaceOS - Mock User',
    email: 'dev@place.tech',
    groups: ['deals', '']
};
const MOCK_STAFF = PREDEF_USERS.map((name, i) => ({
    id: `user-${i + 1}`,
    name,
    email: `${name.split(' ').join('.').toLowerCase()}@${_common_mock__WEBPACK_IMPORTED_MODULE_0__["DOMAIN"]}`
})).concat([ACTIVE_USER]);
const MOCK_GUESTS = PREDEF_USERS.map((name, i) => ({
    id: `guest-${i + 1}`,
    name,
    email: `${name.split(' ').join('.').toLowerCase()}@not-${_common_mock__WEBPACK_IMPORTED_MODULE_0__["DOMAIN"]}`
}));


/***/ }),

/***/ "R3Ii":
/*!*************************************!*\
  !*** ./src/app/ui/shared.module.ts ***!
  \*************************************/
/*! exports provided: SharedContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedContentModule", function() { return SharedContentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "4xCi");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "qvOF");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "W1gw");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "csyo");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ "66mq");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ "ulve");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ "S17y");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "mFH5");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ "Jb3d");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "e41O");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ "+Tre");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/radio */ "F1o0");
/* harmony import */ var _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @acaprojects/ngx-pipes */ "81Qw");
/* harmony import */ var _topbar_header_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./topbar-header.component */ "/dba");
/* harmony import */ var _footer_menu_footer_menu_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./footer-menu/footer-menu.component */ "C9Ki");
/* harmony import */ var _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./searchbar/searchbar.component */ "ek5h");
/* harmony import */ var _forms_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./forms/user-form/user-form.component */ "yEfM");
/* harmony import */ var _forms_booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./forms/booking-form/booking-form.component */ "QQt5");
/* harmony import */ var _map_controls_map_controls_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./map-controls/map-controls.component */ "sWXn");
/* harmony import */ var _take_photo_take_photo_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./take-photo/take-photo.component */ "DZJm");
/* harmony import */ var _user_interfaces_components__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @user-interfaces/components */ "Rc+I");































const COMPONENTS = [
    _topbar_header_component__WEBPACK_IMPORTED_MODULE_22__["TopbarHeaderComponent"],
    _footer_menu_footer_menu_component__WEBPACK_IMPORTED_MODULE_23__["FooterMenuComponent"],
    _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_24__["SearchbarComponent"],
    _forms_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_25__["UserFormComponent"],
    _forms_booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_26__["BookingFormComponent"],
    _map_controls_map_controls_component__WEBPACK_IMPORTED_MODULE_27__["MapControlsComponent"],
    _take_photo_take_photo_component__WEBPACK_IMPORTED_MODULE_28__["TakePhotoComponent"]
];
const MATERIAL_MODULES = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatRippleModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_18__["MatBottomSheetModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"]
];
const CDK_MODULES = [
    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]
];
class SharedContentModule {
}
SharedContentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedContentModule });
SharedContentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedContentModule_Factory(t) { return new (t || SharedContentModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_21__["APipesModule"],
            _user_interfaces_components__WEBPACK_IMPORTED_MODULE_29__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_4__["EditorModule"],
            ...MATERIAL_MODULES,
            ...CDK_MODULES
        ], _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_21__["APipesModule"],
        _user_interfaces_components__WEBPACK_IMPORTED_MODULE_29__["ComponentsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatRippleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_18__["MatBottomSheetModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedContentModule, { declarations: [_topbar_header_component__WEBPACK_IMPORTED_MODULE_22__["TopbarHeaderComponent"],
        _footer_menu_footer_menu_component__WEBPACK_IMPORTED_MODULE_23__["FooterMenuComponent"],
        _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_24__["SearchbarComponent"],
        _forms_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_25__["UserFormComponent"],
        _forms_booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_26__["BookingFormComponent"],
        _map_controls_map_controls_component__WEBPACK_IMPORTED_MODULE_27__["MapControlsComponent"],
        _take_photo_take_photo_component__WEBPACK_IMPORTED_MODULE_28__["TakePhotoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_21__["APipesModule"],
        _user_interfaces_components__WEBPACK_IMPORTED_MODULE_29__["ComponentsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_4__["EditorModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatRippleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_18__["MatBottomSheetModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]], exports: [_acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_21__["APipesModule"],
        _user_interfaces_components__WEBPACK_IMPORTED_MODULE_29__["ComponentsModule"], _topbar_header_component__WEBPACK_IMPORTED_MODULE_22__["TopbarHeaderComponent"],
        _footer_menu_footer_menu_component__WEBPACK_IMPORTED_MODULE_23__["FooterMenuComponent"],
        _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_24__["SearchbarComponent"],
        _forms_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_25__["UserFormComponent"],
        _forms_booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_26__["BookingFormComponent"],
        _map_controls_map_controls_component__WEBPACK_IMPORTED_MODULE_27__["MapControlsComponent"],
        _take_photo_take_photo_component__WEBPACK_IMPORTED_MODULE_28__["TakePhotoComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatRippleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_18__["MatBottomSheetModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedContentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    ...COMPONENTS,
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_21__["APipesModule"],
                    _user_interfaces_components__WEBPACK_IMPORTED_MODULE_29__["ComponentsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_4__["EditorModule"],
                    ...MATERIAL_MODULES,
                    ...CDK_MODULES
                ],
                exports: [
                    _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_21__["APipesModule"],
                    _user_interfaces_components__WEBPACK_IMPORTED_MODULE_29__["ComponentsModule"],
                    ...COMPONENTS,
                    ...MATERIAL_MODULES,
                    ...CDK_MODULES
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Rc+I":
/*!**************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/components/src/index.ts ***!
  \**************************************************************************************/
/*! exports provided: ActionFieldComponent, ActionIconComponent, BindingDirective, BookingFormComponent, CONFIRM_METADATA, ConfirmModalComponent, CounterComponent, DateFieldComponent, DurationFieldComponent, IconComponent, LoginComponent, PopoutMenuComponent, TimeFieldComponent, UnauthorisedComponent, UserAvatarComponent, UserListFieldComponent, UserSearchFieldComponent, MAP_FEATURE_DATA, InteractiveMapComponent, MapPinComponent, MapRadiusComponent, ComponentsModule, AuthorisedAdminGuard, AuthorisedUserGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/components.module */ "xoAb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionFieldComponent", function() { return _lib_components_module__WEBPACK_IMPORTED_MODULE_0__["ActionFieldComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionIconComponent", function() { return _lib_components_module__WEBPACK_IMPORTED_MODULE_0__["ActionIconComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BindingDirective", function() { return _lib_components_module__WEBPACK_IMPORTED_MODULE_0__["BindingDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BookingFormComponent", function() { return _lib_components_module__WEBPACK_IMPORTED_MODULE_0__["BookingFormComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONFIRM_METADATA", function() { return _lib_components_module__WEBPACK_IMPORTED_MODULE_0__["CONFIRM_METADATA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function() { return _lib_components_module__WEBPACK_IMPORTED_MODULE_0__["ConfirmModalComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return _lib_components_module__WEBPACK_IMPORTED_MODULE_0__["CounterComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateFieldComponent", function() { return _lib_components_module__WEBPACK_IMPORTED_MODULE_0__["DateFieldComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DurationFieldComponent", function() { return _lib_components_module__WEBPACK_IMPORTED_MODULE_0__["DurationFieldComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return _lib_components_module__WEBPACK_IMPORTED_MODULE_0__["IconComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _lib_components_module__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoutMenuComponent", function() { return _lib_components_module__WEBPACK_IMPORTED_MODULE_0__["PopoutMenuComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeFieldComponent", function() { return _lib_components_module__WEBPACK_IMPORTED_MODULE_0__["TimeFieldComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnauthorisedComponent", function() { return _lib_components_module__WEBPACK_IMPORTED_MODULE_0__["UnauthorisedComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserAvatarComponent", function() { return _lib_components_module__WEBPACK_IMPORTED_MODULE_0__["UserAvatarComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserListFieldComponent", function() { return _lib_components_module__WEBPACK_IMPORTED_MODULE_0__["UserListFieldComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserSearchFieldComponent", function() { return _lib_components_module__WEBPACK_IMPORTED_MODULE_0__["UserSearchFieldComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAP_FEATURE_DATA", function() { return _lib_components_module__WEBPACK_IMPORTED_MODULE_0__["MAP_FEATURE_DATA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InteractiveMapComponent", function() { return _lib_components_module__WEBPACK_IMPORTED_MODULE_0__["InteractiveMapComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapPinComponent", function() { return _lib_components_module__WEBPACK_IMPORTED_MODULE_0__["MapPinComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapRadiusComponent", function() { return _lib_components_module__WEBPACK_IMPORTED_MODULE_0__["MapRadiusComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return _lib_components_module__WEBPACK_IMPORTED_MODULE_0__["ComponentsModule"]; });

/* harmony import */ var _lib_guards_authorised_admin_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/guards/authorised-admin.guard */ "c62n");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthorisedAdminGuard", function() { return _lib_guards_authorised_admin_guard__WEBPACK_IMPORTED_MODULE_1__["AuthorisedAdminGuard"]; });

/* harmony import */ var _lib_guards_authorised_user_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/guards/authorised-user.guard */ "3Hra");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthorisedUserGuard", function() { return _lib_guards_authorised_user_guard__WEBPACK_IMPORTED_MODULE_2__["AuthorisedUserGuard"]; });






/***/ }),

/***/ "SQ91":
/*!************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/common/src/lib/api.ts ***!
  \************************************************************************************/
/*! exports provided: toQueryString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toQueryString", function() { return toQueryString; });
/**
 * Convert map into a query string
 * @param map Key value pairs to convert
 */
function toQueryString(map) {
    let str = '';
    if (map) {
        for (const key in map) {
            if (map.hasOwnProperty(key) && map[key] !== undefined && map[key] !== null) {
                str += `${(str ? '&' : '')}${key}=${map[key]}`;
            }
        }
    }
    return str;
}


/***/ }),

/***/ "SUR7":
/*!********************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/events/src/lib/event.class.ts ***!
  \********************************************************************************************/
/*! exports provided: setDefaultCreator, CalendarEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDefaultCreator", function() { return setDefaultCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarEvent", function() { return CalendarEvent; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "w8Fe");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _catering_src_lib_catering_order_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../catering/src/lib/catering-order.class */ "lbut");
/* harmony import */ var _users_src_lib_user_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../users/src/lib/user.class */ "xuqh");
/* harmony import */ var _spaces_src_lib_space_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../spaces/src/lib/space.class */ "mh7C");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "pP/K");






let _default_user = { id: 'default', name: 'Default User' };
function setDefaultCreator(user) {
    if (user)
        _default_user = user;
}
/** User's calendar event/booking */
class CalendarEvent {
    constructor(data = {}) {
        var _a;
        this.id = data.id || '';
        this.calendar = data.calendar || '';
        this.creator = (data.creator || _default_user.email).toLowerCase();
        this.host = (data.host || this.creator || '').toLowerCase();
        const attendees = data.attendees || [];
        this.attendees = attendees
            .filter((user) => !user.resource)
            .map((u) => new _users_src_lib_user_class__WEBPACK_IMPORTED_MODULE_3__["User"](u));
        this.resources =
            data.resources ||
                attendees
                    .filter((user) => user.resource)
                    .map((s) => new _spaces_src_lib_space_class__WEBPACK_IMPORTED_MODULE_4__["Space"](s));
        this.title = data.title || '';
        this.body = data.body || '';
        this.private = !!data.private;
        this.all_day = !!data.all_day;
        const time = data.event_start * 1000 || data.date;
        const start = time
            ? new Date(time)
            : Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["roundToNearestMinutes"])(new Date().setMinutes(new Date().getMinutes() + 3), {
                nearestTo: 5,
            });
        this.date = this.all_day
            ? Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["startOfDay"])(start).valueOf()
            : start.valueOf();
        this.duration = this.all_day
            ? 24 * 60
            : data.duration ||
                Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["differenceInMinutes"])(new Date(data.event_end * 1000), start) ||
                30;
        this.timezone = data.timezone;
        this.location = data.location || '';
        this.recurring = data.recurring;
        this.recurring_master_id = data.recurring_master_id;
        this.meeting_link = data.meeting_link || '';
        this.organiser = this.attendees.find((user) => user.email === this.host);
        this.master = data.master ? new CalendarEvent(data.master) : null;
        if (data.recurring) {
            this.recurrence = {
                start: start.valueOf() ||
                    new Date(data.recurrence.range_start * 1000).valueOf(),
                end: data.recurrence.end ||
                    new Date(data.recurrence.range_end * 1000).valueOf(),
                interval: data.recurrence.interval,
                pattern: data.recurrence.pattern,
                days_of_week: data.recurrence.days_of_week,
            };
        }
        else {
            this.recurrence = {};
        }
        this.system = data.system;
        if ((_a = this.system) === null || _a === void 0 ? void 0 : _a.email) {
            this.resources.push(new _spaces_src_lib_space_class__WEBPACK_IMPORTED_MODULE_4__["Space"](this.system));
        }
        this.old_system = data.old_system || data.system;
        this.attachments = data.attachments || [];
        this.extension_data = data.extension_data || {};
        this.extension_data.catering = (data.catering ||
            this.extension_data.catering ||
            []).map((i) => new _catering_src_lib_catering_order_class__WEBPACK_IMPORTED_MODULE_2__["CateringOrder"](Object.assign(Object.assign({}, i), { event: this })));
        this.extension_data.needs_parking = !!data.needs_parking;
        this.extension_data.remote =
            data.remote || this.extension_data.remote || [];
        this.extension_data.visitor_type =
            data.visitor_type || this.extension_data.visitor_type || '';
        this.can_access_lift =
            data.can_access_lift ||
                this.extension_data.can_access_lift ||
                false;
        this.resources = Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["unique"])(this.resources, 'email');
        this.status = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["eventStatus"])(this) || 'none';
        /** Simplified extension properties */
        this.has_visitors = !!this.attendees.find((user) => user.visit_expected || user.is_external);
        this.has_catering =
            this.extension_data.catering &&
                !!this.extension_data.catering.length;
        this.catering = this.extension_data.catering || [];
        this.remote = this.extension_data.remote || [];
        this.needs_parking = !!this.extension_data.needs_parking;
        this.setup = this.extension_data.setup || 0;
        this.breakdown = this.extension_data.breakdown || 0;
        this.visitor_type = this.extension_data.visitor_type || '';
        this.type =
            this.status === 'cancelled'
                ? 'cancelled'
                : this.has_visitors
                    ? 'external'
                    : 'internal';
        this.attendee_emails = this.attendees.map((u) => u.email);
        this.guests = this.attendees.filter((f) => !!f.visit_expected);
        this.notes = this.extension_data.notes || [];
        this.space = this.resources[0] || null;
    }
    get is_today() {
        return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["isSameDay"])(new Date(this.date), new Date());
    }
    /** Cleaning status */
    get cleaning_status() {
        return this.extension_data.cleaned ? 'done' : '';
    }
    /**
     * Convert class data to simple JSON object
     */
    toJSON() {
        var _a;
        const obj = Object.assign({}, this);
        const end = Math.floor(Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["add"])(new Date(this.date), { minutes: this.duration }).valueOf() /
            1000);
        obj.event_start = Math.floor(this.date / 1000);
        obj.event_end = end;
        const attendees = this.attendees;
        if (this.recurring) {
            obj.recurrence = Object.assign(Object.assign({}, this.recurrence), { range_start: obj.event_start, range_end: Math.floor(new Date(this.recurrence.end).valueOf() / 1000) });
        }
        obj.recurrence = obj.recurrence
            ? Object.keys(obj.recurrence).length
                ? obj.recurrence
                : null
            : null;
        obj.attendees = Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["unique"])(attendees, 'email');
        if (!this.all_day) {
            obj.extension_data.breakdown = 15;
        }
        obj.extension_data.catering = obj.extension_data.catering.map((i) => new _catering_src_lib_catering_order_class__WEBPACK_IMPORTED_MODULE_2__["CateringOrder"](Object.assign(Object.assign({}, i), { event: null })));
        obj.system_id = (_a = this.system) === null || _a === void 0 ? void 0 : _a.id;
        delete obj.catering;
        delete obj.date;
        delete obj.duration;
        return obj;
    }
    /** Status of the booking */
    get state() {
        const now = new Date();
        const date = new Date(this.date);
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["isBefore"])(now, Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["add"])(date, { minutes: -15 }))) {
            return 'future';
        }
        else if (Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["isBefore"])(now, date)) {
            return 'upcoming';
        }
        else if (Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["isBefore"])(now, Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["add"])(date, { minutes: 15 }))) {
            return 'started';
        }
        else if (Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["isBefore"])(now, Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["add"])(date, { minutes: this.duration }))) {
            return 'in_progress';
        }
        return 'done';
    }
    get event_start() {
        return Math.floor(new Date(this.date).valueOf() / 1000);
    }
    get event_end() {
        return Math.floor(Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["addMinutes"])(new Date(this.date), this.duration).valueOf() / 1000);
    }
    get can_check_in() {
        return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["isSameDay"])(new Date(), new Date(this.date));
    }
}


/***/ }),

/***/ "Sbv1":
/*!**************************************!*\
  !*** ./src/app/welcome.component.ts ***!
  \**************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _ui_topbar_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/topbar-header.component */ "/dba");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "mFH5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");









const _c0 = function (a1) { return ["/explore", a1]; };
function WelcomeComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Explore ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r0.level));
} }
const _c1 = function () { return ["/checkin"]; };
class WelcomeComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["BaseClass"] {
    constructor(route, _settings) {
        super();
        this.route = route;
        this._settings = _settings;
        /** Level to initially load on explore */
        this.level = '';
    }
    get background() {
        return this._settings.get('app.home.background');
    }
    ngOnInit() {
        this.subscription('route.params', this.route.paramMap.subscribe((params) => {
            if (params.has('level')) {
                this.level = params.get('level');
            }
        }));
        this.subscription('level', this._settings
            .listen('KIOSK.level')
            .subscribe((lvl) => (this.level = lvl)));
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["SettingsService"])); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 5, consts: [[1, "absolute", "inset-0", "bg-transparent", "z-50", "flex", "flex-col", "items-center", "justify-center", "bg-center", "bg-cover"], [1, "w-full"], [1, "flex", "flex-col", "flex-1", "w-full", "items-center", "justify-center", "text-white", "bg-black", "bg-opacity-50", "space-y-4"], [1, "text-2xl"], ["matRipple", "", 1, "text-xl", "py-2", "px-8", "mt-4", "border-2", "border-white", "text-white", "w-40", "whitespace-nowrap", "flex", "items-center", "justify-center", 3, "routerLink"], ["matRipple", "", "class", "text-xl py-2 px-8 mt-4 border-2 border-white text-white w-40 whitespace-nowrap flex items-center justify-center", 3, "routerLink", 4, "ngIf"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a-topbar-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome to PlaceOS Self Service Kiosk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Check In ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WelcomeComponent_a_7_Template, 2, 3, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx.background + ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.level);
    } }, directives: [_ui_topbar_header_component__WEBPACK_IMPORTED_MODULE_3__["TopbarHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["a[_ngcontent-%COMP%] {\n            height: 3.5rem;\n            background-color: rgba(255,255,255, .25);\n        }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome',
                template: `
        <div
            class="absolute inset-0 bg-transparent z-50 flex flex-col items-center justify-center bg-center bg-cover"
            [style.background-image]="'url(' + background + ')'"
        >
            <a-topbar-header class="w-full"></a-topbar-header>
            <div
                class="flex flex-col flex-1 w-full items-center justify-center text-white bg-black bg-opacity-50 space-y-4"
            >
                <h3 class="text-2xl">Welcome to PlaceOS Self Service Kiosk</h3>
                <a
                    matRipple
                    [routerLink]="['/checkin']"
                    class="text-xl py-2 px-8 mt-4 border-2 border-white text-white w-40 whitespace-nowrap flex items-center justify-center"
                >
                    Check In
                </a>
                <a
                    *ngIf="level"
                    matRipple
                    [routerLink]="['/explore', level]"
                    class="text-xl py-2 px-8 mt-4 border-2 border-white text-white w-40 whitespace-nowrap flex items-center justify-center"
                >
                    Explore
                </a>
            </div>
        </div>
    `,
                styles: [`
        a {
            height: 3.5rem;
            background-color: rgba(255,255,255, .25);
        }
    `],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }]; }, null); })();


/***/ }),

/***/ "TYM1":
/*!***********************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/mocks/src/lib/realtime/events.ts ***!
  \***********************************************************************************************/
/*! exports provided: MockBookingModule, createBookingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockBookingModule", function() { return MockBookingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBookingsModule", function() { return createBookingsModule; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "w8Fe");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _api_events_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/events.data */ "dZoG");



class MockBookingModule {
    constructor() {
        /** Timezone the associated space resided */
        this.time_zone = 'Australia/Sydney';
        /** Whether booking is disabled */
        this.disable_book_now = false;
        /** Whether ending current meeting is disabled */
        this.disable_end_meeting = false;
        /** List of current and upcoming bookings for space */
        this.bookings = [];
        this.pending_period = 0;
        this.pending_before = 0;
        /** Control UI associated with the space */
        this.control_ui = '';
        /** Catering UI associated with the space */
        this.catering_ui = '';
        /** Time of the last booking started by a user */
        this.last_booking_started = 0;
        /** Current status of the space */
        this.status = 'free';
    }
}
function createBookingsModule(space, overrides = {}) {
    const mod = Object.assign(Object.assign(Object.assign({}, new MockBookingModule()), overrides), { 
        /** Start the meeting at the given time */
        $start_meeting: function (t) {
            this.last_booking_started = t;
        }, 
        /** End the meeting at the given time */
        $end_meeting: function (t) { }, 
        /** Book meeting for the current time */
        $book_now: function (len, t, o) { } });
    updateBookings(space, mod);
    setInterval(() => updateBookings(space, mod), 1000);
    return mod;
}
function updateBookings(space, mod) {
    var _a;
    const bookings = _api_events_data__WEBPACK_IMPORTED_MODULE_2__["MOCK_EVENTS"].filter((event) => event.attendees.find((u) => u.email === space.email));
    bookings.sort((a, b) => a.event_start - b.event_start);
    mod.bookings = bookings;
    if (!space.bookable) {
        return (mod.status = 'not-bookable');
    }
    const date = new Date();
    const current = bookings.find((bkn) => Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["timePeriodsIntersect"])(date.valueOf(), date.valueOf(), bkn.event_start, bkn.event_end));
    const next = bookings.find((bkn) => Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["isBefore"])(date.valueOf(), bkn.event_start));
    const start = new Date((_a = (current || next)) === null || _a === void 0 ? void 0 : _a.event_start);
    const pending = Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["timePeriodsIntersect"])(date, date, Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["subSeconds"])(start, mod.pending_before), Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["addSeconds"])(start, mod.pending_period));
    mod.status = current
        ? pending
            ? 'pending'
            : 'busy'
        : next && pending
            ? 'pending'
            : 'free';
}


/***/ }),

/***/ "U0kR":
/*!*****************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/common/src/lib/settings.ts ***!
  \*****************************************************************************************/
/*! exports provided: DEFAULT_SETTINGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SETTINGS", function() { return DEFAULT_SETTINGS; });
/**
 * GENERAL APPLICATION SETTINGS
 */
const general = {
    menu: {
        items: [
            {
                name: 'Home',
                route: '/home',
            },
            {
                name: 'Booking',
                route: '/book',
                children: [
                    {
                        name: 'Spaces',
                        route: '/book/spaces',
                    },
                    {
                        name: 'Desks',
                        route: '/book/desks',
                    },
                ],
            },
            {
                name: 'Explore',
                route: '/explore',
                children: [
                    {
                        name: 'People',
                        route: '/explore/people',
                    },
                    {
                        name: 'Spaces',
                        route: '/explore/spaces',
                    },
                ],
            },
            {
                name: 'Help',
                route: '/help',
            },
            {
                name: 'Schedule',
                route: '/schedule',
            },
            {
                name: 'Control',
                route: '/control',
            },
            {
                name: 'Directory',
                route: '/directory',
            },
        ],
        copyright: 'ACA Projects',
        position: 'left',
    },
    checkin: {
        stages: [
            'qrcode',
            'details',
            // 'photo',
            // 'visitor-pass',
            'result',
            'preferences',
            'final',
        ],
    },
};
/**
 * HOME PAGE SETTINGS
 */
const home = {
    background: 'assets/img/skyline.jpg',
    tiles: [
        {
            name: 'Booking',
            route: '/book/spaces',
            icon: {
                type: 'icon',
                class: 'material-icons',
                content: 'event',
            },
        },
        {
            name: 'Desks',
            route: '/book/desks',
            icon: {
                type: 'icon',
                class: 'material-icons',
                content: 'pin_drop',
            },
        },
        {
            name: 'Explore',
            route: '/explore',
            icon: {
                type: 'icon',
                class: 'material-icons',
                content: 'map',
            },
        },
        {
            name: 'Help',
            route: '/help',
            icon: {
                type: 'icon',
                class: 'material-icons',
                content: 'help_outline',
            },
        },
        {
            name: 'Schedule',
            route: '/schedule',
            icon: {
                type: 'icon',
                class: 'material-icons',
                content: 'today',
            },
        },
        {
            name: 'Control',
            route: '/control',
            icon: {
                type: 'icon',
                class: 'material-icons',
                content: 'settings_remote',
            },
        },
        {
            name: 'Directory',
            route: '/directory',
            icon: {
                type: 'icon',
                class: 'material-icons',
                content: 'search',
            },
        },
    ],
};
/**
 * HELP/SUPPORT SETTINGS
 */
const help = {
    tiles: [
        {
            name: 'About Engine',
            link: 'https://acaprojects.com/resources',
            icon: {
                type: 'icon',
                class: 'material-icons',
                content: 'dns',
            },
            background: 'https://static1.squarespace.com/static/52142586e4b0c09536a144ad/5c8ed203a4222fa1927bbab3/5cb7cba66e9a7f63584b4d39/1555549341622/too-many-buttons.jpg?format=2500w',
        },
        {
            name: 'General Enquiries',
            link: 'mailto:equiries@acaprojects.com?subject=Staff%20App%20Demo',
            icon: {
                type: 'icon',
                class: 'material-icons',
                content: 'mail',
            },
            background: 'assets/img/it-banner.jpg',
        },
        {
            name: 'Contact ACA Projects',
            link: 'https://acaprojects.com/contact-1',
            icon: {
                type: 'icon',
                class: 'material-icons',
                content: 'call',
            },
            background: 'https://images.squarespace-cdn.com/content/v1/52142586e4b0c09536a144ad/1569984759306-M6ZOKD64OG009U68MYUL/ke17ZwdGBToddI8pDm48kCX-V5vw-8h9IBXN10-_8XN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0p4Wyba38KfG317vYluk45_zZdtnDCZTLKcP2mivxmYi50xvY5saIGKMgOza9mH4XA/image-asset.jpeg?format=2500w',
        },
        {
            name: 'About Us',
            link: 'https://acaprojects.com/',
            icon: {
                type: 'icon',
                class: 'material-icons',
                content: 'business',
            },
            background: 'https://images.squarespace-cdn.com/content/v1/52142586e4b0c09536a144ad/1569985184499-QF839PTJ2EV30KIZF59X/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg?format=2500w',
        },
    ],
    columns: 2,
};
/**
 * BOOKING FLOW SETTINGS
 */
const booking = {
    booking_types: [
        { display: 'Internal', value: 'internal' },
        { display: 'Client', value: 'client' },
        { display: 'External', value: 'external' },
        { display: 'Setup', value: 'setup' },
        { display: 'Training', value: 'training' },
        { display: 'Interview', value: 'interview' },
    ],
    show_fields: [
        'attendees',
        'body',
        'catering',
        'date',
        'duration',
        'organiser',
        'recurrence',
        'title',
        'type',
    ],
    html_body: true,
    multiple_spaces: false,
    desk_start: 9,
};
/*===========================*\
||  SPACE LISTING SETTINGS   ||
\*===========================*/
const space_display = {
    show_images: false,
};
/*===========================*\
||  USER DIRECTORY SETTINGS  ||
\*===========================*/
const directory = {
    show_avatars: true,
    min_search_length: 3,
};
/*===========================*\
||    EXPLORE MAP SETTINGS   ||
\*===========================*/
const explore = {
    colors: {
        'space-available': '#43a047',
        'space-requestable': '#ffb300',
        'space-unavailable': '#e53935',
        'space-not-bookable': '#ccc',
        'desk-available': '#43a047',
        'desk-available-stroke': '#1b5e20',
        'desk-unavailable': '#e53935',
        'desk-unavailable-stroke': '#b71c1c',
        'desk-reserved': '#ffb300',
        'desk-reserved-stroke': '#ff6f00',
        'desk-not-bookable': '#fff',
        'desk-not-bookable-stroke': '#ccc',
        'zone-low': '#43a047',
        'zone-medium': '#ffb300',
        'zone-high': '#e53935',
    },
    can_select_building: false,
    show_legend_group_names: true,
    legend: {
        Spaces: [
            { key: 'space-available', name: 'Space Available' },
            { key: 'space-requestable', name: 'Space available by request' },
            { key: 'space-unavailable', name: 'Space in use' },
            { key: 'space-not-bookable', name: 'Space not Bookable' },
        ],
        Desks: [
            { key: 'desk-available', name: 'Desk Available' },
            { key: 'desk-reserved', name: 'Desk Reserved' },
            { key: 'desk-unavailable', name: 'Desk in use' },
            { key: 'desk-not-bookable', name: 'Desk not bookable' },
        ],
        Zones: [
            { key: 'zone-low', name: 'Low Zone Utilisation' },
            { key: 'zone-medium', name: 'Medium Zone Utilisation' },
            { key: 'zone-high', name: 'High Zone Utilisation' },
        ],
        Icons: [
            {
                key: 'icon-bin',
                name: 'Bin',
                icon: { type: 'icon', class: 'material-icons', content: 'delete' },
            },
        ],
    },
};
/**
 * ROOT APPLICATION SETTINGS
 */
const app = {
    name: 'VisitorKiosk',
    title: 'Visitor Kiosk',
    description: 'Kiosk UI written with Angular Framework',
    short_name: 'KIOSK',
    logo_light: {
        type: 'img',
        src: 'assets/logo-light.svg'
    },
    logo_dark: {
        type: 'img',
        src: 'assets/logo-dark.svg'
    },
    general,
    home,
    help,
    booking,
    space_display,
    directory,
    explore
};
/**
 * ROOT SETTIGNS
 */
const DEFAULT_SETTINGS = {
    debug: true,
    composer: {
        domain: '',
        route: '/visitor-kiosk',
        protocol: '',
        port: '',
        use_domain: false,
        local_login: false,
    },
    app,
    mock: false,
};


/***/ }),

/***/ "U6W6":
/*!*******************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/common/src/lib/base.class.ts ***!
  \*******************************************************************************************/
/*! exports provided: BaseClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseClass", function() { return BaseClass; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");



class BaseClass {
    constructor() {
        /** Store for named timers */
        this._timers = {};
        /** Store for named intervals */
        this._intervals = {};
        /** Store for named subscription unsub callbacks */
        this._subscriptions = {};
        /** Subject which stores the initialised state of the object */
        this._initialised = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        /** Observable of the initialised state of the object */
        this.initialised = this._initialised.asObservable();
    }
    /** Whether the object has been initialised */
    get is_initialised() {
        return this._initialised.getValue();
    }
    ngOnDestroy() {
        this.destroy();
    }
    destroy() {
        for (const key in this._timers) {
            if (this._timers.hasOwnProperty(key)) {
                this.clearTimeout(key);
            }
        }
        for (const key in this._intervals) {
            if (this._intervals.hasOwnProperty(key)) {
                this.clearInterval(key);
            }
        }
        for (const key in this._subscriptions) {
            if (this._subscriptions.hasOwnProperty(key)) {
                this.unsub(key);
            }
        }
    }
    /**
     * Creates a named timer
     * @param name Name of the timer
     * @param fn Callback function for the timer
     * @param delay Callback delay
     */
    timeout(name, fn, delay = 300) {
        if (name && fn && fn instanceof Function) {
            this.clearTimeout(name);
            this._timers[name] = setTimeout(() => {
                fn();
                this._timers[name] = null;
            }, delay);
        }
        else {
            throw new Error(name ? 'Cannot create named timeout without a name' : 'Cannot create a timeout without a callback');
        }
    }
    /**
     * Clears the named timer
     * @param name Timer name
     */
    clearTimeout(name) {
        if (this._timers[name]) {
            clearTimeout(this._timers[name]);
            this._timers[name] = null;
        }
    }
    /**
     * Creates a named interval
     * @param name Name of the interval
     * @param fn Callback function for the interval
     * @param delay Callback delay
     */
    interval(name, fn, delay = 300) {
        if (name && fn && fn instanceof Function) {
            this.clearInterval(name);
            this._intervals[name] = setInterval(() => fn(), delay);
        }
        else {
            throw new Error(name ? 'Cannot create named interval without a name' : 'Cannot create a interval without a callback');
        }
    }
    /**
     * Clears the named interval
     * @param name Timer name
     */
    clearInterval(name) {
        if (this._intervals[name]) {
            clearInterval(this._intervals[name]);
            this._intervals[name] = null;
        }
    }
    /**
     * Store named subscription
     * @param name Name of the subscription
     * @param unsub Unsubscribe callback or Subscription object
     */
    subscription(name, unsub) {
        this.unsub(name);
        this._subscriptions[name] = unsub;
    }
    /**
     * Call unsubscribe callback with the given name
     * @param name
     */
    unsub(name) {
        if (this._subscriptions && this._subscriptions[name]) {
            this._subscriptions[name] instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]
                ? this._subscriptions[name].unsubscribe()
                : this._subscriptions[name]();
            this._subscriptions[name] = null;
        }
    }
}
BaseClass.ɵfac = function BaseClass_Factory(t) { return new (t || BaseClass)(); };
BaseClass.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BaseClass, factory: BaseClass.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseClass, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "UCR0":
/*!****************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/common/src/lib/placeos.ts ***!
  \****************************************************************************************/
/*! exports provided: setupPlace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupPlace", function() { return setupPlace; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/ts-client */ "/It1");
/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifications */ "ztAP");



/**
 * Initialise the PlaceOS API library
 */
function setupPlace(settings) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const protocol = settings.protocol || location.protocol;
        const host = settings.domain || location.hostname;
        const port = settings.port || location.port;
        const url = settings.use_domain ? `${protocol}//${host}:${port}` : location.origin;
        const route = (location.pathname + '/').replace('//', '/');
        const mock = settings.mock ||
            location.href.includes('mock=true') ||
            localStorage.getItem('mock') === 'true';
        // Generate configuration object
        const config = {
            auth_type: 'auth_code',
            scope: 'public',
            host: `${host}${port ? ':' + port : ''}`,
            auth_uri: `${url}/auth/oauth/authorize`,
            token_uri: `${url}/auth/oauth/token`,
            redirect_uri: `${location.origin}${route}oauth-resp.html`,
            handle_login: !settings.local_login,
            use_iframe: true,
            mock,
        };
        console.log('Config:', config);
        if (localStorage) {
            localStorage.setItem('mock', `${!!mock && !location.href.includes('mock=false')}`);
        }
        if (mock) {
            Object(_notifications__WEBPACK_IMPORTED_MODULE_2__["notifyInfo"])('Application in mock mode.');
        }
        return Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["setup"])(config);
    });
}


/***/ }),

/***/ "VK0q":
/*!***********************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/spaces/src/lib/spaces.service.ts ***!
  \***********************************************************************************************/
/*! exports provided: SpacesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpacesService", function() { return SpacesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ "/It1");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var _space_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./space.class */ "mh7C");
/* harmony import */ var _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @user-interfaces/organisation */ "dJst");









class SpacesService {
    constructor(_org) {
        this._org = _org;
        /** Subject which stores the initialised state of the object */
        this._initialised = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        /** Observable of the initialised state of the object */
        this.initialised = this._initialised.asObservable();
        /** Subject to store list of spaces */
        this._list = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        /** Default predicate for filter method */
        this._compare = (space) => space.zones.includes(this._org.building.id);
        /** Observable for list of spaces */
        this.list = this._list.asObservable();
        this._org.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])((_) => _)).subscribe(() => this.loadSpaces());
    }
    /** List of available spaces */
    get space_list() {
        return this._list.getValue();
    }
    /**
     * Get a filtered list of the available spaces
     * @param predicate Predicate for filtering spaces
     */
    filter(predicate = this._compare) {
        return this._list.getValue().filter((_) => predicate(_));
    }
    /**
     * Find space with given id/email
     * @param id ID/Email address associated with the space
     */
    find(id) {
        return this._list.getValue().find((space) => space.id === id || space.email === id);
    }
    loadSpaces() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const systems = yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["querySystems"])({
                zone_id: this._org.organisation.id,
                limit: 5000,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((i) => i.data))
                .toPromise();
            const space_list = systems.map((sys) => new _space_class__WEBPACK_IMPORTED_MODULE_5__["Space"](Object.assign(Object.assign({}, sys), { level: this._org.levelWithID([...sys.zones]) })));
            // Remove spaces without a map ID
            const valid_spaces = space_list.filter((space) => space.map_id);
            this._list.next(valid_spaces);
            this._initialised.next(true);
        });
    }
}
SpacesService.ɵfac = function SpacesService_Factory(t) { return new (t || SpacesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_6__["OrganisationService"])); };
SpacesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SpacesService, factory: SpacesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SpacesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_6__["OrganisationService"] }]; }, null); })();


/***/ }),

/***/ "Vai6":
/*!*********************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/users/src/lib/staff.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: StaffService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffService", function() { return StaffService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ "/It1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.class */ "xuqh");
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sentry/browser */ "w5RV");









class StaffService extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_5__["BaseAPIService"] {
    constructor() {
        super();
        /** Currently logged in user */
        this._active_user = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        /** Observable for the active user */
        this.active_user = this._active_user.asObservable();
        this._name = 'Staff';
        this._api_route = 'people';
        Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["onlineState"])()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])((_) => _))
            .subscribe(() => {
            this.timeout('init', () => this.init());
        });
    }
    /** Currently logged in user */
    get current() {
        return this._active_user.getValue();
    }
    /** Load current user */
    load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["currentUser"])().toPromise();
            if (user) {
                this._active_user.next(new _user_class__WEBPACK_IMPORTED_MODULE_6__["StaffUser"](Object.assign(Object.assign({}, user), { is_logged_in: true })));
                _sentry_browser__WEBPACK_IMPORTED_MODULE_7__["configureScope"](scope => scope.setUser({ email: user.email }));
            }
        });
    }
    format(item) {
        return item;
    }
    process(raw_data) {
        return new _user_class__WEBPACK_IMPORTED_MODULE_6__["StaffUser"](raw_data);
    }
    /**
     * Get location of a staff member
     * @param id Email address of the staff member
     */
    locate(id) {
        return this.show(id);
    }
}
StaffService.ɵfac = function StaffService_Factory(t) { return new (t || StaffService)(); };
StaffService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StaffService, factory: StaffService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StaffService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "WlIe":
/*!***************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/events/src/lib/events.ts ***!
  \***************************************************************************************/
/*! exports provided: setDefaultCreator, CalendarEvent, generateEventForm, isNotEmpty, isFuture, setMockBookingStartDatetime, rulesForSpace, durationGreaterThanOrEqual, stringToMinutes, statusFromBookings, getFreeBookingSlots, getNextFreeBookingSlot, replaceBookings, EventsService, eventStatus, formatRecurrence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event.class */ "SUR7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setDefaultCreator", function() { return _event_class__WEBPACK_IMPORTED_MODULE_0__["setDefaultCreator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarEvent", function() { return _event_class__WEBPACK_IMPORTED_MODULE_0__["CalendarEvent"]; });

/* harmony import */ var _event_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event.interfaces */ "wf3U");
/* empty/unused harmony star reexport *//* harmony import */ var _event_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event.utilities */ "DjF3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateEventForm", function() { return _event_utilities__WEBPACK_IMPORTED_MODULE_2__["generateEventForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNotEmpty", function() { return _event_utilities__WEBPACK_IMPORTED_MODULE_2__["isNotEmpty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFuture", function() { return _event_utilities__WEBPACK_IMPORTED_MODULE_2__["isFuture"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setMockBookingStartDatetime", function() { return _event_utilities__WEBPACK_IMPORTED_MODULE_2__["setMockBookingStartDatetime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rulesForSpace", function() { return _event_utilities__WEBPACK_IMPORTED_MODULE_2__["rulesForSpace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "durationGreaterThanOrEqual", function() { return _event_utilities__WEBPACK_IMPORTED_MODULE_2__["durationGreaterThanOrEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringToMinutes", function() { return _event_utilities__WEBPACK_IMPORTED_MODULE_2__["stringToMinutes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "statusFromBookings", function() { return _event_utilities__WEBPACK_IMPORTED_MODULE_2__["statusFromBookings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFreeBookingSlots", function() { return _event_utilities__WEBPACK_IMPORTED_MODULE_2__["getFreeBookingSlots"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNextFreeBookingSlot", function() { return _event_utilities__WEBPACK_IMPORTED_MODULE_2__["getNextFreeBookingSlot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceBookings", function() { return _event_utilities__WEBPACK_IMPORTED_MODULE_2__["replaceBookings"]; });

/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events.service */ "9hUz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return _events_service__WEBPACK_IMPORTED_MODULE_3__["EventsService"]; });

/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "pP/K");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventStatus", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["eventStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatRecurrence", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["formatRecurrence"]; });








/***/ }),

/***/ "Xhi5":
/*!*******************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/common/src/lib/formatting.ts ***!
  \*******************************************************************************************/
/*! exports provided: formatRecurrence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatRecurrence", function() { return formatRecurrence; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "w8Fe");

function formatRecurrence(details) {
    let pattern = details.pattern || '';
    pattern = pattern.charAt(0).toUpperCase() + pattern.slice(1);
    return pattern ? `${pattern} until ${Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(new Date(details.end), 'do MMM yyyy')}` : '<No Recurrence>';
}


/***/ }),

/***/ "YZCY":
/*!**************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/mocks/src/lib/api/calendars.mock.ts ***!
  \**************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/ts-client */ "/It1");
/* harmony import */ var _events_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.data */ "dZoG");
/* harmony import */ var _spaces_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spaces.data */ "vcx8");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "BQ33");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);




Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__["registerMockEndpoint"])({
    path: '/api/staff/v1/calendars',
    metadata: {},
    method: 'GET',
    callback: (request) => []
});
Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__["registerMockEndpoint"])({
    path: '/api/staff/v1/calendars/availability',
    metadata: {},
    method: 'GET',
    callback: (request) => {
        const start = dayjs__WEBPACK_IMPORTED_MODULE_3__(+request.query_params.period_start * 1000);
        const end = dayjs__WEBPACK_IMPORTED_MODULE_3__(+request.query_params.period_end * 1000);
        const zones = (request.query_params.zone_ids || '').split(',').filter(i => !!i);
        const systems = (request.query_params.system_ids || '').split(',').filter(i => !!i);
        const spaces = _spaces_data__WEBPACK_IMPORTED_MODULE_2__["MOCK_SPACES"].filter((space) => zones.length
            ? zones.reduce((has, zone) => has && space.zones.includes(zone), true)
            : systems.length
                ? systems.includes(space.id)
                : true)
            .filter((space) => {
            const bookings = _events_data__WEBPACK_IMPORTED_MODULE_1__["MOCK_EVENTS"].filter((event) => event.attendees.find((user) => user.id === space.id));
            for (const event of bookings) {
                const event_start = dayjs__WEBPACK_IMPORTED_MODULE_3__(event.event_start * 1000);
                const event_end = dayjs__WEBPACK_IMPORTED_MODULE_3__(event.event_end * 1000);
                if ((start.isAfter(event_start, 's') && start.isBefore(event_end, 'm')) ||
                    (end.isAfter(event_start, 'm') && end.isBefore(event_end, 'm')) ||
                    (event_start.isAfter(start, 'm') && event_start.isBefore(end, 'm'))) {
                    return false;
                }
            }
            return true;
        });
        const output = {};
        spaces.forEach(space => output[space.email] = space);
        return output;
    },
});


/***/ }),

/***/ "Ygd4":
/*!******************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/catering/src/lib/catering-item.class.ts ***!
  \******************************************************************************************************/
/*! exports provided: CateringItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateringItem", function() { return CateringItem; });
class CateringItem {
    constructor(data = {}) {
        this.id = data.id || '';
        this.name = data.name || data.id || '';
        this.category = data.category || '';
        this.unit_price = data.unit_price || 0;
        this.description = data.description || '';
        this.quantity = data.quantity || 0;
        this.options = data.options || [];
        this.tags = data.tags || [];
        this.total_cost =
            (this.unit_price + this.options.map((i) => i.unit_price || 0).reduce((c, a) => c + a, 0)) *
                this.quantity;
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "5lCh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/service-worker */ "NDGq");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _user_interfaces_mocks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @user-interfaces/mocks */ "cRFv");
/* harmony import */ var _libs_components_src_lib_app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../libs/components/src/lib/app.component */ "lXmF");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _overlays_overlays_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./overlays/overlays.module */ "vAAA");
/* harmony import */ var _ui_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/shared.module */ "R3Ii");
/* harmony import */ var _bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bootstrap/bootstrap.component */ "7C6v");
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./welcome.component */ "Sbv1");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _sentry_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @sentry/angular */ "t3L3");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_libs_components_src_lib_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"],
            useValue: _sentry_angular__WEBPACK_IMPORTED_MODULE_15__["createErrorHandler"]({
                showDialog: false,
            }),
        },
        {
            provide: _sentry_angular__WEBPACK_IMPORTED_MODULE_15__["TraceService"],
            deps: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]],
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].production }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _overlays_overlays_module__WEBPACK_IMPORTED_MODULE_10__["SharedOverlaysModule"],
            _ui_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedContentModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_libs_components_src_lib_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_12__["BootstrapComponent"], _welcome_component__WEBPACK_IMPORTED_MODULE_13__["WelcomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["ServiceWorkerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _overlays_overlays_module__WEBPACK_IMPORTED_MODULE_10__["SharedOverlaysModule"],
        _ui_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedContentModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [_libs_components_src_lib_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_12__["BootstrapComponent"], _welcome_component__WEBPACK_IMPORTED_MODULE_13__["WelcomeComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].production }),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _overlays_overlays_module__WEBPACK_IMPORTED_MODULE_10__["SharedOverlaysModule"],
                    _ui_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedContentModule"],
                ],
                providers: [
                    {
                        provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"],
                        useValue: _sentry_angular__WEBPACK_IMPORTED_MODULE_15__["createErrorHandler"]({
                            showDialog: false,
                        }),
                    },
                    {
                        provide: _sentry_angular__WEBPACK_IMPORTED_MODULE_15__["TraceService"],
                        deps: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]],
                    },
                ],
                bootstrap: [_libs_components_src_lib_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "ZnXB":
/*!**********************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/action-icon/action-icon.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: ActionIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionIconComponent", function() { return ActionIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


const _c0 = function (a1) { return { class: "material-icons", content: a1 }; };
function ActionIconComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("state center " + ctx_r0.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r0.state === "success" ? "done" : "close"));
} }
function ActionIconComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 16);
} }
class ActionIconComponent {
    constructor() {
        /** State of the action */
        this.state = '';
    }
}
ActionIconComponent.ɵfac = function ActionIconComponent_Factory(t) { return new (t || ActionIconComponent)(); };
ActionIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActionIconComponent, selectors: [["action-icon"]], inputs: { icon: "icon", className: "className", content: "content", loading: "loading", disabled: "disabled", state: "state" }, decls: 5, vars: 8, consts: [["mat-icon-button", "", 1, "relative", "flex", "items-center", "justify-center", "h-8", "w-8", 3, "disabled"], ["root", "", 3, "className", "icon"], [3, "class", 4, "ngIf"], ["class", "loader center", 4, "ngIf"], [3, "icon"], [1, "loader", "center"], [3, "diameter"]], template: function ActionIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ActionIconComponent_div_3_Template, 2, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ActionIconComponent_div_4_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("success", ctx.state === "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading || ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx.className)("icon", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, styles: [".action-icon.fade[_ngcontent-%COMP%]    > app-icon[_ngcontent-%COMP%] {\n                opacity: 0.35;\n            }\n\n            [center][_ngcontent-%COMP%] {\n                position: absolute;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%);\n            }\n\n            .success[_ngcontent-%COMP%] {\n                pointer-events: none;\n            }\n\n            .success[_ngcontent-%COMP%]   app-icon[root][_ngcontent-%COMP%] {\n                opacity: .2;\n            }\n\n            .state.success[_ngcontent-%COMP%] {\n                color: #388e3c;\n            }\n\n            .state.error[_ngcontent-%COMP%] {\n                color: #e53935;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'action-icon',
                template: `
        <button mat-icon-button class="relative flex items-center justify-center h-8 w-8" [class.success]="state === 'success'" [disabled]="loading || disabled">
            <app-icon root [className]="className" [icon]="icon">{{content}}</app-icon>
            <div [class]="'state center ' + state" *ngIf="!loading && state">
                <app-icon
                    [icon]="{
                        class: 'material-icons',
                        content: state === 'success' ? 'done' : 'close'
                    }"
                ></app-icon>
            </div>
            <div class="loader center" *ngIf="loading">
                <mat-spinner [diameter]="16"></mat-spinner>
            </div>
        </button>
    `,
                styles: [
                    `

            .action-icon.fade > app-icon {
                opacity: 0.35;
            }

            [center] {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }

            .success {
                pointer-events: none;
            }

            .success app-icon[root] {
                opacity: .2;
            }

            .state.success {
                color: #388e3c;
            }

            .state.error {
                color: #e53935;
            }

        `,
                ],
            }]
    }], null, { icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], className: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "a1dc":
/*!********************************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/spaces/src/lib/space-select-modal/space-select-modal.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: SpaceSelectModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceSelectModalComponent", function() { return SpaceSelectModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/organisation */ "dJst");
/* harmony import */ var _calendar_src_lib_calendar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../calendar/src/lib/calendar.service */ "9Yl1");
/* harmony import */ var _users_src_lib_staff_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../users/src/lib/staff.service */ "Vai6");
/* harmony import */ var _bookings_src_lib_booking_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../bookings/src/lib/booking.utilities */ "c1e6");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dayjs */ "BQ33");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_8__);














function SpaceSelectModalComponent_mat_form_field_10_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bld_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", bld_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", bld_r10.display_name || bld_r10.name, " ");
} }
function SpaceSelectModalComponent_mat_form_field_10_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function SpaceSelectModalComponent_mat_form_field_10_Template_mat_select_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.building = $event; })("selectionChange", function SpaceSelectModalComponent_mat_form_field_10_Template_mat_select_selectionChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.loadAvailableSpaces(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SpaceSelectModalComponent_mat_form_field_10_mat_option_2_Template, 2, 2, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r0.building);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.buildings);
} }
function SpaceSelectModalComponent_mat_form_field_11_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", type_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", type_r15.name, " ");
} }
function SpaceSelectModalComponent_mat_form_field_11_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SpaceSelectModalComponent_mat_form_field_11_Template_mat_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.type = $event; })("ngModelChange", function SpaceSelectModalComponent_mat_form_field_11_Template_mat_select_ngModelChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.loadAvailableSpaces(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SpaceSelectModalComponent_mat_form_field_11_mat_option_2_Template, 2, 2, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.space_types);
} }
function SpaceSelectModalComponent_ng_container_13_ng_container_1_ng_container_1_a_space_select_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a-space-select-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SpaceSelectModalComponent_ng_container_13_ng_container_1_ng_container_1_a_space_select_item_1_Template_a_space_select_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const space_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r23.spaceSelected(space_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const space_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("space", space_r21)("multiple", ctx_r22.multiple);
} }
function SpaceSelectModalComponent_ng_container_13_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SpaceSelectModalComponent_ng_container_13_ng_container_1_ng_container_1_a_space_select_item_1_Template, 1, 2, "a-space-select-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const space_r21 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r20.space_map[space_r21.id]);
} }
function SpaceSelectModalComponent_ng_container_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SpaceSelectModalComponent_ng_container_13_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r19.filtered_spaces);
} }
function SpaceSelectModalComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SpaceSelectModalComponent_ng_container_13_ng_container_1_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.filtered_spaces == null ? null : ctx_r2.filtered_spaces.length)("ngIfElse", _r5);
} }
function SpaceSelectModalComponent_div_14_ng_container_1_a_space_select_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "a-space-select-item", 22);
} if (rf & 2) {
    const space_r29 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("space", space_r29)("multiple", ctx_r28.multiple);
} }
function SpaceSelectModalComponent_div_14_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SpaceSelectModalComponent_div_14_ng_container_1_a_space_select_item_1_Template, 1, 2, "a-space-select-item", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r27.spaces);
} }
function SpaceSelectModalComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SpaceSelectModalComponent_div_14_ng_container_1_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx_r3.show_selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.spaces && ctx_r3.spaces.length)("ngIfElse", _r5);
} }
function SpaceSelectModalComponent_mat_dialog_actions_15_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-dialog-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SpaceSelectModalComponent_mat_dialog_actions_15_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r30.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Save selected spaces(", ctx_r4.spaces.length || "0", ") ");
} }
const _c0 = function () { return { class: "material-icons", content: "close" }; };
function SpaceSelectModalComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-icon", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No spaces");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
} }
function SpaceSelectModalComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-spinner", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Finding available spaces...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c1 = function () { return { type: "icon", class: "material-icons", content: "place" }; };
class SpaceSelectModalComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["BaseClass"] {
    constructor(_org, _calendar, _staff, _settings, _data) {
        super();
        this._org = _org;
        this._calendar = _calendar;
        this._staff = _staff;
        this._settings = _settings;
        this._data = _data;
        /** Emitter for user action on the modal */
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** List of selected spaces */
        this.spaces = [];
        /** List of available spaces */
        this.available_spaces = [];
        /** List of filtered spaces */
        this.filtered_spaces = [];
        /** List of available space types */
        this.space_types = [];
    }
    get buildings() {
        return this._org.buildings;
    }
    /** Whether multiple spaces can be selected */
    get multiple() {
        return !!this._settings.get('app.booking.multiple_spaces');
    }
    /** Mapping of spaces to whether they are selected */
    get space_map() {
        const spaces = {};
        this.spaces.forEach((space) => (spaces[space.id] = true));
        return spaces;
    }
    ngOnInit() {
        this.building = this._org.building || this.buildings[0];
        this.spaces = this._data.spaces && this._data.spaces.length ? [...this._data.spaces] : [];
        this.loadAvailableSpaces();
    }
    loadAvailableSpaces() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            const date = dayjs__WEBPACK_IMPORTED_MODULE_8__(this._data.date);
            this.available_spaces = yield this._calendar
                .availability({
                zone_ids: this.building.id,
                period_start: date.unix(),
                period_end: date.add(this._data.duration, 'm').unix(),
            })
                .catch((err) => {
                Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["notifyError"])(`Error finding available spaces: ${err.message || err}`);
                return [];
            });
            this.filtered_spaces = this.filterSpaces(this.available_spaces);
            this.loading = false;
        });
    }
    /** Check booking rules and filter spaces */
    filterSpaces(list) {
        const settings = this._org.building_settings;
        const res = Object(_bookings_src_lib_booking_utilities__WEBPACK_IMPORTED_MODULE_7__["filterSpacesRules"])(list, settings, this._staff.current, Object.assign({}, this._data));
        return res;
    }
    spaceSelected(space) {
        if (this.multiple) {
            if (!this.space_map[space.id]) {
                this.spaces.push(space);
            }
        }
        else {
            this.spaces = [space];
            this.save();
        }
    }
    save() {
        this.event.emit({ reason: 'done', metadata: this.spaces });
    }
}
SpaceSelectModalComponent.ɵfac = function SpaceSelectModalComponent_Factory(t) { return new (t || SpaceSelectModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_4__["OrganisationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_calendar_src_lib_calendar_service__WEBPACK_IMPORTED_MODULE_5__["CalendarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_users_src_lib_staff_service__WEBPACK_IMPORTED_MODULE_6__["StaffService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
SpaceSelectModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SpaceSelectModalComponent, selectors: [["a-space-select-modal"]], outputs: { event: "event" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 9, consts: [[3, "icon"], [1, "title"], [1, "flex-1", "w-0"], ["mat-icon-button", "", "mat-dialog-close", ""], [1, "heading"], ["appearance", "outline", 4, "ngIf"], [1, "body", 2, "width", "32rem"], [4, "ngIf", "ngIfElse"], ["class", "space-list", 3, "show", 4, "ngIf"], [4, "ngIf"], ["empty_state", ""], ["load_state", ""], ["appearance", "outline"], ["name", "booking-type", "placeholder", "Select building", 3, "value", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["name", "booking-type", "placeholder", "Any space type", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["type", "available", 3, "space", "multiple", "click", 4, "ngIf"], ["type", "available", 3, "space", "multiple", "click"], [1, "space-list"], ["type", "selected", 3, "space", "multiple", 4, "ngFor", "ngForOf"], ["type", "selected", 3, "space", "multiple"], ["mat-button", "", "color", "primary", 3, "click"], [1, "info-block"], [1, "icon"], [1, "text"], ["diameter", "48"]], template: function SpaceSelectModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "app-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SpaceSelectModalComponent_mat_form_field_10_Template, 3, 2, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SpaceSelectModalComponent_mat_form_field_11_Template, 3, 2, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SpaceSelectModalComponent_ng_container_13_Template, 2, 2, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SpaceSelectModalComponent_div_14_Template, 2, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, SpaceSelectModalComponent_mat_dialog_actions_15_Template, 4, 1, "mat-dialog-actions", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, SpaceSelectModalComponent_ng_template_16_Template, 5, 2, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, SpaceSelectModalComponent_ng_template_18_Template, 5, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Select space", ctx.multiple ? "s" : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.buildings && ctx.buildings.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.space_types && ctx.space_types.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.multiple);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.multiple);
    } }, styles: ["header[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\napp-icon[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  font-weight: 600;\n  flex: 1;\n}\n\n.mat-dialog-content[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.5em;\n  width: 100%;\n  padding: 0 0.25em;\n}\n\n.body[_ngcontent-%COMP%] {\n  min-width: 20rem;\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvc3BhY2VzL3NyYy9saWIvc3BhY2Utc2VsZWN0LW1vZGFsL3NwYWNlLXNlbGVjdC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsT0FBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsNkJBQUE7QUFDRiIsImZpbGUiOiJsaWJzL3NwYWNlcy9zcmMvbGliL3NwYWNlLXNlbGVjdC1tb2RhbC9zcGFjZS1zZWxlY3QtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuYXBwLWljb24ge1xuICBmb250LXNpemU6IDJlbTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZmxleDogMTtcbn1cblxuLm1hdC1kaWFsb2ctY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICBoZWlnaHQ6IDMuNWVtO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAwLjI1ZW07XG59XG5cbi5ib2R5IHtcbiAgbWluLXdpZHRoOiAyMHJlbTtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gMnJlbSk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SpaceSelectModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'a-space-select-modal',
                templateUrl: './space-select-modal.component.html',
                styleUrls: ['./space-select-modal.component.scss'],
            }]
    }], function () { return [{ type: _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_4__["OrganisationService"] }, { type: _calendar_src_lib_calendar_service__WEBPACK_IMPORTED_MODULE_5__["CalendarService"] }, { type: _users_src_lib_staff_service__WEBPACK_IMPORTED_MODULE_6__["StaffService"] }, { type: _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, { event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "c1e6":
/*!****************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/booking.utilities.ts ***!
  \****************************************************************************************************/
/*! exports provided: setMockBookingStartDatetime, generateMockBooking, getFreeBookingSlots, getNextFreeBookingSlot, storeBookingFormData, retrieveBookingFormData, clearBookingFormData, storeDeskBookingFormData, retrieveDeskBookingFormData, clearDeskBookingFormData, filterSpacesRules, rulesForSpace, getMinLength, durationGreaterThanOrEqual, stringToMinutes, statusFromBookings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMockBookingStartDatetime", function() { return setMockBookingStartDatetime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateMockBooking", function() { return generateMockBooking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFreeBookingSlots", function() { return getFreeBookingSlots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextFreeBookingSlot", function() { return getNextFreeBookingSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeBookingFormData", function() { return storeBookingFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retrieveBookingFormData", function() { return retrieveBookingFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearBookingFormData", function() { return clearBookingFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeDeskBookingFormData", function() { return storeDeskBookingFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retrieveDeskBookingFormData", function() { return retrieveDeskBookingFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearDeskBookingFormData", function() { return clearDeskBookingFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterSpacesRules", function() { return filterSpacesRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rulesForSpace", function() { return rulesForSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMinLength", function() { return getMinLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationGreaterThanOrEqual", function() { return durationGreaterThanOrEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToMinutes", function() { return stringToMinutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusFromBookings", function() { return statusFromBookings; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "w8Fe");
/* harmony import */ var _catering_src_lib_catering_item_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../catering/src/lib/catering-item.class */ "Ygd4");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _users_src_lib_user_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../users/src/lib/user.utilities */ "HTl7");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "BQ33");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs/plugin/customParseFormat */ "dvnC");
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_5__);






dayjs__WEBPACK_IMPORTED_MODULE_4__["extend"](dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_5__);
const MINUTE = 1;
const HOUR = 60;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;
const MONTH = 30 * DAY;
const DURATION_MAP = {
    month: MONTH,
    months: MONTH,
    week: WEEK,
    weeks: WEEK,
    day: DAY,
    days: DAY,
    hour: HOUR,
    hours: HOUR,
    minute: MINUTE,
    minutes: MINUTE,
};
let BOOKING_COUNT = 0;
let BOOKING_DATE = dayjs__WEBPACK_IMPORTED_MODULE_4__().hour(6).minute(0).subtract(1, 'd').startOf('m');
/**
 * Set the initial time used for generating mock bookings
 * @param time New initial time as ms from UTC epoch
 */
function setMockBookingStartDatetime(time) {
    BOOKING_DATE = dayjs__WEBPACK_IMPORTED_MODULE_4__(time).startOf('m');
}
const randomQuarterHours = () => Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["predictableRandomInt"])(5, 2) * 15;
/**
 * Create mock raw API data for a booking
 * @param override Overrides the properties of the generated booking with it's own
 */
function generateMockBooking(override = {}, resetDate = false) {
    const id = `booking-${BOOKING_COUNT++}`;
    if (!!resetDate) {
        BOOKING_DATE = dayjs__WEBPACK_IMPORTED_MODULE_4__().hour(6).minute(0).startOf('m');
    }
    BOOKING_DATE = BOOKING_DATE.add(randomQuarterHours(), 'm');
    const start = BOOKING_DATE.valueOf();
    const duration = randomQuarterHours();
    const cateringItem = new _catering_src_lib_catering_item_class__WEBPACK_IMPORTED_MODULE_1__["CateringItem"]({
        id: 'Cappucino',
        quantity: 5,
    });
    return Object.assign({ id, icaluid: Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["predictableRandomInt"])(99999999), title: `A Meeting ${Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["predictableRandomInt"])(99)}`, attendees: Array(Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["predictableRandomInt"])(5) + 2)
            .fill(0)
            .map((i) => Object(_users_src_lib_user_utilities__WEBPACK_IMPORTED_MODULE_3__["generateMockUser"])()), organiser: Object(_users_src_lib_user_utilities__WEBPACK_IMPORTED_MODULE_3__["generateMockUser"])(), start_epoch: dayjs__WEBPACK_IMPORTED_MODULE_4__(start).unix(), end_epoch: dayjs__WEBPACK_IMPORTED_MODULE_4__(start).add(duration, 'm').unix(), date: start, duration, description: `A Description`, notes: [{ type: 'other', message: `Some notes` }], location: `Your City`, catering: Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["predictableRandomInt"])(34567) % 3 === 0, extension_data: {
            catering_order: [cateringItem],
            catering_notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci. Metus dictum at tempor commodo ullamcorper a lacus.',
        }, link: Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["predictableRandomInt"])(10) > 5 ? 'https://browser.zoom.fake/j/12' : '', room_ids: [] }, override);
}
/**
 * Generate a list of free time slots between the given bookings
 * @param list List of bookings to find slots between
 * @param min_size Minimum length of a free slot in minutes
 */
function getFreeBookingSlots(list, min_size = 30) {
    if (!list) {
        return [
            {
                start: 0,
                end: dayjs__WEBPACK_IMPORTED_MODULE_4__().startOf('m').valueOf() * 10,
            },
        ];
    }
    const slots = [];
    let start = dayjs__WEBPACK_IMPORTED_MODULE_4__(0);
    list.sort((a, b) => a.date - b.date);
    for (const booking of list) {
        const bkn_start = dayjs__WEBPACK_IMPORTED_MODULE_4__(booking.date);
        const bkn_end = bkn_start.add(booking.duration, 'm');
        if (bkn_start.isAfter(start)) {
            const diff = Math.abs(bkn_start.diff(start, 'm'));
            if (diff >= min_size) {
                slots.push({ start: start.valueOf(), end: bkn_start.valueOf() });
            }
            start = bkn_end;
        }
        else if (start.startOf('m').valueOf() === bkn_start.startOf('m').valueOf()) {
            start = bkn_end;
        }
    }
    slots.push({
        start: start.valueOf(),
        end: dayjs__WEBPACK_IMPORTED_MODULE_4__().startOf('m').valueOf() * 10,
    });
    return slots;
}
/**
 * Get the next free time slot from the given bookings
 * @param list List of bookings to find the next slot
 * @param date Date to find next slot after in ms since UTC epoch
 * @param min_size Minimum length of the free slot in minutes
 */
function getNextFreeBookingSlot(list, date = dayjs__WEBPACK_IMPORTED_MODULE_4__().valueOf(), min_size = 30) {
    const slots = getFreeBookingSlots(list, min_size);
    const time = dayjs__WEBPACK_IMPORTED_MODULE_4__(date).startOf('m').second(1);
    for (const block of slots) {
        const start = dayjs__WEBPACK_IMPORTED_MODULE_4__(block.start).startOf('m');
        const end = dayjs__WEBPACK_IMPORTED_MODULE_4__(block.end).startOf('m');
        if (start.isAfter(time, 's')) {
            return block;
        }
        else if (time.isBefore(end, 's')) {
            const duration = end.diff(time, 'm');
            if (duration >= min_size) {
                return block;
            }
        }
    }
    return slots[slots.length - 1];
}
const STORED_BOOKING_KEY = 'STAFF.booking_form';
function storeBookingFormData(form) {
    if (localStorage) {
        const data = form ? form.value : {};
        if (form && form.controls && form.controls.extension_data) {
            data.extension_data = form.controls.extension_data.value;
        }
        localStorage.setItem(STORED_BOOKING_KEY, JSON.stringify(data));
    }
}
function retrieveBookingFormData() {
    let formData = {};
    if (localStorage) {
        const form_string = localStorage.getItem(STORED_BOOKING_KEY);
        if (form_string) {
            try {
                formData = JSON.parse(form_string);
            }
            catch (e) { }
        }
    }
    return formData;
}
function clearBookingFormData() {
    if (localStorage && !!retrieveBookingFormData()) {
        localStorage.removeItem(STORED_BOOKING_KEY);
    }
}
const STORED_DESK_BOOKING_KEY = 'STAFF.desk_form';
function storeDeskBookingFormData(form) {
    if (localStorage) {
        const data = form ? form.value : {};
        if (form && form.controls && form.controls.extension_data) {
            data.extension_data = form.controls.extension_data.value;
        }
        localStorage.setItem(STORED_DESK_BOOKING_KEY, JSON.stringify(data));
    }
}
function retrieveDeskBookingFormData() {
    let formData = {};
    if (localStorage) {
        const form_string = localStorage.getItem(STORED_DESK_BOOKING_KEY);
        if (form_string) {
            try {
                formData = JSON.parse(form_string);
            }
            catch (e) { }
        }
    }
    return formData;
}
function clearDeskBookingFormData() {
    if (localStorage && !!retrieveDeskBookingFormData()) {
        localStorage.removeItem(STORED_DESK_BOOKING_KEY);
    }
}
/** Filter spaces based on booking rules */
function filterSpacesRules(list = [], building_settings, host, options) {
    return list.filter((space) => {
        var _a;
        const booking_rules = (_a = building_settings[space.level.parent_id].details) === null || _a === void 0 ? void 0 : _a.booking_rules;
        const { date, all_day, duration, visitor_type } = options;
        const rules = rulesForSpace({
            space,
            time: date,
            duration: all_day ? 24 * 60 : duration,
            visitor_type,
            user: host,
            rules: booking_rules,
        });
        if (visitor_type) {
            return !rules.hide && rules.room_type === visitor_type;
        }
        else {
            return !rules.hide;
        }
    });
}
/**
 * Get booking rules for the given user and space
 * @param user User to determine applicable rules
 * @param space Space to get rules for
 * @param time Booking start time in ms since UTC epoch
 * @param rules List of booking rules for the building
 */
function rulesForSpace(options) {
    if (!options) {
        throw Error('Options are needed to check for rule matches');
    }
    const space_rules_for_user = {
        auto_approve: true,
        hide: false,
    };
    if (options.space) {
        for (const type of Object.keys(options.rules || {})) {
            if (options.rules.hasOwnProperty(type) &&
                options.rules[type] instanceof Array &&
                (options.space.zones || []).find((i) => i === type)) {
                space_rules_for_user.hide = true;
                for (const rule_block of options.rules[type]) {
                    if (checkRules({
                        user: options.user,
                        space: options.space,
                        time: options.time,
                        visitor_type: options.visitor_type,
                        duration: options.duration,
                        rules: rule_block.conditions,
                    })) {
                        const ruleset = rule_block.rules;
                        const conditions = rule_block.conditions;
                        space_rules_for_user.hide = false;
                        if (conditions.max_length) {
                            space_rules_for_user.max_length = stringToMinutes(conditions.max_length);
                        }
                        if (conditions.min_length) {
                            space_rules_for_user.min_length = stringToMinutes(conditions.min_length);
                        }
                        // NOTE: use max_length in conditions instead of book_length in rules
                        // if (ruleset.book_length) {
                        //     space_rules_for_user.max_length = stringToMinutes(ruleset.book_length as string);
                        // }
                        if (ruleset.auto_approve !== undefined) {
                            space_rules_for_user.auto_approve = ruleset.auto_approve;
                        }
                        if (ruleset.room_type !== undefined) {
                            space_rules_for_user.room_type = ruleset.room_type;
                        }
                        break;
                    }
                }
                if (!space_rules_for_user.hide) {
                    break;
                }
            }
        }
    }
    return space_rules_for_user;
}
/**
 * Check if user matches the given ruleset
 * @param user User to determine applicable rules
 * @param space Space to get rules for
 * @param time Booking start time in ms since UTC epoch
 * @param rules List of booking rules for the building
 */
function checkRules(options) {
    if (options.rules) {
        const time = dayjs__WEBPACK_IMPORTED_MODULE_4__(options.time);
        const count = Object.keys(options.rules).length;
        let matches = 0;
        for (const key of Object.keys(options.rules)) {
            let counter = 0;
            const condition = options.rules[key] instanceof Array
                ? options.rules[key]
                : [options.rules[key]];
            switch (key) {
                case 'group':
                case 'groups':
                    if (options.user && options.user.groups) {
                        counter = 0;
                        condition.forEach((i) => options.user.groups.find((j) => j === i) ? counter++ : null);
                        if (counter > 0) {
                            matches++;
                        }
                    }
                    break;
                case 'location':
                case 'locations':
                    // if (options.user && options.user.location) {
                    //     counter = 0;
                    //     condition.forEach(i =>
                    //         (options.user.last_location.name || '').indexOf(i) >= 0
                    //             ? counter++
                    //             : null
                    //     );
                    //     if (counter >= options.rules[key].length) {
                    //         matches++;
                    //     }
                    // }
                    break;
                case 'is_before':
                    if (options.time) {
                        const duration = stringToMinutes(condition[0]);
                        const check = dayjs__WEBPACK_IMPORTED_MODULE_4__().add(duration, 'm');
                        let match = time.isBefore(check, 'm');
                        matches += match ? 1 : 0;
                    }
                    break;
                case 'is_after':
                    if (options.time) {
                        const [amount, unit] = condition[0].split(' ');
                        const check = dayjs__WEBPACK_IMPORTED_MODULE_4__().add(+amount, unit);
                        time.isAfter(check, unit) ? matches++ : '';
                    }
                    break;
                case 'from_time':
                    const after_time = dayjs__WEBPACK_IMPORTED_MODULE_4__(condition[0], 'HH:mm');
                    if (dayjs__WEBPACK_IMPORTED_MODULE_4__().isAfter(after_time, 'm')) {
                        matches++;
                    }
                    break;
                case 'min_length':
                    if (options.duration) {
                        durationGreaterThanOrEqual(options.duration, condition[0]) ? matches++ : '';
                    }
                    break;
                case 'max_length':
                    if (options.duration) {
                        durationGreaterThanOrEqual(condition[0], options.duration) ? matches++ : '';
                    }
                    break;
                case 'visitor_types':
                    if (options.visitor_type) {
                        counter = 0;
                        condition.forEach((i) => (i === options.visitor_type ? counter++ : null));
                        if (counter > 0) {
                            matches++;
                        }
                    }
                    break;
            }
        }
        return matches >= count;
    }
    return false;
}
/**
 * Get minimum duration from ruleset in minutes
 * Default to 5min
 */
function getMinLength(rule_list) {
    return Object.values(rule_list).reduce((min, block) => {
        const min_block = block.reduce((min_length, el) => {
            if (el.conditions.min_length && stringToMinutes(el.conditions.min_length) > min) {
                return stringToMinutes(el.conditions.min_length);
            }
            else {
                return min_length;
            }
        }, 5);
        if (min_block > min) {
            return min_block;
        }
        else {
            return min;
        }
    }, 5);
}
/**
 * Whether the first input is greater than the last. Converts duration strings into minutes
 * @param duration_1 First input can be a number in minutes or a duration string e.g. `1 hour`
 * @param duration_2 Second input can be a number in minutes or a duration string e.g. `30 minutes`
 */
function durationGreaterThanOrEqual(duration_1, duration_2) {
    const first = typeof duration_1 === 'string' ? stringToMinutes(duration_1) : duration_1;
    const second = typeof duration_2 === 'string' ? stringToMinutes(duration_2) : duration_2;
    return first >= second;
}
/**
 * Conver time string into minutes
 * @param str timestring e.g. `'1 day'`, `'15 minutes'`, `'2 weeks'`
 */
function stringToMinutes(str) {
    const parts = str.split(' ');
    return +parts[0] * DURATION_MAP[parts[1]];
}
/**
 * Get current status within bookings
 * @param bookings List of bookings
 * @param host Host of the new event
 * @param date Datetime of the new event
 */
function statusFromBookings(bookings, bookable, requestable, date = dayjs__WEBPACK_IMPORTED_MODULE_4__().valueOf()) {
    const free_slots = getFreeBookingSlots(bookings);
    const now = dayjs__WEBPACK_IMPORTED_MODULE_4__(date);
    const next_free_slot = free_slots.find((slot) => {
        const start = dayjs__WEBPACK_IMPORTED_MODULE_4__(slot.start);
        const end = dayjs__WEBPACK_IMPORTED_MODULE_4__(slot.end);
        return start.isAfter(now) || (now.isAfter(start, 's') && now.isBefore(end, 'm'));
    });
    const start = dayjs__WEBPACK_IMPORTED_MODULE_4__(next_free_slot.start);
    const end = dayjs__WEBPACK_IMPORTED_MODULE_4__(next_free_slot.end);
    const currently_free = now.isAfter(start, 's') && now.isBefore(end, 'm');
    const time_until_next_block = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["formatDuration"])({
        minutes: currently_free ? end.diff(now, 'm') : start.diff(now, 'm'),
    });
    const free_tomorrow = !currently_free && !start.isSame(now, 'd');
    const free_today = currently_free && !end.isSame(now, 'd');
    return {
        status: !bookable
            ? 'Not Bookable'
            : currently_free
                ? requestable
                    ? 'Available by Request'
                    : 'Available'
                : 'Meeting in Progress',
        available_until: free_today
            ? 'No meetings today'
            : currently_free
                ? `Free until ${end.format('h:mma')}(${time_until_next_block})`
                : free_tomorrow
                    ? 'Unavailable today'
                    : `Free at ${start.format('h:mma')}(${time_until_next_block})`,
    };
}


/***/ }),

/***/ "c62n":
/*!******************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/guards/authorised-admin.guard.ts ***!
  \******************************************************************************************************************/
/*! exports provided: AuthorisedAdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorisedAdminGuard", function() { return AuthorisedAdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ "/It1");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _users_src_lib_staff_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../users/src/lib/staff.service */ "Vai6");









class AuthorisedAdminGuard {
    constructor(_router, _users) {
        this._router = _router;
        this._users = _users;
    }
    canActivate(next, state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["onlineState"])()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])((_) => _))
                .toPromise();
            const user = yield this._users.active_user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])((_) => !!_)).toPromise();
            const can_activate = user && user.sys_admin;
            if (!can_activate) {
                this._router.navigate(['/unauthorised']);
            }
            return can_activate;
        });
    }
    canLoad(route, segments) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["onlineState"])()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])((_) => _))
                .toPromise();
            const user = yield this._users.active_user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])((_) => !!_)).toPromise();
            const can_activate = user && user.sys_admin;
            if (!can_activate) {
                this._router.navigate(['/unauthorised']);
            }
            return can_activate;
        });
    }
}
AuthorisedAdminGuard.ɵfac = function AuthorisedAdminGuard_Factory(t) { return new (t || AuthorisedAdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_users_src_lib_staff_service__WEBPACK_IMPORTED_MODULE_5__["StaffService"])); };
AuthorisedAdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthorisedAdminGuard, factory: AuthorisedAdminGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthorisedAdminGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _users_src_lib_staff_service__WEBPACK_IMPORTED_MODULE_5__["StaffService"] }]; }, null); })();


/***/ }),

/***/ "cRFv":
/*!*********************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/mocks/src/index.ts ***!
  \*********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_api_zones_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/api/zones.mock */ "wJ7u");
/* harmony import */ var _lib_api_users_mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/api/users.mock */ "mvDl");
/* harmony import */ var _lib_api_systems_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/api/systems.mock */ "uJOJ");
/* harmony import */ var _lib_api_events_mock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/api/events.mock */ "JpQ1");
/* harmony import */ var _lib_api_calendars_mock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/api/calendars.mock */ "YZCY");
/* harmony import */ var _lib_api_bookings_mock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/api/bookings.mock */ "7WPI");
/* harmony import */ var _lib_systems_bindings_mock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/systems-bindings.mock */ "emHN");









/***/ }),

/***/ "ceWj":
/*!***********************************************************************!*\
  !*** ./src/app/overlays/view-room-modal/view-room-modal.component.ts ***!
  \***********************************************************************/
/*! exports provided: ViewRoomModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRoomModalComponent", function() { return ViewRoomModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "csyo");









function ViewRoomModalComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a-map", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-spinner", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.level == null ? null : ctx_r0.level.map_url)("features", ctx_r0.features);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.level == null ? null : ctx_r0.level.name);
} }
const _c0 = function () { return { type: "icon", class: "material-icons", content: "close" }; };
class ViewRoomModalComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["BaseClass"] {
    constructor(_data) {
        super();
        this._data = _data;
        /** Emitter for user action on the modal */
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get level() {
        return this.space.level;
    }
    ngOnInit() {
        const data = this._data;
        if (data) {
            this.space = data.space;
        }
    }
    /**  */
    get features() {
        return [this.focus];
    }
    /** Point on map to focus on */
    get focus() {
        if (!this.space) {
            return null;
        }
        return {
            location: `area-${this.space.map_id}-status`,
            content: null,
            data: {
                back: '#fff',
                fore: '#E0301E'
            },
            zoom: 100
        };
    }
}
ViewRoomModalComponent.ɵfac = function ViewRoomModalComponent_Factory(t) { return new (t || ViewRoomModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ViewRoomModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewRoomModalComponent, selectors: [["view-room-modal"]], outputs: { event: "event" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 4, consts: [["mat-dialog-title", ""], ["mat-icon-button", "", "mat-dialog-close", ""], [3, "icon"], ["class", "body", 4, "ngIf"], [1, "body"], [3, "src", "features"], ["diameter", "64"], [1, "level"]], template: function ViewRoomModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ViewRoomModalComponent_div_5_Template, 5, 3, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Locate Space - ", ctx.space.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.level);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"]], styles: [".body[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  min-height: 24em !important;\n  height: 24em;\n  width: 100%;\n}\n\n.icon[_ngcontent-%COMP%] {\n  height: 1.2em;\n  width: 1.2em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2em;\n}\n\n.content[_ngcontent-%COMP%] {\n  width: 16rem;\n  text-align: center;\n  font-size: 0.8em;\n}\n\n.level[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5em;\n  right: 0.5em;\n  padding: 0.25em 1.5em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1.1em;\n  height: 2em;\n  background-color: #fff;\n  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\napp-icon[_ngcontent-%COMP%] {\n  transition: font-size 200ms;\n}\n\na-map[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  z-index: 0;\n  pointer-events: none;\n}\n\n.close[_ngcontent-%COMP%] {\n  font-size: 1em;\n  cursor: pointer;\n}\n\n.close[_ngcontent-%COMP%]:hover   app-icon[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n}\n\nbutton[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvdmlzaXRvci1raW9zay9zcmMvYXBwL292ZXJsYXlzL3ZpZXctcm9vbS1tb2RhbC92aWV3LXJvb20tbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEVBQUE7RUFDQSx1R0FBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNJO0VBQ0UsZ0JBQUE7QUFDTjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQURGIiwiZmlsZSI6ImFwcHMvdmlzaXRvci1raW9zay9zcmMvYXBwL292ZXJsYXlzL3ZpZXctcm9vbS1tb2RhbC92aWV3LXJvb20tbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMjRlbSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDI0ZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaWNvbiB7XG4gIGhlaWdodDogMS4yZW07XG4gIHdpZHRoOiAxLjJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuXG4uY29udGVudCB7XG4gIHdpZHRoOiAxNnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IC44ZW07XG59XG5cbi5sZXZlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAuNWVtO1xuICByaWdodDogLjVlbTtcbiAgcGFkZGluZzogLjI1ZW0gMS41ZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxLjFlbTtcbiAgaGVpZ2h0OiAyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC0tdHctc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XG59XG5cbmFwcC1pY29uIHtcbiAgdHJhbnNpdGlvbjogZm9udC1zaXplIDIwMG1zO1xufVxuXG5hLW1hcCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uY2xvc2Uge1xuICBmb250LXNpemU6IDFlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAmOmhvdmVyIHtcbiAgICBhcHAtaWNvbiB7XG4gICAgICBmb250LXNpemU6IC44ZW07XG4gICAgfVxuICB9XG59XG5cbmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDFyZW07XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewRoomModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'view-room-modal',
                templateUrl: './view-room-modal.component.html',
                styleUrls: ['./view-room-modal.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, { event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "dJst":
/*!****************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/organisation/src/index.ts ***!
  \****************************************************************************************/
/*! exports provided: Building, generateMockBuilding, generateMockLevel, BuildingLevel, Organisation, OrganisationService, generateMockOrganisation, Zone, Desk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_organisation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/organisation */ "gYJc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Building", function() { return _lib_organisation__WEBPACK_IMPORTED_MODULE_0__["Building"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateMockBuilding", function() { return _lib_organisation__WEBPACK_IMPORTED_MODULE_0__["generateMockBuilding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateMockLevel", function() { return _lib_organisation__WEBPACK_IMPORTED_MODULE_0__["generateMockLevel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BuildingLevel", function() { return _lib_organisation__WEBPACK_IMPORTED_MODULE_0__["BuildingLevel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Organisation", function() { return _lib_organisation__WEBPACK_IMPORTED_MODULE_0__["Organisation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganisationService", function() { return _lib_organisation__WEBPACK_IMPORTED_MODULE_0__["OrganisationService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateMockOrganisation", function() { return _lib_organisation__WEBPACK_IMPORTED_MODULE_0__["generateMockOrganisation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Zone", function() { return _lib_organisation__WEBPACK_IMPORTED_MODULE_0__["Zone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Desk", function() { return _lib_organisation__WEBPACK_IMPORTED_MODULE_0__["Desk"]; });




/***/ }),

/***/ "dZoG":
/*!***********************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/mocks/src/lib/api/events.data.ts ***!
  \***********************************************************************************************/
/*! exports provided: MOCK_EVENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOCK_EVENTS", function() { return MOCK_EVENTS; });
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _spaces_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spaces.data */ "vcx8");
/* harmony import */ var _users_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.data */ "QgMi");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "BQ33");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);




let EVENT_TIME = dayjs__WEBPACK_IMPORTED_MODULE_3__().startOf('d').hour(7);
const nextEventTime = (save = false) => {
    const next = EVENT_TIME.add((Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_0__["predictableRandomInt"])(8) + 1) * 15, 'm');
    if (save) {
        EVENT_TIME = next;
    }
    return next.unix();
};
const event_status = ['tentative', 'confirmed', 'cancelled'];
const randomStatus = () => {
    const rnd = Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_0__["predictableRandomInt"])(10);
    return rnd < 2 ? event_status[2] : rnd < 5 ? event_status[0] : event_status[1];
};
const MOCK_EVENTS = new Array(200).fill(0).map((_, index) => {
    let attendees = _users_data__WEBPACK_IMPORTED_MODULE_2__["MOCK_STAFF"].concat(_users_data__WEBPACK_IMPORTED_MODULE_2__["MOCK_GUESTS"]).filter((_) => Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_0__["predictableRandomInt"])(9999) % 3 === 0);
    attendees.unshift(_users_data__WEBPACK_IMPORTED_MODULE_2__["MOCK_STAFF"][Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_0__["predictableRandomInt"])(_users_data__WEBPACK_IMPORTED_MODULE_2__["MOCK_STAFF"].length)]);
    attendees = Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_0__["unique"])(attendees, 'email');
    const space = _spaces_data__WEBPACK_IMPORTED_MODULE_1__["MOCK_SPACES"][Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_0__["predictableRandomInt"])(_spaces_data__WEBPACK_IMPORTED_MODULE_1__["MOCK_SPACES"].length)];
    attendees = attendees.concat(Object.assign(Object.assign({}, space), { resource: true }));
    const has_active_user = Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_0__["predictableRandomInt"])(9999) % 2 === 0;
    if (has_active_user) {
        attendees.push(_users_data__WEBPACK_IMPORTED_MODULE_2__["ACTIVE_USER"]);
    }
    return {
        id: `cal-event-${index}`,
        status: randomStatus(),
        host: has_active_user ? _users_data__WEBPACK_IMPORTED_MODULE_2__["ACTIVE_USER"].email : attendees[0].email,
        calendar: 'calendar_id',
        creator: 'optional@fake.com',
        attendees: Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_0__["unique"])(attendees, 'email'),
        title: `Some Meeting ${index}`,
        body: `A Description`,
        private: false,
        event_start: nextEventTime(true),
        event_end: nextEventTime(),
        timezone: 'Sydney',
        all_day: false,
        location: 'clear text location',
        recurring: false,
        recurrence: {},
        attachments: {},
        system: space,
        extension_data: {},
    };
});
const event_spaces = {};
MOCK_EVENTS.forEach((event) => {
    if (!event_spaces[event.system.id]) {
        event_spaces[event.system.id] = [];
    }
    event_spaces[event.system.id].push(event);
});


/***/ }),

/***/ "eZII":
/*!**********************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/events/src/index.ts ***!
  \**********************************************************************************/
/*! exports provided: setDefaultCreator, CalendarEvent, generateEventForm, isNotEmpty, isFuture, setMockBookingStartDatetime, rulesForSpace, durationGreaterThanOrEqual, stringToMinutes, statusFromBookings, getFreeBookingSlots, getNextFreeBookingSlot, replaceBookings, EventsService, eventStatus, formatRecurrence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/events */ "WlIe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setDefaultCreator", function() { return _lib_events__WEBPACK_IMPORTED_MODULE_0__["setDefaultCreator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarEvent", function() { return _lib_events__WEBPACK_IMPORTED_MODULE_0__["CalendarEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateEventForm", function() { return _lib_events__WEBPACK_IMPORTED_MODULE_0__["generateEventForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNotEmpty", function() { return _lib_events__WEBPACK_IMPORTED_MODULE_0__["isNotEmpty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFuture", function() { return _lib_events__WEBPACK_IMPORTED_MODULE_0__["isFuture"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setMockBookingStartDatetime", function() { return _lib_events__WEBPACK_IMPORTED_MODULE_0__["setMockBookingStartDatetime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rulesForSpace", function() { return _lib_events__WEBPACK_IMPORTED_MODULE_0__["rulesForSpace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "durationGreaterThanOrEqual", function() { return _lib_events__WEBPACK_IMPORTED_MODULE_0__["durationGreaterThanOrEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringToMinutes", function() { return _lib_events__WEBPACK_IMPORTED_MODULE_0__["stringToMinutes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "statusFromBookings", function() { return _lib_events__WEBPACK_IMPORTED_MODULE_0__["statusFromBookings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFreeBookingSlots", function() { return _lib_events__WEBPACK_IMPORTED_MODULE_0__["getFreeBookingSlots"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNextFreeBookingSlot", function() { return _lib_events__WEBPACK_IMPORTED_MODULE_0__["getNextFreeBookingSlot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceBookings", function() { return _lib_events__WEBPACK_IMPORTED_MODULE_0__["replaceBookings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return _lib_events__WEBPACK_IMPORTED_MODULE_0__["EventsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventStatus", function() { return _lib_events__WEBPACK_IMPORTED_MODULE_0__["eventStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatRecurrence", function() { return _lib_events__WEBPACK_IMPORTED_MODULE_0__["formatRecurrence"]; });




/***/ }),

/***/ "ek5h":
/*!*****************************************************!*\
  !*** ./src/app/ui/searchbar/searchbar.component.ts ***!
  \*****************************************************/
/*! exports provided: SearchbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarComponent", function() { return SearchbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "csyo");







const _c0 = ["input"];
function SearchbarComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return { type: "icon", class: "material-icons", content: "search" }; };
class SearchbarComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["BaseClass"] {
    constructor() {
        super(...arguments);
        /** Emitter for changes to the searchbar value */
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnChanges(changes) {
        if (changes.autofocus && this.autofocus) {
            this.focusField();
        }
    }
    focusField() {
        if (this.input_field && this.input_field.nativeElement) {
            this.input_field.nativeElement.focus();
        }
    }
}
SearchbarComponent.ɵfac = function SearchbarComponent_Factory(t) { return ɵSearchbarComponent_BaseFactory(t || SearchbarComponent); };
SearchbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchbarComponent, selectors: [["a-searchbar"]], viewQuery: function SearchbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input_field = _t.first);
    } }, inputs: { value: "value", placeholder: "placeholder", loading: "loading", autofocus: "autofocus" }, outputs: { valueChange: "valueChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 5, consts: [["tabindex", "0", 1, "searchbar", 3, "focus", "click"], [1, "prefix"], [3, "icon"], [1, "input"], ["type", "text", 3, "ngModel", "placeholder", "ngModelChange"], ["input", ""], ["class", "suffix", 4, "ngIf"], [1, "suffix"], ["diameter", "32"]], template: function SearchbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function SearchbarComponent_Template_div_focus_0_listener() { return ctx.focusField(); })("click", function SearchbarComponent_Template_div_click_0_listener() { return ctx.focusField(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchbarComponent_Template_input_ngModelChange_4_listener($event) { return ctx.value = $event; })("ngModelChange", function SearchbarComponent_Template_input_ngModelChange_4_listener($event) { return ctx.valueChange.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SearchbarComponent_div_6_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value)("placeholder", ctx.placeholder || "Search...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__["IconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatSpinner"]], styles: [".searchbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  max-width: calc(100% - 2em);\n  width: 800px;\n  margin: 1em auto;\n  background-color: #fff;\n  border-radius: 2em;\n  padding: 0 0.75em;\n  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n@media screen and (max-width: 639px) {\n  .searchbar[_ngcontent-%COMP%] {\n    border-radius: 0;\n    box-shadow: none;\n    margin: 0;\n    width: 100%;\n    max-width: 100%;\n    padding: 0 0.5em;\n    border-bottom: 1px solid #ccc;\n  }\n}\n.prefix[_ngcontent-%COMP%], .suffix[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n.input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 50%;\n}\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 1em;\n  border: none;\n  outline: none;\n  padding: 1em 0.5em;\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvdmlzaXRvci1raW9zay9zcmMvYXBwL3VpL3NlYXJjaGJhci9zZWFyY2hiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRFQUFBO0VBQ0EsdUdBQUE7QUFDRjtBQUFFO0VBWEY7SUFZSSxnQkFBQTtJQUVBLGdCQUFBO0lBRUEsU0FBQTtJQUVBLFdBQUE7SUFFQSxlQUFBO0lBRUEsZ0JBQUE7SUFFQSw2QkFBQTtFQUhGO0FBQ0Y7QUFNQTs7RUFFRSxnQkFBQTtBQUhGO0FBTUE7RUFDRSxPQUFBO0VBQ0EsY0FBQTtBQUhGO0FBTUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUhGIiwiZmlsZSI6ImFwcHMvdmlzaXRvci1raW9zay9zcmMvYXBwL3VpL3NlYXJjaGJhci9zZWFyY2hiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyZW0pO1xuICB3aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMWVtIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJlbTtcbiAgcGFkZGluZzogMCAuNzVlbTtcbiAgLS10dy1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuXG4gICAgYm94LXNoYWRvdzogbm9uZTtcblxuICAgIG1hcmdpbjogMDtcblxuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuXG4gICAgcGFkZGluZzogMCAuNWVtO1xuXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIH1cbn1cblxuLnByZWZpeCxcbi5zdWZmaXgge1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4uaW5wdXQge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDUwJTtcbn1cblxuaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMWVtIC41ZW07XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4iXX0= */"] });
const ɵSearchbarComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](SearchbarComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-searchbar',
                templateUrl: './searchbar.component.html',
                styleUrls: ['./searchbar.component.scss'],
            }]
    }], null, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['value']
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autofocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], input_field: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['input', { static: true }]
        }] }); })();


/***/ }),

/***/ "emHN":
/*!*****************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/mocks/src/lib/systems-bindings.mock.ts ***!
  \*****************************************************************************************************/
/*! exports provided: createSystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSystem", function() { return createSystem; });
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/ts-client */ "/It1");
/* harmony import */ var _realtime_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./realtime/control */ "M6W0");
/* harmony import */ var _realtime_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./realtime/events */ "TYM1");
/* harmony import */ var _realtime_desks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./realtime/desks */ "Ey1g");




function createSystem(space) {
    Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__["registerSystem"])(space.id, {
        System: [Object(_realtime_control__WEBPACK_IMPORTED_MODULE_1__["createSystemModule"])(space)],
        Bookings: [Object(_realtime_events__WEBPACK_IMPORTED_MODULE_2__["createBookingsModule"])(space)],
        AreaManagement: [Object(_realtime_desks__WEBPACK_IMPORTED_MODULE_3__["createLocationServicesModule"])(space)],
    });
}


/***/ }),

/***/ "gV1Q":
/*!**************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/binding/binding.directive.ts ***!
  \**************************************************************************************************************/
/*! exports provided: BindingDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindingDirective", function() { return BindingDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/ts-client */ "/It1");



class BindingDirective {
    constructor(_element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        /** Index of the system to bind */
        this.index = 1;
        /** ID of the system to bind to */
        this.params = [];
        /** Emitter for changes to the value of the binding */
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.init_listener = Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["onlineState"])().subscribe(init => {
            if (init) {
                this.bindVariable();
                if (this.init_listener) {
                    this.init_listener.unsubscribe();
                    this.init_listener = null;
                }
            }
        });
    }
    ngOnDestroy() {
        if (this.listener) {
            this.listener.unsubscribe();
            this.listener = null;
        }
        if (this.unbind) {
            this.unbind();
            this.unbind = null;
        }
        if (this.event_listener) {
            this.event_listener();
            this.event_listener = null;
        }
    }
    ngOnChanges(changes) {
        if (changes.sys || changes.mod || changes.bind) {
            this.ngOnDestroy();
            this.bindVariable();
        }
        if (changes.on_event && this.on_event) {
            if (this.event_listener) {
                this.event_listener();
                this.event_listener = null;
            }
            this.event_listener = this._renderer.listen(this._element.nativeElement, this.on_event, () => this.execute());
        }
    }
    /** Bind to set status variable */
    bindVariable() {
        if (Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["authority"])() && this.bind && this.sys && this.mod) {
            const module = Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["getModule"])(this.sys, this.mod, this.index);
            const binding = module.binding(this.bind);
            this.unbind = binding.bind();
            this.listener = binding.listen().subscribe(value => setTimeout(() => {
                this.model = value;
                this.modelChange.emit(this.model);
            }, 10));
        }
    }
    /** Excute the set method on the module */
    execute() {
        if (Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["authority"])() && this.exec && this.sys && this.mod) {
            const module = Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["getModule"])(this.sys, this.mod, this.index);
            module.execute(this.exec, this.params).then(result => {
                // Emit exec result if not bound to status variable
                if (!this.bind) {
                    this.model = result;
                    this.modelChange.emit(this.model);
                }
            });
        }
    }
    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    writeValue(value) {
        this.model = value;
        this.modelChange.emit(this.model);
        if (this.exec) {
            this.execute();
        }
    }
}
BindingDirective.ɵfac = function BindingDirective_Factory(t) { return new (t || BindingDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
BindingDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BindingDirective, selectors: [["i", "bind", ""], ["", "binding", ""], ["co-bind"]], inputs: { sys: "sys", mod: "mod", index: "index", bind: "bind", exec: "exec", on_event: ["onEvent", "on_event"], params: "params", model: "model" }, outputs: { modelChange: "modelChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BindingDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'i[bind], [binding], co-bind'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { sys: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mod: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], bind: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], exec: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], on_event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['onEvent']
        }], params: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], model: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], modelChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "gYJc":
/*!***************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/organisation/src/lib/organisation.ts ***!
  \***************************************************************************************************/
/*! exports provided: Building, generateMockBuilding, generateMockLevel, BuildingLevel, Organisation, OrganisationService, generateMockOrganisation, Zone, Desk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _building_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./building.class */ "o6WN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Building", function() { return _building_class__WEBPACK_IMPORTED_MODULE_0__["Building"]; });

/* harmony import */ var _building_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./building.utilities */ "hcVY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateMockBuilding", function() { return _building_utilities__WEBPACK_IMPORTED_MODULE_1__["generateMockBuilding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateMockLevel", function() { return _building_utilities__WEBPACK_IMPORTED_MODULE_1__["generateMockLevel"]; });

/* harmony import */ var _level_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./level.class */ "rrlD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BuildingLevel", function() { return _level_class__WEBPACK_IMPORTED_MODULE_2__["BuildingLevel"]; });

/* harmony import */ var _organisation_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./organisation.class */ "hHhb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Organisation", function() { return _organisation_class__WEBPACK_IMPORTED_MODULE_3__["Organisation"]; });

/* harmony import */ var _organisation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./organisation.service */ "6P+R");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrganisationService", function() { return _organisation_service__WEBPACK_IMPORTED_MODULE_4__["OrganisationService"]; });

/* harmony import */ var _organisation_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organisation.utilities */ "+OeS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateMockOrganisation", function() { return _organisation_utilities__WEBPACK_IMPORTED_MODULE_5__["generateMockOrganisation"]; });

/* harmony import */ var _zone_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./zone.class */ "HVAD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Zone", function() { return _zone_class__WEBPACK_IMPORTED_MODULE_6__["Zone"]; });

/* harmony import */ var _desk_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./desk.class */ "A/X2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Desk", function() { return _desk_class__WEBPACK_IMPORTED_MODULE_7__["Desk"]; });











/***/ }),

/***/ "gpkD":
/*!****************************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/duration-field/duration-field.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: DurationFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DurationFieldComponent", function() { return DurationFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "w8Fe");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "BQ33");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "mFH5");









function DurationFieldComponent_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r2.name, " ");
} }
class DurationFieldComponent {
    constructor() {
        /** Maximum duration option available */
        this.max = 240;
        /** Minimum duration option available */
        this.min = 30;
        /** Step value between options */
        this.step = 15;
        /** Special case prepopulation i.e. out of step options */
        this.specialPreprops = [];
        this.duration = 60;
    }
    ngOnInit() {
        this.duration_options = this.generateDurationOptions(this.max, this.min, this.step);
    }
    ngOnChanges(changes) {
        /* istanbul ignore else */
        if (changes.max || changes.min || changes.step || changes.time) {
            this.duration_options = this.generateDurationOptions(this.max, this.min, this.step);
        }
    }
    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    setValue(new_value) {
        this.duration = new_value;
        /* istanbul ignore else */
        if (this._onChange) {
            this._onChange(+new_value);
        }
    }
    /* istanbul ignore next */
    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    writeValue(value) {
        this.duration = value;
    }
    setDisabledState(disabled) {
        this.disabled = disabled;
    }
    /* istanbul ignore next */
    /**
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param fn The callback function to register
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /* istanbul ignore next */
    /**
     * Registers a callback function is called by the forms API on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    registerOnTouched(fn) {
        this._onTouch = fn;
    }
    generateDurationOptions(max, min, step) {
        const blocks = [];
        let time = min;
        let date = this.time ? dayjs__WEBPACK_IMPORTED_MODULE_3__(this.time) : null;
        // Add special case for 10min duration/prepropulation
        for (const option of this.specialPreprops) {
            blocks.push({
                id: option,
                name: date
                    ? `${date.add(option, 'm').format('h:mm A')} (${Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["formatDuration"])({
                        hours: Math.floor(option / 60),
                        minutes: option % 60,
                    })})`
                    : `${Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["formatDuration"])({ hours: Math.floor(option / 60), minutes: option % 60 })}`,
            });
        }
        while (time <= max) {
            blocks.push({
                id: time,
                name: date
                    ? `${date.add(time, 'm').format('h:mm A')} (${Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["formatDuration"])({
                        hours: Math.floor(time / 60),
                        minutes: time % 60,
                    })})`
                    : `${Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["formatDuration"])({ hours: Math.floor(time / 60), minutes: time % 60 })}`,
            });
            time += step;
        }
        return blocks;
    }
}
DurationFieldComponent.ɵfac = function DurationFieldComponent_Factory(t) { return new (t || DurationFieldComponent)(); };
DurationFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DurationFieldComponent, selectors: [["a-duration-field"]], inputs: { max: "max", min: "min", step: "step", time: "time", disabled: "disabled", specialPreprops: "specialPreprops" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => DurationFieldComponent),
                multi: true,
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 4, consts: [[1, "duration-field"], ["appearance", "outline"], [3, "value", "disabled", "valueChange"], ["select", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function DurationFieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-select", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function DurationFieldComponent_Template_mat_select_valueChange_2_listener($event) { return ctx.setValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DurationFieldComponent_mat_option_4_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.duration)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.duration_options);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"]], styles: ["[_nghost-%COMP%] {\n                width: 100%;\n            }\n\n            mat-form-field[_ngcontent-%COMP%] {\n                width: 100%;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DurationFieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-duration-field',
                template: `
        <div class="duration-field" [attr.disabled]="disabled">
            <mat-form-field appearance="outline">
                <mat-select
                    #select
                    [value]="duration"
                    [disabled]="disabled"
                    (valueChange)="setValue($event)"
                >
                    <mat-option *ngFor="let option of duration_options" [value]="option.id">
                        {{ option.name }}
                    </mat-option>
                </mat-select>
            </mat-form-field>
        </div>
    `,
                styles: [
                    `
            :host {
                width: 100%;
            }

            mat-form-field {
                width: 100%;
            }
        `,
                ],
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => DurationFieldComponent),
                        multi: true,
                    },
                ],
            }]
    }], null, { max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], step: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], time: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], specialPreprops: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "h6+u":
/*!***************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/common/src/lib/angular-animations.ts ***!
  \***************************************************************************************************/
/*! exports provided: ANIMATION_SHOW_ENTER_LEAVE, ANIMATION_SHOW_CONTRACT_EXPAND */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMATION_SHOW_ENTER_LEAVE", function() { return ANIMATION_SHOW_ENTER_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMATION_SHOW_CONTRACT_EXPAND", function() { return ANIMATION_SHOW_CONTRACT_EXPAND; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "f7+R");

const ANIMATION_SHOW_ENTER_LEAVE = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('show', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, height: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, height: '*' }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, height: '*' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, height: 0 }))
    ])
]);
const ANIMATION_SHOW_CONTRACT_EXPAND = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('show', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, height: '*' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, height: 0, 'pointer-events': 'none' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('show <=> hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in'))
]);


/***/ }),

/***/ "hHhb":
/*!*********************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/organisation/src/lib/organisation.class.ts ***!
  \*********************************************************************************************************/
/*! exports provided: Organisation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Organisation", function() { return Organisation; });
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");

class Organisation extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_0__["BaseDataClass"] {
    constructor(raw_data = {}) {
        super(raw_data);
        this.description = raw_data.description || '';
        this.tags = raw_data.tags || [];
        this.count = raw_data.count || 0;
        this.capacity = raw_data.capacity || 0;
        this.bindings = raw_data.bindings || {};
        this._settings = raw_data.settings || {};
    }
    /**
     * Get a custom organisation setting
     * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
     */
    setting(key) {
        const keys = key.split('.');
        const value = Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_0__["getItemWithKeys"])(keys, this._settings);
        return value;
    }
}


/***/ }),

/***/ "hcVY":
/*!*********************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/organisation/src/lib/building.utilities.ts ***!
  \*********************************************************************************************************/
/*! exports provided: generateMockBuilding, generateMockLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateMockBuilding", function() { return generateMockBuilding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateMockLevel", function() { return generateMockLevel; });
let BLD_COUNT = 0;
let LVL_COUNT = 0;
/**
 * Generate raw mock data for creating a building
 * @param id Forced ID for the mock
 */
function generateMockBuilding(id) {
    if (!id) {
        id = `zone_bld-${BLD_COUNT++}`;
    }
    const levels = Array(10)
        .fill(0)
        .map(i => generateMockLevel());
    const features = {};
    for (const lvl of levels) {
        const count = Math.floor(Math.random() * 3 + 2);
        features[lvl.level_id] = {};
        for (let i = 0; i < count; i++) {
            features[lvl.level_id][`A Feature ${i + 1}`] = `feature-${i + 1}`;
        }
    }
    return {
        id,
        zone_id: id,
        extras: Array(10)
            .fill(0)
            .map((_, idx) => {
            const name = `Property ${idx + 1}`;
            return {
                extra_id: name
                    .split(' ')
                    .join('-')
                    .toLowerCase(),
                extra_name: name
            };
        }),
        loan_items: Array(10)
            .fill(0)
            .map((_, idx) => {
            const name = `Property ${idx + 1}`;
            return {
                extra_id: name
                    .split(' ')
                    .join('-')
                    .toLowerCase(),
                extra_name: name
            };
        }),
        levels,
        roles: {
            'first-aiders': Array(10)
                .fill(0)
                .map(i => ({ name: 'Test' }))
        },
        neighbourhoods: features,
        settings: {
            test: {
                nested: {
                    level2: true,
                    org: false
                }
            }
        },
        room_configurations: [
            { id: 'boardroom', name: 'Boardroom', description: 'A boardroom setting' },
            { id: 'cocktail', name: 'Cocktail', description: 'A cocktail setting' },
        ]
    };
}
/**
 * Generate raw mock data for a building level
 * @param id Forced ID for the mock
 * @param map_url Map URL for the level
 */
function generateMockLevel(id, map_url) {
    if (!id) {
        id = `zone_lvl-${LVL_COUNT++}`;
    }
    return {
        level_id: id,
        level_name: `Level ${LVL_COUNT}`,
        map_url
    };
}


/***/ }),

/***/ "iEsz":
/*!***********************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/mocks/src/lib/api/common.mock.ts ***!
  \***********************************************************************************************/
/*! exports provided: DOMAIN, API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAIN", function() { return DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/** Domain of the organisation */
const DOMAIN = 'place.tech';
/** Endpoint where the staff API is located */
const API = '/api/staff/v1';


/***/ }),

/***/ "jcOF":
/*!**********************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/login/login.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");





const _c0 = ["pass_field"];
function LoginComponent_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.logo.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.logo.content);
} }
function LoginComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "safe");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, ctx_r1.logo.src, "resource"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function LoginComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_ng_container_7_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.username = $event; })("focus", function LoginComponent_ng_container_7_Template_input_focus_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.focus = "username"; })("blur", function LoginComponent_ng_container_7_Template_input_blur_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.focus = ""; })("keyup.enter", function LoginComponent_ng_container_7_Template_input_keyup_enter_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.toPassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_ng_container_7_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.password = $event; })("focus", function LoginComponent_ng_container_7_Template_input_focus_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.focus = "password"; })("blur", function LoginComponent_ng_container_7_Template_input_blur_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.focus = ""; })("keyup.enter", function LoginComponent_ng_container_7_Template_input_keyup_enter_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Invalid username or password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("focused", ctx_r2.username || ctx_r2.focus === "username")("in-focus", ctx_r2.focus === "username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("focused", ctx_r2.password || ctx_r2.focus === "password")("in-focus", ctx_r2.focus === "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.password);
} }
function LoginComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-spinner", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Checking user credentials...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["BaseClass"] {
    constructor(_settings) {
        super();
        this._settings = _settings;
    }
    ngOnInit() {
        this.loading = true;
        this._settings.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(_ => _)).subscribe(() => {
            this.loading = false;
            this.logo = this._settings.get('app.logo_dark') || { type: 'icon' };
        });
    }
    /** Focus on the password field */
    toPassword() {
        if (this.pwd_field && this.pwd_field.nativeElement) {
            this.pwd_field.nativeElement.focus();
            this.focus = 'password';
        }
    }
    /** Perform user login */
    login() {
        this.loading = true;
        // this._users.login({
        //     username: this.username,
        //     password: this.password
        // }, { form: true }).then(() => {
        //     this.loading = false;
        // }, () => {
        //     this.loading = false;
        //     this.error = true;
        // });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["SettingsService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], viewQuery: function LoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pwd_field = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 11, vars: 9, consts: [[1, "login"], [1, "login-form"], [1, "header"], [1, "logo"], [3, "class", 4, "ngIf"], [3, "src", 4, "ngIf"], [1, "body"], [4, "ngIf", "ngIfElse"], ["class", "footer", 4, "ngIf"], ["loading_state", ""], [3, "src"], [1, "field"], ["for", "username"], ["id", "username", 3, "ngModel", "ngModelChange", "focus", "blur", "keyup.enter"], ["for", "password"], ["id", "password", "type", "password", 3, "ngModel", "ngModelChange", "focus", "blur", "keyup.enter"], ["pass_field", ""], [1, "error-message"], [1, "footer"], ["mat-button", "", "color", "primary", 3, "click"], [1, "info-block", "center"], [1, "icon"], ["diameter", "64"], [1, "text"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_i_4_Template, 2, 3, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_img_5_Template, 2, 4, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_ng_container_7_Template, 12, 10, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginComponent_div_8_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_ng_template_9_Template, 5, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.logo == null ? null : ctx.logo.background);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.logo == null ? null : ctx.logo.type) === "icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.logo == null ? null : ctx.logo.type) === "img");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("error", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, styles: [".login[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background-color: #F0F0F0;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%23ad1457' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.login-form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 320px;\n  max-width: 95vh;\n  min-height: 320px;\n  background-color: #fff;\n  border-radius: 6px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  margin: 1em auto;\n  padding: 1em;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-height: 60px;\n  max-width: 240px;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  padding: 1em;\n  width: 100%;\n}\n\n.body[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  min-height: 30%;\n  flex: 1;\n}\n\n.field[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 1em 0;\n}\n\nlabel[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.25rem;\n  top: 50%;\n  transform: translateY(-50%);\n  transition: top 200ms, color 200ms, font-size 200ms;\n  background-color: #fff;\n  padding: 0 0.25rem;\n  color: rgba(0, 0, 0, 0.6);\n  z-index: 2;\n  border-radius: 4px;\n}\n\nlabel.focused[_ngcontent-%COMP%] {\n  top: 0;\n  font-size: 0.6em;\n  color: rgba(0, 0, 0, 0.85);\n}\n\nlabel.in-focus[_ngcontent-%COMP%] {\n  color: rgba(var(--primary), 0.85) !important;\n}\n\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\n.error[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: var(--error);\n}\n\n.error[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-color: var(--error);\n}\n\n.error[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  display: none;\n  width: 100%;\n  text-align: center;\n  color: var(--error);\n  font-size: 0.7em;\n  margin-top: -1em;\n  margin-bottom: 1em;\n}\n\n.info-block[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n}\n\n.info-block[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  height: 3em;\n  width: 3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvY29tcG9uZW50cy9zcmMvbGliL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSw0dEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrR0FBQTtFQUdBLGdCQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxtREFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQURGOztBQUVFO0VBQ0UsTUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUFBSjs7QUFFRTtFQUNFLDRDQUFBO0FBQUo7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFERjs7QUFLRTtFQUNFLG1CQUFBO0FBRko7O0FBSUU7RUFDRSwwQkFBQTtBQUZKOztBQUlFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBRko7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxTQUFBO0FBSEY7O0FBSUU7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQUZKIiwiZmlsZSI6ImxpYnMvY29tcG9uZW50cy9zcmMvbGliL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgdmlld0JveD0nMCAwIDY0IDY0JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNOCAxNmM0LjQxOCAwIDgtMy41ODIgOC04cy0zLjU4Mi04LTgtOC04IDMuNTgyLTggOCAzLjU4MiA4IDggOHptMC0yYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0zMy40MTQtNmw1Ljk1LTUuOTVMNDUuOTUuNjM2IDQwIDYuNTg2IDM0LjA1LjYzNiAzMi42MzYgMi4wNSAzOC41ODYgOGwtNS45NSA1Ljk1IDEuNDE0IDEuNDE0TDQwIDkuNDE0bDUuOTUgNS45NSAxLjQxNC0xLjQxNEw0MS40MTQgOHpNNDAgNDhjNC40MTggMCA4LTMuNTgyIDgtOHMtMy41ODItOC04LTgtOCAzLjU4Mi04IDggMy41ODIgOCA4IDh6bTAtMmMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnpNOS40MTQgNDBsNS45NS01Ljk1LTEuNDE0LTEuNDE0TDggMzguNTg2bC01Ljk1LTUuOTVMLjYzNiAzNC4wNSA2LjU4NiA0MGwtNS45NSA1Ljk1IDEuNDE0IDEuNDE0TDggNDEuNDE0bDUuOTUgNS45NSAxLjQxNC0xLjQxNEw5LjQxNCA0MHonIGZpbGw9JyUyM2FkMTQ1NycgZmlsbC1vcGFjaXR5PScwLjInIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVwiKTtcbn1cblxuLmxvZ2luLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMzIwcHg7XG4gIG1heC13aWR0aDogOTV2aDtcbiAgbWluLWhlaWdodDogMzIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgjMDAwLCAuMiksXG4gICAgICAgICAgICAgICAgMCAxcHggMXB4IDAgcmdiYSgjMDAwLCAuMTQpLFxuICAgICAgICAgICAgICAgIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwgLjEyKTtcbiAgbWFyZ2luOiAxZW0gYXV0bztcbiAgcGFkZGluZzogMWVtO1xufVxuXG5pbWcge1xuICBtYXgtaGVpZ2h0OiA2MHB4O1xuICBtYXgtd2lkdGg6IDI0MHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMWVtO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJvZHkge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAzMCU7XG4gIGZsZXg6IDE7XG59XG5cbi5maWVsZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxZW0gMDtcbn1cblxubGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC4yNXJlbTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNpdGlvbjogdG9wIDIwMG1zLCBjb2xvciAyMDBtcywgZm9udC1zaXplIDIwMG1zO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwIC4yNXJlbTtcbiAgY29sb3I6IHJnYmEoIzAwMCwgLjYpO1xuICB6LWluZGV4OiAyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICYuZm9jdXNlZCB7XG4gICAgdG9wOiAwO1xuICAgIGZvbnQtc2l6ZTogLjZlbTtcbiAgICBjb2xvcjogcmdiYSgjMDAwLCAuODUpO1xuICB9XG4gICYuaW4tZm9jdXMge1xuICAgIGNvbG9yOiByZ2JhKHZhcigtLXByaW1hcnkpLCAuODUpICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmVycm9yIHtcbiAgbGFiZWwge1xuICAgIGNvbG9yOiB2YXIoLS1lcnJvcik7XG4gIH1cbiAgaW5wdXQge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZXJyb3IpO1xuICB9XG4gIC5lcnJvci1tZXNzYWdlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWVycm9yKTtcbiAgZm9udC1zaXplOiAuN2VtO1xuICBtYXJnaW4tdG9wOiAtMWVtO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbi5pbmZvLWJsb2NrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgLmljb24ge1xuICAgIGhlaWdodDogM2VtO1xuICAgIHdpZHRoOiAzZW07XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["SettingsService"] }]; }, { pwd_field: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['pass_field', { static: true }]
        }] }); })();


/***/ }),

/***/ "jiQt":
/*!**********************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/users/src/lib/groups.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: GroupsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsService", function() { return GroupsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ "/It1");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.class */ "xuqh");









class GroupsService extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["BaseAPIService"] {
    constructor(uhttp, location) {
        super();
        this.uhttp = uhttp;
        this.location = location;
        this._name = 'Role User';
        this._api_route = 'groups';
    }
    /**
     * Get API route for the service
     * @param engine Whether endpoint is using the application API or engine API
     */
    route(engine = false) {
        const endpoint = '/control/';
        return `${endpoint}${this._api_route}`;
    }
    /**
     * Query the API route for a sepecific item
     * @param id ID of the item
     * @param query_params Map of query paramaters to add to the request URL
     */
    show(id, query_params = {}) {
        let engine = false;
        if (query_params) {
            engine = !!query_params.engine;
            delete query_params.engine;
        }
        const query = Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["toQueryString"])(query_params);
        const key = `show|${id}|${query}`;
        if (!this._promises[key]) {
            this._promises[key] = new Promise((resolve, reject) => {
                const url = `${this.route(engine)}/${id}${query ? '?' + query : ''}`;
                let result = null;
                Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["get"])(url).subscribe((d) => (result = d.map((i) => this.process(i))), (e) => {
                    reject(e);
                    this._promises.new_item = null;
                }, () => {
                    resolve(result);
                    this.timeout(key, () => (this._promises[key] = null), 1000);
                });
            });
        }
        return this._promises[key];
    }
    /**
     * Convert raw API data into a valid User Object
     * @param raw_item Raw API data
     */
    process(raw_data) {
        return new _user_class__WEBPACK_IMPORTED_MODULE_5__["User"](raw_data);
    }
}
GroupsService.ɵfac = function GroupsService_Factory(t) { return new (t || GroupsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"])); };
GroupsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GroupsService, factory: GroupsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }]; }, null); })();


/***/ }),

/***/ "kD+q":
/*!********************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/date-field/date-field.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: DateFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateFieldComponent", function() { return DateFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "BQ33");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ "gcUQ");









class DateFieldComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["BaseClass"] {
    constructor() {
        super(...arguments);
        /** Earliest date available the user is allowed to pick */
        this._from = dayjs__WEBPACK_IMPORTED_MODULE_3__().valueOf();
        /** Position of the tooltip */
        this.position = 'right';
        /** Offset of the tooltip */
        this.offset = 'bottom';
    }
    /** First allowed date on the calendar */
    get from() {
        return new Date(this._from) || dayjs__WEBPACK_IMPORTED_MODULE_3__().startOf('d').toDate();
    }
    /** Current date value */
    get until() {
        return new Date(this._to) || dayjs__WEBPACK_IMPORTED_MODULE_3__().endOf('d').add(1, 'y').toDate();
    }
    /** Display value for the current date */
    get date_string() {
        return dayjs__WEBPACK_IMPORTED_MODULE_3__(this.date).format('DD MMM YYYY');
    }
    ngOnInit() {
        this.date = new Date().toISOString();
    }
    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    setValue(new_value) {
        // Keep hours and minutes of the old date
        const old_date = dayjs__WEBPACK_IMPORTED_MODULE_3__(this.date);
        let new_date = dayjs__WEBPACK_IMPORTED_MODULE_3__(new_value)
            .hour(old_date.hour())
            .minute(old_date.minute())
            .startOf('m')
            .valueOf();
        // Check that new date is before from
        if (new_date < this.from.valueOf()) {
            new_date = this.from.valueOf();
        }
        this.date = new Date(new_date).toISOString();
        if (this._onChange) {
            this._onChange(new_date);
        }
        this.show_tooltip = false;
    }
    /* istanbul ignore next */
    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    writeValue(value) {
        this.date = new Date(value).toISOString();
        this.show_tooltip = false;
    }
    /* istanbul ignore next */
    /**
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param fn The callback function to register
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /* istanbul ignore next */
    /**
     * Registers a callback function is called by the forms API on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    registerOnTouched(fn) {
        this._onTouch = fn;
    }
    setDisabledState(disabled) {
        this.disabled = disabled;
    }
}
DateFieldComponent.ɵfac = function DateFieldComponent_Factory(t) { return ɵDateFieldComponent_BaseFactory(t || DateFieldComponent); };
DateFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DateFieldComponent, selectors: [["a-date-field"]], inputs: { _from: ["from", "_from"], _to: ["to", "_to"], position: "position", offset: "offset", disabled: "disabled" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => DateFieldComponent),
                multi: true,
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 6, consts: [["appearance", "outline", "overlay", "", 3, "click"], ["matInput", "", 3, "ngModel", "disabled", "min", "max", "matDatepicker", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""]], template: function DateFieldComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateFieldComponent_Template_mat_form_field_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r0.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DateFieldComponent_Template_input_ngModelChange_1_listener($event) { return ctx.setValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-datepicker-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-datepicker", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.date)("disabled", ctx.disabled)("min", ctx.from)("max", ctx.until)("matDatepicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepicker"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\n                width: 100%;\n            }"] });
const ɵDateFieldComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DateFieldComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateFieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-date-field',
                template: `
        <mat-form-field appearance="outline" overlay (click)="picker.open()">
            <input matInput [ngModel]="date" [disabled]="disabled" [min]="from" [max]="until" (ngModelChange)="setValue($event)" [matDatepicker]="picker" />
            <mat-datepicker-toggle
                matSuffix
                [for]="picker"
            ></mat-datepicker-toggle>
            <mat-datepicker  #picker></mat-datepicker>
        </mat-form-field>
    `,
                styles: [
                    `
            mat-form-field {
                width: 100%;
            }
        `,
                ],
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => DateFieldComponent),
                        multi: true,
                    },
                ],
            }]
    }], null, { _from: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['from']
        }], _to: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['to']
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], offset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "kEdz":
/*!*********************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/common/src/lib/google-analytics.service.ts ***!
  \*********************************************************************************************************/
/*! exports provided: GoogleAnalyticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleAnalyticsService", function() { return GoogleAnalyticsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");




class GoogleAnalyticsService {
    constructor(title) {
        this.title = title;
        /** Whether posting analytics events is enabled */
        this.enabled = true;
        /** Name of the application */
        this.app_name = 'GA_APP';
        /** Store for timer ids */
        this.timers = {};
        if (!window.ga) {
            (function (i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                (i[r] =
                    i[r] ||
                        function () { (i[r].q = i[r].q || []).push(arguments); }), (i[r].l = 1 * new Date());
                (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m);
            })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
            console.log('Service', 'Injected Google Analytics into page');
        }
        this.service = window.ga;
    }
    /**
     * Initialise Google Analytics
     * @param tracking_id GA Tracking ID
     */
    load(tracking_id) {
        if (!this.enabled) {
            throw new Error('Google Analytics needs to be enabled before being initialised');
        }
        if (!this.service) {
            throw new Error('Google Analytics hasn\'t been installed on this page');
        }
        console.log('Service', `Setup with tracking ID: ${tracking_id}`);
        this.service('create', tracking_id, 'auto');
        this.service('send', 'pageview');
    }
    /**
     * Set User ID for the Google Analytics session
     * @param id Identifier of the User
     */
    setUser(id) {
        if (!this.service) {
            throw new Error('Google Analytics hasn\'t been installed on this page');
        }
        if (this.enabled) {
            this.timeout(`user|${id}`, () => {
                console.log('Service', `Set user ID: ${id}`);
                this.service('set', 'userId', id);
                this.event('authentication', 'user-id available');
            }, 100);
        }
    }
    /**
     * Post event to Google Analytics API
     * @param category Event Category
     * @param action Event Action
     * @param label Event Label
     * @param value Event Value
     */
    event(category, action, label, value) {
        if (!this.service) {
            throw new Error('Google Analytics hasn\'t been installed on this page');
        }
        if (this.enabled) {
            this.timeout(`event|${category}|${action}|${label}|${value}`, () => {
                const l = label ? ', ' + label : '';
                console.log('Service', `Event: ${category}, ${action}${l}${value ? ', ' + value : ''}`);
                const prefix = this.app_prefix ? this.app_prefix + '_' : '';
                this.service('send', 'event', `${prefix}${category}`, action, label, value);
            }, 100);
        }
    }
    /**
     * Post screen change event to Google Analytics API
     * @param name
     * @param app_name
     */
    screen(name, app_name) {
        if (!this.service) {
            throw new Error('Google Analytics hasn\'t been installed on this page');
        }
        if (name && this.enabled) {
            this.timeout(`event|${name}|${app_name || this.app_name}`, () => {
                console.log('Service', `Screen: ${name}${app_name ? ', ' + app_name : ''}`);
                this.service('send', 'screenview', {
                    appName: app_name || this.app_name,
                    screenName: name
                });
            }, 100);
        }
    }
    /**
     * Post routing event to Google Analytics API
     * @param route Activated route
     * @param origin Add origin to routh path
     */
    page(route, origin = false) {
        if (!this.service) {
            throw new Error('Google Analytics hasn\'t been installed on this page');
        }
        if (this.enabled) {
            this.last_route = route || '/';
            this.timeout(`page|${route}`, () => {
                console.log('Service', `Page: ${route}`);
                this.service('send', 'pageview', `${origin ? location.origin : ''}${route}`);
            }, 100);
        }
    }
    /**
     * Post timing event to Google Analytics API
     * @param category
     * @param variable
     * @param value
     * @param label
     */
    timing(category, variable, value, label) {
        if (!this.service) {
            throw new Error('Google Analytics hasn\'t been installed on this page');
        }
        if (this.enabled) {
            this.timeout(`page|${category}|${variable}|${value}|${label}`, () => {
                console.log('Service', `Timing: ${category}, ${variable}, ${value}${label ? ', ' + label : ''}`);
                this.service('send', 'timing', category, variable, value, label);
            }, 100);
        }
    }
    /**
     * Creates a timeout for the given name used for preventing duplicate events in quick succession
     * @param name Name of timer
     * @param fn Timer callback
     * @param delay Timer delay
     */
    timeout(name, fn, delay = 300) {
        if (this.timers[name]) {
            clearTimeout(this.timers[name]);
            this.timers[name] = null;
        }
        this.timers[name] = setTimeout(() => {
            if (fn instanceof Function) {
                fn();
            }
            this.timers[name] = null;
        }, delay);
    }
}
GoogleAnalyticsService.ɵfac = function GoogleAnalyticsService_Factory(t) { return new (t || GoogleAnalyticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
GoogleAnalyticsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GoogleAnalyticsService, factory: GoogleAnalyticsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleAnalyticsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "kOXA":
/*!*********************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/map-radius.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: MapRadiusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapRadiusComponent", function() { return MapRadiusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _interactive_map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive-map.component */ "lYMz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");




const _c0 = ["map-radius", ""];
function MapRadiusComponent_ng_container_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", "-" + ctx_r1.radius * 100 + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.message, " ");
} }
function MapRadiusComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MapRadiusComponent_ng_container_0_div_2_Template, 2, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-color", ctx_r0.stroke)("background-color", ctx_r0.fill + "40")("width", ctx_r0.radius * 100 + "%")("height", ctx_r0.radius * 100 + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.message && ctx_r0.show_message);
} }
class MapRadiusComponent {
    constructor(_details) {
        this._details = _details;
        /** Message to display above the pin */
        this.message = this._details.message;
        /** Fill colour for the pin SVG */
        this.fill = this._details.fill || '#e53935';
        /** Fill colour for the pin SVG */
        this.radius = this._details.radius || 10;
        /** Stroke colour for the pin SVG */
        this.stroke = this._details.stroke || '#e53935';
    }
    ngOnInit() {
        setTimeout(() => (this.show = true), 300);
        setTimeout(() => (this.show_message = true), 1000);
    }
}
MapRadiusComponent.ɵfac = function MapRadiusComponent_Factory(t) { return new (t || MapRadiusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_interactive_map_component__WEBPACK_IMPORTED_MODULE_1__["MAP_FEATURE_DATA"])); };
MapRadiusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapRadiusComponent, selectors: [["", "map-radius", ""]], attrs: _c0, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "center", "border-4", "rounded-full", "border-dashed"], ["name", "message", "class", "p-2 m-2 rounded bg-white text-gray-700 shadow absolute top-0 whitespace-no-wrap", 3, "top", 4, "ngIf"], ["name", "message", 1, "p-2", "m-2", "rounded", "bg-white", "text-gray-700", "shadow", "absolute", "top-0", "whitespace-no-wrap"]], template: function MapRadiusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MapRadiusComponent_ng_container_0_Template, 3, 9, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["[_nghost-%COMP%] {\n                position: absolute;\n                height: 100%;\n                width: 100%;\n            }\n\n            [name=\"message\"][_ngcontent-%COMP%] {\n                transform: translateX(-50%);\n            }\n\n            div[_ngcontent-%COMP%] {\n                animation: fade-in-top 1s;\n            }\n\n            @keyframes fade-in-top {\n                0% {\n                    opacity: 0;\n                    transform: translate(-50%, -100%)\n                }\n                100% {\n                    opacity: 1;\n                    transform translate(-50%, 0%);\n                }\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapRadiusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[map-radius]',
                template: `
        <ng-container *ngIf="show">
            <div
                class="center border-4 rounded-full border-dashed"
                [style.border-color]="stroke"
                [style.background-color]="fill + '40'"
                [style.width]="radius * 100 + '%'"
                [style.height]="radius * 100 + '%'"
            ></div>
            <div
                *ngIf="message && show_message"
                name="message"
                [style.top]="'-' + radius * 100 + '%'"
                class="p-2 m-2 rounded bg-white text-gray-700 shadow absolute top-0 whitespace-no-wrap"
            >
                {{ message }}
            </div>
        </ng-container>
    `,
                styles: [
                    `
            :host {
                position: absolute;
                height: 100%;
                width: 100%;
            }

            [name="message"] {
                transform: translateX(-50%);
            }

            div {
                animation: fade-in-top 1s;
            }

            @keyframes fade-in-top {
                0% {
                    opacity: 0;
                    transform: translate(-50%, -100%)
                }
                100% {
                    opacity: 1;
                    transform translate(-50%, 0%);
                }
            }
        `,
                ],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_interactive_map_component__WEBPACK_IMPORTED_MODULE_1__["MAP_FEATURE_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "lXmF":
/*!**************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/app.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: initSentry, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initSentry", function() { return initSentry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/service-worker */ "NDGq");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "W1gw");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/clipboard */ "HHFY");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @placeos/ts-client */ "/It1");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @user-interfaces/organisation */ "dJst");
/* harmony import */ var _spaces_src_lib_spaces_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../spaces/src/lib/spaces.service */ "VK0q");
/* harmony import */ var _users_src_lib_staff_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../users/src/lib/staff.service */ "Vai6");
/* harmony import */ var _events_src_lib_event_class__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../events/src/lib/event.class */ "SUR7");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ "w8Fe");
/* harmony import */ var _sentry_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @sentry/angular */ "t3L3");
/* harmony import */ var _sentry_tracing__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @sentry/tracing */ "jXqh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ "csyo");




























function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-spinner", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("diameter", 64);
} }
function initSentry(dsn, sample_rate = .2) {
    if (!dsn)
        return;
    _sentry_angular__WEBPACK_IMPORTED_MODULE_14__["init"]({
        dsn,
        integrations: [
            new _sentry_tracing__WEBPACK_IMPORTED_MODULE_15__["Integrations"].BrowserTracing({
                tracingOrigins: ['localhost', location.origin],
                routingInstrumentation: _sentry_angular__WEBPACK_IMPORTED_MODULE_14__["routingInstrumentation"],
            }),
        ],
        tracesSampleRate: sample_rate,
    });
}
class AppComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_8__["BaseClass"] {
    constructor(_tracing, _settings, _org, // For init
    _spaces, // For init
    _users, _cache, _snackbar, _hotkey, _clipboard) {
        super();
        this._tracing = _tracing;
        this._settings = _settings;
        this._org = _org;
        this._spaces = _spaces;
        this._users = _users;
        this._cache = _cache;
        this._snackbar = _snackbar;
        this._hotkey = _hotkey;
        this._clipboard = _clipboard;
        this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        /** Observable for whether the application is initialising */
        this.loading = this._loading.asObservable();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._hotkey.listen(['Control', 'Alt', 'Shift', 'KeyM'], () => {
                localStorage.setItem('mock', `${localStorage.getItem('mock') !== 'true'}`);
                location.reload();
            });
            this._hotkey.listen(['Control', 'Alt', 'Shift', 'KeyC'], () => {
                this._clipboard.copy(`${Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_7__["token"])()}|${Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_7__["refreshToken"])()}`);
                Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_8__["notifySuccess"])('Successfully copied token.');
            });
            this._hotkey.listen(['Control', 'Alt', 'Shift', 'KeyV'], () => {
                var _a;
                (_a = navigator.clipboard) === null || _a === void 0 ? void 0 : _a.readText().then((tkn) => {
                    const parts = tkn.split('|');
                    localStorage.setItem(`${Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_7__["clientId"])()}_access_token`, `${tkn[0]}`);
                    localStorage.setItem(`${Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_7__["clientId"])()}_refresh_token`, `${tkn[1]}`);
                    localStorage.setItem(`${Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_7__["clientId"])()}_expires_at`, `${Object(date_fns__WEBPACK_IMPORTED_MODULE_13__["addHours"])(new Date(), 6).valueOf()}`);
                    Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_8__["notifySuccess"])('Successfully pasted token.');
                    setTimeout(() => location.reload(), 2000);
                });
            });
            Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_8__["setNotifyOutlet"])(this._snackbar);
            this._loading.next(true);
            /** Wait for settings to initialise */
            yield this._settings.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])((_) => _)).toPromise();
            Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_8__["setAppName"])(this._settings.get('app.short_name'));
            const settings = this._settings.get('composer') || {};
            settings.mock = !!this._settings.get('mock');
            /** Wait for authentication details to load */
            yield Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_8__["setupPlace"])(settings).catch(() => this.onInitError());
            this._loading.next(false);
            Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_8__["setupCache"])(this._cache);
            this.timeout('wait_for_user', () => this.onInitError(), 5 * 1000);
            yield this._users.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])((_) => _)).toPromise();
            this.clearTimeout('wait_for_user');
            Object(_events_src_lib_event_class__WEBPACK_IMPORTED_MODULE_12__["setDefaultCreator"])(this._users.current);
            initSentry(this._settings.get('app.sentry_dsn'));
        });
    }
    onInitError() {
        if (Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_7__["isMock"])()) {
            return;
        }
        Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_7__["invalidateToken"])();
        location.reload();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_sentry_angular__WEBPACK_IMPORTED_MODULE_14__["TraceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_common__WEBPACK_IMPORTED_MODULE_8__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_9__["OrganisationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_spaces_src_lib_spaces_service__WEBPACK_IMPORTED_MODULE_10__["SpacesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_users_src_lib_staff_service__WEBPACK_IMPORTED_MODULE_11__["StaffService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwUpdate"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_common__WEBPACK_IMPORTED_MODULE_8__["HotkeysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__["Clipboard"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 3, consts: [["class", "loading-block", 4, "ngIf"], [1, "loading-block"], [1, "info-block", "center"], [1, "icon"], [3, "diameter"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_div_1_Template, 4, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx.loading));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["AsyncPipe"]], styles: [".bg-darken {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.text-light {\n  color: rgba(255, 255, 255, 0.85);\n}\n\n.text-light-fade {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.text-light-disabled {\n  color: rgba(255, 255, 255, 0.35);\n}\n\n.text-dark {\n  color: rgba(0, 0, 0, 0.85);\n}\n\n.text-dark-fade {\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.h-half {\n  height: 50%;\n}\n\n.min-w-24 {\n  min-width: 6em;\n}\n\n.min-w-32 {\n  min-width: 8em !important;\n}\n\n.min-w-48 {\n  min-width: 12em;\n}\n\n.min-w-64 {\n  min-width: 16em;\n}\n\n.width-tablet {\n  width: 768px;\n  max-width: calc(100vw - 2em);\n}\n\n.top {\n  top: 0 !important;\n  bottom: auto !important;\n}\n\n.bottom {\n  top: auto !important;\n  bottom: 0 !important;\n}\n\n.left {\n  left: 0 !important;\n  right: auto !important;\n}\n\n.right {\n  left: auto !important;\n  right: 0 !important;\n}\n\n.center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC1zdHlsZXMvdXRpbGl0eS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBQ0YiLCJmaWxlIjoic2hhcmVkLXN0eWxlcy91dGlsaXR5LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctZGFya2VuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMDAwLCAuMSk7XG59XG5cbi50ZXh0LWxpZ2h0IHtcbiAgY29sb3I6IHJnYmEoI2ZmZiwgLjg1KTtcbn1cblxuLnRleHQtbGlnaHQtZmFkZSB7XG4gIGNvbG9yOiByZ2JhKCNmZmYsIC42KTtcbn1cblxuLnRleHQtbGlnaHQtZGlzYWJsZWQge1xuICBjb2xvcjogcmdiYSgjZmZmLCAuMzUpO1xufVxuXG4udGV4dC1kYXJrIHtcbiAgY29sb3I6IHJnYmEoIzAwMCwgLjg1KTtcbn1cblxuLnRleHQtZGFyay1mYWRlIHtcbiAgY29sb3I6IHJnYmEoIzAwMCwgLjYpO1xufVxuXG4uaC1oYWxmIHtcbiAgaGVpZ2h0OiA1MCU7XG59XG5cbi5taW4tdy0yNCB7XG4gIG1pbi13aWR0aDogNmVtO1xufVxuXG4ubWluLXctMzIge1xuICBtaW4td2lkdGg6IDhlbSAhaW1wb3J0YW50O1xufVxuXG4ubWluLXctNDgge1xuICBtaW4td2lkdGg6IDEyZW07XG59XG5cbi5taW4tdy02NCB7XG4gIG1pbi13aWR0aDogMTZlbTtcbn1cblxuLndpZHRoLXRhYmxldCB7XG4gIHdpZHRoOiA3NjhweDtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gMmVtKTtcbn1cblxuLnRvcCB7XG4gIHRvcDogMCAhaW1wb3J0YW50O1xuICBib3R0b206IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLmJvdHRvbSB7XG4gIHRvcDogYXV0byAhaW1wb3J0YW50O1xuICBib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLmxlZnQge1xuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5yaWdodCB7XG4gIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuLmNlbnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4iXX0= */", ":root {\n  --primary: #c2185b;\n  --primary-dark: #ad1457;\n  --secondary: #263238;\n  --secondary-dark: #212121;\n  --font-light: #fff;\n  --font-dark: #000;\n  --success: #43a047;\n  --pending: #ffb300;\n  --error: #e53935;\n  --bg: #f0f0f0;\n  --bg-dark: #212121;\n  --font: \"Helvetica Neue\", Roboto, Helvetica, sans-serif;\n  --heading-font: Georgia, \"Times New Roman\", Times, serif;\n}\n\nhtml,\nbody {\n  background-color: #f0f0f0;\n  height: 100%;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  font-size: 16px;\n}\n\n* {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  font-family: \"Helvetica Neue\", Roboto, Helvetica, sans-serif;\n  font-family: var(--font);\n  box-sizing: border-box;\n}\n\n.material-icons {\n  font-size: 1em;\n}\n\nspan.highlight {\n  color: #c2185b;\n  color: var(--primary);\n}\n\n/*=======================*\\\n||    Font size styles   ||\n\\*=======================*/\n\n.fs-small {\n  font-size: 0.8rem;\n}\n\n.fs-normal {\n  font-size: 1rem;\n}\n\n.fs-big {\n  font-size: 1.2rem;\n}\n\n.fs-large {\n  font-size: 1.5rem;\n}\n\n/*========================*\\\n||   Application styles   ||\n\\*========================*/\n\n.info-block {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin: 0.5em auto;\n  width: 100%;\n  min-height: 6em;\n}\n\n.info-block .icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 1.2em;\n  width: 1.2em;\n  font-size: 2em;\n}\n\n.info-block .icon a-spinner {\n  font-size: 0.25em;\n}\n\n.info-block .text {\n  margin: 0.5em;\n  text-align: center;\n}\n\n.loading-block {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 999;\n  background-color: #fff;\n}\n\n.loading-block .icon {\n  height: 4em;\n  width: 4em;\n}\n\n.center,\n[center] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/*=====================*\\\n||  TinyMCE overrides  ||\n\\*=====================*/\n\ndiv.tox-silver-sink {\n  z-index: 9999;\n}\n\ndiv.tox-silver-sink .tox-notification {\n  display: none;\n}\n\ndiv.tox-editor-container .tox-menubar button:first-child {\n  display: none;\n}\n\n@media screen and (max-width: 639px) {\n  div.tox-tinymce {\n    min-height: 20em;\n  }\n}\n\n@-webkit-keyframes crossfade {\n  0% {\n    background-color: #d32f2f;\n  }\n  20% {\n    background-color: #7b1fa2;\n  }\n  40% {\n    background-color: #1976d2;\n  }\n  60% {\n    background-color: #00796b;\n  }\n  80% {\n    background-color: #ff8f00;\n  }\n  100% {\n    background-color: #d32f2f;\n  }\n}\n\n@keyframes crossfade {\n  0% {\n    background-color: #d32f2f;\n  }\n  20% {\n    background-color: #7b1fa2;\n  }\n  40% {\n    background-color: #1976d2;\n  }\n  60% {\n    background-color: #00796b;\n  }\n  80% {\n    background-color: #ff8f00;\n  }\n  100% {\n    background-color: #d32f2f;\n  }\n}\n\ni-map svg {\n  display: initial !important;\n}\n\ni-map svg *:not([id^=table]):not([id^=area]):not([id^=book]):not([id^=furniature]) {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC1zdHlsZXMvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdURBQUE7RUFDQSx3REFBQTtBQUNGOztBQUVBOztFQUVFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0csc0JBQUE7RUFDQyxxQkFBQTtFQUNJLGlCQUFBO0VBQ1IsNERBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTs7MEJBQUE7O0FBS0U7RUFDRSxpQkFBQTtBQURKOztBQUdFO0VBQ0UsZUFBQTtBQURKOztBQUdFO0VBQ0UsaUJBQUE7QUFESjs7QUFHRTtFQUNFLGlCQUFBO0FBREo7O0FBS0E7OzJCQUFBOztBQUlBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFIRjs7QUFJRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBRko7O0FBR0k7RUFDRSxpQkFBQTtBQUROOztBQUlFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBRko7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFIRjs7QUFJRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FBRko7O0FBTUE7O0VBRUUsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBSEY7O0FBTUE7O3dCQUFBOztBQUlBO0VBQ0UsYUFBQTtBQUpGOztBQUtFO0VBQ0UsYUFBQTtBQUhKOztBQVNJO0VBQ0UsYUFBQTtBQU5OOztBQVlFO0VBREY7SUFFSSxnQkFBQTtFQVJGO0FBQ0Y7O0FBV0E7RUFDRTtJQUNFLHlCQUFBO0VBUkY7RUFXQTtJQUNFLHlCQUFBO0VBVEY7RUFZQTtJQUNFLHlCQUFBO0VBVkY7RUFhQTtJQUNFLHlCQUFBO0VBWEY7RUFjQTtJQUNFLHlCQUFBO0VBWkY7RUFlQTtJQUNFLHlCQUFBO0VBYkY7QUFDRjs7QUFnQkE7RUFDRTtJQUNFLHlCQUFBO0VBZEY7RUFpQkE7SUFDRSx5QkFBQTtFQWZGO0VBa0JBO0lBQ0UseUJBQUE7RUFoQkY7RUFtQkE7SUFDRSx5QkFBQTtFQWpCRjtFQW9CQTtJQUNFLHlCQUFBO0VBbEJGO0VBcUJBO0lBQ0UseUJBQUE7RUFuQkY7QUFDRjs7QUFzQkE7RUFDRSwyQkFBQTtBQXBCRjs7QUFxQkU7RUFDRSxhQUFBO0FBbkJKIiwiZmlsZSI6InNoYXJlZC1zdHlsZXMvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xuICAtLXByaW1hcnk6ICNjMjE4NWI7XG4gIC0tcHJpbWFyeS1kYXJrOiAjYWQxNDU3O1xuICAtLXNlY29uZGFyeTogIzI2MzIzODtcbiAgLS1zZWNvbmRhcnktZGFyazogIzIxMjEyMTtcbiAgLS1mb250LWxpZ2h0OiAjZmZmO1xuICAtLWZvbnQtZGFyazogIzAwMDtcbiAgLS1zdWNjZXNzOiAjNDNhMDQ3O1xuICAtLXBlbmRpbmc6ICNmZmIzMDA7XG4gIC0tZXJyb3I6ICNlNTM5MzU7XG4gIC0tYmc6ICNmMGYwZjA7XG4gIC0tYmctZGFyazogIzIxMjEyMTtcbiAgLS1mb250OiAnSGVsdmV0aWNhIE5ldWUnLCBSb2JvdG8sIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgLS1oZWFkaW5nLWZvbnQ6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbioge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgUm9ib3RvLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbnNwYW4uaGlnaGxpZ2h0IHtcbiAgY29sb3I6ICNjMjE4NWI7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgICAgRm9udCBzaXplIHN0eWxlcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbi5mcyB7XG4gICYtc21hbGwge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICB9XG4gICYtbm9ybWFsIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbiAgJi1iaWcge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gICYtbGFyZ2Uge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIEFwcGxpY2F0aW9uIHN0eWxlcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4uaW5mby1ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDAuNWVtIGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA2ZW07XG4gIC5pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxLjJlbTtcbiAgICB3aWR0aDogMS4yZW07XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgYS1zcGlubmVyIHtcbiAgICAgIGZvbnQtc2l6ZTogMC4yNWVtO1xuICAgIH1cbiAgfVxuICAudGV4dCB7XG4gICAgbWFyZ2luOiAwLjVlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuLmxvYWRpbmctYmxvY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogOTk5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAuaWNvbiB7XG4gICAgaGVpZ2h0OiA0ZW07XG4gICAgd2lkdGg6IDRlbTtcbiAgfVxufVxuXG4uY2VudGVyLFxuW2NlbnRlcl0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIFRpbnlNQ0Ugb3ZlcnJpZGVzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09Ki9cblxuZGl2LnRveC1zaWx2ZXItc2luayB7XG4gIHotaW5kZXg6IDk5OTk7XG4gIC50b3gtbm90aWZpY2F0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbmRpdi50b3gtZWRpdG9yLWNvbnRhaW5lciB7XG4gIC50b3gtbWVudWJhciB7XG4gICAgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbmRpdi50b3gtdGlueW1jZSB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gICAgbWluLWhlaWdodDogMjBlbTtcbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgY3Jvc3NmYWRlIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzJmMmY7XG4gIH1cblxuICAyMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3YjFmYTI7XG4gIH1cblxuICA0MCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDJcbiAgfVxuXG4gIDYwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzk2YjtcbiAgfVxuXG4gIDgwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGYwMDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzJmMmY7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBjcm9zc2ZhZGUge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzMmYyZjtcbiAgfVxuXG4gIDIwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdiMWZhMjtcbiAgfVxuXG4gIDQwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMlxuICB9XG5cbiAgNjAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3OTZiO1xuICB9XG5cbiAgODAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4ZjAwO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzMmYyZjtcbiAgfVxufVxuXG5pLW1hcCBzdmcge1xuICBkaXNwbGF5OiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gICo6bm90KFtpZF49XCJ0YWJsZVwiXSk6bm90KFtpZF49XCJhcmVhXCJdKTpub3QoW2lkXj1cImJvb2tcIl0pOm5vdChbaWRePVwiZnVybmlhdHVyZVwiXSkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */", ".spinner svg {\n  width: 100%;\n}\n\nbutton.mat-button,\na[button],\n.dark-mode button.mat-button,\n.dark-mode a[button] {\n  background-color: var(--primary);\n  border: 1px solid var(--primary);\n  color: var(--font-light);\n  min-height: 3em;\n}\n\nbutton.mat-button.inverse,\na[button].inverse,\n.dark-mode button.mat-button.inverse,\n.dark-mode a[button].inverse {\n  background-color: #fff;\n  color: var(--primary);\n}\n\nbutton.mat-button.success,\na[button].success,\n.dark-mode button.mat-button.success,\n.dark-mode a[button].success {\n  background-color: var(--success);\n  border-color: var(--primary);\n}\n\nbutton.mat-button.clear,\na[button].clear,\n.dark-mode button.mat-button.clear,\n.dark-mode a[button].clear {\n  background: none;\n  border: none;\n  color: var(--font-dark);\n}\n\nbutton.mat-button.error,\na[button].error,\n.dark-mode button.mat-button.error,\n.dark-mode a[button].error {\n  background: none;\n  color: var(--error);\n  border-color: var(--error);\n}\n\nbutton.mat-button[disabled],\na[button][disabled],\n.dark-mode button.mat-button[disabled],\n.dark-mode a[button][disabled] {\n  background-color: #ccc;\n  border-color: rgba(0, 0, 0, 0.1);\n  pointer-events: none;\n}\n\n.mat-tab-body-wrapper {\n  flex-grow: 1;\n}\n\n.mat-icon-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 2em;\n  width: 2em;\n  font-size: 1em;\n}\n\n.mat-icon-button .mat-button-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.mat-icon-button app-icon {\n  font-size: 1.5em;\n}\n\n.mat-icon-button[disabled] {\n  opacity: 0.35;\n}\n\n.panel .mat-icon-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 2em;\n  width: 2em;\n  font-size: 1em;\n}\n\n.panel .mat-icon-button.action {\n  background-color: #fff;\n  border: 2px solid #000;\n  box-shadow: 0 0 0 2px #fff;\n  color: rgba(0, 0, 0, 0.8);\n  height: 2em;\n  width: 2em;\n}\n\n.panel .mat-icon-button .mat-button-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.panel .mat-icon-button app-icon {\n  font-size: 1em;\n}\n\n.dropdown[widget].default {\n  width: 9.5em;\n}\n\n.dynamic-field[widget] .details {\n  min-width: 100%;\n}\n\n.dynamic-field[widget] label {\n  margin-left: 0;\n}\n\n.dynamic-field[widget] .control {\n  min-width: 10em;\n}\n\n.overlay-backdrop {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\nmat-slide-toggle .mat-slide-toggle-bar {\n  height: 24px;\n  border-radius: 12px;\n}\n\nmat-slide-toggle .mat-slide-toggle-thumb-container {\n  top: 2px;\n  left: 2px;\n}\n\nmat-slide-toggle.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container {\n  transform: translate3d(12px, 0, 0);\n}\n\n[bg=white] .mat-form-field-outline {\n  background-color: #fff;\n}\n\nmat-dialog-container.mat-dialog-container {\n  padding: 0;\n}\n\nmat-dialog-container.mat-dialog-container header {\n  display: flex;\n  align-items: center;\n  padding: 0.5em 1em;\n  width: 100%;\n  background-color: var(--primary);\n  color: var(--font-light);\n}\n\nmat-dialog-container.mat-dialog-container header h1,\nmat-dialog-container.mat-dialog-container header h2,\nmat-dialog-container.mat-dialog-container header h3,\nmat-dialog-container.mat-dialog-container header h4 {\n  flex: 1;\n  min-width: 50%;\n}\n\nmat-dialog-container.mat-dialog-container header > * {\n  margin: 0;\n}\n\nmat-dialog-container.mat-dialog-container .mat-dialog-content {\n  margin: 0;\n  padding: 0;\n}\n\nmat-dialog-container.mat-dialog-container .mat-dialog-content .body {\n  padding: 1em;\n}\n\nmat-dialog-container.mat-dialog-container .mat-dialog-actions {\n  margin-bottom: 0;\n}\n\nmat-dialog-container.mat-dialog-container .mat-dialog-actions footer {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nmat-form-field.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: var(--primary);\n}\n\nmat-form-field.map .mat-form-field-wrapper, mat-form-field.white .mat-form-field-wrapper {\n  padding: 0;\n}\n\nmat-form-field.map .mat-form-field-outline, mat-form-field.white .mat-form-field-outline {\n  background-color: #fff;\n  border-radius: 4px;\n}\n\n.mat-form-field-infix {\n  border-top: none;\n}\n\n.mat-select-panel .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: var(--primary);\n}\n\nmat-select .mat-select-trigger .mat-select-arrow-wrapper {\n  transform: none;\n}\n\n.mat-simple-snackbar button.mat-button {\n  background: none;\n  border: none;\n}\n\n.mat-snack-bar-container.success {\n  background-color: var(--success);\n  color: #fff;\n}\n\n.mat-snack-bar-container.warn {\n  background-color: var(--pending);\n  color: #fff;\n}\n\n.mat-snack-bar-container.error {\n  background-color: var(--error);\n  color: #fff;\n}\n\n.mat-snack-bar-container.info {\n  background-color: #37474f;\n  color: #fff;\n}\n\n.mat-form-field.rounded .mat-form-field-outline-start {\n  border-radius: 2em 0 0 2em;\n  min-width: 2em;\n}\n\n.mat-form-field.rounded .mat-form-field-outline-end {\n  border-radius: 0 2em 2em 0;\n}\n\n.mat-form-field.visible .mat-select-value {\n  overflow: visible;\n}\n\n.mat-form-field .mat-form-field-subscript-wrapper {\n  overflow: visible;\n}\n\n.mat-form-field .mat-form-field-wrapper .mat-form-field-label {\n  top: 2em;\n  margin-top: -0.1em;\n}\n\n.mat-form-field[overlay] .mat-form-field-outline, .mat-form-field[overlay]:hover .mat-form-field-outline {\n  background-color: #fff;\n  border-radius: 4px;\n}\n\n.mat-form-field .mat-form-field-should-float .mat-form-field-wrapper .mat-form-field-label {\n  transform: translateY(-1.5em) scale(0.75) !important;\n}\n\n.mat-chip.mat-standard-chip.mat-primary {\n  background-color: #fff;\n  color: var(--primary);\n  border-radius: 0;\n}\n\n.mat-chip.mat-standard-chip.mat-accent {\n  background-color: var(--pending);\n}\n\n.mat-spinner circle {\n  stroke: var(--primary);\n}\n\n.mat-progress-bar-fill::after {\n  background-color: var(--primary);\n}\n\ndiv.mat-menu-panel {\n  max-width: calc(100vw - 1em);\n}\n\ndiv.mat-menu-panel .desk {\n  line-height: 48px;\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\ndiv.mat-menu-panel .desk span {\n  font-weight: 400;\n  text-transform: capitalize;\n}\n\n.mat-tooltip {\n  font-size: 0.8em;\n  background-color: rgba(33, 33, 33, 0.85);\n}\n\n.mat-table td.mat-cell:last-of-type {\n  padding-right: 0;\n}\n\na-date-picker .date.active {\n  background-color: var(--primary) !important;\n}\n\na-date-picker .dot {\n  background-color: var(--primary) !important;\n}\n\n.chevron {\n  position: relative;\n}\n\n.chevron > div {\n  position: relative;\n  top: -2px;\n  height: 12px;\n  width: 12px;\n  transform: rotate(45deg);\n  transition: transform 200ms, top 200ms;\n  border-bottom: 3px solid #000;\n  border-right: 3px solid #000;\n}\n\n.chevron.upside > div {\n  top: 2px;\n  transform: rotate(225deg);\n}\n\nform mat-form-field,\nform a-date-field,\nform an-action-field,\nform editor {\n  flex: 1;\n  min-width: 50%;\n}\n\n[disabled] .chevron {\n  opacity: 0.35;\n}\n\n.mat-menu-content .legend {\n  padding-left: 8px;\n  display: flex;\n  align-items: center;\n  line-height: 2em;\n}\n\n.mat-menu-content .legend .color {\n  border-radius: 50%;\n  height: 10px;\n  width: 10px;\n  margin-right: 5px;\n}\n\nmat-datepicker-toggle button {\n  position: relative;\n  top: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC1zdHlsZXMvY3VzdG9tLWVsZW1lbnQuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxXQUFBO0FBQUo7O0FBSUE7Ozs7RUFJRSxnQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FBREY7O0FBRUU7Ozs7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0FBR0o7O0FBREU7Ozs7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0FBTUo7O0FBSkU7Ozs7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQVNKOztBQVBFOzs7O0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FBWUo7O0FBVkU7Ozs7RUFDRSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7QUFlSjs7QUFYQTtFQUNFLFlBQUE7QUFjRjs7QUFYQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBY0Y7O0FBYkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFlSjs7QUFiRTtFQUNFLGdCQUFBO0FBZUo7O0FBYkU7RUFDRSxhQUFBO0FBZUo7O0FBVkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQWFKOztBQVpJO0VBQ0Usc0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQWNOOztBQVpJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFjTjs7QUFaSTtFQUNFLGNBQUE7QUFjTjs7QUFSRTtFQUNFLFlBQUE7QUFXSjs7QUFORTtFQUNFLGVBQUE7QUFTSjs7QUFQRTtFQUNFLGNBQUE7QUFTSjs7QUFQRTtFQUNFLGVBQUE7QUFTSjs7QUFMQTtFQUNFLG9DQUFBO0FBUUY7O0FBSkU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFPSjs7QUFMRTtFQUNFLFFBQUE7RUFDQSxTQUFBO0FBT0o7O0FBTEU7RUFDRSxrQ0FBQTtBQU9KOztBQUhBO0VBQ0Usc0JBQUE7QUFNRjs7QUFIQTtFQUNFLFVBQUE7QUFNRjs7QUFMRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0VBQ0Esd0JBQUE7QUFPSjs7QUFOSTs7OztFQUlFLE9BQUE7RUFDQSxjQUFBO0FBUU47O0FBTkk7RUFDRSxTQUFBO0FBUU47O0FBTEU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQU9KOztBQU5JO0VBQ0UsWUFBQTtBQVFOOztBQUxFO0VBQ0UsZ0JBQUE7QUFPSjs7QUFOSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVFOOztBQURJO0VBQ0UscUJBQUE7QUFJTjs7QUFDSTtFQUNFLFVBQUE7QUFDTjs7QUFDSTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7QUFDTjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBT007RUFDRSxxQkFBQTtBQUpSOztBQVlJO0VBQ0UsZUFBQTtBQVROOztBQWVFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBWko7O0FBaUJFO0VBQ0UsZ0NBQUE7RUFDQSxXQUFBO0FBZEo7O0FBZ0JFO0VBQ0UsZ0NBQUE7RUFDQSxXQUFBO0FBZEo7O0FBZ0JFO0VBQ0UsOEJBQUE7RUFDQSxXQUFBO0FBZEo7O0FBZ0JFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBZEo7O0FBb0JJO0VBQ0UsMEJBQUE7RUFDQSxjQUFBO0FBakJOOztBQW1CSTtFQUNFLDBCQUFBO0FBakJOOztBQXFCSTtFQUNFLGlCQUFBO0FBbkJOOztBQXNCRTtFQUNFLGlCQUFBO0FBcEJKOztBQXVCSTtFQUNFLFFBQUE7RUFDQSxrQkFBQTtBQXJCTjs7QUEwQkk7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0FBeEJOOztBQTRCSTtFQUNFLG9EQUFBO0FBMUJOOztBQWdDRTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQTdCSjs7QUErQkU7RUFDRSxnQ0FBQTtBQTdCSjs7QUFrQ0U7RUFDRSxzQkFBQTtBQS9CSjs7QUFvQ0U7RUFDRSxnQ0FBQTtBQWpDSjs7QUFxQ0E7RUFDRSw0QkFBQTtBQWxDRjs7QUFtQ0U7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFqQ0o7O0FBa0NJO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtBQWhDTjs7QUFxQ0E7RUFDRSxnQkFBQTtFQUNBLHdDQUFBO0FBbENGOztBQXNDRTtFQUNFLGdCQUFBO0FBbkNKOztBQXdDRTtFQUNFLDJDQUFBO0FBckNKOztBQXVDRTtFQUNFLDJDQUFBO0FBckNKOztBQXlDQTtFQUNFLGtCQUFBO0FBdENGOztBQXVDRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7QUFyQ0o7O0FBd0NJO0VBQ0UsUUFBQTtFQUNBLHlCQUFBO0FBdENOOztBQTRDRTs7OztFQUlFLE9BQUE7RUFDQSxjQUFBO0FBekNKOztBQThDRTtFQUNFLGFBQUE7QUEzQ0o7O0FBZ0RFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQTdDSjs7QUE4Q0k7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUE1Q047O0FBa0RFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FBL0NKIiwiZmlsZSI6InNoYXJlZC1zdHlsZXMvY3VzdG9tLWVsZW1lbnQuc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lciB7XG4gIHN2ZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuYnV0dG9uLm1hdC1idXR0b24sXG5hW2J1dHRvbl0sXG4uZGFyay1tb2RlIGJ1dHRvbi5tYXQtYnV0dG9uLFxuLmRhcmstbW9kZSBhW2J1dHRvbl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeSk7XG4gIGNvbG9yOiB2YXIoLS1mb250LWxpZ2h0KTtcbiAgbWluLWhlaWdodDogM2VtO1xuICAmLmludmVyc2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICB9XG4gICYuc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgfVxuICAmLmNsZWFyIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1kYXJrKTtcbiAgfVxuICAmLmVycm9yIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1lcnJvcik7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1lcnJvcik7XG4gIH1cbiAgJltkaXNhYmxlZF0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKCMwMDAsIDAuMSk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbn1cblxuLm1hdC10YWItYm9keS13cmFwcGVyIHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4ubWF0LWljb24tYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMmVtO1xuICB3aWR0aDogMmVtO1xuICBmb250LXNpemU6IDFlbTtcbiAgLm1hdC1idXR0b24td3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBhcHAtaWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgfVxuICAmW2Rpc2FibGVkXSB7XG4gICAgb3BhY2l0eTogLjM1O1xuICB9XG59XG5cbi5wYW5lbCB7XG4gIC5tYXQtaWNvbi1idXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICB3aWR0aDogMmVtO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICYuYWN0aW9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICNmZmY7XG4gICAgICBjb2xvcjogcmdiYSgjMDAwLCAuOCk7XG4gICAgICBoZWlnaHQ6IDJlbTtcbiAgICAgIHdpZHRoOiAyZW07XG4gICAgfVxuICAgIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgYXBwLWljb24ge1xuICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgfVxuICB9XG59XG5cbi5kcm9wZG93blt3aWRnZXRdIHtcbiAgJi5kZWZhdWx0IHtcbiAgICB3aWR0aDogOS41ZW07XG4gIH1cbn1cblxuLmR5bmFtaWMtZmllbGRbd2lkZ2V0XSB7XG4gIC5kZXRhaWxzIHtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gIH1cbiAgbGFiZWwge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gIC5jb250cm9sIHtcbiAgICBtaW4td2lkdGg6IDEwZW07XG4gIH1cbn1cblxuLm92ZXJsYXktYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMwMDAsIDAuNik7XG59XG5cbm1hdC1zbGlkZS10b2dnbGUge1xuICAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICAgIGhlaWdodDogMjRweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICB9XG4gIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iLWNvbnRhaW5lciB7XG4gICAgdG9wOiAycHg7XG4gICAgbGVmdDogMnB4O1xuICB9XG4gICYubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYi1jb250YWluZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTJweCwgMCwgMCk7XG4gIH1cbn1cblxuW2JnPVwid2hpdGVcIl0gLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG5tYXQtZGlhbG9nLWNvbnRhaW5lci5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDA7XG4gIGhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1saWdodCk7XG4gICAgaDEsXG4gICAgICAgIGgyLFxuICAgICAgICBoMyxcbiAgICAgICAgaDQge1xuICAgICAgZmxleDogMTtcbiAgICAgIG1pbi13aWR0aDogNTAlO1xuICAgIH1cbiAgICA+ICoge1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxuICAubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICAuYm9keSB7XG4gICAgICBwYWRkaW5nOiAxZW07XG4gICAgfVxuICB9XG4gIC5tYXQtZGlhbG9nLWFjdGlvbnMge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9vdGVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIH1cbn1cblxubWF0LWZvcm0tZmllbGQge1xuICAmLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIH1cbiAgfVxuICAmLm1hcCxcbiAgICAmLndoaXRlIHtcbiAgICAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cbiAgfVxufVxuXG4ubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBib3JkZXItdG9wOiBub25lO1xufVxuXG4ubWF0LXNlbGVjdC1wYW5lbCB7XG4gIC5tYXQtb3B0aW9uIHtcbiAgICAmLm1hdC1zZWxlY3RlZCB7XG4gICAgICAmOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1hdC1zZWxlY3Qge1xuICAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgICAubWF0LXNlbGVjdC1hcnJvdy13cmFwcGVyIHtcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLm1hdC1zaW1wbGUtc25hY2tiYXIge1xuICBidXR0b24ubWF0LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbn1cblxuLm1hdC1zbmFjay1iYXItY29udGFpbmVyIHtcbiAgJi5zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAmLndhcm4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBlbmRpbmcpO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gICYuZXJyb3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVycm9yKTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAmLmluZm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNzQ3NGY7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgJi5yb3VuZGVkIHtcbiAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1zdGFydCB7XG4gICAgICBib3JkZXItcmFkaXVzOiAyZW0gMCAwIDJlbTtcbiAgICAgIG1pbi13aWR0aDogMmVtO1xuICAgIH1cbiAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1lbmQge1xuICAgICAgYm9yZGVyLXJhZGl1czogMCAyZW0gMmVtIDA7XG4gICAgfVxuICB9XG4gICYudmlzaWJsZSB7XG4gICAgLm1hdC1zZWxlY3QtdmFsdWUge1xuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgfVxuICB9XG4gIC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cbiAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0b3A6IDJlbTtcbiAgICAgIG1hcmdpbi10b3A6IC0wLjFlbTtcbiAgICB9XG4gIH1cbiAgJltvdmVybGF5XSxcbiAgICAmW292ZXJsYXldOmhvdmVyICB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG4gIH1cbiAgLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS41ZW0pIHNjYWxlKC43NSkgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwIHtcbiAgJi5tYXQtcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuICAmLm1hdC1hY2NlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBlbmRpbmcpO1xuICB9XG59XG5cbi5tYXQtc3Bpbm5lciB7XG4gIGNpcmNsZSB7XG4gICAgc3Ryb2tlOiB2YXIoLS1wcmltYXJ5KTtcbiAgfVxufVxuXG4ubWF0LXByb2dyZXNzLWJhci1maWxsIHtcbiAgJjo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICB9XG59XG5cbmRpdi5tYXQtbWVudS1wYW5lbCB7XG4gIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDFlbSk7XG4gIC5kZXNrIHtcbiAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgc3BhbiB7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgfVxuICB9XG59XG5cbi5tYXQtdG9vbHRpcCB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzIxMjEyMSwgMC44NSk7XG59XG5cbi5tYXQtdGFibGUge1xuICB0ZC5tYXQtY2VsbDpsYXN0LW9mLXR5cGUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cbn1cblxuYS1kYXRlLXBpY2tlciB7XG4gIC5kYXRlLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgfVxuICAuZG90IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5jaGV2cm9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICA+IGRpdiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcywgdG9wIDIwMG1zO1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDAwO1xuICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICMwMDA7XG4gIH1cbiAgJi51cHNpZGUge1xuICAgID4gZGl2IHtcbiAgICAgIHRvcDogMnB4O1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgICB9XG4gIH1cbn1cblxuZm9ybSB7XG4gIG1hdC1mb3JtLWZpZWxkLFxuICAgIGEtZGF0ZS1maWVsZCxcbiAgICBhbi1hY3Rpb24tZmllbGQsXG4gICAgZWRpdG9yIHtcbiAgICBmbGV4OiAxO1xuICAgIG1pbi13aWR0aDogNTAlO1xuICB9XG59XG5cbltkaXNhYmxlZF0ge1xuICAuY2hldnJvbiB7XG4gICAgb3BhY2l0eTogMC4zNTtcbiAgfVxufVxuXG4ubWF0LW1lbnUtY29udGVudCB7XG4gIC5sZWdlbmQge1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgIC5jb2xvciB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICB3aWR0aDogMTBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIH1cbiAgfVxufVxuXG5tYXQtZGF0ZXBpY2tlci10b2dnbGUge1xuICBidXR0b24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC4yNXJlbTtcbiAgfVxufVxuIl19 */", "input,\ntextarea {\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n  background: none;\n}\n\nlabel {\n  width: 100%;\n  font-size: 0.875rem;\n  margin-bottom: 0.5rem;\n  min-width: 100%;\n  font-weight: bold;\n  margin-bottom: 0.5rem;\n}\n\nlabel > span:first-child {\n  color: var(--pending);\n}\n\nlabel.error {\n  color: var(--error);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC1zdHlsZXMvbmF0aXZlLWVsZW1lbnQuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUseUJBQUE7RUFDRyxzQkFBQTtFQUNDLHFCQUFBO0VBQ0ksaUJBQUE7RUFDUixnQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUFFO0VBQ0UscUJBQUE7QUFFSjs7QUFBRTtFQUNFLG1CQUFBO0FBRUoiLCJmaWxlIjoic2hhcmVkLXN0eWxlcy9uYXRpdmUtZWxlbWVudC5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0LFxudGV4dGFyZWEge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAgICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAgICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuICAgICAgICAgIHVzZXItc2VsZWN0OiB0ZXh0O1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG5sYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IC44NzVyZW07XG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgPiBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgICBjb2xvcjogdmFyKC0tcGVuZGluZyk7XG4gIH1cbiAgJi5lcnJvciB7XG4gICAgY29sb3I6IHZhcigtLWVycm9yKTtcbiAgfVxufVxuIl19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                template: `
        <router-outlet></router-outlet>
        <div *ngIf="loading | async" class="loading-block">
            <div class="info-block center">
                <div class="icon">
                    <mat-spinner [diameter]="64"></mat-spinner>
                </div>
            </div>
        </div>
    `,
                styleUrls: [
                    '../../../../shared-styles/utility.scss',
                    '../../../../shared-styles/app.component.scss',
                    '../../../../shared-styles/custom-element.styles.scss',
                    '../../../../shared-styles/native-element.styles.scss',
                ],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _sentry_angular__WEBPACK_IMPORTED_MODULE_14__["TraceService"] }, { type: _user_interfaces_common__WEBPACK_IMPORTED_MODULE_8__["SettingsService"] }, { type: _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_9__["OrganisationService"] }, { type: _spaces_src_lib_spaces_service__WEBPACK_IMPORTED_MODULE_10__["SpacesService"] }, { type: _users_src_lib_staff_service__WEBPACK_IMPORTED_MODULE_11__["StaffService"] }, { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwUpdate"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _user_interfaces_common__WEBPACK_IMPORTED_MODULE_8__["HotkeysService"] }, { type: _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__["Clipboard"] }]; }, null); })();


/***/ }),

/***/ "lYMz":
/*!**************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/interactive-map.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: MAP_FEATURE_DATA, InteractiveMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAP_FEATURE_DATA", function() { return MAP_FEATURE_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractiveMapComponent", function() { return InteractiveMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _yuion_svg_viewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @yuion/svg-viewer */ "fb2C");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "csyo");







const _c0 = ["outlet"];
const _c1 = ["feature"];
function InteractiveMapComponent_mat_spinner_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner", 5);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("diameter", 48);
} }
function InteractiveMapComponent_ng_container_4_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function InteractiveMapComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, InteractiveMapComponent_ng_container_4_div_1_ng_container_3_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const element_r3 = ctx_r8.$implicit;
    const i_r4 = ctx_r8.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("el-id", element_r3.location)("view-id", ctx_r5.viewer);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngComponentOutlet", element_r3.content)("ngComponentOutletInjector", ctx_r5.injectors[i_r4]);
} }
function InteractiveMapComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, InteractiveMapComponent_ng_container_4_div_1_Template, 4, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const element_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", element_r3);
} }
const MAP_FEATURE_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('Data for Map Features');
class InteractiveMapComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["BaseClass"] {
    constructor(_injector) {
        super();
        this._injector = _injector;
        /** Zoom level to apply to the SVG */
        this.zoom = 1;
        /** Zoom level to apply to the SVG */
        this.center = { x: 0.5, y: 0.5 };
        this.injectors = [];
    }
    get feature_list() {
        return (this.features || [])
            .map((f, idx) => {
            var _a;
            return (Object.assign(Object.assign({}, f), { content: (_a = this._feature_list.toArray()[idx]) === null || _a === void 0 ? void 0 : _a.nativeElement }));
        })
            .filter((f) => f.content);
    }
    ngOnInit() {
        Object(_yuion_svg_viewer__WEBPACK_IMPORTED_MODULE_3__["applyGlobalStyles"])();
    }
    ngOnDestroy() {
        if (this.viewer) {
            Object(_yuion_svg_viewer__WEBPACK_IMPORTED_MODULE_3__["removeViewer"])(this.viewer);
        }
    }
    ngOnChanges(changes) {
        if (changes.src && this.src) {
            this.createView();
        }
        if (this.viewer) {
            if (changes.zoom || changes.center) {
                this.updateDisplay();
            }
            if (changes.styles ||
                changes.features ||
                changes.labels ||
                changes.actions) {
                this.injectors = (this.features || []).map((f) => _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"].create({
                    providers: [
                        {
                            provide: MAP_FEATURE_DATA,
                            useValue: Object.assign({}, f.data),
                        },
                    ],
                    parent: this._injector,
                }));
                this.timeout('update_view', () => this.updateView(), 100);
            }
        }
    }
    ngAfterViewInit() {
        this.createView();
    }
    /** Update overlays, styles and actions of viewer */
    updateView() {
        if (!Object(_yuion_svg_viewer__WEBPACK_IMPORTED_MODULE_3__["getViewer"])(this.viewer))
            return this.timeout('update_view', () => this.updateView());
        try {
            Object(_yuion_svg_viewer__WEBPACK_IMPORTED_MODULE_3__["updateViewer"])(this.viewer, {
                styles: this.styles,
                features: this.feature_list,
                labels: this.labels,
                actions: this.actions,
            });
        }
        catch (e) { }
    }
    /** Update zoom and center position of viewer */
    updateDisplay() {
        Object(_yuion_svg_viewer__WEBPACK_IMPORTED_MODULE_3__["updateViewer"])(this.viewer, {
            zoom: this.zoom,
            desired_zoom: this.zoom,
            center: this.center,
            desired_center: this.center,
        });
    }
    createView() {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.src && ((_a = this._outlet_el) === null || _a === void 0 ? void 0 : _a.nativeElement)) {
                if (this.viewer) {
                    Object(_yuion_svg_viewer__WEBPACK_IMPORTED_MODULE_3__["removeViewer"])(this.viewer);
                }
                this.viewer = yield Object(_yuion_svg_viewer__WEBPACK_IMPORTED_MODULE_3__["createViewer"])({
                    element: (_b = this._outlet_el) === null || _b === void 0 ? void 0 : _b.nativeElement,
                    url: this.src,
                    styles: this.styles,
                    zoom: this.zoom,
                    desired_zoom: this.zoom,
                    center: this.center,
                    features: this.feature_list,
                    labels: this.labels,
                    actions: this.actions,
                });
                this.timeout('update_view', () => {
                    this.updateView();
                    this.updateDisplay();
                }, 100);
            }
        });
    }
}
InteractiveMapComponent.ɵfac = function InteractiveMapComponent_Factory(t) { return new (t || InteractiveMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
InteractiveMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InteractiveMapComponent, selectors: [["i-map"], ["interactive-map"]], viewQuery: function InteractiveMapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._outlet_el = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._feature_list = _t);
    } }, inputs: { src: "src", styles: "styles", zoom: "zoom", center: "center", features: "features", labels: "labels", actions: "actions" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 2, consts: [["tabindex", "0", "role", "map", 1, "absolute", "inset-0"], ["outlet", ""], ["class", "center", 3, "diameter", 4, "ngIf"], ["hidden", ""], [4, "ngFor", "ngForOf"], [1, "center", 3, "diameter"], [4, "ngIf"], [1, "pointer-events-none"], ["feature", ""], [4, "ngComponentOutlet", "ngComponentOutletInjector"]], template: function InteractiveMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, InteractiveMapComponent_mat_spinner_2_Template, 1, 1, "mat-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, InteractiveMapComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.viewer);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.features);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgComponentOutlet"]], styles: ["[_nghost-%COMP%] {\n            height: 100%;\n            width: 100%;\n        }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InteractiveMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `i-map,interactive-map`,
                template: `
        <div #outlet tabindex="0" role="map" class="absolute inset-0"></div>
        <mat-spinner *ngIf="!viewer" class="center" [diameter]="48"></mat-spinner>
        <div hidden>
            <ng-container *ngFor="let element of features; let i = index">
                <div *ngIf="element">
                    <div #feature class="pointer-events-none" [attr.el-id]="element.location" [attr.view-id]="viewer">
                        <ng-container
                            *ngComponentOutlet="
                                element.content;
                                injector: injectors[i]
                            "
                        ></ng-container>
                    </div>
                </div>
            </ng-container>
        </div>
    `,
                styles: [
                    `
        :host {
            height: 100%;
            width: 100%;
        }
    `,
                ],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }]; }, { src: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], styles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], zoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], center: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], features: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], labels: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], actions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], _outlet_el: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['outlet']
        }], _feature_list: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
            args: ['feature']
        }] }); })();


/***/ }),

/***/ "lbut":
/*!*******************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/catering/src/lib/catering-order.class.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CateringOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateringOrder", function() { return CateringOrder; });
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _catering_item_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catering-item.class */ "Ygd4");


class CateringOrder {
    constructor(data = {}) {
        var _a, _b;
        this.id = data.id || `order-${Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_0__["randomInt"])(9999999, 1000000)}`;
        this.event_id = data.event_id || ((_a = data.event) === null || _a === void 0 ? void 0 : _a.id) || '';
        this.items = (data.items || []).map(i => new _catering_item_class__WEBPACK_IMPORTED_MODULE_1__["CateringItem"](i));
        this.system_id = data.system_id;
        this.item_count = this.items.reduce((amount, item) => amount + item.quantity, 0);
        this.total_cost = this.items.reduce((amount, item) => amount + (item.total_cost || 0), 0);
        this.charge_code = data.charge_code || '';
        this.status = data.status || 'accepted';
        this.invoice_number = data.invoice_number || '';
        this.event = data.event || null;
        this.deliver_at = data.deliver_at || data.date || ((_b = this.event) === null || _b === void 0 ? void 0 : _b.date) || new Date().getTime();
    }
}


/***/ }),

/***/ "lfZe":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/user-search-field/user-search-field.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: UserSearchFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSearchFieldComponent", function() { return UserSearchFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _users_src_lib_staff_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../users/src/lib/staff.service */ "Vai6");








function UserSearchFieldComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserSearchFieldComponent_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r3.email);
} }
const _c0 = function () { return { type: "icon", class: "material-icons", content: "search" }; };
class UserSearchFieldComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["BaseClass"] {
    constructor(_users) {
        super();
        this._users = _users;
        /** Subject holding the value of the search */
        this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        // Listen for input changes
        this.search_results$ = this.search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((query) => {
            this.loading = true;
            return this.options && this.options.length > 0
                ? Promise.resolve(this.options)
                : query.length >= 3
                    ? this._users.query({
                        q: query.slice(0, 3),
                        cache: 60 * 1000,
                    })
                    : Promise.resolve([]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((list) => {
            this.loading = false;
            const search = this.search_str.toLowerCase();
            return list.filter((item) => item.name.toLowerCase().includes(search) ||
                item.email.toLowerCase().includes(search));
        }));
        // Process API results
        this.subscription('search_results', this.search_results$.subscribe((list) => (this.user_list = list)));
    }
    /**
     * Reset the search string back to the name of the active user
     */
    resetSearchString() {
        if (this.active_user) {
            this.search_str = this.active_user.name;
        }
    }
    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    setValue(new_value) {
        this.active_user = new_value;
        if (this._onChange) {
            this._onChange(new_value);
        }
        this.resetSearchString();
    }
    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    writeValue(value) {
        this.active_user = value;
        this.resetSearchString();
    }
    setDisabledState(disabled) {
        this.disabled = disabled;
    }
    /**
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param fn The callback function to register
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * Registers a callback function is called by the forms API on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    registerOnTouched(fn) {
        this._onTouch = fn;
    }
}
UserSearchFieldComponent.ɵfac = function UserSearchFieldComponent_Factory(t) { return new (t || UserSearchFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_users_src_lib_staff_service__WEBPACK_IMPORTED_MODULE_5__["StaffService"])); };
UserSearchFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserSearchFieldComponent, selectors: [["a-user-search-field"]], inputs: { disabled: "disabled", placeholder: "placeholder", options: "options" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => UserSearchFieldComponent),
                multi: true,
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 8, consts: [["form-field", "", 1, "user-search-field"], ["overlay", "", "appearance", "outline"], ["matInput", "", "name", "user-search", 3, "ngModel", "disabled", "placeholder", "matAutocomplete", "ngModelChange", "blur"], ["matPrefix", "", 1, "prefix"], [3, "icon"], ["class", "suffix", "matSuffix", "", 4, "ngIf"], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", 1, "suffix"], ["diameter", "16"], [3, "value"], [1, "name"], [1, "email"]], template: function UserSearchFieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserSearchFieldComponent_Template_input_ngModelChange_2_listener($event) { return ctx.search_str = $event; })("ngModelChange", function UserSearchFieldComponent_Template_input_ngModelChange_2_listener($event) { return ctx.search$.next($event); })("blur", function UserSearchFieldComponent_Template_input_blur_2_listener() { return ctx.resetSearchString(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserSearchFieldComponent_div_5_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-autocomplete", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function UserSearchFieldComponent_Template_mat_autocomplete_optionSelected_6_listener($event) { return ctx.setValue($event.option.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserSearchFieldComponent_mat_option_8_Template, 5, 3, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search_str)("disabled", ctx.disabled)("placeholder", ctx.placeholder || "Search for user...")("matAutocomplete", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.user_list);
    } }, styles: ["[_nghost-%COMP%], mat-form-field[_ngcontent-%COMP%] {\n                width: 100%;\n            }\n\n            app-icon[_ngcontent-%COMP%] {\n                font-size: 1.5em;\n                position: relative;\n                top: 0.15em;\n                left: -0.15em;\n            }\n\n            .name[_ngcontent-%COMP%] {\n                height: 1em;\n            }\n\n            .email[_ngcontent-%COMP%] {\n                font-size: 0.6em;\n                color: rgba(#000, 0.65);\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSearchFieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-user-search-field',
                template: `
        <div class="user-search-field" form-field>
            <mat-form-field overlay appearance="outline">
                <input
                    matInput
                    name="user-search"
                    [(ngModel)]="search_str"
                    (ngModelChange)="search$.next($event)"
                    [disabled]="disabled"
                    [placeholder]="placeholder || 'Search for user...'"
                    [matAutocomplete]="auto"
                    (blur)="resetSearchString()"
                />
                <div class="prefix" matPrefix>
                    <app-icon
                        [icon]="{
                            type: 'icon',
                            class: 'material-icons',
                            content: 'search'
                        }"
                    ></app-icon>
                </div>
                <div class="suffix" matSuffix *ngIf="loading">
                    <mat-spinner diameter="16"></mat-spinner>
                </div>
            </mat-form-field>
            <mat-autocomplete
                #auto="matAutocomplete"
                (optionSelected)="setValue($event.option.value)"
            >
                <mat-option *ngFor="let option of user_list" [value]="option">
                    <div class="name">{{ option.name }}</div>
                    <div class="email">{{ option.email }}</div>
                </mat-option>
            </mat-autocomplete>
        </div>
    `,
                styles: [
                    `
            :host,
            mat-form-field {
                width: 100%;
            }

            app-icon {
                font-size: 1.5em;
                position: relative;
                top: 0.15em;
                left: -0.15em;
            }

            .name {
                height: 1em;
            }

            .email {
                font-size: 0.6em;
                color: rgba(#000, 0.65);
            }
        `,
                ],
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => UserSearchFieldComponent),
                        multi: true,
                    },
                ],
            }]
    }], function () { return [{ type: _users_src_lib_staff_service__WEBPACK_IMPORTED_MODULE_5__["StaffService"] }]; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "lhWS":
/*!********************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/common/src/lib/application.ts ***!
  \********************************************************************************************/
/*! exports provided: setupCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupCache", function() { return setupCache; });
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general */ "3ePk");
/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications */ "ztAP");


let _available;
let _activated;
let _timer;
/**
 * Setup handler for cache change events
 * @param cache Angular Service worker service
 * @param notify Function to call on changes to the cache
 * @param interval Time interval to check the cache for changes
 */
function setupCache(cache, notify = () => null, interval = 5 * 60 * 1000) {
    if (cache.isEnabled) {
        if (_available)
            _available.unsubscribe();
        if (_activated)
            _activated.unsubscribe();
        if (_timer)
            clearInterval(_timer);
        _available = cache.available.subscribe((event) => {
            const current = `current version is ${event.current.hash}`;
            const available = `available version is ${event.available.hash}`;
            Object(_general__WEBPACK_IMPORTED_MODULE_0__["log"])('CACHE', `Update available: ${current} ${available}`);
            activateUpdate();
        });
        _activated = cache.activated.subscribe(() => {
            Object(_general__WEBPACK_IMPORTED_MODULE_0__["log"])('CACHE', `Updates activated. Reloading...`);
            notify('Newer version of the application is available', () => location.reload(true));
        });
        _timer = setInterval(() => {
            Object(_general__WEBPACK_IMPORTED_MODULE_0__["log"])('CACHE', `Checking for updates...`);
            this._cache.checkForUpdate();
        }, interval);
    }
}
/**
 * Update the cache and reload the page
 *
 */
function activateUpdate() {
    if (this._cache.isEnabled) {
        Object(_general__WEBPACK_IMPORTED_MODULE_0__["log"])('CACHE', `Activating changes to the cache...`);
        this._cache.activateUpdate().then(() => {
            Object(_notifications__WEBPACK_IMPORTED_MODULE_1__["notifyInfo"])('Newer version of the application is available', 'Refresh', () => location.reload(true));
        });
    }
}


/***/ }),

/***/ "mN87":
/*!**************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/common/src/lib/types.ts ***!
  \**************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "mU/8":
/*!************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/confirm-modal.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: CONFIRM_METADATA, ConfirmModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIRM_METADATA", function() { return CONFIRM_METADATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function() { return ConfirmModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");





function ConfirmModalComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ConfirmModalComponent_mat_dialog_actions_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmModalComponent_mat_dialog_actions_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.accept(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.action);
} }
function ConfirmModalComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-spinner", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.loading);
} }
const CONFIRM_METADATA = {
    height: 'auto',
    width: '24em',
    maxHeight: 'calc(100vh - 2em)',
    maxWidth: 'calc(100vw - 2em)',
};
class ConfirmModalComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["BaseClass"] {
    constructor(_dialog_ref, _data) {
        super();
        this._dialog_ref = _dialog_ref;
        this._data = _data;
        /** Emitter for user action on the modal */
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Title of the confirm modal */
        this.title = this._data.title || 'Confirm';
        /** Body of the confirm modal */
        this.content = this._data.content || 'Are you sure?';
        /** Display text on the confirm button */
        this.action = this._data.action || 'Ok';
        /** Display icon properties */
        this.icon = this._data.icon || { class: 'material-icons', content: 'done' };
    }
    /**
     * User confirmation of the content of the modal
     */
    accept() {
        this._dialog_ref.close('done');
        this.event.emit({ reason: 'done' });
    }
}
ConfirmModalComponent.ɵfac = function ConfirmModalComponent_Factory(t) { return new (t || ConfirmModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ConfirmModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmModalComponent, selectors: [["confirm-modal"]], outputs: { event: "event" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 4, consts: [["mat-dialog-title", ""], ["class", "body", 4, "ngIf", "ngIfElse"], [4, "ngIf"], ["load_state", ""], [1, "body"], [3, "icon"], [1, "content"], [3, "innerHTML"], ["mat-button", "", "mat-dialog-close", "", 1, "inverse"], ["mat-button", "", "name", "accept", 3, "click"], [1, "info-block"], [1, "icon"], ["diameter", "32"], [1, "text"]], template: function ConfirmModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConfirmModalComponent_div_4_Template, 4, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ConfirmModalComponent_mat_dialog_actions_5_Template, 5, 1, "mat-dialog-actions", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ConfirmModalComponent_ng_template_6_Template, 6, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title || "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, styles: [".body[_ngcontent-%COMP%] {\n                display: flex;\n                align-items: center;\n                flex-direction: column;\n                padding: 1em;\n            }\n\n            .content[_ngcontent-%COMP%] {\n                min-width: 16rem;\n                text-align: center;\n                font-size: 0.8em;\n            }\n\n            app-icon[_ngcontent-%COMP%] {\n                font-size: 3em;\n            }\n\n            mat-dialog-actions[_ngcontent-%COMP%] {\n                justify-content: center;\n            }\n\n            mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n                min-width: 8em;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'confirm-modal',
                template: `
        <header>
            <h3 mat-dialog-title>{{ title || 'Confirm' }}</h3>
        </header>
        <mat-dialog-content>
            <div class="body" *ngIf="!loading; else load_state">
                <app-icon [icon]="icon"></app-icon>
                <div class="content">
                    <p [innerHTML]="content"></p>
                </div>
            </div>
        </mat-dialog-content>
        <mat-dialog-actions *ngIf="!loading">
            <button mat-button class="inverse" mat-dialog-close>Cancel</button>
            <button mat-button name="accept" (click)="accept()">{{ action }}</button>
        </mat-dialog-actions>
        <ng-template #load_state>
            <div class="body">
                <div class="info-block">
                    <div class="icon">
                        <mat-spinner diameter="32"></mat-spinner>
                    </div>
                    <div class="text">{{ loading }}</div>
                </div>
            </div>
        </ng-template>
    `,
                styles: [
                    `
            .body {
                display: flex;
                align-items: center;
                flex-direction: column;
                padding: 1em;
            }

            .content {
                min-width: 16rem;
                text-align: center;
                font-size: 0.8em;
            }

            app-icon {
                font-size: 3em;
            }

            mat-dialog-actions {
                justify-content: center;
            }

            mat-dialog-actions button {
                min-width: 8em;
            }
        `,
                ],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, { event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "mh7C":
/*!********************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/spaces/src/lib/space.class.ts ***!
  \********************************************************************************************/
/*! exports provided: Space */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Space", function() { return Space; });
/* harmony import */ var _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @user-interfaces/organisation */ "dJst");

class Space {
    constructor(data = {}) {
        this.id = data.id || '';
        this.name = data.name || '';
        this.display_name = data.display_name || '';
        this.email = (data.email || '').toLowerCase();
        this.capacity = data.capacity || -1;
        this.feature_list = data.feature_list || data.features || [];
        this.bookable = !!data.bookable;
        this.zones = data.zones || [];
        this.support_url = data.support_url || '';
        this.map_id = data.map_id || '';
        this.image = data.image || '';
        this.configurations = data.configurations || [];
        this.features = data.features || '';
        this.response_status = data.response_status;
        this.level = data.level || new _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_0__["BuildingLevel"]();
    }
}


/***/ }),

/***/ "mjT4":
/*!*********************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/users/src/index.ts ***!
  \*********************************************************************************/
/*! exports provided: NewUserModalComponent, UserFormComponent, GroupsService, GuestsService, MapLocation, PeopleService, StaffService, User, GuestUser, StaffUser, USER_DOMAIN, generateMockUser, generateUserForm, generateGuestForm, SharedUsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/users */ "w6NQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewUserModalComponent", function() { return _lib_users__WEBPACK_IMPORTED_MODULE_0__["NewUserModalComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return _lib_users__WEBPACK_IMPORTED_MODULE_0__["UserFormComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupsService", function() { return _lib_users__WEBPACK_IMPORTED_MODULE_0__["GroupsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GuestsService", function() { return _lib_users__WEBPACK_IMPORTED_MODULE_0__["GuestsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapLocation", function() { return _lib_users__WEBPACK_IMPORTED_MODULE_0__["MapLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PeopleService", function() { return _lib_users__WEBPACK_IMPORTED_MODULE_0__["PeopleService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaffService", function() { return _lib_users__WEBPACK_IMPORTED_MODULE_0__["StaffService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _lib_users__WEBPACK_IMPORTED_MODULE_0__["User"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GuestUser", function() { return _lib_users__WEBPACK_IMPORTED_MODULE_0__["GuestUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaffUser", function() { return _lib_users__WEBPACK_IMPORTED_MODULE_0__["StaffUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "USER_DOMAIN", function() { return _lib_users__WEBPACK_IMPORTED_MODULE_0__["USER_DOMAIN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateMockUser", function() { return _lib_users__WEBPACK_IMPORTED_MODULE_0__["generateMockUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateUserForm", function() { return _lib_users__WEBPACK_IMPORTED_MODULE_0__["generateUserForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateGuestForm", function() { return _lib_users__WEBPACK_IMPORTED_MODULE_0__["generateGuestForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedUsersModule", function() { return _lib_users__WEBPACK_IMPORTED_MODULE_0__["SharedUsersModule"]; });




/***/ }),

/***/ "mnsz":
/*!******************************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/user-list-field/user-list-field.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: UserListFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListFieldComponent", function() { return UserListFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _users_src_lib_user_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../users/src/lib/user.class */ "xuqh");
/* harmony import */ var _users_src_lib_staff_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../users/src/lib/staff.service */ "Vai6");
/* harmony import */ var _users_src_lib_guests_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../users/src/lib/guests.service */ "mqs+");
/* harmony import */ var _users_src_lib_new_user_modal_new_user_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../users/src/lib/new-user-modal/new-user-modal.component */ "MIKl");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");














function UserListFieldComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserListFieldComponent_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a-user-avatar", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", option_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r6.email);
} }
const _c8 = function () { return { type: "icon", class: "material-icons", content: "close" }; };
function UserListFieldComponent_mat_chip_list_10_mat_chip_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListFieldComponent_mat_chip_list_10_mat_chip_1_Template_mat_chip_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const user_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return user_r8.visit_expected || user_r8.is_external ? ctx_r9.new_user.emit(user_r8) : null; })("removed", function UserListFieldComponent_mat_chip_list_10_mat_chip_1_Template_mat_chip_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const user_r8 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.removeUser(user_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", user_r8.email)("color", user_r8.visit_expected || user_r8.is_external ? "accent" : "primary")("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r8.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c8));
} }
function UserListFieldComponent_mat_chip_list_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip-list", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserListFieldComponent_mat_chip_list_10_mat_chip_1_Template, 3, 6, "mat-chip", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.active_list);
} }
function UserListFieldComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c11 = function () { return { type: "icon", class: "material-icons", content: "search" }; };
class UserListFieldComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["BaseClass"] {
    constructor(_users, _guests, _dialog) {
        super();
        this._users = _users;
        this._guests = _guests;
        this._dialog = _dialog;
        /** Number of characters needed before a search will start */
        this.limit = 3;
        /** Emitter for action to make a new user */
        this.new_user = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Subject holding the value of the search */
        this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        // Listen for input changes
        this.search_results$ = this.search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((query) => query.length >= this.limit), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((query) => {
            this.loading = true;
            return Promise.all([
                this._users.query({
                    q: query,
                    cache: 60 * 1000,
                }),
                this._guests.query({ q: query }),
            ])
                .then(([users, guests]) => [
                ...users,
                ...guests.map((i) => {
                    i.visit_expected = true;
                    return i;
                }),
            ])
                .catch(() => []);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((list) => {
            this.loading = false;
            const search = this.search_str.toLowerCase();
            return list.filter((item) => item.name.toLowerCase().includes(search) ||
                item.email.toLowerCase().includes(search));
        }));
        // Process API results
        this.subscription('search_results', this.search_results$.subscribe((list) => (this.user_list = list)));
    }
    /**
     * Add user to the user list
     * @param user
     */
    addUser(user) {
        /* istanbul ignore else */
        if (!this.active_list) {
            this.active_list = [];
        }
        const index = this.active_list.findIndex((a_user) => a_user.email === user.email);
        /* istanbul ignore else */
        if (index < 0) {
            this.active_list = [...this.active_list, user];
        }
        this.setValue(this.active_list);
        this.search_str = '';
    }
    /**
     * Remove user from the user list
     * @param user
     */
    removeUser(user) {
        this.active_list = this.active_list.filter((a_user) => a_user.email !== user.email);
        this.setValue(this.active_list);
    }
    /**
     * Load CSV file and populate the user list with the contents
     * @param event File input field event
     */
    addUsersFromFile(event) {
        /* istanbul ignore else */
        if (event.target) {
            const file = event.target.files[0];
            /* istanbul ignore else */
            if (file) {
                const reader = new FileReader();
                reader.readAsText(file, 'UTF-8');
                reader.addEventListener('load', (evt) => {
                    this.processCsvData(evt.srcElement.result);
                    event.target.value = '';
                });
                reader.addEventListener('error', (_) => Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["notifyError"])('Error reading file.'));
            }
        }
    }
    /**
     * Process raw CSV data and save user data to attendee list
     * @param data CSV data
     */
    processCsvData(data) {
        const list = Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["csvToJson"])(data) || [];
        const id = this._users.current.staff_id;
        list.forEach((el) => {
            el.name = el.name || `${el.first_name} ${el.last_name}`;
            const display = (el.name || `${Math.floor(Math.random() * 99999999)}`)
                .split(' ')
                .join('_')
                .toLowerCase();
            /* istanbul ignore else */
            if (!el.email) {
                el.email = `${display}+${id}@guest.com`;
            }
            el.visit_expected = !el.email.endsWith('place.tech');
            this.addUser(new _users_src_lib_user_class__WEBPACK_IMPORTED_MODULE_5__["User"](el));
        });
    }
    /* istanbul ignore next */
    /** Download template CSV file */
    downloadCSVTemplate() {
        const template = `Organisation,First Name,Last Name,Email,Phone,Assistance Required\nFake Org,John,Smith,john.smith@example.com,01234567898, yes`;
        Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["downloadFile"])('template.csv', template);
    }
    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    setValue(new_value) {
        this.active_list = new_value;
        if (this._onChange) {
            this._onChange(new_value);
        }
    }
    /* istanbul ignore next */
    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    writeValue(value) {
        this.active_list = value;
    }
    setDisabledState(disabled) {
        this.disabled = disabled;
    }
    /* istanbul ignore next */
    /**
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param fn The callback function to register
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /* istanbul ignore next */
    /**
     * Registers a callback function is called by the forms API on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    registerOnTouched(fn) {
        this._onTouch = fn;
    }
    displayFn(item) {
        return (item === null || item === void 0 ? void 0 : item.name) || '';
    }
    /**
     * Open modal to change the recurrence details for the booking
     */
    openNewUserModal() {
        const ref = this._dialog.open(_users_src_lib_new_user_modal_new_user_modal_component__WEBPACK_IMPORTED_MODULE_8__["NewUserModalComponent"], {
            width: 'auto',
            height: 'auto',
            data: {}
        });
        ref.componentInstance.event
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])((_) => _.reason === 'done'))
            .subscribe((event) => {
            this.addUser(event.metadata);
            ref.close();
        });
    }
}
UserListFieldComponent.ɵfac = function UserListFieldComponent_Factory(t) { return new (t || UserListFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_users_src_lib_staff_service__WEBPACK_IMPORTED_MODULE_6__["StaffService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_users_src_lib_guests_service__WEBPACK_IMPORTED_MODULE_7__["GuestsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"])); };
UserListFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserListFieldComponent, selectors: [["a-user-list-field"]], inputs: { disabled: "disabled", limit: "limit" }, outputs: { new_user: "new_user" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => UserListFieldComponent),
                multi: true,
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 21, vars: 11, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_983616541916495098$$LIBS_COMPONENTS_SRC_LIB_USER_LIST_FIELD_USER_LIST_FIELD_COMPONENT_TS_1 = goog.getMsg("Search for user...");
        i18n_0 = MSG_EXTERNAL_983616541916495098$$LIBS_COMPONENTS_SRC_LIB_USER_LIST_FIELD_USER_LIST_FIELD_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟14b8ccffdd0cc5816df6f9170b619ba7c5751d99␟983616541916495098:Search for user...`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc Add new external attendee
         */
        const MSG_EXTERNAL_9067346228751642408$$LIBS_COMPONENTS_SRC_LIB_USER_LIST_FIELD_USER_LIST_FIELD_COMPONENT_TS_3 = goog.getMsg(" Add External ");
        i18n_2 = MSG_EXTERNAL_9067346228751642408$$LIBS_COMPONENTS_SRC_LIB_USER_LIST_FIELD_USER_LIST_FIELD_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:Add new external attendee␟b8749e272cb8fa120bd4f1a809d6557303bf5f49␟9067346228751642408: Add External `;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc Upload attendee list from CSV file
         */
        const MSG_EXTERNAL_2172496442518251364$$LIBS_COMPONENTS_SRC_LIB_USER_LIST_FIELD_USER_LIST_FIELD_COMPONENT_TS_5 = goog.getMsg(" Upload CSV {$tagInput}", { "tagInput": "\uFFFD#16\uFFFD\uFFFD/#16\uFFFD" });
        i18n_4 = MSG_EXTERNAL_2172496442518251364$$LIBS_COMPONENTS_SRC_LIB_USER_LIST_FIELD_USER_LIST_FIELD_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:Upload attendee list from CSV file␟17f80d7db4f6395cf3429860983abdd658269b04␟2172496442518251364: Upload CSV ${"\uFFFD#16\uFFFD\uFFFD/#16\uFFFD"}:TAG_INPUT:`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc Download template CSV file
         */
        const MSG_EXTERNAL_1206853480395585808$$LIBS_COMPONENTS_SRC_LIB_USER_LIST_FIELD_USER_LIST_FIELD_COMPONENT_TS_7 = goog.getMsg(" CSV Template ");
        i18n_6 = MSG_EXTERNAL_1206853480395585808$$LIBS_COMPONENTS_SRC_LIB_USER_LIST_FIELD_USER_LIST_FIELD_COMPONENT_TS_7;
    }
    else {
        i18n_6 = $localize `:Download template CSV file␟514f67fd7b908bfef8d607fdb8cbee933fa47a87␟1206853480395585808: CSV Template `;
    } let i18n_9; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc Attendee empty state
         */
        const MSG_EXTERNAL_7244704459700721325$$LIBS_COMPONENTS_SRC_LIB_USER_LIST_FIELD_USER_LIST_FIELD_COMPONENT_TS__10 = goog.getMsg("No attendees");
        i18n_9 = MSG_EXTERNAL_7244704459700721325$$LIBS_COMPONENTS_SRC_LIB_USER_LIST_FIELD_USER_LIST_FIELD_COMPONENT_TS__10;
    }
    else {
        i18n_9 = $localize `:Attendee empty state␟33e355c508c5fb4524f9b01d1d81271cd3de91a0␟7244704459700721325:No attendees`;
    } return [["form-field", "", 1, "user-list-field"], ["appearance", "outline"], ["matInput", "", "name", "user-search", "placeholder", i18n_0, 3, "ngModel", "disabled", "matAutocomplete", "ngModelChange"], ["matPrefix", "", 1, "prefix"], [3, "icon"], ["class", "suffix", "matSuffix", "", 4, "ngIf"], [3, "displayWith", "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [1, "user-list"], ["aria-label", "User List", 4, "ngIf", "ngIfElse"], [1, "actions"], ["type", "button", "name", "new-contact", "matRipple", "", 3, "click"], i18n_2, ["type", "button", "name", "upload-csv", "matRipple", ""], i18n_4, ["type", "file", 3, "change"], ["type", "button", "name", "download-template", "matRipple", "", 3, "click"], i18n_6, ["empty_state", ""], ["matSuffix", "", 1, "suffix"], ["diameter", "16"], [3, "value"], [1, "user"], [3, "user"], [1, "details"], [1, "name"], [1, "email"], ["aria-label", "User List"], [3, "id", "color", "removable", "click", "removed", 4, "ngFor", "ngForOf"], [3, "id", "color", "removable", "click", "removed"], ["matChipRemove", "", 3, "icon"], i18n_9]; }, template: function UserListFieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserListFieldComponent_Template_input_ngModelChange_2_listener($event) { return ctx.search_str = $event; })("ngModelChange", function UserListFieldComponent_Template_input_ngModelChange_2_listener($event) { return ctx.search$.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserListFieldComponent_div_5_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-autocomplete", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function UserListFieldComponent_Template_mat_autocomplete_optionSelected_6_listener($event) { return ctx.addUser($event.option.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserListFieldComponent_mat_option_8_Template, 8, 4, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserListFieldComponent_mat_chip_list_10_Template, 2, 1, "mat-chip-list", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListFieldComponent_Template_button_click_12_listener() { return ctx.openNewUserModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](13, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](15, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UserListFieldComponent_Template_input_change_16_listener($event) { return ctx.addUsersFromFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListFieldComponent_Template_button_click_17_listener() { return ctx.downloadCSVTemplate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](18, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UserListFieldComponent_ng_template_19_Template, 2, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search_str)("disabled", ctx.disabled)("matAutocomplete", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c11));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.user_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.active_list && ctx.active_list.length)("ngIfElse", _r4);
    } }, styles: ["[_nghost-%COMP%], mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.user-list-field[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3em;\n}\n\nmat-form-field[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  position: relative;\n  top: 0.15em;\n  left: -0.15em;\n}\n\n.user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.user[_ngcontent-%COMP%]   a-user-avatar[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  margin-right: 0.5em;\n}\n\n.name[_ngcontent-%COMP%] {\n  height: 1em;\n}\n\n.email[_ngcontent-%COMP%] {\n  font-size: 0.6em;\n  color: rgba(0, 0, 0, 0.65);\n}\n\n.user-list[_ngcontent-%COMP%] {\n  padding: 0.5em;\n  min-height: 3em;\n  border-left: 1px solid #ccc;\n  border-right: 1px solid #ccc;\n}\n\n.user-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  text-align: center;\n  color: rgba(0, 0, 0, 0.65);\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 0 0.5em;\n}\n\nbutton[_ngcontent-%COMP%] {\n  position: relative;\n  background: none;\n  border: none;\n  text-decoration: underline;\n  padding: 1em;\n  font-size: 0.8em;\n  flex: 1;\n  border: 1px solid #ccc;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline-color: var(--primary);\n}\n\ninput[type=file][_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 0;\n  width: 100%;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvY29tcG9uZW50cy9zcmMvbGliL3VzZXItbGlzdC1maWVsZC91c2VyLWxpc3QtZmllbGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsV0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFBRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUVKOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7QUFFSjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxzQkFBQTtBQUNGOztBQUFFO0VBQ0UsNkJBQUE7QUFFSjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJsaWJzL2NvbXBvbmVudHMvc3JjL2xpYi91c2VyLWxpc3QtZmllbGQvdXNlci1saXN0LWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QsXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udXNlci1saXN0LWZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIGhlaWdodDogM2VtO1xuICBhcHAtaWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwLjE1ZW07XG4gICAgbGVmdDogLTAuMTVlbTtcbiAgfVxufVxuXG4udXNlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGEtdXNlci1hdmF0YXIge1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbiAgfVxufVxuXG4ubmFtZSB7XG4gIGhlaWdodDogMWVtO1xufVxuXG4uZW1haWwge1xuICBmb250LXNpemU6IDAuNmVtO1xuICBjb2xvcjogcmdiYSgjMDAwLCAwLjY1KTtcbn1cblxuLnVzZXItbGlzdCB7XG4gIHBhZGRpbmc6IC41ZW07XG4gIG1pbi1oZWlnaHQ6IDNlbTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xuICA+IGRpdiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiByZ2JhKCMwMDAsIDAuNjUpO1xuICB9XG59XG5cbi5hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIDAgMC41ZW07XG59XG5cbmJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgcGFkZGluZzogMWVtO1xuICBmb250LXNpemU6IC44ZW07XG4gIGZsZXg6IDE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmUtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICB9XG59XG5cbmlucHV0W3R5cGU9J2ZpbGUnXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserListFieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-user-list-field',
                templateUrl: './user-list-field.component.html',
                styleUrls: ['./user-list-field.component.scss'],
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => UserListFieldComponent),
                        multi: true,
                    },
                ],
            }]
    }], function () { return [{ type: _users_src_lib_staff_service__WEBPACK_IMPORTED_MODULE_6__["StaffService"] }, { type: _users_src_lib_guests_service__WEBPACK_IMPORTED_MODULE_7__["GuestsService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }]; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], limit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], new_user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "mqs+":
/*!**********************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/users/src/lib/guests.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: GuestsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestsService", function() { return GuestsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ "/It1");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/events */ "eZII");
/* harmony import */ var _user_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.class */ "xuqh");







class GuestsService extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["BaseAPIService"] {
    constructor() {
        super();
        this._name = 'Guest';
        this._api_route = 'guests';
    }
    process(raw_data) {
        return new _user_class__WEBPACK_IMPORTED_MODULE_5__["GuestUser"](raw_data);
    }
    /**
     * Update metadata associated with guest
     * @param email Email of the guest
     * @param data New state of the guest's metadata
     */
    updateMetadata(email, data) {
        return Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["updateMetadata"])(email, { id: email, name: 'guest-metadata', details: data });
    }
    /**
     * Get upcoming meetings for a guest
     * @param id Email Address of the guest
     */
    meetings(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return (yield this.task(id, 'meetings', {}, 'get')).map(i => new _user_interfaces_events__WEBPACK_IMPORTED_MODULE_4__["CalendarEvent"](i));
        });
    }
}
GuestsService.ɵfac = function GuestsService_Factory(t) { return new (t || GuestsService)(); };
GuestsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GuestsService, factory: GuestsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GuestsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "mvDl":
/*!**********************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/mocks/src/lib/api/users.mock.ts ***!
  \**********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/ts-client */ "/It1");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _users_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.data */ "QgMi");
/* harmony import */ var _zone_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zone.data */ "MNob");
/* harmony import */ var _spaces_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spaces.data */ "vcx8");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "BQ33");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _events_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events.data */ "dZoG");







Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__["registerMockEndpoint"])({
    path: '/api/engine/v2/users/:id',
    metadata: {},
    method: 'GET',
    callback: (request) => {
        if (request.route_params.id === 'current') {
            return _users_data__WEBPACK_IMPORTED_MODULE_2__["ACTIVE_USER"];
        }
        const person = _users_data__WEBPACK_IMPORTED_MODULE_2__["MOCK_STAFF"].find(user => user.email === request.route_params.id);
        if (person) {
            return person;
        }
        throw { status: 404, message: 'User not found' };
    },
});
Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__["registerMockEndpoint"])({
    path: '/api/staff/v1/people',
    metadata: {},
    method: 'GET',
    callback: (request) => {
        if (request.query_params.q) {
            const search = request.query_params.q.toLowerCase();
            return _users_data__WEBPACK_IMPORTED_MODULE_2__["MOCK_STAFF"].filter((user) => user.name.toLowerCase().includes(search) ||
                user.email.toLowerCase().includes(search));
        }
        return _users_data__WEBPACK_IMPORTED_MODULE_2__["MOCK_STAFF"];
    },
});
Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__["registerMockEndpoint"])({
    path: '/api/staff/v1/people/:id',
    metadata: {},
    method: 'GET',
    callback: (request) => {
        const id = decodeURIComponent(request.route_params.id);
        const person = _users_data__WEBPACK_IMPORTED_MODULE_2__["MOCK_STAFF"].find(user => user.email === id);
        if (person) {
            return Object.assign(Object.assign({}, person), { location: generateLocation() });
        }
        throw { status: 404, message: 'User not found' };
    },
});
Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__["registerMockEndpoint"])({
    path: '/api/staff/v1/guests',
    metadata: {},
    method: 'GET',
    callback: (request) => {
        if (request.query_params.q) {
            const search = request.query_params.q.toLowerCase();
            return _users_data__WEBPACK_IMPORTED_MODULE_2__["MOCK_GUESTS"].filter((user) => user.name.toLowerCase().includes(search) ||
                user.email.toLowerCase().includes(search));
        }
        return _users_data__WEBPACK_IMPORTED_MODULE_2__["MOCK_STAFF"];
    },
});
Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__["registerMockEndpoint"])({
    path: '/api/staff/v1/guests/:email',
    metadata: {},
    method: 'GET',
    callback: (request) => {
        const person = _users_data__WEBPACK_IMPORTED_MODULE_2__["MOCK_GUESTS"].find(user => user.email === request.route_params.email);
        if (person) {
            return person;
        }
        throw { status: 404, message: 'Guest not found' };
    },
});
Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__["registerMockEndpoint"])({
    path: '/api/staff/v1/guests/:email/meetings',
    metadata: {},
    method: 'GET',
    callback: (request) => {
        if (request.route_params.email) {
            const email = request.route_params.email.toLowerCase();
            const events = _events_data__WEBPACK_IMPORTED_MODULE_6__["MOCK_EVENTS"].filter((event) => event.attendees.find(user => user.email.toLowerCase() === email));
            return events;
        }
        throw { status: 404, message: `Unable to find meetings with guest with email ${request.route_params.email}` };
    },
});
const LOCATION_TYPES = ['meeting', 'desk_id', 'laptop', 'mobile', 'geo', 'none'];
function generateLocation() {
    const type = LOCATION_TYPES[Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["predictableRandomInt"])(LOCATION_TYPES.length)];
    const level = _zone_data__WEBPACK_IMPORTED_MODULE_3__["MOCK_LEVELS"][Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["predictableRandomInt"])(_zone_data__WEBPACK_IMPORTED_MODULE_3__["MOCK_LEVELS"].length)];
    const level_spaces = _spaces_data__WEBPACK_IMPORTED_MODULE_4__["MOCK_SPACES"].filter(s => s.zones.includes(level.id));
    const space = level_spaces[Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["predictableRandomInt"])(level_spaces.length)] || {};
    const location = {};
    switch (type) {
        case 'meeting':
            location.meeting = {
                building: level.parent_id,
                level: level.id,
                system: space.id,
                map_id: space.map_id,
                event_id: ''
            };
            break;
        case 'desk_id':
            location.meeting = {
                building: level.parent_id,
                level: level.id,
                map_id: space.map_id,
                checked_in: dayjs__WEBPACK_IMPORTED_MODULE_5__().unix()
            };
            break;
        case 'laptop':
        case 'mobile':
            location[type] = {
                building: level.parent_id,
                level: level.id,
                x: +Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["predictableRandomInt"])(10000),
                y: +Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["predictableRandomInt"])(5000),
                last_seen: dayjs__WEBPACK_IMPORTED_MODULE_5__().subtract(Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["predictableRandomInt"])(60), 'm').unix()
            };
            break;
        case 'geo':
            location.geo = {
                lat: Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["predictableRandomInt"])(180) - 90,
                lon: Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["predictableRandomInt"])(360) - 180,
                last_seen: dayjs__WEBPACK_IMPORTED_MODULE_5__().subtract(Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["predictableRandomInt"])(60), 'm').unix()
            };
            break;
    }
    return location;
}


/***/ }),

/***/ "nMbc":
/*!**************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/counter/counter.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "nIj0");



const _c0 = function () { return { class: "material-icons", content: "remove" }; };
const _c1 = function () { return { class: "material-icons", content: "add" }; };
class CounterComponent {
    constructor() {
        /** Size of a single step */
        this.step = 1;
        /** Maximum amount for the counter */
        this.max = 10;
        /** Minimum amount for the counter */
        this.min = 0;
    }
    /**
     * Add the `step` to the current value
     */
    add() {
        if (!this.value) {
            this.value = this.min || 0;
        }
        const step = this.ctrl_key ? 100 : this.shift_key ? 10 : this.step || 1;
        this.value += step;
        if (this.value > this.max) {
            this.value = this.max || 10;
        }
        this.setValue(this.value);
    }
    /** Remove the `step` from the current value */
    remove() {
        if (!this.value) {
            this.value = this.min || 0;
        }
        const step = this.ctrl_key ? 100 : this.shift_key ? 10 : this.step || 1;
        this.value -= step;
        if (this.value < this.min) {
            this.value = this.min || 0;
        }
        this.setValue(this.value);
    }
    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    setValue(new_value) {
        this.value = new_value;
        /* istanbul ignore else */
        if (this._onChange) {
            this._onChange(new_value);
        }
    }
    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    writeValue(value) {
        this.value = value;
    }
    /* istanbul ignore next */
    /**
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param fn The callback function to register
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /* istanbul ignore next */
    /**
     * Registers a callback function is called by the forms API on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    registerOnTouched(fn) {
        this._onTouch = fn;
    }
}
CounterComponent.ɵfac = function CounterComponent_Factory(t) { return new (t || CounterComponent)(); };
CounterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CounterComponent, selectors: [["a-counter"]], inputs: { step: "step", max: "max", min: "min" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                /* istanbul ignore next */
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => CounterComponent),
                multi: true,
            },
        ])], decls: 7, vars: 7, consts: [[1, "counter", 3, "keydown.shift", "keydown.control", "keydown.meta", "keyup.shift", "keyup.control", "keyup.meta"], ["mat-icon-button", "", "name", "remove", 3, "disabled", "click"], [3, "icon"], [1, "value"], ["mat-icon-button", "", "name", "add", 3, "disabled", "click"]], template: function CounterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.shift", function CounterComponent_Template_div_keydown_shift_0_listener() { return ctx.shift_key = true; }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("keydown.control", function CounterComponent_Template_div_keydown_control_0_listener() { return ctx.ctrl_key = true; }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("keydown.meta", function CounterComponent_Template_div_keydown_meta_0_listener() { return ctx.ctrl_key = true; }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("keyup.shift", function CounterComponent_Template_div_keyup_shift_0_listener() { return ctx.shift_key = false; }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("keyup.control", function CounterComponent_Template_div_keyup_control_0_listener() { return ctx.ctrl_key = false; }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("keyup.meta", function CounterComponent_Template_div_keyup_meta_0_listener() { return ctx.ctrl_key = false; }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CounterComponent_Template_button_click_1_listener() { return ctx.remove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CounterComponent_Template_button_click_5_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.value || ctx.value === ctx.min);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.value || "0", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.value === ctx.max);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
    } }, styles: [".counter[_ngcontent-%COMP%] {\n                display: flex;\n                align-items: center;\n                font-size: 1rem;\n            }\n\n            .value[_ngcontent-%COMP%] {\n                padding: 0.25em;\n                min-width: 3em;\n                text-align: center;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CounterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-counter',
                template: `
        <div
            class="counter"
            (window:keydown.shift)="shift_key = true"
            (window:keydown.control)="ctrl_key = true"
            (window:keydown.meta)="ctrl_key = true"
            (window:keyup.shift)="shift_key = false"
            (window:keyup.control)="ctrl_key = false"
            (window:keyup.meta)="ctrl_key = false"
        >
            <button
                mat-icon-button
                name="remove"
                [disabled]="!value || value === min"
                (click)="remove()"
            >
                <app-icon [icon]="{ class: 'material-icons', content: 'remove' }"></app-icon>
            </button>
            <div class="value">
                {{ value || '0' }}
            </div>
            <button mat-icon-button name="add" [disabled]="value === max" (click)="add()">
                <app-icon [icon]="{ class: 'material-icons', content: 'add' }"></app-icon>
            </button>
        </div>
    `,
                styles: [
                    `
            .counter {
                display: flex;
                align-items: center;
                font-size: 1rem;
            }

            .value {
                padding: 0.25em;
                min-width: 3em;
                text-align: center;
            }
        `,
                ],
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        /* istanbul ignore next */
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => CounterComponent),
                        multi: true,
                    },
                ],
            }]
    }], null, { step: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "nWvK":
/*!***************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/spaces/src/lib/spaces.ts ***!
  \***************************************************************************************/
/*! exports provided: SpaceSelectItemComponent, SpaceSelectModalComponent, Space, generateMockSpace, SharedSpacesModule, SpacesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _space_select_modal_item_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./space-select-modal/item/item.component */ "7ow8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpaceSelectItemComponent", function() { return _space_select_modal_item_item_component__WEBPACK_IMPORTED_MODULE_0__["SpaceSelectItemComponent"]; });

/* harmony import */ var _space_select_modal_space_select_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./space-select-modal/space-select-modal.component */ "a1dc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpaceSelectModalComponent", function() { return _space_select_modal_space_select_modal_component__WEBPACK_IMPORTED_MODULE_1__["SpaceSelectModalComponent"]; });

/* harmony import */ var _space_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./space.class */ "mh7C");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Space", function() { return _space_class__WEBPACK_IMPORTED_MODULE_2__["Space"]; });

/* harmony import */ var _space_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./space.utilities */ "2eSb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateMockSpace", function() { return _space_utilities__WEBPACK_IMPORTED_MODULE_3__["generateMockSpace"]; });

/* harmony import */ var _spaces_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spaces.module */ "0Dh+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedSpacesModule", function() { return _spaces_module__WEBPACK_IMPORTED_MODULE_4__["SharedSpacesModule"]; });

/* harmony import */ var _spaces_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spaces.service */ "VK0q");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpacesService", function() { return _spaces_service__WEBPACK_IMPORTED_MODULE_5__["SpacesService"]; });









/***/ }),

/***/ "o6WN":
/*!*****************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/organisation/src/lib/building.class.ts ***!
  \*****************************************************************************************************/
/*! exports provided: Building */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Building", function() { return Building; });
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _level_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level.class */ "rrlD");


class Building extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_0__["BaseDataClass"] {
    constructor(raw_data = {}) {
        super(raw_data);
        const settings = raw_data.settings || {};
        this.display_name = raw_data.display_name;
        const disc_info = settings.discovery_info || settings;
        this.zone_id = raw_data.zone_id || raw_data.zone;
        this.extras = (raw_data.extras || disc_info.extras || []).map((i) => ({
            id: i.extra_id || i.id,
            name: i.extra_name || i.name,
        }));
        this.loan_items = (raw_data.loan_items || disc_info.loan_items || []).map((i) => ({
            id: i.extra_id || i.id,
            name: i.extra_name || i.name,
        }));
        this.levels = (raw_data.levels || disc_info.levels || []).map((i) => new _level_class__WEBPACK_IMPORTED_MODULE_1__["BuildingLevel"](Object.assign(Object.assign({}, i), { building_id: this.id })));
        this._roles = raw_data.roles || disc_info.roles || {};
        this._lockers =
            raw_data.lockers || raw_data.locker_structure || disc_info.locker_structure || {};
        this._systems = raw_data.systems || disc_info.systems || {};
        this._phone_numbers = raw_data.phone_numbers || disc_info.phone_numbers || {};
        this._location = raw_data.location ||
            disc_info.location || { longitude: null, latitude: null };
        this.room_configurations =
            raw_data.room_configurations || disc_info.room_configurations || [];
        this.attributes =
            raw_data.attributes || disc_info.attributes || [];
        const searchables = [];
        if (raw_data.neighbourhoods) {
            for (const lvl in raw_data.neighbourhoods) {
                if (raw_data.neighbourhoods.hasOwnProperty(lvl)) {
                    const lvl_features = raw_data.neighbourhoods[lvl] || {};
                    for (const feature in lvl_features) {
                        if (lvl_features.hasOwnProperty(feature)) {
                            searchables.push({
                                id: lvl_features[feature],
                                name: feature,
                                level_id: lvl,
                            });
                        }
                    }
                }
            }
        }
        this.searchables = searchables;
        this.timezone = raw_data.timezone || disc_info.timezone || settings.timezone || '';
        this.catering_hours = raw_data.catering_hours || disc_info.catering_hours || settings.catering_hours || { start: 7, end: 20 };
        this.visitor_space = raw_data.visitor_space || disc_info.visitor_space || settings.visitor_space || '';
        this.holding_bay = raw_data.holding_bay || disc_info.holding_bay || settings.holding_bay || '';
        this.code = raw_data.code || disc_info.code || settings.code || '';
        this.address = raw_data.address || disc_info.address || settings.address || '';
        this.orientations = raw_data.orientations || disc_info.orientations || settings.orientations || {};
        this.booking_details =
            raw_data.booking_details ||
                disc_info.booking_details ||
                settings.booking_details ||
                null;
        this.booking_rules =
            raw_data.booking_rules || disc_info.booking_rules || settings.booking_rules || {};
        this.catering_restricted_from =
            raw_data.catering_restricted_from ||
                disc_info.catering_restricted_from ||
                settings.catering_restricted_from ||
                -1440;
        this.currency = raw_data.currency || disc_info.currency || settings.currency || 'USD';
    }
    /**
     * Get list of users with the associated role
     * @param name Role to find users for
     */
    role(name) {
        return [...(this._roles[name] || [])];
    }
    /**
     * Get list of the names of available user role lists
     */
    get role_names() {
        return Object.keys(this._roles).filter((i) => this._roles.hasOwnProperty(i));
    }
    /** Map of the locker ID arrays */
    get lockers() {
        return Object.assign({}, (this._lockers || {}));
    }
    /** Map of important system ids for the building */
    get systems() {
        return Object.assign({}, (this._systems || {}));
    }
    /** Map of important phone numbers for the building */
    get phone_numbers() {
        return Object.assign({}, (this._phone_numbers || {}));
    }
    /**
     * Get search map feature for the given level ID
     * @param level_id ID of level to grab features for
     */
    featuresForLevel(level_id) {
        return (this.searchables || []).filter((i) => i.level_id === level_id);
    }
}


/***/ }),

/***/ "pP/K":
/*!****************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/events/src/lib/helpers.ts ***!
  \****************************************************************************************/
/*! exports provided: eventStatus, formatRecurrence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventStatus", function() { return eventStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatRecurrence", function() { return formatRecurrence; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "w8Fe");

function eventStatus(details) {
    var _a;
    if ((_a = details.resources) === null || _a === void 0 ? void 0 : _a.length) {
        if (details.resources.every((i) => i.response_status === 'accepted')) {
            return 'confirmed';
        }
        else if (details.resources.some((i) => i.response_status === 'tentative' || i.response_status === 'needsAction')) {
            return 'tentative';
        }
        return 'cancelled';
    }
    return 'confirmed';
}
function formatRecurrence(recurrence) {
    let details = '';
    if (recurrence) {
        const { interval, pattern, start, end } = recurrence;
        if (interval && interval > 1) {
            details = details.concat(`Every ${interval}`);
        }
        switch (pattern) {
            case 'daily':
                if (interval && interval > 1) {
                    details = details.concat(' days');
                }
                else {
                    details = details.concat('Daily');
                }
                break;
            case 'weekly':
                if (interval && interval > 1) {
                    details = details.concat(' weeks');
                }
                else {
                    details = details.concat('Weekly');
                }
                break;
            case 'monthly':
                if (interval && interval > 1) {
                    details = details.concat(' months');
                }
                else {
                    details = details.concat('Monthly');
                }
                break;
        }
        details = details.concat(`, until ${Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(end, 'MMM do, yyyy')}`);
    }
    return '';
}


/***/ }),

/***/ "pu6a":
/*!*************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/calendar/src/lib/calendar.class.ts ***!
  \*************************************************************************************************/
/*! exports provided: Calendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calendar", function() { return Calendar; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "w8Fe");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _spaces_src_lib_space_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../spaces/src/lib/space.class */ "mh7C");



class Calendar extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["BaseDataClass"] {
    constructor(data = {}) {
        super(data);
        this.primary = data.primary;
        this.summary = data.summary;
        this.can_edit = data.can_edit;
        this.resource = new _spaces_src_lib_space_class__WEBPACK_IMPORTED_MODULE_2__["Space"](data.resource || data.system);
        this.availability = (data.availability || []).map((i) => {
            return {
                date: new Date(i.starts_at.dateTime).valueOf(),
                duration: Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["differenceInMinutes"])(new Date(i.ends_at.dateTime), new Date(i.starts_at.dateTime)),
                status: i.status,
            };
        });
    }
}


/***/ }),

/***/ "qep/":
/*!****************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/common/src/lib/version.ts ***!
  \****************************************************************************************/
/*! exports provided: VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
// IMPORTANT: THIS FILE IS AUTO GENERATED! DO NOT MANUALLY EDIT OR CHECKIN!
/* tslint:disable */
const VERSION = {
    "dirty": false,
    "raw": "68a82b3",
    "hash": "68a82b3",
    "distance": null,
    "tag": null,
    "semver": null,
    "suffix": "68a82b3",
    "semverString": null,
    "version": "0.0.0",
    "time": 1606803625997
};
/* tslint:enable */


/***/ }),

/***/ "rrlD":
/*!**************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/organisation/src/lib/level.class.ts ***!
  \**************************************************************************************************/
/*! exports provided: BuildingLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingLevel", function() { return BuildingLevel; });
/** Building Level data */
class BuildingLevel {
    constructor(_data = {}) {
        this.settings = {};
        this.id = _data.id || '';
        this.parent_id = _data.parent_id || '';
        this.name = _data.name || '';
        this.display_name = _data.display_name || '';
        this.map_id = _data.map_id || '';
        this.capacity = _data.capacity || 0;
        this.locations = _data.locations || [];
    }
}


/***/ }),

/***/ "sWXn":
/*!***********************************************************!*\
  !*** ./src/app/ui/map-controls/map-controls.component.ts ***!
  \***********************************************************/
/*! exports provided: MapControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapControlsComponent", function() { return MapControlsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interfaces/organisation */ "dJst");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "mFH5");












function MapControlsComponent_mat_form_field_1_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bld_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", bld_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bld_r3.name, " ");
} }
function MapControlsComponent_mat_form_field_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function MapControlsComponent_mat_form_field_1_Template_mat_select_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.setBuilding($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MapControlsComponent_mat_form_field_1_mat_option_2_Template, 2, 2, "mat-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.building);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.building_list);
} }
function MapControlsComponent_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const level_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", level_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", level_r6.name, " ");
} }
class MapControlsComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["BaseClass"] {
    constructor(_route, _router, _settings, _org) {
        super();
        this._route = _route;
        this._router = _router;
        this._settings = _settings;
        this._org = _org;
        /** Emitter for changes to the active level */
        this.levelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** List of available buildings */
        this.building_list = [];
        /** List of available levels */
        this.level_list = [];
    }
    get can_select_building() {
        return !!this._settings.get('app.explore.can_select_building');
    }
    ngOnInit() {
        this.subscription('route.query', this._route.queryParamMap.subscribe(params => {
            if (params.has('level')) {
                const level_id = params.get('level');
                const level = this._org.levelWithID([level_id]);
                this.level = level.id;
                this.setBuilding(level.parent_id);
                this.levelChange.emit(this.level);
                this.clearTimeout('check_building');
            }
        }));
        this.building_list = this._org.buildings;
        this.timeout('check_building', () => {
            if (!this.building) {
                this.setBuilding(this._org.building.id);
            }
            this.levelChange.emit(this.level);
        });
    }
    setBuilding(bld_id) {
        const building = this._org.buildings.find(bld => bld.id === bld_id);
        if (building) {
            this.building = bld_id;
            this.level_list = building.levels;
            if (this.level_list.length && !this.level_list.find(lvl => lvl.id === this.level)) {
                this.updateLevel(this.level_list[0].id);
            }
        }
    }
    updateLevel(lvl_id) {
        this.level = lvl_id;
        this.levelChange.emit(this.level);
        this._router.navigate([], {
            relativeTo: this._route,
            queryParamsHandling: 'merge',
            queryParams: { level: lvl_id }
        });
    }
}
MapControlsComponent.ɵfac = function MapControlsComponent_Factory(t) { return new (t || MapControlsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_3__["OrganisationService"])); };
MapControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapControlsComponent, selectors: [["a-map-controls"]], inputs: { building: "building", level: "level" }, outputs: { levelChange: "levelChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 3, consts: [[1, "map-controls"], ["class", "map", "appearance", "outline", 4, "ngIf"], ["appearance", "outline", 1, "map"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function MapControlsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MapControlsComponent_mat_form_field_1_Template, 3, 2, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function MapControlsComponent_Template_mat_select_valueChange_3_listener($event) { return ctx.level = $event; })("valueChange", function MapControlsComponent_Template_mat_select_valueChange_3_listener($event) { return ctx.updateLevel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MapControlsComponent_mat_option_4_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.can_select_building && ctx.building_list.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.level);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.level_list);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"]], styles: [".map-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvdmlzaXRvci1raW9zay9zcmMvYXBwL3VpL21hcC1jb250cm9scy9tYXAtY29udHJvbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFDRiIsImZpbGUiOiJhcHBzL3Zpc2l0b3Ita2lvc2svc3JjL2FwcC91aS9tYXAtY29udHJvbHMvbWFwLWNvbnRyb2xzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcC1jb250cm9scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapControlsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-map-controls',
                templateUrl: './map-controls.component.html',
                styleUrls: ['./map-controls.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }, { type: _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_3__["OrganisationService"] }]; }, { building: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], level: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], levelChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "uCxk":
/*!***********************************************************************************!*\
  !*** ./src/app/overlays/explore-booking-modal/explore-booking-modal.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ExploreBookingModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreBookingModalComponent", function() { return ExploreBookingModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var date_fns_tz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns-tz */ "HBPA");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/events */ "eZII");
/* harmony import */ var _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @user-interfaces/organisation */ "dJst");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs */ "BQ33");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _ui_forms_booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/forms/booking-form/booking-form.component */ "QQt5");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "PBFl");














function ExploreBookingModalComponent_div_7_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3);
} }
function ExploreBookingModalComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Room Contains: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExploreBookingModalComponent_div_7_li_3_Template, 2, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.equipment);
} }
function ExploreBookingModalComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Time at location ", ctx_r1.building.name, " ", ctx_r1.building_time, " ");
} }
class ExploreBookingModalComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["BaseClass"] {
    constructor(_dialog_ref, _data, _org, _events) {
        super();
        this._dialog_ref = _dialog_ref;
        this._data = _data;
        this._org = _org;
        this._events = _events;
        /** Emitter for user action on the modal */
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /** Active space being booked */
    get space() {
        return this._data.space;
    }
    get building() {
        const level = this.space.level;
        const building = this._org.buildings.find((bld) => bld.id === level.parent_id);
        return building;
    }
    get is_different_tz() {
        return this.time_string !== this.building_time;
    }
    get date_string() {
        const date = dayjs__WEBPACK_IMPORTED_MODULE_6__(this.booking.date);
        return date.format('DD MMM YYYY');
    }
    get building_time() {
        const date = dayjs__WEBPACK_IMPORTED_MODULE_6__(this.booking.date);
        const building = this.building;
        if (!building || !building.timezone) {
            return;
        }
        return Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_2__["format"])(date.toDate(), 'h:mm a', { timeZone: building.timezone }).toUpperCase();
    }
    get time_string() {
        const date = dayjs__WEBPACK_IMPORTED_MODULE_6__(this.booking.date);
        return date.format('h:mmA');
    }
    get upcoming_booking() {
        // if (this.space.next) {
        //     const date = dayjs(this.space.next.date);
        //     return `Next booking at ${date.format('h:mm A')}`;
        // }
        return `No more booking today`;
    }
    get equipment() {
        const building = this.building;
        if (!building) {
            return;
        }
        return building.extras
            .filter((i) => this.space.features.indexOf(`${i.id}`) >= 0)
            .map((i) => i.name);
    }
    ngOnInit() {
        const time = dayjs__WEBPACK_IMPORTED_MODULE_6__();
        this.booking = new _user_interfaces_events__WEBPACK_IMPORTED_MODULE_4__["CalendarEvent"]({
            title: 'Meeting',
            system: this.space,
            date: time.minute(Math.ceil(time.minute() / 5) * 5).valueOf(),
            duration: 30,
        });
        // this.form = generateBookingForm(this.booking, null, [
        //     'title',
        //     'organiser',
        //     'duration'
        // ] as AvailableBookingFields[]);
    }
    book() {
        this.form.markAllAsTouched();
        if (this.form.valid) {
            this.loading = true;
            this._events.save(this.booking).then(() => {
                Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["notifySuccess"])(`Sucessfully made booking`);
                this._dialog_ref.close();
            }, (err) => {
                Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["notifyError"])(`Error creating booking. Error: ${err}`);
                this.loading = false;
            });
        }
    }
}
ExploreBookingModalComponent.ɵfac = function ExploreBookingModalComponent_Factory(t) { return new (t || ExploreBookingModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_5__["OrganisationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_events__WEBPACK_IMPORTED_MODULE_4__["EventsService"])); };
ExploreBookingModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExploreBookingModalComponent, selectors: [["a-explore-booking-modal"]], outputs: { event: "event" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 18, vars: 7, consts: [[1, "bookings"], ["class", "equipment", 4, "ngIf"], [1, "time"], ["class", "time", 4, "ngIf"], [3, "form"], ["mat-button", "", "mat-dialog-close", "", 1, "inverse"], ["mat-button", "", 3, "click"], [1, "equipment"], [4, "ngFor", "ngForOf"]], template: function ExploreBookingModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExploreBookingModalComponent_div_7_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExploreBookingModalComponent_div_10_Template, 2, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "a-booking-form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExploreBookingModalComponent_Template_button_click_16_listener() { return ctx.book(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Book Room - ", ctx.space.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.upcoming_booking);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.equipment && ctx.equipment.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Booking on ", ctx.date_string, " at ", ctx.time_string, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.is_different_tz);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.form);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ui_forms_booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_8__["BookingFormComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n  max-width: 32em;\n}\n\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 1em;\n}\n\napp-icon[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n\n.content[_ngcontent-%COMP%] {\n  width: 16rem;\n  text-align: center;\n  font-size: 0.8em;\n}\n\nfooter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvdmlzaXRvci1raW9zay9zcmMvYXBwL292ZXJsYXlzL2V4cGxvcmUtYm9va2luZy1tb2RhbC9leHBsb3JlLWJvb2tpbmctbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoiYXBwcy92aXNpdG9yLWtpb3NrL3NyYy9hcHAvb3ZlcmxheXMvZXhwbG9yZS1ib29raW5nLW1vZGFsL2V4cGxvcmUtYm9va2luZy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgbWF4LXdpZHRoOiAzMmVtO1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMWVtO1xufVxuXG5hcHAtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuXG4uY29udGVudCB7XG4gIHdpZHRoOiAxNnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IC44ZW07XG59XG5cbmZvb3RlciBidXR0b24ge1xuICBtaW4td2lkdGg6IDhlbTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExploreBookingModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-explore-booking-modal',
                templateUrl: './explore-booking-modal.component.html',
                styleUrls: ['./explore-booking-modal.component.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_5__["OrganisationService"] }, { type: _user_interfaces_events__WEBPACK_IMPORTED_MODULE_4__["EventsService"] }]; }, { event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "uJOJ":
/*!************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/mocks/src/lib/api/systems.mock.ts ***!
  \************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/ts-client */ "/It1");
/* harmony import */ var _systems_bindings_mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../systems-bindings.mock */ "emHN");
/* harmony import */ var _spaces_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spaces.data */ "vcx8");



_spaces_data__WEBPACK_IMPORTED_MODULE_2__["MOCK_SPACES"].forEach((space, index) => Object(_systems_bindings_mock__WEBPACK_IMPORTED_MODULE_1__["createSystem"])(space));
Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__["registerMockEndpoint"])({
    path: '/api/engine/v2/systems',
    metadata: {},
    method: 'GET',
    callback: (request) => {
        return _spaces_data__WEBPACK_IMPORTED_MODULE_2__["MOCK_SPACES"];
    }
});


/***/ }),

/***/ "ukpX":
/*!********************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/icon/icon.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: IconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return IconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @acaprojects/ngx-pipes */ "81Qw");




function IconComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]((ctx_r0.icon == null ? null : ctx_r0.icon.class) || ctx_r0.className);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.icon == null ? null : ctx_r0.icon.content, " ");
} }
function IconComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "safe");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, ctx_r1.icon.src, "resource"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = ["*"];
class IconComponent {
    constructor() {
        this.className = 'material-icons';
    }
}
IconComponent.ɵfac = function IconComponent_Factory(t) { return new (t || IconComponent)(); };
IconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconComponent, selectors: [["app-icon"]], inputs: { className: "className", icon: "icon" }, ngContentSelectors: _c0, decls: 3, vars: 2, consts: [[1, "app-icon"], [3, "class", 4, "ngIf"], [3, "src", 4, "ngIf"], [3, "src"]], template: function IconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IconComponent_i_1_Template, 3, 3, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IconComponent_img_2_Template, 2, 4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.icon || ctx.icon.type !== "img");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.icon && ctx.icon.type === "img");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], styles: [".app-icon[_ngcontent-%COMP%] {\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                height: 1.25em;\n                width: 1.25em;\n            }\n\n            i[_ngcontent-%COMP%] {\n                font-size: 1em;\n            }\n\n            img[_ngcontent-%COMP%] {\n                height: 1em;\n                width: 1em;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-icon',
                template: `
        <div class="app-icon">
            <i *ngIf="!icon || icon.type !== 'img'" [class]="icon?.class || className">
                {{ icon?.content }}
                <ng-content></ng-content>
            </i>
            <img *ngIf="icon && icon.type === 'img'" [src]="icon.src | safe: 'resource'" />
        </div>
    `,
                styles: [
                    `
            .app-icon {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 1.25em;
                width: 1.25em;
            }

            i {
                font-size: 1em;
            }

            img {
                height: 1em;
                width: 1em;
            }
        `,
                ],
            }]
    }], null, { className: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vAAA":
/*!*********************************************!*\
  !*** ./src/app/overlays/overlays.module.ts ***!
  \*********************************************/
/*! exports provided: SharedOverlaysModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedOverlaysModule", function() { return SharedOverlaysModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _ui_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/shared.module */ "R3Ii");
/* harmony import */ var _view_room_modal_view_room_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-room-modal/view-room-modal.component */ "ceWj");
/* harmony import */ var _explore_booking_modal_explore_booking_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./explore-booking-modal/explore-booking-modal.component */ "uCxk");
/* harmony import */ var _user_interfaces_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @user-interfaces/users */ "mjT4");







const OVERLAYS = [
    _view_room_modal_view_room_modal_component__WEBPACK_IMPORTED_MODULE_3__["ViewRoomModalComponent"]
];
class SharedOverlaysModule {
}
SharedOverlaysModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedOverlaysModule });
SharedOverlaysModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedOverlaysModule_Factory(t) { return new (t || SharedOverlaysModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _user_interfaces_users__WEBPACK_IMPORTED_MODULE_5__["SharedUsersModule"],
            _ui_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedContentModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedOverlaysModule, { declarations: [_view_room_modal_view_room_modal_component__WEBPACK_IMPORTED_MODULE_3__["ViewRoomModalComponent"], _explore_booking_modal_explore_booking_modal_component__WEBPACK_IMPORTED_MODULE_4__["ExploreBookingModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _user_interfaces_users__WEBPACK_IMPORTED_MODULE_5__["SharedUsersModule"],
        _ui_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedContentModule"]], exports: [_view_room_modal_view_room_modal_component__WEBPACK_IMPORTED_MODULE_3__["ViewRoomModalComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedOverlaysModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    ...OVERLAYS,
                    _explore_booking_modal_explore_booking_modal_component__WEBPACK_IMPORTED_MODULE_4__["ExploreBookingModalComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _user_interfaces_users__WEBPACK_IMPORTED_MODULE_5__["SharedUsersModule"],
                    _ui_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedContentModule"]
                ],
                exports: [
                    ...OVERLAYS
                ],
                entryComponents: [
                    ...OVERLAYS
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bootstrap/bootstrap.component */ "7C6v");
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome.component */ "Sbv1");






const routes = [
    { path: 'bootstrap', component: _bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_2__["BootstrapComponent"] },
    { path: 'welcome', component: _welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"] },
    {
        path: 'explore',
        loadChildren: () => __webpack_require__.e(/*! import() | explore-explore-module */ "explore-explore-module").then(__webpack_require__.bind(null, /*! ./explore/explore.module */ "vwuq")).then((m) => m.AppExploreModule),
    },
    {
        path: 'checkin',
        loadChildren: () => __webpack_require__.e(/*! import() | checkin-checkin-module */ "checkin-checkin-module").then(__webpack_require__.bind(null, /*! ./checkin/checkin.module */ "hs9o")).then((m) => m.VisitorCheckinModule),
    },
    { path: '**', redirectTo: 'bootstrap' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "vcx8":
/*!***********************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/mocks/src/lib/api/spaces.data.ts ***!
  \***********************************************************************************************/
/*! exports provided: MOCK_SPACES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOCK_SPACES", function() { return MOCK_SPACES; });
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @user-interfaces/spaces */ "6CBO");


const randomSpaceFeatures = () => {
    const f = ['Whiteboard', 'VidConf', 'Projector', 'Views'];
    const numFeatures = Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_0__["predictableRandomInt"])(f.length + 1);
    const res = [];
    for (let i = 0; i < numFeatures; i++) {
        res.push(f[Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_0__["predictableRandomInt"])(f.length)]);
    }
    return res.filter((el, i, r) => r.indexOf(el) === i).join(' ');
};
const MOCK_SPACES = [
    { name: 'Meeting Room 1.01', map_id: 'area-1.01-status', zones: ['bld-01_lvl-01'] },
    { name: 'Meeting Room 1.02', map_id: 'area-1.02-status', zones: ['bld-01_lvl-01'] },
    { name: 'Meeting Room 1.03', map_id: 'area-1.03-status', zones: ['bld-01_lvl-01'] },
    { name: 'Meeting Room 1.04', map_id: 'area-1.04-status', zones: ['bld-01_lvl-01'] },
    { name: 'Meeting Room 1.05', map_id: 'area-1.05-status', zones: ['bld-01_lvl-01'], bookable: false },
    { name: 'Meeting Room 1.06', map_id: 'area-1.06-status', zones: ['bld-01_lvl-01'] },
    { name: 'Meeting Room 1.07', map_id: 'area-1.07-status', zones: ['bld-01_lvl-01'] },
    { name: 'Meeting Room 1.08', map_id: 'area-1.08-status', zones: ['bld-01_lvl-01'] },
    { name: 'Meeting Room 1.09', map_id: 'area-1.01-status', zones: ['bld-01_lvl-01'] },
    { name: 'Meeting Room 1.10', map_id: 'area-1.10-status', zones: ['bld-01_lvl-01'] },
].map(d => Object(_user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_1__["generateMockSpace"])(Object.assign(Object.assign({}, d), { features: randomSpaceFeatures() })));


/***/ }),

/***/ "vrEj":
/*!*************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/common/src/lib/settings.service.ts ***!
  \*************************************************************************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "w8Fe");
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./general */ "3ePk");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings */ "U0kR");
/* harmony import */ var _base_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base.class */ "U6W6");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./version */ "qep/");











class SettingsService extends _base_class__WEBPACK_IMPORTED_MODULE_7__["BaseClass"] {
    constructor(_title) {
        super();
        this._title = _title;
        /** Name of the application */
        this._app_name = 'PlaceOS';
        /** List of override settings in order of priority */
        this._overrides = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        /** Mapping of behaviour subjects */
        this._subjects = {};
        /** Mapping of observables */
        this._observables = {};
        const now = new Date();
        const time = new Date(_version__WEBPACK_IMPORTED_MODULE_8__["VERSION"].time);
        const built = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["isSameDay"])(now, time)
            ? `Today at ${Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(time, 'h:mma')}`
            : Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(time, 'do MMM yyyy, h:mma');
        Object(_general__WEBPACK_IMPORTED_MODULE_5__["log"])('CORE', `${_version__WEBPACK_IMPORTED_MODULE_8__["VERSION"].semver}`, null, 'debug', true);
        Object(_general__WEBPACK_IMPORTED_MODULE_5__["log"])('APP', `${_version__WEBPACK_IMPORTED_MODULE_8__["VERSION"].hash} | Built: ${built}`, null, 'debug', true);
        this.init();
    }
    /**
     * @hidden
     */
    set overrides(value) {
        this._overrides.next(value);
    }
    /** Get observable for key */
    listen(name) {
        if (!this._observables[name]) {
            this._subjects[name] = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
            this._observables[name] = this._subjects[name].asObservable();
        }
        return this._observables[name];
    }
    /** Update observable value for key */
    post(name, value) {
        if (!this._observables[name]) {
            this._subjects[name] = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
            this._observables[name] = this._subjects[name].asObservable();
        }
        this._subjects[name].next(value);
    }
    value(name) {
        return !this._observables[name] ? null : this._subjects[name].getValue();
    }
    /** Page title */
    get title() {
        return this._title.getTitle();
    }
    set title(value) {
        this._title.setTitle(`${value} | ${this._app_name}`);
    }
    /**
     * Initialise the settings
     */
    init() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.get('debug')) {
                window.debug = true;
            }
            if ((_a = this.get('app')) === null || _a === void 0 ? void 0 : _a.name) {
                this._app_name = this.get('app').name;
            }
            Object(_general__WEBPACK_IMPORTED_MODULE_5__["log"])('Settings', 'Successfully loaded settings');
            this._initialised.next(true);
        });
    }
    /** Whether settings service has initialised */
    get app_name() {
        return this._app_name;
    }
    /**
     * Get a setting
     * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
     */
    get(key) {
        const keys = key.split('.');
        if (keys[0] !== 'app') {
            return Object(_general__WEBPACK_IMPORTED_MODULE_5__["getItemWithKeys"])(keys, _settings__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_SETTINGS"]);
        }
        const override_settings = this._overrides.getValue();
        for (const override of override_settings) {
            const value = Object(_general__WEBPACK_IMPORTED_MODULE_5__["getItemWithKeys"])(keys.slice(1), override);
            if (value != null) {
                return value;
            }
        }
        return Object(_general__WEBPACK_IMPORTED_MODULE_5__["getItemWithKeys"])(keys, _settings__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_SETTINGS"]);
    }
}
SettingsService.ɵfac = function SettingsService_Factory(t) { return new (t || SettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"])); };
SettingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SettingsService, factory: SettingsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SettingsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }]; }, null); })();


/***/ }),

/***/ "w6NQ":
/*!*************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/users/src/lib/users.ts ***!
  \*************************************************************************************/
/*! exports provided: NewUserModalComponent, UserFormComponent, GroupsService, GuestsService, MapLocation, PeopleService, StaffService, User, GuestUser, StaffUser, USER_DOMAIN, generateMockUser, generateUserForm, generateGuestForm, SharedUsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _new_user_modal_new_user_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-user-modal/new-user-modal.component */ "MIKl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewUserModalComponent", function() { return _new_user_modal_new_user_modal_component__WEBPACK_IMPORTED_MODULE_0__["NewUserModalComponent"]; });

/* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-form/user-form.component */ "4si7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_1__["UserFormComponent"]; });

/* harmony import */ var _groups_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./groups.service */ "jiQt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupsService", function() { return _groups_service__WEBPACK_IMPORTED_MODULE_2__["GroupsService"]; });

/* harmony import */ var _guests_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guests.service */ "mqs+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GuestsService", function() { return _guests_service__WEBPACK_IMPORTED_MODULE_3__["GuestsService"]; });

/* harmony import */ var _location_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./location.class */ "yHhA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapLocation", function() { return _location_class__WEBPACK_IMPORTED_MODULE_4__["MapLocation"]; });

/* harmony import */ var _people_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./people.service */ "GrKa");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PeopleService", function() { return _people_service__WEBPACK_IMPORTED_MODULE_5__["PeopleService"]; });

/* harmony import */ var _staff_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./staff.service */ "Vai6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaffService", function() { return _staff_service__WEBPACK_IMPORTED_MODULE_6__["StaffService"]; });

/* harmony import */ var _user_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.class */ "xuqh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user_class__WEBPACK_IMPORTED_MODULE_7__["User"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GuestUser", function() { return _user_class__WEBPACK_IMPORTED_MODULE_7__["GuestUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaffUser", function() { return _user_class__WEBPACK_IMPORTED_MODULE_7__["StaffUser"]; });

/* harmony import */ var _user_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user.utilities */ "HTl7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "USER_DOMAIN", function() { return _user_utilities__WEBPACK_IMPORTED_MODULE_8__["USER_DOMAIN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateMockUser", function() { return _user_utilities__WEBPACK_IMPORTED_MODULE_8__["generateMockUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateUserForm", function() { return _user_utilities__WEBPACK_IMPORTED_MODULE_8__["generateUserForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateGuestForm", function() { return _user_utilities__WEBPACK_IMPORTED_MODULE_8__["generateGuestForm"]; });

/* harmony import */ var _users_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users.module */ "wnEE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedUsersModule", function() { return _users_module__WEBPACK_IMPORTED_MODULE_9__["SharedUsersModule"]; });













/***/ }),

/***/ "wJ7u":
/*!**********************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/mocks/src/lib/api/zones.mock.ts ***!
  \**********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/ts-client */ "/It1");
/* harmony import */ var _zone_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zone.data */ "MNob");


Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__["registerMockEndpoint"])({
    path: '/api/engine/v2/zones',
    metadata: {},
    method: 'GET',
    callback: (request) => {
        if (request.query_params.tags === 'org') {
            return _zone_data__WEBPACK_IMPORTED_MODULE_1__["MOCK_ORGS"];
        }
        else if (request.query_params.tags === 'building') {
            return _zone_data__WEBPACK_IMPORTED_MODULE_1__["MOCK_BUILDINGS"];
        }
        else if (request.query_params.tags === 'level') {
            return _zone_data__WEBPACK_IMPORTED_MODULE_1__["MOCK_LEVELS"];
        }
        throw { status: 404, message: 'Zones not found' };
    },
});
Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__["registerMockEndpoint"])({
    path: '/api/engine/v2/metadata/:id',
    metadata: {},
    method: 'GET',
    callback: (request) => {
        if (request.query_params.name === 'catering') {
            return [];
        }
        if (request.query_params.name === 'desks') {
            return {
                details: [
                    {
                        id: 'table-01.001',
                        name: '1.001',
                        bookable: true,
                        group: '',
                    },
                    {
                        id: 'table-01.002',
                        name: '1.002',
                        bookable: true,
                        group: '',
                    },
                    {
                        id: 'table-01.003',
                        name: '1.003',
                        bookable: true,
                        group: '',
                    },
                    {
                        id: 'table-01.004',
                        name: '1.004',
                        bookable: true,
                        group: '',
                    },
                    {
                        id: 'table-01.005',
                        name: '1.005',
                        bookable: false,
                        group: '',
                    },
                    {
                        id: 'table-01.006',
                        name: '1.006',
                        bookable: true,
                        group: '',
                    },
                ],
            };
        }
        return {};
    },
});
Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__["registerMockEndpoint"])({
    path: '/api/engine/v2/metadata/:id/children',
    metadata: {},
    method: 'GET',
    callback: (request) => {
        return [
            {
                zone: {
                    id: 'bld-01_lvl-01',
                    name: 'Level 1'
                },
                metadata: {
                    desks: {
                        details: [
                            {
                                id: 'table-01.001',
                                name: '1.001',
                                bookable: true,
                                group: '',
                            },
                            {
                                id: 'table-01.002',
                                name: '1.002',
                                bookable: true,
                                group: '',
                            },
                            {
                                id: 'table-01.003',
                                name: '1.003',
                                bookable: true,
                                group: '',
                            },
                            {
                                id: 'table-01.004',
                                name: '1.004',
                                bookable: true,
                                group: '',
                            },
                            {
                                id: 'table-01.005',
                                name: '1.005',
                                bookable: false,
                                group: '',
                            },
                            {
                                id: 'table-01.006',
                                name: '1.006',
                                bookable: true,
                                group: '',
                            },
                        ],
                    },
                },
            },
        ];
    },
});


/***/ }),

/***/ "wf3U":
/*!*************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/events/src/lib/event.interfaces.ts ***!
  \*************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "wh5e":
/*!************************************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/booking-form/booking-form.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: BookingFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingFormComponent", function() { return BookingFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/organisation */ "dJst");
/* harmony import */ var _users_src_lib_new_user_modal_new_user_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../users/src/lib/new-user-modal/new-user-modal.component */ "MIKl");
/* harmony import */ var _spaces_src_lib_space_select_modal_space_select_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../spaces/src/lib/space-select-modal/space-select-modal.component */ "a1dc");











function BookingFormComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Spaces: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "an-action-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onAction", function BookingFormComponent_div_0_div_1_Template_an_action_field_onAction_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.openSpacesModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r1.spaces);
} }
function BookingFormComponent_div_0_div_2_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Title is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookingFormComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BookingFormComponent_div_0_div_2_mat_error_8_Template, 2, 0, "mat-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("error", ctx_r2.form.controls.title.invalid && ctx_r2.form.controls.title.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.form.controls.title.invalid);
} }
function BookingFormComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a-date-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookingFormComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Recurrence: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "an-action-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onAction", function BookingFormComponent_div_0_div_5_Template_an_action_field_onAction_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.openRecurrenceModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r4.recurrence);
} }
function BookingFormComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Start Time: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a-time-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookingFormComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Duration: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a-duration-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookingFormComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Host: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a-user-search-field", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookingFormComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Attendees: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a-user-list-field", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newUser", function BookingFormComponent_div_0_div_10_Template_a_user_list_field_newUser_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.openNewUserModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookingFormComponent_div_0_div_11_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r21.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r21.display, " ");
} }
function BookingFormComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Booking Type: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BookingFormComponent_div_0_div_11_mat_option_5_Template, 2, 2, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.booking_types);
} }
function BookingFormComponent_div_0_div_12_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const config_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", config_r24.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", config_r24.name, " ");
} }
function BookingFormComponent_div_0_div_12_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.configuration.description);
} }
function BookingFormComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Room Configuration: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BookingFormComponent_div_0_div_12_mat_option_6_Template, 2, 2, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BookingFormComponent_div_0_div_12_div_8_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r10.configuration.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.available_configs);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r10.configuration);
} }
function BookingFormComponent_div_0_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Catering: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "an-action-field", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onAction", function BookingFormComponent_div_0_div_13_Template_an_action_field_onAction_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.openCateringModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r11.catering);
} }
function BookingFormComponent_div_0_div_14_mat_form_field_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "textarea", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BookingFormComponent_div_0_div_14_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "editor", 39);
} }
function BookingFormComponent_div_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Notes: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BookingFormComponent_div_0_div_14_mat_form_field_3_Template, 2, 0, "mat-form-field", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BookingFormComponent_div_0_div_14_ng_template_4_Template, 1, 0, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r12.use_html)("ngIfElse", _r28);
} }
function BookingFormComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookingFormComponent_div_0_div_1_Template, 4, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BookingFormComponent_div_0_div_2_Template, 9, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BookingFormComponent_div_0_div_4_Template, 4, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BookingFormComponent_div_0_div_5_Template, 4, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BookingFormComponent_div_0_div_7_Template, 4, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BookingFormComponent_div_0_div_8_Template, 4, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BookingFormComponent_div_0_div_9_Template, 4, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BookingFormComponent_div_0_div_10_Template, 4, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BookingFormComponent_div_0_div_11_Template, 6, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BookingFormComponent_div_0_div_12_Template, 9, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BookingFormComponent_div_0_div_13_Template, 4, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BookingFormComponent_div_0_div_14_Template, 6, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.id && ctx_r0.form.controls.id.value && ctx_r0.form.controls.space_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.recurrence);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.organiser);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.attendees);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.type && ctx_r0.booking_types.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.configuration && ctx_r0.available_configs.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.catering_allowed && ctx_r0.form.controls.catering);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.body);
} }
class BookingFormComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["BaseClass"] {
    constructor(_org, _settings, _dialog) {
        super();
        this._org = _org;
        this._settings = _settings;
        this._dialog = _dialog;
        this.available_configs = [];
    }
    get catering_allowed() {
        var _a;
        return ((_a = this.form.controls.visitor_type) === null || _a === void 0 ? void 0 : _a.value) === 'client';
    }
    ngOnInit() {
        if (!this.form) {
            this.timeout('init', this.ngOnInit);
            return;
        }
        this.setBuildingOptions();
    }
    setBuildingOptions() {
        this.available_configs = this._org.available_room_configs;
    }
    /** Display string for the recurrence value of the booking */
    get recurrence() {
        return 'No Recurrence';
    }
    /** Display string for the catering value of the booking */
    get catering() {
        return 'No Catering';
    }
    get configuration() {
        if (this.form &&
            this.form.controls.configuration &&
            this.form.controls.configuration.value) {
            return this.available_configs.find((f) => f.id === this.form.controls.configuration.value);
        }
        return null;
    }
    /** Whether notes and description should use the HTML editor */
    get use_html() {
        return this._settings.get('app.booking.html_body') || false;
    }
    /** List of available types for bookings */
    get booking_types() {
        return this._settings.get('app.booking.booking_types') || [];
    }
    /** Display string for the list of active spaces */
    get spaces() {
        return ((this.form.controls.space_list.value || []).map((space) => space.name).join(', ') ||
            'No Spaces selected');
    }
    /**
     * Open modal to change the space details for the booking
     */
    openSpacesModal() {
        const ref = this._dialog.open(_spaces_src_lib_space_select_modal_space_select_modal_component__WEBPACK_IMPORTED_MODULE_6__["SpaceSelectModalComponent"], {
            width: 'auto',
            height: 'auto',
            data: {
                spaces: this.form.controls.space_list.value,
                date: this.form.controls.date.value,
                duration: this.form.controls.duration.value,
            },
        });
        this.subscription('change_spaces', ref.componentInstance.event.subscribe((event) => {
            if (event.reason === 'done') {
                this.form.controls.space_list.setValue([...ref.componentInstance.spaces]);
                this.unsub('change_spaces');
            }
        }));
    }
    /**
     * Open modal to change the recurrence details for the booking
     */
    openRecurrenceModal() {
        console.log('Open Recurrence Modal');
    }
    /**
     * Open modal to change the recurrence details for the booking
     */
    openCateringModal() {
        console.log('Open Catering Modal');
    }
    /**
     * Open modal to change the recurrence details for the booking
     */
    openNewUserModal() {
        const ref = this._dialog.open(_users_src_lib_new_user_modal_new_user_modal_component__WEBPACK_IMPORTED_MODULE_5__["NewUserModalComponent"], {
            width: 'auto',
            height: 'auto',
        });
        this.subscription('new_user', ref.componentInstance.event.subscribe((event) => {
            if (event.reason === 'done') {
                const attendees = this.form.controls.attendees.value || [];
                attendees.push(event.metadata);
                this.form.controls.attendees.setValue(Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["unique"])(attendees, 'email'));
                ref.close();
                this.unsub('new_user');
            }
        }));
    }
}
BookingFormComponent.ɵfac = function BookingFormComponent_Factory(t) { return new (t || BookingFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_4__["OrganisationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
BookingFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookingFormComponent, selectors: [["a-booking-form"]], inputs: { form: "form" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "booking-form", 3, "formGroup", 4, "ngIf"], [1, "booking-form", 3, "formGroup"], ["class", "field", 4, "ngIf"], [1, "group", "date"], [1, "group", "time"], ["class", "group configuration", 4, "ngIf"], [1, "field"], ["for", "spaces"], ["name", "spaces", 3, "placeholder", "onAction"], ["for", "title"], ["appearance", "outline"], ["matInput", "", "name", "title", "placeholder", "Meeting Title", "formControlName", "title"], [4, "ngIf"], ["for", "date"], ["name", "date", "formControlName", "date"], ["for", "recurrence"], ["name", "recurrence", 3, "placeholder", "onAction"], ["for", "start-time"], ["name", "start-time", "formControlName", "date"], ["for", "duration"], ["name", "duration", "formControlName", "duration"], ["for", "organiser"], ["name", "organiser", "formControlName", "organizer"], ["for", "attendees"], ["name", "attendees", "formControlName", "attendees", 3, "newUser"], ["for", "booking-type"], ["name", "booking-type", "formControlName", "type"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "group", "configuration"], ["appearance", "outline", 3, "title"], ["name", "configuration", "formControlName", "configuration"], [1, "field", "info"], ["name", "resources", 3, "placeholder", "onAction"], ["for", "body"], ["name", "body", "appearance", "outline", 4, "ngIf", "ngIfElse"], ["html_editor", ""], ["name", "body", "appearance", "outline"], ["matInput", "", "name", "description", "placeholder", "Meeting Description", "formControlName", "body"], ["formControlName", "body"]], template: function BookingFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BookingFormComponent_div_0_Template, 15, 13, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form);
    } }, styles: ["label[_ngcontent-%COMP%] {\n  min-width: 100%;\n  margin-top: 1.25em;\n  margin-right: 1em;\n  font-weight: bold;\n  font-size: 0.8em;\n  width: 100%;\n  margin-top: 0;\n  margin-bottom: 0.5em;\n}\nlabel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--pending);\n}\nlabel.error[_ngcontent-%COMP%] {\n  color: var(--errpor);\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\nmat-form-field[_ngcontent-%COMP%], a-date-field[_ngcontent-%COMP%], an-action-field[_ngcontent-%COMP%], editor[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 50%;\n}\n@media screen and (max-width: 639px) {\n  mat-form-field[_ngcontent-%COMP%], a-date-field[_ngcontent-%COMP%], an-action-field[_ngcontent-%COMP%], editor[_ngcontent-%COMP%] {\n    min-width: 16em;\n  }\n}\n.group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.group[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  min-width: 18em;\n  flex: 1;\n  margin: 0.5em;\n}\n.group[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n.group[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n@media screen and (max-width: 639px) {\n  .group[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n.group.configuration[_ngcontent-%COMP%]   .field.info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvY29tcG9uZW50cy9zcmMvbGliL2Jvb2tpbmctZm9ybS9ib29raW5nLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FBQUY7QUFFRTtFQUNFLHFCQUFBO0FBQUo7QUFFRTtFQUNFLG9CQUFBO0FBQUo7QUFJQTtFQUNFLGFBQUE7RUFFQSxlQUFBO0FBRkY7QUFNQTs7OztFQUlFLE9BQUE7RUFDQSxjQUFBO0FBSEY7QUFJRTtFQU5GOzs7O0lBT0ksZUFBQTtFQUVGO0FBQ0Y7QUFDQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBRUY7QUFERTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtBQUdKO0FBRkk7RUFDRSxjQUFBO0FBSU47QUFGSTtFQUNFLGVBQUE7QUFJTjtBQUZJO0VBVkY7SUFXSSxTQUFBO0VBS0o7QUFDRjtBQUZJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBSU4iLCJmaWxlIjoibGlicy9jb21wb25lbnRzL3NyYy9saWIvYm9va2luZy1mb3JtL2Jvb2tpbmctZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxLjI1ZW07XG4gIG1hcmdpbi1yaWdodDogMWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAuOGVtO1xuICAvLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzlweCkge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogLjVlbTtcbiAgLy8gfVxuICBzcGFuIHtcbiAgICBjb2xvcjogdmFyKC0tcGVuZGluZyk7XG4gIH1cbiAgJi5lcnJvciB7XG4gICAgY29sb3I6IHZhcigtLWVycnBvcik7XG4gIH1cbn1cblxuLmZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgZmxleC13cmFwOiB3cmFwO1xuICAvLyB9XG59XG5cbm1hdC1mb3JtLWZpZWxkLFxuYS1kYXRlLWZpZWxkLFxuYW4tYWN0aW9uLWZpZWxkLFxuZWRpdG9yIHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiA1MCU7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gICAgbWluLXdpZHRoOiAxNmVtO1xuICB9XG59XG5cbi5ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgPiAqIHtcbiAgICBtaW4td2lkdGg6IDE4ZW07XG4gICAgZmxleDogMTtcbiAgICBtYXJnaW46IC41ZW07XG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cbiAgJi5jb25maWd1cmF0aW9uIHtcbiAgICAuZmllbGQuaW5mbyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookingFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-booking-form',
                templateUrl: './booking-form.component.html',
                styleUrls: ['./booking-form.component.scss'],
            }]
    }], function () { return [{ type: _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_4__["OrganisationService"] }, { type: _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, { form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "wnEE":
/*!********************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/users/src/lib/users.module.ts ***!
  \********************************************************************************************/
/*! exports provided: SharedUsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedUsersModule", function() { return SharedUsersModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ "+Tre");
/* harmony import */ var _user_interfaces_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @user-interfaces/components */ "Rc+I");
/* harmony import */ var _new_user_modal_new_user_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-user-modal/new-user-modal.component */ "MIKl");
/* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-form/user-form.component */ "4si7");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/src/lib/icon/icon.component */ "ukpX");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "csyo");














class SharedUsersModule {
}
SharedUsersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedUsersModule });
SharedUsersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedUsersModule_Factory(t) { return new (t || SharedUsersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _user_interfaces_components__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedUsersModule, { declarations: [_new_user_modal_new_user_modal_component__WEBPACK_IMPORTED_MODULE_6__["NewUserModalComponent"], _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__["UserFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
        _user_interfaces_components__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"]], exports: [_new_user_modal_new_user_modal_component__WEBPACK_IMPORTED_MODULE_6__["NewUserModalComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedUsersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_new_user_modal_new_user_modal_component__WEBPACK_IMPORTED_MODULE_6__["NewUserModalComponent"], _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__["UserFormComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                    _user_interfaces_components__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                ],
                exports: [_new_user_modal_new_user_modal_component__WEBPACK_IMPORTED_MODULE_6__["NewUserModalComponent"]],
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_new_user_modal_new_user_modal_component__WEBPACK_IMPORTED_MODULE_6__["NewUserModalComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogClose"], _components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_9__["IconComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__["UserFormComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogActions"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"]], []);


/***/ }),

/***/ "xoAb":
/*!******************************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/components.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: ActionFieldComponent, ActionIconComponent, BindingDirective, BookingFormComponent, CONFIRM_METADATA, ConfirmModalComponent, CounterComponent, DateFieldComponent, DurationFieldComponent, IconComponent, LoginComponent, PopoutMenuComponent, TimeFieldComponent, UnauthorisedComponent, UserAvatarComponent, UserListFieldComponent, UserSearchFieldComponent, MAP_FEATURE_DATA, InteractiveMapComponent, MapPinComponent, MapRadiusComponent, ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "Jb3d");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "ulve");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "gcUQ");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ "S17y");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "csyo");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/clipboard */ "HHFY");
/* harmony import */ var _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @acaprojects/ngx-pipes */ "81Qw");
/* harmony import */ var _binding_binding_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./binding/binding.directive */ "gV1Q");
/* harmony import */ var _action_icon_action_icon_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./action-icon/action-icon.component */ "ZnXB");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./icon/icon.component */ "ukpX");
/* harmony import */ var _popout_menu_popout_menu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./popout-menu/popout-menu.component */ "ILxS");
/* harmony import */ var _user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user-avatar/user-avatar.component */ "FGQ9");
/* harmony import */ var _action_field_action_field_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./action-field/action-field.component */ "7u5P");
/* harmony import */ var _date_field_date_field_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./date-field/date-field.component */ "kD+q");
/* harmony import */ var _duration_field_duration_field_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./duration-field/duration-field.component */ "gpkD");
/* harmony import */ var _time_field_time_field_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./time-field/time-field.component */ "NhjZ");
/* harmony import */ var _user_list_field_user_list_field_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user-list-field/user-list-field.component */ "mnsz");
/* harmony import */ var _user_search_field_user_search_field_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user-search-field/user-search-field.component */ "lfZe");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _confirm_modal_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./confirm-modal.component */ "mU/8");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./counter/counter.component */ "nMbc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _interactive_map_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./interactive-map.component */ "lYMz");
/* harmony import */ var _map_pin_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./map-pin.component */ "Pw6A");
/* harmony import */ var _map_radius_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./map-radius.component */ "kOXA");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/core */ "mFH5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionFieldComponent", function() { return _action_field_action_field_component__WEBPACK_IMPORTED_MODULE_18__["ActionFieldComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionIconComponent", function() { return _action_icon_action_icon_component__WEBPACK_IMPORTED_MODULE_14__["ActionIconComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BindingDirective", function() { return _binding_binding_directive__WEBPACK_IMPORTED_MODULE_13__["BindingDirective"]; });

/* harmony import */ var _booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./booking-form/booking-form.component */ "wh5e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BookingFormComponent", function() { return _booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_32__["BookingFormComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONFIRM_METADATA", function() { return _confirm_modal_component__WEBPACK_IMPORTED_MODULE_25__["CONFIRM_METADATA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function() { return _confirm_modal_component__WEBPACK_IMPORTED_MODULE_25__["ConfirmModalComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return _counter_counter_component__WEBPACK_IMPORTED_MODULE_26__["CounterComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateFieldComponent", function() { return _date_field_date_field_component__WEBPACK_IMPORTED_MODULE_19__["DateFieldComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DurationFieldComponent", function() { return _duration_field_duration_field_component__WEBPACK_IMPORTED_MODULE_20__["DurationFieldComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return _icon_icon_component__WEBPACK_IMPORTED_MODULE_15__["IconComponent"]; });

/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./login/login.component */ "jcOF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_login_component__WEBPACK_IMPORTED_MODULE_33__["LoginComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoutMenuComponent", function() { return _popout_menu_popout_menu_component__WEBPACK_IMPORTED_MODULE_16__["PopoutMenuComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeFieldComponent", function() { return _time_field_time_field_component__WEBPACK_IMPORTED_MODULE_21__["TimeFieldComponent"]; });

/* harmony import */ var _unauthorised_unauthorised_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./unauthorised/unauthorised.component */ "8Ss5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnauthorisedComponent", function() { return _unauthorised_unauthorised_component__WEBPACK_IMPORTED_MODULE_34__["UnauthorisedComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserAvatarComponent", function() { return _user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_17__["UserAvatarComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserListFieldComponent", function() { return _user_list_field_user_list_field_component__WEBPACK_IMPORTED_MODULE_22__["UserListFieldComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserSearchFieldComponent", function() { return _user_search_field_user_search_field_component__WEBPACK_IMPORTED_MODULE_23__["UserSearchFieldComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAP_FEATURE_DATA", function() { return _interactive_map_component__WEBPACK_IMPORTED_MODULE_28__["MAP_FEATURE_DATA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InteractiveMapComponent", function() { return _interactive_map_component__WEBPACK_IMPORTED_MODULE_28__["InteractiveMapComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapPinComponent", function() { return _map_pin_component__WEBPACK_IMPORTED_MODULE_29__["MapPinComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapRadiusComponent", function() { return _map_radius_component__WEBPACK_IMPORTED_MODULE_30__["MapRadiusComponent"]; });
































































const MAT_MODULES = [
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_11__["ClipboardModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"]
];
const COMPONENTS = [
    _action_icon_action_icon_component__WEBPACK_IMPORTED_MODULE_14__["ActionIconComponent"],
    _icon_icon_component__WEBPACK_IMPORTED_MODULE_15__["IconComponent"],
    _popout_menu_popout_menu_component__WEBPACK_IMPORTED_MODULE_16__["PopoutMenuComponent"],
    _user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_17__["UserAvatarComponent"],
    _action_field_action_field_component__WEBPACK_IMPORTED_MODULE_18__["ActionFieldComponent"],
    _date_field_date_field_component__WEBPACK_IMPORTED_MODULE_19__["DateFieldComponent"],
    _duration_field_duration_field_component__WEBPACK_IMPORTED_MODULE_20__["DurationFieldComponent"],
    _counter_counter_component__WEBPACK_IMPORTED_MODULE_26__["CounterComponent"],
    _time_field_time_field_component__WEBPACK_IMPORTED_MODULE_21__["TimeFieldComponent"],
    _user_list_field_user_list_field_component__WEBPACK_IMPORTED_MODULE_22__["UserListFieldComponent"],
    _user_search_field_user_search_field_component__WEBPACK_IMPORTED_MODULE_23__["UserSearchFieldComponent"],
    _confirm_modal_component__WEBPACK_IMPORTED_MODULE_25__["ConfirmModalComponent"],
    _interactive_map_component__WEBPACK_IMPORTED_MODULE_28__["InteractiveMapComponent"],
    _map_pin_component__WEBPACK_IMPORTED_MODULE_29__["MapPinComponent"],
    _map_radius_component__WEBPACK_IMPORTED_MODULE_30__["MapRadiusComponent"],
];
const DIRECTIVES = [_binding_binding_directive__WEBPACK_IMPORTED_MODULE_13__["BindingDirective"]];
class ComponentsModule {
}
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_27__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_12__["APipesModule"],
            ...MAT_MODULES,
        ], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_11__["ClipboardModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_12__["APipesModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_action_icon_action_icon_component__WEBPACK_IMPORTED_MODULE_14__["ActionIconComponent"],
        _icon_icon_component__WEBPACK_IMPORTED_MODULE_15__["IconComponent"],
        _popout_menu_popout_menu_component__WEBPACK_IMPORTED_MODULE_16__["PopoutMenuComponent"],
        _user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_17__["UserAvatarComponent"],
        _action_field_action_field_component__WEBPACK_IMPORTED_MODULE_18__["ActionFieldComponent"],
        _date_field_date_field_component__WEBPACK_IMPORTED_MODULE_19__["DateFieldComponent"],
        _duration_field_duration_field_component__WEBPACK_IMPORTED_MODULE_20__["DurationFieldComponent"],
        _counter_counter_component__WEBPACK_IMPORTED_MODULE_26__["CounterComponent"],
        _time_field_time_field_component__WEBPACK_IMPORTED_MODULE_21__["TimeFieldComponent"],
        _user_list_field_user_list_field_component__WEBPACK_IMPORTED_MODULE_22__["UserListFieldComponent"],
        _user_search_field_user_search_field_component__WEBPACK_IMPORTED_MODULE_23__["UserSearchFieldComponent"],
        _confirm_modal_component__WEBPACK_IMPORTED_MODULE_25__["ConfirmModalComponent"],
        _interactive_map_component__WEBPACK_IMPORTED_MODULE_28__["InteractiveMapComponent"],
        _map_pin_component__WEBPACK_IMPORTED_MODULE_29__["MapPinComponent"],
        _map_radius_component__WEBPACK_IMPORTED_MODULE_30__["MapRadiusComponent"], _binding_binding_directive__WEBPACK_IMPORTED_MODULE_13__["BindingDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_27__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_12__["APipesModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_11__["ClipboardModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"]], exports: [_action_icon_action_icon_component__WEBPACK_IMPORTED_MODULE_14__["ActionIconComponent"],
        _icon_icon_component__WEBPACK_IMPORTED_MODULE_15__["IconComponent"],
        _popout_menu_popout_menu_component__WEBPACK_IMPORTED_MODULE_16__["PopoutMenuComponent"],
        _user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_17__["UserAvatarComponent"],
        _action_field_action_field_component__WEBPACK_IMPORTED_MODULE_18__["ActionFieldComponent"],
        _date_field_date_field_component__WEBPACK_IMPORTED_MODULE_19__["DateFieldComponent"],
        _duration_field_duration_field_component__WEBPACK_IMPORTED_MODULE_20__["DurationFieldComponent"],
        _counter_counter_component__WEBPACK_IMPORTED_MODULE_26__["CounterComponent"],
        _time_field_time_field_component__WEBPACK_IMPORTED_MODULE_21__["TimeFieldComponent"],
        _user_list_field_user_list_field_component__WEBPACK_IMPORTED_MODULE_22__["UserListFieldComponent"],
        _user_search_field_user_search_field_component__WEBPACK_IMPORTED_MODULE_23__["UserSearchFieldComponent"],
        _confirm_modal_component__WEBPACK_IMPORTED_MODULE_25__["ConfirmModalComponent"],
        _interactive_map_component__WEBPACK_IMPORTED_MODULE_28__["InteractiveMapComponent"],
        _map_pin_component__WEBPACK_IMPORTED_MODULE_29__["MapPinComponent"],
        _map_radius_component__WEBPACK_IMPORTED_MODULE_30__["MapRadiusComponent"], _binding_binding_directive__WEBPACK_IMPORTED_MODULE_13__["BindingDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_11__["ClipboardModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_12__["APipesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [...COMPONENTS, ...DIRECTIVES],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_27__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                    _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_12__["APipesModule"],
                    ...MAT_MODULES,
                ],
                providers: [],
                exports: [...COMPONENTS, ...DIRECTIVES, ...MAT_MODULES, _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_12__["APipesModule"]],
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_action_icon_action_icon_component__WEBPACK_IMPORTED_MODULE_14__["ActionIconComponent"], [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_15__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"]], []);
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_popout_menu_popout_menu_component__WEBPACK_IMPORTED_MODULE_16__["PopoutMenuComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_27__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_15__["IconComponent"]], []);
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_action_field_action_field_component__WEBPACK_IMPORTED_MODULE_18__["ActionFieldComponent"], [_icon_icon_component__WEBPACK_IMPORTED_MODULE_15__["IconComponent"]], [_acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_12__["ɵa"]]);
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_counter_counter_component__WEBPACK_IMPORTED_MODULE_26__["CounterComponent"], [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_15__["IconComponent"]], []);
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_21__["TimeFieldComponent"], [_angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_15__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatOption"]], []);
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_user_list_field_user_list_field_component__WEBPACK_IMPORTED_MODULE_22__["UserListFieldComponent"], [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatPrefix"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_15__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatOption"], _user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_17__["UserAvatarComponent"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChip"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipRemove"]], []);
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_user_search_field_user_search_field_component__WEBPACK_IMPORTED_MODULE_23__["UserSearchFieldComponent"], [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatPrefix"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_15__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatOption"]], []);
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_confirm_modal_component__WEBPACK_IMPORTED_MODULE_25__["ConfirmModalComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgIf"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_15__["IconComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogClose"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"]], []);


/***/ }),

/***/ "xuqh":
/*!******************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/users/src/lib/user.class.ts ***!
  \******************************************************************************************/
/*! exports provided: User, GuestUser, StaffUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestUser", function() { return GuestUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffUser", function() { return StaffUser; });
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.utilities */ "HTl7");


class User extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_0__["BaseDataClass"] {
    constructor(data = {}) {
        var _a;
        super(data);
        this.first_name = data.first_name || data.name || '';
        this.last_name = data.last_name || '';
        this.phone = data.phone || '';
        this.organisation = data.organisation || '';
        this.notes = data.notes || '';
        this.photo = data.photo || '';
        this.organizer = !!data.organizer;
        this.visit_expected = data.visit_expected;
        this.checked_in = data.checked_in;
        this.response_status = data.response_status || '';
        this.groups = (data.groups || []).map((i) => (i || '').toLowerCase());
        this.extension_data = data.extension_data || {};
        this.extension_data.assistance_required =
            data.assistance_required || this.extension_data.assistance_required;
        this.is_external = !this.email.endsWith(_user_utilities__WEBPACK_IMPORTED_MODULE_1__["USER_DOMAIN"]);
        this.assistance_required = !!((_a = this.extension_data) === null || _a === void 0 ? void 0 : _a.assistance_required);
    }
}
class GuestUser extends User {
    constructor(data = {}) {
        super(data);
        this.preferred_beverage = data.preferred_beverage || '';
        this.accepted_terms_conditions = data.accepted_terms_conditions || false;
    }
}
class StaffUser extends User {
    constructor(data = {}) {
        super(data);
        this.card_number = data.card_number || 0;
        this.staff_id = data.staff_id || '';
        this.location = data.location || {};
        this.is_logged_in = !!data.is_logged_in;
    }
}


/***/ }),

/***/ "yEfM":
/*!***********************************************************!*\
  !*** ./src/app/ui/forms/user-form/user-form.component.ts ***!
  \***********************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");







function UserFormComponent_div_0_div_2_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserFormComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "First Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserFormComponent_div_0_div_2_mat_error_5_Template, 2, 0, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("error", ctx_r1.form.controls.name.invalid && ctx_r1.form.controls.name.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.controls.name.invalid);
} }
function UserFormComponent_div_0_div_3_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserFormComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Last Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserFormComponent_div_0_div_3_mat_error_5_Template, 2, 0, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("error", ctx_r2.form.controls.name.invalid && ctx_r2.form.controls.name.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.form.controls.name.invalid);
} }
function UserFormComponent_div_0_div_4_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A valid email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserFormComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserFormComponent_div_0_div_4_mat_error_8_Template, 2, 0, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("error", ctx_r3.form.controls.email.invalid && ctx_r3.form.controls.email.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.form.controls.email.invalid);
} }
function UserFormComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserFormComponent_div_0_div_2_Template, 6, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserFormComponent_div_0_div_3_Template, 6, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserFormComponent_div_0_div_4_Template, 9, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls.email);
} }
class UserFormComponent {
}
UserFormComponent.ɵfac = function UserFormComponent_Factory(t) { return new (t || UserFormComponent)(); };
UserFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserFormComponent, selectors: [["user-form"]], inputs: { form: "form" }, decls: 1, vars: 1, consts: [["class", "user form", 4, "ngIf"], [1, "user", "form"], [3, "formGroup"], ["class", "field", 4, "ngIf"], [1, "field"], ["for", "first-name"], ["appearance", "outline"], ["matInput", "", "name", "first-name", "placeholder", "First name", "formControlName", "first_name"], [4, "ngIf"], ["for", "system-name"], ["matInput", "", "name", "last-name", "placeholder", "Last name", "formControlName", "last_name"], ["for", "email"], ["matInput", "", "name", "email", "placeholder", "Email Address", "formControlName", "email"]], template: function UserFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserFormComponent_div_0_Template, 5, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"]], styles: ["label[_ngcontent-%COMP%] {\n  min-width: 100%;\n  margin-top: 1.25em;\n  margin-right: 1em;\n  font-weight: bold;\n  font-size: 0.8em;\n  width: 100%;\n  margin-top: 0;\n  margin-bottom: 0.5em;\n}\nlabel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--pending);\n}\nlabel.error[_ngcontent-%COMP%] {\n  color: var(--error);\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvdmlzaXRvci1raW9zay9zcmMvYXBwL3VpL2Zvcm1zL3VzZXItZm9ybS91c2VyLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FBQUY7QUFFRTtFQUNFLHFCQUFBO0FBQUo7QUFFRTtFQUNFLG1CQUFBO0FBQUo7QUFJQTtFQUNFLGFBQUE7RUFFQSxlQUFBO0FBRkY7QUFNQTtFQUNFLFdBQUE7QUFIRiIsImZpbGUiOiJhcHBzL3Zpc2l0b3Ita2lvc2svc3JjL2FwcC91aS9mb3Jtcy91c2VyLWZvcm0vdXNlci1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEuMjVlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IC44ZW07XG4gIC8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAuNWVtO1xuICAvLyB9XG4gIHNwYW4ge1xuICAgIGNvbG9yOiB2YXIoLS1wZW5kaW5nKVxuICB9XG4gICYuZXJyb3Ige1xuICAgIGNvbG9yOiB2YXIoLS1lcnJvcilcbiAgfVxufVxuXG4uZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICAvLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzlweCkge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIC8vIH1cbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'user-form',
                templateUrl: './user-form.component.html',
                styleUrls: ['./user-form.component.scss']
            }]
    }], null, { form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "yHhA":
/*!**********************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/users/src/lib/location.class.ts ***!
  \**********************************************************************************************/
/*! exports provided: MapLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapLocation", function() { return MapLocation; });
class MapLocation {
    constructor(_data) {
        this.type = _data.type || _data.location || 'other';
        this.position = _data.position ||
            _data.map_id || {
            x: _data.x / _data.map_width,
            y: _data.y / _data.map_height,
        };
        this.variance = _data.variance || 0;
        this.last_seen =
            _data.last_seen || Math.floor(new Date().valueOf() / 1000);
        this.level = _data.level;
        this.building = _data.building;
        this.at_location = !!_data.at_location;
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "ztAP":
/*!**********************************************************************************************!*\
  !*** /home/runner/work/user-interfaces/user-interfaces/libs/common/src/lib/notifications.ts ***!
  \**********************************************************************************************/
/*! exports provided: setNotifyOutlet, notify, notifySuccess, notifyError, notifyWarn, notifyInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNotifyOutlet", function() { return setNotifyOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notify", function() { return notify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifySuccess", function() { return notifySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifyError", function() { return notifyError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifyWarn", function() { return notifyWarn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifyInfo", function() { return notifyInfo; });
let _service;
function setNotifyOutlet(snackbar) {
    _service = snackbar;
}
/**
 * Create notification popup
 * @param type CSS Class to add to the notification
 * @param message Message to display on the notificaiton
 * @param action Display text for the callback action
 * @param on_action Callback of action on the notification
 * @param icon Icon to render to the left of the notification message
 */
function notify(type, message, action = 'OK', on_action, icon = {
    type: 'icon',
    class: 'material-icons',
    content: 'info',
}) {
    if (!_service) {
        throw new Error("Snackbar service hasn't been initialised");
    }
    const snackbar_ref = _service.open(message, action, {
        panelClass: [type],
        duration: 5000,
    });
    if (action) {
        on_action = on_action || (() => snackbar_ref.dismiss());
        snackbar_ref.onAction().subscribe(() => on_action());
    }
}
/**
 * Create success notification popup
 * @param msg Message to display on the notificaiton
 * @param action Display text for the callback action
 * @param on_action Callback of action on the notification
 */
function notifySuccess(msg, action, on_action) {
    const icon = {
        type: 'icon',
        class: 'material-icons',
        content: 'done',
    };
    console.debug(msg);
    notify('success', msg, action, on_action, icon);
}
/**
 * Create error notification popup
 * @param msg Message to display on the notificaiton
 * @param action Display text for the callback action
 * @param on_action Callback of action on the notification
 */
function notifyError(msg, action, on_action) {
    const icon = {
        type: 'icon',
        class: 'material-icons',
        content: 'error',
    };
    console.error(msg);
    notify('error', msg, action, on_action, icon);
}
/**
 * Create warning notification popup
 * @param msg Message to display on the notificaiton
 * @param action Display text for the callback action
 * @param on_action Callback of action on the notification
 */
function notifyWarn(msg, action, on_action) {
    const icon = {
        type: 'icon',
        class: 'material-icons',
        content: 'warning',
    };
    console.warn(msg);
    notify('warn', msg, action, on_action, icon);
}
/**
 * Create info notification popup
 * @param msg Message to display on the notificaiton
 * @param action Display text for the callback action
 * @param on_action Callback of action on the notification
 */
function notifyInfo(msg, action, on_action) {
    console.info(msg);
    notify('info', msg, action, on_action);
}


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map