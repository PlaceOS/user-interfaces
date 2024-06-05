import { Component, ElementRef, Inject } from '@angular/core';
import { MAP_FEATURE_DATA } from '@placeos/components';
import { ParkingSpace } from 'libs/bookings/src/lib/parking.service';
import { User } from 'libs/users/src/lib/user.class';

interface ParkingSpaceExtended extends ParkingSpace {
    user: User;
    status: string;
}

@Component({
    selector: 'explore-parking-info',
    template: `
        <div
            class="absolute bg-base-300 px-3 py-2 rounded-lg !rounded-tl-none shadow top-1/2 left-1/2 text-left"
            [class.!bg-error]="status === 'busy'"
            [class.!text-error-content]="status === 'busy'"
            [class.!bg-warning]="status === 'reserved'"
            [class.!text-warning-content]="status === 'reserved'"
            [class.!bg-success]="status === 'free'"
            [class.!text-success-content]="status === 'free'"
        >
            <div class="absolute top-0.5 left-0.5 triangle"></div>
            <div class="flex flex-col leading-tight min-w-24">
                <div class="whitespace-nowrap">{{ name }}</div>
                <div class="capitalize text-sm font-medium">{{ status }}</div>
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
    public readonly status = this._data.user ? 'reserved' : this._data.status;
    public readonly user = this._data.user;
    public readonly name = this._data.name;
    public readonly map_id = this._data.map_id;

    constructor(
        @Inject(MAP_FEATURE_DATA) private _data: ParkingSpaceExtended,
        private _element: ElementRef<HTMLDivElement>
    ) {}
}
