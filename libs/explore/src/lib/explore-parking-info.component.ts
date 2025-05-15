import { CommonModule } from '@angular/common';
import { Component, ElementRef, Inject } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { ParkingSpace } from 'libs/bookings/src/lib/parking.service';
import { MAP_FEATURE_DATA } from 'libs/components/src/lib/interactive-map.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';

interface ParkingSpaceExtended extends ParkingSpace {
    user: string;
    status: string;
    plate_number: string;
}

@Component({
    selector: 'explore-parking-info',
    template: `
        <div
            class="absolute left-1/2 top-1/2 rounded-lg !rounded-tl-none bg-base-300 p-2 text-left shadow"
            [class.!bg-error]="status === 'busy'"
            [class.!text-error-content]="status === 'busy'"
            [class.!bg-warning]="status === 'reserved'"
            [class.!text-warning-content]="status === 'reserved'"
            [class.!bg-success]="status === 'free'"
            [class.!text-success-content]="status === 'free'"
        >
            <div class="triangle absolute left-0.5 top-0.5"></div>
            <div class="flex space-x-2">
                <div class="flex min-w-24 flex-col pl-1 leading-tight">
                    <div class="whitespace-nowrap">{{ name }}</div>
                    <div class="text-sm font-medium capitalize">
                        {{ status }}
                    </div>
                </div>
                <div
                    class="relative flex h-full flex-col rounded bg-base-100 px-2 leading-tight text-base-content shadow"
                    *ngIf="is_concierge && plate_number"
                >
                    <div
                        class="w-full whitespace-nowrap pt-1 text-center text-[0.625rem] font-medium"
                    >
                        {{ 'EXPLORE.PARKING_PLATE_NUMBER' | translate }}
                    </div>
                    <div class="w-full pb-1 text-center font-mono uppercase">
                        {{ plate_number || 'PLATE NO 1' }}
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
    imports: [CommonModule, TranslatePipe],
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
