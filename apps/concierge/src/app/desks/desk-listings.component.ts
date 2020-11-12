import { Component } from '@angular/core';

import { DesksStateService } from './desks-state.service';

@Component({
    selector: 'desk-listings',
    template: `
        <div
            details
            class="w-full bg-gray-900 text-white flex items-center px-2"
        >
            <div class="flex-1 w-0"></div>
            <div class="p-2">
                Requests: {{ (bookings | async)?.length || '0' }}
            </div>
            <div class="px-8">
                Free Desks:
                {{
                    ((desks | async)?.length || 0) -
                        ((bookings | async)?.length || 0)
                }}
            </div>
            <button mat-icon-button [matMenuTriggerFor]="menu">
                <app-icon className="material-icons">more_vert</app-icon>
            </button>
        </div>
        <div class="w-full flex-1 text-sm">
            <div
                class="w-full flex items-center bg-white border-b border-gray-500 p-2 font-medium"
            >
                <div class="w-32 p-2">Person</div>
                <div class="w-32 p-2">LoS</div>
                <div class="w-24 p-2">Date</div>
                <div flex class="p-2 flex-1">Desk</div>
                <div class="w-24 p-2">Status</div>
                <div class="w-32 p-2">Approver</div>
                <div class="w-32 p-2">Checked In</div>
                <div class="w-32 p-2"></div>
            </div>
            <div class="w-full flex-1 overflow-auto">
                <ng-container
                    *ngIf="(bookings | async)?.length; else empty_state"
                >
                    <desk-details
                        *ngFor="let desk of bookings | async"
                        [desk]="desk"
                    ></desk-details>
                </ng-container>
            </div>
        </div>
        <ng-template #empty_state>
            <div class="h-full w-full flex items-center justify-center">
                <p class="p-8">
                    There are no desks for the currently selected date.
                </p>
            </div>
        </ng-template>
        <mat-menu #menu="matMenu">
            <button mat-menu-item (click)="updateDesks()">
                <div class="flex items-center">
                    <app-icon className="material-icons">edit</app-icon>
                    <span class="pl-2">Edit Desks</span>
                </div>
            </button>
            <button mat-menu-item (click)="rejectAll()">
                <div class="flex items-center">
                    <app-icon className="material-icons">event_busy</app-icon>
                    <span class="pl-2">Reject All</span>
                </div>
            </button>
        </mat-menu>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
                overflow: hidden;
            }

            [details] {
                height: 3.5rem;
            }

            [flex] {
                min-width: 8rem;
            }
        `,
    ],
})
export class DeskListingsComponent {
    public readonly desks = this._state.desks;

    public readonly bookings = this._state.bookings;

    public readonly rejectAll = () => this._state.rejectAllDesks();
    public readonly updateDesks = () => this._state.updateDesks();

    constructor(private _state: DesksStateService) {}
}
