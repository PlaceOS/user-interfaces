import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
} from '@angular/core';
import { AsyncHandler, notifyError, SettingsService } from '@placeos/common';
import { CalendarEvent, saveEvent } from '@placeos/events';
import { showGuest, User } from '@placeos/users';

import { VisitorsStateService } from './visitors-state.service';

@Component({
    selector: 'visitor-details',
    template: `
        <ng-container *ngIf="visitor">
            <div details class="w-12 text-lg flex justify-center">
                <ng-container *ngIf="!visitor?.organizer; else host_state">
                    <i
                        *ngIf="!visitor?.checked_in; else checkin_state"
                        class="p-2 rounded-full material-icons border-2 border-dotted border-gray-600 dark:border-neutral-800"
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
            <div flex class="p-2 flex-1">
                {{ visitor?.name || visitor?.email }}
            </div>
            <div class="w-48 py-2 flex items-center justify-end">
                <action-icon
                    remote
                    [matTooltip]="
                        remote
                            ? 'Set as In-Person Visitor'
                            : 'Set as Remote Visitior'
                    "
                    [loading]="loading === 'remote'"
                    [content]="remote ? 'tap_and_play' : 'business'"
                    (click)="toggleRemote()"
                    [class.invisible]="
                        !visitor?.is_external || visitor?.organizer
                    "
                >
                </action-icon>
                <action-icon
                    checkin
                    matTooltip="Checkin Guest"
                    [loading]="loading === 'checkin'"
                    [state]="visitor?.checked_in ? 'success' : ''"
                    content="event_available"
                    (click)="checkin()"
                    [class.invisible]="
                        !visitor?.is_external || visitor?.organizer
                    "
                >
                </action-icon>
                <action-icon
                    checkout
                    matTooltip="Checkout Guest"
                    [loading]="loading === 'checkout'"
                    content="event_busy"
                    (click)="checkout()"
                    [class.invisible]="
                        !visitor?.is_external || visitor?.organizer
                    "
                >
                </action-icon>
                <a
                    [href]="'mailto:' + visitor?.email"
                    icon
                    matRipple
                    [matTooltip]="
                        visitor?.organizer ? 'Email Host' : 'Email Guest'
                    "
                >
                    <app-icon>email</app-icon>
                </a>
                <action-icon
                    matTooltip="Print QR Code"
                    [loading]="loading === 'printing'"
                    content="event_busy"
                    (click)="printQRCode()"
                    [class.invisible]="!can_print"
                >
                </action-icon>
            </div>
            <div class="w-14 p-2"></div>
            <div
                qr-code
                *ngIf="show_qr_code"
                class="print-only fixed inset-0 flex flex-col justify-center bg-white space-y-2"
            >
                <h2>{{ visitor?.name || visitor?.email }}</h2>
                <div>
                    <span>Host:</span>
                    {{
                        event?.organiser?.name ||
                            event?.organiser?.name ||
                            event?.creator
                    }}
                </div>
                <div><span>Purpose:</span> {{ event?.title }}</div>
                <div>
                    <span>Location:</span>
                    {{ event?.location || '&lt;Unspecified&gt;' }}
                </div>
                <div>
                    <span>Issue Date:</span> {{ today | date: 'mediumDate' }}
                </div>
                <div class="flex justify-center">
                    <img
                        [src]="visitor?.extension_data?.qr?.code || ''"
                        alt="qr-code"
                    />
                </div>
            </div>
        </ng-container>
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
export class VisitorDetailsComponent extends AsyncHandler implements OnChanges {
    @Input() public event: CalendarEvent;
    @Input() public visitor: User;
    @Output() public eventChange = new EventEmitter<CalendarEvent>();

    public show_attendees: boolean;
    public loading: string;
    public show_qr_code: boolean;

    public readonly checkin = async () => {
        this.loading = 'checkin';
        this.event = await this._state
            .checkGuestIn(this.event, this.visitor)
            .catch((e) => this.event);
        this.eventChange.emit(this.event);
        this.loading = '';
    };

    public readonly toggleRemote = async () => {
        this.loading = 'remote';
        const remote_list =
            this.event.ext('remote')?.filter((e) => e !== this.visitor.email) ||
            [];
        if (!this.remote) {
            remote_list.push(this.visitor.email);
        }
        const new_item = new CalendarEvent({
            ...this.event.toJSON(),
            remote: remote_list,
        }).toJSON();
        this.event = await saveEvent(new_item)
            .toPromise()
            .catch((e) => {
                notifyError(
                    `Error setting visitor status. Error: ${
                        e.statusText || e.message || e
                    }`
                );
                return this.event;
            });
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

    /** Open print dialog for user's QR code */
    public readonly printQRCode = () => {
        this.show_qr_code = true;
        this.timeout(
            'print',
            () => {
                window.print();
                this.show_qr_code = false;
            },
            50
        );
    };

    public get can_print(): boolean {
        return (
            this._settings.get('app.can_print_qr') &&
            this.visitor.checked_in &&
            this.visitor?.extension_data.qr
        );
    }

    public get today(): number {
        return Date.now();
    }

    public get remote(): boolean {
        return !!this.event?.extension_data?.remote?.find(
            (e) => e === this.visitor?.email
        );
    }

    constructor(
        private _state: VisitorsStateService,
        private _settings: SettingsService
    ) {
        super();
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.visitor) this.loadGuest();
    }

    public async loadGuest(tries: number = 0) {
        if (!this.visitor) return;
        this.loading = 'printing';
        if (this.visitor.checked_in) {
            const guest = await showGuest(this.visitor.email)
                .toPromise()
                .catch((_) => null);
            if (!guest?.extension_data?.qr?.code && tries < 5) {
                this.timeout('load_guest', () => this.loadGuest(++tries), 1000);
            } else this.loading = '';
        } else this.loading = '';
    }
}
