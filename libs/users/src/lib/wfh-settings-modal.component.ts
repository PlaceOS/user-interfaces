import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {
    currentUser,
    i18n,
    notifyError,
    reloadUserData,
} from '@placeos/common';
import { showUser, updateUser } from '@placeos/ts-client';
import { addDays, set, startOfMinute, startOfWeek } from 'date-fns';
import { WorktimeBlock, WorktimePreference } from './user.class';

@Component({
    selector: `wfh-settings-modal`,
    template: `
        <header
            class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded border-none bg-base-200 p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'COMMON.WORK_LOCATION_SETTINGS' | translate }}
            </h2>
            <button
                icon
                matRipple
                mat-dialog-close
                class="bg-base-200"
                *ngIf="!loading"
            >
                <app-icon>close</app-icon>
            </button>
        </header>
        <main
            class="relative flex max-h-[calc(100vh-9rem)] w-[40rem] max-w-full flex-col space-y-2 overflow-y-auto overflow-x-hidden rounded px-2 py-4 sm:max-h-[65vh] sm:p-4"
            *ngIf="!loading; else load_state"
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
            <div
                *ngIf="has_working_days; else empty_state"
                class="relative flex w-full flex-col items-center justify-between space-y-4 rounded border border-base-300 px-2 pb-4 pt-6 sm:px-4"
            >
                @for (day of days; track day) {
                    <div
                        *ngIf="weekdays_enabled[day.getDay()]"
                        class="relative flex w-full items-center justify-between space-x-2 rounded bg-base-200 p-2"
                    >
                        <div class="w-1/2 flex-1 space-y-2 pt-2">
                            <div
                                class="flex items-center space-x-2"
                                *ngFor="
                                    let block of settings[day.getDay()].blocks;
                                    let i = index
                                "
                            >
                                <a-time-field
                                    [ngModel]="timeFrom(block.start_time)"
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
                                                ? settings[day.getDay()].blocks[
                                                      i - 1
                                                  ]?.end_time
                                                : 0) || 0
                                        )
                                    "
                                    [no_error]="true"
                                    class="w-1/4 flex-1"
                                ></a-time-field>
                                <a-time-field
                                    [ngModel]="timeFrom(block.end_time)"
                                    (ngModelChange)="
                                        setEndTime(block, day.getDay(), $event)
                                    "
                                    [from]="timeFrom(block.start_time + 0.25)"
                                    [no_error]="true"
                                    class="w-1/4 flex-1"
                                ></a-time-field>
                                <mat-form-field
                                    appearance="outline"
                                    class="no-subscript w-1/4 flex-1"
                                >
                                    <mat-select [(ngModel)]="block.location">
                                        <mat-option
                                            *ngFor="let type of options"
                                            [value]="type.id"
                                        >
                                            {{ type.name }}
                                        </mat-option>
                                    </mat-select>
                                </mat-form-field>
                                <button
                                    icon
                                    matRipple
                                    *ngIf="i === 0"
                                    (click)="
                                        addBlock(settings[day.getDay()], i)
                                    "
                                >
                                    <app-icon>add</app-icon>
                                </button>
                                <button
                                    icon
                                    matRipple
                                    class="text-error"
                                    *ngIf="i !== 0"
                                    (click)="
                                        removeBlock(settings[day.getDay()], i)
                                    "
                                >
                                    <app-icon>delete</app-icon>
                                </button>
                            </div>
                        </div>
                        <h3
                            class="absolute left-2 top-0 -translate-y-1/2 rounded border border-base-200 bg-base-100 bg-opacity-50 px-2 text-sm font-medium"
                        >
                            {{ day | date: 'EEEE' }}
                        </h3>
                    </div>
                }
                <h3
                    class="absolute left-2 top-0 !m-0 -translate-y-1/2 bg-base-100 px-2"
                >
                    {{ 'COMMON.WORK_HOURS' | translate }}
                </h3>
            </div>
            <ng-template #empty_state>
                <div
                    class="flex flex-col items-center justify-center space-y-4 px-8 py-16"
                >
                    <img src="assets/icons/no-results.svg" class="m-auto" />
                    <p class="opacity-30">
                        {{ 'COMMON.WORK_SETTINGS_EMPTY' | translate }}
                    </p>
                </div>
            </ng-template>
        </main>
        <footer
            class="flex justify-end border-t border-base-200 px-4 py-2"
            *ngIf="!loading"
        >
            <button btn matRipple class="w-48" (click)="saveChanges()">
                {{ 'COMMON.SAVE' | translate }}
            </button>
        </footer>
        <ng-template #load_state>
            <div
                loading
                class="relative flex h-[18rem] w-[24rem] flex-col items-center justify-center space-y-2 overflow-hidden rounded bg-base-100 text-center"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="opacity-30">
                    {{ 'COMMON.WORK_SETTINGS_SAVE' | translate }}
                </p>
            </div>
        </ng-template>
    `,
    styles: [``],
    standalone: false,
})
export class WFHSettingsModalComponent implements OnInit {
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

    constructor(private _dialog_ref: MatDialogRef<WFHSettingsModalComponent>) {}

    public ngOnInit() {
        const user = currentUser();
        this.settings = [
            ...(user.work_preferences || []).map((_) => ({
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
        const user = await showUser('current').toPromise();
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
        console.log('Update user...');
        await updateUser(user.id, {
            ...user,
            groups: user.groups.filter((_) => !_.startsWith('placeos_')),
            work_preferences: new_settings,
        } as any)
            .toPromise()
            .catch((e) => {
                this.loading = false;
                this._dialog_ref.disableClose = false;
                notifyError('Unable to save user work preferences.');
                throw e;
            });
        console.log('Updated user');
        this.loading = false;
        this._dialog_ref.disableClose = false;
        if (close) {
            reloadUserData();
            console.log('Close WFH Modal');
            this._dialog_ref.close();
        }
    }
}
