import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    computed,
    inject,
    signal,
} from '@angular/core';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import {
    SettingsService,
    WorktimePreference,
    i18n,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import {
    EncryptionLevel,
    PlaceSettings,
    addSettings,
    querySettings,
    showMetadata,
    updateMetadata,
    updateSettings,
} from '@placeos/ts-client';
import {
    set,
    setDay,
    setHours,
    setMinutes,
    startOfDay,
    startOfMinute,
} from 'date-fns';
import { lastValueFrom } from 'rxjs';

import { WFHSettingsModalComponent } from '@placeos/users';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import {
    IconComponent,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';
import {
    DurationFieldComponent,
    TimeFieldComponent,
} from '@placeos/form-fields';

import { parse as parseYaml, stringify as stringifyYaml } from 'yaml';

@Component({
    selector: 'auto-release-modal',
    template: `
        <header
            class="bg-base-200 m-2 flex h-14 w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none px-4 py-2"
        >
            <h3 class="text-xl font-medium">
                {{ 'APP.CONCIERGE.AUTO_RELEASE_HEADER' | translate }}
            </h3>
            @if (!loading()) {
                <button icon matRipple mat-dialog-close>
                    <icon class="text-2xl">close</icon>
                </button>
            }
        </header>
        @if (!loading()) {
            <main class="max-h-[65vh] w-lg overflow-auto px-4">
                <div class="flex space-x-2">
                    <div class="flex-1">
                        <label>
                            {{
                                'APP.CONCIERGE.AUTO_RELEASE_NOTIFY' | translate
                            }}
                        </label>
                        <a-duration-field
                            [min]="-15"
                            [max]="60"
                            [step]="5"
                            [ngModel]="setting('time_before')"
                            (ngModelChange)="setSetting('time_before', $event)"
                        ></a-duration-field>
                    </div>
                    <div class="flex-1">
                        <label>{{
                            'APP.CONCIERGE.AUTO_RELEASE_CANCEL' | translate
                        }}</label>
                        <a-duration-field
                            [min]="0"
                            [max]="60"
                            [step]="5"
                            [ngModel]="setting('time_after')"
                            (ngModelChange)="setSetting('time_after', $event)"
                        ></a-duration-field>
                    </div>
                </div>
                <div class="flex items-end space-x-2">
                    <div class="flex-1">
                        <label>{{
                            'APP.CONCIERGE.AUTO_RELEASE_ALL_DAY_START'
                                | translate
                        }}</label>
                        <a-time-field
                            [no_past_times]="false"
                            [ngModel]="start_hour()"
                            (ngModelChange)="setStartHour($event)"
                        ></a-time-field>
                    </div>
                    <settings-toggle
                        class="mb-4 flex-1"
                        [label]="
                            'APP.CONCIERGE.AUTO_RELEASE_OUTSIDE_HOURS'
                                | translate
                        "
                        [ngModel]="setting('release_outside_hours')"
                        (ngModelChange)="
                            setSetting('release_outside_hours', $event)
                        "
                    ></settings-toggle>
                </div>
                <label>{{
                    'APP.CONCIERGE.AUTO_RELEASE_DEFAULT_HOURS' | translate
                }}</label>
                <div class="my-2 grid grid-cols-2 gap-2">
                    @if (!default_work_preferences().length) {
                        <div
                            class="bg-base-200 col-span-2 mb-2 flex w-full items-center justify-center rounded-sm py-4 opacity-30"
                        >
                            {{
                                'APP.CONCIERGE.AUTO_RELEASE_DEFAULT_HOURS_EMPTY'
                                    | translate
                            }}
                        </div>
                    } @else {
                        @for (
                            pref of default_work_preferences();
                            track pref.date
                        ) {
                            @if (pref.blocks.length) {
                                <div
                                    class="border-base-300 relative rounded-sm border px-2 pt-4 pb-2"
                                >
                                    <div
                                        class="bg-base-100 absolute -top-2 left-2 rounded-sm px-2 text-sm"
                                    >
                                        <span class="relative -top-0.5">{{
                                            pref.date | date: 'EEEE'
                                        }}</span>
                                    </div>
                                    @for (block of pref.blocks; track block.i) {
                                        <div class="mb-1 text-xs opacity-60">
                                            {{
                                                block.start | date: 'shortTime'
                                            }}
                                            -
                                            {{ block.end | date: 'shortTime' }}
                                            |
                                            {{ block.location }}
                                        </div>
                                    }
                                </div>
                            }
                        }
                    }
                </div>
                <button
                    btn
                    matRipple
                    (click)="setDefaultWorkHourPreferences()"
                    class="mb-4 w-full"
                >
                    {{
                        'APP.CONCIERGE.AUTO_RELEASE_DEFAULT_HOURS_SET'
                            | translate
                    }}
                </button>
                <label>{{
                    'APP.CONCIERGE.AUTO_RELEASE_TYPES' | translate
                }}</label>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-select
                        multiple
                        [ngModel]="setting('resources')"
                        (ngModelChange)="setSetting('resources', $event)"
                        [placeholder]="
                            'APP.CONCIERGE.AUTO_RELEASE_TYPES' | translate
                        "
                    >
                        <!-- <mat-option value="room">
                Rooms
              </mat-option> -->
                        <mat-option value="desk">
                            {{ 'RESOURCE.DESKS' | translate }}
                        </mat-option>
                        <mat-option value="visitor">
                            {{ 'RESOURCE.VISITORS' | translate }}
                        </mat-option>
                        <mat-option value="parking">
                            {{ 'RESOURCE.PARKING' | translate }}
                        </mat-option>
                        <mat-option value="locker">
                            {{ 'RESOURCE.LOCKERS' | translate }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
                @for (name of types; track name) {
                    @if (setting('resources')?.includes(name)) {
                        <div
                            class="border-base-200 mb-4 space-y-4 rounded-lg border"
                        >
                            <settings-toggle
                                [label]="
                                    'APP.CONCIERGE.AUTO_RELEASE_' +
                                        name.toUpperCase() | translate
                                "
                                [ngModel]="setting('custom')?.includes(name)"
                                (ngModelChange)="toggleCustom(name, $event)"
                            ></settings-toggle>
                            @if (setting('custom')?.includes(name)) {
                                <div class="flex h-14 space-x-2 px-2">
                                    <a-duration-field
                                        [min]="-15"
                                        [max]="60"
                                        [step]="5"
                                        [ngModel]="
                                            setting(name + '_time_before')
                                        "
                                        (ngModelChange)="
                                            setSetting(
                                                name + '_time_before',
                                                $event
                                            )
                                        "
                                    ></a-duration-field>
                                    <a-duration-field
                                        [min]="0"
                                        [max]="60"
                                        [step]="5"
                                        [ngModel]="
                                            setting(name + '_time_after')
                                        "
                                        (ngModelChange)="
                                            setSetting(
                                                name + '_time_after',
                                                $event
                                            )
                                        "
                                    ></a-duration-field>
                                </div>
                            }
                        </div>
                    }
                }
            </main>
        } @else {
            <main
                class="flex flex-col items-center justify-center space-y-2 p-32"
            >
                <mat-spinner [diameter]="48"></mat-spinner>
                <p>{{ loading() }}</p>
            </main>
        }
        @if (!loading()) {
            <footer class="border-base-200 flex justify-end border-t px-4 py-2">
                <button btn matRipple class="w-32" (click)="save()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        }
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        CommonModule,
        DurationFieldComponent,
        MatProgressSpinnerModule,
        MatRippleModule,
        SettingsToggleComponent,
        MatFormFieldModule,
        MatSelectModule,
        TimeFieldComponent,
        FormsModule,
        MatDialogModule,
        TranslatePipe,
        IconComponent,
    ],
})
export class AutoReleaseSettingsModalComponent implements OnInit {
    private _id = inject(MAT_DIALOG_DATA);
    private _dialog = inject(MatDialog);
    private _dialog_ref =
        inject<MatDialogRef<AutoReleaseSettingsModalComponent>>(MatDialogRef);
    private _settings = inject(SettingsService);

    public readonly types = ['desk', 'parking', 'locker', 'visitor'];
    public loading = signal('');
    public readonly id = this._id;
    public readonly settings = signal<Record<string, any>>({
        custom: [],
    });

    public readonly start_hour = computed(() =>
        startOfMinute(
            set(Date.now(), {
                hours: Math.floor(this.setting('all_day_start') || 8),
                minutes:
                    Math.floor((this.setting('all_day_start') || 0) * 60) % 60,
            }),
        ).valueOf(),
    );

    public readonly setStartHour = (t) => {
        const d = new Date(t);
        this.setSetting('all_day_start', d.getHours() + d.getMinutes() / 60);
    };

    public readonly default_work_preferences = computed(() =>
        (this.setting('default_work_preferences') || []).map(
            (pref: WorktimePreference) => ({
                date: startOfDay(
                    setDay(Date.now(), pref.day_of_week),
                ).valueOf(),
                blocks: pref.blocks.map((block, idx) => ({
                    i: idx,
                    start: startOfMinute(
                        setHours(
                            setMinutes(
                                Date.now(),
                                Math.floor(block.start_time * 60) % 60,
                            ),
                            block.start_time,
                        ),
                    ),
                    end: startOfMinute(
                        setHours(
                            setMinutes(
                                Date.now(),
                                Math.floor(block.end_time * 60) % 60,
                            ),
                            block.end_time,
                        ),
                    ),
                    location: block.location
                        ? i18n(`COMMON.${block.location.toUpperCase()}`)
                        : '',
                })),
            }),
        ),
    );

    public ngOnInit() {
        ''.toUpperCase;
        this.loadSettings(this.id);
    }

    public toggleCustom(name: string, state = true) {
        this.settings.update((settings) => {
            const custom = (settings.custom || []).filter((_) => _ !== name);
            const next_settings = { ...settings, custom };
            if (state) {
                custom.push(name);
                next_settings[name + '_time_before'] = settings.time_before;
                next_settings[name + '_time_after'] = settings.time_after;
            } else {
                delete next_settings[name + '_time_before'];
                delete next_settings[name + '_time_after'];
            }
            return next_settings;
        });
    }

    public async setDefaultWorkHourPreferences() {
        const ref = this._dialog.open(WFHSettingsModalComponent, {
            data: {
                local: true,
                preferences: this.setting('default_work_preferences') || [],
            },
        });
        const result = await lastValueFrom(ref.afterClosed());
        if (!result) return;
        this.setSetting('default_work_preferences', result);
    }

    public setting(key: string) {
        return this.settings()[key];
    }

    public setSetting(key: string, value: any) {
        this.settings.update((settings) => ({ ...settings, [key]: value }));
    }

    public async loadSettings(id: string) {
        this.loading.set(i18n('APP.CONCIERGE.AUTO_RELEASE_LOADING'));
        this.settings.set({ custom: [] });
        const settings = (await querySettings({ parent_id: id })).data;
        const unencrypted = settings.find(
            (_) => _.encryption_level === EncryptionLevel.None,
        );
        if (!unencrypted) return;
        try {
            this.settings.set(
                parseYaml(unencrypted.settings_string)?.auto_release || {},
            );
        } catch {}
        if (!this.setting('custom')) this.setSetting('custom', []);
        for (const name of this.types) {
            const key = name + '_time_before';
            if (key in this.settings()) {
                this.settings.update((settings) => ({
                    ...settings,
                    custom: [...(settings.custom || []), name],
                }));
            }
        }
        this.loading.set('');
    }

    public async save() {
        this.loading.set(i18n('APP.CONCIERGE.AUTO_RELEASE_SAVING'));
        const settings = (await querySettings({ parent_id: this.id })).data;
        let unencrypted = settings.find(
            (_) => _.encryption_level === EncryptionLevel.None,
        );
        if (!unencrypted) {
            unencrypted = new PlaceSettings({
                parent_id: this.id,
                encryption_level: EncryptionLevel.None,
                settings_string: '',
            });
        }
        const new_settings = { ...this.settings() };
        delete new_settings.custom;
        let old_settings = {};
        try {
            old_settings = parseYaml(unencrypted.settings_string) || {};
        } catch {}
        (unencrypted as any).settings_string = stringifyYaml({
            ...old_settings,
            auto_release: new_settings,
        });
        const on_error = (e) => {
            notifyError(i18n('APP.CONCIERGE.AUTO_RELEASE_ERROR', { error: e }));
            throw e;
        };
        unencrypted.id
            ? await updateSettings(unencrypted.id, unencrypted).catch(on_error)
            : await addSettings(unencrypted).catch(on_error);

        const metadata_key =
            this._settings.get('app.workplace_metadata_key') || 'workplace_app';
        const metadata = await showMetadata(this.id, metadata_key);
        const details: any = metadata.details || {};
        details.auto_release = new_settings;
        await updateMetadata(this.id, {
            name: metadata_key,
            details,
            description: '',
        }).catch(on_error);
        notifySuccess(i18n('APP.CONCIERGE.AUTO_RELEASE_SUCCESS'));
        this.loading.set('');
        this._dialog_ref.close();
    }
}
