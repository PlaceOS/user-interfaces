import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    CalendarEvent,
    getTimezoneOffsetString,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
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
            class="border-base-300 flex h-full w-[20rem] flex-col overflow-hidden border-l"
            [style.width]="show() ? '' : '0px'"
        >
            <div
                class="border-base-200 relative flex items-center justify-center space-x-2 border-b p-2"
            >
                <button
                    btn
                    icon
                    matRipple
                    class="bg-base-200 absolute top-3 left-2"
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
                                      count: filtered_pending().length || '0',
                                      total: pending().length || '0',
                                  }
                    }}
                </h3>
            </div>
            <div class="border-base-300 relative -mt-px border-b">
                <input
                    type="text"
                    [placeholder]="'COMMON.SEARCH' | translate"
                    class="w-full py-4 pr-4 pl-10"
                    [(ngModel)]="search"
                />
                <icon
                    class="pointer-events-none absolute top-1/2 left-2 -translate-y-1/2 text-2xl"
                >
                    search
                </icon>
            </div>
            <div class="bg-base-200 flex-1 space-y-1 overflow-auto p-1">
                @if (!filtered_pending().length) {
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
                @for (event of filtered_pending(); track event) {
                    <div
                        class="border-base-300 bg-base-100 relative w-full rounded-lg border p-2"
                    >
                        @if (event.recurring_event_id) {
                            <div
                                class="absolute top-3 right-2 text-2xl"
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
                            {{ event.date | date: time_format : tz }} &ndash;
                            {{ event.date_end | date: time_format : tz }}
                            @if (tz) {
                                <span>{{
                                    event.date | date: 'zzzz' : tz
                                }}</span>
                            }
                        </p>
                        @if (space?.images?.length) {
                            <div
                                class="bg-base-200 mb-2 h-32 w-full overflow-hidden rounded-sm"
                            >
                                <img
                                    auth
                                    class="min-h-full min-w-full object-cover object-center"
                                    [source]="space?.images[0]"
                                />
                            </div>
                        } @else {
                            <hr class="border-base-300 bg-base-200 mb-2" />
                        }
                        <div class="mb-2 flex items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-8 w-8 items-center justify-center rounded-full"
                            >
                                <icon class="text-xl">place</icon>
                            </div>
                            @let bld = $any(space?.zones) | building;
                            @let lvl = $any(space?.zones) | level;
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
                                class="bg-base-200 flex h-8 w-8 items-center justify-center rounded-full"
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
                                class="border-success bg-success-light flex min-w-0 flex-1 items-center space-x-1 text-black"
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
                                <icon class="text-success text-2xl">done</icon>
                            </button>
                            <button
                                btn
                                matRipple
                                class="border-error bg-error-light flex min-w-0 flex-1 items-center space-x-1 text-black"
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
                                <icon class="text-error text-2xl">close</icon>
                            </button>
                            @if (event.recurring_event_id) {
                                <button
                                    icon
                                    matRipple
                                    class="border-base-300 bg-base-200 h-12 w-12 rounded-md border"
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
                                            <icon class="text-success text-2xl"
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
                                            <icon class="text-error text-2xl"
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
                    class="absolute top-14 right-0 bottom-0 left-0 flex flex-col items-center justify-center space-y-2 p-2"
                >
                    <div
                        class="bg-base-100 absolute inset-0 z-0 opacity-80"
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
                class="border-base-200 hover:bg-info-light absolute top-3 -left-8 border shadow-md"
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
    public readonly search = signal('');

    public readonly pending = toSignal(this._state.pending, {
        initialValue: [],
    });

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

    public readonly filtered_pending = computed(() => {
        const search = this.search().toLowerCase();
        const status = this.status();
        return this.pending().filter(
            (event) =>
                !status[event.id] &&
                (!event.recurring_event_id ||
                    !status[event.recurring_event_id]) &&
                (event.title.toLowerCase().includes(search) ||
                    event.host.toLowerCase().includes(search) ||
                    event.organiser?.name?.toLowerCase().includes(search)),
        );
    });

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
        this.status.update((s) => ({ ...s, [event.id]: 'accept' }));
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
        this.loading.set(false);
        this._setSeriesStatus(event, 'accept');
    }

    public async reject(event: CalendarEvent) {
        const mod = this._org.module('approvals', 'RoomBookingApproval');
        if (!mod) return;
        this.loading.set(true);
        await mod.execute('decline_event', [event.mailbox, event.id]).catch();
        this.loading.set(false);
        this.status.update((s) => ({ ...s, [event.id]: 'decline' }));
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
        this.loading.set(false);
        this._setSeriesStatus(event, 'decline');
    }

    private _setSeriesStatus(
        event: CalendarEvent,
        status: 'accept' | 'decline',
    ) {
        const recurring_event_id = event.recurring_event_id || event.id;
        const series_events = this.pending().filter(
            (_) => (_.recurring_event_id || _.id) === recurring_event_id,
        );
        this.status.update((s) => ({
            ...s,
            [recurring_event_id]: status,
            ...Object.fromEntries(series_events.map((_) => [_.id, status])),
            [event.id]: status,
        }));
    }
}
