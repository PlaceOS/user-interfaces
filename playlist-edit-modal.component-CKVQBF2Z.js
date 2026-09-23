import {
  MatSlider,
  MatSliderModule,
  MatSliderThumb
} from "./chunk-4ADINYWA.js";
import {
  MediaDurationPipe
} from "./chunk-OIL5SUN4.js";
import {
  SignageSharedWithComponent
} from "./chunk-2BPRQIJ6.js";
import {
  PlaylistScheduleFormComponent,
  createPlaylistScheduleModel,
  playlistSchedulePayload,
  playlistScheduleSchema,
  playlistSchedules
} from "./chunk-WOR6BRYU.js";
import "./chunk-PUOYYQT4.js";
import {
  DateFieldComponent
} from "./chunk-W67KDNS7.js";
import {
  SettingsToggleComponent
} from "./chunk-6BOETFVK.js";
import "./chunk-JKZHMNWG.js";
import {
  FullscreenModalShellComponent
} from "./chunk-R3O7U77Y.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-HAWXI6T5.js";
import "./chunk-ALIJGTVZ.js";
import "./chunk-CTCSUEKQ.js";
import "./chunk-ELWUXYHY.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-XXOZKDFH.js";
import {
  FormField,
  MatError,
  MatFormField,
  MatFormFieldModule,
  applyEach,
  applyWhen,
  form,
  minLength,
  required,
  submit
} from "./chunk-ENMVWGR2.js";
import "./chunk-BL3MYKDU.js";
import "./chunk-DEXSN3AW.js";
import {
  TranslatePipe
} from "./chunk-4DBHNJWE.js";
import "./chunk-NU7WVQWF.js";
import "./chunk-WD3LLUYG.js";
import "./chunk-HGH6T6SS.js";
import {
  HotkeysService,
  getUnixTime
} from "./chunk-LUPWO4EV.js";
import "./chunk-MJSE6BMT.js";
import {
  Component,
  Cs,
  DestroyRef,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatOption,
  Qh,
  Wh,
  endOfDay,
  i18n,
  inject,
  notifyError,
  notifySuccess,
  setClassMetadata,
  signal,
  startOfDay,
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
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JL3PENQK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/shared/playlist-edit-modal.component.ts
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
function PlaylistEditModalComponent_Conditional_91_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "playlist-schedule-form", 37);
    \u0275\u0275listener("toggle", function PlaylistEditModalComponent_Conditional_91_For_17_Template_playlist_schedule_form_toggle_0_listener() {
      const \u0275$index_165_r4 = \u0275\u0275restoreView(_r3).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openSchedule(\u0275$index_165_r4));
    })("remove", function PlaylistEditModalComponent_Conditional_91_For_17_Template_playlist_schedule_form_remove_0_listener($event) {
      const \u0275$index_165_r4 = \u0275\u0275restoreView(_r3).$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeSchedule($event, \u0275$index_165_r4));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const schedule_r5 = ctx.$implicit;
    const \u0275$index_165_r4 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("schedule", schedule_r5)("index", \u0275$index_165_r4)("open", ctx_r0.isScheduleOpen(\u0275$index_165_r4))("can_remove", ctx_r0.model().schedules.length > 1);
  }
}
function PlaylistEditModalComponent_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
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
    \u0275\u0275repeaterCreate(16, PlaylistEditModalComponent_Conditional_91_For_17_Template, 1, 4, "playlist-schedule-form", 35, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(18, "button", 36);
    \u0275\u0275listener("click", function PlaylistEditModalComponent_Conditional_91_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r2);
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
    this.active_schedule_index = signal(
      0,
      ...ngDevMode ? [{ debugName: "active_schedule_index" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playlist = this._data.playlist;
    this.group_id = this._data.group_id || "";
    this.model = signal(
      {
        name: this.playlist.name || "",
        description: this.playlist.description || "",
        enabled: this.playlist.enabled ?? true,
        distribution: !!this.playlist.distribution,
        random: !!this.playlist.random,
        default_animation: this.playlist.default_animation ?? Cs.Default,
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
    const save_hotkey = inject(HotkeysService).listen(["KeyS"], () => this.savePlaylist());
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
      const form_value = this.model();
      const data = __spreadValues({}, form_value);
      if (data.distribution) {
        delete data.schedules;
      } else {
        data.schedules = form_value.schedules.map((schedule) => playlistSchedulePayload(schedule));
      }
      if (data.valid_from) {
        data.valid_from = getUnixTime(startOfDay(data.valid_from));
      } else
        delete data.valid_from;
      if (data.valid_until) {
        data.valid_until = getUnixTime(endOfDay(data.valid_until));
      } else
        delete data.valid_until;
      try {
        let result;
        if (this.playlist.id) {
          result = this._data.onEdit ? await this._data.onEdit(this.playlist.id, data) : await Wh(this.playlist.id, data);
        } else {
          result = this._data.onAdd ? await this._data.onAdd(data) : await Qh(data);
        }
        this._dialog_ref.disableClose = false;
        this._dialog_ref.close(result);
        notifySuccess(i18n("SIGNAGE_MANAGER.PLAYLIST_SAVED"));
      } catch (e) {
        this._dialog_ref.disableClose = false;
        this.loading.set(false);
        notifyError(i18n("SIGNAGE_MANAGER.PLAYLIST_SAVE_ERROR"));
        throw e;
      }
    });
  }
  static {
    this.\u0275fac = function PlaylistEditModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaylistEditModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaylistEditModalComponent, selectors: [["playlist-edit-modal"]], decls: 93, vars: 108, consts: [["confirm_hotkey", "S", 3, "confirm", "heading", "loading"], ["for", "name"], ["required", ""], ["appearance", "outline", 1, "w-full"], ["matInput", "", 3, "placeholder", "formField"], [1, "mb-4", "flex", "items-center", "space-x-4"], [1, "flex-1", 3, "label", "formField"], [1, "mb-4"], [1, "pt-2", "pb-4"], [1, "border-base-300", "relative", "rounded-sm", "border"], ["for", "default-duration", 1, "bg-base-100", "absolute", "top-0", "left-2", "m-0", "flex", "w-auto", "min-w-0", "-translate-y-1/2", "items-center", "space-x-2", "px-2"], [1, "flex", "items-center", "px-2", "pt-2"], ["min", "5000", "max", "300000", "step", "1000", 1, "flex-1"], ["matSliderThumb", "", 3, "formField"], [1, "w-16", "px-2", "text-right", "font-mono", "text-xs"], [1, "flex", "space-x-2"], [1, "flex-1"], ["for", "orientation"], [3, "formField", "placeholder"], ["value", "unspecified"], ["value", "landscape"], ["value", "portrait"], ["value", "square"], ["for", "animation"], [3, "value"], ["for", "description"], ["matInput", "", 1, "min-h-32", 3, "placeholder", "formField"], ["type", "playlists", 3, "item_id", "group_id"], [3, "label", "formField"], [1, "flex", "space-x-4"], ["for", "valid-from"], ["name", "valid-from", 3, "formField", "clear"], ["for", "valid-until"], ["name", "valid-until", 3, "from", "formField", "clear"], [1, "mt-2", "flex", "flex-col", "gap-4"], [3, "schedule", "index", "open", "can_remove"], ["type", "button", 1, "border-primary", "text-primary", "hover:bg-primary/10", "rounded", "border", "px-3", "py-2", "text-sm", "font-medium", 3, "click"], [3, "toggle", "remove", "schedule", "index", "open", "can_remove"]], template: function PlaylistEditModalComponent_Template(rf, ctx) {
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
        \u0275\u0275elementStart(63, "mat-option", 24);
        \u0275\u0275text(64);
        \u0275\u0275pipe(65, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "mat-option", 24);
        \u0275\u0275text(67);
        \u0275\u0275pipe(68, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "mat-option", 24);
        \u0275\u0275text(70);
        \u0275\u0275pipe(71, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "mat-option", 24);
        \u0275\u0275text(73);
        \u0275\u0275pipe(74, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "mat-option", 24);
        \u0275\u0275text(76);
        \u0275\u0275pipe(77, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "mat-option", 24);
        \u0275\u0275text(79);
        \u0275\u0275pipe(80, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "mat-option", 24);
        \u0275\u0275text(82);
        \u0275\u0275pipe(83, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(84, "label", 25);
        \u0275\u0275text(85);
        \u0275\u0275pipe(86, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "mat-form-field", 3);
        \u0275\u0275element(88, "textarea", 26);
        \u0275\u0275pipe(89, "translate");
        \u0275\u0275pipe(90, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(91, PlaylistEditModalComponent_Conditional_91_Template, 21, 17);
        \u0275\u0275element(92, "signage-shared-with", 27);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 48, ctx.playlist.id ? "SIGNAGE_MANAGER.PLAYLIST_EDIT" : "SIGNAGE_MANAGER.NEW_PLAYLIST"))("loading", ctx.loading() ? \u0275\u0275pipeBind1(2, 50, "SIGNAGE_MANAGER.PLAYLIST_SAVING") : "");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 52, "FORM.NAME"));
        \u0275\u0275advance(5);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 54, "FORM.NAME"))("formField", ctx.form.name);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(12, 56, "SIGNAGE_MANAGER.PLAYLIST_NAME_ARIA"));
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 58, "FORM.NAME_REQUIRED"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(18, 60, "COMMON.ENABLED"))("formField", ctx.form.enabled);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(20, 62, "SIGNAGE_MANAGER.PLAYLIST_SHUFFLE"))("formField", ctx.form.random);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.playlist.id ? 21 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 64, "SIGNAGE_MANAGER.DEFAULT_PLAY_TIME"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("formField", ctx.form.default_duration);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 66, ctx.model().default_duration / 1e3), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 68, "SIGNAGE_MANAGER.ORIENTATION"));
        \u0275\u0275advance(3);
        \u0275\u0275property("formField", ctx.form.orientation)("placeholder", \u0275\u0275pipeBind1(41, 70, "COMMON.LOCATION_UNSPECIFIED"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(42, 72, "SIGNAGE_MANAGER.PLAYLIST_ORIENTATION_ARIA"));
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 74, "COMMON.LOCATION_UNSPECIFIED"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 76, "SIGNAGE_MANAGER.ORIENTATION_LANDSCAPE"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 78, "SIGNAGE_MANAGER.ORIENTATION_PORTRAIT"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 80, "SIGNAGE_MANAGER.ORIENTATION_SQUARE"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 82, "SIGNAGE_MANAGER.ANIMATION"));
        \u0275\u0275advance(3);
        \u0275\u0275property("formField", ctx.form.default_animation)("placeholder", \u0275\u0275pipeBind1(61, 84, "COMMON.DEFAULT"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(62, 86, "SIGNAGE_MANAGER.DEFAULT_ANIMATION"));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275property("value", 0);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(65, 88, "COMMON.DEFAULT"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 1);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(68, 90, "SIGNAGE_MANAGER.ANIM_CUT"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 2);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(71, 92, "SIGNAGE_MANAGER.ANIM_CROSS_FADE"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 3);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(74, 94, "SIGNAGE_MANAGER.ANIM_SLIDE_TOP"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 4);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(77, 96, "SIGNAGE_MANAGER.ANIM_SLIDE_LEFT"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 5);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(80, 98, "SIGNAGE_MANAGER.ANIM_SLIDE_RIGHT"));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", 6);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(83, 100, "SIGNAGE_MANAGER.ANIM_SLIDE_BOTTOM"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(86, 102, "COMMON.DESCRIPTION"));
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(89, 104, "COMMON.DESCRIPTION"))("formField", ctx.form.description);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(90, 106, "SIGNAGE_MANAGER.PLAYLIST_DESCRIPTION_ARIA"));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx.model().distribution ? 91 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("item_id", ctx.playlist.id)("group_id", ctx.group_id);
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
                                <mat-option [value]="0">{{
                                    'COMMON.DEFAULT' | translate
                                }}</mat-option>
                                <mat-option [value]="1">{{
                                    'SIGNAGE_MANAGER.ANIM_CUT' | translate
                                }}</mat-option>
                                <mat-option [value]="2">{{
                                    'SIGNAGE_MANAGER.ANIM_CROSS_FADE'
                                        | translate
                                }}</mat-option>
                                <mat-option [value]="3">{{
                                    'SIGNAGE_MANAGER.ANIM_SLIDE_TOP' | translate
                                }}</mat-option>
                                <mat-option [value]="4">{{
                                    'SIGNAGE_MANAGER.ANIM_SLIDE_LEFT'
                                        | translate
                                }}</mat-option>
                                <mat-option [value]="5">{{
                                    'SIGNAGE_MANAGER.ANIM_SLIDE_RIGHT'
                                        | translate
                                }}</mat-option>
                                <mat-option [value]="6">{{
                                    'SIGNAGE_MANAGER.ANIM_SLIDE_BOTTOM'
                                        | translate
                                }}</mat-option>
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
                            @for (
                                schedule of form.schedules;
                                track index;
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaylistEditModalComponent, { className: "PlaylistEditModalComponent", filePath: "apps/signage-manager/src/app/shared/playlist-edit-modal.component.ts", lineNumber: 335 });
})();
export {
  PlaylistEditModalComponent
};
//# debugId=3b84524e-507b-5b0b-abe6-602768df912d
//# sourceMappingURL=playlist-edit-modal.component-CKVQBF2Z.js.map
