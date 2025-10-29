import { Component, inject, OnInit, signal } from '@angular/core';
import {
    CalendarEvent,
    getTimezoneOffsetString,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    AuthenticatedImageDirective,
    BuildingPipe,
    IconComponent,
    LevelPipe,
    TranslatePipe,
} from '@placeos/components';
import { SpacePipe } from '@placeos/events';
import { EventsStateService } from './events-state.service';

@Component({
    selector: 'room-bookings-approvals',
    template: `
        <div
            class="flex h-full w-[20rem] flex-col overflow-hidden border-l border-base-300"
            [style.width]="show() ? '' : '0px'"
        >
            <div
                class="relative flex items-center justify-center space-x-2 border-b border-base-200 p-2"
            >
                <button
                    btn
                    icon
                    matRipple
                    class="absolute left-2 top-3 bg-base-200"
                    [matTooltip]="
                        'APP.CONCIERGE.ROOMS_PENDING_HIDE' | translate
                    "
                    matTooltipPosition="left"
                    (click)="setShow(!show())"
                >
                    <icon>chevron_right</icon>
                </button>
                <h3 class="flex-1 py-3 text-center">
                    {{
                        'APP.CONCIERGE.ROOMS_PENDING_HEADER'
                            | translate
                                : {
                                      count:
                                          (filtered_pending | async)?.length ||
                                          '0',
                                      total: (pending | async)?.length || '0',
                                  }
                    }}
                </h3>
            </div>
            <div class="relative -mt-px border-b border-base-300">
                <input
                    type="text"
                    [placeholder]="'COMMON.SEARCH' | translate"
                    class="w-full py-4 pl-10 pr-4"
                    [ngModel]="search | async"
                    (ngModelChange)="search.next($event)"
                />
                <icon
                    class="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-2xl"
                >
                    search
                </icon>
            </div>
            <div class="flex-1 space-y-1 overflow-auto bg-base-200 p-1">
                @if (!(filtered_pending | async)?.length) {
                    <div
                        class="flex h-full w-full flex-col items-center justify-center space-y-2"
                    >
                        <img src="assets/icons/no-pending.svg" />
                        <p class="opacity-30">
                            {{
                                'APP.CONCIERGE.ROOMS_PENDING_EMPTY' | translate
                            }}
                        </p>
                    </div>
                }
                @for (event of filtered_pending | async; track event) {
                    <div
                        class="relative w-full rounded-lg border border-base-300 bg-base-100 p-2"
                    >
                        @if (event.recurring_event_id) {
                            <div
                                class="absolute right-2 top-3 text-2xl"
                                matTooltip="Recurring Series"
                                matTooltipPosition="left"
                            >
                                <icon>event_repeat</icon>
                            </div>
                        }
                        @let space =
                            (event.resources.length
                                ? (event.resources[0]?.email | space | async)
                                : (event.mailbox | space | async)) ||
                            event.system;
                        <h3 class="font-medium">{{ event.title }}</h3>
                        <p class="mb-2 text-xs opacity-30">
                            {{ event.date | date: 'mediumDate' : tz }}
                            {{ event.date | date: time_format : tz }}
                            @if (tz) {
                                <span>{{
                                    event.date | date: 'zzzz' : tz
                                }}</span>
                            }
                        </p>
                        @if (space?.images?.length) {
                            <div
                                class="mb-2 h-32 w-full overflow-hidden rounded bg-base-200"
                            >
                                <img
                                    auth
                                    class="min-h-full min-w-full object-cover object-center"
                                    [source]="space?.images[0]"
                                />
                            </div>
                        } @else {
                            <hr class="mb-2 border-base-300 bg-base-200" />
                        }
                        <div class="mb-2 flex items-center space-x-2">
                            <div
                                class="flex h-8 w-8 items-center justify-center rounded-full bg-base-200"
                            >
                                <icon class="text-xl">place</icon>
                            </div>
                            @let bld = space?.zones | building;
                            @let lvl = space?.zones | level;
                            <div class="flex-1">
                                <div class="text-sm">
                                    {{
                                        space?.display_name ||
                                            space?.name ||
                                            'No Location'
                                    }}
                                </div>
                                <div class="text-xs opacity-50">
                                    {{ bld?.display_name || bld?.name }},
                                    {{ lvl?.display_name || lvl?.name }}
                                </div>
                            </div>
                        </div>
                        <div class="mb-2 flex items-center space-x-2">
                            <div
                                class="flex h-8 w-8 items-center justify-center rounded-full bg-base-200"
                            >
                                <icon class="text-xl">person</icon>
                            </div>
                            <div class="flex-1 text-sm">
                                {{ event.organiser?.name || event.host }}
                            </div>
                        </div>
                        <div class="flex items-center space-x-2">
                            <button
                                btn
                                matRipple
                                class="flex min-w-0 flex-1 items-center space-x-1 border-success bg-success-light text-black"
                                [disabled]="status()[event.id] === 'accept'"
                                (click)="approve(event)"
                            >
                                <div class="ml-2">
                                    {{
                                        (status()[event.id] === 'accept'
                                            ? 'COMMON.APPROVED'
                                            : 'COMMON.APPROVE'
                                        ) | translate
                                    }}
                                </div>
                                <icon class="text-2xl text-success">done</icon>
                            </button>
                            <button
                                btn
                                matRipple
                                class="flex min-w-0 flex-1 items-center space-x-1 border-error bg-error-light text-black"
                                [disabled]="status()[event.id] === 'decline'"
                                (click)="reject(event)"
                            >
                                <div class="ml-2">
                                    {{
                                        (status()[event.id] === 'decline'
                                            ? 'COMMON.DECLINED'
                                            : 'COMMON.DECLINE'
                                        ) | translate
                                    }}
                                </div>
                                <icon class="text-2xl text-error">close</icon>
                            </button>
                            @if (event.recurring_event_id) {
                                <button
                                    icon
                                    matRipple
                                    class="h-12 w-12 rounded-md border border-base-300 bg-base-200"
                                    [matMenuTriggerFor]="menu"
                                >
                                    <icon>more_vert</icon>
                                </button>
                                <mat-menu #menu="matMenu">
                                    <button
                                        mat-menu-item
                                        (click)="approveSeries(event)"
                                    >
                                        <div
                                            class="flex items-center space-x-2 pr-4"
                                        >
                                            <icon class="text-2xl text-success"
                                                >done</icon
                                            >
                                            <div>
                                                {{
                                                    'APP.CONCIERGE.ROOMS_APPROVE_SERIES'
                                                        | translate
                                                }}
                                            </div>
                                        </div>
                                    </button>
                                    <button
                                        mat-menu-item
                                        (click)="rejectSeries(event)"
                                    >
                                        <div
                                            class="flex items-center space-x-2 pr-4"
                                        >
                                            <icon class="text-2xl text-error"
                                                >close</icon
                                            >
                                            <div>
                                                {{
                                                    'APP.CONCIERGE.ROOMS_REJECT_SERIES'
                                                        | translate
                                                }}
                                            </div>
                                        </div>
                                    </button>
                                </mat-menu>
                            }
                        </div>
                    </div>
                }
            </div>
            @if (loading()) {
                <div
                    class="absolute bottom-0 left-0 right-0 top-14 flex flex-col items-center justify-center space-y-2 p-2"
                >
                    <div
                        class="absolute inset-0 z-0 bg-base-100 opacity-80"
                    ></div>
                    <mat-spinner diameter="32"></mat-spinner>
                    <p class="relative z-10">
                        {{ 'APP.CONCIERGE.ROOMS_PENDING_LOADING' | translate }}
                    </p>
                </div>
            }
        </div>
        @if (!show()) {
            <button
                btn
                icon
                matRipple
                class="absolute -left-8 top-3 bg-warning text-warning-content shadow"
                (click)="setShow(!show())"
                [matTooltip]="'APP.CONCIERGE.ROOMS_PENDING_SHOW' | translate"
                matTooltipPosition="left"
            >
                <icon>chevron_left</icon>
            </button>
        }
    `,
    styles: [
        `
            :host {
                display: block;
                position: relative;
                height: 100%;
            }
        `,
    ],
    imports: [
        CommonModule,
        TranslatePipe,
        IconComponent,
        BuildingPipe,
        LevelPipe,
        SpacePipe,
        FormsModule,
        MatProgressSpinnerModule,
        AuthenticatedImageDirective,
        MatTooltipModule,
        MatMenuModule,
    ],
})
export class RoomBookingsApprovalsComponent implements OnInit {
    private _state = inject(EventsStateService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    public readonly show = signal(true);
    public readonly loading = signal(false);
    public readonly status = signal<
        Record<string, 'accept' | 'decline' | undefined>
    >({});
    public readonly search = new BehaviorSubject('');

    public readonly pending = this._state.pending;

    public get time_format() {
        return this._settings.time_format;
    }

    private _local_tz = getTimezoneOffsetString(
        Intl.DateTimeFormat().resolvedOptions().timeZone,
    );

    public get timezone() {
        return this._settings.get('app.events.use_building_timezone')
            ? this._org.building.timezone
            : '';
    }

    public get tz() {
        const tz = this.timezone;
        if (!tz) return '';
        const tz_offset = getTimezoneOffsetString(tz);
        return tz_offset === this._local_tz ? '' : tz_offset;
    }

    public readonly filtered_pending = combineLatest([
        this._state.pending,
        this.search,
    ]).pipe(
        map(([list, search]) =>
            list.filter(
                (event) =>
                    event.title.toLowerCase().includes(search.toLowerCase()) ||
                    event.host.toLowerCase().includes(search.toLowerCase()) ||
                    event.organiser?.name
                        .toLowerCase()
                        .includes(search.toLowerCase()),
            ),
        ),
    );

    public setShow(value: boolean) {
        this.show.set(value);
        sessionStorage.setItem(
            'PlaceOS.Concierge.show_room_approvals',
            `${value}`,
        );
    }

    public ngOnInit() {
        this.show.set(
            sessionStorage.getItem('PlaceOS.Concierge.show_room_approvals') !==
                'false',
        );
    }

    public async approve(event: CalendarEvent) {
        const mod = this._org.module('approvals', 'RoomBookingApproval');
        if (!mod) return;
        this.loading.set(true);
        await mod.execute('accept_event', [event.mailbox, event.id]).catch();
        this.loading.set(false);
        this.status.update((s) => {
            s[event.id] = 'accept';
            return s;
        });
    }

    public async approveSeries(event: CalendarEvent) {
        const mod = this._org.module('approvals', 'RoomBookingApproval');
        if (!mod) return;
        this.loading.set(true);
        await mod
            .execute(
                'accept_recurring_event',
                [event.mailbox, event.recurring_event_id || event.id],
                30 * 1000,
            )
            .catch();
        await mod.execute('find_bookings_for_approval').catch();
        this.loading.set(false);
        this.status.update((s) => {
            s[event.id] = 'accept';
            return s;
        });
    }

    public async reject(event: CalendarEvent) {
        const mod = this._org.module('approvals', 'RoomBookingApproval');
        if (!mod) return;
        this.loading.set(true);
        await mod.execute('decline_event', [event.mailbox, event.id]).catch();
        this.loading.set(false);
        this.status.update((s) => {
            s[event.id] = 'decline';
            return s;
        });
    }

    public async rejectSeries(event: CalendarEvent) {
        const mod = this._org.module('approvals', 'RoomBookingApproval');
        if (!mod) return;
        this.loading.set(true);
        await mod
            .execute(
                'decline_recurring_event',
                [event.mailbox, event.recurring_event_id || event.id],
                30 * 1000,
            )
            .catch();
        await mod.execute('find_bookings_for_approval').catch();
        this.loading.set(false);
        this.status.update((s) => {
            s[event.id] = 'decline';
            return s;
        });
    }
}
