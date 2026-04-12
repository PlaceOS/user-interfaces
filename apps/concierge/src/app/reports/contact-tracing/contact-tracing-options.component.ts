import { Component, computed, inject, output } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SettingsService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import {
    DateRangeFieldComponent,
    UserSearchFieldComponent,
} from '@placeos/form-fields';
import { ContactTracingStateService } from './contact-tracing-state.service';

@Component({
    selector: 'contact-tracing-options',
    template: `
        <div
            class="bg-base-100 flex w-full items-center space-x-2 p-4 shadow-sm"
        >
            <date-range-field [week_start]="week_start">
                <input
                    #startDate
                    [ngModel]="options()?.start"
                    (ngModelChange)="
                        $event ? setOptions({ start: $event, user: null }) : ''
                    "
                />
                <input
                    #endDate
                    [ngModel]="options()?.end"
                    (ngModelChange)="
                        $event ? setOptions({ end: $event, user: null }) : ''
                    "
                />
            </date-range-field>
            <a-user-search-field
                class="w-64"
                placeholder="Search for user to trace..."
                [ngModel]="options()?.user"
                (ngModelChange)="setOptions({ user: $event })"
            ></a-user-search-field>
            <div class="flex-1"></div>
            <button
                icon
                matRipple
                matTooltip="Download Report"
                class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                [disabled]="!can_download()"
                (click)="download.emit()"
            >
                <icon>download</icon>
            </button>
            <button
                icon
                matRipple
                class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                [disabled]="!can_download()"
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
                background-color: var(--neutral) !important;
            }
        `,
    ],
    imports: [
        DateRangeFieldComponent,
        MatRippleModule,
        MatTooltipModule,
        IconComponent,
        UserSearchFieldComponent,
        FormsModule,
    ],
})
export class ContactTracingOptionsComponent {
    private _state = inject(ContactTracingStateService);
    private _settings = inject(SettingsService);

    public readonly printing = output<boolean>();
    public readonly download = output<void>();

    public readonly options = toSignal(this._state.options, {
        initialValue: {} as any,
    });
    public readonly can_download = computed(() => !!this.options()?.user);
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
