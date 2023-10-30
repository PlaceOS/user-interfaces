import { Component } from '@angular/core';
import { EventsStateService } from './events-state.service';
import { OrganisationService } from '@placeos/organisation';
import { getModule } from '@placeos/ts-client';
import { CalendarEvent } from '@placeos/events';

@Component({
    selector: 'room-bookings-approvals',
    template: `
        <div
            class="flex flex-col h-full overflow-hidden border-l border-base-200"
            [style.width]="show ? '' : '0px'"
        >
            <div
                class="flex items-center p-2 border-b border-base-200 space-x-2"
            >
                <button
                    btn
                    icon
                    matRipple
                    class="bg-base-200"
                    (click)="show = !show"
                >
                    <app-icon>chevron_right</app-icon>
                </button>
                <h3 class="flex-1">
                    Pending Approval ({{ (pending | async)?.length || '0' }})
                </h3>
                <button btn icon matRipple>
                    <app-icon>search</app-icon>
                </button>
            </div>
            <div class="flex-1 overflow-auto p-2 space-y-2">
                <div
                    *ngIf="!(pending | async)?.length"
                    class="w-full h-full flex flex-col items-center justify-center space-y-2"
                >
                    <img src="assets/icons/no-pending.svg" />
                    <p>No pending requests</p>
                </div>
                <div
                    *ngFor="let event of pending | async"
                    class="relative border border-base-200 p-2 w-full rounded"
                >
                    <h3>{{ event.title }}</h3>
                    <p class="opacity-30 text-xs mb-2">
                        {{ event.date | date: 'medium' }}
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
    public show = true;
    public loading = false;
    public status: Record<string, 'accept' | 'decline' | undefined> = {};
    public readonly pending = this._state.pending;

    constructor(
        private _state: EventsStateService,
        private _org: OrganisationService
    ) {}

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
