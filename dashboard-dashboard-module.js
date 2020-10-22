(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "6/Ak":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/dashboard-contacts.component.ts ***!
  \***********************************************************/
/*! exports provided: DashboardContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardContactsComponent", function() { return DashboardContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _dashboard_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-state.service */ "woo0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "Jb3d");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _libs_components_src_lib_user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/user-avatar/user-avatar.component */ "FGQ9");











const _c0 = ["input"];
const _c1 = function () { return { class: "material-icons", content: "close" }; };
function DashboardContactsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a-user-avatar", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Level 12 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardContactsComponent_div_3_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const user_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.removeUser(user_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", user_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
} }
function DashboardContactsComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", !ctx_r3.search_str ? "Type to search for users..." : "No matches for \"" + ctx_r3.search_str + "\"", " ");
} }
function DashboardContactsComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardContactsComponent_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const user_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.addUser(user_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a-user-avatar", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", user_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r8.email);
} }
const _c2 = function () { return { class: "material-icons", content: "person_add" }; };
class DashboardContactsComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["BaseClass"] {
    constructor(_state) {
        super();
        this._state = _state;
        this.contacts = this._state.contacts;
        this.search_results = this._state.contacts_search;
        this.addUser = (u) => this._state.addContact(u);
        this.removeUser = (u) => this._state.removeContact(u);
        this.updateSearch = (s) => this._state.updateContactSearch(s);
        this.search_str = '';
    }
    ngOnInit() {
        this._state.updateContacts();
    }
    focusInput() {
        this.timeout('focus', () => {
            if (this._input_el) {
                this._input_el.nativeElement.focus();
            }
        });
    }
    clearInput() {
        this.search_str = '';
        this._state.clearContactSearch();
    }
}
DashboardContactsComponent.ɵfac = function DashboardContactsComponent_Factory(t) { return new (t || DashboardContactsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dashboard_state_service__WEBPACK_IMPORTED_MODULE_2__["DashboardStateService"])); };
DashboardContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardContactsComponent, selectors: [["dashboard-contacts"]], viewQuery: function DashboardContactsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._input_el = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 17, consts: [[1, "m-0", "mb-2", "font-medium", "text-xl"], ["name", "contact-list", 1, "bg-gray-400", "rounded-lg", "p-2", "pl-0", "space-y-2", "flex", "flex-wrap"], ["name", "contact", "class", "bg-white rounded-lg flex-1 flex flex-col items-center p-2 relative", 4, "ngFor", "ngForOf"], ["name", "contact", "mat-button", "", 1, "rounded-lg", "flex-1", "w-full", 3, "matMenuTriggerFor", "menuOpened", "menuClosed"], [1, "flex", "flex-col", "items-center", "p-4", "text-black", "w-full"], [1, "text-2xl", 3, "icon"], [1, "w-full", "leading-tight", "whitespace-normal"], ["xPosition", "before"], ["menu", "matMenu"], ["mat-menu-item", "", 1, "p-0", 3, "click"], ["placeholder", "Search for user...", 1, "w-full", "p-2", "text-base", 3, "ngModel", "ngModelChange"], ["input", ""], ["mat-menu-item", "", 4, "ngIf"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["name", "contact", 1, "bg-white", "rounded-lg", "flex-1", "flex", "flex-col", "items-center", "p-2", "relative"], [1, "text-2xl", "mb-2", 3, "user"], ["name", "contact-name", 1, "text-sm", "mb-2"], ["name", "location", 1, "flex", "items-center", "text-sm"], ["name", "dot", 1, "mr-2"], ["mat-icon-button", "", "name", "close", 3, "click"], [3, "icon"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "leading-tight"], [1, "text-xl", "mr-2", 3, "user"], [1, "flex-1"], [1, "text-xs", "text-dark-fade"]], template: function DashboardContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DashboardContactsComponent_div_3_Template, 9, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("menuOpened", function DashboardContactsComponent_Template_button_menuOpened_5_listener() { return ctx.focusInput(); })("menuClosed", function DashboardContactsComponent_Template_button_menuClosed_5_listener() { return ctx.clearInput(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Click to add a person to contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-menu", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardContactsComponent_Template_div_click_12_listener($event) { $event.stopPropagation(); return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardContactsComponent_Template_input_ngModelChange_13_listener($event) { return ctx.search_str = $event; })("ngModelChange", function DashboardContactsComponent_Template_input_ngModelChange_13_listener() { return ctx.updateSearch(ctx.search_str); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DashboardContactsComponent_button_15_Template, 2, 1, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DashboardContactsComponent_button_17_Template, 8, 3, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, ctx.contacts));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search_str);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 8, ctx.search_results).length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](18, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 14, ctx.search_results), 0, 8));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _libs_components_src_lib_user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_8__["UserAvatarComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"]], styles: ["[_nghost-%COMP%] {\n                padding: 1em;\n                min-width: 16rem;\n            }\n\n            [name='contact-list'][_ngcontent-%COMP%] {\n                padding: 0 0.5rem 0.5rem 0;\n            }\n\n            [name='contact'][_ngcontent-%COMP%] {\n                min-width: 8rem;\n                width: 8rem;\n                margin-left: 0.5rem;\n                margin-top: 0.5rem;\n            }\n\n            [name='contact-name'][_ngcontent-%COMP%] {\n                font-weight: 400;\n            }\n\n            [name='dot'][_ngcontent-%COMP%] {\n                height: 8px;\n                width: 8px;\n                border-radius: 8px;\n                background-color: #22992e;\n            }\n\n            button[name='close'][_ngcontent-%COMP%] {\n                position: absolute;\n                display: none;\n                top: .25rem;\n                right: .25rem;\n            }\n\n            [name='contact'][_ngcontent-%COMP%]:hover   button[name='close'][_ngcontent-%COMP%] {\n                display: initial;\n            }\n\n            button[name='contact'][_ngcontent-%COMP%] {\n                background-color: #f0f0f0;\n                border: none;\n                min-width: calc(100% - 0.5rem) !important;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardContactsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dashboard-contacts',
                template: `
        <h3 class="m-0 mb-2 font-medium text-xl">Contacts</h3>
        <div name="contact-list" class="bg-gray-400 rounded-lg p-2 pl-0 space-y-2 flex flex-wrap">
            <div
                name="contact"
                *ngFor="let user of contacts | async"
                class="bg-white rounded-lg flex-1 flex flex-col items-center p-2 relative"
            >
                <a-user-avatar class="text-2xl mb-2" [user]="user"></a-user-avatar>
                <div name="contact-name" class="text-sm mb-2">{{ user.name }}</div>
                <div name="location" class="flex items-center text-sm">
                    <div name="dot" class="mr-2"></div>
                    Level 12
                </div>
                <button mat-icon-button name="close" (click)="removeUser(user)">
                    <app-icon
                        [icon]="{ class: 'material-icons', content: 'close' }"
                    ></app-icon>
                </button>
            </div>
            <button
                name="contact"
                mat-button
                class="rounded-lg flex-1 w-full"
                [matMenuTriggerFor]="menu"
                (menuOpened)="focusInput()"
                (menuClosed)="clearInput()"
            >
                <div class="flex flex-col items-center p-4 text-black w-full">
                    <app-icon
                        class="text-2xl"
                        [icon]="{ class: 'material-icons', content: 'person_add' }"
                    ></app-icon>
                    <span class="w-full leading-tight whitespace-normal"
                        >Click to add a person to contacts</span
                    >
                </div>
            </button>
        </div>
        <mat-menu #menu="matMenu" xPosition="before">
            <div
                mat-menu-item
                class="p-0"
                (click)="$event.stopPropagation(); $event.preventDefault()"
            >
                <input
                    #input
                    class="w-full p-2 text-base"
                    [(ngModel)]="search_str"
                    (ngModelChange)="updateSearch(search_str)"
                    placeholder="Search for user..."
                />
            </div>
            <button mat-menu-item *ngIf="!(search_results | async).length">
                {{ !search_str ? 'Type to search for users...' : 'No matches for "' + search_str + '"'}}
            </button>
            <button mat-menu-item *ngFor="let user of search_results | async | slice:0:8" (click)="addUser(user)">
                <div class="flex items-center leading-tight">
                    <a-user-avatar class="text-xl mr-2" [user]="user"></a-user-avatar>
                    <div class="flex-1">
                        <div>{{ user.name }}</div>
                        <div class="text-xs text-dark-fade">{{ user.email }}</div>
                    </div>
                </div>
            </button>
        </mat-menu>
    `,
                styles: [
                    `
            :host {
                padding: 1em;
                min-width: 16rem;
            }

            [name='contact-list'] {
                padding: 0 0.5rem 0.5rem 0;
            }

            [name='contact'] {
                min-width: 8rem;
                width: 8rem;
                margin-left: 0.5rem;
                margin-top: 0.5rem;
            }

            [name='contact-name'] {
                font-weight: 400;
            }

            [name='dot'] {
                height: 8px;
                width: 8px;
                border-radius: 8px;
                background-color: #22992e;
            }

            button[name='close'] {
                position: absolute;
                display: none;
                top: .25rem;
                right: .25rem;
            }

            [name='contact']:hover button[name='close'] {
                display: initial;
            }

            button[name='contact'] {
                background-color: #f0f0f0;
                border: none;
                min-width: calc(100% - 0.5rem) !important;
            }
        `,
                ],
            }]
    }], function () { return [{ type: _dashboard_state_service__WEBPACK_IMPORTED_MODULE_2__["DashboardStateService"] }]; }, { _input_el: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['input']
        }] }); })();


/***/ }),

/***/ "8o0W":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/dashboard-upcoming.component.ts ***!
  \***********************************************************/
/*! exports provided: DashboardUpcomingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardUpcomingComponent", function() { return DashboardUpcomingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "OZ4H");
/* harmony import */ var _overlays_view_room_modal_view_room_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../overlays/view-room-modal/view-room-modal.component */ "ceWj");
/* harmony import */ var _dashboard_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-state.service */ "woo0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "Y2X+");
/* harmony import */ var _libs_components_src_lib_user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/user-avatar/user-avatar.component */ "FGQ9");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "PBFl");












function DashboardUpcomingComponent_div_2_a_user_avatar_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a-user-avatar", 15);
} if (rf & 2) {
    const guest_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", guest_r5);
} }
function DashboardUpcomingComponent_div_2_a_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Join Call");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", event_r2.meeting_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return { class: "material-icons", content: "room" }; };
const _c1 = function () { return { class: "material-icons", content: "group" }; };
function DashboardUpcomingComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardUpcomingComponent_div_2_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const event_r2 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return event_r2.space ? ctx_r7.locateSpace(event_r2.space) : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DashboardUpcomingComponent_div_2_a_user_avatar_15_Template, 1, 1, "a-user-avatar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DashboardUpcomingComponent_div_2_a_16_Template, 2, 1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r2.time_period);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("underline", !!event_r2.space);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", event_r2.space ? "Locate Space" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", (event_r2.space == null ? null : event_r2.space.display_name) || (event_r2.space == null ? null : event_r2.space.name) || "<No Location>", " ", (event_r2.space == null ? null : event_r2.space.level == null ? null : event_r2.space.level.display_name) || (event_r2.space == null ? null : event_r2.space.level == null ? null : event_r2.space.level.name) ? ", " + event_r2.space.level.display_name || false : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", event_r2.guests.length, " Guest", event_r2.guests.length === 1 ? "" : "s", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", event_r2.guests);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", event_r2.meeting_link);
} }
function DashboardUpcomingComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No upcoming events for today ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DashboardUpcomingComponent {
    constructor(_state, _dialog) {
        this._state = _state;
        this._dialog = _dialog;
        this.upcoming_events = this._state.upcoming_events;
    }
    ngOnInit() {
        this._state.pollUpcomingEvents();
    }
    ngOnDestroy() {
        this._state.stopPollingUpcomingEvents();
    }
    locateSpace(space) {
        this._dialog.open(_overlays_view_room_modal_view_room_modal_component__WEBPACK_IMPORTED_MODULE_2__["ViewRoomModalComponent"], { data: { space } });
    }
}
DashboardUpcomingComponent.ɵfac = function DashboardUpcomingComponent_Factory(t) { return new (t || DashboardUpcomingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dashboard_state_service__WEBPACK_IMPORTED_MODULE_3__["DashboardStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
DashboardUpcomingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardUpcomingComponent, selectors: [["dashboard-upcoming"]], decls: 7, vars: 10, consts: [[1, "m-0", "mb-4", "font-medium", "text-xl"], ["name", "event", "class", "flex bg-white rounded-lg relative overflow-hidden mb-4", 4, "ngFor", "ngForOf"], ["class", "text-dark-fade text-center w-full", 4, "ngIf"], ["name", "event", 1, "flex", "bg-white", "rounded-lg", "relative", "overflow-hidden", "mb-4"], ["name", "status", 1, "absolute", "rounded-lg"], ["name", "details", 1, "flex-1", "mr-2"], ["name", "time", 1, "text-sm", "text-bold", "mb-2"], ["name", "title", 1, "text-sm", "text-bold", "mb-2"], ["name", "space", 1, "text-xs", "flex", "items-center", "mb-2"], [1, "mr-2", 3, "icon"], [1, "text-black", 3, "matTooltip", "click"], ["name", "attendees", 1, "text-xs", "flex", "items-center", "mb-2"], ["name", "guests", 1, "flex", "space-x-2", "text-sm"], [3, "user", 4, "ngFor", "ngForOf"], ["button", "", "mat-button", "", "class", "uppercase h-12", 3, "href", 4, "ngIf"], [3, "user"], ["button", "", "mat-button", "", 1, "uppercase", "h-12", 3, "href"], [1, "text-dark-fade", "text-center", "w-full"]], template: function DashboardUpcomingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Today's Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardUpcomingComponent_div_2_Template, 17, 15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardUpcomingComponent_p_5_Template, 2, 0, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, ctx.upcoming_events), 0, 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 8, ctx.upcoming_events).length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__["IconComponent"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], _libs_components_src_lib_user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_7__["UserAvatarComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n                padding: 1em;\n                min-width: 16rem;\n            }\n\n            [name='time'][_ngcontent-%COMP%] {\n                color: #00529b;\n            }\n\n            [name='event'][_ngcontent-%COMP%] {\n                padding: 1rem 1rem 1rem 2rem;\n            }\n\n            [name='status'][_ngcontent-%COMP%] {\n                top: 1rem;\n                left: -0.8rem;\n                height: 2.5rem;\n                width: 1.6rem;\n                background-color: #00529b;\n            }\n\n            button[_ngcontent-%COMP%] {\n                height: 3em;\n            }\n\n            app-icon[_ngcontent-%COMP%] {\n                margin-left: -0.25rem;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardUpcomingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dashboard-upcoming',
                template: `
        <h3 class="m-0 mb-4 font-medium text-xl">Today's Events</h3>
        <div
            name="event"
            *ngFor="let event of upcoming_events | async | slice: 0:3"
            class="flex bg-white rounded-lg relative overflow-hidden mb-4"
        >
            <div name="status" class="absolute rounded-lg"></div>
            <div name="details" class="flex-1 mr-2">
                <div name="time" class="text-sm text-bold mb-2">{{ event.time_period }}</div>
                <div name="title" class="text-sm text-bold mb-2">{{ event.title }}</div>
                <div name="space" class="text-xs flex items-center mb-2">
                    <app-icon
                        class="mr-2"
                        [icon]="{ class: 'material-icons', content: 'room' }"
                    ></app-icon>
                    <a
                        class="text-black"
                        [class.underline]="!!event.space"
                        [matTooltip]="event.space ? 'Locate Space' : ''"
                        (click)="event.space ? locateSpace(event.space) : ''"
                    >
                        {{
                            event.space?.display_name || event.space?.name || '&lt;No Location&gt;'
                        }}
                        {{
                            event.space?.level?.display_name || event.space?.level?.name
                                ? ', ' + event.space.level.display_name || event.space.level.name
                                : ''
                        }}
                    </a>
                </div>
                <div name="attendees" class="text-xs flex items-center mb-2">
                    <app-icon
                        class="mr-2"
                        [icon]="{ class: 'material-icons', content: 'group' }"
                    ></app-icon>
                    {{ event.guests.length }} Guest{{ event.guests.length === 1 ? '' : 's' }}
                </div>
                <div name="guests" class="flex space-x-2 text-sm">
                    <a-user-avatar
                        *ngFor="let guest of event.guests"
                        [user]="guest"
                    ></a-user-avatar>
                </div>
            </div>
            <a button mat-button *ngIf="event.meeting_link" class="uppercase h-12" [href]="event.meeting_link">Join Call</a>
        </div>
        <p *ngIf="!(upcoming_events | async).length" class="text-dark-fade text-center w-full">
            No upcoming events for today
        </p>
    `,
                styles: [
                    `
            :host {
                padding: 1em;
                min-width: 16rem;
            }

            [name='time'] {
                color: #00529b;
            }

            [name='event'] {
                padding: 1rem 1rem 1rem 2rem;
            }

            [name='status'] {
                top: 1rem;
                left: -0.8rem;
                height: 2.5rem;
                width: 1.6rem;
                background-color: #00529b;
            }

            button {
                height: 3em;
            }

            app-icon {
                margin-left: -0.25rem;
            }
        `,
                ],
            }]
    }], function () { return [{ type: _dashboard_state_service__WEBPACK_IMPORTED_MODULE_3__["DashboardStateService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "w8Fe");
/* harmony import */ var _ui_topbar_header_topbar_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/topbar-header/topbar-header.component */ "e81E");
/* harmony import */ var _dashboard_availability_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-availability.component */ "lStZ");
/* harmony import */ var _dashboard_upcoming_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-upcoming.component */ "8o0W");
/* harmony import */ var _dashboard_contacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-contacts.component */ "6/Ak");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _ui_overlay_menu_overlay_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/overlay-menu/overlay-menu.component */ "d4mj");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");














function DashboardComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tile_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", tile_r1.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", tile_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tile_r1.name);
} }
class DashboardComponent {
    constructor(_settings) {
        this._settings = _settings;
    }
    get tiles() {
        return this._settings.get('app.home.tiles') || [];
    }
    get datetime() {
        return Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["format"])(new Date(), 'EEEE, h:mma');
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["SettingsService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["dashboard"]], decls: 14, vars: 4, consts: [[3, "menu", "menuChange"], [1, "top", "relative", "flex", "flex-col", "justify-center", "text-white", "px-12", "py-4"], [1, "row", "location"], [1, "row", "text-2xl", "text-bold", "uppercase"], [1, "flex", "flex-1", "px-8", "flex-wrap", "overflow-auto"], [1, "flex-1", "min-w-64"], [1, "flex"], ["button", "", "mat-button", "", "class", "tile text-2xl", 3, "routerLink", 4, "ngFor", "ngForOf"], [3, "show", "showChange"], ["button", "", "mat-button", "", 1, "tile", "text-2xl", 3, "routerLink"], [1, "flex", "flex-col", "items-center"], [3, "icon"], [1, "text-lg"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a-topbar-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("menuChange", function DashboardComponent_Template_a_topbar_header_menuChange_1_listener($event) { return ctx.show_menu = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sydney");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "main", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "dashboard-availability", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "dashboard-upcoming", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "dashboard-contacts", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "footer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DashboardComponent_a_12_Template, 5, 3, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a-overlay-menu", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("showChange", function DashboardComponent_Template_a_overlay_menu_showChange_13_listener($event) { return ctx.show_menu = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menu", ctx.show_menu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.datetime);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tiles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.show_menu);
    } }, directives: [_ui_topbar_header_topbar_header_component__WEBPACK_IMPORTED_MODULE_3__["TopbarHeaderComponent"], _dashboard_availability_component__WEBPACK_IMPORTED_MODULE_4__["DashboardAvailabilityComponent"], _dashboard_upcoming_component__WEBPACK_IMPORTED_MODULE_5__["DashboardUpcomingComponent"], _dashboard_contacts_component__WEBPACK_IMPORTED_MODULE_6__["DashboardContactsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ui_overlay_menu_overlay_menu_component__WEBPACK_IMPORTED_MODULE_8__["OverlayMenuComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_11__["IconComponent"]], styles: ["[_nghost-%COMP%] {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            overflow: hidden;\n            display: flex;\n            flex-direction: column;\n        }\n\n        main[_ngcontent-%COMP%] {\n            min-height: 50%;\n        }\n\n        .top[_ngcontent-%COMP%] {\n            background: transparent linear-gradient(89deg, #004a86 0%, #00a1d8 70%, #6eb95c 100%) 0% 0%\n                no-repeat padding-box;\n        }\n\n        a[button].tile[_ngcontent-%COMP%] {\n            flex: 1;\n            border-radius: 0;\n            background-color: #fff;\n            color: rgba(0,0,0,.85);\n            border: none;\n            border-right: 1px solid #ccc;\n        }\n\n        a[button].tile[_ngcontent-%COMP%]:last-child {\n            border: none;\n        }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dashboard',
                template: `
        <header>
            <a-topbar-header [(menu)]="show_menu"></a-topbar-header>
            <div class="top relative flex flex-col justify-center text-white px-12 py-4">
                <div class="row location">Sydney</div>
                <div class="row text-2xl text-bold uppercase">{{ datetime }}</div>
            </div>
        </header>
        <main class="flex flex-1 px-8 flex-wrap overflow-auto">
            <dashboard-availability class="flex-1 min-w-64"></dashboard-availability>
            <dashboard-upcoming class="flex-1 min-w-64"></dashboard-upcoming>
            <dashboard-contacts class="flex-1 min-w-64"></dashboard-contacts>
        </main>
        <footer class="flex">
            <a button mat-button class="tile text-2xl" *ngFor="let tile of tiles" [routerLink]="tile.route">
                <div class="flex flex-col items-center">
                    <app-icon [icon]="tile.icon"></app-icon>
                    <span class="text-lg">{{ tile.name }}</span>
                </div>
            </a>
        </footer>
        <a-overlay-menu [(show)]="show_menu"></a-overlay-menu>
    `,
                styles: [`
        :host {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }

        main {
            min-height: 50%;
        }

        .top {
            background: transparent linear-gradient(89deg, #004a86 0%, #00a1d8 70%, #6eb95c 100%) 0% 0%
                no-repeat padding-box;
        }

        a[button].tile {
            flex: 1;
            border-radius: 0;
            background-color: #fff;
            color: rgba(0,0,0,.85);
            border: none;
            border-right: 1px solid #ccc;
        }

        a[button].tile:last-child {
            border: none;
        }
    `],
            }]
    }], function () { return [{ type: _user_interfaces_common__WEBPACK_IMPORTED_MODULE_1__["SettingsService"] }]; }, null); })();


/***/ }),

/***/ "TDBs":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _ui_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/shared.module */ "R3Ii");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.component */ "QX6l");
/* harmony import */ var _dashboard_availability_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-availability.component */ "lStZ");
/* harmony import */ var _dashboard_upcoming_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-upcoming.component */ "8o0W");
/* harmony import */ var _dashboard_contacts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard-contacts.component */ "6/Ak");











const ROUTES = [{ path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"] }];
class DashboardModule {
}
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ui_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedContentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(ROUTES)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
        _dashboard_availability_component__WEBPACK_IMPORTED_MODULE_6__["DashboardAvailabilityComponent"],
        _dashboard_upcoming_component__WEBPACK_IMPORTED_MODULE_7__["DashboardUpcomingComponent"],
        _dashboard_contacts_component__WEBPACK_IMPORTED_MODULE_8__["DashboardContactsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ui_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedContentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                    _dashboard_availability_component__WEBPACK_IMPORTED_MODULE_6__["DashboardAvailabilityComponent"],
                    _dashboard_upcoming_component__WEBPACK_IMPORTED_MODULE_7__["DashboardUpcomingComponent"],
                    _dashboard_contacts_component__WEBPACK_IMPORTED_MODULE_8__["DashboardContactsComponent"]
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ui_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedContentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(ROUTES)],
            }]
    }], null, null); })();


/***/ }),

/***/ "lStZ":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/dashboard-availability.component.ts ***!
  \***************************************************************/
/*! exports provided: DashboardAvailabilityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardAvailabilityComponent", function() { return DashboardAvailabilityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _dashboard_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-state.service */ "woo0");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "sEIs");









const _c0 = function () { return ["/explore"]; };
const _c1 = function (a0) { return { level: a0 }; };
function DashboardAvailabilityComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lvl_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c1, lvl_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", lvl_r3.display_name || lvl_r3.name, " ");
} }
const _c2 = function (a0) { return { space: a0 }; };
function DashboardAvailabilityComponent_a_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const space_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c2, space_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", space_r4.display_name || space_r4.name, " ");
} }
function DashboardAvailabilityComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No free spaces");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c3 = function () { return { class: "material-icons", content: "crop_free" }; };
const _c4 = function () { return { class: "material-icons", content: "av_timer" }; };
class DashboardAvailabilityComponent {
    constructor(_state) {
        this._state = _state;
        this.space_list = this._state.free_spaces;
        this.levels_free = this._state.level_occupancy;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._state.pollFreeSpaces();
        });
    }
    ngOnDestroy() {
        this._state.stopPollingFreeSpaces();
    }
}
DashboardAvailabilityComponent.ɵfac = function DashboardAvailabilityComponent_Factory(t) { return new (t || DashboardAvailabilityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dashboard_state_service__WEBPACK_IMPORTED_MODULE_2__["DashboardStateService"])); };
DashboardAvailabilityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardAvailabilityComponent, selectors: [["dashboard-availability"]], decls: 22, vars: 21, consts: [[1, "m-0", "font-medium", "text-xl"], [1, "flex", "flex-col", "items-center", "p-2", "bg-white", "my-4", "rounded-lg"], [1, "flex", "items-center", "w-full", "mb-2"], [1, "bg-darken", "rounded-lg", "mr-2", "text-2xl", 3, "icon"], [1, "items", "space-y-2", "w-full"], ["button", "", "mat-button", "", "class", "w-full", 3, "routerLink", "queryParams", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "flex-col", "rounded-lg", "bg-white", "my-4", "p-2"], [1, "items", "space-y-2"], ["class", "text-dark-fade text-sm mb-2", 4, "ngIf"], ["button", "", "mat-button", "", 1, "w-full", 3, "routerLink", "queryParams"], [1, "text-dark-fade", "text-sm", "mb-2"]], template: function DashboardAvailabilityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Available Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Most free space:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DashboardAvailabilityComponent_a_8_Template, 2, 6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "app-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Free rooms now:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, DashboardAvailabilityComponent_a_17_Template, 2, 6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, DashboardAvailabilityComponent_span_20_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](9, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 9, ctx.levels_free), 0, 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](18, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 15, ctx.space_list), 0, 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 17, ctx.space_list).length);
    } }, directives: [_libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n                padding: 1em;\n                min-width: 16rem;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardAvailabilityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'dashboard-availability',
                template: `
        <h3 class="m-0 font-medium text-xl">Available Now</h3>
        <div class="flex flex-col items-center p-2 bg-white my-4 rounded-lg">
            <div class="flex items-center w-full mb-2">
                <app-icon
                    class="bg-darken rounded-lg mr-2 text-2xl"
                    [icon]="{ class: 'material-icons', content: 'crop_free' }"
                ></app-icon>
                <div>Most free space:</div>
            </div>
            <div class="items space-y-2 w-full">
                <a
                    button
                    mat-button
                    class="w-full"
                    *ngFor="let lvl of levels_free | async | slice:0:2"
                    [routerLink]="['/explore']"
                    [queryParams]="{ level: lvl.id }"
                >
                    {{ lvl.display_name || lvl.name }}
                </a>
            </div>
        </div>
        <div class="flex items-center flex-col rounded-lg bg-white my-4 p-2">
            <div class="flex items-center w-full mb-2">
                <app-icon
                    class="bg-darken rounded-lg mr-2 text-2xl"
                    [icon]="{ class: 'material-icons', content: 'av_timer' }"
                ></app-icon>
                <div>Free rooms now:</div>
            </div>
            <div class="items space-y-2">
                <a
                    button
                    mat-button
                    class="w-full"
                    *ngFor="let space of space_list | async | slice: 0:3"
                    [routerLink]="['/explore']"
                    [queryParams]="{ space: space.id }"
                    >{{ space.display_name || space.name }}
                </a>
                <span *ngIf="!(space_list | async).length" class="text-dark-fade text-sm mb-2">No free spaces</span>
            </div>
        </div>
    `,
                styles: [
                    `
            :host {
                padding: 1em;
                min-width: 16rem;
            }
        `,
                ],
            }]
    }], function () { return [{ type: _dashboard_state_service__WEBPACK_IMPORTED_MODULE_2__["DashboardStateService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map