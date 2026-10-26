import { DatePipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OrganisationService, SettingsService } from '@placeos/common';
import {
    AuthenticatedImageDirective,
    DurationPipe,
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import {
    DateRangeFieldComponent,
    UserSearchFieldComponent,
} from '@placeos/form-fields';
import { endOfDay, startOfDay } from 'date-fns';
import { UserReportOptions, UserReportService } from './user-report.service';

/**
 * Report of the desk, parking, locker and room bookings of a single user in
 * the active building or region.
 */
@Component({
    selector: '[user-report]',
    template: `
        <div
            class="border-base-200 bg-base-100 z-20 flex h-20 w-full items-center space-x-2 border-b p-4 print:hidden"
        >
            <a-user-search-field
                class="w-64"
                [ngModel]="options().user"
                (ngModelChange)="setOptions({ user: $event || null })"
            ></a-user-search-field>
            <date-range-field [week_start]="week_start" [from]="0">
                <input
                    #startDate
                    [ngModel]="options().start"
                    (ngModelChange)="$event ? setStartDate($event) : ''"
                />
                <input
                    #endDate
                    [ngModel]="options().end"
                    (ngModelChange)="$event ? setEndDate($event) : ''"
                />
            </date-range-field>
            <div class="flex-1"></div>
            <button
                icon
                matRipple
                class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                [disabled]="!rows().length"
                [matTooltip]="'APP.CONCIERGE.REPORTS_DOWNLOAD' | translate"
                (click)="downloadReport()"
                [attr.aria-label]="'APP.CONCIERGE.REPORTS_DOWNLOAD' | translate"
            >
                <icon>download</icon>
            </button>
            <button
                icon
                matRipple
                class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                [disabled]="!rows().length"
                [matTooltip]="'APP.CONCIERGE.REPORTS_PRINT' | translate"
                (click)="print()"
                [attr.aria-label]="'APP.CONCIERGE.REPORTS_PRINT' | translate"
            >
                <icon>print</icon>
            </button>
        </div>
        <div
            class="relative h-1/2 w-full flex-1 overflow-auto print:h-auto print:overflow-visible"
        >
            <div class="bg-base-200 m-4 flex items-center rounded-sm p-4">
                <img auth class="h-12" [source]="logo()?.src || logo()" />
                <div class="flex-1"></div>
                <div class="px-2 text-right">
                    <h2 class="text-2xl font-medium">
                        {{ 'APP.CONCIERGE.REPORTS_USER_HEADER' | translate }}
                    </h2>
                    @if (options().user; as user) {
                        <p class="text-sm opacity-60">
                            {{ user.name }} ({{ user.email }})
                        </p>
                        <p class="text-sm opacity-60">
                            {{ options().start | date: 'mediumDate' }} &ndash;
                            {{ options().end | date: 'mediumDate' }}
                        </p>
                    }
                </div>
            </div>
            @if (loading()) {
                <div class="flex h-full w-full flex-col items-center p-8">
                    <mat-spinner [diameter]="32" class="mb-4"></mat-spinner>
                    <p class="opacity-30">
                        {{ 'APP.CONCIERGE.REPORTS_LOADING' | translate }}
                    </p>
                </div>
            } @else if (!options().user) {
                <div
                    class="screen-only flex h-full w-full flex-col items-center p-8"
                >
                    <p class="opacity-30">
                        {{ 'APP.CONCIERGE.REPORTS_USER_EMPTY' | translate }}
                    </p>
                </div>
            } @else {
                <div
                    class="border-base-200 bg-base-100 m-4 flex items-center justify-center space-x-2 rounded-sm border p-4"
                >
                    @for (total of totals(); track total.name) {
                        <div class="flex flex-1 flex-col items-center">
                            <h3 class="text-sm">
                                {{ total.name | translate }}
                            </h3>
                            <p class="text-2xl">{{ total.count }}</p>
                        </div>
                    }
                </div>
                <div
                    class="border-base-200 bg-base-100 m-4 overflow-hidden rounded-sm border"
                >
                    <simple-table
                        class="block w-full text-sm"
                        [data]="rows()"
                        [columns]="[
                            {
                                key: 'type_name',
                                name: 'COMMON.TYPE' | translate,
                            },
                            { key: 'name', name: 'FORM.NAME' | translate },
                            {
                                key: 'location',
                                name: 'COMMON.LOCATION' | translate,
                            },
                            {
                                key: 'date',
                                name: 'FORM.DATE' | translate,
                                content: date_template,
                            },
                            {
                                key: 'duration',
                                name: 'FORM.DURATION' | translate,
                                content: duration_template,
                            },
                            {
                                key: 'checked_in',
                                name: 'COMMON.CHECKED_IN' | translate,
                            },
                            {
                                key: 'status',
                                name: 'COMMON.STATUS' | translate,
                            },
                        ]"
                        [sortable]="true"
                        [page_size]="printing() ? 0 : 20"
                        [empty_message]="
                            'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                        "
                    ></simple-table>
                    <ng-template #date_template let-row="row">
                        <div class="p-4">
                            {{
                                row.date
                                    | date
                                        : (row.all_day
                                              ? 'mediumDate'
                                              : 'MMM d, y, ' + time_format)
                            }}
                        </div>
                    </ng-template>
                    <ng-template #duration_template let-row="row">
                        <div class="p-4">
                            {{
                                row.all_day
                                    ? ('COMMON.ALL_DAY' | translate)
                                    : (row.duration | duration: true)
                            }}
                        </div>
                    </ng-template>
                </div>
            }
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
            }

            button[icon][disabled] {
                background-color: var(--neutral) !important;
            }
        `,
    ],
    providers: [UserReportService],
    imports: [
        DatePipe,
        FormsModule,
        MatRippleModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        AuthenticatedImageDirective,
        DurationPipe,
        IconComponent,
        SimpleTableComponent,
        TranslatePipe,
        DateRangeFieldComponent,
        UserSearchFieldComponent,
    ],
})
export class UserReportComponent {
    private _state = inject(UserReportService);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    public readonly printing = signal(false);
    public readonly options = this._state.options;
    public readonly loading = this._state.loading;
    public readonly rows = this._state.rows;

    public readonly totals = computed(() => {
        const counts = this._state.counts();
        return [
            {
                name: 'APP.CONCIERGE.REPORTS_TOTAL_BOOKINGS',
                count: this.rows().length,
            },
            { name: 'RESOURCE.DESKS', count: counts.desk },
            { name: 'RESOURCE.PARKING', count: counts.parking },
            { name: 'RESOURCE.LOCKERS', count: counts.locker },
            { name: 'RESOURCE.ROOMS', count: counts.room },
        ];
    });

    public readonly logo = computed(() => {
        this._org.active_building();
        return (
            (this._settings.theme === 'dark'
                ? this._settings.get('app.logo_dark')
                : this._settings.get('app.logo_light')) || {}
        );
    });

    public readonly setOptions = (options: Partial<UserReportOptions>) =>
        this._state.setOptions(options);
    public readonly downloadReport = () => this._state.downloadReport();

    public readonly setStartDate = (date: number | Date) =>
        this._state.setOptions({ start: startOfDay(date).valueOf() });

    public readonly setEndDate = (date: number | Date) =>
        this._state.setOptions({ end: endOfDay(date).valueOf() });

    public get week_start() {
        return this._settings.get('app.week_start');
    }

    public get time_format() {
        return this._settings.time_format;
    }

    public print() {
        this.printing.set(true);
        setTimeout(() => {
            window.print();
            this.printing.set(false);
        }, 300);
    }
}
