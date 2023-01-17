import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SettingsService } from '@placeos/common';

@Component({
    selector: 'meeting-form-details',
    template: `
        <div *ngIf="form" [formGroup]="form">
            <div class="flex items-center flex-wrap sm:space-x-2">
                <div class="flex-1 min-w-[256px]">
                    <label for="title"
                        >{{ 'FORM.TITLE' | translate }}<span>*</span></label
                    >
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
                    <label for="date"
                        >{{ 'FORM.DATE' | translate }}<span>*</span></label
                    >
                    <a-date-field name="date" formControlName="date">
                        {{ 'FORM.DATE_ERROR' | translate }}
                    </a-date-field>
                </div>
            </div>
            <div class="flex items-center space-x-2">
                <div class="flex-1 w-1/3">
                    <label for="start-time"
                        >{{ 'FORM.START_TIME' | translate
                        }}<span>*</span></label
                    >
                    <a-time-field
                        name="start-time"
                        [ngModel]="form.value.date"
                        (ngModelChange)="form.patchValue({ date: $event })"
                        [ngModelOptions]="{ standalone: true }"
                    ></a-time-field>
                </div>
                <div class="flex-1 w-1/3 relative">
                    <label for="end-time"
                        >{{ 'FORM.END_TIME' | translate }}<span>*</span></label
                    >
                    <a-duration-field
                        name="end-time"
                        formControlName="duration"
                        [time]="form?.value?.date"
                        [max]="max_duration"
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
            <div *ngIf="can_book_for_others" class="w-full">
                <label for="host"
                    >{{ 'FORM.HOST' | translate }}<span>*</span></label
                >
                <host-select-field
                    name="host"
                    formControlName="organiser"
                ></host-select-field>
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

    constructor(private _settings: SettingsService) {}
}
