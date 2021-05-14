import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseClass, HashMap } from '@placeos/common';
import { CalendarEvent } from '@placeos/events';
import { currentBooking } from './panel/panel-state.service';

@Component({
    selector: 'app-booking-panel-select',
    template: `
        <div
            class="absolute inset-0 flex items-center justify-center flex-wrap"
            (window:mousedown)="reset()"
            (window:touchstart)="reset()"
        >
            <div class="panel-options">
                <ng-container *ngIf="systems && systems.length > 0; else none">
                    <div
                        class="item"
                        *ngFor="let id of systems | slice: 0:8; let i = index"
                        (click)="system_name[id] ? showPanel(id) : ''"
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
                                bind="today"
                                (modelChange)="updateStatus(id, $event)"
                            ></i>
                        </div>
                        <div
                            [class]="
                                'icon' +
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
                        <div class="text">
                            {{ system_name[id] || id + ' connecting...' }}
                        </div>
                    </div>
                </ng-container>
            </div>
            <div class="panel-outlet" *ngIf="active_system">
                <app-booking-panel
                    [system_id]="active_system"
                ></app-booking-panel>
                <div class="overlay">
                    <button
                        widget
                        class="action close"
                        (click)="close()"
                        (contextmenu)="$event.preventDefault()"
                    >
                        <div class="icon">
                            <i class="material-icons">close</i>
                        </div>
                    </button>
                    <button
                        widget
                        class="action countdown"
                        (contextmenu)="$event.preventDefault()"
                    >
                        {{ countdown }}
                    </button>
                </div>
            </div>
            <ng-template #none>
                <div class="info-block">
                    <div class="text">
                        No systems are set for displaying on the panel select
                        list
                    </div>
                </div>
            </ng-template>
        </div>
    `,
    styles: [
        `
            .panel-select {
                flex-wrap: wrap;
                background-color: #121212;
            }

            .panel-outlet {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                border: 1px solid #fff;
            }

            .panel-options {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;
                width: 100%;
                height: 100%;
                padding: 2em;
            }

            .item {
                display: flex;
                align-items: center;
                flex-direction: column;
                margin: 0.5em;
                height: 11.5em;
                width: 10em;
                background-color: var(--bg-dark);
                box-shadow: 0 1px 3px 0 rgba(#000, 0.2),
                    0 1px 1px 0 rgba(#000, 0.14),
                    0 2px 1px -1px rgba(#000, 0.12);
                padding: 0.5em;
                border-radius: 4px;

                .icon {
                    font-size: 7.5em;
                    background-color: rgba(#fff, 0.05);
                    border-radius: 8px;

                    &.available {
                        background-color: rgba(var(--success), 0.6);
                    }

                    &.unavailable {
                        background-color: rgba(var(--error), 0.6);
                    }

                    a-spinner {
                        font-size: 0.1em;
                    }
                }
            }

            .icon {
                height: 1.2em;
                width: 1.2em;
                display: flex;
                align-items: center;
                justify-content: center;

                img {
                    max-width: 1em;
                    max-height: 1em;
                }
            }

            .text {
                font-size: 0.8em;
                color: #fff;
                padding: 0.75em;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 100%;
            }

            .overlay {
                position: absolute;
                top: 0.5em;
                left: 1.25em;
                display: flex;
                align-items: center;
            }
        `,
    ],
})
export class BookingPanelSelectComponent extends BaseClass implements OnInit {
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
            bookings.map((i) => new CalendarEvent(i))
        );
        this.system_status[id] = current ? 'available' : 'unavailable';
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
