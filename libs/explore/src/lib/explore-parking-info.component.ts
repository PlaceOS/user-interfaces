import { AsyncPipe } from '@angular/common';
import { Component, computed, ElementRef, inject, signal } from '@angular/core';
import { settingSignal, SettingsService } from '@placeos/common';
import { UserPipe } from '@placeos/users';
import { ParkingSpace } from 'libs/bookings/src/lib/parking.service';
import { MAP_FEATURE_DATA } from 'libs/common/src/lib/types';
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
            class="bg-base-300 absolute top-1/2 left-1/2 rounded-lg rounded-tl-none! p-2 text-left shadow-sm"
            [class.bg-error!]="show_status_details() && status() === 'busy'"
            [class.text-error-content!]="
                show_status_details() && status() === 'busy'
            "
            [class.bg-warning!]="
                show_status_details() && status() === 'reserved'
            "
            [class.text-warning-content!]="
                show_status_details() && status() === 'reserved'
            "
            [class.bg-success!]="show_status_details() && status() === 'free'"
            [class.text-success-content!]="
                show_status_details() && status() === 'free'
            "
            [class.bg-neutral!]="
                show_status_details() && status() === 'not-bookable'
            "
            [class.text-neutral-content!]="
                show_status_details() && status() === 'not-bookable'
            "
        >
            <div class="triangle absolute top-0.5 left-0.5"></div>
            <div class="flex space-x-2">
                <div class="flex min-w-24 flex-col pl-1 leading-tight">
                    <div class="whitespace-nowrap">{{ name() }}</div>
                    @if (show_status_details()) {
                        <div class="text-sm font-medium capitalize">
                            {{
                                status() === 'not-bookable'
                                    ? ('COMMON.STATUS_NOT_BOOKABLE' | translate)
                                    : status()
                            }}
                        </div>
                        @if (show_parking_users() && user()) {
                            <div class="text-sm">
                                {{ (user() | user | async)?.name || user() }}
                            </div>
                        }
                    }
                </div>
                @if (
                    show_status_details() && is_concierge() && plate_number()
                ) {
                    <div
                        class="bg-base-100 text-base-content relative flex h-full flex-col rounded-sm px-2 leading-tight shadow-sm"
                    >
                        <div
                            class="w-full pt-1 text-center text-[0.625rem] font-medium whitespace-nowrap"
                        >
                            {{ 'BOOKINGS.PARKING_PLATE_NUMBER' | translate }}
                        </div>
                        <div
                            class="w-full pb-1 text-center font-mono uppercase"
                        >
                            {{ plate_number() || 'PLATE NO 1' }}
                        </div>
                    </div>
                }
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
    imports: [AsyncPipe, TranslatePipe, UserPipe],
})
export class ExploreParkingInfoComponent {
    private _data = inject<ParkingSpaceExtended>(MAP_FEATURE_DATA);
    private _element = inject<ElementRef<HTMLDivElement>>(ElementRef);
    private _settings = inject(SettingsService);

    public readonly status = computed(() =>
        this._data.assigned_to === this._data.user && this._data.user
            ? 'reserved'
            : this._data.status,
    );
    public readonly user = signal(this._data.user);
    public readonly name = signal(this._data.name || this._data.identifier);
    public readonly map_id = signal(this._data.map_id);
    public readonly plate_number = signal(this._data.plate_number);
    public readonly show_parking_users = settingSignal(
        'parking.show_users',
        false,
    );
    public readonly show_status_details = settingSignal(
        'parking.show_status_details',
        true,
    );

    public readonly is_concierge = computed(() =>
        this._settings.app_name.toLowerCase().includes('concierge'),
    );
}
