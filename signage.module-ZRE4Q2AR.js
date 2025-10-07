import {
  CdkDrag,
  CdkDragHandle,
  CdkDragPlaceholder,
  CdkDropList,
  DragDropModule,
  moveItemInArray
} from "./chunk-S73LSFOX.js";
import {
  MatTabLink,
  MatTabNav,
  MatTabNavPanel,
  MatTabsModule
} from "./chunk-NHEPNTM5.js";
import {
  ActivatedRoute,
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AsyncHandler,
  AsyncPipe,
  AuthenticatedImageDirective,
  BehaviorSubject,
  CommonModule,
  ComponentsModule,
  DateFieldComponent,
  DefaultValueAccessor,
  EventEmitter,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  IconComponent,
  LowerCasePipe,
  MAT_DIALOG_DATA,
  MatCheckbox,
  MatDialog,
  MatDialogClose,
  MatDialogRef,
  MatError,
  MatFormField,
  MatInput,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatOption,
  MatProgressSpinner,
  MatRipple,
  MatSelect,
  MatSlider,
  MatSliderThumb,
  MatTooltip,
  MediaAnimation,
  MediaDurationPipe,
  NavigationEnd,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModel,
  NgTemplateOutlet,
  OrganisationService,
  PlaceSystem,
  RequiredValidator,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SettingsService,
  SignageMedia,
  SignagePlaylist,
  UIModule,
  Validators,
  ZonePipe,
  __async,
  __spreadProps,
  __spreadValues,
  addSignageMedia,
  addSignagePlaylist,
  addSystem,
  addYears,
  catchError,
  combineLatest,
  debounceTime,
  endOfDay,
  filter,
  first,
  getUnixTime,
  listSignagePlaylistMedia,
  listSystemTriggers,
  listZoneTriggers,
  map,
  notifyError,
  notifySuccess,
  of,
  openConfirmModal,
  querySignageMedia,
  querySignagePlaylists,
  querySystems,
  queryZones,
  removeSignageMedia,
  removeSignagePlaylist,
  removeSystem,
  shareReplay,
  startOfDay,
  startOfMinute,
  startWith,
  switchMap,
  take,
  tap,
  unique,
  updateSignageMedia,
  updateSignagePlaylist,
  updateSignagePlaylistMedia,
  updateSystem,
  updateTrigger,
  updateZone,
  uploadFile,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-5OFBRWDR.js";

// apps/concierge/src/app/signage/signage-media-preview-modal.component.ts
function SignageMediaPreviewModalComponent_main_6_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("source", ctx_r0.resource.toString());
  }
}
function SignageMediaPreviewModalComponent_main_6_video_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "video", 11);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("source", ctx_r0.resource.toString());
  }
}
function SignageMediaPreviewModalComponent_main_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 6)(1, "div", 7);
    \u0275\u0275template(2, SignageMediaPreviewModalComponent_main_6_img_2_Template, 1, 1, "img", 8)(3, SignageMediaPreviewModalComponent_main_6_video_3_Template, 1, 1, "video", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.type === "image");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.type === "video");
  }
}
function SignageMediaPreviewModalComponent_footer_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 12)(1, "button", 13);
    \u0275\u0275listener("click", function SignageMediaPreviewModalComponent_footer_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save.emit());
    });
    \u0275\u0275text(2, " Save Media ");
    \u0275\u0275elementEnd()();
  }
}
function SignageMediaPreviewModalComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 14);
    \u0275\u0275element(1, "mat-spinner", 15);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.loading);
  }
}
var _SignageMediaPreviewModalComponent = class _SignageMediaPreviewModalComponent {
  constructor(_data) {
    this._data = _data;
    this.save = new EventEmitter();
    this.loading = "";
    this.resource = this._data.url;
    this.type = this._data.type;
    this.name = this._data.name;
    this.file = this._data.file;
    this.can_save = this._data.save !== false;
  }
};
_SignageMediaPreviewModalComponent.\u0275fac = function SignageMediaPreviewModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignageMediaPreviewModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA));
};
_SignageMediaPreviewModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageMediaPreviewModalComponent, selectors: [["signage-media-preview-modal"]], outputs: { save: "save" }, decls: 10, vars: 4, consts: [["load_state", ""], [1, "flex", "items-center", "justify-between", "p-2", "border-b", "border-base-300"], [1, "px-2"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], ["class", "bg-base-200", 4, "ngIf", "ngIfElse"], ["class", "p-2 flex items-center justify-end space-x-2 border-t border-base-300", 4, "ngIf"], [1, "bg-base-200"], [1, "max-w-[80vw]", "max-h-[65vh]", "w-[80vw]", "h-[65vh]", "flex", "items-center", "justify-center"], ["class", "w-full h-full object-contain object-center", "auth", "", 3, "source", 4, "ngIf"], ["class", "w-full h-full object-contain object-center", "auth", "", "autoplay", "", "controls", "", 3, "source", 4, "ngIf"], ["auth", "", 1, "w-full", "h-full", "object-contain", "object-center", 3, "source"], ["auth", "", "autoplay", "", "controls", "", 1, "w-full", "h-full", "object-contain", "object-center", 3, "source"], [1, "p-2", "flex", "items-center", "justify-end", "space-x-2", "border-t", "border-base-300"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8", "w-[28rem]", "h-[20rem]", "max-w-[80vw]", "max-h-[65vh]"], [3, "diameter"]], template: function SignageMediaPreviewModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 1)(1, "h1", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 3)(4, "app-icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(6, SignageMediaPreviewModalComponent_main_6_Template, 4, 2, "main", 4)(7, SignageMediaPreviewModalComponent_footer_7_Template, 3, 0, "footer", 5)(8, SignageMediaPreviewModalComponent_ng_template_8_Template, 4, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const load_state_r3 = \u0275\u0275reference(9);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Preview - ", ctx.name, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.can_save && !ctx.loading);
  }
}, dependencies: [NgIf, MatProgressSpinner, MatDialogClose, MatRipple, IconComponent, AuthenticatedImageDirective] });
var SignageMediaPreviewModalComponent = _SignageMediaPreviewModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageMediaPreviewModalComponent, { className: "SignageMediaPreviewModalComponent", filePath: "apps/concierge/src/app/signage/signage-media-preview-modal.component.ts", lineNumber: 54 });
})();

// apps/concierge/src/app/signage/signage-playlist-modal.component.ts
var _c0 = ["search_input"];
function SignagePlaylistModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 6)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function SignagePlaylistModalComponent_main_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 7)(1, "label", 8);
    \u0275\u0275text(2, "Name");
    \u0275\u0275elementStart(3, "span", 9);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-form-field", 10);
    \u0275\u0275element(6, "input", 11);
    \u0275\u0275elementStart(7, "mat-error");
    \u0275\u0275text(8, "Name is required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 12)(10, "mat-checkbox", 13);
    \u0275\u0275text(11, "Enabled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-checkbox", 14);
    \u0275\u0275text(13, " Shuffle Playback ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 15)(15, "label", 16)(16, "div");
    \u0275\u0275text(17, "Default Play Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "app-icon", 17);
    \u0275\u0275text(19, " info ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 18);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "mediaDuration");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "mat-slider", 19);
    \u0275\u0275element(24, "input", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 21)(26, "div", 22)(27, "label", 23);
    \u0275\u0275text(28, "Orientation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-form-field", 10)(30, "mat-select", 24)(31, "mat-option", 25);
    \u0275\u0275text(32, " Unspecified ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "mat-option", 26);
    \u0275\u0275text(34, "Landscape");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-option", 27);
    \u0275\u0275text(36, "Portrait");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-option", 28);
    \u0275\u0275text(38, "Square");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "div", 22)(40, "label", 29);
    \u0275\u0275text(41, "Animation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "mat-form-field", 10)(43, "mat-select", 30)(44, "mat-option", 31);
    \u0275\u0275text(45, "Cut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "mat-option", 31);
    \u0275\u0275text(47, "Cross Fade");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "mat-option", 31);
    \u0275\u0275text(49, "Slide Top");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "mat-option", 31);
    \u0275\u0275text(51, "Slide Left");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "mat-option", 31);
    \u0275\u0275text(53, "Slide Right");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "mat-option", 31);
    \u0275\u0275text(55, "Slide Bottom");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(56, "label", 32);
    \u0275\u0275text(57, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "mat-form-field", 10);
    \u0275\u0275element(59, "textarea", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 34)(61, "div", 22)(62, "label", 35);
    \u0275\u0275text(63, "Valid From");
    \u0275\u0275elementEnd();
    \u0275\u0275element(64, "a-date-field", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 22)(66, "label", 37);
    \u0275\u0275text(67, "Valid Until");
    \u0275\u0275elementEnd();
    \u0275\u0275element(68, "a-date-field", 38);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 10, ctx_r0.form.value.default_duration / 1e3), " ");
    \u0275\u0275advance(23);
    \u0275\u0275property("value", 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 3);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 4);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 5);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 6);
    \u0275\u0275advance(14);
    \u0275\u0275property("from", ctx_r0.form.value.valid_from)("disabled", !ctx_r0.form.value.valid_from);
  }
}
function SignagePlaylistModalComponent_footer_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 39)(1, "button", 40);
    \u0275\u0275listener("click", function SignagePlaylistModalComponent_footer_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.savePlaylist());
    });
    \u0275\u0275text(2, " Save Playlist ");
    \u0275\u0275elementEnd()();
  }
}
function SignagePlaylistModalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 41);
    \u0275\u0275element(1, "mat-spinner", 42);
    \u0275\u0275elementStart(2, "p", 43);
    \u0275\u0275text(3, "Saving Playlist...");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
  }
}
var _SignagePlaylistModalComponent = class _SignagePlaylistModalComponent {
  constructor(_data = {}, _state, _dialog, _dialog_ref) {
    this._data = _data;
    this._state = _state;
    this._dialog = _dialog;
    this._dialog_ref = _dialog_ref;
    this.loading = false;
    this.playlist = this._data;
    this.media = this._state.media;
    this.search = new BehaviorSubject("");
    this.form = new FormGroup({
      id: new FormControl(this.playlist.id || ""),
      name: new FormControl(this.playlist.name || "", [Validators.required]),
      description: new FormControl(this.playlist.description || ""),
      default_animation: new FormControl(this.playlist.default_animation || MediaAnimation.Cut),
      orientation: new FormControl(this.playlist.orientation || "unspecified"),
      enabled: new FormControl(this.playlist.enabled),
      random: new FormControl(this.playlist.random),
      default_duration: new FormControl(Math.max(this.playlist.default_duration || 15 * 1e3, 5e3)),
      valid_from: new FormControl(this.playlist.valid_from * 1e3),
      valid_until: new FormControl(this.playlist.valid_until * 1e3)
    });
  }
  savePlaylist() {
    return __async(this, null, function* () {
      this.form.markAllAsTouched();
      this.form.updateValueAndValidity();
      if (this.form.invalid)
        return;
      this.loading = true;
      const form_value = this.form.getRawValue();
      const result = yield this._state.savePlaylist(__spreadProps(__spreadValues({}, form_value), {
        valid_from: getUnixTime(form_value.valid_from),
        valid_until: getUnixTime(form_value.valid_until)
      })).catch((_) => {
        notifyError("Error saving playlist");
        this.loading = false;
        throw _;
      });
      this._dialog_ref.close(result);
    });
  }
};
_SignagePlaylistModalComponent.\u0275fac = function SignagePlaylistModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignagePlaylistModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(SignageStateService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(MatDialogRef));
};
_SignagePlaylistModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignagePlaylistModalComponent, selectors: [["signage-playlist-modal"]], viewQuery: function SignagePlaylistModalComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.search_input = _t.first);
  }
}, decls: 8, vars: 5, consts: [["load_state", ""], [1, "flex", "items-center", "justify-between", "border-b", "border-base-300"], [1, "p-2", "font-medium", "text-xl"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-4 flex flex-col w-[32rem] max-w-[calc(100vw-2rem)]", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["class", "p-4 flex items-center justify-end space-x-2 border-t border-base-300", 4, "ngIf"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "p-4", "flex", "flex-col", "w-[32rem]", "max-w-[calc(100vw-2rem)]", 3, "formGroup"], ["for", "name"], ["required", ""], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "name", "placeholder", "Name", "formControlName", "name"], [1, "flex", "items-center", "space-x-8", "mb-4"], ["formControlName", "enabled"], ["formControlName", "random"], [1, "flex", "items-center", "space-x-4"], ["for", "default-duration", 1, "w-auto", "min-w-0", "m-0", "space-x-2", "flex", "items-center"], ["matTooltip", "Default length of time to hold images on screen", 1, "text-xl"], [1, "text-xs", "font-mono"], ["min", "5000", "max", "300000", "step", "1000"], ["name", "default-duration", "matSliderThumb", "", "formControlName", "default_duration"], [1, "flex", "space-x-2"], [1, "flex-1"], ["for", "orientation"], ["name", "orientation", "formControlName", "orientation", "placeholder", "Unspecified"], ["value", "unspecified"], ["value", "landscape"], ["value", "portrait"], ["value", "square"], ["for", "animation"], ["name", "animation", "formControlName", "default_animation", "placeholder", "Playlist Default"], [3, "value"], ["for", "description"], ["matInput", "", "name", "description", "placeholder", "Description", "formControlName", "description", 1, "min-h-32"], [1, "flex", "space-x-4"], ["for", "valid-from"], ["name", "valid-from", "formControlName", "valid_from"], ["for", "valid-until"], ["name", "valid-until", "formControlName", "valid_until", 3, "from", "disabled"], [1, "p-4", "flex", "items-center", "justify-end", "space-x-2", "border-t", "border-base-300"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8"], [3, "diameter"], [1, "mt-4"]], template: function SignagePlaylistModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 1)(1, "h1", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SignagePlaylistModalComponent_button_3_Template, 3, 0, "button", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SignagePlaylistModalComponent_main_4_Template, 69, 12, "main", 4)(5, SignagePlaylistModalComponent_footer_5_Template, 3, 0, "footer", 5)(6, SignagePlaylistModalComponent_ng_template_6_Template, 4, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const load_state_r3 = \u0275\u0275reference(7);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.playlist.id ? "Edit" : "New", " Playlist ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
  }
}, dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MatFormField, MatError, MatInput, MatSelect, MatOption, MatCheckbox, MatTooltip, MatProgressSpinner, MatDialogClose, MatRipple, FormGroupDirective, FormControlName, DateFieldComponent, IconComponent, MatSlider, MatSliderThumb, MediaDurationPipe] });
var SignagePlaylistModalComponent = _SignagePlaylistModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignagePlaylistModalComponent, { className: "SignagePlaylistModalComponent", filePath: "apps/concierge/src/app/signage/signage-playlist-modal.component.ts", lineNumber: 155 });
})();

// apps/concierge/src/app/signage/signage-media-modal.component.ts
function SignageMediaModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 6)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function SignageMediaModalComponent_main_4_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "label", 33);
    \u0275\u0275text(2, "Start Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "mediaDuration");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-slider", 34);
    \u0275\u0275element(7, "input", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 2, ctx_r1.form.value.start_time / 1e3, true), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("max", (ctx_r1.item.video_length || 3e5) - 1e3);
  }
}
function SignageMediaModalComponent_main_4_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "mediaDuration");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r1.form.value.play_time / 1e3, true), " ");
  }
}
function SignageMediaModalComponent_main_4_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "mediaDuration");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Default (", ctx_r1.item.video_length ? \u0275\u0275pipeBind1(2, 1, ctx_r1.item.video_length / 1e3) : "", ") ");
  }
}
function SignageMediaModalComponent_main_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 7)(1, "div", 8)(2, "button", 9);
    \u0275\u0275listener("click", function SignageMediaModalComponent_main_4_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.preview());
    });
    \u0275\u0275element(3, "img", 10);
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "label", 12);
    \u0275\u0275text(7, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-form-field", 13);
    \u0275\u0275element(9, "input", 14);
    \u0275\u0275elementStart(10, "mat-error");
    \u0275\u0275text(11, "A name is required");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, SignageMediaModalComponent_main_4_Conditional_12_Template, 8, 5);
    \u0275\u0275elementStart(13, "div", 15)(14, "label", 16);
    \u0275\u0275text(15, " Play Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 17);
    \u0275\u0275template(17, SignageMediaModalComponent_main_4_Conditional_17_Template, 2, 4)(18, SignageMediaModalComponent_main_4_Conditional_18_Template, 3, 3, "span", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-slider", 19);
    \u0275\u0275element(20, "input", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "label", 21);
    \u0275\u0275text(22, "Animation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-form-field", 13)(24, "mat-select", 22)(25, "mat-option", 23);
    \u0275\u0275text(26, "Playlist Default");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "mat-option", 23);
    \u0275\u0275text(28, "Cut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-option", 23);
    \u0275\u0275text(30, "Cross Fade");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "mat-option", 23);
    \u0275\u0275text(32, "Slide Top");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "mat-option", 23);
    \u0275\u0275text(34, "Slide Left");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-option", 23);
    \u0275\u0275text(36, "Slide Right");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-option", 23);
    \u0275\u0275text(38, "Slide Bottom");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "label", 24);
    \u0275\u0275text(40, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "mat-form-field", 25);
    \u0275\u0275element(42, "textarea", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 27)(44, "div", 28)(45, "label", 29);
    \u0275\u0275text(46, "Valid From");
    \u0275\u0275elementEnd();
    \u0275\u0275element(47, "a-date-field", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 28)(49, "label", 31);
    \u0275\u0275text(50, "Valid Until");
    \u0275\u0275elementEnd();
    \u0275\u0275element(51, "a-date-field", 32);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(3);
    \u0275\u0275property("source", ctx_r1.thumbnail || ctx_r1.url);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.media_type, " ");
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.media_type === "video" ? 12 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.form.value.play_time ? 17 : 18);
    \u0275\u0275advance(2);
    \u0275\u0275property("min", ctx_r1.form.value.start_time)("max", ctx_r1.item.video_length || 3e5);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 3);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 4);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 5);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 6);
    \u0275\u0275advance(14);
    \u0275\u0275property("from", ctx_r1.form.value.valid_from);
  }
}
function SignageMediaModalComponent_footer_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 36)(1, "button", 37);
    \u0275\u0275listener("click", function SignageMediaModalComponent_footer_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveMedia());
    });
    \u0275\u0275text(2, " Save ");
    \u0275\u0275elementEnd()();
  }
}
function SignageMediaModalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 38);
    \u0275\u0275element(1, "mat-spinner", 39);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Saving media item...");
    \u0275\u0275elementEnd()();
  }
}
var _SignageMediaModalComponent = class _SignageMediaModalComponent {
  get media_type() {
    if (!this.file)
      return this.item.media_type;
    return (this.file.type.includes("video") ? "video" : this.file.type.includes("image") ? "image" : "") || this.item.media_type;
  }
  get url() {
    if (this.item.id)
      return this.item.media_url;
    if (this._file_url)
      return this._file_url;
    this._file_url = URL.createObjectURL(this.file);
    return this._file_url;
  }
  constructor(_data, _dialog_ref) {
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this.loading = false;
    this.item = this._data.media;
    this.file = this._data.file;
    this.thumbnail = this._data.file_thumbnail || this._data.media.thumbnail_url;
    this.form = new FormGroup({
      name: new FormControl("", [Validators.required]),
      description: new FormControl(""),
      animation: new FormControl(MediaAnimation.Default),
      start_time: new FormControl(0),
      play_time: new FormControl(null),
      valid_from: new FormControl(startOfDay(Date.now()).valueOf()),
      valid_until: new FormControl(addYears(endOfDay(Date.now()), 10).valueOf())
    });
    this.preview = () => this._data.preview({
      media_url: this.url,
      media_type: this.media_type,
      name: this.form.value.name
    });
    this.form.patchValue(__spreadProps(__spreadValues({}, this._data.media), {
      valid_from: this._data.media.valid_from * 1e3,
      valid_until: this._data.media.valid_until * 1e3
    }));
    if (this._data.file) {
      this.form.patchValue({
        name: this._data.file.name
      });
    }
    if (this._data.file_metadata) {
      this.item.video_length = Math.floor(this._data.file_metadata[1] * 1e3);
    }
  }
  ngOnDestroy() {
    if (this._file_url)
      URL.revokeObjectURL(this._file_url);
  }
  saveMedia() {
    return __async(this, null, function* () {
      this.form.markAllAsTouched();
      this.form.updateValueAndValidity();
      if (!this.form.valid)
        return;
      this.loading = true;
      this._dialog_ref.disableClose = true;
      const form_value = this.form.getRawValue();
      const new_media = __spreadProps(__spreadValues(__spreadValues({}, this.item), form_value), {
        valid_from: getUnixTime(new Date(form_value.valid_from)),
        valid_until: getUnixTime(form_value.valid_until)
      });
      const onError = (e) => {
        this._dialog_ref.disableClose = false;
        this.loading = false;
        throw e;
      };
      if (this.item.id) {
        yield updateSignageMedia(this.item.id, new_media).toPromise().catch(onError);
      } else {
        yield this._data.onAdd(this.file, new_media).catch(onError);
      }
      this._dialog_ref.disableClose = false;
      this._dialog_ref.close();
      notifySuccess("Successfully saved media item.");
    });
  }
};
_SignageMediaModalComponent.\u0275fac = function SignageMediaModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignageMediaModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
};
_SignageMediaModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageMediaModalComponent, selectors: [["signage-media-modal"]], decls: 8, vars: 5, consts: [["load_state", ""], [1, "flex", "items-center", "justify-between", "border-b", "border-base-300"], [1, "p-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-4 max-w-[calc(100vw-2rem)] w-[32rem] max-h-[65vh] overflow-auto", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["class", "flex justify-end p-4 border-t border-base-300", 4, "ngIf"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "p-4", "max-w-[calc(100vw-2rem)]", "w-[32rem]", "max-h-[65vh]", "overflow-auto", 3, "formGroup"], [1, "flex", "flex-col"], ["matRipple", "", 1, "relative", "w-full", "h-48", "mx-auto", "bg-base-300", "rounded-xl", "overflow-hidden", "mb-4", 3, "click"], ["auth", "", 1, "h-full", "w-full", "object-contain", "object-center", 3, "source"], [1, "absolute", "top-2", "left-2", "px-2", "py-1", "rounded", "text-xs", "bg-base-400", "capitalize"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "name", "name", "formControlName", "name", "placeholder", "Media Name"], [1, "flex", "items-center", "space-x-4"], ["for", "play-time", 1, "w-auto", "min-w-0", "m-0"], [1, "text-xs", "font-mono"], [1, "opacity-30"], ["step", "100", 3, "min", "max"], ["name", "play-time", "matSliderThumb", "", "formControlName", "play_time"], ["for", "animation"], ["name", "animation", "formControlName", "animation", "placeholder", "Playlist Default"], [3, "value"], ["for", "description"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "description", "placeholder", "Description", "formControlName", "description", 1, "min-h-32"], [1, "flex", "space-x-4"], [1, "flex-1"], ["for", "valid-from"], ["name", "valid-from", "formControlName", "valid_from"], ["for", "valid-until"], ["name", "valid-until", "formControlName", "valid_until", 3, "from"], ["for", "start-time", 1, "w-auto", "min-w-0", "m-0"], ["min", "0", "step", "100", 3, "max"], ["name", "start-time", "matSliderThumb", "", "formControlName", "start_time"], [1, "flex", "justify-end", "p-4", "border-t", "border-base-300"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8", "max-w-[calc(100vw-2rem)]", "min-h-64", "w-[32rem]", "space-y-4"], ["diameter", "32"]], template: function SignageMediaModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 1)(1, "h2", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SignageMediaModalComponent_button_3_Template, 3, 0, "button", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SignageMediaModalComponent_main_4_Template, 52, 15, "main", 4)(5, SignageMediaModalComponent_footer_5_Template, 3, 0, "footer", 5)(6, SignageMediaModalComponent_ng_template_6_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const load_state_r4 = \u0275\u0275reference(7);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.item.id ? "Edit" : "New", " Media Item ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
  }
}, dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MatFormField, MatError, MatInput, MatSelect, MatOption, MatProgressSpinner, MatDialogClose, MatRipple, FormGroupDirective, FormControlName, DateFieldComponent, IconComponent, AuthenticatedImageDirective, MatSlider, MatSliderThumb, MediaDurationPipe] });
var SignageMediaModalComponent = _SignageMediaModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageMediaModalComponent, { className: "SignageMediaModalComponent", filePath: "apps/concierge/src/app/signage/signage-media-modal.component.ts", lineNumber: 175 });
})();

// apps/concierge/src/app/signage/signage-display-modal.component.ts
function SignageDisplayModalComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 6)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function SignageDisplayModalComponent_main_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 7)(1, "div", 8)(2, "label", 9);
    \u0275\u0275text(3, "Name");
    \u0275\u0275elementStart(4, "span", 10);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 11);
    \u0275\u0275element(7, "input", 12);
    \u0275\u0275elementStart(8, "mat-error");
    \u0275\u0275text(9, "Name is required");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 8)(11, "label", 13);
    \u0275\u0275text(12, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-form-field", 11);
    \u0275\u0275element(14, "textarea", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 8)(16, "label", 15);
    \u0275\u0275text(17, "Orientation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-form-field", 11)(19, "mat-select", 16)(20, "mat-option", 17);
    \u0275\u0275text(21, " Unspecified ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-option", 18);
    \u0275\u0275text(23, "Landscape");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-option", 19);
    \u0275\u0275text(25, "Portrait");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-option", 20);
    \u0275\u0275text(27, "Square");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form);
  }
}
function SignageDisplayModalComponent_footer_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 21)(1, "button", 22);
    \u0275\u0275listener("click", function SignageDisplayModalComponent_footer_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275text(2, "Save");
    \u0275\u0275elementEnd()();
  }
}
function SignageDisplayModalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 23);
    \u0275\u0275element(1, "mat-spinner", 24);
    \u0275\u0275elementStart(2, "p", 25);
    \u0275\u0275text(3, "Saving display...");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
  }
}
var _SignageDisplayModalComponent = class _SignageDisplayModalComponent {
  constructor(_data, _dialog_ref, _org) {
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this._org = _org;
    this.loading = false;
    this.display = this._data.display;
    this.form = new FormGroup({
      id: new FormControl(this._data.display?.id || ""),
      name: new FormControl(this._data.display?.display_name || "", [
        Validators.required
      ]),
      description: new FormControl(this._data.display?.description || ""),
      orientation: new FormControl(this._data.display?.orientation || "unspecified")
    });
  }
  save() {
    return __async(this, null, function* () {
      this.form.markAllAsTouched();
      this.form.updateValueAndValidity();
      if (this.form.invalid)
        return;
      this.loading = true;
      const form_value = this.form.getRawValue();
      const new_display = new PlaceSystem(__spreadProps(__spreadValues({}, form_value), {
        name: `SIGNAGE ${form_value.name}`,
        display_name: form_value.name,
        signage: true,
        zones: unique([
          this._org.organisation.id,
          this._org.region?.id,
          this._org.building?.id,
          ...this.display.zones
        ].filter((_) => !!_))
      }));
      const method = this.display.id ? updateSystem(this.display.id, new_display) : addSystem(new_display);
      const result = yield method.toPromise();
      this._dialog_ref.close(result);
    });
  }
};
_SignageDisplayModalComponent.\u0275fac = function SignageDisplayModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignageDisplayModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(OrganisationService));
};
_SignageDisplayModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageDisplayModalComponent, selectors: [["signage-display-modal"]], decls: 8, vars: 5, consts: [["load_state", ""], [1, "flex", "items-center", "justify-between", "border-b", "border-base-300", "p-2"], [1, "p-2", "font-medium", "text-xl"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-4 flex flex-col w-[32rem] max-w-[calc(100vw-2rem)]", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["class", "flex justify-end p-4 border-t border-base-200", 4, "ngIf"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "p-4", "flex", "flex-col", "w-[32rem]", "max-w-[calc(100vw-2rem)]", 3, "formGroup"], [1, "flex", "flex-col"], ["for", "name"], ["required", ""], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "name", "placeholder", "Name", "formControlName", "name", "required", ""], ["for", "description"], ["matInput", "", "name", "description", "placeholder", "Description", "formControlName", "description", 1, "min-h-32"], ["for", "orientation"], ["name", "orientation", "formControlName", "orientation", "placeholder", "Unspecified"], ["value", "unspecified"], ["value", "landscape"], ["value", "portrait"], ["value", "square"], [1, "flex", "justify-end", "p-4", "border-t", "border-base-200"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8"], [3, "diameter"], [1, "mt-4"]], template: function SignageDisplayModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 1)(1, "h1", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SignageDisplayModalComponent_button_3_Template, 3, 0, "button", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SignageDisplayModalComponent_main_4_Template, 28, 1, "main", 4)(5, SignageDisplayModalComponent_footer_5_Template, 3, 0, "footer", 5)(6, SignageDisplayModalComponent_ng_template_6_Template, 4, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const load_state_r3 = \u0275\u0275reference(7);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.display.id ? "Edit" : "New", " Display ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
  }
}, dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MatFormField, MatError, MatInput, MatSelect, MatOption, MatProgressSpinner, MatDialogClose, MatRipple, FormGroupDirective, FormControlName, IconComponent] });
var SignageDisplayModalComponent = _SignageDisplayModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageDisplayModalComponent, { className: "SignageDisplayModalComponent", filePath: "apps/concierge/src/app/signage/signage-display-modal.component.ts", lineNumber: 84 });
})();

// apps/concierge/src/app/signage/signage-state.service.ts
function dataURLtoFile(dataURL, filename) {
  const [prefix, data] = dataURL.split(",");
  const mimeType = prefix.split(":")[1].split(";")[0];
  const byteString = atob(data);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const uint8Array = new Uint8Array(arrayBuffer);
  for (let i = 0; i < byteString.length; i++) {
    uint8Array[i] = byteString.charCodeAt(i);
  }
  return new File([uint8Array], filename, { type: mimeType });
}
var _SignageStateService = class _SignageStateService extends AsyncHandler {
  changed() {
    this._change.next(Date.now());
  }
  constructor(_org, _dialog, _settings) {
    super();
    this._org = _org;
    this._dialog = _dialog;
    this._settings = _settings;
    this._loading = new BehaviorSubject(false);
    this._change = new BehaviorSubject(0);
    this._active_upload = new BehaviorSubject(null);
    this.loading = this._loading.asObservable();
    this.has_changed = this._change.asObservable();
    this.media = combineLatest([
      this._org.active_building,
      this._change
    ]).pipe(filter(([_]) => !!_?.id), debounceTime(300), switchMap(([bld]) => querySignageMedia({ limit: 2500 })), map((_) => _.data.sort((a, b) => b.created_at - a.created_at)), shareReplay(1));
    this.playlists = combineLatest([
      this._org.active_building,
      this._change
    ]).pipe(filter(([_]) => !!_?.id), debounceTime(300), switchMap(() => querySignagePlaylists({ limit: 500 })), map((_) => (_.data || []).sort((a, b) => a.name.localeCompare(b.name))), shareReplay(1));
    this.displays = combineLatest([
      this._org.active_region,
      this._org.active_building,
      this._change
    ]).pipe(filter(([region, bld]) => !!bld?.id), switchMap(([region, bld]) => querySystems({
      zone_id: (this._settings.get("app.use_region") ? region?.id : "") || bld?.id,
      limit: 500,
      signage: true
    }).pipe(map((_) => (_.data || []).sort((a, b) => (a.display_name || a.name).localeCompare(b.display_name || b.name)).filter((_2) => _2.signage)))), shareReplay(1));
    this.zones = combineLatest([
      this._org.active_building,
      this._change
    ]).pipe(switchMap(([bld]) => queryZones({
      limit: 250
    }).pipe(catchError(() => of({ data: [] })))), map((_) => (_.data || []).sort((a, b) => (a.display_name || a.name).localeCompare(b.display_name || b.name))));
  }
  editPlaylist(playlist = new SignagePlaylist({})) {
    return new Promise((resolve) => {
      const ref = this._dialog.open(SignagePlaylistModalComponent, {
        data: playlist
      });
      ref.afterClosed().subscribe((result) => {
        this.timeout("changed", () => this._change.next(Date.now()));
        resolve(result);
      });
    });
  }
  editMedia(media = new SignageMedia({}), file, playlist_id = "") {
    return new Promise((resolve) => __async(this, null, function* () {
      const ref = this._dialog.open(SignageMediaModalComponent, {
        data: {
          media,
          file,
          file_metadata: file ? yield this._getMediaMetadata(file) : [media.orientation === "landscape", 0],
          file_thumbnail: file ? yield this._generateThumbnail(file, 1024, 720) : "",
          playlist_id,
          onAdd: (f, m) => this.addMedia(f, m),
          preview: (item) => this.previewMedia(item)
        }
      });
      ref.afterClosed().subscribe((result) => {
        this.timeout("changed", () => this._change.next(Date.now()));
        resolve(result);
      });
    }));
  }
  editDisplay() {
    return __async(this, arguments, function* (display = new PlaceSystem({})) {
      console.log("Edit Display:", display);
      const ref = this._dialog.open(SignageDisplayModalComponent, {
        data: { display }
      });
      const result = yield ref.afterClosed().toPromise();
      this.timeout("changed", () => this._change.next(Date.now()));
      return result;
    });
  }
  removeDisplay(display) {
    return __async(this, null, function* () {
      const result = yield openConfirmModal({
        title: `Remove Display`,
        content: `
                Are you sure you wish to remove the display "<strong>${display.display_name}</strong>"?
                `,
        icon: { content: "delete" }
      }, this._dialog);
      if (result.reason !== "done")
        return;
      result.loading("Removing display...");
      if (display.map_id || display.email || display.module_list.length > 0) {
        yield updateSystem(display.id, {
          signage: false
        }).toPromise();
      } else {
        yield removeSystem(display.id).toPromise();
      }
      this._change.next(Date.now());
      result.close();
    });
  }
  savePlaylist(playlist) {
    return __async(this, null, function* () {
      const call = playlist.id ? updateSignagePlaylist(playlist.id, playlist) : addSignagePlaylist(playlist);
      const new_playlist = yield call.toPromise();
      notifySuccess(`Successfully saved playlist.`);
      this._change.next(Date.now());
    });
  }
  removePlaylist(playlist) {
    return __async(this, null, function* () {
      if (!playlist?.id)
        return;
      const result = yield openConfirmModal({
        title: `Remove Playlist`,
        content: `
            Are you sure you wish to remove the playlist "<strong>${playlist.name}</strong>"?<br/><br/>`,
        icon: { content: "delete" }
      }, this._dialog);
      if (result.reason !== "done")
        return;
      yield removeSignagePlaylist(playlist.id).toPromise();
      notifySuccess(`Successfully removed playlist.`);
      this._change.next(Date.now());
      result.close();
    });
  }
  updatePlaylistMedia(playlist_id, list) {
    return __async(this, null, function* () {
      yield updateSignagePlaylistMedia(playlist_id, list).toPromise();
      notifySuccess(`Successfully updated playlist media.`);
    });
  }
  getPlaylistMedia(playlist_id) {
    return listSignagePlaylistMedia(playlist_id).toPromise().then((_) => _.items);
  }
  previewMedia(item) {
    const ref = this._dialog.open(SignageMediaPreviewModalComponent, {
      data: {
        url: item.media_url,
        type: item.media_type,
        name: item.name,
        save: false
      }
    });
  }
  previewFileFromInput(event, playlist_id = "") {
    const element = event.target;
    if (!element?.files?.length)
      return;
    const files = element.files;
    const file = files[0];
    if (file && (file.type.includes("image") || file.type.includes("video"))) {
      this.editMedia(void 0, file, playlist_id);
    } else {
      notifyError("Invalid file type.");
    }
  }
  previewFileMedia(media, playlist_id = "") {
    const url = URL.createObjectURL(media);
    const type = media.type.includes("image") ? "image" : "video";
    const ref = this._dialog.open(SignageMediaPreviewModalComponent, {
      data: { url, type, name: media.name, save: true, file: media }
    });
    ref.afterClosed().subscribe(() => URL.revokeObjectURL(url));
    ref.componentInstance.save.subscribe(() => __async(this, null, function* () {
      ref.componentInstance.loading = "Saving...";
      const new_media = yield this.addMedia(media).catch((e) => {
        notifyError("Error saving media.");
        ref.componentInstance.loading = "";
        throw e;
      });
      if (playlist_id && new_media.id) {
        const media_list = yield listSignagePlaylistMedia(playlist_id).toPromise();
        const new_media_list = [...media_list.items, new_media.id];
        yield updateSignagePlaylistMedia(playlist_id, new_media_list).toPromise();
      }
      ref.close();
    }));
  }
  addMedia(_0) {
    return __async(this, arguments, function* (file, media_item = new SignageMedia({})) {
      const upload = (file2) => new Promise((resolve, reject) => {
        let state = null;
        let resolved = false;
        uploadFile(file2).subscribe((s) => {
          state = s;
          if (s.link) {
            resolved = true;
            resolve({ id: s.upload.id, link: s.link });
          }
        }, reject, () => !resolved ? resolve(state) : null);
      });
      const [is_landscape, _] = yield this._getMediaMetadata(file);
      const thumbnail_image = yield this._generateThumbnail(file, 1280, 720).catch((_2) => null);
      const media = yield upload(file);
      let thumbnail = null;
      if (thumbnail_image) {
        thumbnail = yield upload(dataURLtoFile(thumbnail_image, `thumb+${file.name}`));
      }
      const data = __spreadValues({}, new SignageMedia(__spreadProps(__spreadValues({}, media_item), {
        name: media_item.name || file.name,
        media_id: media.id,
        media_uri: media.link,
        media_type: file.type.includes("image") ? "image" : "video",
        orientation: is_landscape ? "landscape" : "portrait",
        thumbnail_id: thumbnail.id
      })));
      for (const key in data) {
        if (!data[key])
          delete data[key];
      }
      const result = yield addSignageMedia(data).toPromise();
      this._active_upload.next(null);
      this._change.next(Date.now());
      return result;
    });
  }
  updateMedia(item) {
    return __async(this, null, function* () {
      if (!item?.id)
        return;
      yield updateSignageMedia(item.id, item).toPromise();
    });
  }
  removeMedia(item) {
    return __async(this, null, function* () {
      if (!item?.id)
        return;
      const result = yield openConfirmModal({
        title: `Remove Media item`,
        content: `
                Are you sure you wish to remove the media item "<strong>${item.name}</strong>"?<br/><br/>
                <i class="text-sm">The item will be removed from all playlists and the files deleted from storage.</i>
                `,
        icon: { content: "delete" }
      }, this._dialog);
      if (result.reason !== "done")
        return;
      result.loading("Removing media...");
      yield removeSignageMedia(item.id).toPromise();
      this._change.next(Date.now());
      result.close();
    });
  }
  _getMediaMetadata(file) {
    return new Promise((resolve) => {
      const url = URL.createObjectURL(file);
      if (file.type.includes("video")) {
        let video = document.createElement("video");
        video.src = url.toString();
        video.addEventListener("loadedmetadata", () => {
          const { videoWidth, videoHeight } = video;
          resolve([videoWidth > videoHeight, video.duration]);
        });
        video.load();
      } else {
        let img = new Image();
        img.onload = () => resolve([img.width > img.height, 0]);
        img.src = url.toString();
      }
    });
  }
  _generateThumbnail(file, max_width, max_height) {
    return __async(this, null, function* () {
      console.log("File:", file, max_width, max_height);
      if (file.type.includes("video")) {
        return this._generateVideoThumbnail(file, max_width, max_height);
      } else {
        return this._generateImageThumbnail(file, max_width, max_height);
      }
    });
  }
  _generateImageThumbnail(file, max_width, max_height) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      console.log("Image:", img.src);
      img.onload = () => {
        const image = this._generateThumbnailFromResource(img, img.width, img.height, max_width, max_height);
        URL.revokeObjectURL(img.src);
        resolve(image);
      };
      img.onerror = reject;
    });
  }
  _generateVideoThumbnail(file, max_width, max_height) {
    return new Promise((resolve, reject) => {
      const video = document.createElement("video");
      video.autoplay = true;
      video.muted = true;
      video.src = URL.createObjectURL(file);
      video.onloadeddata = () => {
        const image = this._generateThumbnailFromResource(video, video.videoWidth, video.videoHeight, max_width, max_height);
        URL.revokeObjectURL(video.src);
        resolve(image);
      };
      video.onerror = reject;
    });
  }
  _generateThumbnailFromResource(data, source_width, source_height, max_width, max_height) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    let thumbnailWidth = source_width;
    let thumbnailHeight = source_height;
    const aspectRatio = thumbnailWidth / thumbnailHeight;
    if (thumbnailWidth > max_width) {
      thumbnailWidth = max_height;
      thumbnailHeight = thumbnailWidth / aspectRatio;
    }
    if (thumbnailHeight > max_height) {
      thumbnailHeight = max_width;
      thumbnailWidth = thumbnailHeight * aspectRatio;
    }
    canvas.width = thumbnailWidth;
    canvas.height = thumbnailHeight;
    ctx.drawImage(data, 0, 0, thumbnailWidth, thumbnailHeight);
    const dataURL = canvas.toDataURL("image/jpeg");
    return dataURL;
  }
};
_SignageStateService.\u0275fac = function SignageStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignageStateService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(MatDialog), \u0275\u0275inject(SettingsService));
};
_SignageStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SignageStateService, factory: _SignageStateService.\u0275fac, providedIn: "root" });
var SignageStateService = _SignageStateService;

// apps/concierge/src/app/signage/signage.component.ts
var _c02 = ["app-new-staff", ""];
function SignageComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function SignageComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newItem(ctx_r1.active_link));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Add ", ctx_r1.singular(ctx_r1.active_link), " ");
  }
}
function SignageComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 11);
    \u0275\u0275pipe(1, "lowercase");
    \u0275\u0275listener("click", function SignageComponent_For_11_Template_a_click_0_listener() {
      const link_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.active_link = link_r4);
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const link_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", "/signage/" + \u0275\u0275pipeBind1(1, 3, link_r4))("active", ctx_r1.active_link == link_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", link_r4, " ");
  }
}
var _SignageComponent = class _SignageComponent extends AsyncHandler {
  singular(name) {
    if (name === "Media")
      return "Playlist";
    if (name === "Playlists")
      return "Playlist";
    if (name === "Displays")
      return "Display";
    return "";
  }
  newItem(name) {
    return __async(this, null, function* () {
      let result = null;
      switch (name) {
        case "Media":
        case "Playlists":
          result = yield this._state.editPlaylist();
          if (result) {
            this._router.navigate(["/signage/media"], {
              queryParams: { playlist: result.id }
            });
          }
          break;
        case "Displays":
          result = yield this._state.editDisplay();
          if (!result)
            return;
          this._router.navigate(["/signage/displays"], {
            queryParams: { display: result.id }
          });
          break;
      }
    });
  }
  constructor(_state, _router) {
    super();
    this._state = _state;
    this._router = _router;
    this.loading = this._state.loading;
    this.links = ["Media", "Displays", "Zones"];
    this.active_link = this.links[0];
    this.previewFile = (event) => this._state.previewFileFromInput(event);
  }
  ngOnInit() {
    this.subscription("route.query", this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.active_link = this.links.find((_) => this._router.url.includes(_.toLowerCase()));
      }
    }));
    this.active_link = this.links.find((_) => this._router.url.includes(_.toLowerCase()));
  }
};
_SignageComponent.\u0275fac = function SignageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignageComponent)(\u0275\u0275directiveInject(SignageStateService), \u0275\u0275directiveInject(Router));
};
_SignageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageComponent, selectors: [["", "app-new-staff", ""]], features: [\u0275\u0275InheritDefinitionFeature], attrs: _c02, decls: 15, vars: 2, consts: [["tabPanel", ""], [1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full"], [1, "p-8", "h-28", "flex", "items-center", "justify-between"], [1, "text-2xl", "font-medium"], ["btn", "", "matRipple", "", "class", "w-40", 3, "click", 4, "ngIf"], [1, "px-8"], ["mat-tab-nav-bar", "", 3, "tabPanel"], ["mat-tab-link", "", 3, "routerLink", "active"], [1, "flex-1", "h-1/2", "overflow-auto", "px-8", "py-4"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"], ["mat-tab-link", "", 3, "click", "routerLink", "active"]], template: function SignageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 2)(4, "div", 3)(5, "h2", 4);
    \u0275\u0275text(6, " Digital Signage Management ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SignageComponent_button_7_Template, 2, 1, "button", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 6)(9, "nav", 7);
    \u0275\u0275repeaterCreate(10, SignageComponent_For_11_Template, 3, 5, "a", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "mat-tab-nav-panel", 9, 0);
    \u0275\u0275element(14, "router-outlet");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tabPanel_r5 = \u0275\u0275reference(13);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.active_link === "Media" || ctx.active_link === "Displays");
    \u0275\u0275advance(2);
    \u0275\u0275property("tabPanel", tabPanel_r5);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.links);
  }
}, dependencies: [NgIf, ApplicationTopbarComponent, ApplicationSidebarComponent, MatRipple, RouterOutlet, RouterLink, MatTabNav, MatTabNavPanel, MatTabLink, LowerCasePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\n/*# sourceMappingURL=signage.component.css.map */"] });
var SignageComponent = _SignageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageComponent, { className: "SignageComponent", filePath: "apps/concierge/src/app/signage/signage.component.ts", lineNumber: 66 });
})();

// apps/concierge/src/app/signage/signage-topbar.component.ts
var _SignageTopbarComponent = class _SignageTopbarComponent extends AsyncHandler {
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
    this.zones = [];
    this.levels = this._org.active_levels;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
        if (params.has("zone_ids")) {
          const zones = params.get("zone_ids").split(",");
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
      this.subscription("levels", this._org.active_levels.subscribe((levels) => {
        this.zones = this.zones.filter((zone) => levels.find((lvl) => lvl.id === zone));
        if (!this.zones.length && levels.length) {
          this.zones.push(levels[0].id);
        }
      }));
    });
  }
};
_SignageTopbarComponent.\u0275fac = function SignageTopbarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignageTopbarComponent)(\u0275\u0275directiveInject(SignageStateService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
};
_SignageTopbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageTopbarComponent, selectors: [["signage-topbar"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 0, consts: [[1, "flex", "items-center", "bg-base-100", "h-20", "px-4", "border-b", "border-base-200", "space-x-2"]], template: function SignageTopbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 0);
  }
}, styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=signage-topbar.component.css.map */"] });
var SignageTopbarComponent = _SignageTopbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageTopbarComponent, { className: "SignageTopbarComponent", filePath: "apps/concierge/src/app/signage/signage-topbar.component.ts", lineNumber: 52 });
})();

// apps/concierge/src/app/signage/signage-media-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function SignageMediaListComponent_Conditional_9_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 12);
  }
}
function SignageMediaListComponent_Conditional_9_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 13);
  }
}
function SignageMediaListComponent_Conditional_9_For_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "app-icon", 33);
    \u0275\u0275text(2, " add ");
    \u0275\u0275elementEnd()();
  }
}
function SignageMediaListComponent_Conditional_9_For_3_img_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 34);
  }
  if (rf & 2) {
    const media_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", media_r4.thumbnail_url);
  }
}
function SignageMediaListComponent_Conditional_9_For_3_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "mediaDuration");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const media_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, media_r4.play_time / 1e3), " ");
  }
}
function SignageMediaListComponent_Conditional_9_For_3_button_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275text(1, " No playlists ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("disabled", true);
  }
}
function SignageMediaListComponent_Conditional_9_For_3_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function SignageMediaListComponent_Conditional_9_For_3_button_22_Template_button_click_0_listener() {
      const playlist_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const media_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addToPlaylist(media_r4.id, playlist_r6));
    });
    \u0275\u0275elementStart(1, "div", 27)(2, "div", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const playlist_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", playlist_r6.name, " ");
  }
}
function SignageMediaListComponent_Conditional_9_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275template(1, SignageMediaListComponent_Conditional_9_For_3_Conditional_1_Template, 1, 0, "div", 12)(2, SignageMediaListComponent_Conditional_9_For_3_Conditional_2_Template, 1, 0, "div", 13)(3, SignageMediaListComponent_Conditional_9_For_3_div_3_Template, 3, 0, "div", 14);
    \u0275\u0275elementStart(4, "div", 15);
    \u0275\u0275template(5, SignageMediaListComponent_Conditional_9_For_3_img_5_Template, 1, 1, "img", 16);
    \u0275\u0275elementStart(6, "div", 17);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, SignageMediaListComponent_Conditional_9_For_3_div_8_Template, 3, 3, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 19)(10, "div", 20);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 21)(13, "app-icon");
    \u0275\u0275text(14, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-menu", null, 0)(17, "div", 22)(18, "mat-form-field", 23);
    \u0275\u0275listener("click", function SignageMediaListComponent_Conditional_9_For_3_Template_mat_form_field_click_18_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(19, "input", 5);
    \u0275\u0275listener("ngModelChange", function SignageMediaListComponent_Conditional_9_For_3_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.playlist_search.next($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(20, SignageMediaListComponent_Conditional_9_For_3_button_20_Template, 2, 1, "button", 24);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275template(22, SignageMediaListComponent_Conditional_9_For_3_button_22_Template, 4, 1, "button", 25);
    \u0275\u0275pipe(23, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-menu", null, 1)(26, "button", 26);
    \u0275\u0275listener("click", function SignageMediaListComponent_Conditional_9_For_3_Template_button_click_26_listener() {
      const media_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editItem(media_r4));
    });
    \u0275\u0275elementStart(27, "div", 27)(28, "app-icon", 28);
    \u0275\u0275text(29, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 29);
    \u0275\u0275text(31, "Edit Media Item");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "button", 30)(33, "div", 27)(34, "app-icon", 28);
    \u0275\u0275text(35, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 29);
    \u0275\u0275text(37, "Add to Playlist");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "button", 26);
    \u0275\u0275listener("click", function SignageMediaListComponent_Conditional_9_For_3_Template_button_click_38_listener() {
      const media_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.previewItem(media_r4));
    });
    \u0275\u0275elementStart(39, "div", 27)(40, "app-icon", 28);
    \u0275\u0275text(41, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 29);
    \u0275\u0275text(43, " Preview Media Item ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "button", 26);
    \u0275\u0275listener("click", function SignageMediaListComponent_Conditional_9_For_3_Template_button_click_44_listener() {
      const media_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeItem(media_r4));
    });
    \u0275\u0275elementStart(45, "div", 27)(46, "app-icon", 31);
    \u0275\u0275text(47, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 29);
    \u0275\u0275text(49, " Remove Media Item ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_25_0;
    const media_r4 = ctx.$implicit;
    const playlist_menu_r7 = \u0275\u0275reference(16);
    const menu_r8 = \u0275\u0275reference(25);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(media_r4.valid_from && ctx_r1.now < media_r4.valid_from ? 1 : media_r4.valid_until && ctx_r1.now > media_r4.valid_until ? 2 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", media_r4.thumbnail_url);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-info", media_r4.media_type === "video")("text-info-content", media_r4.media_type === "video")("bg-warning", media_r4.media_type === "image")("text-warning-content", media_r4.media_type === "image");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", media_r4.media_type, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", media_r4.play_time);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", media_r4.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", media_r4.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r8);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngModel", ctx_r1.playlist_search.getValue());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(((tmp_25_0 = \u0275\u0275pipeBind1(21, 19, ctx_r1.playlists)) == null ? null : tmp_25_0.length) > 0));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(23, 21, ctx_r1.playlists));
    \u0275\u0275advance(10);
    \u0275\u0275property("matMenuTriggerFor", playlist_menu_r7);
  }
}
function SignageMediaListComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("cdkDropListDropped", function SignageMediaListComponent_Conditional_9_Template_div_cdkDropListDropped_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.drop($event));
    });
    \u0275\u0275repeaterCreate(2, SignageMediaListComponent_Conditional_9_For_3_Template, 50, 23, "div", 11, _forTrack0);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("cdkDropListData", \u0275\u0275pipeBind1(1, 2, ctx_r1.media))("cdkDropListConnectedTo", ctx_r1.playlist_ids);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(4, 4, ctx_r1.media));
  }
}
function SignageMediaListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "app-icon", 37);
    \u0275\u0275text(2, "hide_image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No media found.");
    \u0275\u0275elementEnd()();
  }
}
var _SignageMediaListComponent = class _SignageMediaListComponent {
  get now() {
    return getUnixTime(startOfMinute(Date.now()));
  }
  constructor(_state) {
    this._state = _state;
    this.playlist_count = 0;
    this.search = new BehaviorSubject("");
    this.playlist_search = new BehaviorSubject("");
    this.playlists = combineLatest([
      this.playlist_search,
      this._state.playlists
    ]).pipe(map(([search, list]) => list.filter((_) => _.name.toLowerCase().includes(search.toLowerCase()))));
    this.media = combineLatest([
      this.search,
      this._state.media
    ]).pipe(map(([search, media]) => media.filter((_) => _.name.toLowerCase().includes(search.toLowerCase()))));
    this.previewFile = (event) => this._state.previewFileFromInput(event);
    this.playlist_ids = [];
    this.previewItem = (item) => this._state.previewMedia(item);
    this.editItem = (item) => this._state.editMedia(item);
    this.removeItem = (item) => __async(this, null, function* () {
      return this._state.removeMedia(item);
    });
  }
  ngOnChanges(changes) {
    if (changes.playlist_count) {
      this.playlist_ids = new Array(this.playlist_count).fill(0).map((_, idx) => `playlist-${idx}`);
    }
  }
  drop(event) {
  }
  addToPlaylist(media_id, playlist) {
    return __async(this, null, function* () {
      const media_list = yield listSignagePlaylistMedia(playlist.id).toPromise();
      const new_media_list = [...media_list.items, media_id];
      yield this._state.updatePlaylistMedia(playlist.id, new_media_list);
    });
  }
};
_SignageMediaListComponent.\u0275fac = function SignageMediaListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignageMediaListComponent)(\u0275\u0275directiveInject(SignageStateService));
};
_SignageMediaListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageMediaListComponent, selectors: [["signage-media-list"]], inputs: { playlist_count: "playlist_count" }, features: [\u0275\u0275NgOnChangesFeature], decls: 12, vars: 4, consts: [["playlist_menu", "matMenu"], ["menu", "matMenu"], [1, "p-4", "relative"], [1, "text-xl", "font-medium", "text-center", "mb-4"], ["appearance", "outline", 1, "w-full", "no-subscript"], ["matInput", "", "placeholder", "Search...", 3, "ngModelChange", "ngModel"], ["icon", "", "matRipple", "", "matTooltip", "Upload Media", "matTooltipPosition", "left", 1, "absolute", "top-2", "right-2", "border", "border-base-300"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"], ["cdkDropList", "", "id", "media-list", 1, "grid", "w-full", "gap-4", "md:grid-cols-2", "lg:grid-cols-3", "p-4", 3, "cdkDropListData", "cdkDropListConnectedTo"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8", "space-y-2", "opacity-30", "mx-auto", "flex-1"], ["cdkDropList", "", "id", "media-list", 1, "grid", "w-full", "gap-4", "md:grid-cols-2", "lg:grid-cols-3", "p-4", 3, "cdkDropListDropped", "cdkDropListData", "cdkDropListConnectedTo"], ["cdkDrag", "", 1, "relative", "bg-base-100", "rounded-lg", "flex", "flex-col", "items-center", "justify-center", "p-3", "hover:opacity-80", "border", "border-base-300"], [1, "absolute", "inset-0", "z-0", "bg-warning", "opacity-10", "rounded-lg"], [1, "absolute", "inset-0", "z-0", "bg-error", "opacity-10", "rounded-lg"], ["class", "min-h-10 min-w-10 border-4 rounded-2xl border-base-400 bg-base-300 border-dashed flex items-center justify-center", 4, "cdkDragPlaceholder"], ["preview", "", 1, "relative", "w-full", "h-36", "bg-base-200", "rounded-lg", "overflow-hidden"], ["auth", "", "class", "w-full h-full object-contain rounded-lg", 3, "source", 4, "ngIf"], [1, "absolute", "top-1", "left-1", "px-2", "py-1", "text-xs", "rounded-lg", "capitalize", "font-mono"], ["class", "absolute bottom-1 right-1 px-2 py-1 text-xs rounded-lg bg-info text-info-content capitalize font-mono", 4, "ngIf"], [1, "flex", "items-center", "justify-between", "w-full", "relative", "top-1"], [1, "text-base-content", "truncate", "flex-1", "w-1/2", 3, "matTooltip"], ["icon", "", "matRipple", "", "aria-label", "Media Actions", 3, "matMenuTriggerFor"], [1, "px-2"], ["appearance", "outline", 1, "w-full", "no-subscript", 3, "click"], ["mat-menu-item", "", 3, "disabled", 4, "ngIf"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "pr-2"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], [1, "text-2xl", "text-error"], [1, "min-h-10", "min-w-10", "border-4", "rounded-2xl", "border-base-400", "bg-base-300", "border-dashed", "flex", "items-center", "justify-center"], [1, "text-2xl", "text-base-100"], ["auth", "", 1, "w-full", "h-full", "object-contain", "rounded-lg", 3, "source"], [1, "absolute", "bottom-1", "right-1", "px-2", "py-1", "text-xs", "rounded-lg", "bg-info", "text-info-content", "capitalize", "font-mono"], ["mat-menu-item", "", 3, "disabled"], [1, "text-6xl"]], template: function SignageMediaListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "h3", 3);
    \u0275\u0275text(2, "Media");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 4)(4, "input", 5);
    \u0275\u0275listener("ngModelChange", function SignageMediaListComponent_Template_input_ngModelChange_4_listener($event) {
      return ctx.search.next($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 6)(6, "app-icon");
    \u0275\u0275text(7, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 7);
    \u0275\u0275listener("change", function SignageMediaListComponent_Template_input_change_8_listener($event) {
      return ctx.previewFile($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, SignageMediaListComponent_Conditional_9_Template, 5, 6, "div", 8);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275template(11, SignageMediaListComponent_Conditional_11_Template, 5, 0, "div", 9);
  }
  if (rf & 2) {
    let tmp_1_0;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx.search.getValue());
    \u0275\u0275advance(5);
    \u0275\u0275conditional(((tmp_1_0 = \u0275\u0275pipeBind1(10, 2, ctx.media)) == null ? null : tmp_1_0.length) > 0 ? 9 : 11);
  }
}, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatInput, MatMenu, MatMenuItem, MatMenuTrigger, MatTooltip, MatRipple, IconComponent, AuthenticatedImageDirective, CdkDropList, CdkDrag, CdkDragPlaceholder, AsyncPipe, MediaDurationPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=signage-media-list.component.css.map */"] });
var SignageMediaListComponent = _SignageMediaListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageMediaListComponent, { className: "SignageMediaListComponent", filePath: "apps/concierge/src/app/signage/signage-media-list.component.ts", lineNumber: 227 });
})();

// apps/concierge/src/app/signage/signage-playlist-media-list.component.ts
function SignagePlaylistMediaListComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1, " Shuffle ON ");
    \u0275\u0275elementEnd();
  }
}
function SignagePlaylistMediaListComponent_Conditional_47_ng_container_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 23);
  }
}
function SignagePlaylistMediaListComponent_Conditional_47_ng_container_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 24);
  }
}
function SignagePlaylistMediaListComponent_Conditional_47_ng_container_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "app-icon", 32);
    \u0275\u0275text(2, " add ");
    \u0275\u0275elementEnd()();
  }
}
function SignagePlaylistMediaListComponent_Conditional_47_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 22);
    \u0275\u0275template(2, SignagePlaylistMediaListComponent_Conditional_47_ng_container_2_Conditional_2_Template, 1, 0, "div", 23)(3, SignagePlaylistMediaListComponent_Conditional_47_ng_container_2_Conditional_3_Template, 1, 0, "div", 24)(4, SignagePlaylistMediaListComponent_Conditional_47_ng_container_2_div_4_Template, 3, 0, "div", 25);
    \u0275\u0275elementStart(5, "button", 26)(6, "app-icon");
    \u0275\u0275text(7, "drag_handle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 27);
    \u0275\u0275element(9, "img", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 29);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 30)(13, "app-icon");
    \u0275\u0275text(14, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-menu", null, 0)(17, "button", 4);
    \u0275\u0275listener("click", function SignagePlaylistMediaListComponent_Conditional_47_ng_container_2_Template_button_click_17_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editItem(item_r5));
    });
    \u0275\u0275elementStart(18, "div", 5)(19, "app-icon", 6);
    \u0275\u0275text(20, " edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 7);
    \u0275\u0275text(22, "Edit Media Item");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "button", 4);
    \u0275\u0275listener("click", function SignagePlaylistMediaListComponent_Conditional_47_ng_container_2_Template_button_click_23_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.previewItem(item_r5));
    });
    \u0275\u0275elementStart(24, "div", 5)(25, "app-icon", 6);
    \u0275\u0275text(26, " visibility ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 7);
    \u0275\u0275text(28, " Preview Media Item ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "button", 4);
    \u0275\u0275listener("click", function SignagePlaylistMediaListComponent_Conditional_47_ng_container_2_Template_button_click_29_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeItem(item_r5));
    });
    \u0275\u0275elementStart(30, "div", 5)(31, "app-icon", 8);
    \u0275\u0275text(32, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 7);
    \u0275\u0275text(34, " Remove Media Item ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const menu_r6 = \u0275\u0275reference(16);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r5.valid_from && ctx_r2.now < item_r5.valid_from ? 2 : item_r5.valid_until && ctx_r2.now > item_r5.valid_until ? 3 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275property("source", item_r5.thumbnail_url);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r5.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r6);
  }
}
function SignagePlaylistMediaListComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("cdkDropListDropped", function SignagePlaylistMediaListComponent_Conditional_47_Template_div_cdkDropListDropped_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.drop($event));
    });
    \u0275\u0275template(2, SignagePlaylistMediaListComponent_Conditional_47_ng_container_2_Template, 35, 4, "ng-container", 21);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("cdkDropListData", \u0275\u0275pipeBind1(1, 3, ctx_r2.media))("cdkDropListConnectedTo", ctx_r2.playlist_ids);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(3, 5, ctx_r2.media));
  }
}
function SignagePlaylistMediaListComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "app-icon", 33);
    \u0275\u0275text(2, "hide_image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No media in playlist.");
    \u0275\u0275elementEnd()();
  }
}
var _SignagePlaylistMediaListComponent = class _SignagePlaylistMediaListComponent {
  get now() {
    return getUnixTime(startOfMinute(Date.now()));
  }
  constructor(_state, _router) {
    this._state = _state;
    this._router = _router;
    this.playlist = "";
    this.playlist_count = 0;
    this.playlist_ids = [];
    this._playlist = new BehaviorSubject("");
    this.editPlaylist = () => __async(this, null, function* () {
      const playlist = yield this.selected_playlist.pipe(take(1)).toPromise();
      this._state.editPlaylist(playlist);
    });
    this.removeItem = (item) => __async(this, null, function* () {
      const playlist = yield this._playlist_media.pipe(take(1)).toPromise();
      const list = playlist.items.filter((_) => _ !== item.id);
      yield this._state.updatePlaylistMedia(this.playlist, list);
      this._playlist.next(this.playlist);
    });
    this.previewItem = (item) => this._state.previewMedia(item);
    this.editItem = (item) => this._state.editMedia(item);
    this.removePlaylist = () => __async(this, null, function* () {
      this._state.removePlaylist(yield this.selected_playlist.pipe(take(1)).toPromise());
      this._router.navigate(["/signage/media", {}]);
    });
    this.selected_playlist = combineLatest([
      this._playlist,
      this._state.playlists
    ]).pipe(map(([playlist, list]) => {
      const item = list.find((_) => _.id === playlist);
      if (!item)
        this._router.navigate(["/signage/media", {}]);
      return item;
    }));
    this._playlist_media = this._playlist.pipe(filter((playlist) => !!playlist), debounceTime(300), switchMap((playlist) => listSignagePlaylistMedia(playlist).pipe(catchError(() => of({ id: "", items: [] })))), shareReplay(1));
    this.media = combineLatest([
      this._playlist_media,
      this._state.media
    ]).pipe(map(([playlist, media]) => playlist.items.map((_) => media.find((m) => m.id === _)).filter((_) => _)), startWith([]));
  }
  ngOnChanges(changes) {
    if (changes.playlist) {
      this._playlist.next(this.playlist);
    }
    if (changes.playlist_count) {
      this.playlist_ids = new Array(this.playlist_count).fill(0).map((_, idx) => `playlist-${idx}`);
    }
  }
  animation_name(value) {
    switch (value) {
      case MediaAnimation.Cut:
        return "Cut";
      case MediaAnimation.CrossFade:
        return "Cross Fade";
      case MediaAnimation.SlideBottom:
        return "Slide Bottom";
      case MediaAnimation.SlideLeft:
        return "Slide Left";
      case MediaAnimation.SlideRight:
        return "Slide Right";
      case MediaAnimation.SlideTop:
        return "Slide Top";
    }
    return "Default";
  }
  drop(event) {
    return __async(this, null, function* () {
      if (event.previousIndex === event.currentIndex)
        return;
      const id = yield this._playlist.pipe(take(1)).toPromise();
      const playlist = yield this._playlist_media.pipe(take(1)).toPromise();
      if (!id && playlist)
        return;
      const list = [...playlist.items];
      moveItemInArray(list, event.previousIndex, event.currentIndex);
      yield this._state.updatePlaylistMedia(id, list);
      this._playlist.next(this.playlist);
    });
  }
};
_SignagePlaylistMediaListComponent.\u0275fac = function SignagePlaylistMediaListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignagePlaylistMediaListComponent)(\u0275\u0275directiveInject(SignageStateService), \u0275\u0275directiveInject(Router));
};
_SignagePlaylistMediaListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignagePlaylistMediaListComponent, selectors: [["signage-playlist-media-list"]], inputs: { playlist: "playlist", playlist_count: "playlist_count" }, features: [\u0275\u0275NgOnChangesFeature], decls: 50, vars: 40, consts: [["menu", "matMenu"], [1, "flex", "flex-col", "space-y-4", "relative", "p-4", "h-full", "w-full"], [1, "text-xl", "font-medium", "text-center"], ["icon", "", "matRipple", "", 1, "absolute", "top-2", "right-2", "!m-0", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "pr-2"], [1, "text-2xl", "text-error"], ["details", "", 1, "flex", "items-center", "flex-wrap"], [1, "ml-2", "text-xs", "px-2", "py-1", "m-1", "rounded"], ["class", "ml-2 text-xs px-2 py-1 m-1 rounded bg-secondary text-secondary-content", 4, "ngIf"], ["matTooltip", "Default Transition Animation", 1, "text-xs", "px-2", "py-1", "m-1"], [1, "ml-1", "uppercase", "bg-base-200", "px-2", "py-1", "rounded"], ["matTooltip", "Default Playback Duration", 1, "text-xs", "px-2", "py-1", "m-1"], [1, "ml-1", "font-mono", "bg-base-200", "px-2", "py-1", "rounded"], ["matTooltip", "Prefered Orientation", 1, "text-xs", "px-2", "py-1", "m-1"], ["cdkDropList", "", "id", "playlist-list", 1, "flex-1", "h-1/2", "overflow-auto", "flex", "flex-col", "space-y-2", 3, "cdkDropListData", "cdkDropListConnectedTo"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8", "space-y-2", "opacity-30", "mx-auto", "flex-1"], [1, "ml-2", "text-xs", "px-2", "py-1", "m-1", "rounded", "bg-secondary", "text-secondary-content"], ["cdkDropList", "", "id", "playlist-list", 1, "flex-1", "h-1/2", "overflow-auto", "flex", "flex-col", "space-y-2", 3, "cdkDropListDropped", "cdkDropListData", "cdkDropListConnectedTo"], [4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "relative", "w-full", "bg-base-100", "h-20", "rounded-lg", "flex", "items-center", "p-2", "space-x-2", "border", "border-base-300"], [1, "absolute", "inset-0", "z-0", "bg-warning", "opacity-10", "rounded-lg"], [1, "absolute", "inset-0", "z-0", "bg-error", "opacity-10", "rounded-lg"], ["class", "min-h-10 min-w-10 border-4 rounded-2xl border-base-400 bg-base-300 border-dashed flex items-center justify-center", 4, "cdkDragPlaceholder"], ["matRipple", "", "cdkDragHandle", "", "matTooltip", "Drag to reorder", 1, "flex", "items-center", "justify-center", "w-6", "h-full", "rounded", "hover:bg-base-200"], ["preview", "", 1, "w-[4.5rem]", "h-16", "bg-base-200", "rounded-lg", "overflow-hidden"], ["auth", "", 1, "w-full", "h-full", "object-contain", 3, "source"], [1, "text-base-content", "truncate", "flex-1", "w-1/2"], ["icon", "", "matRipple", "", "aria-label", "Media Actions", 3, "matMenuTriggerFor"], [1, "min-h-10", "min-w-10", "border-4", "rounded-2xl", "border-base-400", "bg-base-300", "border-dashed", "flex", "items-center", "justify-center"], [1, "text-2xl", "text-base-100"], [1, "text-6xl"]], template: function SignagePlaylistMediaListComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "h3", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 3)(5, "app-icon");
    \u0275\u0275text(6, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-menu", null, 0)(9, "button", 4);
    \u0275\u0275listener("click", function SignagePlaylistMediaListComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.editPlaylist());
    });
    \u0275\u0275elementStart(10, "div", 5)(11, "app-icon", 6);
    \u0275\u0275text(12, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 7);
    \u0275\u0275text(14, "Edit Playlist");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "button", 4);
    \u0275\u0275listener("click", function SignagePlaylistMediaListComponent_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.removePlaylist());
    });
    \u0275\u0275elementStart(16, "div", 5)(17, "app-icon", 8);
    \u0275\u0275text(18, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 7);
    \u0275\u0275text(20, "Remove Playlist");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "div", 9)(22, "div", 10);
    \u0275\u0275pipe(23, "async");
    \u0275\u0275pipe(24, "async");
    \u0275\u0275pipe(25, "async");
    \u0275\u0275pipe(26, "async");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, SignagePlaylistMediaListComponent_div_29_Template, 2, 0, "div", 11);
    \u0275\u0275pipe(30, "async");
    \u0275\u0275elementStart(31, "div", 12);
    \u0275\u0275text(32, " Animation: ");
    \u0275\u0275elementStart(33, "span", 13);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 14);
    \u0275\u0275text(37, " Duration: ");
    \u0275\u0275elementStart(38, "span", 15);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "async");
    \u0275\u0275pipe(41, "mediaDuration");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 16);
    \u0275\u0275text(43, " Orientation: ");
    \u0275\u0275elementStart(44, "span", 13);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(47, SignagePlaylistMediaListComponent_Conditional_47_Template, 4, 7, "div", 17);
    \u0275\u0275pipe(48, "async");
    \u0275\u0275template(49, SignagePlaylistMediaListComponent_Conditional_49_Template, 5, 0, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    const menu_r7 = \u0275\u0275reference(8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Playlist - ", (tmp_1_0 = \u0275\u0275pipeBind1(3, 16, ctx.selected_playlist)) == null ? null : tmp_1_0.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", menu_r7);
    \u0275\u0275advance(18);
    \u0275\u0275classProp("bg-success", (tmp_3_0 = \u0275\u0275pipeBind1(23, 18, ctx.selected_playlist)) == null ? null : tmp_3_0.enabled)("text-success-content", (tmp_4_0 = \u0275\u0275pipeBind1(24, 20, ctx.selected_playlist)) == null ? null : tmp_4_0.enabled)("bg-error", !((tmp_5_0 = \u0275\u0275pipeBind1(25, 22, ctx.selected_playlist)) == null ? null : tmp_5_0.enabled))("text-error-content", !((tmp_6_0 = \u0275\u0275pipeBind1(26, 24, ctx.selected_playlist)) == null ? null : tmp_6_0.enabled));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ((tmp_7_0 = \u0275\u0275pipeBind1(28, 26, ctx.selected_playlist)) == null ? null : tmp_7_0.enabled) ? "Enabled" : "Disabled", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_8_0 = \u0275\u0275pipeBind1(30, 28, ctx.selected_playlist)) == null ? null : tmp_8_0.random);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.animation_name((tmp_9_0 = \u0275\u0275pipeBind1(35, 30, ctx.selected_playlist)) == null ? null : tmp_9_0.default_animation));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 34, ((tmp_10_0 = \u0275\u0275pipeBind1(40, 32, ctx.selected_playlist)) == null ? null : tmp_10_0.default_duration) / 1e3));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((tmp_11_0 = \u0275\u0275pipeBind1(46, 36, ctx.selected_playlist)) == null ? null : tmp_11_0.orientation);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(48, 38, ctx.media).length > 0 ? 47 : 49);
  }
}, dependencies: [NgForOf, NgIf, MatMenu, MatMenuItem, MatMenuTrigger, MatTooltip, MatRipple, IconComponent, AuthenticatedImageDirective, CdkDropList, CdkDrag, CdkDragHandle, CdkDragPlaceholder, AsyncPipe, MediaDurationPipe], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=signage-playlist-media-list.component.css.map */"] });
var SignagePlaylistMediaListComponent = _SignagePlaylistMediaListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignagePlaylistMediaListComponent, { className: "SignagePlaylistMediaListComponent", filePath: "apps/concierge/src/app/signage/signage-playlist-media-list.component.ts", lineNumber: 236 });
})();

// apps/concierge/src/app/signage/signage-media.component.ts
var _forTrack02 = ($index, $item) => $item.id;
var _c03 = () => [];
var _c1 = () => ({ playlist: "" });
var _c2 = (a0) => ({ playlist: a0 });
var _c3 = () => ["media-list", "playlist-list"];
function SignageMediaComponent_Conditional_9_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 13);
    \u0275\u0275listener("cdkDropListDropped", function SignageMediaComponent_Conditional_9_For_1_Template_a_cdkDropListDropped_0_listener($event) {
      const playlist_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selected_playlist === playlist_r2.id ? "" : ctx_r2.drop(playlist_r2, $event));
    });
    \u0275\u0275elementStart(1, "div", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const playlist_r2 = ctx.$implicit;
    const $index_r4 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("!bg-secondary", ctx_r2.selected_playlist === playlist_r2.id)("text-secondary-content", ctx_r2.selected_playlist === playlist_r2.id);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(9, _c03))("queryParams", \u0275\u0275pureFunction1(10, _c2, playlist_r2.id))("id", "playlist-" + $index_r4)("cdkDropListConnectedTo", \u0275\u0275pureFunction0(12, _c3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", playlist_r2.name, " ");
  }
}
function SignageMediaComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SignageMediaComponent_Conditional_9_For_1_Template, 3, 13, "a", 12, _forTrack02);
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(2, 0, ctx_r2.playlists));
  }
}
function SignageMediaComponent_Conditional_11_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function SignageMediaComponent_Conditional_11_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addPlaylist());
    });
    \u0275\u0275elementStart(1, "div", 20)(2, "app-icon", 21);
    \u0275\u0275text(3, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 22);
    \u0275\u0275text(5, "Add Playlist");
    \u0275\u0275elementEnd()()();
  }
}
function SignageMediaComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "app-icon", 16);
    \u0275\u0275text(2, "hide_image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, SignageMediaComponent_Conditional_11_button_5_Template, 6, 0, "button", 18);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.search.getValue() ? "No matching playlists found" : "No playlists", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.search.getValue());
  }
}
function SignageMediaComponent_signage_media_list_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "signage-media-list", 23);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("playlist_count", (tmp_1_0 = \u0275\u0275pipeBind1(1, 1, ctx_r2.playlists)) == null ? null : tmp_1_0.length);
  }
}
function SignageMediaComponent_signage_playlist_media_list_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "signage-playlist-media-list", 24);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("playlist", ctx_r2.selected_playlist)("playlist_count", (tmp_2_0 = \u0275\u0275pipeBind1(1, 2, ctx_r2.playlists)) == null ? null : tmp_2_0.length);
  }
}
function SignageMediaComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275listener("dragleave", function SignageMediaComponent_div_16_Template_div_dragleave_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideOverlay($event));
    })("drop", function SignageMediaComponent_div_16_Template_div_drop_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.previewFile($event));
    });
    \u0275\u0275element(1, "div", 26);
    \u0275\u0275elementStart(2, "div", 27)(3, "app-icon", 16);
    \u0275\u0275text(4, "cloud_upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Drop Media to upload");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "input", 28);
    \u0275\u0275listener("change", function SignageMediaComponent_div_16_Template_input_change_7_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.previewFile($event));
    });
    \u0275\u0275elementEnd()();
  }
}
var _SignageMediaComponent = class _SignageMediaComponent extends AsyncHandler {
  onEnter(e) {
    this.clearTimeout("hide_overlay");
    this.show_dropzone = e?.dataTransfer?.types.includes("Files");
  }
  hideOverlay(e) {
    if (!this.show_dropzone)
      return;
    if (!(e.target instanceof HTMLInputElement)) {
      e.preventDefault();
    }
    this.timeout("hide_overlay", () => this.show_dropzone = false);
  }
  constructor(_state, _router, _route) {
    super();
    this._state = _state;
    this._router = _router;
    this._route = _route;
    this.search = new BehaviorSubject("");
    this.loading = this._state.loading;
    this.playlists = combineLatest([
      this.search,
      this._state.playlists
    ]).pipe(map(([search, list]) => list.filter((_) => _.name.toLowerCase().includes(search.toLowerCase()))));
    this.selected_playlist = "";
    this.show_dropzone = false;
    this.addPlaylist = () => __async(this, null, function* () {
      const result = yield this._state.editPlaylist();
      if (result) {
        this._router.navigate([
          "/signage/media",
          { query: { playlist: result.id } }
        ]);
      }
    });
    this.previewMedia = (item) => this._state.previewMedia(item);
    this.previewFile = (event) => this._state.previewFileFromInput(event, this.selected_playlist);
  }
  ngOnInit() {
    this.subscription("route.params", this._route.queryParamMap.subscribe((params) => {
      if (params.has("playlist")) {
        this.selected_playlist = params.get("playlist");
      }
    }));
  }
  drop(playlist, event) {
    return __async(this, null, function* () {
      const media = event.previousContainer.data[event.previousIndex];
      const media_list = yield listSignagePlaylistMedia(playlist.id).toPromise();
      const new_media_list = [...media_list.items, media.id];
      yield this._state.updatePlaylistMedia(playlist.id, new_media_list);
    });
  }
};
_SignageMediaComponent.\u0275fac = function SignageMediaComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignageMediaComponent)(\u0275\u0275directiveInject(SignageStateService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
};
_SignageMediaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageMediaComponent, selectors: [["signage-media"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 17, vars: 15, consts: [[1, "relative", "h-full", "w-full", "overflow-visible", "flex", "space-x-4"], ["sidebar", "", 1, "w-64", "h-full", "flex", "flex-col", "space-y-4", "py-4", "overflow-auto"], [1, "text-xl", "font-medium", "text-center"], ["appearance", "outline", 1, "w-full", "no-subscript"], ["matInput", "", "placeholder", "Search...", 3, "ngModelChange", "ngModel"], ["matRipple", "", 1, "w-full", "px-6", "rounded-3xl", "min-h-12", "flex", "items-center", "hover:bg-base-200", 3, "routerLink", "queryParams"], [1, "w-full"], [1, "relative", "flex-1", "w-1/2", "h-full", "overflow-hidden", "rounded-lg", "border", "border-base-300", "shadow", 3, "dragover", "dragenter", "drop"], [1, "h-full", "w-full", "overflow-auto"], [3, "playlist_count", 4, "ngIf"], [3, "playlist", "playlist_count", 4, "ngIf"], ["class", "absolute inset-0", 3, "dragleave", "drop", 4, "ngIf"], ["matRipple", "", "cdkDropList", "", 1, "w-full", "px-6", "rounded-3xl", "h-12", "min-h-12", "flex", "items-center", "hover:bg-base-200", 3, "!bg-secondary", "text-secondary-content", "routerLink", "queryParams", "id", "cdkDropListConnectedTo"], ["matRipple", "", "cdkDropList", "", 1, "w-full", "px-6", "rounded-3xl", "h-12", "min-h-12", "flex", "items-center", "hover:bg-base-200", 3, "cdkDropListDropped", "routerLink", "queryParams", "id", "cdkDropListConnectedTo"], [1, "flex-1"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8", "space-y-2", "opacity-30"], [1, "text-6xl"], [1, "text-center"], ["btn", "", "matRipple", "", "class", "inverse", 3, "click", 4, "ngIf"], ["btn", "", "matRipple", "", 1, "inverse", 3, "click"], [1, "flex", "items-center", "justify-center", "w-full"], [1, "text-2xl"], [1, "ml-2", "mr-4"], [3, "playlist_count"], [3, "playlist", "playlist_count"], [1, "absolute", "inset-0", 3, "dragleave", "drop"], [1, "absolute", "inset-0", "bg-base-content", "opacity-60"], [1, "absolute", "inset-4", "border-4", "border-dashed", "border-base-300", "flex", "flex-col", "items-center", "justify-center", "rounded-2xl", "text-base-100", "space-y-4"], ["type", "file", 1, "absolute", "inset-0", "opacity-0", 3, "change"]], template: function SignageMediaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
    \u0275\u0275text(3, "Playlists");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 3)(5, "input", 4);
    \u0275\u0275listener("ngModelChange", function SignageMediaComponent_Template_input_ngModelChange_5_listener($event) {
      return ctx.search.next($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "a", 5);
    \u0275\u0275text(7, " All Media ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "hr", 6);
    \u0275\u0275template(9, SignageMediaComponent_Conditional_9_Template, 3, 2);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275template(11, SignageMediaComponent_Conditional_11_Template, 6, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 7);
    \u0275\u0275listener("dragover", function SignageMediaComponent_Template_div_dragover_12_listener($event) {
      return ctx.onEnter($event);
    })("dragenter", function SignageMediaComponent_Template_div_dragenter_12_listener($event) {
      return ctx.onEnter($event);
    })("drop", function SignageMediaComponent_Template_div_drop_12_listener($event) {
      return ctx.hideOverlay($event);
    }, false, \u0275\u0275resolveWindow);
    \u0275\u0275elementStart(13, "div", 8);
    \u0275\u0275template(14, SignageMediaComponent_signage_media_list_14_Template, 2, 3, "signage-media-list", 9)(15, SignageMediaComponent_signage_playlist_media_list_15_Template, 2, 4, "signage-playlist-media-list", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, SignageMediaComponent_div_16_Template, 8, 0, "div", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx.search.getValue());
    \u0275\u0275advance();
    \u0275\u0275classProp("!bg-secondary", !ctx.selected_playlist)("text-secondary-content", !ctx.selected_playlist);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(13, _c03))("queryParams", \u0275\u0275pureFunction0(14, _c1));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_5_0 = \u0275\u0275pipeBind1(10, 11, ctx.playlists)) == null ? null : tmp_5_0.length) > 0 ? 9 : 11);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx.selected_playlist);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.selected_playlist);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.show_dropzone);
  }
}, dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatInput, MatRipple, IconComponent, RouterLink, CdkDropList, SignageMediaListComponent, SignagePlaylistMediaListComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  min-height: 100%;\n}\n/*# sourceMappingURL=signage-media.component.css.map */"] });
var SignageMediaComponent = _SignageMediaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageMediaComponent, { className: "SignageMediaComponent", filePath: "apps/concierge/src/app/signage/signage-media.component.ts", lineNumber: 149 });
})();

// apps/concierge/src/app/signage/search-overlay.component.ts
var _c04 = (a0) => ({ item: a0 });
function SearchOverlayComponent_For_8_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SearchOverlayComponent_For_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SearchOverlayComponent_For_8_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 11);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.result_template)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c04, item_r2));
  }
}
function SearchOverlayComponent_For_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.name || item_r2, " ");
  }
}
function SearchOverlayComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function SearchOverlayComponent_For_8_Template_button_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selected.next(item_r2));
    });
    \u0275\u0275template(1, SearchOverlayComponent_For_8_Conditional_1_Template, 1, 4, "ng-container")(2, SearchOverlayComponent_For_8_Conditional_2_Template, 2, 1, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.result_template ? 1 : 2);
  }
}
function SearchOverlayComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function SearchOverlayComponent_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close.next());
    });
    \u0275\u0275elementStart(1, "div", 13);
    \u0275\u0275text(2, " No items available to select ");
    \u0275\u0275elementEnd()();
  }
}
var _SearchOverlayComponent = class _SearchOverlayComponent {
  constructor() {
    this.item_list = [];
    this.selected = new EventEmitter();
    this.close = new EventEmitter();
    this.search = new BehaviorSubject("");
    this._items = new BehaviorSubject([]);
  }
  ngOnChanges(changes) {
    if (changes.item_list) {
      this._items.next(this.item_list || []);
    }
  }
};
_SearchOverlayComponent.\u0275fac = function SearchOverlayComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SearchOverlayComponent)();
};
_SearchOverlayComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchOverlayComponent, selectors: [["search-overlay"]], inputs: { item_list: "item_list", result_template: "result_template" }, outputs: { selected: "selected", close: "close" }, features: [\u0275\u0275NgOnChangesFeature], decls: 13, vars: 2, consts: [[1, "absolute", "inset-0", "flex", "flex-col", "p-8", "items-center", 3, "click", "keydown.esc"], [1, "absolute", "inset-0", "bg-base-content", "opacity-70", "z-0"], [1, "relative", "mb-4", "w-[32rem]", "max-w-[calc(100%-2rem)]", "mx-auto", "z-10", 3, "click"], ["placeholder", "Search...", 1, "rounded-[4rem]", "text-xl", "text-base-content", "bg-base-100", "border", "border-base-300", "shadow", "pl-14", "pr-6", "py-4", "w-full", 3, "ngModelChange", "ngModel"], [1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "text-3xl", "pointer-events-none"], [1, "overflow-auto", "max-h-[65%]", "w-[32rem]", "max-w-[calc(100%-2rem)]", "mx-auto", "rounded", "z-10", 3, "click"], ["matRipple", "", 1, "w-full", "text-left"], ["matRipple", "", 1, "w-full", "p-4", "text-base-100"], ["icon", "", "matRipple", "", 1, "absolute", "top-10", "right-8", "text-base-100", "text-xl", "h-12", "w-12"], ["matRipple", "", 1, "w-full", "text-left", 3, "click"], [1, "p-4", "w-full", "bg-base-100", "hover:bg-base-200", "border", "border-base-300"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["matRipple", "", 1, "w-full", "p-4", "text-base-100", 3, "click"], [1, "opacity-30"]], template: function SearchOverlayComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275listener("click", function SearchOverlayComponent_Template_div_click_0_listener() {
      return ctx.close.next();
    })("keydown.esc", function SearchOverlayComponent_Template_div_keydown_esc_0_listener() {
      return ctx.close.next();
    }, false, \u0275\u0275resolveWindow);
    \u0275\u0275element(1, "div", 1);
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275listener("click", function SearchOverlayComponent_Template_div_click_2_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(3, "input", 3);
    \u0275\u0275listener("ngModelChange", function SearchOverlayComponent_Template_input_ngModelChange_3_listener($event) {
      return ctx.search.next($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-icon", 4);
    \u0275\u0275text(5, " search ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 5);
    \u0275\u0275listener("click", function SearchOverlayComponent_Template_div_click_6_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275repeaterCreate(7, SearchOverlayComponent_For_8_Template, 3, 1, "button", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275template(9, SearchOverlayComponent_Conditional_9_Template, 3, 0, "button", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 8)(11, "app-icon");
    \u0275\u0275text(12, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx.search.getValue());
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx.item_list);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!(ctx.item_list == null ? null : ctx.item_list.length) ? 9 : -1);
  }
}, dependencies: [NgTemplateOutlet, DefaultValueAccessor, NgControlStatus, NgModel, MatRipple, IconComponent] });
var SearchOverlayComponent = _SearchOverlayComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchOverlayComponent, { className: "SearchOverlayComponent", filePath: "apps/concierge/src/app/signage/search-overlay.component.ts", lineNumber: 85 });
})();

// apps/concierge/src/app/signage/signage-item-playlists.component.ts
var _c05 = ["*"];
var _forTrack03 = ($index, $item) => $item.id;
var _c12 = () => ["/signage", "media"];
var _c22 = (a0) => ({ playlist: a0 });
function SignageItemPlaylistsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.extra, " ");
  }
}
function SignageItemPlaylistsComponent_Conditional_5_For_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 21);
  }
}
function SignageItemPlaylistsComponent_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275template(1, SignageItemPlaylistsComponent_Conditional_5_For_2_div_1_Template, 1, 0, "div", 9);
    \u0275\u0275elementStart(2, "button", 10)(3, "app-icon");
    \u0275\u0275text(4, "drag_handle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 11)(6, "div", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 14)(11, "app-icon");
    \u0275\u0275text(12, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "mat-menu", null, 0)(15, "a", 15)(16, "div", 16)(17, "app-icon", 17);
    \u0275\u0275text(18, " visibility ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 18);
    \u0275\u0275text(20, "View Playlist");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "button", 19);
    \u0275\u0275listener("click", function SignageItemPlaylistsComponent_Conditional_5_For_2_Template_button_click_21_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.remove.next(item_r4));
    });
    \u0275\u0275elementStart(22, "div", 16)(23, "app-icon", 20);
    \u0275\u0275text(24, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 18);
    \u0275\u0275text(26, "Remove Playlist");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const menu_r5 = \u0275\u0275reference(14);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", item_r4.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.playlistCount(item_r4.id) || 0, " Media items ");
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r5);
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c12))("queryParams", \u0275\u0275pureFunction1(6, _c22, item_r4.id));
  }
}
function SignageItemPlaylistsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275listener("cdkDropListDropped", function SignageItemPlaylistsComponent_Conditional_5_Template_div_cdkDropListDropped_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.ondrop.next($event));
    });
    \u0275\u0275repeaterCreate(1, SignageItemPlaylistsComponent_Conditional_5_For_2_Template, 27, 8, "div", 7, _forTrack03);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 8);
    \u0275\u0275listener("click", function SignageItemPlaylistsComponent_Conditional_5_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.add.emit());
    });
    \u0275\u0275text(5, "Add Playlist");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx_r0.active_playlists));
  }
}
function SignageItemPlaylistsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 22)(2, "app-icon", 23);
    \u0275\u0275text(3, "hide_image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 24);
    \u0275\u0275listener("click", function SignageItemPlaylistsComponent_Conditional_7_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.add.emit());
    });
    \u0275\u0275text(7, " Add Playlist ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("No playlists in ", ctx_r0.name, ".");
  }
}
var PLAYLIST_ITEM_COUNTS = {};
var _SignageItemPlaylistsComponent = class _SignageItemPlaylistsComponent {
  playlistCount(id) {
    return PLAYLIST_ITEM_COUNTS[id]?.count || 0;
  }
  constructor(_state) {
    this._state = _state;
    this.name = "zone";
    this.extra = "";
    this.add = new EventEmitter();
    this.remove = new EventEmitter();
    this.ondrop = new EventEmitter();
    this._playlist_ids = new BehaviorSubject([]);
    this.active_playlists = combineLatest([
      this._state.playlists,
      this._playlist_ids,
      this._state.has_changed
    ]).pipe(map(([playlists, ids]) => ids.map((id) => playlists.find((_) => _.id === id))), tap((playlists) => {
      for (const item of playlists) {
        const old_counts = PLAYLIST_ITEM_COUNTS[item.id];
        if (old_counts && old_counts.last_updated > item.updated_at * 1e3) {
          continue;
        }
        this._state.getPlaylistMedia(item.id).then((media) => {
          PLAYLIST_ITEM_COUNTS[item.id] = {
            count: media.length,
            last_updated: Date.now()
          };
        });
      }
    }), startWith([]));
  }
  ngOnChanges(changes) {
    if (changes.item) {
      this._playlist_ids.next(this.item?.playlists || []);
    }
  }
};
_SignageItemPlaylistsComponent.\u0275fac = function SignageItemPlaylistsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignageItemPlaylistsComponent)(\u0275\u0275directiveInject(SignageStateService));
};
_SignageItemPlaylistsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageItemPlaylistsComponent, selectors: [["signage-item-playlists"]], inputs: { item: "item", name: "name", extra: "extra" }, outputs: { add: "add", remove: "remove", ondrop: "ondrop" }, features: [\u0275\u0275NgOnChangesFeature], ngContentSelectors: _c05, decls: 8, vars: 5, consts: [["menu", "matMenu"], [1, "flex", "items-center", "justify-center", "space-x-2"], [1, "text-xl", "font-medium"], ["class", "px-2 py-1 text-xs font-mono bg-base-200 rounded-lg uppercase", 4, "ngIf"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8", "space-y-2", "mx-auto", "flex-1"], [1, "px-2", "py-1", "text-xs", "font-mono", "bg-base-200", "rounded-lg", "uppercase"], ["cdkDropList", "", 1, "flex-1", "h-1/2", "overflow-auto", "flex", "flex-col", "space-y-2", "mt-4", 3, "cdkDropListDropped"], ["cdkDrag", "", 1, "w-full", "bg-base-100", "h-20", "rounded-lg", "flex", "items-center", "p-2", "space-x-2", "border", "border-base-300"], ["btn", "", "matRipple", "", 3, "click"], ["class", "h-20 w-full border-4 border-dashed border-base-400 bg-base-300 rounded-xl", 4, "cdkDragPlaceholder"], ["matRipple", "", "cdkDragHandle", "", "matTooltip", "Drag to reorder", 1, "flex", "items-center", "justify-center", "w-6", "h-full", "rounded", "hover:bg-base-200"], [1, "text-base-content", "flex-1", "w-1/2"], [1, "truncate"], [1, "truncate", "text-sm", "opacity-30"], ["icon", "", "matRipple", "", "aria-label", "Media Actions", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "routerLink", "queryParams"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "pr-2"], ["mat-menu-item", "", 3, "click"], [1, "text-2xl", "text-error"], [1, "h-20", "w-full", "border-4", "border-dashed", "border-base-400", "bg-base-300", "rounded-xl"], [1, "flex", "flex-col", "items-center", "justify-center", "opacity-30"], [1, "text-6xl"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"]], template: function SignageItemPlaylistsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "div", 1)(1, "h3", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SignageItemPlaylistsComponent_div_3_Template, 2, 1, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275projection(4);
    \u0275\u0275template(5, SignageItemPlaylistsComponent_Conditional_5_Template, 6, 2);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275template(7, SignageItemPlaylistsComponent_Conditional_7_Template, 8, 1, "div", 4);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (ctx.item == null ? null : ctx.item.display_name) || (ctx.item == null ? null : ctx.item.name), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.extra);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(6, 3, ctx.active_playlists).length > 0 && ctx.item ? 5 : 7);
  }
}, dependencies: [NgIf, MatMenu, MatMenuItem, MatMenuTrigger, MatTooltip, MatRipple, IconComponent, RouterLink, CdkDropList, CdkDrag, CdkDragHandle, CdkDragPlaceholder, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=signage-item-playlists.component.css.map */"] });
var SignageItemPlaylistsComponent = _SignageItemPlaylistsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageItemPlaylistsComponent, { className: "SignageItemPlaylistsComponent", filePath: "apps/concierge/src/app/signage/signage-item-playlists.component.ts", lineNumber: 122 });
})();

// apps/concierge/src/app/signage/signage-displays.component.ts
var _forTrack04 = ($index, $item) => $item.id;
var _c06 = () => [];
var _c13 = (a0) => ({ display: a0 });
var _c23 = (a0, a1) => ({ display: a0, trigger: a1 });
var _c32 = () => ["/signage", "zones"];
var _c4 = (a0) => ({ zone: a0 });
function SignageDisplaysComponent_Conditional_6_For_2_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275element(2, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 16)(4, "span", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const trigger_r1 = ctx.$implicit;
    const display_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("!bg-secondary", ctx_r2.selected_trigger.getValue() === (trigger_r1 == null ? null : trigger_r1.id))("text-secondary-content", ctx_r2.selected_trigger.getValue() === (trigger_r1 == null ? null : trigger_r1.id));
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c06))("queryParams", \u0275\u0275pureFunction2(8, _c23, display_r2.id, trigger_r1 == null ? null : trigger_r1.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((trigger_r1 == null ? null : trigger_r1.display_name) || (trigger_r1 == null ? null : trigger_r1.name) || "Trigger");
  }
}
function SignageDisplaysComponent_Conditional_6_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SignageDisplaysComponent_Conditional_6_For_2_Conditional_2_For_1_Template, 6, 11, "div", 13, _forTrack04);
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(2, 0, ctx_r2.triggers));
  }
}
function SignageDisplaysComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, SignageDisplaysComponent_Conditional_6_For_2_Conditional_2_Template, 3, 2);
    \u0275\u0275pipe(3, "async");
  }
  if (rf & 2) {
    let tmp_16_0;
    const display_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("!bg-secondary", ctx_r2.selected.getValue() === display_r2.id)("text-secondary-content", ctx_r2.selected.getValue() === display_r2.id);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c06))("queryParams", \u0275\u0275pureFunction1(11, _c13, display_r2.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", display_r2.display_name || display_r2.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_16_0 = \u0275\u0275pipeBind1(3, 8, ctx_r2.active_display)) == null ? null : tmp_16_0.id) === display_r2.id && !ctx_r2.switching ? 2 : -1);
  }
}
function SignageDisplaysComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, SignageDisplaysComponent_Conditional_6_For_2_Template, 4, 13, null, null, _forTrack04);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx_r2.displays));
  }
}
function SignageDisplaysComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "app-icon", 18);
    \u0275\u0275text(2, "hide_image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.search.getValue() ? "No matching displays found" : "No displays", " ");
  }
}
function SignageDisplaysComponent_Conditional_10_div_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 30);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "zone");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "zone");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_15_0;
    const zone_r5 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(11, _c32))("queryParams", \u0275\u0275pureFunction1(12, _c4, zone_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_15_0 = \u0275\u0275pipeBind1(3, 5, \u0275\u0275pipeBind1(2, 3, zone_r5))) == null ? null : tmp_15_0.display_name) || ((tmp_15_0 = \u0275\u0275pipeBind1(5, 9, \u0275\u0275pipeBind1(4, 7, zone_r5))) == null ? null : tmp_15_0.name), " ");
  }
}
function SignageDisplaysComponent_Conditional_10_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275repeaterCreate(1, SignageDisplaysComponent_Conditional_10_div_6_For_2_Template, 6, 14, "a", 30, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementStart(4, "button", 31);
    \u0275\u0275text(5, " Add Zone ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater((tmp_3_0 = \u0275\u0275pipeBind1(3, 0, ctx_r2.active_display)) == null ? null : tmp_3_0.zones);
  }
}
function SignageDisplaysComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "signage-item-playlists", 20);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275listener("add", function SignageDisplaysComponent_Conditional_10_Template_signage_item_playlists_add_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.adding = true);
    })("remove", function SignageDisplaysComponent_Conditional_10_Template_signage_item_playlists_remove_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removePlaylist($event));
    })("ondrop", function SignageDisplaysComponent_Conditional_10_Template_signage_item_playlists_ondrop_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.drop($event));
    });
    \u0275\u0275template(6, SignageDisplaysComponent_Conditional_10_div_6_Template, 6, 2, "div", 21);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementStart(8, "button", 22)(9, "app-icon");
    \u0275\u0275text(10, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "mat-menu", null, 0)(13, "a", 23);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementStart(15, "div", 24)(16, "app-icon", 25);
    \u0275\u0275text(17, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 26);
    \u0275\u0275text(19, "Open Signage Player");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "button", 27);
    \u0275\u0275listener("click", function SignageDisplaysComponent_Conditional_10_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeDisplay());
    });
    \u0275\u0275elementStart(21, "div", 24)(22, "app-icon", 28);
    \u0275\u0275text(23, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 26);
    \u0275\u0275text(25, "Remove Display");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_7_0;
    const menu_r6 = \u0275\u0275reference(12);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("item", \u0275\u0275pipeBind1(1, 6, ctx_r2.active_trigger) || \u0275\u0275pipeBind1(2, 8, ctx_r2.active_display))("name", \u0275\u0275pipeBind1(3, 10, ctx_r2.active_trigger) ? "trigger" : "display")("extra", \u0275\u0275pipeBind1(4, 12, ctx_r2.active_trigger) ? "" : (tmp_4_0 = \u0275\u0275pipeBind1(5, 14, ctx_r2.active_display)) == null ? null : tmp_4_0.orientation);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(7, 16, ctx_r2.active_trigger));
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", menu_r6);
    \u0275\u0275advance(5);
    \u0275\u0275property("href", ctx_r2.signage_path + "/#/signage/" + ((tmp_7_0 = \u0275\u0275pipeBind1(14, 18, ctx_r2.active_display)) == null ? null : tmp_7_0.id), \u0275\u0275sanitizeUrl);
  }
}
function SignageDisplaysComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "app-icon", 18);
    \u0275\u0275text(2, "desktop_windows");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Select a display from the left to view playlists");
    \u0275\u0275elementEnd()();
  }
}
function SignageDisplaysComponent_search_overlay_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "search-overlay", 32);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("selected", function SignageDisplaysComponent_search_overlay_13_Template_search_overlay_selected_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addPlaylist($event));
    })("close", function SignageDisplaysComponent_search_overlay_13_Template_search_overlay_close_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.adding = false);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("item_list", \u0275\u0275pipeBind1(1, 1, ctx_r2.playlists));
  }
}
var _SignageDisplaysComponent = class _SignageDisplaysComponent extends AsyncHandler {
  get signage_path() {
    return this._settings.get("app.signage_path") || "/signage";
  }
  constructor(_state, _route, _settings) {
    super();
    this._state = _state;
    this._route = _route;
    this._settings = _settings;
    this.adding = false;
    this.switching = false;
    this.search = new BehaviorSubject("");
    this.loading = this._state.loading;
    this.displays = combineLatest([
      this.search,
      this._state.displays
    ]).pipe(map(([search, list]) => list.filter((_) => _.name.toLowerCase().includes(search.toLowerCase()))));
    this.selected = new BehaviorSubject("");
    this.selected_trigger = new BehaviorSubject("");
    this.active_display = combineLatest([
      this.displays,
      this.selected
    ]).pipe(map(([displays, id]) => displays.find((item) => item.id === id)));
    this.triggers = this.selected.pipe(switchMap((id) => listSystemTriggers(id)), map((_) => _.data), tap((_) => setTimeout(() => this.switching = false, 200)), shareReplay(1));
    this.active_trigger = combineLatest([
      this.triggers,
      this.selected_trigger,
      this.selected
    ]).pipe(map(([list, id, sys_id]) => list.find((item) => item.id === id && item.control_system_id === sys_id)));
    this.playlists = combineLatest([
      this.active_display,
      this.active_trigger,
      this._state.playlists,
      this._state.has_changed
    ]).pipe(map(([display, trigger, playlists]) => playlists.filter((_) => !(trigger || display)?.playlists.find((id) => _.id === id))));
    this.removeDisplay = () => __async(this, null, function* () {
      return this._state.removeDisplay(yield this.active_display.pipe(take(1)).toPromise());
    });
  }
  ngOnInit() {
    this.subscription("route.params", this._route.queryParamMap.subscribe((params) => {
      this.switching = params.get("display") !== this.selected.getValue();
      this.selected.next(params.get("display") || "");
      this.selected_trigger.next(params.get("trigger") || "");
    }));
  }
  addPlaylist(playlist) {
    return __async(this, null, function* () {
      const display = yield this.active_display.pipe(take(1)).toPromise();
      const trigger = yield this.active_trigger.pipe(take(1)).toPromise();
      const item = trigger || display;
      const playlists = [...item.playlists, playlist.id];
      const method = trigger ? updateTrigger : updateSystem;
      yield method(item.id, { playlists, version: display.version }, "patch").toPromise();
      notifySuccess(`Successfully added playlist to the ${trigger ? "trigger" : "display"}`);
      this._state.changed();
      this.adding = false;
    });
  }
  removePlaylist(playlist) {
    return __async(this, null, function* () {
      const display = yield this.active_display.pipe(take(1)).toPromise();
      const trigger = yield this.active_trigger.pipe(take(1)).toPromise();
      const item = trigger || display;
      const playlists = item.playlists.filter((id) => playlist.id !== id);
      const method = trigger ? updateTrigger : updateSystem;
      yield method(item.id, { playlists, version: display.version }, "patch").toPromise();
      notifySuccess(`Successfully removed playlist from ${trigger ? "trigger" : "display"}`);
      this._state.changed();
      this.adding = false;
    });
  }
  drop(event) {
    return __async(this, null, function* () {
      const display = yield this.active_display.pipe(take(1)).toPromise();
      const trigger = yield this.active_trigger.pipe(take(1)).toPromise();
      const item = trigger || display;
      const old_playlist = item.playlists;
      const playlists = [...old_playlist];
      moveItemInArray(playlists, event.previousIndex, event.currentIndex);
      item.playlists = playlists;
      this._state.changed();
      const method = trigger ? updateTrigger : updateSystem;
      yield method(item.id, { playlists, version: display.version }, "patch").toPromise().catch((e) => {
        item.playlists = old_playlist;
        this._state.changed();
        throw e;
      });
      notifySuccess(`Successfully re-ordered playlists on ${trigger ? "trigger" : "display"}`);
      this._state.changed();
    });
  }
};
_SignageDisplaysComponent.\u0275fac = function SignageDisplaysComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignageDisplaysComponent)(\u0275\u0275directiveInject(SignageStateService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(SettingsService));
};
_SignageDisplaysComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageDisplaysComponent, selectors: [["signage-displays"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 14, vars: 8, consts: [["menu", "matMenu"], [1, "relative", "h-full", "w-full", "overflow-visible", "flex", "space-x-4"], ["sidebar", "", 1, "w-64", "h-full", "flex", "flex-col", "space-y-4", "py-4"], [1, "text-xl", "font-medium", "text-center"], ["appearance", "outline", 1, "w-full", "no-subscript"], ["matInput", "", "placeholder", "Search...", 3, "ngModelChange", "ngModel"], [1, "h-1/2", "flex-1", "w-full", "overflow-auto", "space-y-2"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8", "space-y-2", "opacity-30"], [1, "relative", "flex", "flex-col", "flex-1", "w-1/2", "h-full", "overflow-auto", "rounded-lg", "border", "border-base-300", "p-4", "shadow", "space-y-4"], [1, "flex", "flex-col", "flex-1", 3, "item", "name", "extra"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "opacity-30"], [3, "item_list", "selected", "close", 4, "ngIf"], ["matRipple", "", 1, "w-full", "px-6", "rounded-3xl", "min-h-12", "flex", "items-center", "hover:bg-base-200", "truncate", "z-10", 3, "routerLink", "queryParams"], [1, "relative", "flex", "items-center", "space-x-2", "z-0"], [1, "w-6"], [1, "absolute", "h-16", "w-4", "border-b-2", "border-l-2", "border-base-300", "top-1/2", "left-6", "-translate-y-full"], ["matRipple", "", 1, "w-1/2", "flex-1", "px-6", "rounded-3xl", "min-h-12", "flex", "items-center", "hover:bg-base-200", "truncate", 3, "routerLink", "queryParams"], [1, "max-w-full", "truncate"], [1, "text-6xl"], [1, "text-center"], [1, "flex", "flex-col", "flex-1", 3, "add", "remove", "ondrop", "item", "name", "extra"], ["class", "flex flex-wrap items-center overflow-auto mt-4", 4, "ngIf"], ["icon", "", "matRipple", "", 1, "absolute", "top-2", "right-2", "!m-0", 3, "matMenuTriggerFor"], ["mat-menu-item", "", "target", "_blank", "ref", "noopener noreferrer", 3, "href"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "pr-2"], ["mat-menu-item", "", 3, "click"], [1, "text-2xl", "text-error"], [1, "flex", "flex-wrap", "items-center", "overflow-auto", "mt-4"], ["matRipple", "", 1, "px-2", "py-1", "font-mono", "text-xs", "bg-base-200", "rounded", "whitespace-nowrap", "m-1", 3, "routerLink", "queryParams"], ["matRipple", "", 1, "underline", "font-mono", "text-xs", "px-2", "py-1", "rounded", "m-1"], [3, "selected", "close", "item_list"]], template: function SignageDisplaysComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h3", 3);
    \u0275\u0275text(3, "Displays");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 4)(5, "input", 5);
    \u0275\u0275listener("ngModelChange", function SignageDisplaysComponent_Template_input_ngModelChange_5_listener($event) {
      return ctx.search.next($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, SignageDisplaysComponent_Conditional_6_Template, 4, 2, "div", 6);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275template(8, SignageDisplaysComponent_Conditional_8_Template, 5, 1, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 8);
    \u0275\u0275template(10, SignageDisplaysComponent_Conditional_10_Template, 26, 20, "signage-item-playlists", 9);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275template(12, SignageDisplaysComponent_Conditional_12_Template, 5, 0, "div", 10)(13, SignageDisplaysComponent_search_overlay_13_Template, 2, 3, "search-overlay", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx.search.getValue());
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = \u0275\u0275pipeBind1(7, 4, ctx.displays)) == null ? null : tmp_1_0.length) > 0 ? 6 : 8);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(11, 6, ctx.active_display) ? 10 : 12);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.adding);
  }
}, dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatInput, MatMenu, MatMenuItem, MatMenuTrigger, MatRipple, IconComponent, RouterLink, SearchOverlayComponent, SignageItemPlaylistsComponent, AsyncPipe, ZonePipe] });
var SignageDisplaysComponent = _SignageDisplaysComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageDisplaysComponent, { className: "SignageDisplaysComponent", filePath: "apps/concierge/src/app/signage/signage-displays.component.ts", lineNumber: 211 });
})();

// apps/concierge/src/app/signage/signage-zones.component.ts
var _forTrack05 = ($index, $item) => $item.id;
var _c07 = () => [];
var _c14 = (a0) => ({ zone: a0 });
var _c24 = (a0, a1) => ({ zone: a0, trigger: a1 });
function SignageZonesComponent_Conditional_6_For_2_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275element(2, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const trigger_r1 = ctx.$implicit;
    const zone_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("!bg-secondary", ctx_r2.selected_trigger.getValue() === (trigger_r1 == null ? null : trigger_r1.id))("text-secondary-content", ctx_r2.selected_trigger.getValue() === (trigger_r1 == null ? null : trigger_r1.id));
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c07))("queryParams", \u0275\u0275pureFunction2(8, _c24, zone_r2.id, trigger_r1 == null ? null : trigger_r1.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (trigger_r1 == null ? null : trigger_r1.display_name) || (trigger_r1 == null ? null : trigger_r1.name) || "Trigger", " ");
  }
}
function SignageZonesComponent_Conditional_6_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SignageZonesComponent_Conditional_6_For_2_Conditional_2_For_1_Template, 5, 11, "div", 12, _forTrack05);
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(2, 0, ctx_r2.triggers));
  }
}
function SignageZonesComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, SignageZonesComponent_Conditional_6_For_2_Conditional_2_Template, 3, 2);
    \u0275\u0275pipe(3, "async");
  }
  if (rf & 2) {
    let tmp_16_0;
    const zone_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("!bg-secondary", ctx_r2.selected.getValue() === zone_r2.id)("text-secondary-content", ctx_r2.selected.getValue() === zone_r2.id);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c07))("queryParams", \u0275\u0275pureFunction1(11, _c14, zone_r2.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", zone_r2.display_name || zone_r2.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_16_0 = \u0275\u0275pipeBind1(3, 8, ctx_r2.active_zone)) == null ? null : tmp_16_0.id) === zone_r2.id && !ctx_r2.switching ? 2 : -1);
  }
}
function SignageZonesComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, SignageZonesComponent_Conditional_6_For_2_Template, 4, 13, null, null, _forTrack05);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx_r2.zones));
  }
}
function SignageZonesComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "app-icon", 16);
    \u0275\u0275text(2, "hide_image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.search.getValue() ? "No matching zones found" : "No zones", " ");
  }
}
function SignageZonesComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "signage-item-playlists", 18);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275listener("add", function SignageZonesComponent_Conditional_10_Template_signage_item_playlists_add_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.adding = true);
    })("remove", function SignageZonesComponent_Conditional_10_Template_signage_item_playlists_remove_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removePlaylist($event));
    })("ondrop", function SignageZonesComponent_Conditional_10_Template_signage_item_playlists_ondrop_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.drop($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("item", \u0275\u0275pipeBind1(1, 2, ctx_r2.active_trigger) || \u0275\u0275pipeBind1(2, 4, ctx_r2.active_zone))("name", \u0275\u0275pipeBind1(3, 6, ctx_r2.active_trigger) ? "trigger" : "zone");
  }
}
function SignageZonesComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "app-icon", 16);
    \u0275\u0275text(2, "desktop_windows");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Select a zone from the left to view playlists");
    \u0275\u0275elementEnd()();
  }
}
function SignageZonesComponent_search_overlay_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "search-overlay", 19);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("selected", function SignageZonesComponent_search_overlay_13_Template_search_overlay_selected_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addPlaylist($event));
    })("close", function SignageZonesComponent_search_overlay_13_Template_search_overlay_close_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.adding = false);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("item_list", \u0275\u0275pipeBind1(1, 1, ctx_r2.playlists));
  }
}
var _SignageZonesComponent = class _SignageZonesComponent extends AsyncHandler {
  constructor(_state, _route) {
    super();
    this._state = _state;
    this._route = _route;
    this.adding = false;
    this.switching = false;
    this.search = new BehaviorSubject("");
    this.loading = this._state.loading;
    this.zones = combineLatest([
      this.search,
      this._state.zones
    ]).pipe(map(([search, list]) => list.filter((_) => _.name.toLowerCase().includes(search.toLowerCase()))));
    this.selected = new BehaviorSubject("");
    this.selected_trigger = new BehaviorSubject("");
    this.active_zone = combineLatest([
      this.zones,
      this.selected
    ]).pipe(map(([zones, id]) => zones.find((item) => item.id === id)));
    this.triggers = this.selected.pipe(switchMap((id) => listZoneTriggers(id)), map((_) => _.data), tap((_) => setTimeout(() => this.switching = false, 100)), shareReplay(1));
    this.active_trigger = combineLatest([
      this.triggers,
      this.selected_trigger
    ]).pipe(map(([list, id]) => list.find((item) => item.id === id)));
    this.playlists = combineLatest([
      this.active_zone,
      this.active_trigger,
      this._state.playlists,
      this._state.has_changed
    ]).pipe(map(([zone, trigger, playlists]) => playlists.filter((_) => !(trigger || zone)?.playlists.find((id) => _.id === id))));
  }
  ngOnInit() {
    this.subscription("route.params", this._route.queryParamMap.subscribe((params) => {
      this.switching = params.get("zone") !== this.selected.getValue();
      this.selected.next(params.get("zone") || "");
      this.selected_trigger.next(params.get("trigger") || "");
    }));
  }
  addPlaylist(playlist) {
    return __async(this, null, function* () {
      const zone = yield this.active_zone.pipe(take(1)).toPromise();
      const trigger = yield this.active_trigger.pipe(take(1)).toPromise();
      const item = trigger || zone;
      const playlists = [...item.playlists, playlist.id];
      const method = trigger ? updateTrigger : updateZone;
      yield method(item.id, { playlists, version: zone.version }, "patch").toPromise();
      notifySuccess(`Successfully added playlist to the ${trigger ? "trigger" : "zone"}`);
      this._state.changed();
      this.adding = false;
    });
  }
  removePlaylist(playlist) {
    return __async(this, null, function* () {
      const zone = yield this.active_zone.pipe(take(1)).toPromise();
      const trigger = yield this.active_trigger.pipe(take(1)).toPromise();
      const item = trigger || zone;
      const playlists = item.filter((id) => playlist.id !== id);
      const method = trigger ? updateTrigger : updateZone;
      yield method(item.id, { playlists, version: zone.version }, "patch").toPromise();
      notifySuccess(`Successfully removed playlist from ${trigger ? "trigger" : "zone"}`);
      this._state.changed();
      this.adding = false;
    });
  }
  drop(event) {
    return __async(this, null, function* () {
      const zone = yield this.active_zone.pipe(take(1)).toPromise();
      const trigger = yield this.active_trigger.pipe(take(1)).toPromise();
      const item = trigger || zone;
      const old_playlist = item.playlists;
      const playlists = [...old_playlist];
      moveItemInArray(playlists, event.previousIndex, event.currentIndex);
      item.playlists = playlists;
      this._state.changed();
      const method = trigger ? updateTrigger : updateZone;
      yield method(item.id, { playlists, version: zone.version }, "patch").toPromise().catch((e) => {
        item.playlists = old_playlist;
        this._state.changed();
        throw e;
      });
      notifySuccess(`Successfully re-ordered playlists on ${trigger ? "trigger" : "zone"}`);
      this._state.changed();
    });
  }
};
_SignageZonesComponent.\u0275fac = function SignageZonesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignageZonesComponent)(\u0275\u0275directiveInject(SignageStateService), \u0275\u0275directiveInject(ActivatedRoute));
};
_SignageZonesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignageZonesComponent, selectors: [["signage-zones"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 14, vars: 8, consts: [[1, "relative", "h-full", "w-full", "overflow-visible", "flex", "space-x-4"], ["sidebar", "", 1, "w-64", "h-full", "flex", "flex-col", "space-y-4", "py-4"], [1, "text-xl", "font-medium", "text-center"], ["appearance", "outline", 1, "w-full", "no-subscript"], ["matInput", "", "placeholder", "Search...", 3, "ngModelChange", "ngModel"], [1, "h-1/2", "flex-1", "w-full", "overflow-auto", "space-y-2"], [1, "flex", "flex-col", "items-center", "justify-center", "p-8", "space-y-2", "opacity-30"], [1, "relative", "flex", "flex-col", "flex-1", "w-1/2", "h-full", "overflow-auto", "rounded-lg", "border", "border-base-300", "p-4", "shadow", "space-y-4"], [1, "flex", "flex-col", "flex-1", 3, "item", "name"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "opacity-30"], [3, "item_list", "selected", "close", 4, "ngIf"], ["matRipple", "", 1, "w-full", "px-6", "rounded-3xl", "min-h-12", "flex", "items-center", "hover:bg-base-200", "truncate", "z-10", 3, "routerLink", "queryParams"], [1, "relative", "flex", "items-center", "space-x-2", "z-0"], [1, "w-6"], [1, "absolute", "h-16", "w-4", "border-b-2", "border-l-2", "border-base-300", "top-1/2", "left-6", "-translate-y-full"], ["matRipple", "", 1, "w-full", "px-6", "rounded-3xl", "min-h-12", "flex", "items-center", "hover:bg-base-200", "truncate", 3, "routerLink", "queryParams"], [1, "text-6xl"], [1, "text-center"], [1, "flex", "flex-col", "flex-1", 3, "add", "remove", "ondrop", "item", "name"], [3, "selected", "close", "item_list"]], template: function SignageZonesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
    \u0275\u0275text(3, "Zones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 3)(5, "input", 4);
    \u0275\u0275listener("ngModelChange", function SignageZonesComponent_Template_input_ngModelChange_5_listener($event) {
      return ctx.search.next($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, SignageZonesComponent_Conditional_6_Template, 4, 2, "div", 5);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275template(8, SignageZonesComponent_Conditional_8_Template, 5, 1, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 7);
    \u0275\u0275template(10, SignageZonesComponent_Conditional_10_Template, 4, 8, "signage-item-playlists", 8);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275template(12, SignageZonesComponent_Conditional_12_Template, 5, 0, "div", 9)(13, SignageZonesComponent_search_overlay_13_Template, 2, 3, "search-overlay", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx.search.getValue());
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = \u0275\u0275pipeBind1(7, 4, ctx.zones)) == null ? null : tmp_1_0.length) > 0 ? 6 : 8);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(11, 6, ctx.active_zone) ? 10 : 12);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.adding);
  }
}, dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatInput, MatRipple, IconComponent, RouterLink, SearchOverlayComponent, SignageItemPlaylistsComponent, AsyncPipe] });
var SignageZonesComponent = _SignageZonesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignageZonesComponent, { className: "SignageZonesComponent", filePath: "apps/concierge/src/app/signage/signage-zones.component.ts", lineNumber: 148 });
})();

// apps/concierge/src/app/signage/signage.module.ts
var ROUTES = [
  {
    path: "",
    component: SignageComponent,
    children: [
      { path: "", redirectTo: "media", pathMatch: "full" },
      { path: "media", component: SignageMediaComponent },
      { path: "displays", component: SignageDisplaysComponent },
      { path: "zones", component: SignageZonesComponent },
      { path: "*", redirectTo: "media", pathMatch: "full" }
    ]
  }
];
var COMPONENTS = [
  SignageComponent,
  SignageTopbarComponent,
  SignageMediaComponent,
  SignageMediaModalComponent,
  SignageMediaPreviewModalComponent,
  SignagePlaylistModalComponent,
  SignageMediaListComponent,
  SignagePlaylistMediaListComponent,
  SignageDisplaysComponent,
  SignageDisplayModalComponent,
  SignageZonesComponent,
  SearchOverlayComponent,
  SignageItemPlaylistsComponent
];
var _SignageModule = class _SignageModule {
};
_SignageModule.\u0275fac = function SignageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignageModule)();
};
_SignageModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SignageModule });
_SignageModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  UIModule,
  ComponentsModule,
  RouterModule.forChild(ROUTES),
  MatTabsModule,
  DragDropModule
] });
var SignageModule = _SignageModule;
export {
  COMPONENTS,
  SignageModule
};
//# sourceMappingURL=signage.module-ZRE4Q2AR.js.map
