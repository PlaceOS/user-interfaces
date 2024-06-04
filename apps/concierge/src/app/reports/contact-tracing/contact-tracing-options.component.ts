import { Component, EventEmitter, Output } from '@angular/core';
import { ContactTracingStateService } from './contact-tracing-state.service';

@Component({
    selector: 'contact-tracing-options',
    template: `
        <div class="flex items-center space-x-2 w-full p-4 bg-base-100 shadow">
            <date-range-field>
                <input
                    #startDate
                    [ngModel]="(options | async)?.start"
                    (ngModelChange)="
                        $event ? setOptions({ start: $event, user: null }) : ''
                    "
                />
                <input
                    #endDate
                    [ngModel]="(options | async)?.end"
                    (ngModelChange)="
                        $event ? setOptions({ end: $event, user: null }) : ''
                    "
                />
            </date-range-field>
            <a-user-search-field
                class="w-64"
                placeholder="Search for user to trace..."
                [ngModel]="(options | async)?.user"
                (ngModelChange)="setOptions({ user: $event })"
            ></a-user-search-field>
            <div class="flex-1"></div>
            <button
                icon
                matRipple
                matTooltip="Download Report"
                matTooltipPosition="left"
                class="h-10 w-10 rounded bg-secondary text-secondary-content"
                *ngIf="(options | async)?.user"
                (click)="download.emit()"
            >
                <app-icon>download</app-icon>
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
    @Output() public download = new EventEmitter<void>();

    public readonly options = this._state.options;
    public readonly setOptions = (_) => this._state.setOptions(_);
    public readonly generate = () => this._state.generateReport();

    constructor(private _state: ContactTracingStateService) {}
}
