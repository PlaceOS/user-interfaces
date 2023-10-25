import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { addDays } from 'date-fns';

import { RecurrenceDetails } from 'libs/events/src/lib/event.interfaces';

@Component({
    selector: 'recurrence-modal',
    template: `
        <header>
            <h2>Custom Recurrence</h2>
            <button btn icon mat-dialog-close matRipple>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main class="p-4">
            <div class="flex items-center space-x-2 mb-4">
                <div>Repeat every</div>
                <mat-form-field appearance="outline" class="w-16">
                    <input matInput type="number" [(ngModel)]="data.interval" />
                </mat-form-field>
                <mat-form-field appearance="outline">
                    <mat-select [(ngModel)]="data.pattern">
                        <mat-option value="daily">
                            day{{ data.interval === 1 ? '' : 's' }}
                        </mat-option>
                        <mat-option value="weekly">
                            week{{ data.interval === 1 ? '' : 's' }}
                        </mat-option>
                        <mat-option value="month_day">
                            month{{ data.interval === 1 ? '' : 's' }}
                        </mat-option>
                        <!-- <mat-option value="yearly">
                            year{{ data.interval === 1 ? '' : 's' }}
                        </mat-option> -->
                    </mat-select>
                </mat-form-field>
            </div>
            <h2 for="repeat-on" class="mb-2" *ngIf="data.pattern === 'weekly'">
                Repeat on
            </h2>
            <div
                class="flex items-center space-x-2 mb-4"
                name="repeat-on"
                *ngIf="data.pattern === 'weekly'"
            >
                <button
                    btn
                    matRipple
                    class="w-12"
                    [class.inverse]="!data.days_of_week?.includes(0)"
                    (click)="toggleDayOfWeek(0)"
                >
                    S
                </button>
                <button
                    btn
                    matRipple
                    class="w-12"
                    [class.inverse]="!data.days_of_week?.includes(1)"
                    (click)="toggleDayOfWeek(1)"
                >
                    M
                </button>
                <button
                    btn
                    matRipple
                    class="w-12"
                    [class.inverse]="!data.days_of_week?.includes(2)"
                    (click)="toggleDayOfWeek(2)"
                >
                    T
                </button>
                <button
                    btn
                    matRipple
                    class="w-12"
                    [class.inverse]="!data.days_of_week?.includes(3)"
                    (click)="toggleDayOfWeek(3)"
                >
                    W
                </button>
                <button
                    btn
                    matRipple
                    class="w-12"
                    [class.inverse]="!data.days_of_week?.includes(4)"
                    (click)="toggleDayOfWeek(4)"
                >
                    T
                </button>
                <button
                    btn
                    matRipple
                    class="w-12"
                    [class.inverse]="!data.days_of_week?.includes(5)"
                    (click)="toggleDayOfWeek(5)"
                >
                    F
                </button>
                <button
                    btn
                    matRipple
                    class="w-12"
                    [class.inverse]="!data.days_of_week?.includes(6)"
                    (click)="toggleDayOfWeek(6)"
                >
                    S
                </button>
            </div>
            <h2 for="ends-at">Ends</h2>
            <mat-radio-group name="ends-at" [(ngModel)]="ends_key">
                <div class="flex items-center">
                    <mat-radio-button
                        value="never"
                        (click)="data.occurrences = 0"
                    >
                        Never
                    </mat-radio-button>
                </div>
                <div class="flex items-center space-x-2">
                    <mat-radio-button value="on">On</mat-radio-button>
                    <a-date-field
                        [(ngModel)]="data.end"
                        [disabled]="ends_key !== 'on'"
                    ></a-date-field>
                </div>
                <div class="flex items-center space-x-2">
                    <mat-radio-button value="after">After</mat-radio-button>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            type="number"
                            [(ngModel)]="data.occurrences"
                            [disabled]="ends_key !== 'after'"
                        />
                        <span matSuffix>occurences</span>
                    </mat-form-field>
                </div>
            </mat-radio-group>
        </main>
        <footer
            class="px-4 py-2 flex items-center justify-end border-t border-base-200"
        >
            <button
                btn
                class="w-32"
                matRipple
                (click)="
                    data.occurrences =
                        ends_key === 'never' ? 0 : data.occurrences
                "
                [mat-dialog-close]="data"
            >
                Save
            </button>
        </footer>
    `,
    styles: [
        `
            mat-form-field,
            a-date-field {
                height: 3.25rem;
            }

            mat-radio-button {
                width: 8rem;
            }
        `,
    ],
})
export class RecurrenceModalComponent {
    public data: RecurrenceDetails = {
        ...this._data.value,
        end: this._data.value.end || addDays(new Date(), 7).valueOf(),
        interval: this._data.value.interval || 1,
        pattern: this._data.value.pattern ? this._data.value.pattern : 'weekly',
        occurrences: this._data.value.occurrences || 1,
    };
    public ends_key = 'never';

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: { value: RecurrenceDetails }
    ) {}

    public toggleDayOfWeek(day: number) {
        if (!this.data.days_of_week) this.data.days_of_week = [];
        if (this.data.days_of_week.includes(day)) {
            this.data.days_of_week = this.data.days_of_week.filter(
                (d) => d !== day
            );
        } else this.data.days_of_week.push(day);
    }
}
