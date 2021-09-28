import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'set-datetime-modal',
    template: `
        <header classs="flex items-center justify-between">
            <h2>Set date and time</h2>
            <button mat-icon-button mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main *ngIf="form" [formGroup]="form" class="w-[24rem] pt-4">
            <div
                class="flex flex-col sm:flex-row space-x-0 sm:space-x-2 w-[640px] max-w-[calc(100%-2rem)] mx-auto"
            >
                <div class="flex flex-col flex-1 w-full sm:w-1/4">
                    <label>Date</label>
                    <a-date-field [to]="book_until" formControlName="date">
                        Date and time must be in the future
                    </a-date-field>
                </div>
            </div>
            <div
                class="flex flex-col sm:flex-row space-x-0 sm:space-x-2 w-[640px] max-w-[calc(100%-2rem)] mx-auto"
            >
                <div class="flex flex-col flex-1 w-full sm:w-1/3">
                    <label>Start Time</label>
                    <a-time-field
                        [ngModel]="form.value.date"
                        (ngModelChange)="form.patchValue({ date: $event })"
                        [ngModelOptions]="{ standalone: true }"
                    ></a-time-field>
                </div>
                <div class="flex flex-col flex-1 w-full sm:w-1/3">
                    <label>End Time</label>
                    <a-duration-field
                        formControlName="duration"
                        [time]="form.get('date')?.value"
                        [max]="12 * 60"
                        [min]="60"
                        [step]="60"
                    >
                    </a-duration-field>
                </div>
            </div>
        </main>
        <footer class="w-full p-2 border-t border-gray-200 flex items-center justify-center">
            <button mat-button [mat-dialog-close]="form.value" class="w-32">Continue</button>
        </footer>
    `,
    styles: [``],
})
export class SetDatetimeModalComponent {
    public form: FormGroup;

    constructor(
        @Inject(MAT_DIALOG_DATA)
        private _data: { date: number; duration: number }
    ) {
        this.form = new FormGroup({
            date: new FormControl(_data.date),
            duration: new FormControl(_data.duration),
        });
    }
}
