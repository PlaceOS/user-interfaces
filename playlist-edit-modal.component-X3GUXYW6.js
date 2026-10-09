import {
  MatSlider,
  MatSliderModule,
  MatSliderThumb
} from "./chunk-474JKPWF.js";
import {
  PlaylistScheduleFormComponent,
  createPlaylistScheduleModel,
  playlistSchedulePayload,
  playlistScheduleSchema,
  playlistSchedules
} from "./chunk-6WYIJP6A.js";
import "./chunk-IJADYZ2M.js";
import {
  DateFieldComponent
} from "./chunk-6HHY4FJK.js";
import {
  SettingsToggleComponent
} from "./chunk-2QR6WMMY.js";
import {
  FullscreenModalShellComponent
} from "./chunk-QX7UMRWQ.js";
import "./chunk-Y6Y42IYE.js";
import {
  SignageSharedWithComponent
} from "./chunk-OJMFUBRC.js";
import {
  MediaDurationPipe
} from "./chunk-DQ3OENMI.js";
import {
  playlistAnimation
} from "./chunk-76L3RQJV.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-MSPDKJIW.js";
import "./chunk-JKGJXOUJ.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-YVBXI2KA.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule
} from "./chunk-TP37P6LZ.js";
import "./chunk-GF5I6UHA.js";
import "./chunk-W7BPHDUZ.js";
import "./chunk-OAWDSWZC.js";
import "./chunk-BAFAQKY6.js";
import "./chunk-EW627VC3.js";
import "./chunk-NVC2MTBW.js";
import "./chunk-EMBZFGIE.js";
import "./chunk-RR6Z4IN7.js";
import "./chunk-ARJ6GFJX.js";
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from "./chunk-B6VCLN4P.js";
import {
  FormField,
  applyEach,
  applyWhen,
  form,
  minLength,
  required,
  submit
} from "./chunk-2PPCVPFM.js";
import {
  TranslatePipe
} from "./chunk-KEXLIPA2.js";
import "./chunk-KABK725Z.js";
import {
  getUnixTime
} from "./chunk-4BHMYMLA.js";
import {
  MatOption
} from "./chunk-HGUL5NVP.js";
import "./chunk-E72MB55H.js";
import {
  HotkeysService
} from "./chunk-DMUGOB3K.js";
import "./chunk-PRJCR3BE.js";
import {
  Ns,
  Xh,
  Yh,
  endOfDay,
  i18n,
  notifyError,
  notifySuccess,
  startOfDay
} from "./chunk-UY3BZCXJ.js";
import "./chunk-7QGPCQM3.js";
import "./chunk-TQO6MZFG.js";
import "./chunk-C2I2ZQPH.js";
import "./chunk-ZJXU3LLP.js";
import {
  Component,
  DestroyRef,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6HUGPUMR.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// apps/signage-manager/src/app/shared/playlist-edit-modal.component.ts
var _forTrack0 = ($index, $item) => $item.value;
function PlaylistEditModalComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "settings-toggle", 28);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(2, 2, "SIGNAGE_MANAGER.PLAYLIST_DISTRIBUTION"))("formField", ctx_r0.form.distribution);
    \u0275\u0275control();
  }
}
function PlaylistEditModalComponent_For_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    \u0275\u0275property("value", option_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, option_r2.label));
  }
}
function PlaylistEditModalComponent_Conditional_72_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "playlist-schedule-form", 37);
    \u0275\u0275listener("toggle", function PlaylistEditModalComponent_Conditional_72_For_17_Template_playlist_schedule_form_toggle_0_listener() {
      const \u0275$index_142_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openSchedule(\u0275$index_142_r5));
    })("remove", function PlaylistEditModalComponent_Conditional_72_For_17_Template_playlist_schedule_form_remove_0_listener($event) {
      const \u0275$index_142_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeSchedule($event, \u0275$index_142_r5));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const schedule_r6 = ctx.$implicit;
    const \u0275$index_142_r5 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("schedule", schedule_r6)("index", \u0275$index_142_r5)("open", ctx_r0.isScheduleOpen(\u0275$index_142_r5))("can_remove", ctx_r0.model().schedules.length > 1);
  }
}
function PlaylistEditModalComponent_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 16)(2, "label", 30);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "a-date-field", 31);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 16)(7, "label", 32);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "a-date-field", 33);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 8)(12, "label");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 34);
    \u0275\u0275repeaterCreate(16, PlaylistEditModalComponent_Conditional_72_For_17_Template, 1, 4, "playlist-schedule-form", 35, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(18, "button", 36);
    \u0275\u0275listener("click", function PlaylistEditModalComponent_Conditional_72_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addSchedule());
    });
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 9, "SIGNAGE_MANAGER.VALID_FROM"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r0.form.valid_from)("clear", true);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 11, "FORM.EXPIRES_AT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("from", ctx_r0.model().valid_from)("formField", ctx_r0.form.valid_until)("clear", true);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 13, "SIGNAGE_MANAGER.PLAYLIST_SCHEDULES"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.form.schedules);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 15, "SIGNAGE_MANAGER.ADD_SCHEDULE"), " ");
  }
}
var HOTKEY_BLOCKING_FOCUS = 'select, mat-select, [role="combobox"], [role="listbox"], [role="option"], [role="menu"], [role="menuitem"]';
var ANIMATION_OPTIONS = [
  { value: Ns.Default, label: "COMMON.DEFAULT" },
  { value: Ns.Cut, label: "SIGNAGE_MANAGER.ANIM_CUT" },
  {
    value: Ns.CrossFade,
    label: "SIGNAGE_MANAGER.ANIM_CROSS_FADE"
  },
  { value: Ns.SlideTop, label: "SIGNAGE_MANAGER.ANIM_SLIDE_TOP" },
  {
    value: Ns.SlideLeft,
    label: "SIGNAGE_MANAGER.ANIM_SLIDE_LEFT"
  },
  {
    value: Ns.SlideRight,
    label: "SIGNAGE_MANAGER.ANIM_SLIDE_RIGHT"
  },
  {
    value: Ns.SlideBottom,
    label: "SIGNAGE_MANAGER.ANIM_SLIDE_BOTTOM"
  }
];
var PlaylistEditModalComponent = class _PlaylistEditModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.animation_options = ANIMATION_OPTIONS;
    this.active_schedule_index = signal(
      0,
      ...ngDevMode ? [{ debugName: "active_schedule_index" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlist = this._data.playlist;
    this.group_id = this._data.group_id || "";
    this._loaded_animation = playlistAnimation(this.playlist);
    this.model = signal(
      {
        name: this.playlist.name || "",
        description: this.playlist.description || "",
        enabled: this.playlist.enabled ?? true,
        distribution: !!this.playlist.distribution,
        random: !!this.playlist.random,
        default_animation: this._loaded_animation,
        orientation: this.playlist.orientation || "unspecified",
        default_duration: this.playlist.default_duration || 15e3,
        schedules: playlistSchedules(this.playlist).map((schedule) => createPlaylistScheduleModel(schedule)),
        valid_from: this.playlist.valid_from ? this.playlist.valid_from * 1e3 : null,
        valid_until: this.playlist.valid_until ? this.playlist.valid_until * 1e3 : null
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (path) => {
      required(path.name);
      minLength(path.schedules, 1);
      applyWhen(path.schedules, ({ valueOf }) => !valueOf(path.distribution), (schedules) => {
        applyEach(schedules, playlistScheduleSchema);
      });
    });
    const save_hotkey = inject(HotkeysService).listen(["KeyS"], () => {
      if (!document.activeElement?.closest(HOTKEY_BLOCKING_FOCUS)) {
        this.savePlaylist();
      }
    });
    inject(DestroyRef).onDestroy(() => save_hotkey?.unsubscribe());
    if (!this.model().distribution && !this.model().schedules.length) {
      this.addSchedule();
    }
  }
  addSchedule() {
    this.model.update((model) => __spreadProps(__spreadValues({}, model), {
      schedules: [...model.schedules, createPlaylistScheduleModel()]
    }));
    this.active_schedule_index.set(this.model().schedules.length - 1);
  }
  removeSchedule(event, index) {
    event.preventDefault();
    event.stopPropagation();
    if (this.model().schedules.length <= 1)
      return;
    this.model.update((model) => __spreadProps(__spreadValues({}, model), {
      schedules: model.schedules.filter((_, item_index) => {
        return item_index !== index;
      })
    }));
    this.active_schedule_index.update((active_index) => {
      if (active_index === index)
        return null;
      return active_index > index ? active_index - 1 : active_index;
    });
  }
  openSchedule(index) {
    this.active_schedule_index.update((active_index) => active_index === index ? null : index);
  }
  isScheduleOpen(index) {
    return this.active_schedule_index() === index;
  }
  async savePlaylist() {
    await submit(this.form, async () => {
      this.loading.set(true);
      this._dialog_ref.disableClose = true;
      const _a = this.model(), { schedules, valid_from, valid_until, default_animation } = _a, fields = __objRest(_a, ["schedules", "valid_from", "valid_until", "default_animation"]);
      const data = __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, fields), default_animation !== this._loaded_animation ? { default_animation } : {}), fields.distribution ? {} : {
        schedules: schedules.map((schedule) => playlistSchedulePayload(schedule))
      }), {
        // Null clears a date. The update is a patch, so a missing
        // date would keep the saved one.
        valid_from: valid_from ? getUnixTime(startOfDay(valid_from)) : null,
        valid_until: valid_until ? getUnixTime(endOfDay(valid_until)) : null
      });
      if (this.playlist.id && this._data.beforeSave && !await this._data.beforeSave(data)) {
        this._dialog_ref.disableClose = false;
        this.loading.set(false);
        return;
      }
      try {
        let result;
        if (this.playlist.id) {
          result = this._data.onEdit ? await this._data.onEdit(this.playlist.id, data) : await Yh(this.playlist.id, data);
        } else {
          result = this._data.onAdd ? await this._data.onAdd(data) : await Xh(data);
        }
        this._dialog_ref.disableClose = false;
        this._dialog_ref.close(result);
        notifySuccess(i18n("SIGNAGE_MANAGER.PLAYLIST_SAVED"));
      } catch {
        this._dialog_ref.disableClose = false;
        this.loading.set(false);
        notifyError(i18n("SIGNAGE_MANAGER.PLAYLIST_SAVE_ERROR"));
      }
    });
  }
  static {
    this.\u0275fac = function PlaylistEditModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaylistEditModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaylistEditModalComponent, selectors: [["playlist-edit-modal"]], decls: 74, vars: 81, consts: [["confirm_hotkey", "S", 3, "confirm", "heading", "loading"], ["for", "name"], ["required", ""], ["appearance", "outline", 1, "w-full"], ["matInput", "", 3, "placeholder", "formField"], [1, "mb-4", "flex", "items-center", "space-x-4"], [1, "flex-1", 3, "label", "formField"], [1, "mb-4"], [1, "pt-2", "pb-4"], [1, "border-base-300", "relative", "rounded-sm", "border"], ["for", "default-duration", 1, "bg-base-100", "absolute", "top-0", "left-2", "m-0", "flex", "w-auto", "min-w-0", "-translate-y-1/2", "items-center", "space-x-2", "px-2"], [1, "flex", "items-center", "px-2", "pt-2"], ["min", "5000", "max", "300000", "step", "1000", 1, "flex-1"], ["matSliderThumb", "", 3, "formField"], [1, "w-16", "px-2", "text-right", "font-mono", "text-xs"], [1, "flex", "space-x-2"], [1, "flex-1"], ["for", "orientation"], [3, "formField", "placeholder"], ["value", "unspecified"], ["value", "landscape"], ["value", "portrait"], ["value", "square"], ["for", "animation"], [3, "value"], ["for", "description"], ["matInput", "", 1, "min-h-32", 3, "placeholder", "formField"], ["type", "playlists", 3, "item_id", "group_id", "allow_unshare"], [3, "label", "formField"], [1, "flex", "space-x-4"], ["for", "valid-from"], ["name", "valid-from", 3, "formField", "clear"], ["for", "valid-until"], ["name", "valid-until", 3, "from", "formField", "clear"], [1, "mt-2", "flex", "flex-col", "gap-4"], [3, "schedule", "index", "open", "can_remove"], ["type", "button", 1, "border-primary", "text-primary", "hover:bg-primary/10", "rounded", "border", "px-3", "py-2", "text-sm", "font-medium", 3, "click"], [3, "toggle", "remove", "schedule", "index", "open", "can_remove"]], template: function PlaylistEditModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("confirm", function PlaylistEditModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.savePlaylist();
        });
        \u0275\u0275elementStart(3, "form")(4, "label", 1);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementStart(7, "span", 2);
        \u0275\u0275text(8, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "mat-form-field", 3);
        \u0275\u0275element(10, "input", 4);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(13, "mat-error");
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 5);
        \u0275\u0275element(17, "settings-toggle", 6);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275element(19, "settings-toggle", 6);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(21, PlaylistEditModalComponent_Conditional_21_Template, 3, 4, "div", 7);
        \u0275\u0275elementStart(22, "div", 8)(23, "div", 9)(24, "label", 10)(25, "div");
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 11)(29, "mat-slider", 12);
        \u0275\u0275element(30, "input", 13);
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 14);
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "mediaDuration");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(34, "div", 15)(35, "div", 16)(36, "label", 17);
        \u0275\u0275text(37);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "mat-form-field", 3)(40, "mat-select", 18);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275elementStart(43, "mat-option", 19);
        \u0275\u0275text(44);
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "mat-option", 20);
        \u0275\u0275text(47);
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "mat-option", 21);
        \u0275\u0275text(50);
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "mat-option", 22);
        \u0275\u0275text(53);
        \u0275\u0275pipe(54, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "div", 16)(56, "label", 23);
        \u0275\u0275text(57);
        \u0275\u0275pipe(58, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "mat-form-field", 3)(60, "mat-select", 18);
        \u0275\u0275pipe(61, "translate");
        \u0275\u0275pipe(62, "translate");
        \u0275\u0275repeaterCreate(63, PlaylistEditModalComponent_For_64_Template, 3, 4, "mat-option", 24, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(65, "label", 25);
        \u0275\u0275text(66);
        \u0275\u0275pipe(67, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "mat-form-field", 3);
        \u0275\u0275element(69, "textarea", 26);
        \u0275\u0275pipe(70, "translate");
        \u0275\u0275pipe(71, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(72, PlaylistEditModalComponent_Conditional_72_Template, 21, 17);
        \u0275\u0275element(73, "signage-shared-with", 27);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 35, ctx.playlist.id ? "SIGNAGE_MANAGER.PLAYLIST_EDIT" : "SIGNAGE_MANAGER.NEW_PLAYLIST"))("loading", ctx.loading() ? \u0275\u0275pipeBind1(2, 37, "SIGNAGE_MANAGER.PLAYLIST_SAVING") : "");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 39, "FORM.NAME"));
        \u0275\u0275advance(5);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 41, "FORM.NAME"))("formField", ctx.form.name);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(12, 43, "SIGNAGE_MANAGER.PLAYLIST_NAME_ARIA"));
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 45, "FORM.NAME_REQUIRED"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(18, 47, "COMMON.ENABLED"))("formField", ctx.form.enabled);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(20, 49, "SIGNAGE_MANAGER.PLAYLIST_SHUFFLE"))("formField", ctx.form.random);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.playlist.id ? 21 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 51, "SIGNAGE_MANAGER.DEFAULT_PLAY_TIME"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("formField", ctx.form.default_duration);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 53, ctx.model().default_duration / 1e3), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 55, "SIGNAGE_MANAGER.ORIENTATION"));
        \u0275\u0275advance(3);
        \u0275\u0275property("formField", ctx.form.orientation)("placeholder", \u0275\u0275pipeBind1(41, 57, "COMMON.LOCATION_UNSPECIFIED"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(42, 59, "SIGNAGE_MANAGER.PLAYLIST_ORIENTATION_ARIA"));
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 61, "COMMON.LOCATION_UNSPECIFIED"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 63, "SIGNAGE_MANAGER.ORIENTATION_LANDSCAPE"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 65, "SIGNAGE_MANAGER.ORIENTATION_PORTRAIT"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 67, "SIGNAGE_MANAGER.ORIENTATION_SQUARE"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 69, "SIGNAGE_MANAGER.ANIMATION"));
        \u0275\u0275advance(3);
        \u0275\u0275property("formField", ctx.form.default_animation)("placeholder", \u0275\u0275pipeBind1(61, 71, "COMMON.DEFAULT"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(62, 73, "SIGNAGE_MANAGER.DEFAULT_ANIMATION"));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.animation_options);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 75, "COMMON.DESCRIPTION"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(70, 77, "COMMON.DESCRIPTION"))("formField", ctx.form.description);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(71, 79, "SIGNAGE_MANAGER.PLAYLIST_DESCRIPTION_ARIA"));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx.model().distribution ? 72 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("item_id", ctx.playlist.id)("group_id", ctx.group_id)("allow_unshare", true);
      }
    }, dependencies: [
      FullscreenModalShellComponent,
      SettingsToggleComponent,
      FormField,
      DateFieldComponent,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatSliderModule,
      MatSlider,
      MatSliderThumb,
      PlaylistScheduleFormComponent,
      SignageSharedWithComponent,
      TranslatePipe,
      MediaDurationPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaylistEditModalComponent, [{
    type: Component,
    args: [{ selector: "playlist-edit-modal", template: `
        <fullscreen-modal-shell
            [heading]="
                (playlist.id
                    ? 'SIGNAGE_MANAGER.PLAYLIST_EDIT'
                    : 'SIGNAGE_MANAGER.NEW_PLAYLIST'
                ) | translate
            "
            confirm_hotkey="S"
            (confirm)="savePlaylist()"
            [loading]="
                loading() ? ('SIGNAGE_MANAGER.PLAYLIST_SAVING' | translate) : ''
            "
        >
            <form>
                <label for="name"
                    >{{ 'FORM.NAME' | translate }}<span required>*</span></label
                >
                <mat-form-field appearance="outline" class="w-full">
                    <input
                        matInput
                        [placeholder]="'FORM.NAME' | translate"
                        [formField]="form.name"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.PLAYLIST_NAME_ARIA' | translate
                        "
                    />
                    <mat-error>{{
                        'FORM.NAME_REQUIRED' | translate
                    }}</mat-error>
                </mat-form-field>
                <div class="mb-4 flex items-center space-x-4">
                    <settings-toggle
                        class="flex-1"
                        [label]="'COMMON.ENABLED' | translate"
                        [formField]="form.enabled"
                    >
                    </settings-toggle>
                    <settings-toggle
                        class="flex-1"
                        [label]="'SIGNAGE_MANAGER.PLAYLIST_SHUFFLE' | translate"
                        [formField]="form.random"
                    >
                    </settings-toggle>
                </div>
                @if (!playlist.id) {
                    <div class="mb-4">
                        <settings-toggle
                            [label]="
                                'SIGNAGE_MANAGER.PLAYLIST_DISTRIBUTION'
                                    | translate
                            "
                            [formField]="form.distribution"
                        >
                        </settings-toggle>
                    </div>
                }
                <div class="pt-2 pb-4">
                    <div class="border-base-300 relative rounded-sm border">
                        <label
                            for="default-duration"
                            class="bg-base-100 absolute top-0 left-2 m-0 flex w-auto min-w-0 -translate-y-1/2 items-center space-x-2 px-2"
                        >
                            <div>
                                {{
                                    'SIGNAGE_MANAGER.DEFAULT_PLAY_TIME'
                                        | translate
                                }}
                            </div>
                        </label>
                        <div class="flex items-center px-2 pt-2">
                            <mat-slider
                                class="flex-1"
                                min="5000"
                                max="300000"
                                step="1000"
                            >
                                <input
                                    matSliderThumb
                                    [formField]="form.default_duration"
                                />
                            </mat-slider>
                            <div class="w-16 px-2 text-right font-mono text-xs">
                                {{
                                    model().default_duration / 1000
                                        | mediaDuration
                                }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <div class="flex-1">
                        <label for="orientation">{{
                            'SIGNAGE_MANAGER.ORIENTATION' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                [formField]="form.orientation"
                                [placeholder]="
                                    'COMMON.LOCATION_UNSPECIFIED' | translate
                                "
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.PLAYLIST_ORIENTATION_ARIA'
                                        | translate
                                "
                            >
                                <mat-option value="unspecified">
                                    {{
                                        'COMMON.LOCATION_UNSPECIFIED'
                                            | translate
                                    }}
                                </mat-option>
                                <mat-option value="landscape">{{
                                    'SIGNAGE_MANAGER.ORIENTATION_LANDSCAPE'
                                        | translate
                                }}</mat-option>
                                <mat-option value="portrait">{{
                                    'SIGNAGE_MANAGER.ORIENTATION_PORTRAIT'
                                        | translate
                                }}</mat-option>
                                <mat-option value="square">{{
                                    'SIGNAGE_MANAGER.ORIENTATION_SQUARE'
                                        | translate
                                }}</mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="flex-1">
                        <label for="animation">{{
                            'SIGNAGE_MANAGER.ANIMATION' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                [formField]="form.default_animation"
                                [placeholder]="'COMMON.DEFAULT' | translate"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.DEFAULT_ANIMATION'
                                        | translate
                                "
                            >
                                @for (
                                    option of animation_options;
                                    track option.value
                                ) {
                                    <mat-option [value]="option.value">{{
                                        option.label | translate
                                    }}</mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                </div>
                <label for="description">{{
                    'COMMON.DESCRIPTION' | translate
                }}</label>
                <mat-form-field appearance="outline" class="w-full">
                    <textarea
                        matInput
                        [placeholder]="'COMMON.DESCRIPTION' | translate"
                        [formField]="form.description"
                        class="min-h-32"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.PLAYLIST_DESCRIPTION_ARIA'
                                | translate
                        "
                    ></textarea>
                </mat-form-field>
                @if (!model().distribution) {
                    <div class="flex space-x-4">
                        <div class="flex-1">
                            <label for="valid-from">{{
                                'SIGNAGE_MANAGER.VALID_FROM' | translate
                            }}</label>
                            <a-date-field
                                name="valid-from"
                                [formField]="form.valid_from"
                                [clear]="true"
                            ></a-date-field>
                        </div>
                        <div class="flex-1">
                            <label for="valid-until">{{
                                'FORM.EXPIRES_AT' | translate
                            }}</label>
                            <a-date-field
                                name="valid-until"
                                [from]="model().valid_from"
                                [formField]="form.valid_until"
                                [clear]="true"
                            ></a-date-field>
                        </div>
                    </div>
                    <div class="pt-2 pb-4">
                        <label>{{
                            'SIGNAGE_MANAGER.PLAYLIST_SCHEDULES' | translate
                        }}</label>
                        <div class="mt-2 flex flex-col gap-4">
                            <!-- Track the field, so each form keeps its state when one before it is removed -->
                            @for (
                                schedule of form.schedules;
                                track schedule;
                                let index = $index
                            ) {
                                <playlist-schedule-form
                                    [schedule]="schedule"
                                    [index]="index"
                                    [open]="isScheduleOpen(index)"
                                    [can_remove]="model().schedules.length > 1"
                                    (toggle)="openSchedule(index)"
                                    (remove)="removeSchedule($event, index)"
                                />
                            }
                            <button
                                type="button"
                                class="border-primary text-primary hover:bg-primary/10 rounded border px-3 py-2 text-sm font-medium"
                                (click)="addSchedule()"
                            >
                                {{ 'SIGNAGE_MANAGER.ADD_SCHEDULE' | translate }}
                            </button>
                        </div>
                    </div>
                }
                <signage-shared-with
                    type="playlists"
                    [item_id]="playlist.id"
                    [group_id]="group_id"
                    [allow_unshare]="true"
                ></signage-shared-with>
            </form>
        </fullscreen-modal-shell>
    `, imports: [
      FullscreenModalShellComponent,
      SettingsToggleComponent,
      FormField,
      DateFieldComponent,
      TranslatePipe,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatSliderModule,
      MediaDurationPipe,
      PlaylistScheduleFormComponent,
      SignageSharedWithComponent
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaylistEditModalComponent, { className: "PlaylistEditModalComponent", filePath: "apps/signage-manager/src/app/shared/playlist-edit-modal.component.ts", lineNumber: 350 });
})();
export {
  PlaylistEditModalComponent
};
//# debugId=684a2668-f6f8-5760-bc86-5f4a50cd2f84
//# sourceMappingURL=playlist-edit-modal.component-X3GUXYW6.js.map
