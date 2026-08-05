import { Component, computed, inject, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SettingsService } from '@placeos/common';
import {
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { LockerStateService } from './locker-state.service';

@Component({
    selector: 'locker-bookings',
    template: `
        @let more_pages = has_more_pages();
        <div class="h-4 w-full"></div>
        <div
            class="flex h-full w-full flex-col pt-4"
            [class.pb-16]="!loading() && more_pages"
            [class.pb-4]="!(!loading() && more_pages)"
        >
            <simple-table
                class="mr-4 block w-full min-w-6xl flex-1 overflow-auto text-sm"
                [data]="bookings()"
                [columns]="[
                    {
                        key: 'date',
                        name: 'FORM.DATE' | translate,
                        content: date_template,
                        size: '4rem',
                    },
                    {
                        key: 'date',
                        name: 'FORM.PERIOD' | translate,
                        content: period_template,
                        size: '9rem',
                    },
                    {
                        key: 'user_name',
                        name: 'COMMON.PERSON' | translate,
                        content: user_template,
                    },
                    { key: 'group', name: 'COMMON.GROUP' | translate },
                    {
                        key: 'asset_name',
                        name: 'RESOURCE.LOCKER' | translate,
                        content: locker_template,
                    },
                    {
                        key: 'approver_name',
                        name: 'APP.CONCIERGE.APPROVER' | translate,
                    },
                    {
                        key: 'status',
                        name: 'COMMON.STATUS' | translate,
                        content: status_template,
                        size: '11rem',
                    },
                ]"
                [sortable]="true"
                [page_size]="100"
                [empty_message]="
                    (search()
                        ? 'APP.CONCIERGE.LOCKERS_BOOK_SEARCH_EMPTY'
                        : 'APP.CONCIERGE.LOCKERS_BOOK_EMPTY'
                    ) | translate
                "
            ></simple-table>
            <ng-template #date_template let-date="data">
                <div
                    class="flex w-full flex-col items-center justify-center py-2"
                >
                    <div class="opacity-60">{{ date | date: 'MMM' }}</div>
                    <div class="text-xl">{{ date | date: 'dd' }}</div>
                </div>
            </ng-template>
            <ng-template #period_template let-row="row">
                <div class="p-2">
                    @if (
                        row.status !== 'declined' &&
                        !row.deleted &&
                        row.status !== 'ended'
                    ) {
                        <div class="p-2">
                            @if (!(row.all_day || row.duration > 12 * 60)) {
                                {{ row.date | date: time_format }} &ndash;
                                {{ row.date_end | date: time_format }}
                            }
                            @if (row.all_day || row.duration > 12 * 60) {
                                {{ 'COMMON.ALL_DAY' | translate }}
                            }
                        </div>
                    }
                    @if (
                        row.status === 'declined' ||
                        row.deleted ||
                        row.status === 'ended'
                    ) {
                        <div
                            class="bg-error rounded-3xl px-4 py-2 text-xs text-white"
                        >
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
            <ng-template #locker_template let-row="row">
                <div class="p-4">
                    {{ row.asset_name || row.asset_id }}
                </div>
            </ng-template>
            <ng-template #user_template let-row="row">
                <div class="flex flex-col justify-center px-4 py-2">
                    <div class="select-all">
                        {{
                            row.user_name ||
                                row.user_email ||
                                row.booked_by_name ||
                                row.booked_by_email
                        }}
                    </div>
                    @if (row.user_name) {
                        <div class="text-xs opacity-30 select-all">
                            {{ row.user_email }}
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
                        [class.text-neutral-content!]="row?.status === 'ended'"
                        [class.bg-neutral!]="row?.status === 'ended'"
                        [class.opacity-30]="row?.status === 'ended'"
                        [matMenuTriggerFor]="menu"
                        [disabled]="row?.status === 'ended' || row.deleted"
                    >
                        <div class="flex items-center space-x-2 pr-2 pl-4">
                            <div class="flex-1 text-left">
                                {{
                                    (row.deleted
                                        ? 'APP.CONCIERGE.BOOKING_STATUS_DELETED'
                                        : row?.status === 'ended'
                                          ? 'APP.CONCIERGE.BOOKING_STATUS_ENDED'
                                          : row?.status === 'approved'
                                            ? 'APP.CONCIERGE.BOOKING_STATUS_APPROVED'
                                            : row?.status === 'declined'
                                              ? 'APP.CONCIERGE.BOOKING_STATUS_DECLINED'
                                              : 'APP.CONCIERGE.BOOKING_STATUS_PENDING'
                                    ) | translate
                                }}
                            </div>
                            @if (!(row?.status === 'ended' || row.deleted)) {
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
                                    'APP.CONCIERGE.LOCKERS_APPROVE' | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="reject(row)">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">event_busy</icon>
                            <div class="pr-2">
                                {{
                                    'APP.CONCIERGE.LOCKERS_DECLINE' | translate
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
                        class="bg-warning text-warning-content h-10 w-24 rounded-3xl border-none"
                        [matMenuTriggerFor]="checkinMenu"
                        [class.bg-neutral!]="!data"
                        [class.text-neutral-content!]="!data"
                        [class.bg-success!]="data"
                        [class.text-success-content!]="data"
                        [class.opacity-30]="row.status === 'ended'"
                        [disabled]="row.status === 'ended'"
                        [matTooltip]="
                            row.status === 'ended'
                                ? 'Locker booking has ended'
                                : 'Check-in or check-out locker'
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
        </div>
        @if (!loading() && more_pages) {
            <button
                btn
                matRipple
                class="absolute bottom-2 left-4 z-20 w-32"
                (click)="loadMore()"
            >
                {{ 'COMMON.LOAD_MORE' | translate }}
            </button>
        }
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
        MatRippleModule,
        MatMenuModule,
        MatTooltipModule,
        IconComponent,
        TranslatePipe,
        SimpleTableComponent,
    ],
})
export class LockerBookingsComponent {
    private _state = inject(LockerStateService);
    private _settings = inject(SettingsService);

    public readonly loading = signal('');
    public readonly filters = this._state.filters;
    public readonly search = this._state.search;
    public readonly has_more_pages = this._state.has_more_pages;
    public readonly bookings = computed(() =>
        this._state.filtered_bookings().map((booking) => ({
            ...booking,
            end: booking.date + booking.duration * 60 * 1000,
        })),
    );

    public readonly loadMore = () => this._state.nextPage();

    public readonly checkin = (d, s?) =>
        this.runMethod('checkin', async () => {
            await this._state.checkinLocker(d, s);
            d.checked_in = s ?? true;
        });
    public readonly approve = (d) =>
        this.runMethod('approve', async () => this._state.approveLocker(d));
    public readonly reject = (d) =>
        this.runMethod('reject', async () => this._state.rejectLocker(d));

    public get time_format() {
        return this._settings.time_format;
    }

    private async runMethod(name: string, fn: () => Promise<any>) {
        this.loading.set(name);
        await fn().catch((i) => null);
        this.loading.set('');
    }
}
