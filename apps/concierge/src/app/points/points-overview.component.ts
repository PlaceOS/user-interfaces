import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { CounterComponent } from '@placeos/form-fields';

@Component({
    selector: 'points-overview',
    template: `
        <h2
            class="mb-4 w-full rounded border border-base-300 px-4 py-3 text-lg font-medium"
        >
            {{ 'APP.CONCIERGE.POINTS_OVERVIEW_HEADER' | translate }}
        </h2>
        <section class="w-full bg-base-100">
            <h2 class="p-2 text-lg font-medium underline">
                {{ 'APP.CONCIERGE.POINTS_VALUE_HEADER' | translate }}
            </h2>
            <div class="mb-4 flex items-center space-x-2 p-4">
                <span class="font-mono"
                    >{{ 'APP.CONCIERGE.POINTS_ONE_POINT' | translate }} =</span
                >
                <a-counter
                    class="w-48"
                    [step]="0.1"
                    [(ngModel)]="points.value"
                    (ngModelChange)="storePoints()"
                    [render_fn]="renderPrice"
                ></a-counter>
                <icon
                    class="text-2xl"
                    [matTooltip]="'APP.CONCIERGE.POINTS_VALUE_INFO' | translate"
                >
                    info
                </icon>
            </div>
        </section>
        <section class="w-full flex-1 bg-base-100">
            <h2 class="p-2 text-lg font-medium underline">
                {{ 'APP.CONCIERGE.POINTS_AUTO_REWARDS' | translate }}
            </h2>
            <div class="p-4">
                <div
                    class="flex items-center space-x-4 border-b border-base-200 p-2"
                >
                    <a-counter
                        [(ngModel)]="points.desk_checkin"
                        (ngModelChange)="storePoints()"
                    ></a-counter>
                    <span>{{
                        'APP.CONCIERGE.POINTS_REWARD_DESK' | translate
                    }}</span>
                </div>
                <div
                    class="flex items-center space-x-4 border-b border-base-200 p-2"
                >
                    <a-counter
                        [(ngModel)]="points.room_checkin"
                        (ngModelChange)="storePoints()"
                    ></a-counter>
                    <span>{{
                        'APP.CONCIERGE.POINTS_REWARD_ROOM' | translate
                    }}</span>
                </div>
                <div
                    class="flex items-center space-x-4 border-b border-base-200 p-2"
                >
                    <a-counter
                        [(ngModel)]="points.booking_cancel"
                        (ngModelChange)="storePoints()"
                    ></a-counter>
                    <span>{{
                        'APP.CONCIERGE.POINTS_REWARD_CANCEL' | translate
                    }}</span>
                </div>
                <div class="flex items-center space-x-4 p-2">
                    <a-counter
                        [(ngModel)]="points.wellness_card"
                        (ngModelChange)="storePoints()"
                    ></a-counter>
                    <span>{{
                        'APP.CONCIERGE.POINTS_REWARD_WELLNESS' | translate
                    }}</span>
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
    imports: [
        CounterComponent,
        FormsModule,
        TranslatePipe,
        MatTooltipModule,
        IconComponent,
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
                localStorage.getItem('PLACEOS.point_details') || '{}',
            ),
        };
    }

    public storePoints() {
        localStorage.setItem(
            'PLACEOS.point_details',
            JSON.stringify(this.points),
        );
    }
}
