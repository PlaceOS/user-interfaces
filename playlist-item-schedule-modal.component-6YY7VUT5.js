import {
  PlaylistScheduleFormComponent,
  ScheduleList,
  createPlaylistScheduleModel,
  playlistSchedulePayload,
  playlistScheduleSchema
} from "./chunk-VJHO7XTV.js";
import "./chunk-FPEATI2G.js";
import "./chunk-VGJXOENF.js";
import "./chunk-GIILRAUC.js";
import {
  FullscreenModalShellComponent
} from "./chunk-37ZOD2MQ.js";
import "./chunk-R5ENJUXT.js";
import {
  MediaThumbnailComponent
} from "./chunk-VNDE7JAZ.js";
import "./chunk-MDQIMF4Z.js";
import "./chunk-RV74WB6O.js";
import "./chunk-N2A5KF5S.js";
import "./chunk-KQEICFKK.js";
import "./chunk-5HHIMVHG.js";
import "./chunk-AE3GCRD4.js";
import "./chunk-7MGS6UY4.js";
import "./chunk-LSRYU32B.js";
import "./chunk-ORKMPFOU.js";
import "./chunk-5INXWBHO.js";
import "./chunk-VPFTG2VG.js";
import "./chunk-KXYOZRLS.js";
import "./chunk-PQVYNCOB.js";
import "./chunk-H3YU5OJJ.js";
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from "./chunk-CHDADISI.js";
import {
  applyEach,
  form,
  minLength,
  submit
} from "./chunk-FYBK3ORD.js";
import {
  TranslatePipe
} from "./chunk-T2VWHNJH.js";
import "./chunk-BYJQITNS.js";
import "./chunk-FQL4JLUU.js";
import "./chunk-4XDY7DFN.js";
import "./chunk-7MADQ4JT.js";
import "./chunk-Q3DBHKJK.js";
import {
  Fs,
  i18n,
  notifyError,
  notifySuccess
} from "./chunk-AAF65IVH.js";
import "./chunk-PWFU2DHD.js";
import "./chunk-YXB236ED.js";
import "./chunk-SZ34I7U6.js";
import "./chunk-P3XWP5GT.js";
import {
  Component,
  DatePipe,
  inject,
  setClassMetadata,
  signal,
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
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-BKT2MDTY.js";
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
      return \u0275\u0275resetView(ctx_r0.schedule_list.toggle(\u0275$index_27_r3));
    })("remove", function PlaylistItemScheduleModalComponent_For_6_Template_playlist_schedule_form_remove_0_listener($event) {
      const \u0275$index_27_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.schedule_list.remove($event, \u0275$index_27_r3));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const schedule_r4 = ctx.$implicit;
    const \u0275$index_27_r3 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("schedule", schedule_r4)("index", \u0275$index_27_r3)("open", ctx_r0.schedule_list.isOpen(\u0275$index_27_r3))("can_remove", ctx_r0.model().schedules.length > 1);
  }
}
var PlaylistItemScheduleModalComponent = class _PlaylistItemScheduleModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.media = new Fs(this._data.item.media || {});
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
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
    this.schedule_list = new ScheduleList(this.model);
    this.form_model = form(this.model, (path) => {
      minLength(path.schedules, 1);
      applyEach(path.schedules, playlistScheduleSchema);
    });
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
      } catch {
        this._dialog_ref.disableClose = false;
        this.loading.set(false);
        notifyError(i18n("SIGNAGE_MANAGER.PLAYLIST_SAVE_ERROR"));
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
        \u0275\u0275repeaterCreate(5, PlaylistItemScheduleModalComponent_For_6_Template, 1, 4, "playlist-schedule-form", 3, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function PlaylistItemScheduleModalComponent_Template_button_click_7_listener() {
          return ctx.schedule_list.add();
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
                <!-- Track the field, so each form keeps its state when one before it is removed -->
                @for (
                    schedule of form_model.schedules;
                    track schedule;
                    let index = $index
                ) {
                    <playlist-schedule-form
                        [schedule]="schedule"
                        [index]="index"
                        [open]="schedule_list.isOpen(index)"
                        [can_remove]="model().schedules.length > 1"
                        (toggle)="schedule_list.toggle(index)"
                        (remove)="schedule_list.remove($event, index)"
                    />
                }
                <button
                    type="button"
                    class="border-primary text-primary hover:bg-primary/10 rounded border px-3 py-2 text-sm font-medium"
                    (click)="schedule_list.add()"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaylistItemScheduleModalComponent, { className: "PlaylistItemScheduleModalComponent", filePath: "apps/signage-manager/src/app/shared/playlist-item-schedule-modal.component.ts", lineNumber: 109 });
})();
export {
  PlaylistItemScheduleModalComponent
};
//# debugId=aec8d7a8-0b41-5e47-b822-00e41a620b6d
//# sourceMappingURL=playlist-item-schedule-modal.component-6YY7VUT5.js.map
