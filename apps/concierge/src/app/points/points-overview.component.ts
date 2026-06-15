import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { CounterComponent } from '@placeos/form-fields';

@Component({
    selector: 'points-overview',
    template: `
        <h2
            class="border-base-300 mb-4 w-full rounded-sm border px-4 py-3 text-lg font-medium"
        >
            {{ 'APP.CONCIERGE.POINTS_OVERVIEW_HEADER' | translate }}
        </h2>
        <section class="bg-base-100 w-full">
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
                    [ngModel]="points().value"
                    (ngModelChange)="updatePoints('value', $event)"
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
        <section class="bg-base-100 w-full flex-1">
            <h2 class="p-2 text-lg font-medium underline">
                {{ 'APP.CONCIERGE.POINTS_AUTO_REWARDS' | translate }}
            </h2>
            <div class="p-4">
                <div
                    class="border-base-200 flex items-center space-x-4 border-b p-2"
                >
                    <a-counter
                        [ngModel]="points().desk_checkin"
                        (ngModelChange)="updatePoints('desk_checkin', $event)"
                    ></a-counter>
                    <span>{{
                        'APP.CONCIERGE.POINTS_REWARD_DESK' | translate
                    }}</span>
                </div>
                <div
                    class="border-base-200 flex items-center space-x-4 border-b p-2"
                >
                    <a-counter
                        [ngModel]="points().room_checkin"
                        (ngModelChange)="updatePoints('room_checkin', $event)"
                    ></a-counter>
                    <span>{{
                        'APP.CONCIERGE.POINTS_REWARD_ROOM' | translate
                    }}</span>
                </div>
                <div
                    class="border-base-200 flex items-center space-x-4 border-b p-2"
                >
                    <a-counter
                        [ngModel]="points().booking_cancel"
                        (ngModelChange)="updatePoints('booking_cancel', $event)"
                    ></a-counter>
                    <span>{{
                        'APP.CONCIERGE.POINTS_REWARD_CANCEL' | translate
                    }}</span>
                </div>
                <div class="flex items-center space-x-4 p-2">
                    <a-counter
                        [ngModel]="points().wellness_card"
                        (ngModelChange)="updatePoints('wellness_card', $event)"
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
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        CounterComponent,
        FormsModule,
        TranslatePipe,
        MatTooltipModule,
        IconComponent,
    ],
})
export class PointsOverviewComponent {
    public readonly points = signal({
        value: 0.1,
        desk_checkin: 2,
        room_checkin: 2,
        booking_cancel: 3,
        wellness_card: 1,
    });

    constructor() {
        this.loadPoints();
    }

    public renderPrice(value = 0) {
        return `$${value?.toFixed(2)}`;
    }

    public loadPoints() {
        this.points.set({
            ...this.points(),
            ...JSON.parse(
                localStorage.getItem('PLACEOS.point_details') || '{}',
            ),
        });
    }

    public updatePoints(key: string, value: number) {
        this.points.update((points) => ({
            ...points,
            [key]: value,
        }));
        this.storePoints();
    }

    public storePoints() {
        localStorage.setItem(
            'PLACEOS.point_details',
            JSON.stringify(this.points()),
        );
    }
}
