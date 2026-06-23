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
import {
    CalendarEventChange,
    queryEventHistory,
    queryEvents,
} from '@placeos/events';
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
                        class="block min-w-3xl text-sm"
                        [data]="bookings()"
                        [columns]="[
                            {
                                key: '_expand',
                                name: ' ',
                                content: expand_template,
                                size: '3rem',
                                sortable: false,
                            },
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
                        [child_template]="history_template"
                        [show_children]="expanded()"
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
            <ng-template #expand_template let-row="row">
                <div class="flex h-full w-full items-center justify-center">
                    <button
                        icon
                        default
                        matRipple
                        [attr.aria-label]="
                            (expanded()[row.id]
                                ? 'APP.CONCIERGE.ROOMS_HISTORY_COLLAPSE'
                                : 'APP.CONCIERGE.ROOMS_HISTORY_EXPAND'
                            ) | translate
                        "
                        (click)="toggleRow(row)"
                    >
                        <icon>
                            {{
                                expanded()[row.id]
                                    ? 'expand_less'
                                    : 'expand_more'
                            }}
                        </icon>
                    </button>
                </div>
            </ng-template>
            <ng-template #history_template let-row="row">
                <div class="bg-base-200/40 px-6 py-4">
                    @if (history_loading()[row.id]) {
                        <div class="flex items-center justify-center py-6">
                            <mat-spinner diameter="24"></mat-spinner>
                        </div>
                    } @else {
                        @let changes = histories()[row.id] || [];
                        @if (!changes.length) {
                            <div class="py-4 text-center text-sm opacity-60">
                                {{
                                    'APP.CONCIERGE.ROOMS_HISTORY_CHANGES_EMPTY'
                                        | translate
                                }}
                            </div>
                        } @else {
                            <div
                                class="mb-2 text-xs font-medium uppercase opacity-60"
                            >
                                {{
                                    'APP.CONCIERGE.ROOMS_HISTORY_CHANGES_HEADER'
                                        | translate
                                }}
                            </div>
                            <ul class="flex flex-col space-y-2">
                                @for (change of changes; track change.id) {
                                    <li
                                        class="border-base-300 bg-base-100 flex items-start space-x-3 rounded-sm border p-3"
                                    >
                                        <icon class="text-xl opacity-60">
                                            {{ actionIcon(change.action) }}
                                        </icon>
                                        <div class="flex flex-1 flex-col">
                                            <div
                                                class="flex items-center space-x-2 text-sm"
                                            >
                                                <span
                                                    class="font-medium capitalize"
                                                >
                                                    {{
                                                        actionLabel(
                                                            change.action
                                                        ) | translate
                                                    }}
                                                </span>
                                                @if (change.type) {
                                                    <span
                                                        class="bg-base-200 rounded-2xl px-2 py-0.5 font-mono text-[0.625rem] opacity-70"
                                                    >
                                                        {{ change.type }}
                                                    </span>
                                                }
                                            </div>
                                            <div class="text-xs opacity-60">
                                                {{
                                                    change.updated_at * 1000
                                                        | date: 'medium'
                                                }}
                                            </div>
                                            @if (
                                                change.changed_fields?.length
                                            ) {
                                                <div
                                                    class="mt-1 flex flex-wrap gap-1"
                                                >
                                                    @for (
                                                        field of change.changed_fields;
                                                        track field
                                                    ) {
                                                        <span
                                                            class="bg-base-300 rounded-2xl px-2 py-0.5 font-mono text-[0.625rem]"
                                                        >
                                                            {{ field }}
                                                        </span>
                                                    }
                                                </div>
                                            }
                                        </div>
                                    </li>
                                }
                            </ul>
                        }
                    }
                </div>
            </ng-template>
            <ng-template #status_template let-row="row">
                <div class="px-4 py-2">
                    <div
                        class="bg-success text-success-content inline-flex rounded-full px-3 py-1 text-xs"
                        [class.bg-error]="
                            row.status === 'declined' && !row.deleted
                        "
                        [class.text-error-content]="
                            row.status === 'declined' && !row.deleted
                        "
                        [class.bg-neutral]="row.deleted"
                        [class.text-neutral-content]="row.deleted"
                        [class.bg-warning]="
                            row.status === 'tentative' && !row.deleted
                        "
                        [class.text-warning-content]="
                            row.status === 'tentative' && !row.deleted
                        "
                    >
                        {{
                            (row.deleted
                                ? 'APP.CONCIERGE.BOOKING_STATUS_DELETED'
                                : row.status === 'declined'
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
    public readonly expanded = signal<Record<string, boolean>>({});
    public readonly histories = signal<Record<string, CalendarEventChange[]>>(
        {},
    );
    public readonly history_loading = signal<Record<string, boolean>>({});
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
        this.expanded.set({});
        this.histories.set({});
        this.history_loading.set({});
        const { start, end } = this.periodRange();
        const events = await queryEvents({
            system_ids: this.room.id,
            period_start: getUnixTime(start),
            period_end: getUnixTime(end),
            include_cancelled: true,
        }).catch(() => []);
        this._events.set(events || []);
        this.loading.set(false);
    }

    public toggleRow(row: { id: string; ical_uid?: string }) {
        if (!row?.id) return;
        const is_expanded = !!this.expanded()[row.id];
        this.expanded.update((state) => ({
            ...state,
            [row.id]: !is_expanded,
        }));
        if (!is_expanded && !this.histories()[row.id]) {
            this.loadRowHistory(row);
        }
    }

    public actionIcon(action: string): string {
        switch (action) {
            case 'create':
                return 'add_circle';
            case 'update':
                return 'edit';
            case 'cancel':
            case 'delete':
                return 'delete';
            case 'approve':
                return 'check_circle';
            case 'decline':
                return 'cancel';
            default:
                return 'history';
        }
    }

    public actionLabel(action: string): string {
        switch (action) {
            case 'create':
                return 'APP.CONCIERGE.ROOMS_HISTORY_ACTION_CREATE';
            case 'update':
                return 'APP.CONCIERGE.ROOMS_HISTORY_ACTION_UPDATE';
            case 'cancel':
                return 'APP.CONCIERGE.ROOMS_HISTORY_ACTION_CANCEL';
            case 'delete':
                return 'APP.CONCIERGE.ROOMS_HISTORY_ACTION_DELETE';
            case 'approve':
                return 'APP.CONCIERGE.ROOMS_HISTORY_ACTION_APPROVE';
            case 'decline':
                return 'APP.CONCIERGE.ROOMS_HISTORY_ACTION_DECLINE';
            default:
                return action || 'APP.CONCIERGE.ROOMS_HISTORY_ACTION_UNKNOWN';
        }
    }

    private async loadRowHistory(row: { id: string; ical_uid?: string }) {
        this.history_loading.update((state) => ({ ...state, [row.id]: true }));
        const { start, end } = this.periodRange();
        const params: Parameters<typeof queryEventHistory>[0] = {
            period_start: getUnixTime(start),
            period_end: getUnixTime(end),
        };
        if (row.ical_uid) {
            params.ical_uid = row.ical_uid;
        } else {
            params.system_ids = this.room.id;
        }
        const changes = await queryEventHistory(params).catch(
            () => [] as CalendarEventChange[],
        );
        const sorted = [...(changes || [])].sort(
            (a, b) => (b.updated_at || 0) - (a.updated_at || 0),
        );
        this.histories.update((state) => ({ ...state, [row.id]: sorted }));
        this.history_loading.update((state) => ({
            ...state,
            [row.id]: false,
        }));
    }

    private periodRange(): { start: Date; end: Date } {
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
        return { start, end };
    }
}
