import { Component, Inject } from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import { MAP_FEATURE_DATA } from '@placeos/components';

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
            class="pointer-events-auto absolute left-1/2 top-1/2 h-7 w-7 min-w-0 -translate-x-1/2 -translate-y-1/2 bg-base-100 shadow"
        >
            <app-icon> visibility </app-icon>
        </button>
        <ng-template #stats>
            <div
                class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-base-200 bg-base-100 p-2 text-xl"
            >
                <div
                    class="flex items-center space-x-2 whitespace-nowrap pr-2"
                    *ngIf="temp"
                >
                    <app-icon>thermostat</app-icon>
                    <div class="">{{ temp }}˚{{ temp_unit }}</div>
                </div>
                <div
                    class="flex items-center space-x-2 whitespace-nowrap pr-2"
                    *ngIf="humidity"
                >
                    <app-icon>opacity</app-icon>
                    <div class="">{{ humidity }}%</div>
                </div>
                <div
                    *ngIf="temp > 82"
                    class="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 rounded-full border border-base-200 bg-base-100"
                >
                    <app-icon class="text-xl text-error">error</app-icon>
                </div>
            </div>
        </ng-template>
    `,
    styles: [``],
    standalone: false,
})
export class ExploreSensorInfoComponent extends AsyncHandler {
    public readonly temp = this._details.temp || 0;
    public readonly temp_unit = this._details.temp_unit || 'C';
    public readonly humidity = this._details.humidity || 0;

    public get show() {
        return shown_id === this._details.id;
    }

    public set show(value: boolean) {
        this.timeout('show', () => (shown_id = value ? this._details.id : ''));
    }

    constructor(@Inject(MAP_FEATURE_DATA) private _details: SensorInfoData) {
        super();
    }
}
