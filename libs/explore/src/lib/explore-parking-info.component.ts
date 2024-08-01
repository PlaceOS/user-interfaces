import { Component, ElementRef, Inject } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { MAP_FEATURE_DATA } from '@placeos/components';
import { ParkingSpace } from 'libs/bookings/src/lib/parking.service';
import { User } from 'libs/users/src/lib/user.class';

interface ParkingSpaceExtended extends ParkingSpace {
    user: string;
    status: string;
    plate_number: string;
}

@Component({
    selector: 'explore-parking-info',
    template: `
        <div
            class="absolute bg-base-300 p-2 rounded-lg !rounded-tl-none shadow top-1/2 left-1/2 text-left"
            [class.!bg-error]="status === 'busy'"
            [class.!text-error-content]="status === 'busy'"
            [class.!bg-warning]="status === 'reserved'"
            [class.!text-warning-content]="status === 'reserved'"
            [class.!bg-success]="status === 'free'"
            [class.!text-success-content]="status === 'free'"
        >
            <div class="absolute top-0.5 left-0.5 triangle"></div>
            <div class="flex space-x-2">
                <div class="flex flex-col leading-tight min-w-24 pl-1">
                    <div class="whitespace-nowrap">{{ name }}</div>
                    <div class="capitalize text-sm font-medium">
                        {{ status }}
                    </div>
                </div>
                <div
                    class="flex flex-col relative h-full px-2 rounded bg-base-100 text-base-content shadow leading-tight"
                    *ngIf="is_concierge && plate_number"
                >
                    <div
                        class="text-[0.625rem] w-full text-center pt-1 whitespace-nowrap font-medium"
                    >
                        Plate Number
                    </div>
                    <div class="font-mono pb-1 w-full text-center">
                        {{ plate_number || 'ABC3' }}
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            .triangle {
                width: 0px;
                height: 0px;
                border-style: solid;
                border-width: 0.5rem 0.5rem 0 0;
                border-color: currentColor transparent transparent transparent;
                transform: rotate(0deg);
            }
        `,
    ],
})
export class ExploreParkingInfoComponent {
    public readonly status =
        this._data.assigned_to === this._data.user && this._data.user
            ? 'reserved'
            : this._data.status;
    public readonly user = this._data.user;
    public readonly name = this._data.name;
    public readonly map_id = this._data.map_id;
    public readonly plate_number = this._data.plate_number;

    public get is_concierge() {
        return this._settings.app_name.toLowerCase().includes('concierge');
    }

    constructor(
        @Inject(MAP_FEATURE_DATA) private _data: ParkingSpaceExtended,
        private _element: ElementRef<HTMLDivElement>,
        private _settings: SettingsService,
    ) {}
}
