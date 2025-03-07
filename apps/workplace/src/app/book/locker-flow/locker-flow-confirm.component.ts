import { Component, Input, Optional } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { BookingAsset, BookingFormService } from '@placeos/bookings';
import { AsyncHandler, SettingsService, notifyError } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { take } from 'rxjs/operators';

@Component({
    selector: 'locker-flow-confirm',
    template: `
        <header
            class="m-2 flex h-12 items-center justify-between rounded bg-base-200 p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'APP.WORKPLACE.LOCKER_CONFIRM_TITLE' | translate }}
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
                    <app-icon class="text-2xl">close</app-icon>
                </button>
            </div>
        </header>
        <section period class="flex space-x-1 px-2 py-4">
            <app-icon class="text-2xl text-success">done</app-icon>
            <div details class="space-y-2 text-base">
                <h3 class="text-xl">{{ booking.title || '~Untitled~' }}</h3>
                <div class="flex items-center space-x-2">
                    <app-icon class="text-xl">calendar_today</app-icon>
                    <div date>{{ booking.date | date: 'fullDate' }}</div>
                </div>
                <div class="flex items-center space-x-2">
                    <app-icon class="text-xl">schedule</app-icon>
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
            <app-icon class="text-2xl text-success">done</app-icon>
            <div details class="space-y-2 text-base">
                <h3 class="text-xl">
                    {{ booking_asset?.name || booking_asset?.id || '' }}
                </h3>
                <div class="flex items-center space-x-2">
                    <app-icon>person</app-icon>
                    <span>{{ 'RESOURCE.LOCKER' | translate }}</span>
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
        <footer class="mt-4 w-full border-t border-base-200 p-2">
            <button
                name="confirm-locker"
                btn
                matRipple
                class="w-full"
                *ngIf="!(loading | async)"
                (click)="postForm()"
            >
                {{ 'COMMON.CONFIRM' | translate }}
            </button>
        </footer>
    `,
    styles: [``],
    standalone: false,
})
export class BookLockerFlowConfirmComponent extends AsyncHandler {
    @Input() public show_close = false;

    public readonly loading = this._state.loading;

    public readonly postForm = async () => {
        try {
            if ((await this._state.options.pipe(take(1)).toPromise())?.group) {
                await this._state.postFormForGroup();
            } else {
                await this._state.postForm();
            }
            this.dismiss(true);
        } catch (e) {
            notifyError(e);
        }
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
        return this.booking.booking_asset as BookingAsset;
    }

    public get location() {
        const building = this._org.buildings.find((b) =>
            this.booking.zones.includes(b.id),
        );
        const level = this._org.levelWithID((this.booking_asset as any).zones);
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
