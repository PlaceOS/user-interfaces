import { Component, Input, Optional } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { BookingFormService } from '@placeos/bookings';
import { AsyncHandler, SettingsService, notifyError } from '@placeos/common';
import { Desk, OrganisationService } from '@placeos/organisation';
import { addMinutes, endOfDay } from 'date-fns';
import { map, take } from 'rxjs/operators';

@Component({
    selector: 'new-desk-flow-confirm',
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
    template: `
        <button
            icon
            name="close-desk-confirm"
            matRipple
            class="absolute right-2 top-2 bg-base-200"
            *ngIf="show_close"
            (click)="dismiss()"
        >
            <app-icon>close</app-icon>
        </button>
        <header class="flex items-center justify-between px-4 pt-4">
            <h2 class="text-2xl font-medium mb-2" i18n>Confirm Desk Booking</h2>
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
            desk
            class="flex space-x-1 py-4 px-2 border-t border-neutral"
            *ngIf="booking_asset?.id"
        >
            <app-icon class="text-success">done</app-icon>
            <div details class="leading-6">
                <h3 name>
                    {{ booking_asset?.name || booking_asset?.id || '' }}
                </h3>
                <div class="flex items-center space-x-2">
                    <app-icon>person</app-icon>
                    <span i18n>{{
                        (is_group | async) ? 'Multiple Desks' : 'Single desk'
                    }}</span>
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
            class="flex space-x-1 py-4 px-2 border-t max-h-[50vh] overflow-auto"
        >
            <app-icon class="text-success">done</app-icon>
            <div details class="flex-1 leading-6 w-1/2 pr-2">
                <h3 i18n>Asset Requests</h3>
                <div
                    request
                    *ngFor="let request of assets"
                    class="border bg-base-100 rounded-xl overflow-hidden"
                    [class.border-error]="end_time < request.deliver_at"
                    [class.border-base-300]="end_time >= request.deliver_at"
                >
                    <div class="flex items-center space-x-2 p-3">
                        <div class="flex-1 flex items-center space-x-2">
                            <div class="text-sm">
                                Requested for
                                {{
                                    request.deliver_at_time
                                        | date: 'MMM d, ' + time_format
                                }}
                            </div>
                            <div
                                class="flex items-center justify-center h-6 w-6 rounded-full bg-error text-error-content"
                                [matTooltip]="err_tooltip"
                                *ngIf="end_time < request.deliver_at"
                            >
                                <app-icon>priority_high</app-icon>
                            </div>
                            <div class="flex-1"></div>
                            <div
                                class="text-xs bg-success text-success-content px-2 py-1 rounded"
                            >
                                {{ request.item_count }} item(s)
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex flex-col bg-base-200 divide-y divide-base-100"
                    >
                        <div
                            class="flex items-center px-3 py-1 space-x-2 hover:opacity-90"
                            *ngFor="let item of request.items"
                        >
                            <div class="flex items-center flex-1">
                                <span class="text-sm">{{
                                    item.name || 'Item'
                                }}</span>
                            </div>
                            <div
                                class="rounded bg-success text-success-content text-xs px-2 py-1"
                            >
                                x{{ item.quantity }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section
            locker
            class="flex space-x-1 py-4 px-2 border-t"
            *ngIf="needs_locker"
        >
            <app-icon class="text-success">done</app-icon>
            <div details class="leading-6">
                <h3 i18n>Requested Locker</h3>
                <div class="flex space-x-2">
                    <span>Locker E-043</span>
                </div>
            </div>
        </section>
        <footer class="p-2 w-full border-t border-base-200 mt-4">
            <button
                name="confirm-desk"
                btn
                matRipple
                class="w-full"
                *ngIf="!(loading | async)"
                (click)="postForm()"
                i18n
            >
                Confirm
            </button>
        </footer>
    `,
})
export class NewDeskFlowConfirmComponent extends AsyncHandler {
    @Input() public show_close: boolean = false;

    public readonly loading = this._state.loading;
    public readonly is_group = this._state.options.pipe(map((_) => _.group));

    public readonly postForm = async () => {
        try {
            if ((await this._state.options.pipe(take(1)).toPromise())?.group) {
                await this._state.postFormForGroup();
            } else {
                await this._state.postForm();
            }
            this.dismiss(true);
        } catch (e) {
            console.log('Booking Error:', e);
            notifyError(
                typeof e === 'string'
                    ? e
                    : `Desk unavailable at the selected time`
            );
        }
    };
    public readonly dismiss = (e?) => this._sheet_ref?.dismiss(e);

    public get end_time() {
        const end = addMinutes(
            this.booking.date,
            this.booking.duration
        ).valueOf();
        return this.booking.all_day ? endOfDay(end).valueOf() : end;
    }

    public get booking() {
        return this._state.form.value as any;
    }

    public get time_format() {
        return this._settings.time_format;
    }

    public get assets() {
        return this.booking.assets || null;
    }

    public get needs_locker() {
        return !!this.booking.secondary_resource;
    }

    public get assets_count() {
        return this.assets?.length
            ? this.assets.reduce((a, b) => a + b.amount, 0)
            : 0;
    }

    public get booking_asset() {
        return this.booking.booking_asset as Desk;
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
