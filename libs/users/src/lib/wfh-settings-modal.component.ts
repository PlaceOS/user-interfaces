import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { showUser, updateUser } from '@placeos/ts-client';
import { addDays, set, startOfMinute, startOfWeek } from 'date-fns';
import { lastValueFrom } from 'rxjs';

import {
    currentUser,
    i18n,
    notifyError,
    reloadUserData,
} from '@placeos/common';

import { WorktimeBlock, WorktimePreference } from './user.class';

import { FormsModule } from '@angular/forms';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { TimeFieldComponent } from 'libs/form-fields/src/lib/time-field.component';

@Component({
    selector: `wfh-settings-modal`,
    template: `
        <header
            class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded border-none bg-base-200 p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'COMMON.WORK_LOCATION_SETTINGS' | translate }}
            </h2>
            @if (!loading) {
                <button icon matRipple mat-dialog-close class="bg-base-200">
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading) {
            <main
                class="relative flex max-h-[calc(100vh-9rem)] w-[40rem] max-w-full flex-col space-y-2 overflow-y-auto overflow-x-hidden rounded px-2 py-4 sm:max-h-[65vh] sm:p-4"
            >
                <div
                    class="relative mb-4 flex w-full items-center justify-between space-x-2 rounded border border-base-300 p-2"
                >
                    @for (day of days; track day) {
                        <div class="flex flex-1 flex-col items-center pt-2">
                            <div class="text-xs font-bold uppercase">
                                {{ day | date: 'EEE' }}
                            </div>
                            <mat-checkbox
                                [(ngModel)]="weekdays_enabled[day.getDay()]"
                                (ngModelChange)="
                                    $event && initialiseDay(day.getDay())
                                "
                            >
                            </mat-checkbox>
                        </div>
                    }
                    <h3
                        class="absolute left-2 top-0 -translate-y-1/2 bg-base-100 px-2"
                    >
                        {{ 'COMMON.WORK_DAYS' | translate }}
                    </h3>
                </div>
                @if (has_working_days) {
                    <div
                        class="relative flex w-full flex-col items-center justify-between space-y-4 rounded border border-base-300 px-2 pb-4 pt-6 sm:px-4"
                    >
                        @for (day of days; track day) {
                            @if (weekdays_enabled[day.getDay()]) {
                                <div
                                    class="relative flex w-full items-center justify-between space-x-2 rounded border border-base-200 p-2"
                                >
                                    <div class="w-1/2 flex-1 space-y-2 pt-2">
                                        @for (
                                            block of settings[day.getDay()]
                                                .blocks;
                                            track block;
                                            let i = $index
                                        ) {
                                            <div
                                                class="flex items-center space-x-2"
                                            >
                                                <a-time-field
                                                    [ngModel]="
                                                        timeFrom(
                                                            block.start_time
                                                        )
                                                    "
                                                    (ngModelChange)="
                                                        setStartTime(
                                                            block,
                                                            day.getDay(),
                                                            $event
                                                        )
                                                    "
                                                    [from]="
                                                        timeFrom(
                                                            (i > 0
                                                                ? settings[
                                                                      day.getDay()
                                                                  ].blocks[
                                                                      i - 1
                                                                  ]?.end_time
                                                                : 0) || 0
                                                        )
                                                    "
                                                    [no_error]="true"
                                                    class="w-1/4 flex-1"
                                                ></a-time-field>
                                                <a-time-field
                                                    [ngModel]="
                                                        timeFrom(block.end_time)
                                                    "
                                                    (ngModelChange)="
                                                        setEndTime(
                                                            block,
                                                            day.getDay(),
                                                            $event
                                                        )
                                                    "
                                                    [from]="
                                                        timeFrom(
                                                            block.start_time +
                                                                0.25
                                                        )
                                                    "
                                                    [no_error]="true"
                                                    class="w-1/4 flex-1"
                                                ></a-time-field>
                                                <mat-form-field
                                                    appearance="outline"
                                                    class="no-subscript w-1/4 flex-1"
                                                >
                                                    <mat-select
                                                        [(ngModel)]="
                                                            block.location
                                                        "
                                                    >
                                                        @for (
                                                            type of options;
                                                            track type
                                                        ) {
                                                            <mat-option
                                                                [value]="
                                                                    type.id
                                                                "
                                                            >
                                                                {{ type.name }}
                                                            </mat-option>
                                                        }
                                                    </mat-select>
                                                </mat-form-field>
                                                @if (i === 0) {
                                                    <button
                                                        icon
                                                        matRipple
                                                        (click)="
                                                            addBlock(
                                                                settings[
                                                                    day.getDay()
                                                                ],
                                                                i
                                                            )
                                                        "
                                                        class="h-12 w-12 rounded border border-base-400"
                                                    >
                                                        <icon>add</icon>
                                                    </button>
                                                }
                                                @if (i !== 0) {
                                                    <button
                                                        icon
                                                        matRipple
                                                        class="h-12 w-12 rounded border border-error text-error"
                                                        (click)="
                                                            removeBlock(
                                                                settings[
                                                                    day.getDay()
                                                                ],
                                                                i
                                                            )
                                                        "
                                                    >
                                                        <icon>delete</icon>
                                                    </button>
                                                }
                                            </div>
                                        }
                                    </div>
                                    <h3
                                        class="absolute left-2 top-0 -translate-y-1/2 rounded border border-base-200 bg-base-100 bg-opacity-50 px-2 text-sm font-medium"
                                    >
                                        {{ day | date: 'EEEE' }}
                                    </h3>
                                </div>
                            }
                        }
                        <h3
                            class="absolute left-2 top-0 !m-0 -translate-y-1/2 bg-base-100 px-2"
                        >
                            {{ 'COMMON.WORK_HOURS' | translate }}
                        </h3>
                    </div>
                } @else {
                    <div
                        class="flex flex-col items-center justify-center space-y-4 px-8 py-16"
                    >
                        <img src="assets/icons/no-results.svg" class="m-auto" />
                        <p class="opacity-30">
                            {{ 'COMMON.WORK_SETTINGS_EMPTY' | translate }}
                        </p>
                    </div>
                }
            </main>
        } @else {
            <div
                loading
                class="relative flex h-[18rem] w-[24rem] flex-col items-center justify-center space-y-2 overflow-hidden rounded bg-base-100 text-center"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="opacity-30">
                    {{ 'COMMON.WORK_SETTINGS_SAVE' | translate }}
                </p>
            </div>
        }
        @if (!loading) {
            <footer class="flex justify-end border-t border-base-200 px-4 py-2">
                <button btn matRipple class="w-48" (click)="saveChanges()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        }
    `,
    styles: [``],
    imports: [
        CommonModule,
        MatDialogModule,
        TranslatePipe,
        MatRippleModule,
        MatFormFieldModule,
        MatSelectModule,
        TimeFieldComponent,
        MatCheckboxModule,
        FormsModule,
        IconComponent,
    ],
})
export class WFHSettingsModalComponent implements OnInit {
    private _data = inject<{
        local?: boolean;
        preferences?: WorktimePreference[];
    }>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<WFHSettingsModalComponent>>(MatDialogRef);

    public options = [];
    public option = '';
    public settings: WorktimePreference[] = [];
    public weekdays_enabled: Record<number, boolean> = {};
    public changed = false;
    public loading = false;
    public readonly available_weekdays = [];
    public readonly days = new Array(7)
        .fill(0)
        .map((_, idx) => addDays(startOfWeek(addDays(Date.now(), 30)), idx));

    public get has_working_days() {
        return Object.keys(this.weekdays_enabled).some(
            (day) => this.weekdays_enabled[day],
        );
    }

    public get option_name() {
        return this.options.find((_) => _.id === this.option)?.name || '';
    }

    public get now() {
        return startOfMinute(Date.now()).getTime();
    }

    public ngOnInit() {
        const user = currentUser();
        const prefs = this._data?.local
            ? this._data.preferences
            : user.work_preferences;
        this.settings = [
            ...(prefs || []).map((_) => ({
                ..._,
                blocks: [...(_?.blocks || [])],
            })),
        ];
        for (const day of this.settings) {
            if (day.blocks.length)
                this.weekdays_enabled[day.day_of_week] = true;
        }
        this.options = [
            { id: 'wfo', name: i18n('COMMON.WORK_OFFICE'), icon: 'business' },
            { id: 'wfh', name: i18n('COMMON.WORK_HOME'), icon: 'home' },
            { id: 'aol', name: i18n('COMMON.WORK_LEAVE'), icon: 'event_busy' },
        ];
        this.option = this.options[0].id;
    }

    public timeFrom(hours: number) {
        return startOfMinute(
            set(addDays(new Date(), 1), {
                hours: Math.floor(hours),
                minutes: (hours * 60) % 60,
            }),
        ).getTime();
    }

    public fromTime(time: number) {
        const date = new Date(time);
        return date.getHours() + date.getMinutes() / 60;
    }

    public initialiseDay(day: number) {
        if (!this.settings[day])
            this.settings[day] = { day_of_week: day as any, blocks: [] };
        if (!this.settings[day].blocks) this.settings[day].blocks = [];
        if (this.settings[day].blocks.length === 0) {
            this.addBlock(this.settings[day], 0);
        }
    }

    public addBlock(pref: WorktimePreference, index: number) {
        pref.blocks.splice(index + 1, 0, {
            start_time: 9,
            end_time: 17,
            location: 'wfo',
        });
        this.cleanupBlocks(pref);
    }

    public removeBlock(pref: WorktimePreference, index: number) {
        if (pref.blocks.length <= 1) return;
        pref.blocks.splice(index, 1);
    }

    public setEndTime(block: WorktimeBlock, day: number, time: number) {
        setTimeout(() => {
            block.end_time = this.fromTime(time);
            this.cleanupBlocks(this.settings[day]);
        }, 50);
    }

    public setStartTime(block: WorktimeBlock, day: number, time: number) {
        setTimeout(() => {
            block.start_time = this.fromTime(time);
            this.cleanupBlocks(this.settings[day]);
        }, 50);
    }

    public cleanupBlocks(pref: WorktimePreference) {
        if (!pref?.blocks?.length) return;
        for (let i = 0; i < pref.blocks.length; i++) {
            const block = pref.blocks[i];
            if (i > 0) {
                if (block.start_time < pref.blocks[i - 1].end_time) {
                    block.start_time = pref.blocks[i - 1].end_time;
                }
            }
            if (block.end_time <= block.start_time) {
                block.end_time = block.start_time + 1;
            }
        }
    }

    public async saveChanges(close = true) {
        this.loading = true;
        this._dialog_ref.disableClose = true;
        const new_settings = new Array(7)
            .fill(0)
            .map((_, idx) => ({ day_of_week: idx, blocks: [] }));
        for (const day of this.days) {
            const day_of_week = day.getDay();
            if (this.weekdays_enabled[day_of_week]) {
                new_settings[day_of_week] = {
                    day_of_week: day_of_week,
                    blocks: this.settings[day_of_week].blocks,
                };
            }
        }
        if (!this._data?.local) {
            const user = await lastValueFrom(showUser('current'));
            await lastValueFrom(
                updateUser(user.id, {
                    ...user,
                    groups: user.groups.filter(
                        (_) => !_.startsWith('placeos_'),
                    ),
                    work_preferences: new_settings,
                } as any),
            ).catch((e) => {
                this.loading = false;
                this._dialog_ref.disableClose = false;
                notifyError('Unable to save user work preferences.');
                throw e;
            });
        }
        this.loading = false;
        this._dialog_ref.disableClose = false;
        if (close) {
            if (!this._data?.local) reloadUserData();
            this._dialog_ref.close(new_settings);
        }
    }
}
