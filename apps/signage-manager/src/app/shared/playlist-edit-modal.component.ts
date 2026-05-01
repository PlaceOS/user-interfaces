import { Component, inject, signal } from '@angular/core';
import {
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
import { notifyError, notifySuccess } from '@placeos/common';
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
                    ? 'APP.CONCIERGE.SIGNAGE_PLAYLISTS_EDIT'
                    : 'APP.CONCIERGE.SIGNAGE_PLAYLISTS_NEW'
                ) | translate
            "
            (confirm)="savePlaylist()"
            [loading]="
                loading()
                    ? ('APP.CONCIERGE.SIGNAGE_PLAYLISTS_SAVING' | translate)
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
                        aria-label="Playlist name"
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
                        [name]="
                            'APP.CONCIERGE.SIGNAGE_PLAYLISTS_SHUFFLE'
                                | translate
                        "
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
                            <div>Default Play Time</div>
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
                            'APP.CONCIERGE.SIGNAGE_ORIENTATION' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="orientation"
                                formControlName="orientation"
                                [placeholder]="
                                    'APP.CONCIERGE.SIGNAGE_ORIENTATION_NONE'
                                        | translate
                                "
                                aria-label="Playlist orientation"
                            >
                                <mat-option value="unspecified">
                                    {{
                                        'APP.CONCIERGE.SIGNAGE_ORIENTATION_NONE'
                                            | translate
                                    }}
                                </mat-option>
                                <mat-option value="landscape">{{
                                    'APP.CONCIERGE.SIGNAGE_ORIENTATION_LANDSCAPE'
                                        | translate
                                }}</mat-option>
                                <mat-option value="portrait">{{
                                    'APP.CONCIERGE.SIGNAGE_ORIENTATION_PORTRAIT'
                                        | translate
                                }}</mat-option>
                                <mat-option value="square">{{
                                    'APP.CONCIERGE.SIGNAGE_ORIENTATION_SQUARE'
                                        | translate
                                }}</mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="flex-1">
                        <label for="animation">{{
                            'APP.CONCIERGE.SIGNAGE_ANIMATION' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="animation"
                                formControlName="default_animation"
                                [placeholder]="
                                    'APP.CONCIERGE.SIGNAGE_ANIMATION_DEFAULT'
                                        | translate
                                "
                                aria-label="Default animation"
                            >
                                <mat-option [value]="0">{{
                                    'APP.CONCIERGE.SIGNAGE_ANIMATION_DEFAULT'
                                        | translate
                                }}</mat-option>
                                <mat-option [value]="1">{{
                                    'APP.CONCIERGE.SIGNAGE_ANIMATION_CUT'
                                        | translate
                                }}</mat-option>
                                <mat-option [value]="2">{{
                                    'APP.CONCIERGE.SIGNAGE_ANIMATION_CROSS_FADE'
                                        | translate
                                }}</mat-option>
                                <mat-option [value]="3">{{
                                    'APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_TOP'
                                        | translate
                                }}</mat-option>
                                <mat-option [value]="4">{{
                                    'APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_LEFT'
                                        | translate
                                }}</mat-option>
                                <mat-option [value]="5">{{
                                    'APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_RIGHT'
                                        | translate
                                }}</mat-option>
                                <mat-option [value]="6">{{
                                    'APP.CONCIERGE.SIGNAGE_ANIMATION_SLIDE_BOTTOM'
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
                        aria-label="Playlist description"
                    ></textarea>
                </mat-form-field>
                <div class="flex space-x-4">
                    <div class="flex-1">
                        <label for="valid-from">{{
                            'APP.CONCIERGE.VALID_FROM' | translate
                        }}</label>
                        <a-date-field
                            name="valid-from"
                            class="w-full"
                            formControlName="valid_from"
                        ></a-date-field>
                    </div>
                    <div class="flex-1">
                        <label for="valid-until">{{
                            'APP.CONCIERGE.VALID_UNTIL' | translate
                        }}</label>
                        <a-date-field
                            name="valid-until"
                            class="w-full"
                            [from]="form.value.valid_from"
                            formControlName="valid_until"
                        ></a-date-field>
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
    ],
})
export class PlaylistEditModalComponent {
    private _data = inject<PlaylistEditModalData>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<PlaylistEditModalComponent>>(MatDialogRef);

    public readonly loading = signal(false);
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
        valid_from: new FormControl(0),
        valid_until: new FormControl(0),
    });

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
    }

    public async savePlaylist() {
        this.form.markAllAsTouched();
        this.form.updateValueAndValidity();
        if (!this.form.valid) return;
        this.loading.set(true);
        this._dialog_ref.disableClose = true;
        const form_value = this.form.getRawValue();
        const data: any = { ...form_value };
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
            notifySuccess('Playlist saved');
        } catch (e) {
            this._dialog_ref.disableClose = false;
            this.loading.set(false);
            notifyError('Error saving playlist');
            throw e;
        }
    }
}
