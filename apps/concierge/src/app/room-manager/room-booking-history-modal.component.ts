import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { SettingsService } from '@placeos/common';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { queryEvents } from '@placeos/events';
import { PlaceSystem } from '@placeos/ts-client';
import { UserPipe } from '@placeos/users';
import { getUnixTime, startOfDay, subDays, subMonths } from 'date-fns';

type HistoryPeriod = 'week' | 'month' | '3_months' | '12_months';

@Component({
    selector: 'room-booking-history-modal',
    template: `
        <header
            class="bg-base-200 flex h-14 w-full flex-none items-center justify-between border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium capitalize">
                {{
                    'APP.CONCIERGE.ROOMS_HISTORY_HEADER'
                        | translate: { name: room.display_name || room.name }
                }}
            </h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="flex min-h-0 w-full flex-1 flex-col overflow-hidden">
            <div class="flex items-center justify-between px-4 pt-2 pb-3">
                <div class="text-sm opacity-60">
                    {{
                        'APP.CONCIERGE.ROOMS_HISTORY_COUNT'
                            | translate: { count: bookings().length }
                    }}
                </div>
                <mat-form-field appearance="outline" class="no-subscript w-48">
                    <mat-select
                        [ngModel]="period()"
                        (ngModelChange)="setPeriod($event)"
                    >
                        <mat-option value="week">
                            {{
                                'APP.CONCIERGE.ROOMS_HISTORY_PERIOD_WEEK'
                                    | translate
                            }}
                        </mat-option>
                        <mat-option value="month">
                            {{
                                'APP.CONCIERGE.ROOMS_HISTORY_PERIOD_MONTH'
                                    | translate
                            }}
                        </mat-option>
                        <mat-option value="3_months">
                            {{
                                'APP.CONCIERGE.ROOMS_HISTORY_PERIOD_3_MONTHS'
                                    | translate
                            }}
                        </mat-option>
                        <mat-option value="12_months">
                            {{
                                'APP.CONCIERGE.ROOMS_HISTORY_PERIOD_12_MONTHS'
                                    | translate
                            }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            <div class="relative min-h-0 flex-1">
                @if (loading()) {
                    <div
                        class="bg-base-100/60 absolute inset-0 z-10 flex items-center justify-center"
                    >
                        <mat-spinner diameter="32"></mat-spinner>
                    </div>
                }
                <div class="relative z-0 h-full w-full overflow-auto px-4 pb-4">
                    <simple-table
                        class="block min-w-[48rem] text-sm"
                        [data]="bookings()"
                        [columns]="[
                            {
                                key: 'date',
                                name: 'FORM.DATE' | translate,
                                content: date_template,
                                size: '5rem',
                                sortable: true,
                            },
                            {
                                key: 'date',
                                name: 'FORM.PERIOD' | translate,
                                content: period_template,
                                size: '9rem',
                                sortable: false,
                            },
                            {
                                key: 'title',
                                name: 'FORM.TITLE' | translate,
                            },
                            {
                                key: 'host',
                                name: 'FORM.HOST' | translate,
                                content: user_template,
                            },
                            {
                                key: 'attendee_count',
                                name: 'CALENDAR_EVENT.ATTENDEES' | translate,
                                size: '6rem',
                            },
                            {
                                key: 'status',
                                name: 'COMMON.STATUS' | translate,
                                content: status_template,
                                size: '7rem',
                                sortable: false,
                            },
                        ]"
                        [empty_message]="
                            'APP.CONCIERGE.ROOMS_HISTORY_EMPTY' | translate
                        "
                        [sortable]="true"
                    ></simple-table>
                </div>
            </div>
            <ng-template #date_template let-date="data">
                <div
                    class="flex w-full flex-col items-center justify-center py-2"
                >
                    <div class="opacity-60">{{ date | date: 'MMM' }}</div>
                    <div class="text-xl">{{ date | date: 'dd' }}</div>
                    <div class="text-xs opacity-60">
                        {{ date | date: 'yyyy' }}
                    </div>
                </div>
            </ng-template>
            <ng-template #period_template let-row="row">
                <div class="p-2">
                    @if (!row.all_day && row.duration <= 12 * 60) {
                        <div class="p-2">
                            {{ row.date | date: time_format }} &ndash;
                            {{ row.date_end | date: time_format }}
                        </div>
                    } @else {
                        <div class="p-2">
                            {{ 'COMMON.ALL_DAY' | translate }}
                        </div>
                    }
                </div>
            </ng-template>
            <ng-template #user_template let-email="data">
                @let user = email | user | async;
                <div class="flex flex-col justify-center px-4 py-2">
                    <div class="select-all">
                        {{ user?.name || user?.email || email }}
                    </div>
                    @if (user?.name) {
                        <div
                            class="max-w-48 truncate text-xs opacity-30 select-all"
                        >
                            {{ email }}
                        </div>
                    }
                </div>
            </ng-template>
            <ng-template #status_template let-row="row">
                <div class="px-4 py-2">
                    <div
                        class="bg-success text-success-content inline-flex rounded-full px-3 py-1 text-xs"
                        [class.bg-error]="row.status === 'declined'"
                        [class.text-error-content]="row.status === 'declined'"
                        [class.bg-warning]="row.status === 'tentative'"
                        [class.text-warning-content]="
                            row.status === 'tentative'
                        "
                    >
                        {{
                            (row.status === 'declined'
                                ? 'APP.CONCIERGE.BOOKING_STATUS_DECLINED'
                                : row.status === 'tentative'
                                  ? 'APP.CONCIERGE.BOOKING_STATUS_PENDING'
                                  : 'APP.CONCIERGE.BOOKING_STATUS_APPROVED'
                            ) | translate
                        }}
                    </div>
                </div>
            </ng-template>
        </main>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 100%;
                overflow: hidden;
            }
        `,
    ],
    providers: [UserPipe],
    imports: [
        CommonModule,
        FormsModule,
        MatDialogModule,
        MatRippleModule,
        MatFormFieldModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        IconComponent,
        SimpleTableComponent,
        TranslatePipe,
        UserPipe,
    ],
})
export class RoomBookingHistoryModalComponent {
    private _data = inject<{ room: PlaceSystem }>(MAT_DIALOG_DATA);
    private _settings = inject(SettingsService);

    public readonly room: PlaceSystem = this._data.room;
    public readonly period = signal<HistoryPeriod>('week');
    public readonly loading = signal(false);
    private readonly _events = signal<any[]>([]);

    public readonly bookings = computed(() =>
        [...this._events()]
            .sort((a, b) => b.date - a.date)
            .map((event) => ({
                ...event,
                attendee_count: (event.attendees || []).length,
            })),
    );

    constructor() {
        this.loadHistory();
    }

    public get time_format() {
        return this._settings.time_format;
    }

    public setPeriod(period: HistoryPeriod) {
        if (this.period() === period) return;
        this.period.set(period);
        this.loadHistory();
    }

    public async loadHistory() {
        this.loading.set(true);
        const end = new Date();
        let start: Date;
        switch (this.period()) {
            case 'week':
                start = startOfDay(subDays(end, 7));
                break;
            case 'month':
                start = startOfDay(subMonths(end, 1));
                break;
            case '3_months':
                start = startOfDay(subMonths(end, 3));
                break;
            case '12_months':
                start = startOfDay(subMonths(end, 12));
                break;
        }
        const events = await queryEvents({
            system_ids: this.room.id,
            period_start: getUnixTime(start),
            period_end: getUnixTime(end),
            include_cancelled: true,
        })
            .toPromise()
            .catch(() => []);
        this._events.set(events || []);
        this.loading.set(false);
    }
}
