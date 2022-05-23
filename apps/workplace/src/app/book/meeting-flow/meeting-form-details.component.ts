import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SettingsService } from '@placeos/common';

@Component({
    selector: 'meeting-form-details',
    template: `
        <div *ngIf="form" [formGroup]="form">
            <div class="flex items-center flex-wrap sm:space-x-2">
                <div class="flex-1 min-w-[256px]">
                    <label for="title">Add Title<span>*</span></label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            name="title"
                            formControlName="title"
                            placeholder="e.g. Team Meeting"
                        />
                        <mat-error>Meeting title is required.</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex-1 min-w-[256px]">
                    <label for="date">Date<span>*</span></label>
                    <a-date-field name="date" formControlName="date">
                        Date and time must be in the future
                    </a-date-field>
                </div>
            </div>
            <div class="flex items-center space-x-2">
                <div class="flex-1 w-1/3">
                    <label for="start-time">Start Time<span>*</span></label>
                    <a-time-field
                        name="start-time"
                        [ngModel]="form.value.date"
                        (ngModelChange)="form.patchValue({ date: $event })"
                        [ngModelOptions]="{ standalone: true }"
                    ></a-time-field>
                </div>
                <div class="flex-1 w-1/3">
                    <label for="end-time">End Time<span>*</span></label>
                    <a-duration-field
                        name="end-time"
                        formControlName="duration"
                        [time]="form?.value?.date"
                        [max]="max_duration"
                    >
                    </a-duration-field>
                </div>
            </div>
        </div>
    `,
    styles: [],
})
export class MeetingFormDetailsComponent {
    @Input() public form: FormGroup;

    public get max_duration() {
        return this._settings.get('app.event.max_duration') || 480;
    }

    constructor(private _settings: SettingsService) {}
}
