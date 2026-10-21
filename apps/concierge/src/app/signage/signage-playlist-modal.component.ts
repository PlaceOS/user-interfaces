import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { form, FormField, required } from '@angular/forms/signals';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { notifyError } from '@placeos/common';
import {
    FullscreenModalShellComponent,
    MediaDurationPipe,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';
import { DateFieldComponent } from '@placeos/form-fields';
import { MediaAnimation, SignagePlaylist } from '@placeos/ts-client';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { SignageStateService } from './signage-state.service';

@Component({
    selector: 'signage-playlist-modal',
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
            <form>
                <label for="name"
                    >{{ 'FORM.NAME' | translate }}<span required>*</span></label
                >
                <mat-form-field appearance="outline" class="w-full">
                    <input
                        matInput
                        [placeholder]="'FORM.NAME' | translate"
                        [formField]="form.name"
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
                        [label]="
                            'APP.CONCIERGE.SIGNAGE_PLAYLISTS_SHUFFLE'
                                | translate
                        "
                        [formField]="form.random"
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
                            'APP.CONCIERGE.SIGNAGE_ORIENTATION' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                [formField]="form.orientation"
                                [placeholder]="
                                    'APP.CONCIERGE.SIGNAGE_ORIENTATION_NONE'
                                        | translate
                                "
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
                                [formField]="form.default_animation"
                                [placeholder]="
                                    'APP.CONCIERGE.SIGNAGE_ANIMATION_DEFAULT'
                                        | translate
                                "
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
                        [placeholder]="'COMMON.DESCRIPTION' | translate"
                        [formField]="form.description"
                        class="min-h-32"
                    ></textarea>
                </mat-form-field>
                <div class="flex space-x-4">
                    <div class="flex-1">
                        <label for="valid-from">{{
                            'APP.CONCIERGE.VALID_FROM' | translate
                        }}</label>
                        <a-date-field
                            class="w-full"
                            [formField]="form.valid_from"
                        ></a-date-field>
                    </div>
                    <div class="flex-1">
                        <label for="valid-until">{{
                            'COMMON.VALID_UNTIL' | translate
                        }}</label>
                        <a-date-field
                            class="w-full"
                            [from]="model().valid_from"
                            [formField]="form.valid_until"
                        ></a-date-field>
                    </div>
                </div>
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        TranslatePipe,
        FullscreenModalShellComponent,
        SettingsToggleComponent,
        FormField,
        DateFieldComponent,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatSliderModule,
        FormsModule,
        MediaDurationPipe,
    ],
})
export class SignagePlaylistModalComponent implements OnInit {
    private _data: SignagePlaylist =
        inject(MAT_DIALOG_DATA) ?? new SignagePlaylist({});
    private _state = inject(SignageStateService);
    private readonly _uses_lists = this._state.use('media');
    private _dialog_ref =
        inject<MatDialogRef<SignagePlaylistModalComponent>>(MatDialogRef);

    public readonly loading = signal(false);
    public readonly playlist = this._data;
    public readonly media = this._state.media;

    public readonly model = signal({
        id: this.playlist.id || '',
        name: this.playlist.name || '',
        description: this.playlist.description || '',
        default_animation: MediaAnimation.Cut as MediaAnimation,
        orientation: 'unspecified',
        enabled: true,
        random: false,
        default_duration: 15 * 1000,
        valid_from: 0,
        valid_until: 0,
    });
    public readonly form = form(this.model, (p) => {
        required(p.name);
    });

    public ngOnInit() {
        const p = this.playlist;
        this.model.update((m) => ({
            ...m,
            id: p.id ?? m.id,
            name: p.name ?? m.name,
            description: p.description ?? m.description,
            default_animation: p.default_animation ?? m.default_animation,
            orientation: p.orientation || m.orientation,
            enabled: p.enabled ?? m.enabled,
            random: p.random ?? m.random,
            default_duration: p.default_duration ?? m.default_duration,
            valid_from: (p.valid_from || 0) * 1000,
            valid_until: (p.valid_until || 0) * 1000,
        }));
        if (!this.model().orientation)
            this.model.update((m) => ({ ...m, orientation: 'unspecified' }));
    }

    public async savePlaylist() {
        this.form().markAsTouched();
        if (!this.form().valid()) return;
        this.loading.set(true);
        // This modal does not edit `schedules`, so it does not send them.
        const form_value = { ...this.model() };
        if (form_value.valid_from) {
            form_value.valid_from = getUnixTime(
                startOfDay(form_value.valid_from),
            );
        } else delete form_value.valid_from;
        if (form_value.valid_until) {
            form_value.valid_until = getUnixTime(
                endOfDay(form_value.valid_until),
            );
        } else delete form_value.valid_until;
        const result = await this._state
            .savePlaylist({
                ...form_value,
            })
            .catch((_) => {
                notifyError('Error saving playlist');
                this.loading.set(false);
                throw _;
            });
        this._dialog_ref.close(result);
    }
}
