import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogRef,
} from '@angular/material/dialog';
import { notifyError } from '@placeos/common';
import { MediaAnimation, SignagePlaylist } from '@placeos/ts-client';
import { getUnixTime } from 'date-fns';
import { BehaviorSubject } from 'rxjs';
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
                loading
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
                <div class="flex items-center space-x-4">
                    <label
                        for="default-duration"
                        class="m-0 flex w-auto min-w-0 items-center space-x-2"
                    >
                        <div>Default Play Time</div>
                        <icon
                            class="text-xl"
                            matTooltip="Default length of time to hold images on screen"
                        >
                            info
                        </icon>
                    </label>
                    <div class="font-mono text-xs">
                        {{ form.value.default_duration / 1000 | mediaDuration }}
                    </div>
                </div>
                <mat-slider min="5000" max="300000" step="1000">
                    <input
                        name="default-duration"
                        matSliderThumb
                        formControlName="default_duration"
                    />
                </mat-slider>
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
                            [disabled]="!form.value.valid_from"
                        ></a-date-field>
                    </div>
                </div>
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    standalone: false,
})
export class SignagePlaylistModalComponent {
    public loading = false;
    public readonly playlist = this._data;
    public readonly media = this._state.media;

    public readonly search = new BehaviorSubject('');

    public readonly form = new FormGroup({
        id: new FormControl(this.playlist.id || ''),
        name: new FormControl(this.playlist.name || '', [Validators.required]),
        description: new FormControl(this.playlist.description || ''),
        default_animation: new FormControl<MediaAnimation>(
            this.playlist.default_animation || MediaAnimation.Cut,
        ),
        orientation: new FormControl(
            this.playlist.orientation || 'unspecified',
        ),
        enabled: new FormControl(this.playlist.enabled),
        random: new FormControl(this.playlist.random),
        default_duration: new FormControl(
            Math.max(this.playlist.default_duration || 15 * 1000, 5000),
        ),
        valid_from: new FormControl(this.playlist.valid_from * 1000),
        valid_until: new FormControl(this.playlist.valid_until * 1000),
    });

    @ViewChild('search_input')
    public search_input: ElementRef<HTMLInputElement>;

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: SignagePlaylist = {} as any,
        private _state: SignageStateService,
        private _dialog: MatDialog,
        private _dialog_ref: MatDialogRef<SignagePlaylistModalComponent>,
    ) {}

    public async savePlaylist() {
        this.form.markAllAsTouched();
        this.form.updateValueAndValidity();
        if (this.form.invalid) return;
        this.loading = true;
        const form_value = this.form.getRawValue();
        const result = await this._state
            .savePlaylist({
                ...form_value,
                valid_from: getUnixTime(form_value.valid_from),
                valid_until: getUnixTime(form_value.valid_until),
            })
            .catch((_) => {
                notifyError('Error saving playlist');
                this.loading = false;
                throw _;
            });
        this._dialog_ref.close(result);
    }
}
