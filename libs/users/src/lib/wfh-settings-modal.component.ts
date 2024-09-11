import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { currentUser, notifyError, reloadUserData } from '@placeos/common';
import { addDays, set, startOfMinute, startOfWeek } from 'date-fns';
import { WorktimeBlock, WorktimePreference } from './user.class';
import { showUser, updateUser } from '@placeos/ts-client';

@Component({
    selector: `wfh-settings-modal`,
    template: `
        <header class="relative flex items-center justify-between">
            <h2 class="font-medium text-xl">Working Location Settings</h2>
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
            class="relative flex flex-col rounded w-[40rem] max-w-full p-4 space-y-2 max-h-[65vh] overflow-auto"
            *ngIf="!loading; else load_state"
        >
            <h3>Working Days</h3>
            <div
                class="flex items-center justify-between w-full pb-4 space-x-2"
            >
                <mat-checkbox
                    *ngFor="let day of days"
                    [(ngModel)]="weekdays_enabled[day.getDay()]"
                    (ngModelChange)="$event && initialiseDay(day.getDay())"
                >
                    {{ day | date: 'EEE' }}
                </mat-checkbox>
            </div>
            <h3>Work Hours</h3>
            <ng-container *ngIf="has_working_days; else empty_state">
                <ng-container *ngFor="let day of days">
                    <ng-container *ngIf="weekdays_enabled[day.getDay()]">
                        <div
                            class="flex w-full space-x-2 hover:bg-base-200 rounded px-2 pt-1"
                        >
                            <label class="w-12 min-w-0 px-2 pt-3">
                                {{ day | date: 'EEE' }}
                            </label>
                            <div class="flex-1 w-1/2">
                                <div
                                    class="flex items-center space-x-2"
                                    *ngFor="
                                        let block of settings[day.getDay()]
                                            .blocks;
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
                                                    ? settings[day.getDay()]
                                                          .blocks[i - 1]
                                                          ?.end_time
                                                    : 0) || 0
                                            )
                                        "
                                        class="flex-1 w-1/4 h-[3.25rem]"
                                    ></a-time-field>
                                    <a-time-field
                                        [ngModel]="timeFrom(block.end_time)"
                                        (ngModelChange)="
                                            setEndTime(
                                                block,
                                                day.getDay(),
                                                $event
                                            )
                                        "
                                        [from]="
                                            timeFrom(block.start_time + 0.25)
                                        "
                                        class="flex-1 w-1/4 h-[3.25rem]"
                                    ></a-time-field>
                                    <mat-form-field
                                        appearance="outline"
                                        class="flex-1 w-1/4 h-[3.25rem]"
                                    >
                                        <mat-select
                                            [(ngModel)]="block.location"
                                        >
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
                                        [disabled]="
                                            settings[day.getDay()].blocks
                                                .length > 2
                                        "
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
                                        [class.opacity-0]="i === 0"
                                        [class.pointer-events-none]="i === 0"
                                        (click)="
                                            removeBlock(
                                                settings[day.getDay()],
                                                i
                                            )
                                        "
                                    >
                                        <app-icon>delete</app-icon>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </ng-container>
                </ng-container>
            </ng-container>
            <ng-template #empty_state>
                <div
                    class="flex flex-col items-center justify-center px-8 py-16 space-y-4"
                >
                    <img src="assets/icons/no-results.svg" class="m-auto" />
                    <p class="opacity-30">
                        No work days are currently set for this user
                    </p>
                </div>
            </ng-template>
        </main>
        <footer
            class="flex justify-end px-4 py-2 border-t border-base-200"
            *ngIf="!loading"
        >
            <button btn matRipple class="w-48" (click)="saveChanges()">
                Save
            </button>
        </footer>
        <ng-template #load_state>
            <div
                loading
                class="relative bg-base-100 flex flex-col justify-center items-center rounded overflow-hidden w-[24rem] h-[18rem] text-center space-y-2"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="opacity-30">
                    Saving changes to work location settings...
                </p>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class WFHSettingsModalComponent implements OnInit {
    public readonly options = [
        { id: 'wfo', name: 'Office' },
        { id: 'wfh', name: 'Home' },
        { id: 'aol', name: 'Leave' },
    ];
    public option = this.options[0].id;
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
