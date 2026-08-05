import { Component, computed, inject, OnInit, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { settingSignal, SettingsService } from '@placeos/common';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { UserPipe } from '@placeos/users';
import { DesksStateService } from './desks-state.service';

@Component({
    selector: 'desk-bookings',
    template: `
        <div class="h-full w-full overflow-auto pb-16">
            <simple-table
                class="block min-w-368 text-sm"
                [data]="bookings()"
                [filter]="filters().search"
                [filter_on]="[
                    'user_name',
                    'asset_name',
                    'user_email',
                    'asset_id',
                    'status',
                    'group',
                    'title',
                ]"
                [columns]="[
                    {
                        key: 'date',
                        name: 'FORM.DATE' | translate,
                        content: date_template,
                        size: '4rem',
                        sortable: false,
                    },
                    {
                        key: 'date',
                        name: 'FORM.PERIOD' | translate,
                        content: period_template,
                        size: '9rem',
                    },
                    { key: 'asset_name', name: 'RESOURCE.DESK' | translate },
                    {
                        key: 'user_email',
                        name: 'COMMON.PERSON' | translate,
                        content: user_template,
                    },
                    {
                        key: 'booked_by_email',
                        name: 'COMMON.BOOKED_BY' | translate,
                        content: user_template,
                    },
                    {
                        key: 'title',
                        name: 'FORM.TITLE' | translate,
                    },
                    {
                        key: 'approver',
                        name: 'APP.CONCIERGE.APPROVER' | translate,
                    },
                    {
                        key: 'status',
                        name: 'COMMON.STATUS' | translate,
                        content: status_template,
                        size: '8.5rem',
                        sortable: false,
                    },
                    {
                        key: 'checked_in',
                        name: 'COMMON.CHECKED_IN' | translate,
                        content: option_template,
                        size: '7rem',
                        sortable: false,
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: can_delete() ? '7rem' : '3.5rem',
                        sortable: false,
                    },
                ]"
                [empty_message]="
                    (filters().search
                        ? 'APP.CONCIERGE.DESKS_BOOKINGS_SEARCH_EMPTY'
                        : 'APP.CONCIERGE.DESKS_BOOKINGS_EMPTY'
                    ) | translate
                "
                [sortable]="true"
            ></simple-table>
            <ng-template #date_template let-date="data">
                <div
                    class="flex w-full flex-col items-center justify-center py-2"
                >
                    <div class="opacity-60">{{ date | date: 'MMM' }}</div>
                    <div class="text-xl">{{ date | date: 'dd' }}</div>
                </div>
            </ng-template>
            <ng-template #group_template let-row="row">
                <div class="p-4 font-mono text-[0.625rem]">
                    {{ row.group || row.extension_data?.group }}
                    @if (!(row.group || row.extension_data?.group)) {
                        <span class="opacity-30">
                            {{ 'APP.CONCIERGE.DESKS_GROUP_EMPTY' | translate }}
                        </span>
                    }
                </div>
            </ng-template>
            <ng-template #period_template let-row="row">
                <div class="flex flex-col p-2">
                    <div>
                        @if (!row.all_day && row.duration <= 12 * 60) {
                            {{ row.date | date: time_format }} &ndash;
                            {{ row.date_end | date: time_format }}
                        }
                        @if (row.all_day || row.duration > 12 * 60) {
                            {{ 'COMMON.ALL_DAY' | translate }}
                        }
                    </div>
                    @if (
                        row.status === 'declined' ||
                        row.deleted ||
                        row.status === 'ended'
                    ) {
                        <div class="text-error text-xs">
                            {{
                                (row.deleted
                                    ? 'APP.CONCIERGE.BOOKING_DELETED'
                                    : row.status === 'ended'
                                      ? 'APP.CONCIERGE.BOOKING_ENDED'
                                      : 'APP.CONCIERGE.BOOKING_EXPIRED'
                                ) | translate
                            }}
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
                <div class="px-2">
                    <button
                        matRipple
                        class="bg-warning text-warning-content h-10 w-30 rounded-3xl border-none"
                        [class.text-success-content!]="
                            row?.status === 'approved' && !row.deleted
                        "
                        [class.bg-success!]="
                            row?.status === 'approved' && !row.deleted
                        "
                        [class.text-neutral-content!]="row.deleted"
                        [class.bg-neutral!]="row.deleted"
                        [class.text-error-content!]="
                            row?.status === 'declined' && !row.deleted
                        "
                        [class.bg-error!]="
                            row?.status === 'declined' && !row.deleted
                        "
                        [class.text-neutral-content!]="
                            row?.status === 'ended' || row?.has_ended
                        "
                        [class.bg-neutral!]="
                            row?.status === 'ended' || row?.has_ended
                        "
                        [class.opacity-30]="
                            row?.status === 'ended' || row?.has_ended
                        "
                        [matMenuTriggerFor]="menu"
                        [disabled]="
                            row?.status === 'ended' ||
                            row?.has_ended ||
                            row.deleted
                        "
                    >
                        <div class="flex items-center space-x-2 pr-2 pl-4">
                            <div class="flex-1 text-left">
                                {{
                                    (row.deleted
                                        ? 'APP.CONCIERGE.BOOKING_STATUS_DELETED'
                                        : row?.status === 'ended' ||
                                            row?.has_ended
                                          ? 'APP.CONCIERGE.BOOKING_STATUS_ENDED'
                                          : row?.status === 'approved'
                                            ? 'APP.CONCIERGE.BOOKING_STATUS_APPROVED'
                                            : row?.status === 'declined'
                                              ? 'APP.CONCIERGE.BOOKING_STATUS_DECLINED'
                                              : 'APP.CONCIERGE.BOOKING_STATUS_PENDING'
                                    ) | translate
                                }}
                            </div>
                            @if (
                                !(
                                    row?.status === 'ended' ||
                                    row?.has_ended ||
                                    row.deleted
                                )
                            ) {
                                <icon class="text-2xl"> arrow_drop_down </icon>
                            }
                        </div>
                    </button>
                </div>
                <mat-menu #menu="matMenu">
                    <button mat-menu-item (click)="approve(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">event_available</icon>
                            <div class="pr-2">
                                {{
                                    'APP.CONCIERGE.DESKS_ACTION_APPROVE'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="reject(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">event_busy</icon>
                            <div class="pr-2">
                                {{
                                    'APP.CONCIERGE.DESKS_ACTION_DECLINE'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                </mat-menu>
            </ng-template>
            <ng-template #option_template let-data="data" let-row="row">
                <div class="px-2">
                    <button
                        matRipple
                        class="bg-warning text-warning-content h-10 w-18 rounded-3xl border-none"
                        [matMenuTriggerFor]="checkinMenu"
                        [class.bg-neutral!]="!data"
                        [class.text-neutral-content!]="!data"
                        [class.bg-success!]="data"
                        [class.text-success-content!]="data"
                        [class.opacity-30]="row.status === 'ended'"
                        [disabled]="row.status === 'ended'"
                        [matTooltip]="
                            row.status === 'ended'
                                ? 'Desk booking has ended'
                                : 'Check-in or check-out desk'
                        "
                    >
                        <div class="flex items-center space-x-2 pr-2 pl-4">
                            <div class="flex-1 text-left">
                                {{
                                    (data ? 'COMMON.YES' : 'COMMON.NO')
                                        | translate
                                }}
                            </div>
                            <icon class="text-2xl"> arrow_drop_down </icon>
                        </div>
                    </button>
                </div>
                <mat-menu #checkinMenu="matMenu">
                    <button mat-menu-item (click)="checkin(row, true)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">check</icon>
                            <div>{{ 'COMMON.CHECK_IN' | translate }}</div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="checkin(row, false)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">cancel</icon>
                            <div>{{ 'COMMON.CHECK_OUT' | translate }}</div>
                        </div>
                    </button>
                </mat-menu>
            </ng-template>
            <ng-template #action_template let-row="row">
                <div class="mx-auto flex items-center justify-end space-x-2">
                    <button
                        icon
                        default
                        matRipple
                        data-testid="desk-booking-history"
                        [attr.aria-label]="
                            'APP.CONCIERGE.BOOKING_VIEW_HISTORY' | translate
                        "
                        [matTooltip]="
                            'APP.CONCIERGE.BOOKING_VIEW_HISTORY' | translate
                        "
                        (click)="viewBookingHistory(row)"
                    >
                        <icon>history</icon>
                    </button>
                    @if (can_delete()) {
                        <button
                            icon
                            default
                            matRipple
                            [matMenuTriggerFor]="actionMenu"
                        >
                            <icon class="text-2xl">more_vert</icon>
                        </button>
                        <mat-menu #actionMenu="matMenu">
                            <button mat-menu-item (click)="cancel(row)">
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl">event_busy</icon>
                                    <div>
                                        {{
                                            'COMMON.CANCEL_BOOKING' | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                            @if (row.instance) {
                                <button
                                    mat-menu-item
                                    (click)="cancelSeries(row)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-error text-2xl"
                                            >delete</icon
                                        >
                                        <div>
                                            {{
                                                'BOOKINGS.ACTION_DELETE_SERIES'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                            }
                        </mat-menu>
                    }
                </div>
            </ng-template>
        </div>
        @if (!loading() && has_more_pages()) {
            <button
                matRipple
                class="border-base-300 bg-base-100 fixed bottom-2 left-1/2 flex items-center gap-2 rounded-full border px-3 py-2 text-sm shadow-xl"
                (click)="loadMore()"
            >
                <icon>arrow_cool_down</icon>
                <div class="pr-1">{{ 'COMMON.LOAD_MORE' | translate }}</div>
            </button>
        }
        <div
            class="bg-base-100 border-base-300 fixed right-8 bottom-4 flex items-center justify-end gap-2 rounded-xl border px-2 py-1 shadow-lg"
        >
            <span class="mr-8 text-xs opacity-60">
                {{
                    'COMMON.LAST_UPDATED'
                        | translate
                            : { time: (last_updated() | date: time_format) }
                }}
            </span>
            <button
                icon
                default
                matRipple
                class="absolute top-1/2 -right-2 -translate-y-1/2"
                [disabled]="state_loading()"
                [matTooltip]="'COMMON.REFRESH' | translate"
                (click)="refresh()"
            >
                <icon>refresh</icon>
            </button>
        </div>
    `,
    styles: [
        `
            :host {
                position: relative;
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
            }
        `,
    ],
    imports: [
        CommonModule,
        TranslatePipe,
        MatRippleModule,
        MatMenuModule,
        IconComponent,
        MatTooltipModule,
        SimpleTableComponent,
        UserPipe,
    ],
})
export class DeskBookingsComponent implements OnInit {
    private _state = inject(DesksStateService);
    private _settings = inject(SettingsService);

    public loading = signal<string>('');
    public readonly filters = this._state.filters;
    public readonly has_more_pages = this._state.has_more_pages;
    public readonly can_delete = settingSignal('desks.allow_deleting', false);
    public readonly bookings = computed(() => {
        const all_bookings = this._state.bookings();
        if (!this._state.loading()) return all_bookings;
        // While loading, filter to only show bookings matching the newly selected zones
        const selected_zones = this.filters().zones || [];
        const active_zones = selected_zones.filter(
            (z) => z && z !== 'All' && z !== '-1',
        );
        if (!active_zones.length) return [];
        return all_bookings.filter((booking) =>
            booking.zones?.some((z) => active_zones.includes(z)),
        );
    });

    public readonly rejectAll = () => this._state.rejectAllDesks();
    public readonly cancel = (b) => this._state.cancelBooking(b);
    public readonly cancelSeries = (b) => this._state.cancelBooking(b, true);
    public readonly viewBookingHistory = (b) =>
        this._state.viewBookingHistory(b);
    public readonly loadMore = () => this._state.nextPage();
    public readonly last_updated = this._state.last_updated;
    public readonly state_loading = this._state.loading;
    public readonly refresh = () => this._state.refresh();

    public ngOnInit() {
        this._state.refresh();
    }

    public get columns() {
        return [
            'date',
            'period',
            'user_name',
            'group',
            'asset_name',
            'approver_name',
            'status',
            'checked_in',
        ];
    }

    public readonly checkin = (d, s?) =>
        this.runMethod('checkin', async () => {
            await this._state.checkinDesk(d, s);
            d.checked_in = s ?? true;
        });
    public readonly approve = (d) =>
        this.runMethod('approve', async () => this._state.approveDesk(d));
    public readonly reject = (d) =>
        this.runMethod('reject', async () => this._state.rejectDesk(d));

    public get time_format() {
        return this._settings.time_format;
    }

    private async runMethod(name: string, fn: () => Promise<void>) {
        this.loading.set(name);
        await fn().catch(() => null);
        this.loading.set('');
    }
}
