import { Component, EventEmitter, Output, inject } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { ContactTracingStateService } from './contact-tracing-state.service';

@Component({
    selector: 'contact-tracing-options',
    template: `
        <div class="flex w-full items-center space-x-2 bg-base-100 p-4 shadow">
            <date-range-field [week_start]="week_start">
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
                class="h-12 w-12 rounded bg-secondary text-secondary-content"
                [disabled]="!(options | async)?.user"
                (click)="download.emit()"
            >
                <icon>download</icon>
            </button>
            <button
                icon
                matRipple
                class="h-12 w-12 rounded bg-secondary text-secondary-content"
                [disabled]="!(options | async)?.user"
                matTooltip="Print Report"
                (click)="print()"
            >
                <icon>print</icon>
            </button>
        </div>
    `,
    styles: [
        `
            mat-form-field {
                height: 3.25rem;
            }

            button[icon][disabled] {
                background-color: var(--n) !important;
            }
        `,
    ],
    standalone: false,
})
export class ContactTracingOptionsComponent {
    private _state = inject(ContactTracingStateService);
    private _settings = inject(SettingsService);

    @Output() public printing = new EventEmitter<boolean>();
    @Output() public download = new EventEmitter<void>();

    public readonly options = this._state.options;
    public readonly setOptions = (_) => this._state.setOptions(_);
    public readonly generate = () => this._state.generateReport();

    public get week_start() {
        return this._settings.get('app.week_start');
    }

    public print() {
        this.printing.emit(true);
        setTimeout(() => {
            window.print();
            this.printing.emit(false);
        }, 300);
    }
}
