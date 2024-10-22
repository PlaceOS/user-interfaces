import { Component } from '@angular/core';
import { EventsStateService } from './events-state.service';
import { OrganisationService } from '@placeos/organisation';
import { getModule } from '@placeos/ts-client';
import { CalendarEvent } from '@placeos/events';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { getTimezoneOffsetString, SettingsService } from '@placeos/common';

@Component({
    selector: 'room-bookings-approvals',
    template: `
        <div
            class="flex flex-col h-full overflow-hidden border-l border-base-200 w-[20rem]"
            [style.width]="show ? '' : '0px'"
        >
            <div
                class="flex items-center p-2 justify-center border-b border-base-200 space-x-2 relative"
            >
                <button
                    btn
                    icon
                    matRipple
                    class="absolute top-4 left-2 bg-base-200"
                    matTooltip="Hide Pending Approvals"
                    matTooltipPosition="left"
                    (click)="show = !show"
                >
                    <app-icon>chevron_right</app-icon>
                </button>
                <h3 class="flex-1 py-4 text-center">
                    Pending Approval ({{
                        (filtered_pending | async)?.length || '0'
                    }}
                    of {{ (pending | async)?.length || '0' }})
                </h3>
            </div>
            <div class="border-b border-base-200 relative">
                <input
                    type="text"
                    placeholder="Search..."
                    class="w-full py-3 pr-4 pl-10"
                    [ngModel]="search | async"
                    (ngModelChange)="search.next($event)"
                />
                <app-icon
                    class="absolute top-1/2 left-2 -translate-y-1/2 text-2xl pointer-events-none"
                >
                    search
                </app-icon>
            </div>
            <div class="flex-1 overflow-auto p-2 space-y-2">
                <div
                    *ngIf="!(filtered_pending | async)?.length"
                    class="w-full h-full flex flex-col items-center justify-center space-y-2"
                >
                    <img src="assets/icons/no-pending.svg" />
                    <p>No pending requests</p>
                </div>
                <div
                    *ngFor="let event of filtered_pending | async"
                    class="relative border border-base-200 p-2 w-full rounded"
                >
                    <h3>{{ event.title }}</h3>
                    <p class="opacity-30 text-xs mb-2">
                        {{ event.date | date: 'mediumDate' : tz }}
                        {{ event.date | date: time_format : tz }}
                        <span *ngIf="tz">{{
                            event.date | date: 'z' : tz
                        }}</span>
                    </p>
                    <div class="w-64 h-32 overflow-hidden mb-2 bg-base-200">
                        <img
                            auth
                            class="object-cover min-w-full min-h-full"
                            [source]="
                                (event.resources[0]?.email | space | async)
                                    ?.images[0]
                            "
                            *ngIf="event.resources.length"
                        />
                    </div>
                    <div class="flex items-center space-x-2 mb-2">
                        <div
                            class="h-8 w-8 bg-base-200 rounded-full flex items-center justify-center"
                        >
                            <app-icon class="text-xl">place</app-icon>
                        </div>
                        <div class="flex-1 text-xs">
                            {{
                                (
                                    event.resources.length &&
                                    (event.resources[0]?.email | space | async)
                                )?.display_name ||
                                    (event.resources[0]?.email | space | async)
                                        ?.name ||
                                    'No Location'
                            }}
                        </div>
                    </div>
                    <div class="flex items-center space-x-2 mb-2">
                        <div
                            class="h-8 w-8 bg-base-200 rounded-full flex items-center justify-center"
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
                            class="border-success bg-success-light text-black flex flex-1 items-center space-x-2"
                            [disabled]="status[event.id] === 'accept'"
                            (click)="approve(event)"
                        >
                            <div>
                                {{
                                    status[event.id] === 'accept'
                                        ? 'Approved'
                                        : 'Approve'
                                }}
                            </div>
                            <app-icon class="text-success">done</app-icon>
                        </button>
                        <button
                            btn
                            matRipple
                            class="border-error bg-error-light text-black flex flex-1 items-center space-x-2 "
                            [disabled]="status[event.id] === 'decline'"
                            (click)="reject(event)"
                        >
                            <div>
                                {{
                                    status[event.id] === 'decline'
                                        ? 'Declined'
                                        : 'Decline'
                                }}
                            </div>
                            <app-icon class="text-error">close</app-icon>
                        </button>
                    </div>
                </div>
            </div>
            <div
                class="absolute bottom-0 left-0 right-0 top-14 p-2 flex flex-col items-center justify-center space-y-2"
                *ngIf="loading"
            >
                <div class="absolute inset-0 bg-base-100 opacity-80 z-0"></div>
                <mat-spinner diameter="32"></mat-spinner>
                <p class="relative z-10">Processing...</p>
            </div>
        </div>
        <button
            btn
            icon
            matRipple
            class="bg-warning absolute top-2 -left-8 shadow text-warning-content"
            *ngIf="!show"
            (click)="show = !show"
            matTooltip="Show Pending Approvals"
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
        const system_id = this._org.binding('approvals');
        if (!system_id) return;
        const mod = getModule(system_id, 'RoomBookingApproval', 1);
        if (!mod) return;
        this.loading = true;
        await mod.execute('accept_event', [event.mailbox, event.id]).catch();
        this.loading = false;
        this.status[event.id] = 'accept';
    }

    public async reject(event: CalendarEvent) {
        const system_id = this._org.binding('approvals');
        if (!system_id) return;
        const mod = getModule(system_id, 'RoomBookingApproval', 1);
        if (!mod) return;
        this.loading = true;
        await mod.execute('decline_event', [event.mailbox, event.id]).catch();
        this.loading = false;
        this.status[event.id] = 'decline';
    }
}
