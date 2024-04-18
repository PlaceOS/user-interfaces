import { Component, Inject } from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import { MAP_FEATURE_DATA } from '@placeos/components';

export interface SensorInfoData {
    id: string;
    temp: number;
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
            class="absolute top-1/2 left-1/2 w-7 h-7 min-w-0 -translate-x-1/2 -translate-y-1/2 bg-base-100 shadow pointer-events-auto"
        >
            <app-icon> visibility </app-icon>
        </button>
        <ng-template #stats>
            <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-base-100 rounded-lg border border-base-200 p-2 text-xl"
            >
                <div
                    class="flex items-center space-x-2 whitespace-nowrap pr-2"
                    *ngIf="temp"
                >
                    <app-icon>thermostat</app-icon>
                    <div class="">{{ temp }}˚F</div>
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
                    class="absolute top-0 right-0 rounded-full translate-x-1/2 -translate-y-1/2 bg-base-100 border border-base-200"
                >
                    <app-icon class="text-error text-xl">error</app-icon>
                </div>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class ExploreSensorInfoComponent extends AsyncHandler {
    public readonly temp = this._details.temp || 0;
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
