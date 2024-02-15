import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { currentUser } from '@placeos/common';
import { addDays, format, set, setDay, startOfWeek } from 'date-fns';
import { WorktimePreference } from './user.class';
import { showUser, updateUser } from '@placeos/ts-client';

@Component({
    selector: `wfh-settings-modal`,
    template: `
        <div
            class="relative flex flex-col rounded overflow-hidden w-[40rem] max-w-full"
            *ngIf="!loading; else load_state"
        >
            <div
                class="w-full px-4 py-8 flex flex-col items-center border-b border-base-200"
            >
                <a-user-avatar [user]="user"></a-user-avatar>
                <div>{{ user.name }}</div>
                <div class="text-xs opacity-30">{{ user.email }}</div>
                <div class="text-xs opacity-30">{{ user.phone }}</div>
            </div>
            <div class="w-full p-4 flex flex-col  border-b border-base-200">
                <h3 class="-mt-2 mb-2 text-sm font-medium">
                    Today's Working Location
                </h3>
                <button
                    btn
                    matRipple
                    today-location
                    class="inverse rounded-3xl w-[20rem] max-w-[calc(100%-2rem)] mx-auto"
                    [matMenuTriggerFor]="menu"
                >
                    <div class="flex items-center justify-between w-full">
                        <div class="flex-1 w-1/2">{{ option_name }}</div>
                        <app-icon class="text-2xl">arrow_drop_down</app-icon>
                    </div>
                </button>
                <div class="flex items-center pt-4 space-x-2 mx-auto">
                    <div
                        class="h-8 w-8 rounded-full bg-base-200 flex items-center justify-center"
                    >
                        <app-icon>{{
                            option === 'wfh' ? 'home' : 'domain'
                        }}</app-icon>
                    </div>
                    <div class="flex-1 w-1/2 text-sm">
                        Today is a {{ option === 'aol' ? 'leave' : 'working' }}
                        <span *ngIf="option !== 'aol'"
                            >from
                            {{ option === 'wfh' ? 'home' : 'office' }}</span
                        >
                        day<br />
                        {{ option === 'aol' ? 'Unavailable' : 'Available' }} for
                        {{ option === 'wfh' ? 'online' : '' }} meetings
                    </div>
                </div>
            </div>
            <div class="w-full p-4 flex flex-col">
                <h3 class="-mt-2 mb-2 text-sm font-medium">
                    Office Day Defaults
                </h3>
                <div
                    class="flex items-center space-x-2 w-full overflow-hidden even:bg-base-200 rounded p-2"
                    *ngFor="let idx of available_weekdays"
                >
                    <label class="w-24 min-w-0 m-0">{{
                        days[idx] | date: 'EEEE'
                    }}</label>
                    <a-time-field
                        class="h-12 w-36"
                        [(ngModel)]="start_times[idx]"
                        (ngModelChange)="changed = true"
                    ></a-time-field>
                    <a-time-field
                        class="h-12 w-36"
                        [(ngModel)]="end_times[idx]"
                        (ngModelChange)="changed = true"
                        [from]="start_times[idx]"
                    ></a-time-field>
                    <mat-form-field
                        class="flex-2 no-subscript"
                        appearance="outline"
                    >
                        <mat-select
                            [(ngModel)]="settings[idx].location"
                            (ngModelChange)="changed = true"
                        >
                            <mat-option
                                *ngFor="let type of options"
                                [value]="type.id"
                            >
                                {{ type.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
            </div>
            <div class="flex items-center justify-end px-4 pb-4">
                <button
                    btn
                    matRipple
                    save
                    [disabled]="!changed"
                    (click)="saveChanges()"
                >
                    Update
                </button>
            </div>
            <button
                icon
                matRipple
                mat-dialog-close
                class="absolute top-0 left-0"
            >
                <app-icon>close</app-icon>
            </button>
        </div>
        <mat-menu #menu="matMenu">
            <button
                mat-menu-item
                *ngFor="let type of options"
                [attr.id]="type.id"
                (click)="option = type.id; changed = true"
            >
                {{ type.name }}
            </button>
        </mat-menu>
        <ng-template #load_state>
            <div
                loading
                class="relative bg-base-100 flex flex-col justify-center items-center rounded overflow-hidden w-[24rem] h-[18rem] text-center space-y-2"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>Saving changes to work location settings...</p>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class WFHSettingsModalComponent implements OnInit {
    public readonly options = [
        { id: 'wfo', name: 'Working from office' },
        { id: 'wfh', name: 'Working from home' },
        { id: 'aol', name: 'Away on Leave' },
    ];
    public option = this.options[0].id;
    public settings: WorktimePreference[] = [];
    public weekdays = [];
    public changed = false;
    public loading = false;
    public readonly available_weekdays = [1, 2, 3, 4, 5];
    public readonly days = new Array(7)
        .fill(0)
        .map((_, idx) => addDays(startOfWeek(addDays(Date.now(), 30)), idx));
    public start_times: number[] = [];
    public end_times: number[] = [];

    public get option_name() {
        return this.options.find((_) => _.id === this.option)?.name || '';
    }

    constructor(private _dialog_ref: MatDialogRef<WFHSettingsModalComponent>) {}

    public ngOnInit() {
        const user = currentUser();
        this.settings = user.work_preferences;
        this.option = user.location || 'wfo';
        if (this.settings?.length < 7) {
            this.settings = new Array(7).fill({}).map((_, idx) => ({
                day_of_week: idx as any,
                start_time: 9,
                end_time: 17,
                location: 'wfo',
            }));
        }
        this.start_times = this.settings.map((_, idx) => {
            const hours = Math.floor(_.start_time);
            const minutes = Math.round((_.start_time - hours) * 60);
            return set(this.days[idx], { hours, minutes }).valueOf();
        });
        this.end_times = this.settings.map((_, idx) => {
            const hours = Math.floor(_.end_time);
            const minutes = Math.round((_.end_time - hours) * 60);
            return set(this.days[idx], { hours, minutes }).valueOf();
        });
        this._initWeekdays();
    }

    public get user() {
        return currentUser();
    }

    public async saveChanges(close = true) {
        this.loading = true;
        this._dialog_ref.disableClose = true;
        const dow = new Date().getDay();
        const today = format(Date.now(), 'yyyy-MM-dd');
        var overrides = {};
        overrides[today] = {
            day_of_week: dow,
            start_time: 9,
            end_time: 17,
            location: this.option,
        };
        for (const day of this.settings) {
            const start = new Date(this.start_times[day.day_of_week]);
            const end = new Date(this.end_times[day.day_of_week]);
            day.start_time = start.getHours() + start.getMinutes() / 60;
            day.end_time = end.getHours() + end.getMinutes() / 60;
            if (day.day_of_week === dow) {
                overrides[today].start_time = day.start_time;
                overrides[today].end_time = day.end_time;
            }
        }
        const user = await showUser('current').toPromise();
        await updateUser(user.id, {
            ...user,
            work_preferences: this.settings,
            work_overrides: overrides,
        }).toPromise();
        this.loading = false;
        this._dialog_ref.disableClose = false;
        if (close) {
            location.reload();
            this._dialog_ref.close();
        }
    }

    private _initWeekdays() {
        let day = new Date();
        this.weekdays = this.available_weekdays.map((_) =>
            setDay(day, _).valueOf()
        );
    }
}
