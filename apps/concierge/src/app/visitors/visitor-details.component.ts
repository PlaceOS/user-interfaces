import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CalendarEvent } from '@user-interfaces/events';
import { User } from '@user-interfaces/users';
import { VisitorsStateService } from './visitors-state.service';

@Component({
    selector: 'visitor-details',
    template: `
        <div class="w-12 text-lg flex justify-center">
            <ng-container *ngIf="!visitor.organizer; else host_state">
                <i
                    *ngIf="!visitor?.checked_in; else checkin_state"
                    class="p-2 rounded-full material-icons border-2 border-dotted border-gray-600"
                    >face</i
                >
            </ng-container>
            <ng-template #checkin_state>
                <i
                    class="p-2 rounded-full material-icons bg-green-600 border-2 border-green-600 text-white"
                    >done</i
                >
            </ng-template>
            <ng-template #host_state>
                <i
                    class="p-2 rounded-full material-icons bg-blue-600 border-2 border-blue-600 text-white"
                    >assignment_ind</i
                >
            </ng-template>
        </div>
        <div flex class="p-2 flex-1">{{ visitor?.name || visitor?.email }}</div>
        <div class="w-32 p-2 flex items-center justify-end">
            <action-icon
                matTooltip="Checkin Guest"
                [loading]="loading === 'checkin'"
                [state]="visitor?.checked_in ? 'success' : ''"
                className="material-icons"
                content="event_available"
                (click)="checkin()"
                [class.invisible]="!visitor?.is_external || visitor?.organizer"
            >
            </action-icon>
            <action-icon
                matTooltip="Checkout Guest"
                [loading]="loading === 'checkout'"
                className="material-icons"
                content="event_busy"
                (click)="checkout()"
                [class.invisible]="!visitor?.is_external || visitor?.organizer"
            >
            </action-icon>
            <a
                [href]="'mailto:' + visitor?.email"
                mat-icon-button
                [matTooltip]="visitor?.organizer ? 'Email Host' : 'Email Guest'"
            >
                <app-icon className="material-icons">email</app-icon>
            </a>
        </div>
        <div class="w-16 p-2"></div>
    `,
    styles: [
        `
            :host {
                display: flex;
                align-items: center;
                width: 100%;
                padding: 0 0.5rem;
            }

            :host > div {
                display: flex;
                align-items: center;
                height: 100%;
                border-bottom: 1px solid #ccc;
                height: 3.5rem;
            }

            :host > div:first-child {
                border: none;
            }

            .invisible {
                opacity: 0;
                pointer-events: none;
            }
        `,
    ],
})
export class VisitorDetailsComponent {
    @Input() public event: CalendarEvent;
    @Input() public visitor: User;
    @Output() public eventChange = new EventEmitter<CalendarEvent>();

    public show_attendees: boolean;
    public loading: string;

    public readonly checkin = async () => {
        this.loading = 'checkin';
        this.event = await this._state
            .checkGuestIn(this.event, this.visitor)
            .catch((e) => this.event);
        this.eventChange.emit(this.event);
        this.loading = '';
    };
    public readonly checkout = async () => {
        this.loading = 'checkout';
        this.event = await this._state
            .checkGuestOut(this.event, this.visitor)
            .catch((e) => this.event);
        this.eventChange.emit(this.event);
        this.loading = '';
    };

    constructor(private _state: VisitorsStateService) {}
}
