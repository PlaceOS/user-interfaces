import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SettingsService } from '@placeos/common';
import { addDays, endOfDay } from 'date-fns';

@Component({
    selector: 'meeting-form-details',
    template: `
        <div *ngIf="form" [formGroup]="form">
            <div class="flex items-center flex-wrap sm:space-x-2">
                <div class="flex-1 min-w-[256px]">
                    <label for="title">{{ 'FORM.TITLE' | translate }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            name="title"
                            formControlName="title"
                            placeholder="e.g. Team Meeting"
                        />
                        <mat-error>{{
                            'FORM.TITLE_ERROR' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex-1 min-w-[256px]">
                    <label for="date">
                        {{ 'FORM.DATE' | translate }}<span>*</span>
                    </label>
                    <a-date-field
                        name="date"
                        [ngModel]="form.value.date"
                        (ngModelChange)="form.patchValue({ date: $event })"
                        [ngModelOptions]="{ standalone: true }"
                        [to]="end_date"
                    >
                        {{ 'FORM.DATE_ERROR' | translate }}
                    </a-date-field>
                </div>
            </div>
            <div class="flex items-center space-x-2">
                <div class="flex-1 w-1/3">
                    <label for="start-time">
                        {{ 'FORM.START_TIME' | translate }}
                        <span>*</span>
                    </label>
                    <a-time-field
                        name="start-time"
                        [ngModel]="form.value.date"
                        (ngModelChange)="form.patchValue({ date: $event })"
                        [ngModelOptions]="{ standalone: true }"
                        [disabled]="form.value.all_day"
                        [force]="form.value.all_day ? 'All Day' : ''"
                    ></a-time-field>
                </div>
                <div class="flex-1 w-1/3 relative">
                    <label for="end-time">
                        {{ 'FORM.END_TIME' | translate }}<span>*</span>
                    </label>
                    <a-duration-field
                        name="end-time"
                        [ngModel]="form.value.duration"
                        (ngModelChange)="form.patchValue({ duration: $event })"
                        [disabled]="form.value.all_day"
                        [time]="form?.value?.date"
                        [max]="max_duration"
                        [ngModelOptions]="{ standalone: true }"
                    >
                        Meeting must end at a future time.
                    </a-duration-field>
                    <mat-checkbox
                        formControlName="all_day"
                        *ngIf="allow_all_day"
                        class="absolute -top-2 right-0"
                    >
                        {{ 'FORM.ALL_DAY' | translate }}
                    </mat-checkbox>
                </div>
            </div>
            <div *ngIf="can_book_for_others" class="w-full flex flex-col">
                <label for="host">
                    {{ 'FORM.HOST' | translate }}<span>*</span>
                </label>
                <host-select-field
                    name="host"
                    formControlName="organiser"
                ></host-select-field>
            </div>
            <div *ngIf="allow_recurrence" class="w-full flex flex-col">
                <label for="recurrence">
                    {{ 'FORM.RECURRENCE' | translate }}<span>*</span>
                </label>
                <recurrence-field
                    name="recurrence"
                    [date]="form.value.date"
                    formControlName="recurrence"
                ></recurrence-field>
                <mat-checkbox
                    *ngIf="form.value.id"
                    formControlName="update_master"
                >
                    Update all future events
                </mat-checkbox>
            </div>
        </div>
    `,
    styles: [],
})
export class MeetingFormDetailsComponent {
    @Input() public form: FormGroup;

    public get max_duration() {
        return this._settings.get('app.events.max_duration') || 480;
    }

    public get can_book_for_others() {
        return this._settings.get('app.events.can_book_for_others');
    }

    public get allow_all_day() {
        return this._settings.get('app.events.allow_all_day');
    }

    public get allow_recurrence() {
        return this._settings.get('app.events.allow_recurrence');
    }

    public get end_date() {
        return endOfDay(
            addDays(
                Date.now(),
                this._settings.get('app.events.allowed_future_days') || 180
            )
        );
    }

    constructor(private _settings: SettingsService) {}
}
