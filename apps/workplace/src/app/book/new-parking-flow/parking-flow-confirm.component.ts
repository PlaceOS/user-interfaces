import { Component, Input, Optional } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { BookingFormService } from '@placeos/bookings';
import { AsyncHandler, SettingsService, notifyError } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: 'new-parking-flow-confirm',
    template: ` <button
            close
            icon
            matRipple
            *ngIf="show_close"
            (click)="dismiss()"
        >
            <app-icon>close</app-icon>
        </button>
        <header class="flex items-center justify-between px-2">
            <h2 class="text-2xl font-medium mb-2" i18n>
                Confirm Parking Reservation
            </h2>
            <mat-spinner diameter="32" *ngIf="loading | async"></mat-spinner>
        </header>
        <section period class="flex space-x-1 py-4 px-2">
            <app-icon class="text-success">done</app-icon>
            <div details class="leading-6">
                <h3>{{ booking.title || '~Untitled~' }}</h3>
                <div class="flex items-center space-x-2">
                    <app-icon>calendar_today</app-icon>
                    <div date>{{ booking.date | date: 'fullDate' }}</div>
                </div>
                <div class="flex items-center space-x-2">
                    <app-icon>schedule</app-icon>
                    <div time>
                        {{
                            booking.all_day
                                ? 'All Day'
                                : (booking.date | date: time_format) +
                                  ' - ' +
                                  (booking.date + booking.duration * 60 * 1000
                                      | date: time_format + ' (z)')
                        }}
                    </div>
                </div>
            </div>
        </section>
        <section
            resource
            class="flex space-x-1 py-4 px-2 border-t"
            *ngIf="booking_asset?.id"
        >
            <app-icon class="text-success">done</app-icon>
            <div details class="leading-6">
                <h3 name>
                    {{ booking_asset?.name || booking_asset?.id || '' }}
                </h3>
                <div class="flex items-center space-x-2">
                    <app-icon>person</app-icon>
                    <span i18n>Car Park</span>
                </div>
                <div class="flex items-center space-x-2">
                    <app-icon>place</app-icon>
                    <div>{{ location }}</div>
                </div>
                <ng-container *ngFor="let feat of booking_asset.features">
                    <div features class="flex items-center space-x-2">
                        <app-icon>arrow_upward</app-icon>
                        <div>{{ feat }}</div>
                    </div>
                </ng-container>
            </div>
        </section>
        <section
            assets
            class="flex space-x-1 py-4 px-2 border-t"
            *ngIf="assets?.length"
        >
            <app-icon class="text-success">done</app-icon>
            <div details class="leading-6">
                <h3 i18n>{{ assets_count }} Asset(s)</h3>
                <div class="flex space-x-2" *ngFor="let asset of assets">
                    <div class="h-5 w-5 bg-base-200 rounded-full">
                        {{ asset.amount }}
                    </div>
                    <span>{{ asset.name }}</span>
                </div>
            </div>
        </section>
        <footer class="p-2 w-full border-t border-base-200 mt-4">
            <button
                confirm
                btn
                matRipple
                class="w-full"
                *ngIf="!(loading | async)"
                (click)="postForm()"
                i18n
            >
                Confirm
            </button>
        </footer>`,
    styles: [
        `
            section > app-icon {
                font-size: 1.5rem;
                margin-top: 0.3rem;
            }

            h3 {
                font-size: 1.25rem;
                font-weight: medium;
                margin: 0.5rem 0;
            }
        `,
    ],
})
export class NewParkingFlowConfirmComponent extends AsyncHandler {
    @Input() public show_close: boolean = false;

    public readonly loading = this._state.loading;

    public readonly postForm = async () => {
        await this._state.postForm().catch((_) => {
            notifyError(`Unable to complete booking. ${_}`);
            throw _;
        });
        this.dismiss(true);
    };
    public readonly dismiss = (e?) => this._sheet_ref?.dismiss(e);

    public get time_format() {
        return this._settings.time_format;
    }

    public get booking() {
        return this._state.form.value as any;
    }

    public get assets() {
        return this.booking.assets || null;
    }

    public get assets_count() {
        return this.assets?.length
            ? this.assets.reduce((a, b) => a + b.amount, 0)
            : 0;
    }

    public get booking_asset() {
        return this.booking.booking_asset;
    }

    public get location() {
        const building = this._org.buildings.find(
            (b) => b.id === this.booking_asset?.zone?.parent_id
        );
        const level = this._org.levels.find(
            (l) => l.id === this.booking_asset?.zone?.id
        );
        return `${level?.display_name || level?.name}${building ? ',' : ''} ${
            building?.address || building?.display_name || building?.name || ''
        }`;
    }

    constructor(
        private _state: BookingFormService,
        private _org: OrganisationService,
        @Optional() private _sheet_ref: MatBottomSheetRef,
        private _settings: SettingsService
    ) {
        super();
    }
}
