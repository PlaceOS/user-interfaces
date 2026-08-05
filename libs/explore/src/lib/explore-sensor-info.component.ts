import { Component, computed, inject, signal } from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import { MAP_FEATURE_DATA } from 'libs/common/src/lib/types';
import { CustomTooltipComponent } from 'libs/components/src/lib/custom-tooltip.component';
import { IconComponent } from 'libs/components/src/lib/icon.component';

export interface SensorInfoData {
    id: string;
    temp: number;
    temp_unit: string;
    humidity: number;
}

let shown_id = '';

@Component({
    selector: 'explore-sensor-info',
    template: `
        <button
            icon
            matRipple
            customTooltip
            [content]="stats"
            yPosition="center"
            xPosition="center"
            class="bg-base-100 pointer-events-auto absolute top-1/2 left-1/2 h-7 w-7 min-w-0 -translate-x-1/2 -translate-y-1/2 shadow-sm"
            (pointerdown)="$event.stopPropagation()"
            (pointerup)="$event.stopPropagation()"
            (click)="$event.stopPropagation()"
        >
            <icon> visibility </icon>
        </button>
        <ng-template #stats>
            <div
                class="border-base-200 bg-base-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg border p-2 text-xl"
            >
                @if (temp()) {
                    <div
                        class="flex items-center space-x-2 pr-2 whitespace-nowrap"
                    >
                        <icon>thermostat</icon>
                        <div class="">{{ temp() }}˚{{ temp_unit() }}</div>
                    </div>
                }
                @if (humidity()) {
                    <div
                        class="flex items-center space-x-2 pr-2 whitespace-nowrap"
                    >
                        <icon>opacity</icon>
                        <div class="">{{ humidity() }}%</div>
                    </div>
                }
                @if (temp() > 82) {
                    <div
                        class="border-base-200 bg-base-100 absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full border"
                    >
                        <icon class="text-error text-xl">error</icon>
                    </div>
                }
            </div>
        </ng-template>
    `,
    styles: [``],
    imports: [CustomTooltipComponent, IconComponent],
})
export class ExploreSensorInfoComponent extends AsyncHandler {
    private _details = inject<SensorInfoData>(MAP_FEATURE_DATA);

    public readonly temp = signal(this._details.temp || 0);
    public readonly temp_unit = signal(this._details.temp_unit || 'C');
    public readonly humidity = signal(this._details.humidity || 0);

    public readonly show = computed(() => shown_id === this._details.id);

    public readonly setShow = (value: boolean) => {
        this.timeout('show', () => (shown_id = value ? this._details.id : ''));
    };

    constructor() {
        super();
    }
}
