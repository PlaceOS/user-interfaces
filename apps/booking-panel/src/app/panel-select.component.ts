import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AsyncHandler, HashMap } from '@placeos/common';
import { CalendarEvent } from '@placeos/events';
import { currentBooking } from './panel-state.service';

@Component({
    selector: 'app-booking-panel-select',
    template: `
        <div
            class="absolute inset-0 flex items-center justify-center flex-wrap bg-base-300"
            (window:mousedown)="reset()"
            (window:touchstart)="reset()"
        >
            <div
                class="flex items-center justify-center flex-wrap w-full h-full p-8"
            >
                <ng-container *ngIf="systems && systems.length > 0; else none">
                    <button
                        matRipple
                        class="item text-white flex flex-col items-center justify-center rounded m-2 p-2"
                        *ngFor="let id of systems | slice: 0:8; let i = index"
                        (click)="showPanel(id)"
                    >
                        <div class="bindings" *ngIf="id">
                            <i
                                binding
                                [sys]="id"
                                mod="Bookings"
                                bind="room_name"
                                [(model)]="system_name[id]"
                            ></i>
                            <i
                                binding
                                [sys]="id"
                                mod="Bookings"
                                bind="icon"
                                [(model)]="system_icon[id]"
                            ></i>
                            <i
                                binding
                                [sys]="id"
                                mod="Bookings"
                                bind="status"
                                (modelChange)="system_status[id] = $event"
                            ></i>
                        </div>
                        <div
                            state
                            [class]="
                                'h-36 w-36 flex items-center justify-center text-6xl bg-base-100 bg-opacity-10 rounded' +
                                (system_status[id]
                                    ? ' ' + system_status[id]
                                    : '')
                            "
                        >
                            <img
                                *ngIf="system_name[id]"
                                [src]="system_icon[id]"
                            />
                            <mat-spinner
                                *ngIf="!system_name[id]"
                                [diameter]="32"
                            ></mat-spinner>
                        </div>
                        <div
                            class="truncate text-sm p-3 text-white w-full text"
                        >
                            {{ system_name[id] || id + ' connecting...' }}
                        </div>
                    </button>
                </ng-container>
            </div>
            <div
                class="absolute inset-0 border border-white"
                *ngIf="active_system"
            >
                <app-booking-panel
                    [system_id]="active_system"
                ></app-booking-panel>
                <div
                    class="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center bg-base-100 rounded-b p-2"
                >
                    <button
                        icon
                        matRipple
                        class="action close"
                        (click)="close()"
                        (contextmenu)="$event.preventDefault()"
                    >
                        <app-icon>close</app-icon>
                    </button>
                    <button
                        widget
                        class="action countdown w-12 h-10"
                        (contextmenu)="$event.preventDefault()"
                    >
                        {{ countdown }}
                    </button>
                </div>
            </div>
            <ng-template #none>
                <div class="absolute inset-0 flex items-center justify-center">
                    <p>
                        No systems are set for displaying on the panel select
                        list
                    </p>
                </div>
            </ng-template>
        </div>
    `,
    styles: [
        `
            .item {
                height: 11.5em;
                width: 10em;
                background-color: var(--bg-dark);
                box-shadow: 0 1px 3px 0 rgba(#000, 0.2),
                    0 1px 1px 0 rgba(#000, 0.14),
                    0 2px 1px -1px rgba(#000, 0.12);
            }

            .free {
                background-color: rgba(var(--success), 0.6);
            }

            .busy {
                background-color: rgba(var(--error), 0.6);
            }

            img {
                max-width: 1em;
                max-height: 1em;
            }
        `,
    ],
})
export class BookingPanelSelectComponent
    extends AsyncHandler
    implements OnInit
{
    /** List of systems to show panels for */
    public systems: string[];
    /** Names for the list of systems */
    public system_name: HashMap<string> = {};
    /** Icons for the list of systems */
    public system_icon: HashMap<string> = {};
    /** Status for the list of systems */
    public system_status: HashMap<string> = {};
    /** Active Panel system */
    public active_system: string;
    /** Countdown counter */
    public countdown: number;

    constructor(private route: ActivatedRoute) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'route.query',
            this.route.queryParamMap.subscribe((params) => {
                if (params.has('system_ids')) {
                    this.systems = (params.get('system_ids') || '').split(',');
                }
            })
        );
    }

    /**
     * Show booking panel for the given system ID
     * @param id ID of the system to show
     */
    public showPanel(id: string) {
        this.active_system = id;
        this.reset();
    }

    /**
     * Update the status value for the given system ID
     * @param id ID of the system to update
     * @param bookings List of current bookings for the system
     */
    public updateStatus(id: string, bookings: HashMap[]) {
        const current = currentBooking(
            (bookings || []).map((i) => new CalendarEvent(i))
        );
        this.system_status[id] = current ? 'unavailable' : 'available';
    }

    /**
     * Close the modal
     */
    public close() {
        this.active_system = null;
        this.clearInterval('countdown');
    }

    /**
     * User confirmation of the content of the modal
     */
    public reset() {
        if (this.active_system) {
            this.countdown = 30;
            this.interval('countdown', () => this.tick(), 1000);
        }
    }

    /**
     * Decrement countdown and close if 0
     */
    public tick() {
        if (this.countdown <= 0) {
            this.close();
        }
        this.countdown--;
    }
}
