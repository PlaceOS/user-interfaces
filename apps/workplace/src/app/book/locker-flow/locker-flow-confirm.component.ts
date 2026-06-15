import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    model,
} from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BookingAsset, BookingFormService } from '@placeos/bookings';
import {
    AsyncHandler,
    Booking,
    OrganisationService,
    SettingsService,
    notifyError,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';

@Component({
    selector: 'locker-flow-confirm',
    template: `
        <header
            class="bg-base-200 sticky top-2 z-10 mx-auto mb-4 flex h-14 w-full max-w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none p-2"
        >
            <h2 class="m-0 flex-1 px-2 text-xl font-medium capitalize">
                {{ 'APP.WORKPLACE.LOCKER_CONFIRM_TITLE' | translate }}
            </h2>
            <div class="">
                @if (loading()) {
                    <mat-spinner diameter="32"></mat-spinner>
                }
                @if (show_close()) {
                    <button
                        icon
                        name="close-locker-confirm"
                        matRipple
                        (click)="dismiss()"
                    >
                        <icon class="text-2xl">close</icon>
                    </button>
                }
            </div>
        </header>
        <section period class="flex space-x-1 px-2 py-4">
            <icon class="text-success text-2xl">done</icon>
            <div details class="space-y-2 text-base">
                <h3 class="text-xl">{{ booking.title || '~Untitled~' }}</h3>
                <div class="flex items-center space-x-2">
                    <icon class="text-xl">calendar_today</icon>
                    <div date>{{ booking.date | date: 'fullDate' }}</div>
                </div>
                <div class="flex items-center space-x-2">
                    <icon class="text-xl">schedule</icon>
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
        @if (booking_asset?.id) {
            <section
                resource
                class="flex space-x-1 border-t px-2 py-4 text-base"
            >
                <icon class="text-success text-2xl">done</icon>
                <div details class="space-y-2 text-base">
                    <h3 class="text-xl">
                        {{ booking_asset?.name || booking_asset?.id || '' }}
                    </h3>
                    <div class="flex items-center space-x-2">
                        <icon>person</icon>
                        <span>{{ 'RESOURCE.LOCKER' | translate }}</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <icon>place</icon>
                        <div>{{ location }}</div>
                    </div>
                    @for (feat of booking_asset.features; track feat) {
                        <div features class="flex items-center space-x-2">
                            <icon>arrow_upward</icon>
                            <div>{{ feat }}</div>
                        </div>
                    }
                </div>
            </section>
        }
        <footer class="border-base-200 mt-4 w-full border-t p-2">
            @if (!loading()) {
                <button
                    name="confirm-locker"
                    btn
                    matRipple
                    class="w-full"
                    (click)="postForm()"
                >
                    {{ 'COMMON.CONFIRM' | translate }}
                </button>
            }
        </footer>
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        CommonModule,
        TranslatePipe,
        MatProgressSpinnerModule,
        MatRippleModule,
        IconComponent,
    ],
})
export class BookLockerFlowConfirmComponent extends AsyncHandler {
    private _state = inject(BookingFormService);
    private _org = inject(OrganisationService);
    private _sheet_ref = inject(MatBottomSheetRef, { optional: true });
    private _settings = inject(SettingsService);

    public readonly show_close = model(false);

    public readonly loading = this._state.loading;

    public readonly postForm = async () => {
        try {
            if (this._state.options()?.group) {
                const booking = new Booking(this._state.form.getRawValue());
                if (booking.id) {
                    const sibling_list =
                        await this._state.loadGroupSiblings(booking);
                    await this._state.editFormForGroup(
                        sibling_list.length ? sibling_list : [booking],
                    );
                } else {
                    await this._state.postFormForGroup();
                }
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
}
