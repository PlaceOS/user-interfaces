import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
    FormControl,
    FormGroup,
    FormsModule,
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
import {
    DateFieldComponent,
    DurationFieldComponent,
    TimeFieldComponent,
} from '@placeos/form-fields';
import {
    addSignagePlaylist,
    MediaAnimation,
    SignagePlaylist,
    updateSignagePlaylist,
} from '@placeos/ts-client';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { CronInputFieldComponent } from 'libs/form-fields/src/lib/cron-input-field.component';
import { lastValueFrom, startWith } from 'rxjs';

type PlaylistScheduleType = 'play_hours' | 'play_at' | 'play_cron';

const FULL_DAY_START_MINUTES = 0;
const FULL_DAY_END_MINUTES = 23 * 60 + 59;

function minutesToTime(value: number) {
    const safe_value = Math.max(
        FULL_DAY_START_MINUTES,
        Math.min(FULL_DAY_END_MINUTES, value || 0),
    );
    const hours = Math.floor(safe_value / 60)
        .toString()
        .padStart(2, '0');
    const minutes = (safe_value % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

function timeToMinutes(value: string) {
    const [hours, minutes] = (value || '').split(':').map((_) => +_ || 0);
    return Math.max(
        FULL_DAY_START_MINUTES,
        Math.min(FULL_DAY_END_MINUTES, hours * 60 + minutes),
    );
}

function parsePlayHours(value: string | null | undefined) {
    const [start, end] = (value || '').split('-');
    return {
        start: start ? timeToMinutes(start) : FULL_DAY_START_MINUTES,
        end: end ? timeToMinutes(end) : FULL_DAY_END_MINUTES,
    };
}

function parseDurationMinutes(value: string | null | undefined) {
    const [hours, minutes] = (value || '').split(':').map((_) => +_ || 0);
    return hours * 60 + minutes;
}

function scheduleTypeFor(playlist: SignagePlaylist): PlaylistScheduleType {
    if (playlist.play_cron?.trim()) return 'play_cron';
    if (playlist.play_at && playlist.play_at !== '0') return 'play_at';
    return 'play_hours';
}

function matchesCronPart(value: number, cron_part: string) {
    if (cron_part === '*') return true;
    if (cron_part.includes(',')) {
        return cron_part
            .split(',')
            .some((item) => matchesCronPart(value, item));
    }
    if (cron_part.includes('/')) {
        const [base, step] = cron_part.split('/');
        return !!+step && value % +step === 0 && matchesCronPart(value, base);
    }
    if (cron_part.includes('-')) {
        const [start, end] = cron_part.split('-').map(Number);
        return value >= start && value <= end;
    }
    return Number(cron_part) === value;
}

function doesCronMatchDate(cron: string, date: Date) {
    const parts = cron.trim().split(/\s+/);
    if (parts.length !== 5) return false;
    const [minute, hour, day, month, day_of_week] = parts;
    if (!matchesCronPart(date.getMinutes(), minute)) return false;
    if (!matchesCronPart(date.getHours(), hour)) return false;
    if (!matchesCronPart(date.getMonth() + 1, month)) return false;
    const day_matches = matchesCronPart(date.getDate(), day);
    const weekday_matches = matchesCronPart(date.getDay(), day_of_week);
    if (day === '*' && day_of_week === '*') return true;
    if (day !== '*' && day_of_week === '*') return day_matches;
    if (day === '*' && day_of_week !== '*') return weekday_matches;
    return day_matches || weekday_matches;
}

function nextCronPlayTimes(cron: string) {
    const result: string[] = [];
    if (!cron?.trim()) return result;
    const date = new Date();
    date.setSeconds(0, 0);
    date.setMinutes(date.getMinutes() + 1);
    const end = new Date(date);
    end.setFullYear(end.getFullYear() + 2);
    while (date <= end && result.length < 5) {
        if (doesCronMatchDate(cron, date)) {
            result.push(
                date.toLocaleString(undefined, {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: '2-digit',
                }),
            );
        }
        date.setMinutes(date.getMinutes() + 1);
    }
    return result;
}

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
                <div class="pt-2 pb-4">
                    <div class="border-base-300 relative rounded-sm border">
                        <label
                            for="schedule-type"
                            class="bg-base-100 absolute top-0 left-2 m-0 flex w-auto min-w-0 -translate-y-1/2 items-center space-x-2 px-2"
                        >
                            <div>Schedule</div>
                        </label>
                        <div class="space-y-2 px-2 pt-4 pb-2">
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    name="schedule-type"
                                    formControlName="schedule_type"
                                    aria-label="Playlist schedule type"
                                >
                                    <mat-option value="play_hours"
                                        >Play Hours</mat-option
                                    >
                                    <mat-option value="play_at"
                                        >Play At</mat-option
                                    >
                                    <mat-option value="play_cron"
                                        >Play Cron</mat-option
                                    >
                                </mat-select>
                            </mat-form-field>
                            @if (form.value.schedule_type === 'play_hours') {
                                <div class="flex items-center">
                                    <mat-slider
                                        class="flex-1"
                                        min="0"
                                        max="1439"
                                        step="1"
                                        [displayWith]="formatPlayHour"
                                    >
                                        <input
                                            name="play-hours-start"
                                            matSliderStartThumb
                                            formControlName="play_hours_start"
                                        />
                                        <input
                                            name="play-hours-end"
                                            matSliderEndThumb
                                            formControlName="play_hours_end"
                                        />
                                    </mat-slider>
                                    <div
                                        class="w-28 px-2 text-right font-mono text-xs"
                                    >
                                        {{
                                            formatPlayHour(
                                                form.value.play_hours_start
                                            )
                                        }}-{{
                                            formatPlayHour(
                                                form.value.play_hours_end
                                            )
                                        }}
                                    </div>
                                </div>
                            } @else if (
                                form.value.schedule_type === 'play_at'
                            ) {
                                <div class="flex space-x-4">
                                    <div class="flex-1">
                                        <label for="play-at">Play At</label>
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
                                                form.patchValue({
                                                    play_at: $event,
                                                })
                                            "
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                        ></a-time-field>
                                    </div>
                                </div>
                                <label for="play-duration">Play Duration</label>
                                <a-duration-field
                                    name="play-duration"
                                    class="w-full"
                                    formControlName="play_duration"
                                    [max]="12 * 60"
                                ></a-duration-field>
                                <settings-toggle
                                    class="mb-2"
                                    [name]="'Takeover playback'"
                                    formControlName="play_at_takeover"
                                >
                                </settings-toggle>
                            } @else if (
                                form.value.schedule_type === 'play_cron'
                            ) {
                                <label for="play-duration">Play Duration</label>
                                <a-duration-field
                                    name="play-duration"
                                    class="w-full"
                                    formControlName="play_duration"
                                    [max]="12 * 60"
                                ></a-duration-field>
                                <label
                                    for="play-cron"
                                    class="flex items-center gap-4"
                                    >Play Cron
                                    <span class="text-base-400">{{
                                        form.value.play_cron
                                    }}</span></label
                                >
                                <cron-input-field
                                    name="play-cron"
                                    formControlName="play_cron"
                                />
                                <div
                                    class="border-base-300 relative mt-6 flex flex-col gap-2 rounded border px-2 pt-4 pb-2 text-sm"
                                >
                                    <div
                                        class="bg-base-100 absolute top-0 left-3 -translate-y-1/2 rounded px-2"
                                    >
                                        Example Instances
                                    </div>
                                    @for (
                                        play_time of next_cron_play_times();
                                        track play_time
                                    ) {
                                        <div
                                            class="border-base-200 hover:bg-base-200/50 rounded-lg border p-2 font-mono text-xs"
                                        >
                                            {{ play_time }}
                                        </div>
                                    } @empty {
                                        <div
                                            class="text-base-content/60 text-xs"
                                        >
                                            No upcoming play times found.
                                        </div>
                                    }
                                </div>
                            }
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
        FormsModule,
        DateFieldComponent,
        TimeFieldComponent,
        DurationFieldComponent,
        CronInputFieldComponent,
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
        schedule_type: new FormControl<PlaylistScheduleType>('play_hours'),
        play_hours_start: new FormControl(FULL_DAY_START_MINUTES),
        play_hours_end: new FormControl(FULL_DAY_END_MINUTES),
        play_at: new FormControl(Date.now()),
        play_at_takeover: new FormControl(false),
        play_cron: new FormControl('* * * * *'),
        play_duration: new FormControl(30),
        valid_from: new FormControl(0),
        valid_until: new FormControl(0),
    });
    private readonly _form_value = toSignal(
        this.form.valueChanges.pipe(startWith(this.form.getRawValue())),
        { initialValue: this.form.getRawValue() },
    );
    public readonly next_cron_play_times = computed(() => {
        const value = this._form_value();
        if (value.schedule_type !== 'play_cron') return [];
        return nextCronPlayTimes(value.play_cron || '');
    });

    constructor() {
        const play_hours = parsePlayHours(this.playlist.play_hours);
        const schedule_type = scheduleTypeFor(this.playlist);
        this.form.patchValue({
            ...this.playlist,
            schedule_type,
            play_hours_start: play_hours.start,
            play_hours_end: play_hours.end,
            play_at: this.playlist.play_at || Date.now(),
            play_cron: this.playlist.play_cron || '* * * * *',
            play_duration: this.playlist.play_hours?.includes('-')
                ? 30
                : parseDurationMinutes(this.playlist.play_hours) || 30,
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

    public readonly formatPlayHour = (value: number | null | undefined) =>
        minutesToTime(value || 0);

    public async savePlaylist() {
        this.form.markAllAsTouched();
        this.form.updateValueAndValidity();
        if (!this.form.valid) return;
        this.loading.set(true);
        this._dialog_ref.disableClose = true;
        const form_value = this.form.getRawValue();
        const data: any = { ...form_value };
        delete data.schedule_type;
        delete data.play_hours_start;
        delete data.play_hours_end;
        delete data.play_duration;
        const play_hours_start =
            form_value.play_hours_start ?? FULL_DAY_START_MINUTES;
        const play_hours_end =
            form_value.play_hours_end ?? FULL_DAY_END_MINUTES;
        if (form_value.schedule_type === 'play_at') {
            data.play_hours = minutesToTime(form_value.play_duration || 30);
            data.play_cron = '';
        } else if (form_value.schedule_type === 'play_cron') {
            data.play_hours = minutesToTime(form_value.play_duration || 30);
            data.play_at = 0;
            data.play_at_takeover = false;
        } else {
            data.play_at = 0;
            data.play_at_takeover = false;
            data.play_cron = '';
            data.play_hours =
                play_hours_start === FULL_DAY_START_MINUTES &&
                play_hours_end === FULL_DAY_END_MINUTES
                    ? null
                    : `${minutesToTime(play_hours_start)}-${minutesToTime(play_hours_end)}`;
        }
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
