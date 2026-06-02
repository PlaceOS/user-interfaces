import { Component, inject, signal } from '@angular/core';
import {
    FormArray,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { i18n, notifyError, notifySuccess } from '@placeos/common';
import {
    FullscreenModalShellComponent,
    MediaDurationPipe,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';
import { DateFieldComponent } from '@placeos/form-fields';
import {
    addSignagePlaylist,
    MediaAnimation,
    SignagePlaylist,
    updateSignagePlaylist,
} from '@placeos/ts-client';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { lastValueFrom } from 'rxjs';
import {
    createPlaylistScheduleForm,
    PlaylistScheduleFormComponent,
    playlistSchedulePayload,
    playlistSchedules,
} from './playlist-schedule-form.component';

export interface PlaylistEditModalData {
    playlist: SignagePlaylist;
    onAdd?: (data: Partial<SignagePlaylist>) => Promise<SignagePlaylist>;
    onEdit?: (
        id: string,
        data: Partial<SignagePlaylist>,
    ) => Promise<SignagePlaylist>;
}

@Component({
    selector: 'playlist-edit-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (playlist.id
                    ? 'SIGNAGE_MANAGER.PLAYLIST_EDIT'
                    : 'SIGNAGE_MANAGER.NEW_PLAYLIST'
                ) | translate
            "
            (confirm)="savePlaylist()"
            [loading]="
                loading()
                    ? ('SIGNAGE_MANAGER.PLAYLIST_SAVING' | translate)
                    : ''
            "
        >
            <form [formGroup]="form">
                <label for="name"
                    >{{ 'FORM.NAME' | translate }}<span required>*</span></label
                >
                <mat-form-field appearance="outline" class="w-full">
                    <input
                        matInput
                        name="name"
                        [placeholder]="'FORM.NAME' | translate"
                        formControlName="name"
                        [attr.aria-label]="'SIGNAGE_MANAGER.PLAYLIST_NAME_ARIA' | translate"
                    />
                    <mat-error>{{
                        'FORM.NAME_REQUIRED' | translate
                    }}</mat-error>
                </mat-form-field>
                <div class="mb-4 flex items-center space-x-4">
                    <settings-toggle
                        class="flex-1"
                        [name]="'COMMON.ENABLED' | translate"
                        formControlName="enabled"
                    >
                    </settings-toggle>
                    <settings-toggle
                        class="flex-1"
                        [name]="'SIGNAGE_MANAGER.PLAYLIST_SHUFFLE' | translate"
                        formControlName="random"
                    >
                    </settings-toggle>
                </div>
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
                                    name="default-duration"
                                    matSliderThumb
                                    formControlName="default_duration"
                                />
                            </mat-slider>
                            <div class="w-16 px-2 text-right font-mono text-xs">
                                {{
                                    form.value.default_duration / 1000
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
                                name="orientation"
                                formControlName="orientation"
                                [placeholder]="
                                    'COMMON.LOCATION_UNSPECIFIED'
                                        | translate
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
                                name="animation"
                                formControlName="default_animation"
                                [placeholder]="
                                    'COMMON.DEFAULT'
                                        | translate
                                "
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.DEFAULT_ANIMATION'
                                        | translate
                                "
                            >
                                <mat-option [value]="0">{{
                                    'COMMON.DEFAULT'
                                        | translate
                                }}</mat-option>
                                <mat-option [value]="1">{{
                                    'SIGNAGE_MANAGER.ANIM_CUT'
                                        | translate
                                }}</mat-option>
                                <mat-option [value]="2">{{
                                    'SIGNAGE_MANAGER.ANIM_CROSS_FADE'
                                        | translate
                                }}</mat-option>
                                <mat-option [value]="3">{{
                                    'SIGNAGE_MANAGER.ANIM_SLIDE_TOP'
                                        | translate
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
                        name="description"
                        [placeholder]="'COMMON.DESCRIPTION' | translate"
                        formControlName="description"
                        class="min-h-32"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.PLAYLIST_DESCRIPTION_ARIA'
                                | translate
                        "
                    ></textarea>
                </mat-form-field>
                <div class="flex space-x-4">
                    <div class="flex-1">
                        <label for="valid-from">{{
                            'SIGNAGE_MANAGER.VALID_FROM' | translate
                        }}</label>
                        <a-date-field
                            name="valid-from"
                            formControlName="valid_from"
                            [clear]="true"
                        ></a-date-field>
                    </div>
                    <div class="flex-1">
                        <label for="valid-until">{{
                            'FORM.EXPIRES_AT' | translate
                        }}</label>
                        <a-date-field
                            name="valid-until"
                            [from]="form.value.valid_from"
                            formControlName="valid_until"
                            [clear]="true"
                        ></a-date-field>
                    </div>
                </div>
                <div class="pt-2 pb-4" formArrayName="schedules">
                    <label>{{
                        'SIGNAGE_MANAGER.PLAYLIST_SCHEDULES' | translate
                    }}</label>
                    <div class="mt-2 flex flex-col gap-4">
                        @for (
                            schedule of schedule_forms.controls;
                            track schedule;
                            let index = $index
                        ) {
                            <playlist-schedule-form
                                [schedule]="schedule"
                                [index]="index"
                                [open]="isScheduleOpen(index)"
                                [can_remove]="schedule_forms.length > 1"
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
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        FullscreenModalShellComponent,
        SettingsToggleComponent,
        ReactiveFormsModule,
        DateFieldComponent,
        TranslatePipe,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatSliderModule,
        MediaDurationPipe,
        PlaylistScheduleFormComponent,
    ],
})
export class PlaylistEditModalComponent {
    private _data = inject<PlaylistEditModalData>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<PlaylistEditModalComponent>>(MatDialogRef);

    public readonly loading = signal(false);
    public readonly active_schedule_index = signal<number | null>(0);
    public readonly playlist = this._data.playlist;

    public readonly form = new FormGroup({
        name: new FormControl('', [Validators.required]),
        description: new FormControl(''),
        enabled: new FormControl(true),
        random: new FormControl(false),
        default_animation: new FormControl<MediaAnimation>(
            MediaAnimation.Default,
        ),
        orientation: new FormControl('unspecified'),
        default_duration: new FormControl(15000),
        schedules: new FormArray<FormGroup>([], [Validators.minLength(1)]),
        valid_from: new FormControl(0),
        valid_until: new FormControl(0),
    });

    public readonly schedule_forms = this.form.controls.schedules;

    constructor() {
        this.form.patchValue({
            ...this.playlist,
            valid_from: this.playlist.valid_from
                ? this.playlist.valid_from * 1000
                : 0,
            valid_until: this.playlist.valid_until
                ? this.playlist.valid_until * 1000
                : 0,
        } as any);
        if (!this.form.value.orientation)
            this.form.patchValue({ orientation: 'unspecified' });
        for (const schedule of playlistSchedules(this.playlist)) {
            this.schedule_forms.push(createPlaylistScheduleForm(schedule));
        }
        if (!this.schedule_forms.length) this.addSchedule();
    }

    public addSchedule() {
        this.schedule_forms.push(createPlaylistScheduleForm());
        this.active_schedule_index.set(this.schedule_forms.length - 1);
    }

    public removeSchedule(event: Event, index: number) {
        event.preventDefault();
        event.stopPropagation();
        if (this.schedule_forms.length <= 1) return;
        this.schedule_forms.removeAt(index);
        this.active_schedule_index.update((active_index) => {
            if (active_index === index) return null;
            return active_index > index ? active_index - 1 : active_index;
        });
        this.schedule_forms.updateValueAndValidity();
    }

    public openSchedule(index: number) {
        this.active_schedule_index.update((active_index) =>
            active_index === index ? null : index,
        );
    }

    public isScheduleOpen(index: number) {
        return this.active_schedule_index() === index;
    }

    public async savePlaylist() {
        this.form.markAllAsTouched();
        this.form.updateValueAndValidity();
        if (!this.form.valid) return;
        this.loading.set(true);
        this._dialog_ref.disableClose = true;
        const form_value = this.form.getRawValue();
        const data: any = { ...form_value };
        data.schedules = (form_value.schedules || []).map((schedule) =>
            playlistSchedulePayload(schedule),
        );
        if (data.valid_from) {
            data.valid_from = getUnixTime(startOfDay(data.valid_from));
        } else delete data.valid_from;
        if (data.valid_until) {
            data.valid_until = getUnixTime(endOfDay(data.valid_until));
        } else delete data.valid_until;
        try {
            let result: SignagePlaylist;
            if (this.playlist.id) {
                result = this._data.onEdit
                    ? await this._data.onEdit(this.playlist.id, data)
                    : await lastValueFrom(
                          updateSignagePlaylist(this.playlist.id, data),
                      );
            } else {
                result = this._data.onAdd
                    ? await this._data.onAdd(data)
                    : await lastValueFrom(addSignagePlaylist(data));
            }
            this._dialog_ref.disableClose = false;
            this._dialog_ref.close(result);
            notifySuccess(i18n('SIGNAGE_MANAGER.PLAYLIST_SAVED'));
        } catch (e) {
            this._dialog_ref.disableClose = false;
            this.loading.set(false);
            notifyError(i18n('SIGNAGE_MANAGER.PLAYLIST_SAVE_ERROR'));
            throw e;
        }
    }
}
