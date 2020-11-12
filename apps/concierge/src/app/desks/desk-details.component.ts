import { Component, Input } from '@angular/core';
import { Booking } from '@user-interfaces/bookings';
import { DesksStateService } from './desks-state.service';

export interface DeskBooking extends Booking {
    los: string;
}

@Component({
    selector: 'desk-details',
    template: `
        <div class="w-32 p-2 bg">{{ desk?.user_name }}</div>
        <div class="w-32 p-2">{{ desk?.los }}</div>
        <div class="w-24 p-2">{{ desk.date | date: 'shortTime' }}</div>
        <div flex class="p-2 flex-1 truncate">{{ desk?.description }}</div>
        <div [class]="'w-24 p-2 capitalize text-red-600 ' + desk?.status">
            {{ desk?.status }}
        </div>
        <div class="w-32 p-2">{{ desk?.approver_name }}</div>
        <div class="w-32 p-2">{{ desk?.checked_in ? 'Yes' : 'No' }}</div>
        <div class="w-32 p-2 flex items-center">
            <action-icon
                mat-icon-button
                className="material-icons"
                (click)="checkin()"
                [loading]="loading === 'checkin'"
                [state]="desk?.checked_in ? 'success' : ''"
                content="how_to_reg"
            ></action-icon>
            <action-icon
                mat-icon-button
                className="material-icons"
                (click)="approve()"
                [loading]="loading === 'approve'"
                [state]="desk?.approved ? 'success' : ''"
                content="event_available"
            ></action-icon>
            <action-icon
                mat-icon-button
                className="material-icons"
                (click)="reject()"
                [loading]="loading === 'reject'"
                [state]="desk?.status === 'declined' ? 'success' : ''"
                content="event_busy"
            ></action-icon>
        </div>
    `,
    styles: [
        `
            :host {
                width: 100%;
                display: flex;
                align-items: center;
                padding: 0 0.5rem;
                background-color: #f8f8f8;
                border-bottom: 1px solid #ccc;
            }

            :host:hover {
                background-color: #f0f0f0;
            }

            .tentative {
                color: #ffa000;
            }

            .approved {
                color: #388e3c;
            }
        `,
    ],
})
export class DeskDetailsComponent {
    @Input() public desk: DeskBooking;

    public loading: string;

    public readonly checkin = () =>
        this.runMethod('checkin', async () =>
            this._state.checkinDesk(this.desk)
        );
    public readonly approve = () =>
        this.runMethod('approve', async () =>
            this._state.approveDesk(this.desk)
        );
    public readonly reject = () =>
        this.runMethod('reject', async () =>
            this._state.rejectDesk(this.desk)
        );

    constructor(private _state: DesksStateService) {}

    private async runMethod(name: string, fn: () => Promise<any>) {
        this.loading = name;
        await fn().catch((i) => null);
        this.loading = '';
    }
}
