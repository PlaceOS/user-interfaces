import { Component } from '@angular/core';
import { getTimezoneOffsetString, SettingsService } from '@placeos/common';
import { CalendarEvent } from '@placeos/events';
import { OrganisationService } from '@placeos/organisation';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { EventsStateService } from './events-state.service';

@Component({
    selector: 'room-bookings-approvals',
    template: `
        <div
            class="flex h-full w-[20rem] flex-col overflow-hidden border-l border-base-200"
            [style.width]="show ? '' : '0px'"
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
                    (click)="show = !show"
                >
                    <app-icon>chevron_right</app-icon>
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
            <div class="relative -mt-px border-b border-base-200">
                <input
                    type="text"
                    [placeholder]="'COMMON.SEARCH' | translate"
                    class="w-full py-4 pl-10 pr-4"
                    [ngModel]="search | async"
                    (ngModelChange)="search.next($event)"
                />
                <app-icon
                    class="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-2xl"
                >
                    search
                </app-icon>
            </div>
            <div class="flex-1 space-y-2 overflow-auto p-3">
                <div
                    *ngIf="!(filtered_pending | async)?.length"
                    class="flex h-full w-full flex-col items-center justify-center space-y-2"
                >
                    <img src="assets/icons/no-pending.svg" />
                    <p class="opacity-30">
                        {{ 'APP.CONCIERGE.ROOMS_PENDING_EMPTY' | translate }}
                    </p>
                </div>
                <div
                    *ngFor="let event of filtered_pending | async"
                    class="relative w-full rounded border border-base-300 p-2"
                >
                    @let space =
                        (event.resources.length
                            ? (event.resources[0]?.email | space | async)
                            : (event.mailbox | space | async)) || event.system;
                    <h3>{{ event.title }}</h3>
                    <p class="mb-2 text-xs opacity-30">
                        {{ event.date | date: 'mediumDate' : tz }}
                        {{ event.date | date: time_format : tz }}
                        <span *ngIf="tz">{{
                            event.date | date: 'zzzz' : tz
                        }}</span>
                    </p>
                    <div class="mb-2 h-32 w-64 overflow-hidden bg-base-200">
                        <img
                            auth
                            class="min-h-full min-w-full object-cover"
                            [source]="space?.images[0]"
                            *ngIf="space"
                        />
                    </div>
                    <div class="mb-2 flex items-center space-x-2">
                        <div
                            class="flex h-8 w-8 items-center justify-center rounded-full bg-base-200"
                        >
                            <app-icon class="text-xl">place</app-icon>
                        </div>
                        <div class="flex-1 text-xs">
                            {{
                                space?.display_name ||
                                    space?.name ||
                                    'No Location'
                            }}
                        </div>
                    </div>
                    <div class="mb-2 flex items-center space-x-2">
                        <div
                            class="flex h-8 w-8 items-center justify-center rounded-full bg-base-200"
                        >
                            <app-icon class="text-xl">person</app-icon>
                        </div>
                        <div class="flex-1 text-xs">
                            {{ event.organiser?.name || event.host }}
                        </div>
                    </div>
                    <div class="flex items-center space-x-2">
                        <button
                            btn
                            matRipple
                            class="flex flex-1 items-center space-x-2 border-success bg-success-light text-black"
                            [disabled]="status[event.id] === 'accept'"
                            (click)="approve(event)"
                        >
                            <div>
                                {{
                                    (status[event.id] === 'accept'
                                        ? 'COMMON.APPROVED'
                                        : 'COMMON.APPROVE'
                                    ) | translate
                                }}
                            </div>
                            <app-icon class="text-success">done</app-icon>
                        </button>
                        <button
                            btn
                            matRipple
                            class="flex flex-1 items-center space-x-2 border-error bg-error-light text-black"
                            [disabled]="status[event.id] === 'decline'"
                            (click)="reject(event)"
                        >
                            <div>
                                {{
                                    (status[event.id] === 'decline'
                                        ? 'COMMON.DECLINED'
                                        : 'COMMON.DECLINE'
                                    ) | translate
                                }}
                            </div>
                            <app-icon class="text-error">close</app-icon>
                        </button>
                    </div>
                </div>
            </div>
            <div
                class="absolute bottom-0 left-0 right-0 top-14 flex flex-col items-center justify-center space-y-2 p-2"
                *ngIf="loading"
            >
                <div class="absolute inset-0 z-0 bg-base-100 opacity-80"></div>
                <mat-spinner diameter="32"></mat-spinner>
                <p class="relative z-10">
                    {{ 'APP.CONCIERGE.ROOMS_PENDING_LOADING' | translate }}
                </p>
            </div>
        </div>
        <button
            btn
            icon
            matRipple
            class="absolute -left-8 top-3 bg-warning text-warning-content shadow"
            *ngIf="!show"
            (click)="show = !show"
            [matTooltip]="'APP.CONCIERGE.ROOMS_PENDING_SHOW' | translate"
            matTooltipPosition="left"
        >
            <app-icon>chevron_left</app-icon>
        </button>
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
    standalone: false,
})
export class RoomBookingsApprovalsComponent {
    private _show = true;
    public loading = false;
    public status: Record<string, 'accept' | 'decline' | undefined> = {};
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

    public set show(value: boolean) {
        this._show = value;
        sessionStorage.setItem(
            'PlaceOS.Concierge.show_room_approvals',
            `${value}`,
        );
    }

    public get show() {
        return this._show;
    }

    constructor(
        private _state: EventsStateService,
        private _org: OrganisationService,
        private _settings: SettingsService,
    ) {}

    public ngOnInit() {
        this._show =
            sessionStorage.getItem('PlaceOS.Concierge.show_room_approvals') !==
            'false';
    }

    public async approve(event: CalendarEvent) {
        const mod = this._org.module('approvals', 'RoomBookingApproval');
        if (!mod) return;
        this.loading = true;
        await mod.execute('accept_event', [event.mailbox, event.id]).catch();
        this.loading = false;
        this.status[event.id] = 'accept';
    }

    public async reject(event: CalendarEvent) {
        const mod = this._org.module('approvals', 'RoomBookingApproval');
        if (!mod) return;
        this.loading = true;
        await mod.execute('decline_event', [event.mailbox, event.id]).catch();
        this.loading = false;
        this.status[event.id] = 'decline';
    }
}
