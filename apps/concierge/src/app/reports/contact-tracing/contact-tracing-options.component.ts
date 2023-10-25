import { Component } from '@angular/core';
import { ContactTracingStateService } from './contact-tracing-state.service';

@Component({
    selector: 'contact-tracing-options',
    template: `
        <div class="flex items-center space-x-2 w-full p-2 bg-base-100 shadow">
            <mat-form-field appearance="outline" class="w-[18rem]">
                <mat-date-range-input [rangePicker]="picker">
                    <input
                        matStartDate
                        [ngModel]="(options | async)?.start"
                        (ngModelChange)="
                            $event
                                ? setOptions({ start: $event, user: null })
                                : ''
                        "
                        placeholder="Start date"
                    />
                    <input
                        matEndDate
                        [ngModel]="(options | async)?.end"
                        (ngModelChange)="
                            $event
                                ? setOptions({ end: $event, user: null })
                                : ''
                        "
                        placeholder="End date"
                    />
                </mat-date-range-input>
                <mat-datepicker-toggle
                    matSuffix
                    [for]="picker"
                ></mat-datepicker-toggle>
                <mat-date-range-picker #picker></mat-date-range-picker>
            </mat-form-field>
            <a-user-search-field
                class="w-64 h-12 mb-2 mt-1"
                placeholder="Search for user to trace..."
                [ngModel]="(options | async)?.user"
                (ngModelChange)="setOptions({ user: $event })"
            ></a-user-search-field>
            <button
                matRipple
                [disabled]="!(options | async)?.user"
                (click)="generate()"
            >
                Generate Report
            </button>
        </div>
    `,
    styles: [
        `
            mat-form-field {
                height: 3.25rem;
            }
        `,
    ],
})
export class ContactTracingOptionsComponent {
    public readonly options = this._state.options;
    public readonly setOptions = (_) => this._state.setOptions(_);
    public readonly generate = () => this._state.generateReport();

    constructor(private _state: ContactTracingStateService) {}
}
