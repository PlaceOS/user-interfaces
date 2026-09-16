import {
  MediaThumbnailComponent
} from "./chunk-G3EBXO46.js";
import {
  PlaylistScheduleFormComponent,
  createPlaylistScheduleModel,
  playlistSchedulePayload
} from "./chunk-C6ZR3UHQ.js";
import "./chunk-EMQPUDAM.js";
import "./chunk-M3IVCANT.js";
import "./chunk-ET5HZIVI.js";
import "./chunk-ZEK4Y6XL.js";
import "./chunk-4ZPVAEUW.js";
import "./chunk-HSYNQBVJ.js";
import {
  FullscreenModalShellComponent
} from "./chunk-6EWG3HJY.js";
import "./chunk-XVHEOONU.js";
import "./chunk-OWAUM6UI.js";
import "./chunk-5PUHOZFV.js";
import {
  form,
  minLength,
  submit
} from "./chunk-CIOF3O5C.js";
import "./chunk-VOXI3UVZ.js";
import "./chunk-IROTSDQV.js";
import "./chunk-VATSXXH3.js";
import {
  TranslatePipe
} from "./chunk-2MCN5NQW.js";
import "./chunk-BLIVD4QK.js";
import "./chunk-ZREI4RDV.js";
import "./chunk-K5RUP4DL.js";
import "./chunk-PJV4BLFG.js";
import "./chunk-6VI5IEKG.js";
import {
  Component,
  DatePipe,
  MAT_DIALOG_DATA,
  MatDialogRef,
  i18n,
  inject,
  notifyError,
  notifySuccess,
  setClassMetadata,
  signal,
  ws,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-JABNH3I5.js";
import "./chunk-653SOEEV.js";

// apps/signage-manager/src/app/shared/playlist-item-schedule-modal.component.ts
function PlaylistItemScheduleModalComponent_Conditional_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.media.description, " ");
  }
}
function PlaylistItemScheduleModalComponent_Conditional_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "FORM.EXPIRES_AT"), ": ", \u0275\u0275pipeBind2(3, 4, ctx_r0.media.valid_until * 1e3, "mediumDate"), " ");
  }
}
function PlaylistItemScheduleModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "media-thumbnail", 5);
    \u0275\u0275elementStart(2, "div", 6)(3, "h3", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, PlaylistItemScheduleModalComponent_Conditional_4_Conditional_5_Template, 2, 1, "p", 8);
    \u0275\u0275conditionalCreate(6, PlaylistItemScheduleModalComponent_Conditional_4_Conditional_6_Template, 4, 7, "p", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("item", ctx_r0.media)("cover", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.media.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.media.description ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.media.valid_until ? 6 : -1);
  }
}
function PlaylistItemScheduleModalComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "playlist-schedule-form", 10);
    \u0275\u0275listener("toggle", function PlaylistItemScheduleModalComponent_For_6_Template_playlist_schedule_form_toggle_0_listener() {
      const \u0275$index_27_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openSchedule(\u0275$index_27_r3));
    })("remove", function PlaylistItemScheduleModalComponent_For_6_Template_playlist_schedule_form_remove_0_listener($event) {
      const \u0275$index_27_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.removeSchedule($event, \u0275$index_27_r3));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const schedule_r4 = ctx.$implicit;
    const \u0275$index_27_r3 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("schedule", schedule_r4)("index", \u0275$index_27_r3)("open", ctx_r0.isScheduleOpen(\u0275$index_27_r3))("can_remove", ctx_r0.model().schedules.length > 1);
  }
}
var PlaylistItemScheduleModalComponent = class _PlaylistItemScheduleModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.media = new ws(this._data.item.media || {});
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
    this.model = signal(
      {
        schedules: (this._data.item.schedules?.length ? this._data.item.schedules : [{}]).map((schedule) => createPlaylistScheduleModel(schedule))
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form_model = form(this.model, (path) => {
      minLength(path.schedules, 1);
    });
  }
  addSchedule() {
    this.model.update((model) => ({
      schedules: [...model.schedules, createPlaylistScheduleModel()]
    }));
    this.active_schedule_index.set(this.model().schedules.length - 1);
  }
  removeSchedule(event, index) {
    event.preventDefault();
    event.stopPropagation();
    if (this.model().schedules.length <= 1)
      return;
    this.model.update((model) => ({
      schedules: model.schedules.filter((_, item_index) => item_index !== index)
    }));
  }
  openSchedule(index) {
    this.active_schedule_index.update((active_index) => active_index === index ? null : index);
  }
  isScheduleOpen(index) {
    return this.active_schedule_index() === index;
  }
  async saveSchedule() {
    await submit(this.form_model, async () => {
      this.loading.set(true);
      this._dialog_ref.disableClose = true;
      try {
        await this._data.save(this._data.item.id || this._data.item.item_id, this.model().schedules.map((schedule) => playlistSchedulePayload(schedule)));
        this._dialog_ref.disableClose = false;
        this._dialog_ref.close(true);
        notifySuccess(i18n("SIGNAGE_MANAGER.SVC_PLAYLIST_UPDATED"));
      } catch (e) {
        this._dialog_ref.disableClose = false;
        this.loading.set(false);
        notifyError(i18n("SIGNAGE_MANAGER.PLAYLIST_SAVE_ERROR"));
        throw e;
      }
    });
  }
  static {
    this.\u0275fac = function PlaylistItemScheduleModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaylistItemScheduleModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaylistItemScheduleModalComponent, selectors: [["playlist-item-schedule-modal"]], decls: 10, vars: 10, consts: [[3, "confirm", "heading", "loading"], [1, "flex", "flex-col", "gap-4"], [1, "border-base-300", "bg-base-100", "flex", "items-start", "gap-4", "rounded-lg", "border", "p-3"], [3, "schedule", "index", "open", "can_remove"], ["type", "button", 1, "border-primary", "text-primary", "hover:bg-primary/10", "rounded", "border", "px-3", "py-2", "text-sm", "font-medium", 3, "click"], [1, "bg-base-300", "h-20", "w-32", "shrink-0", "overflow-hidden", "rounded", 3, "item", "cover"], [1, "min-w-0", "flex-1"], [1, "truncate", "text-base", "font-medium"], [1, "text-base-content/70", "mt-1", "line-clamp-2", "text-sm"], [1, "text-base-content/70", "mt-2", "text-xs"], [3, "toggle", "remove", "schedule", "index", "open", "can_remove"]], template: function PlaylistItemScheduleModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("confirm", function PlaylistItemScheduleModalComponent_Template_fullscreen_modal_shell_confirm_0_listener() {
          return ctx.saveSchedule();
        });
        \u0275\u0275elementStart(3, "div", 1);
        \u0275\u0275conditionalCreate(4, PlaylistItemScheduleModalComponent_Conditional_4_Template, 7, 5, "div", 2);
        \u0275\u0275repeaterCreate(5, PlaylistItemScheduleModalComponent_For_6_Template, 1, 4, "playlist-schedule-form", 3, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function PlaylistItemScheduleModalComponent_Template_button_click_7_listener() {
          return ctx.addSchedule();
        });
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 4, "SIGNAGE_MANAGER.ITEM_SCHEDULES"))("loading", ctx.loading() ? \u0275\u0275pipeBind1(2, 6, "SIGNAGE_MANAGER.PLAYLIST_SAVING") : "");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.media.id ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.form_model.schedules);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 8, "SIGNAGE_MANAGER.ADD_SCHEDULE"), " ");
      }
    }, dependencies: [
      FullscreenModalShellComponent,
      MediaThumbnailComponent,
      PlaylistScheduleFormComponent,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaylistItemScheduleModalComponent, [{
    type: Component,
    args: [{
      selector: "playlist-item-schedule-modal",
      template: `
        <fullscreen-modal-shell
            [heading]="'SIGNAGE_MANAGER.ITEM_SCHEDULES' | translate"
            (confirm)="saveSchedule()"
            [loading]="
                loading() ? ('SIGNAGE_MANAGER.PLAYLIST_SAVING' | translate) : ''
            "
        >
            <div class="flex flex-col gap-4">
                @if (media.id) {
                    <div
                        class="border-base-300 bg-base-100 flex items-start gap-4 rounded-lg border p-3"
                    >
                        <media-thumbnail
                            [item]="media"
                            [cover]="true"
                            class="bg-base-300 h-20 w-32 shrink-0 overflow-hidden rounded"
                        />
                        <div class="min-w-0 flex-1">
                            <h3 class="truncate text-base font-medium">
                                {{ media.name }}
                            </h3>
                            @if (media.description) {
                                <p
                                    class="text-base-content/70 mt-1 line-clamp-2 text-sm"
                                >
                                    {{ media.description }}
                                </p>
                            }
                            @if (media.valid_until) {
                                <p class="text-base-content/70 mt-2 text-xs">
                                    {{ 'FORM.EXPIRES_AT' | translate }}:
                                    {{
                                        media.valid_until * 1000
                                            | date: 'mediumDate'
                                    }}
                                </p>
                            }
                        </div>
                    </div>
                }
                @for (
                    schedule of form_model.schedules;
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
        </fullscreen-modal-shell>
    `,
      imports: [
        DatePipe,
        FullscreenModalShellComponent,
        MediaThumbnailComponent,
        PlaylistScheduleFormComponent,
        TranslatePipe
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaylistItemScheduleModalComponent, { className: "PlaylistItemScheduleModalComponent", filePath: "apps/signage-manager/src/app/shared/playlist-item-schedule-modal.component.ts", lineNumber: 106 });
})();
export {
  PlaylistItemScheduleModalComponent
};
//# debugId=c394d74b-1b6a-53b7-9784-66d0f2221c95
//# sourceMappingURL=playlist-item-schedule-modal.component-E2NQPOS6.js.map
