(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["day-view-day-view-module"],{

/***/ "5cUL":
/*!************************************************!*\
  !*** ./src/app/day-view/day-view.component.ts ***!
  \************************************************/
/*! exports provided: DayViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayViewComponent", function() { return DayViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _ui_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/sidebar.component */ "UfDH");
/* harmony import */ var _dayview_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dayview-topbar.component */ "Wu3G");
/* harmony import */ var _dayview_timeline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dayview-timeline.component */ "JDjg");





class DayViewComponent {
}
DayViewComponent.ɵfac = function DayViewComponent_Factory(t) { return new (t || DayViewComponent)(); };
DayViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DayViewComponent, selectors: [["app-dayview"]], decls: 4, vars: 0, consts: [[1, "relative"]], template: function DayViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "dayview-topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "dayview-timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ui_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], _dayview_topbar_component__WEBPACK_IMPORTED_MODULE_2__["DayviewTopbarComponent"], _dayview_timeline_component__WEBPACK_IMPORTED_MODULE_3__["DayviewTimelineComponent"]], styles: ["[_nghost-%COMP%] {\n                display: flex;\n                height: 100%;\n                width: 100%;\n            }\n\n            sidebar[_ngcontent-%COMP%] {\n                height: 100%;\n            }\n\n            main[_ngcontent-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                flex: 1;\n                min-width: 50%;\n                height: 100%;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DayViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dayview',
                template: `
        <sidebar></sidebar>
        <main class="relative">
            <dayview-topbar></dayview-topbar>
            <dayview-timeline></dayview-timeline>
        </main>
    `,
                styles: [
                    `
            :host {
                display: flex;
                height: 100%;
                width: 100%;
            }

            sidebar {
                height: 100%;
            }

            main {
                display: flex;
                flex-direction: column;
                flex: 1;
                min-width: 50%;
                height: 100%;
            }
        `
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "Bhho":
/*!*********************************************!*\
  !*** ./src/app/day-view/day-view.module.ts ***!
  \*********************************************/
/*! exports provided: DayViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayViewModule", function() { return DayViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/ui.module */ "oRDy");
/* harmony import */ var _day_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./day-view.component */ "5cUL");
/* harmony import */ var _dayview_topbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dayview-topbar.component */ "Wu3G");
/* harmony import */ var _dayview_timeline_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dayview-timeline.component */ "JDjg");
/* harmony import */ var _dayview_space_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dayview-space.component */ "JO76");
/* harmony import */ var _dayview_event_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dayview-event.component */ "X71C");
/* harmony import */ var _dayview_event_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dayview-event-details.component */ "Utgy");













const ROUTES = [{ path: '', component: _day_view_component__WEBPACK_IMPORTED_MODULE_5__["DayViewComponent"] }];
class DayViewModule {
}
DayViewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DayViewModule });
DayViewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DayViewModule_Factory(t) { return new (t || DayViewModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ui_ui_module__WEBPACK_IMPORTED_MODULE_4__["UIModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(ROUTES)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DayViewModule, { declarations: [_day_view_component__WEBPACK_IMPORTED_MODULE_5__["DayViewComponent"],
        _dayview_topbar_component__WEBPACK_IMPORTED_MODULE_6__["DayviewTopbarComponent"],
        _dayview_timeline_component__WEBPACK_IMPORTED_MODULE_7__["DayviewTimelineComponent"],
        _dayview_space_component__WEBPACK_IMPORTED_MODULE_8__["DayviewSpaceComponent"],
        _dayview_event_component__WEBPACK_IMPORTED_MODULE_9__["DayviewEventComponent"],
        _dayview_event_details_component__WEBPACK_IMPORTED_MODULE_10__["DayviewEventDetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ui_ui_module__WEBPACK_IMPORTED_MODULE_4__["UIModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DayViewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _day_view_component__WEBPACK_IMPORTED_MODULE_5__["DayViewComponent"],
                    _dayview_topbar_component__WEBPACK_IMPORTED_MODULE_6__["DayviewTopbarComponent"],
                    _dayview_timeline_component__WEBPACK_IMPORTED_MODULE_7__["DayviewTimelineComponent"],
                    _dayview_space_component__WEBPACK_IMPORTED_MODULE_8__["DayviewSpaceComponent"],
                    _dayview_event_component__WEBPACK_IMPORTED_MODULE_9__["DayviewEventComponent"],
                    _dayview_event_details_component__WEBPACK_IMPORTED_MODULE_10__["DayviewEventDetailsComponent"]
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ui_ui_module__WEBPACK_IMPORTED_MODULE_4__["UIModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(ROUTES)],
            }]
    }], null, null); })();


/***/ }),

/***/ "JDjg":
/*!********************************************************!*\
  !*** ./src/app/day-view/dayview-timeline.component.ts ***!
  \********************************************************/
/*! exports provided: DayviewTimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayviewTimelineComponent", function() { return DayviewTimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/organisation */ "dJst");
/* harmony import */ var _user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @user-interfaces/spaces */ "6CBO");
/* harmony import */ var _events_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events-state.service */ "HWRp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _dayview_space_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dayview-space.component */ "JO76");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ "66mq");
/* harmony import */ var _dayview_event_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dayview-event-details.component */ "Utgy");















const _c0 = ["ref"];
function DayviewTimelineComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_r8 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", "translateY(-" + ctx_r0.scroll.y + "px)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](time_r8);
} }
function DayviewTimelineComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const space_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", "translateX(-" + ctx_r1.scroll.x + "px)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](space_r9.display_name || space_r9.name);
} }
function DayviewTimelineComponent_dayview_space_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dayview-space", 20);
} if (rf & 2) {
    const space_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("space", space_r10);
} }
function DayviewTimelineComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const i_r12 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, ctx_r5.space_list).length * 12 + "em")("top", i_r12 * 4 + "em");
} }
function DayviewTimelineComponent_mat_progress_bar_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 22);
} }
function DayviewTimelineComponent_dayview_event_details_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dayview-event-details", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r7.event));
} }
const HOUR_BLOCKS = new Array(24).fill(0).map((_, idx) => {
    return (idx % 12 === 0 ? 12 : idx % 12) + (idx >= 12 ? ' PM' : ' AM');
});
class DayviewTimelineComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["BaseClass"] {
    constructor(_org, _spaces, _state) {
        super();
        this._org = _org;
        this._spaces = _spaces;
        this._state = _state;
        /** Time blocks to display */
        this.blocks = HOUR_BLOCKS;
        /** Current scroll position of the content */
        this.scroll = { x: 0, y: 0 };
        /** Whether event data is loading */
        this.loading = this._state.loading;
        /** Whether event data is loading */
        this.event = this._state.event;
        /** List of spaces to display */
        this.space_list = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            this._org.active_building,
            this._spaces.list,
            this._state.zones,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((details) => {
            const [bld, spaces, zones] = details;
            return (spaces.filter((space) => space.zones.includes(bld.id) &&
                (!zones || !zones.length || space.zones.find((z) => zones.includes(z)))) || []);
        }));
    }
    ngOnInit() {
        this._state.startPolling();
    }
    ngOnDestroy() {
        this._state.stopPolling();
    }
    ngAfterViewInit() {
        this.box = this._ref_el.nativeElement.getBoundingClientRect();
    }
    onScroll() {
        if (this._ref_el) {
            requestAnimationFrame(() => {
                const box = this._ref_el.nativeElement.getBoundingClientRect();
                this.scroll = { x: this.box.left - box.left, y: this.box.top - box.top };
            });
        }
    }
}
DayviewTimelineComponent.ɵfac = function DayviewTimelineComponent_Factory(t) { return new (t || DayviewTimelineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_4__["OrganisationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_5__["SpacesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_events_state_service__WEBPACK_IMPORTED_MODULE_6__["EventsStateService"])); };
DayviewTimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DayviewTimelineComponent, selectors: [["dayview-timeline"]], viewQuery: function DayviewTimelineComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._ref_el = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 14, consts: [[1, "time", "h-full", "overflow-hidden"], [1, "headers", "relative"], [1, "white-space", "absolute", "inset-0", 2, "bottom", "1em"], ["name", "change-transform", "class", "relative", 3, "transform", 4, "ngFor", "ngForOf"], [1, "h-full", "flex-1", "flex", "flex-col"], [1, "headers", "flex", "relative", "overflow-hidden"], [1, "bar", "absolute"], ["name", "change-transform", "class", "relative w", 3, "transform", 4, "ngFor", "ngForOf"], [1, "content", "relative", "flex", "flex-1", "overflow-auto", 3, "scroll"], ["scroll_el", ""], [1, "ref", "absolute"], ["ref", ""], [3, "space", 4, "ngFor", "ngForOf"], ["class", "block absolute w-full", 3, "width", "top", 4, "ngFor", "ngForOf"], ["mode", "indeterminate", 4, "ngIf"], [3, "event", 4, "ngIf"], ["name", "change-transform", 1, "relative"], [1, "text", "absolute", "w-full", "text-xs"], ["name", "change-transform", 1, "relative", "w"], [1, "name", "m-2", "text-center"], [3, "space"], [1, "block", "absolute", "w-full"], ["mode", "indeterminate"], [3, "event"]], template: function DayviewTimelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DayviewTimelineComponent_div_3_Template, 4, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DayviewTimelineComponent_div_7_Template, 4, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function DayviewTimelineComponent_Template_div_scroll_9_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DayviewTimelineComponent_dayview_space_13_Template, 1, 1, "dayview-space", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DayviewTimelineComponent_div_15_Template, 2, 6, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DayviewTimelineComponent_mat_progress_bar_16_Template, 1, 0, "mat-progress-bar", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DayviewTimelineComponent_dayview_event_details_18_Template, 2, 3, "dayview-event-details", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blocks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, ctx.space_list));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 8, ctx.space_list));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blocks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 10, ctx.loading));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 12, ctx.event));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _dayview_space_component__WEBPACK_IMPORTED_MODULE_8__["DayviewSpaceComponent"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBar"], _dayview_event_details_component__WEBPACK_IMPORTED_MODULE_10__["DayviewEventDetailsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n                display: flex;\n                align-items: center;\n                flex: 1;\n                min-height: 50%;\n            }\n\n            .time[_ngcontent-%COMP%] {\n                width: 6em;\n            }\n\n            .time[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:not(.headers) {\n                height: 4em;\n            }\n\n            .bar[_ngcontent-%COMP%] {\n                width: 1em;\n                top: 0;\n                right: 0;\n                height: 1px;\n                background-color: rgba(0, 0, 0, 0.1);\n                z-index: 0;\n            }\n\n            .headers[_ngcontent-%COMP%] {\n                height: 4em;\n                max-width: calc(100vw - 12em);\n            }\n\n            .white-space[_ngcontent-%COMP%] {\n                background-color: #f0f0f0;\n                z-index: 999;\n            }\n\n            .headers[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n                width: 1px;\n                bottom: 0;\n                right: -1px;\n                height: 2em;\n                background-color: rgba(0, 0, 0, 0.1);\n                top: auto;\n            }\n\n            .headers[_ngcontent-%COMP%]    > .bar[_ngcontent-%COMP%]:first-child {\n                width: 1px;\n                bottom: 0;\n                right: auto;\n                left: 0;\n                height: 2em;\n                background-color: rgba(0, 0, 0, 0.1);\n                top: auto;\n            }\n\n            .w[_ngcontent-%COMP%], dayview-space[_ngcontent-%COMP%] {\n                width: 12em;\n                min-width: 12em;\n            }\n\n            dayview-space[_ngcontent-%COMP%] {\n                height: 96em;\n            }\n\n            .block[_ngcontent-%COMP%] {\n                height: 4em;\n                border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n                pointer-events: none;\n                min-width: 100%;\n                z-index: 0;\n            }\n\n            .text[_ngcontent-%COMP%] {\n                text-align: center;\n                transform: translateY(-50%);\n                padding: 0 2.5em;\n                opacity: 0.65;\n            }\n\n            .ref[_ngcontent-%COMP%] {\n                top: 0;\n                left: 0;\n                height: 1px;\n                width: 1px;\n                height: 96em;\n            }\n\n            .content[_ngcontent-%COMP%] {\n                max-width: calc(100vw - 12em);\n                border-top: 1px solid rgba(0, 0, 0, 0.1);\n                border-left: 1px solid rgba(0, 0, 0, 0.1);\n            }\n\n            mat-progress-bar[_ngcontent-%COMP%] {\n                position: absolute;\n                left: 0;\n                right: 0;\n                bottom: 0;\n            }\n\n            [name=\"change-transform\"][_ngcontent-%COMP%] {\n                will-change: transform;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DayviewTimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dayview-timeline',
                template: `
        <div class="time h-full overflow-hidden">
            <div class="headers relative">
                <div class="white-space absolute inset-0" style="bottom: 1em"></div>
            </div>
            <div *ngFor="let time of blocks" name="change-transform" class="relative" [style.transform]="'translateY(-' + scroll.y + 'px)'">
                <div class="text absolute w-full text-xs">{{ time }}</div>
                <div class="bar absolute"></div>
            </div>
        </div>
        <div class="h-full flex-1 flex flex-col">
            <div class="headers flex relative overflow-hidden">
                <div class="bar absolute"></div>
                <div
                    *ngFor="let space of space_list | async"
                    name="change-transform"
                    class="relative w"
                    [style.transform]="'translateX(-' + scroll.x + 'px)'"
                >
                    <div class="bar absolute"></div>
                    <div class="name m-2 text-center">{{ space.display_name || space.name }}</div>
                </div>
            </div>
            <div
                #scroll_el
                class="content relative flex flex-1 overflow-auto"
                (scroll)="onScroll()"
            >
                <div #ref class="ref absolute"></div>
                <dayview-space
                    *ngFor="let space of space_list | async"
                    [space]="space"
                ></dayview-space>
                <div
                    *ngFor="let time of blocks; let i = index"
                    class="block absolute w-full"
                    [style.width]="(space_list | async).length * 12 + 'em'"
                    [style.top]="i * 4 + 'em'"
                ></div>
            </div>
        </div>
        <mat-progress-bar *ngIf="loading | async" mode="indeterminate"></mat-progress-bar>
        <dayview-event-details *ngIf="event | async" [event]="event | async"></dayview-event-details>
    `,
                styles: [
                    `
            :host {
                display: flex;
                align-items: center;
                flex: 1;
                min-height: 50%;
            }

            .time {
                width: 6em;
            }

            .time > div:not(.headers) {
                height: 4em;
            }

            .bar {
                width: 1em;
                top: 0;
                right: 0;
                height: 1px;
                background-color: rgba(0, 0, 0, 0.1);
                z-index: 0;
            }

            .headers {
                height: 4em;
                max-width: calc(100vw - 12em);
            }

            .white-space {
                background-color: #f0f0f0;
                z-index: 999;
            }

            .headers .bar {
                width: 1px;
                bottom: 0;
                right: -1px;
                height: 2em;
                background-color: rgba(0, 0, 0, 0.1);
                top: auto;
            }

            .headers > .bar:first-child {
                width: 1px;
                bottom: 0;
                right: auto;
                left: 0;
                height: 2em;
                background-color: rgba(0, 0, 0, 0.1);
                top: auto;
            }

            .w,
            dayview-space {
                width: 12em;
                min-width: 12em;
            }

            dayview-space {
                height: 96em;
            }

            .block {
                height: 4em;
                border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                pointer-events: none;
                min-width: 100%;
                z-index: 0;
            }

            .text {
                text-align: center;
                transform: translateY(-50%);
                padding: 0 2.5em;
                opacity: 0.65;
            }

            .ref {
                top: 0;
                left: 0;
                height: 1px;
                width: 1px;
                height: 96em;
            }

            .content {
                max-width: calc(100vw - 12em);
                border-top: 1px solid rgba(0, 0, 0, 0.1);
                border-left: 1px solid rgba(0, 0, 0, 0.1);
            }

            mat-progress-bar {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
            }

            [name="change-transform"] {
                will-change: transform;
            }
        `,
                ],
            }]
    }], function () { return [{ type: _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_4__["OrganisationService"] }, { type: _user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_5__["SpacesService"] }, { type: _events_state_service__WEBPACK_IMPORTED_MODULE_6__["EventsStateService"] }]; }, { _ref_el: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['ref']
        }] }); })();


/***/ }),

/***/ "JO76":
/*!*****************************************************!*\
  !*** ./src/app/day-view/dayview-space.component.ts ***!
  \*****************************************************/
/*! exports provided: DayviewSpaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayviewSpaceComponent", function() { return DayviewSpaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/spaces */ "6CBO");
/* harmony import */ var _events_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events-state.service */ "HWRp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _dayview_event_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dayview-event.component */ "X71C");








function DayviewSpaceComponent_dayview_event_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dayview-event", 1);
} if (rf & 2) {
    const event_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", event_r1);
} }
class DayviewSpaceComponent {
    constructor(_state) {
        this._state = _state;
        /** List of events for the selected space */
        this.events = this._state.filtered.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((bookings) => bookings.filter((bkn) => bkn.resources.find((space) => this.space.email === space.email))));
    }
    ngOnInit() {
        this._state.filtered.subscribe((events) => {
        });
    }
}
DayviewSpaceComponent.ɵfac = function DayviewSpaceComponent_Factory(t) { return new (t || DayviewSpaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_events_state_service__WEBPACK_IMPORTED_MODULE_3__["EventsStateService"])); };
DayviewSpaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DayviewSpaceComponent, selectors: [["dayview-space"]], inputs: { space: "space" }, decls: 2, vars: 3, consts: [[3, "event", 4, "ngFor", "ngForOf"], [3, "event"]], template: function DayviewSpaceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DayviewSpaceComponent_dayview_event_0_Template, 1, 1, "dayview-event", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.events));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _dayview_event_component__WEBPACK_IMPORTED_MODULE_5__["DayviewEventComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n                position: relative;\n                border-right: 1px solid rgba(0, 0, 0, 0.1);\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DayviewSpaceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dayview-space',
                template: `
        <dayview-event *ngFor="let event of events | async" [event]="event"></dayview-event>
        `,
                styles: [
                    `
            :host {
                position: relative;
                border-right: 1px solid rgba(0, 0, 0, 0.1);
            }
        `,
                ],
            }]
    }], function () { return [{ type: _events_state_service__WEBPACK_IMPORTED_MODULE_3__["EventsStateService"] }]; }, { space: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Utgy":
/*!*************************************************************!*\
  !*** ./src/app/day-view/dayview-event-details.component.ts ***!
  \*************************************************************/
/*! exports provided: DayviewEventDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayviewEventDetailsComponent", function() { return DayviewEventDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "w8Fe");
/* harmony import */ var _user_interfaces_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/events */ "eZII");
/* harmony import */ var _user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interfaces/spaces */ "6CBO");
/* harmony import */ var _events_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events-state.service */ "HWRp");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_components_src_lib_user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/user-avatar/user-avatar.component */ "FGQ9");
/* harmony import */ var _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @acaprojects/ngx-pipes */ "81Qw");













function DayviewEventDetailsComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a-user-avatar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", user_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.name || user_r1.first_name + " " + user_r1.last_name);
} }
const _c0 = function () { return { class: "material-icons", content: "title" }; };
const _c1 = function () { return { class: "material-icons", content: "schedule" }; };
const _c2 = function () { return { class: "material-icons", content: "place" }; };
const _c3 = function () { return { class: "material-icons", content: "format_align_left" }; };
const _c4 = function () { return { class: "material-icons", content: "close" }; };
class DayviewEventDetailsComponent {
    constructor(_state, _spaces) {
        this._state = _state;
        this._spaces = _spaces;
        /** Close displayed event */
        this.close = () => this._state.setEvent(null);
    }
    get location() {
        const space = this._spaces.find(this.event.resources[0].id);
        return `${space.level.display_name || space.level.name}, ${space.display_name || space.name}`;
    }
    get time() {
        const date = new Date(this.event.date);
        return (Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(date, 'h:mm a') + ' - ' + Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addMinutes"])(date, this.event.duration), 'h:mm a'));
    }
}
DayviewEventDetailsComponent.ɵfac = function DayviewEventDetailsComponent_Factory(t) { return new (t || DayviewEventDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_events_state_service__WEBPACK_IMPORTED_MODULE_4__["EventsStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_3__["SpacesService"])); };
DayviewEventDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DayviewEventDetailsComponent, selectors: [["dayview-event-details"]], inputs: { event: "event" }, decls: 40, vars: 26, consts: [[1, "fixed", "inset-0", 3, "click"], ["name", "panel", 1, "absolute", "rounded", "shadow", "flex", "flex-col", 3, "click"], [1, "p-4", "overflow-auto", "flex-1"], [1, "mb-0", "pl-6", "mb-1"], [1, "text-bold", "mb-4", "pl-6", "text-dark-fade"], [1, "flex", "items-center", "mb-2"], [1, "mr-1", 3, "icon"], [1, "text-dark-fade"], [1, "flex", "items-center"], [1, "flex", "flex-col", "mb-2"], ["class", "flex items-center pl-6 mb-1", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "pl-6", "mb-2"], [1, "text-dark-fade", 3, "innerHTML"], ["name", "actions", 1, "flex", "items-center", "justify-content", "p-4", "space-x-4"], ["mat-button", "", 1, "flex-1", "inverse"], ["mat-button", "", 1, "flex-1"], ["name", "close", "mat-icon-button", "", 3, "click"], [3, "icon"], [1, "flex", "items-center", "pl-6", "mb-1"], [1, "text-sm", "pr-2", 3, "user"]], template: function DayviewEventDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DayviewEventDetailsComponent_Template_div_click_0_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DayviewEventDetailsComponent_Template_div_click_1_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DayviewEventDetailsComponent_div_21_Template, 4, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "sanitize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Remove Booking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Edit Booking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DayviewEventDetailsComponent_Template_button_click_38_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "app-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.event.organiser.name || ctx.event.host);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 15, ctx.event.date, "fullDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.event.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.event.attendees.length, " Attendee", ctx.event.attendees.length === 1 ? "" : "s", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.event.attendees);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 18, ctx.event.body || "< No notes >"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c4));
    } }, directives: [_libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _libs_components_src_lib_user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_8__["UserAvatarComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_9__["ɵb"]], styles: ["[_nghost-%COMP%] {\n                z-index: 999;\n            }\n\n            [name=\"panel\"][_ngcontent-%COMP%] {\n                padding-top: 0;\n                width: 26em;\n                left: 50%;\n                top: 6.5em;\n                transform: translateX(-50%);\n                background-color: #fff;\n                max-height: 80vh;\n            }\n\n            [name=\"actions\"][_ngcontent-%COMP%] {\n                border-top: 1px solid #ccc;\n            }\n\n            [name=\"close\"][_ngcontent-%COMP%] {\n                position: absolute;\n                top: .25em;\n                right: .25em;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DayviewEventDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dayview-event-details',
                template: `
        <div class="fixed inset-0" (click)="close()"></div>
        <div name="panel" class="absolute rounded shadow flex flex-col" (click)="$event.stopPropagation()">
            <div class="p-4 overflow-auto flex-1">
                <h3 class="mb-0 pl-6 mb-1">{{ event.organiser.name || event.host }}</h3>
                <div class="text-bold mb-4 pl-6 text-dark-fade">{{ event.date | date:'fullDate' }}</div>
                <div class="flex items-center mb-2">
                    <app-icon class="mr-1" [icon]="{ class: 'material-icons', content: 'title' }"></app-icon>
                    <span class="text-dark-fade">{{ event.title }}</span>
                </div>
                <div class="flex items-center mb-2">
                    <app-icon class="mr-1" [icon]="{ class: 'material-icons', content: 'schedule' }"></app-icon>
                    <span class="text-dark-fade">{{ time }}</span>
                </div>
                <div class="flex items-center">
                    <app-icon class="mr-1" [icon]="{ class: 'material-icons', content: 'schedule' }"></app-icon>
                    <span class="text-dark-fade">{{ event.attendees.length }} Attendee{{ event.attendees.length === 1 ? '' : 's' }}</span>
                </div>
                <div class="flex flex-col mb-2">
                    <div class="flex items-center pl-6 mb-1" *ngFor="let user of event.attendees">
                        <a-user-avatar class="text-sm pr-2" [user]="user"></a-user-avatar>
                        <span>{{ user.name || (user.first_name + ' ' + user.last_name) }}</span>
                    </div>
                </div>
                <div class="flex items-center mb-2">
                    <app-icon class="mr-1" [icon]="{ class: 'material-icons', content: 'place' }"></app-icon>
                    <span class="text-dark-fade">{{ location }}</span>
                </div>
                <div class="flex items-center">
                    <app-icon class="mr-1" [icon]="{ class: 'material-icons', content: 'format_align_left' }"></app-icon>
                    <span class="text-dark-fade">Notes</span>
                </div>
                <div class="flex items-center pl-6 mb-2">
                    <span class="text-dark-fade" [innerHTML]="(event.body || '&lt; No notes &gt;') | sanitize"></span>
                </div>
            </div>
            <div name="actions" class="flex items-center justify-content p-4 space-x-4">
                <button class="flex-1 inverse" mat-button>Remove Booking</button>
                <button class="flex-1" mat-button>Edit Booking</button>
            </div>
            <button name="close" mat-icon-button (click)="close()">
                <app-icon [icon]="{ class: 'material-icons', content: 'close' }"></app-icon>
            </button>
        </div>
    `,
                styles: [
                    `
            :host {
                z-index: 999;
            }

            [name="panel"] {
                padding-top: 0;
                width: 26em;
                left: 50%;
                top: 6.5em;
                transform: translateX(-50%);
                background-color: #fff;
                max-height: 80vh;
            }

            [name="actions"] {
                border-top: 1px solid #ccc;
            }

            [name="close"] {
                position: absolute;
                top: .25em;
                right: .25em;
            }
        `,
                ],
            }]
    }], function () { return [{ type: _events_state_service__WEBPACK_IMPORTED_MODULE_4__["EventsStateService"] }, { type: _user_interfaces_spaces__WEBPACK_IMPORTED_MODULE_3__["SpacesService"] }]; }, { event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Wu3G":
/*!******************************************************!*\
  !*** ./src/app/day-view/dayview-topbar.component.ts ***!
  \******************************************************/
/*! exports provided: DayviewTopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayviewTopbarComponent", function() { return DayviewTopbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @user-interfaces/organisation */ "dJst");
/* harmony import */ var _events_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events-state.service */ "HWRp");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "R7+U");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slide-toggle */ "k8N0");
/* harmony import */ var _ui_searchbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ui/searchbar.component */ "wobF");
/* harmony import */ var _ui_date_options_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ui/date-options.component */ "wrRZ");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "mFH5");





















function DayviewTopbarComponent_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const level_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", level_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", level_r2.display_name || level_r2.name, " ");
} }
function DayviewTopbarComponent_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", type_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", type_r3.name, " ");
} }
const _c0 = function () { return { class: "material-icons", content: "add" }; };
class DayviewTopbarComponent extends _user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["BaseClass"] {
    constructor(_state, _org, _route, _router) {
        super();
        this._state = _state;
        this._org = _org;
        this._route = _route;
        this._router = _router;
        /** List of selected levels */
        this.zones = [];
        this.types = [
            { id: 'internal', name: 'Internal' },
            { id: 'external', name: 'External' },
            { id: 'cancelled', name: 'Cancelled' },
        ];
        /** List of selected types */
        this.type_list = this.types.map((i) => `${i.id}`);
        /** Set filtered date */
        this.setDate = (d) => this._state.setDate(d);
        /** List of levels for the active building */
        this.levels = this._org.active_levels;
        /** List of levels for the active building */
        this.ui_options = this._state.ui_options;
        /** List of levels for the active building */
        this.updateZones = (z) => {
            this._router.navigate([], {
                relativeTo: this._route,
                queryParams: { zone_ids: z.join(',') },
            });
            this._state.setZones(z);
        };
        /** List of levels for the active building */
        this.updateTypes = (types) => this._state.setFilters({
            hide_type: this.types.reduce((list, item) => {
                !types.includes(item.id) ? list.push(item) : '';
                return list;
            }, []),
        });
    }
    updateUIOptions(options) {
        this._state.setUIOptions(options);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._org.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])((_) => _)).toPromise();
            this.subscription('route.query', this._route.queryParamMap.subscribe((params) => {
                if (params.has('zone_ids')) {
                    const zones = params.get('zone_ids').split(',');
                    if (zones.length) {
                        const level = this._org.levelWithID(zones);
                        if (!level) {
                            return;
                        }
                        this._org.building = this._org.buildings.find((bld) => bld.id === level.parent_id);
                        this.zones = zones;
                    }
                }
            }));
            this.subscription('levels', this._org.active_levels.subscribe((levels) => {
                this.zones = this.zones.filter((zone) => levels.find((lvl) => lvl.id === zone));
                if (!this.zones.length && levels.length) {
                    this.zones.push(levels[0].id);
                }
                this.updateZones(this.zones);
            }));
            this.updateTypes(this.type_list);
        });
    }
}
DayviewTopbarComponent.ɵfac = function DayviewTopbarComponent_Factory(t) { return new (t || DayviewTopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_events_state_service__WEBPACK_IMPORTED_MODULE_6__["EventsStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_5__["OrganisationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
DayviewTopbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DayviewTopbarComponent, selectors: [["dayview-topbar"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 25, vars: 14, consts: [["mat-button", ""], [1, "flex", "items-center"], [1, "mr-2", 3, "icon"], [1, "text"], ["appearance", "outline"], ["multiple", "", "placeholder", "All Levels", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["multiple", "", "placeholder", "No Events", 3, "ngModel", "ngModelChange"], [1, "m-2", 3, "ngModel", "ngModelChange"], [1, "text-xs"], [1, "flex-full"], [1, "mr-2"], [3, "dateChange"], [3, "value"]], template: function DayviewTopbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "New Booking");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DayviewTopbarComponent_Template_mat_select_ngModelChange_6_listener($event) { return ctx.zones = $event; })("ngModelChange", function DayviewTopbarComponent_Template_mat_select_ngModelChange_6_listener($event) { return ctx.updateZones($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DayviewTopbarComponent_mat_option_7_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DayviewTopbarComponent_Template_mat_select_ngModelChange_10_listener($event) { return ctx.type_list = $event; })("ngModelChange", function DayviewTopbarComponent_Template_mat_select_ngModelChange_10_listener($event) { return ctx.updateTypes($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-select-trigger");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, DayviewTopbarComponent_mat_option_13_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-slide-toggle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DayviewTopbarComponent_Template_mat_slide_toggle_ngModelChange_14_listener($event) { return ctx.updateUIOptions({ show_overflow: $event }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Setup / Breakdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-slide-toggle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DayviewTopbarComponent_Template_mat_slide_toggle_ngModelChange_18_listener($event) { return ctx.updateUIOptions({ show_cleaning: $event }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Cleaners View");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "searchbar", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "date-options", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dateChange", function DayviewTopbarComponent_Template_date_options_dateChange_24_listener($event) { return ctx.setDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_5_0 = null;
        var tmp_6_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.zones);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 7, ctx.levels));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.type_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.types);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 9, ctx.ui_options)) == null ? null : tmp_5_0.show_overflow);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 11, ctx.ui_options)) == null ? null : tmp_6_0.show_cleaning);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__["IconComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectTrigger"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggle"], _ui_searchbar_component__WEBPACK_IMPORTED_MODULE_14__["SearchbarComponent"], _ui_date_options_component__WEBPACK_IMPORTED_MODULE_15__["DateOptionsComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n                display: flex;\n                align-items: center;\n                background-color: #fff;\n                height: 5em;\n                padding: 0 2em;\n            }\n\n            .flex-full[_ngcontent-%COMP%] {\n                flex: 1;\n                width: 0.5em;\n            }\n\n            mat-form-field[_ngcontent-%COMP%] {\n                height: 3.25em;\n                width: 8em;\n                margin-left: 1em;\n            }\n\n            mat-slide-toggle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n                width: 5.5em;\n                white-space: initial;\n                line-height: 1.2em\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DayviewTopbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'dayview-topbar',
                template: `
        <button mat-button>
            <div class="flex items-center">
                <app-icon
                    class="mr-2"
                    [icon]="{ class: 'material-icons', content: 'add' }"
                ></app-icon>
                <div class="text">New Booking</div>
            </div>
        </button>
        <mat-form-field appearance="outline">
            <mat-select
                multiple
                [(ngModel)]="zones"
                (ngModelChange)="updateZones($event)"
                placeholder="All Levels"
            >
                <mat-option *ngFor="let level of levels | async" [value]="level.id">
                    {{ level.display_name || level.name }}
                </mat-option>
            </mat-select>
        </mat-form-field>
        <mat-form-field appearance="outline">
            <mat-select
                multiple
                [(ngModel)]="type_list"
                (ngModelChange)="updateTypes($event)"
                placeholder="No Events"
            >
                <mat-select-trigger>Legend</mat-select-trigger>
                <mat-option *ngFor="let type of types" [value]="type.id">
                    {{ type.name }}
                </mat-option>
            </mat-select>
        </mat-form-field>
        <mat-slide-toggle
            class="m-2"
            [ngModel]="(ui_options | async)?.show_overflow"
            (ngModelChange)="updateUIOptions({ show_overflow: $event })"
            ><div class="text-xs">Setup / Breakdown</div></mat-slide-toggle
        >
        <mat-slide-toggle
            class="m-2"
            [ngModel]="(ui_options | async)?.show_cleaning"
            (ngModelChange)="updateUIOptions({ show_cleaning: $event })"
            ><div class="text-xs">Cleaners View</div></mat-slide-toggle
        >
        <div class="flex-full"></div>
        <searchbar class="mr-2"></searchbar>
        <date-options (dateChange)="setDate($event)"></date-options>
    `,
                styles: [
                    `
            :host {
                display: flex;
                align-items: center;
                background-color: #fff;
                height: 5em;
                padding: 0 2em;
            }

            .flex-full {
                flex: 1;
                width: 0.5em;
            }

            mat-form-field {
                height: 3.25em;
                width: 8em;
                margin-left: 1em;
            }

            mat-slide-toggle div {
                width: 5.5em;
                white-space: initial;
                line-height: 1.2em
            }
        `,
                ],
            }]
    }], function () { return [{ type: _events_state_service__WEBPACK_IMPORTED_MODULE_6__["EventsStateService"] }, { type: _user_interfaces_organisation__WEBPACK_IMPORTED_MODULE_5__["OrganisationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "X71C":
/*!*****************************************************!*\
  !*** ./src/app/day-view/dayview-event.component.ts ***!
  \*****************************************************/
/*! exports provided: DayviewEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayviewEventComponent", function() { return DayviewEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "w8Fe");
/* harmony import */ var _user_interfaces_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/events */ "eZII");
/* harmony import */ var _events_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events-state.service */ "HWRp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");








function DayviewEventComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("overflow-block absolute rounded overflow-hidden w-full " + ctx_r0.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx_r0.overflow_top * 100 + "%")("height", ctx_r0.overflow_height * 100 + "%");
} }
const _c0 = function () { return { class: "material-icons", content: "title" }; };
function DayviewEventComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.event.title, " ");
} }
const _c1 = function () { return { class: "material-icons", content: "schedule" }; };
function DayviewEventComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.time, " ");
} }
const _c2 = function () { return { class: "material-icons", content: "user" }; };
function DayviewEventComponent_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r5.event.attendees.length, " Attendee", ctx_r5.event.attendees.length === 1 ? "" : "s", " ");
} }
function DayviewEventComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DayviewEventComponent_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.view(ctx_r6.event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DayviewEventComponent_div_2_div_3_Template, 3, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DayviewEventComponent_div_2_div_4_Template, 3, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DayviewEventComponent_div_2_div_5_Template, 3, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("absolute rounded overflow-hidden text-sm " + ctx_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx_r1.top * 100 + "%")("height", ctx_r1.height * 100 + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.event.organiser == null ? null : ctx_r1.event.organiser.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.event.duration > 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.event.duration > 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.event.duration > 90);
} }
const _c3 = function (a1) { return { class: "material-icons", content: a1 }; };
function DayviewEventComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx_r2.overflow_top * 100 + "%")("height", ctx_r2.overflow_height * 100 + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("icon flex mr-2 text-3xl rounded " + ctx_r2.event.cleaning_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c3, ctx_r2.event.cleaning_status === "done" ? "done" : "warning"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r2.event.cleaning_status === "done" ? "Finished" : "Scheduled to", " clean at ", ctx_r2.event.cleaning_time, "");
} }
class DayviewEventComponent {
    constructor(_state) {
        this._state = _state;
        /** Top position for the event */
        this.top = -999;
        /** Height of the event on the calendar */
        this.height = 0;
        /** Top position for the event */
        this.overflow_top = -999;
        /** Height of the event on the calendar */
        this.overflow_height = 0;
        this.view = (e) => this._state.setEvent(e);
        this.ui_options = this._state.ui_options;
    }
    get time() {
        const date = new Date(this.event.date);
        return (Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(date, 'h:mm a') + ' - ' + Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addMinutes"])(date, this.event.duration), 'h:mm a'));
    }
    get type() {
        return this.event.has_visitors
            ? 'external'
            : this.event.status === 'cancelled'
                ? 'cancelled'
                : 'internal';
    }
    ngOnChanges(changes) {
        if (changes.event && this.event) {
            const start = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(new Date(this.event.date));
            const diff = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["differenceInMinutes"])(new Date(this.event.date), start);
            this.top = diff / (24 * 60);
            this.height = this.event.duration / (24 * 60);
            this.overflow_top = (diff - this.event.setup) / (24 * 60);
            this.overflow_height =
                (this.event.duration + this.event.setup + this.event.breakdown) / (24 * 60);
        }
    }
}
DayviewEventComponent.ɵfac = function DayviewEventComponent_Factory(t) { return new (t || DayviewEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_events_state_service__WEBPACK_IMPORTED_MODULE_3__["EventsStateService"])); };
DayviewEventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DayviewEventComponent, selectors: [["dayview-event"]], inputs: { event: "event" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 7, consts: [[3, "class", "top", "height", 4, "ngIf"], ["name", "event", 3, "class", "top", "height", "click", 4, "ngIf"], ["class", "catering-block absolute rounded overflow-hidden flex w-full shadow p-2", 3, "top", "height", 4, "ngIf"], ["name", "event", 3, "click"], [1, "info"], ["class", "info flex items-center", 4, "ngIf"], [1, "info", "flex", "items-center"], [1, "mx-2", 3, "icon"], [1, "catering-block", "absolute", "rounded", "overflow-hidden", "flex", "w-full", "shadow", "p-2"], [3, "icon"], [1, "text"]], template: function DayviewEventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DayviewEventComponent_div_0_Template, 1, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DayviewEventComponent_div_2_Template, 6, 10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DayviewEventComponent_div_3_Template, 5, 11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    } if (rf & 2) {
        var tmp_0_0 = null;
        var tmp_2_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx.ui_options)) == null ? null : tmp_0_0.show_overflow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.event);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, ctx.ui_options)) == null ? null : tmp_2_0.show_cleaning);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__["IconComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n                border-right: 1px solid rgba(0, 0, 0, 0.1);\n            }\n\n            [name='event'][_ngcontent-%COMP%] {\n                background-color: #ccc;\n                width: 12rem;\n                z-index: 100;\n                transition: box-shadow 200ms;\n            }\n\n            [name='event'][_ngcontent-%COMP%]:hover {\n                box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),\n                    0 2px 1px -1px rgba(0, 0, 0, 0.12);\n                cursor: pointer;\n                z-index: 999;\n            }\n\n            .overflow-block[_ngcontent-%COMP%] {\n                opacity: .3;\n                width: 12rem;\n            }\n\n            .catering-block[_ngcontent-%COMP%] {\n                background-color: #fff;\n                width: 12rem;\n                z-index: 999;\n            }\n\n            .internal[_ngcontent-%COMP%] {\n                background-color: #00a4c7;\n                color: #fff;\n            }\n\n            .icon[_ngcontent-%COMP%] {\n                height: 1.5em;\n                width: 1.5em;\n                color: #ffbf1f;\n                background-color: #f0f0f0;\n            }\n\n            .icon.done[_ngcontent-%COMP%] {\n                color: #21a453;\n            }\n\n            .external[_ngcontent-%COMP%] {\n                background-color: #d85be0;\n                color: #fff;\n            }\n\n            .cancelled[_ngcontent-%COMP%] {\n                background-color: #eee;\n            }\n\n            .info[_ngcontent-%COMP%]:first-child {\n                padding: 0.75em 0.5em;\n            }\n\n            .info[_ngcontent-%COMP%] {\n                padding: 0.25em 0.5em;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DayviewEventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dayview-event',
                template: `
        <div
            *ngIf="(ui_options | async)?.show_overflow"
            [class]="'overflow-block absolute rounded overflow-hidden w-full ' + type"
            [style.top]="overflow_top * 100 + '%'"
            [style.height]="overflow_height * 100 + '%'"
        ></div>
        <div
            name="event"
            [class]="'absolute rounded overflow-hidden text-sm ' + type"
            *ngIf="event"
            [style.top]="top * 100 + '%'"
            [style.height]="height * 100 + '%'"
            (click)="view(event)"
        >
            <div class="info">{{ event.organiser?.name }}</div>
            <div class="info flex items-center" *ngIf="event.duration > 30">
                <app-icon class="mx-2" [icon]="{ class: 'material-icons', content: 'title' }"></app-icon>
                {{ event.title }}
            </div>
            <div class="info flex items-center" *ngIf="event.duration > 60">
                <app-icon class="mx-2" [icon]="{ class: 'material-icons', content: 'schedule' }"></app-icon>
                {{ time }}
            </div>
            <div class="info flex items-center" *ngIf="event.duration > 90">
                <app-icon class="mx-2" [icon]="{ class: 'material-icons', content: 'user' }"></app-icon>
                {{ event.attendees.length }} Attendee{{ event.attendees.length === 1 ? '' : 's' }}
            </div>
        </div>
        <div
            *ngIf="(ui_options | async)?.show_cleaning"
            class="catering-block absolute rounded overflow-hidden flex w-full shadow p-2"
            [style.top]="overflow_top * 100 + '%'"
            [style.height]="overflow_height * 100 + '%'"
        >
            <div [class]="'icon flex mr-2 text-3xl rounded ' + event.cleaning_status">
                <app-icon [icon]="{ class: 'material-icons', content: event.cleaning_status === 'done' ? 'done' : 'warning' }"></app-icon>
            </div>
            <div class="text">{{ event.cleaning_status === 'done' ? 'Finished' : 'Scheduled to' }} clean at {{ event.cleaning_time }}</div>
        </div>
    `,
                styles: [
                    `
            :host {
                border-right: 1px solid rgba(0, 0, 0, 0.1);
            }

            [name='event'] {
                background-color: #ccc;
                width: 12rem;
                z-index: 100;
                transition: box-shadow 200ms;
            }

            [name='event']:hover {
                box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
                    0 2px 1px -1px rgba(0, 0, 0, 0.12);
                cursor: pointer;
                z-index: 999;
            }

            .overflow-block {
                opacity: .3;
                width: 12rem;
            }

            .catering-block {
                background-color: #fff;
                width: 12rem;
                z-index: 999;
            }

            .internal {
                background-color: #00a4c7;
                color: #fff;
            }

            .icon {
                height: 1.5em;
                width: 1.5em;
                color: #ffbf1f;
                background-color: #f0f0f0;
            }

            .icon.done {
                color: #21a453;
            }

            .external {
                background-color: #d85be0;
                color: #fff;
            }

            .cancelled {
                background-color: #eee;
            }

            .info:first-child {
                padding: 0.75em 0.5em;
            }

            .info {
                padding: 0.25em 0.5em;
            }
        `,
                ],
            }]
    }], function () { return [{ type: _events_state_service__WEBPACK_IMPORTED_MODULE_3__["EventsStateService"] }]; }, { event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=day-view-day-view-module.js.map