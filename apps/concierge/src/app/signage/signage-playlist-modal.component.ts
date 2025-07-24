import {
    Component,
    ElementRef,
    inject,
    OnInit,
    signal,
    viewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { notifyError, padLength } from '@placeos/common';
import { MediaAnimation, SignagePlaylist } from '@placeos/ts-client';
import {
    addDays,
    endOfDay,
    format,
    getUnixTime,
    set,
    startOfDay,
} from 'date-fns';
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
                <div class="pb-4 pt-2">
                    <div class="relative rounded border border-base-300">
                        <label
                            for="default-duration"
                            class="absolute left-2 top-0 m-0 flex w-auto min-w-0 -translate-y-1/2 items-center space-x-2 bg-base-100 px-2"
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
                        ></a-date-field>
                    </div>
                </div>
                <div
                    class="relative mb-12 space-y-2 rounded border border-base-300 px-4 pt-4"
                >
                    <label
                        for="schedule"
                        class="absolute left-2 top-0 m-0 flex w-auto min-w-0 -translate-y-1/2 items-center space-x-2 bg-base-100 px-2"
                    >
                        <div>Schedule</div>
                    </label>
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript w-full"
                    >
                        <mat-select
                            [ngModel]="schedule()"
                            (ngModelChange)="schedule.set($event)"
                            [ngModelOptions]="{ standalone: true }"
                        >
                            <mat-option value="">No schedule</mat-option>
                            <mat-option value="between"
                                >Play Between</mat-option
                            >
                            <mat-option
                                value="exact"
                                (click)="form.patchValue({ play_duration: 30 })"
                                >Set Date & Time</mat-option
                            >
                            <mat-option
                                value="recurring"
                                (click)="form.patchValue({ play_duration: 30 })"
                                >Recurring Schedule</mat-option
                            >
                        </mat-select>
                    </mat-form-field>
                    <div class="pt-2">
                        @if (schedule() === 'between') {
                            <div class="flex space-x-4">
                                <div class="flex-1">
                                    <label for="play-from">{{
                                        'APP.CONCIERGE.PLAY_FROM' | translate
                                    }}</label>
                                    <a-time-field
                                        name="play-from"
                                        class="w-full"
                                        [no_past_times]="false"
                                        formControlName="play_from"
                                    ></a-time-field>
                                </div>
                                <div class="flex-1">
                                    <label for="play-until">{{
                                        'APP.CONCIERGE.PLAY_UNTIL' | translate
                                    }}</label>
                                    <a-time-field
                                        name="play-until"
                                        class="w-full"
                                        [no_past_times]="false"
                                        [from]="form.value.play_from"
                                        formControlName="play_until"
                                    ></a-time-field>
                                </div>
                            </div>
                        } @else if (schedule() === 'exact') {
                            <div class="flex space-x-4">
                                <div class="flex-1">
                                    <label for="play-at">{{
                                        'APP.CONCIERGE.PLAY_AT' | translate
                                    }}</label>
                                    <a-date-field
                                        name="play-at"
                                        class="w-full"
                                        formControlName="play_at"
                                    ></a-date-field>
                                </div>
                                <div class="flex-1">
                                    <label for="play-at-time">&nbsp;</label>
                                    <a-time-field
                                        name="play-at-time"
                                        class="w-full"
                                        [ngModel]="form.value.play_at"
                                        (ngModelChange)="
                                            form.patchValue({ play_at: $event })
                                        "
                                        [ngModelOptions]="{ standalone: true }"
                                    ></a-time-field>
                                </div>
                            </div>
                            <label for="play-duration">{{
                                'APP.CONCIERGE.PLAY_DURATION' | translate
                            }}</label>
                            <a-duration-field
                                name="play-duration"
                                class="w-full"
                                formControlName="play_duration"
                            ></a-duration-field>
                            <settings-toggle
                                formControlName="play_once"
                                class="mb-4"
                            >
                                {{ 'APP.CONCIERGE.PLAY_ONCE' | translate }}
                            </settings-toggle>
                        } @else if (schedule() === 'recurring') {
                            <div class="flex space-x-4">
                                <div class="flex-1">
                                    <label for="name">{{
                                        'APP.CONCIERGE.PLAY_CRON' | translate
                                    }}</label>
                                    <cron-input-field
                                        formControlName="play_cron"
                                    />
                                </div>
                                <div class="flex-1">
                                    <label for="play-duration">{{
                                        'APP.CONCIERGE.PLAY_DURATION'
                                            | translate
                                    }}</label>
                                    <a-duration-field
                                        name="play-duration"
                                        class="w-full"
                                        formControlName="play_duration"
                                    ></a-duration-field>
                                </div>
                            </div>
                            <settings-toggle
                                formControlName="play_once"
                                class="mb-4"
                            >
                                {{ 'APP.CONCIERGE.PLAY_ONCE' | translate }}
                            </settings-toggle>
                        }
                    </div>
                </div>
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    standalone: false,
})
export class SignagePlaylistModalComponent implements OnInit {
    private _data = inject<SignagePlaylist>(MAT_DIALOG_DATA) ?? ({} as any);
    private _state = inject(SignageStateService);
    private _dialog_ref =
        inject<MatDialogRef<SignagePlaylistModalComponent>>(MatDialogRef);

    public readonly loading = signal(false);
    public readonly playlist = this._data;
    public readonly media = this._state.media;
    public readonly schedule = signal<'' | 'between' | 'exact' | 'recurring'>(
        '',
    );

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
        play_hours: new FormControl(this.playlist.play_hours || '00:00-00:00'),
        play_duration: new FormControl(0),
        play_from: new FormControl(0),
        play_until: new FormControl(0),
        play_once: new FormControl(false),
        play_at: new FormControl(this.playlist.play_at * 1000 || Date.now()),
        play_cron: new FormControl('* * * * *'),
    });

    public readonly search_input =
        viewChild<ElementRef<HTMLInputElement>>('search_input');

    public ngOnInit() {
        this.form.patchValue({
            ...this.playlist,
            valid_from: this.playlist.valid_from * 1000,
            valid_until: this.playlist.valid_until * 1000,
        });
        const { play_hours, play_at, play_cron } = this.form.value;
        let [from, to] = (play_hours || '').split('-');
        if (!from) from = '00:00';
        if (!to) to = '00:00';
        this.form.patchValue({
            play_from: addDays(
                set(Date.now(), {
                    hours: parseInt(from.split(':')[0]),
                    minutes: parseInt(from.split(':')[1]),
                }),
                1,
            ).valueOf(),
            play_until: addDays(
                set(Date.now(), {
                    hours: parseInt(to.split(':')[0]),
                    minutes: parseInt(to.split(':')[1]),
                }),
                1,
            ).valueOf(),
            play_duration:
                parseInt(from.split(':')[0]) * 60 +
                parseInt(from.split(':')[1]),
            play_once: !play_hours,
        });
        this.schedule.set(
            play_cron
                ? 'recurring'
                : play_at
                  ? 'exact'
                  : from !== to
                    ? 'between'
                    : '',
        );
    }

    public async savePlaylist() {
        this.form.markAllAsTouched();
        this.form.updateValueAndValidity();
        if (this.form.invalid) return;
        this.loading.set(true);
        const form_value = this.form.getRawValue();
        if (this.schedule() === 'between') {
            form_value.play_hours = `${format(form_value.play_from, 'HH:mm')}-${format(form_value.play_until, 'HH:mm')}`;
            form_value.play_at = 0;
            form_value.play_cron = '';
        } else if (this.schedule() === 'exact') {
            form_value.play_cron = '';
            const hours = padLength(Math.floor(form_value.play_duration / 60));
            const minutes = padLength(form_value.play_duration % 60);
            form_value.play_hours = `${hours}:${minutes}`;
        } else if (this.schedule() === 'recurring') {
            const hours = padLength(Math.floor(form_value.play_duration / 60));
            const minutes = padLength(form_value.play_duration % 60);
            form_value.play_hours = `${hours}:${minutes}`;
            form_value.play_at = 0;
        } else {
            form_value.play_hours = '';
            form_value.play_at = 0;
            form_value.play_cron = '';
        }
        delete form_value.play_from;
        delete form_value.play_until;
        delete form_value.play_duration;
        if (!form_value.valid_until) delete form_value.valid_until;
        if (!form_value.valid_from) delete form_value.valid_from;
        if (form_value.play_once) form_value.play_hours = '';
        const result = await this._state
            .savePlaylist({
                ...(form_value as any),
                valid_from: getUnixTime(startOfDay(form_value.valid_from)),
                valid_until: getUnixTime(endOfDay(form_value.valid_until)),
            })
            .catch((_) => {
                notifyError('Error saving playlist');
                this.loading.set(false);
                throw _;
            });
        this._dialog_ref.close(result);
    }
}
