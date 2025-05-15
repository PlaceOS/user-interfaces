import { Component, Input, Optional } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { BookingFormService } from '@placeos/bookings';
import { AsyncHandler, SettingsService, notifyError } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: 'parking-flow-confirm',
    template: ` <header
            class="m-2 flex h-12 items-center justify-between rounded bg-base-200 p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'APP.WORKPLACE.PARKING_CONFIRM_TITLE' | translate }}
            </h2>
            <div class="">
                <mat-spinner
                    diameter="32"
                    *ngIf="loading | async"
                ></mat-spinner>
                <button
                    icon
                    name="close-locker-confirm"
                    matRipple
                    *ngIf="show_close"
                    (click)="dismiss()"
                >
                    <icon class="text-2xl">close</icon>
                </button>
            </div>
        </header>
        <section period class="flex space-x-1 px-2 py-4 text-base">
            <icon class="text-2xl text-success">done</icon>
            <div details class="space-y-2 text-base">
                <h3 class="text-xl">{{ booking.title || '~Untitled~' }}</h3>
                <div class="flex items-center space-x-2">
                    <icon>calendar_today</icon>
                    <div date>{{ booking.date | date: 'fullDate' }}</div>
                </div>
                <div class="flex items-center space-x-2">
                    <icon>schedule</icon>
                    <div time>
                        {{
                            booking.all_day
                                ? ('COMMON.ALL_DAY' | translate)
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
            class="flex space-x-1 border-t px-2 py-4 text-base"
            *ngIf="booking_asset?.id"
        >
            <icon class="text-2xl text-success">done</icon>
            <div details class="space-y-2 text-base">
                <h3 class="text-xl">
                    {{ booking_asset?.name || booking_asset?.id || '' }}
                </h3>
                <div class="flex items-center space-x-2">
                    <icon>person</icon>
                    <span>{{ 'RESOURCE.PARKING_SPACE' | translate }}</span>
                </div>
                <div class="flex items-center space-x-2">
                    <icon>place</icon>
                    <div>{{ location }}</div>
                </div>
                <ng-container *ngFor="let feat of booking_asset.features">
                    <div features class="flex items-center space-x-2">
                        <icon>arrow_upward</icon>
                        <div>{{ feat }}</div>
                    </div>
                </ng-container>
            </div>
        </section>
        <footer class="mt-4 w-full border-t border-base-200 p-2">
            <button
                confirm
                btn
                matRipple
                class="w-full"
                *ngIf="!(loading | async)"
                (click)="postForm()"
            >
                {{ 'COMMON.CONFIRM' | translate }}
            </button>
        </footer>`,
    styles: [
        `
            section > icon {
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
    standalone: false,
})
export class NewParkingFlowConfirmComponent extends AsyncHandler {
    @Input() public show_close: boolean = false;

    public readonly loading = this._state.loading;

    public readonly postForm = async () => {
        const r = await this._state.postForm().catch((_) => {
            notifyError(`Unable to complete booking. ${_}`);
        });
        if (!r) return;
        this.dismiss(true);
    };
    public readonly dismiss = (e?) => this._sheet_ref?.dismiss(e);

    public get time_format() {
        return this._settings.time_format;
    }

    public get booking() {
        return this._state.form.getRawValue() as any;
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
            (b) => b.id === this.booking_asset?.zone?.parent_id,
        );
        const level = this._org.levels.find(
            (l) => l.id === this.booking_asset?.zone?.id,
        );
        return `${level?.display_name || level?.name}${building ? ',' : ''} ${
            building?.address || building?.display_name || building?.name || ''
        }`;
    }

    constructor(
        private _state: BookingFormService,
        private _org: OrganisationService,
        @Optional() private _sheet_ref: MatBottomSheetRef,
        private _settings: SettingsService,
    ) {
        super();
    }
}
