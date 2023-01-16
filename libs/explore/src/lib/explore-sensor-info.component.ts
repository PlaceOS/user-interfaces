import { Component, Inject } from '@angular/core';
import { MAP_FEATURE_DATA } from '@placeos/components';

export interface SensorInfoData {
    temp: string;
    humidity: number;
}

@Component({
    selector: 'explore-sensor-info',
    template: `
        <div class="absolute center bg-white rounded-lg border border-gray-300 p-2 text-xl">
            <div class="flex items-center space-x-2 whitespace-nowrap pr-2" *ngIf="temp">
                <app-icon>thermostat</app-icon>
                <div class="">{{ temp }}˚F</div>
            </div>
            <div class="flex items-center space-x-2 whitespace-nowrap pr-2" *ngIf="humidity">
                <app-icon>opacity</app-icon>
                <div class="">{{ humidity }}%</div>
            </div>
            <div *ngIf="temp > 82" class="absolute top-0 right-0 rounded-full translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300">
                <app-icon class="text-error text-xl">error</app-icon>
            </div>
        </div>
    `,
    styles: [``],
})
export class ExploreSensorInfoComponent {

    public readonly temp = this._details.temp || 0;
    public readonly humidity = this._details.humidity || 0;

    constructor(@Inject(MAP_FEATURE_DATA) private _details: SensorInfoData) {}
}
