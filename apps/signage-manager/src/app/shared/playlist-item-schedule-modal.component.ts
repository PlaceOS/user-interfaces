import { DatePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { applyEach, form, minLength, submit } from '@angular/forms/signals';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { i18n, notifyError, notifySuccess } from '@placeos/common';
import {
    FullscreenModalShellComponent,
    TranslatePipe,
} from '@placeos/components';
import {
    SignageMedia,
    type SignagePlaylistItemSchedule,
    type SignagePlaylistSchedule,
} from '@placeos/ts-client';
import { MediaThumbnailComponent } from './media-thumbnail.component';
import {
    createPlaylistScheduleModel,
    PlaylistScheduleFormComponent,
    PlaylistScheduleFormModel,
    playlistSchedulePayload,
    playlistScheduleSchema,
    ScheduleList,
} from './playlist-schedule-form.component';

export interface PlaylistItemScheduleModalData {
    item: SignagePlaylistItemSchedule;
    save: (
        item_id: string,
        schedules: SignagePlaylistSchedule[],
    ) => Promise<unknown>;
}

@Component({
    selector: 'playlist-item-schedule-modal',
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
        TranslatePipe,
    ],
})
export class PlaylistItemScheduleModalComponent {
    private readonly _data =
        inject<PlaylistItemScheduleModalData>(MAT_DIALOG_DATA);
    private readonly _dialog_ref =
        inject<MatDialogRef<PlaylistItemScheduleModalComponent>>(MatDialogRef);

    /** Media the schedules are attached to, shown as context in the modal header */
    public readonly media = new SignageMedia(this._data.item.media || {});
    public readonly loading = signal(false);
    public readonly model = signal<{ schedules: PlaylistScheduleFormModel[] }>({
        schedules: (this._data.item.schedules?.length
            ? this._data.item.schedules
            : [{}]
        ).map((schedule) => createPlaylistScheduleModel(schedule)),
    });
    public readonly schedule_list = new ScheduleList(this.model);
    public readonly form_model = form(this.model, (path) => {
        minLength(path.schedules, 1);
        applyEach(path.schedules, playlistScheduleSchema);
    });

    public async saveSchedule() {
        await submit(this.form_model, async () => {
            this.loading.set(true);
            this._dialog_ref.disableClose = true;
            try {
                await this._data.save(
                    this._data.item.id || this._data.item.item_id,
                    this.model().schedules.map((schedule) =>
                        playlistSchedulePayload(schedule),
                    ),
                );
                this._dialog_ref.disableClose = false;
                this._dialog_ref.close(true);
                notifySuccess(i18n('SIGNAGE_MANAGER.SVC_PLAYLIST_UPDATED'));
            } catch {
                this._dialog_ref.disableClose = false;
                this.loading.set(false);
                notifyError(i18n('SIGNAGE_MANAGER.PLAYLIST_SAVE_ERROR'));
            }
        });
    }
}
