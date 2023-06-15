import { Component } from '@angular/core';

@Component({
    selector: 'room-bookings-approvals',
    template: `
        <div
            class="flex flex-col h-full overflow-hidden border-l border-gray-200"
            [style.width]="show ? '' : '0px'"
        >
            <div
                class="flex items-center p-2 border-b border-gray-200 space-x-2"
            >
                <button
                    btn
                    icon
                    matRipple
                    class="bg-gray-200"
                    (click)="show = !show"
                >
                    <app-icon>chevron_right</app-icon>
                </button>
                <h3 class="flex-1">
                    Pending Approval ({{ approvals.length || '0' }})
                </h3>
                <button btn icon matRipple>
                    <app-icon>search</app-icon>
                </button>
            </div>
            <div class="flex-1 overflow-auto"></div>
        </div>
        <button
            btn
            icon
            matRipple
            class="bg-pending absolute top-2 -left-8 shadow text-white"
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
    public readonly approvals = [];
}
