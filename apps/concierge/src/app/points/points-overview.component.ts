import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'points-overview',
    template: `
        <h2
            class="px-4 py-3 bg-secondary text-white w-full rounded font-medium text-lg shadow"
        >
            Point Overview
        </h2>
        <section class="bg-base-100 w-full">
            <h2 class="p-2 underline font-medium text-lg">Point Value</h2>
            <div class="flex items-center space-x-2 p-4 mb-4">
                <span>1 point =</span>
                <a-counter
                    [step]="0.1"
                    [(ngModel)]="points.value"
                    (ngModelChange)="storePoints()"
                    [render_fn]="renderPrice"
                ></a-counter>
                <app-icon matTooltip="Set point redemption caps on menu items">
                    info
                </app-icon>
            </div>
        </section>
        <section class="bg-base-100 w-full flex-1">
            <h2 class="p-2 underline font-medium text-lg">Automatic Rewards</h2>
            <div class="p-4">
                <div
                    class="flex items-center space-x-2 p-2 border-b border-base-200"
                >
                    <a-counter
                        [(ngModel)]="points.desk_checkin"
                        (ngModelChange)="storePoints()"
                    ></a-counter>
                    <span>Points for desk check-in</span>
                </div>
                <div
                    class="flex items-center space-x-2 p-2 border-b border-base-200"
                >
                    <a-counter
                        [(ngModel)]="points.room_checkin"
                        (ngModelChange)="storePoints()"
                    ></a-counter>
                    <span>Points for room check-in</span>
                </div>
                <div
                    class="flex items-center space-x-2 p-2 border-b border-base-200"
                >
                    <a-counter
                        [(ngModel)]="points.booking_cancel"
                        (ngModelChange)="storePoints()"
                    ></a-counter>
                    <span
                        >Points for booking cancellation with 24 hour
                        notice</span
                    >
                </div>
                <div class="flex items-center space-x-2 p-2 ">
                    <a-counter
                        [(ngModel)]="points.wellness_card"
                        (ngModelChange)="storePoints()"
                    ></a-counter>
                    <span>Points for completing wellness card</span>
                </div>
            </div>
        </section>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
            }
        `,
    ],
})
export class PointsOverviewComponent implements OnInit {
    public points = {
        value: 0.1,
        desk_checkin: 2,
        room_checkin: 2,
        booking_cancel: 3,
        wellness_card: 1,
    };

    public ngOnInit() {
        this.loadPoints();
    }

    public renderPrice(value: number = 0) {
        return `$${value?.toFixed(2)}`;
    }

    public loadPoints() {
        this.points = {
            ...this.points,
            ...JSON.parse(
                localStorage.getItem('PLACEOS.point_details') || '{}'
            ),
        };
    }

    public storePoints() {
        localStorage.setItem(
            'PLACEOS.point_details',
            JSON.stringify(this.points)
        );
    }
}
