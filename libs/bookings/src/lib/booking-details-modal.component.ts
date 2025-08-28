import { Component, inject } from '@angular/core';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogModule,
} from '@angular/material/dialog';
import {
    ANIMATION_SHOW_CONTRACT_EXPAND,
    formatDuration,
    formatRecurrence,
    fromBookingRecurrence,
    i18n,
    notifyError,
    notifySuccess,
    SettingsService,
} from '@placeos/common';
import { addMinutes, format } from 'date-fns';

import { MapLocateModalComponent } from 'libs/components/src/lib/map-locate-modal.component';
import { MapPinComponent } from 'libs/components/src/lib/map-pin.component';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { Booking } from './booking.class';
import { checkinBooking, checkinBookingInstance } from './bookings.fn';

import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { ImageCarouselComponent } from 'libs/components/src/lib/image-carousel.component';
import { InteractiveMapComponent } from 'libs/components/src/lib/interactive-map.component';
import { StatusPillComponent } from 'libs/components/src/lib/status-pill.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { UserPipe } from 'libs/users/src/lib/user.pipe';
import { lastValueFrom } from 'rxjs';
import { DeskSettingsModalComponent } from './desk-settings-modal.component';

@Component({
    selector: 'booking-details-modal',
    template: `
        <div
            class="h-[100vh] w-[100vw] space-y-2 overflow-auto bg-base-100 pb-2 sm:relative sm:inset-auto sm:h-auto sm:max-h-[80vh] sm:w-[51rem] sm:rounded sm:bg-base-200"
        >
            <div
                class="max-h-screen flex-col items-center border-base-200 bg-base-100 pb-4 sm:flex sm:max-h-[80vh] sm:border-b sm:px-16"
            >
                @if (!booking?.extension_data?.images?.length) {
                    <div class="block h-8 w-full sm:hidden"></div>
                }
                @if (booking?.extension_data?.images?.length) {
                    <div
                        class="h-64 w-full overflow-hidden bg-neutral sm:rounded-b"
                    >
                        <image-carousel
                            [images]="booking?.extension_data?.images"
                            class="h-64 w-full"
                        ></image-carousel>
                    </div>
                }
                <h3
                    title
                    class="mt-2 w-full px-3 text-xl font-medium"
                    [class.pt-4]="!booking?.extension_data?.images"
                >
                    {{ booking.title }}
                </h3>
                <div class="w-full items-center justify-between sm:flex">
                    <div class="m-2 flex items-center space-x-2">
                        <status-pill [status]="booking_status">
                            {{ period }}
                        </status-pill>
                        @if (booking.instance) {
                            <icon class="text-2xl" [matTooltip]="recurr_tooltip"
                                >event_repeat</icon
                            >
                        }
                    </div>
                    @if (!booking.is_done) {
                        <div actions class="flex items-center space-x-2 px-2">
                            @if (can_checkin) {
                                @if (
                                    !booking.checked_out_at &&
                                    !checked_out &&
                                    !auto_checkin &&
                                    (booking.state === 'upcoming' ||
                                        booking.state === 'started' ||
                                        booking.state === 'in_progress') &&
                                    booking.status !== 'declined'
                                ) {
                                    <button
                                        btn
                                        matRipple
                                        class="h-10 flex-1 border-none"
                                        [class.bg-success]="booking.checked_in"
                                        [class.text-success-content]="
                                            booking.checked_in
                                        "
                                        [disabled]="checking_in"
                                        (click)="toggleCheckedIn()"
                                    >
                                        @if (!checking_in) {
                                            <div
                                                class="flex items-center justify-center space-x-2"
                                            >
                                                <icon>{{
                                                    booking.checked_in
                                                        ? 'done'
                                                        : 'arrow_back'
                                                }}</icon>
                                                <div class="mr-4">
                                                    {{
                                                        (booking.checked_in
                                                            ? 'COMMON.CHECKED_IN'
                                                            : 'COMMON.CHECK_IN'
                                                        ) | translate
                                                    }}
                                                </div>
                                            </div>
                                        } @else {
                                            <mat-spinner
                                                class="mx-auto"
                                                [diameter]="32"
                                            ></mat-spinner>
                                        }
                                    </button>
                                }
                            }
                            <button
                                icon
                                matRipple
                                [matMenuTriggerFor]="menu"
                                class="h-12 w-12 rounded bg-secondary text-white"
                            >
                                <icon>more_horiz</icon>
                            </button>
                        </div>
                    }
                </div>
            </div>
            <div class="flex-wrap sm:flex sm:px-12">
                <div
                    class="min-w-1/3 flex-grow-[4] rounded border-base-200 sm:m-2 sm:w-[16rem] sm:border sm:bg-base-100 sm:p-4"
                >
                    <h3 class="mb-2 mt-2 px-3 text-lg font-medium">
                        {{ 'BOOKINGS.DETAILS' | translate }}
                    </h3>
                    <div class="flex items-center space-x-2 px-2">
                        <icon matTooltip="Date">event</icon>
                        <div>{{ booking.date | date: 'EEEE, dd LLLL y' }}</div>
                    </div>
                    <div class="flex items-center space-x-2 px-2">
                        <icon matTooltip="Time">schedule</icon>
                        <div>{{ period }}</div>
                    </div>
                    <div class="flex items-center space-x-2 px-2">
                        <icon matTooltip="Level and Resource">map</icon>
                        <div>
                            {{ level?.display_name || level?.name }},
                            {{ booking.asset_name || booking.asset_id }}
                        </div>
                    </div>
                    <div class="flex items-center space-x-2 px-2">
                        <icon matTooltip="Location">place</icon>
                        <div>
                            {{ building?.display_name || building?.name }}
                            {{
                                building?.address ? ', ' + building.address : ''
                            }}
                        </div>
                    </div>
                    @if (booking.booked_by_email !== booking.user_email) {
                        <div class="flex items-center space-x-2 px-2">
                            <icon matTooltip="Booked By">person</icon>
                            <div>
                                {{
                                    (booking.booked_by_email | user)?.name ||
                                        booking.booked_by_name
                                }}
                            </div>
                        </div>
                    }
                </div>
                @if (has_assets) {
                    <div
                        class="min-w-1/3 mt-4 flex-grow-[3] rounded border-base-200 sm:m-2 sm:w-[16rem] sm:border sm:bg-base-100 sm:p-4"
                    >
                        <h3 class="mx-3 py-2 text-lg font-medium">
                            {{ 'RESOURCE.ASSETS' | translate }} ({{
                                booking.valid_assets?.length || 0
                            }})
                        </h3>
                        <div class="flex flex-col space-y-2">
                            @for (
                                request of booking.valid_assets;
                                track request
                            ) {
                                <div
                                    request
                                    class="overflow-hidden rounded-xl border border-base-300 bg-base-100"
                                >
                                    <button
                                        matRipple
                                        class="flex w-full items-center space-x-2 p-3"
                                        (click)="
                                            show_request[request.id] =
                                                !show_request[request.id]
                                        "
                                    >
                                        <div class="flex-1 text-left">
                                            <div class="text-sm">
                                                {{
                                                    'BOOKINGS.ASSETS_REQUESTED_FOR'
                                                        | translate
                                                            : {
                                                                  time:
                                                                      request.deliver_at
                                                                      | date
                                                                          : 'MMM d, ' +
                                                                                time_format,
                                                              }
                                                }}
                                            </div>
                                        </div>
                                        <div
                                            class="flex h-8 w-8 items-center justify-center rounded-full"
                                            [class.bg-success]="
                                                request.state === 'approved'
                                            "
                                            [class.text-success-content]="
                                                request.state === 'approved'
                                            "
                                            [class.bg-warning]="
                                                request.state !== 'approved' &&
                                                request.state !== 'rejected'
                                            "
                                            [class.text-warning-content]="
                                                request.state !== 'approved' &&
                                                request.state !== 'rejected'
                                            "
                                            [class.bg-error]="
                                                request.state === 'rejected'
                                            "
                                            [class.text-error-content]="
                                                request.state === 'rejected'
                                            "
                                            [matTooltip]="
                                                request.state || 'Tentative'
                                            "
                                        >
                                            <icon>
                                                {{
                                                    request.state === 'approved'
                                                        ? 'done'
                                                        : request.state ===
                                                            'rejected'
                                                          ? 'close'
                                                          : 'schedule'
                                                }}
                                            </icon>
                                        </div>
                                        <div
                                            class="flex h-8 w-8 items-center justify-center rounded-full"
                                        >
                                            <icon class="text-2xl">
                                                {{
                                                    show_request[request.id]
                                                        ? 'expand_less'
                                                        : 'expand_more'
                                                }}
                                            </icon>
                                        </div>
                                    </button>
                                    <div
                                        class="flex flex-col divide-y divide-base-100 bg-base-200"
                                        [@show]="
                                            show_request[request.id]
                                                ? 'show'
                                                : 'hide'
                                        "
                                    >
                                        @for (
                                            item of request.items;
                                            track item
                                        ) {
                                            <div
                                                class="flex items-center space-x-2 px-3 py-1 hover:opacity-90"
                                            >
                                                <div
                                                    class="flex flex-1 items-center"
                                                >
                                                    <span class="text-sm">{{
                                                        item.name || 'Item'
                                                    }}</span>
                                                </div>
                                                <div
                                                    class="rounded bg-success px-2 py-1 text-xs text-success-content"
                                                >
                                                    x{{ item.quantity }}
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                }
                @if (level?.map_id) {
                    <button
                        map
                        class="min-w-1/3 relative m-2 mt-4 h-64 w-[calc(100%-1rem)] flex-grow-[3] overflow-hidden rounded border border-base-200 p-2 sm:my-2 sm:h-48 sm:w-[16rem] sm:bg-base-100"
                        (click)="viewLocation()"
                    >
                        @if (!hide_map) {
                            <interactive-map
                                class="pointer-events-none"
                                [src]="level?.map_id"
                                [features]="features"
                                [options]="{
                                    disable_pan: true,
                                    disable_zoom: true,
                                }"
                            ></interactive-map>
                        }
                    </button>
                }
            </div>
            <button
                icon
                matRipple
                mat-dialog-close
                class="absolute left-2 top-0 bg-neutral text-white"
            >
                <icon>close</icon>
            </button>
        </div>
        <mat-menu #menu="matMenu" xPosition="before">
            @if (can_edit) {
                <button mat-menu-item mat-dialog-close (click)="edit(booking)">
                    <div class="flex items-center space-x-2 text-base">
                        <icon>edit</icon>
                        <div>{{ 'BOOKINGS.ACTION_EDIT' | translate }}</div>
                    </div>
                </button>
            }
            @if (is_checked_in && desk_height_enabled) {
                <button mat-menu-item (click)="setDeskHeight()">
                    <div class="flex items-center space-x-2 text-base">
                        <icon className="material-symbols-rounded">
                            height
                        </icon>
                        <div>
                            {{ 'BOOKINGS.ACTION_SET_DESK_HEIGHT' | translate }}
                        </div>
                    </div>
                </button>
            }
            @if (!is_in_progress) {
                <button mat-menu-item (click)="remove(booking, false)">
                    <div class="flex items-center space-x-2 text-base">
                        <icon class="text-error">delete</icon>
                        <div>{{ 'BOOKINGS.ACTION_DELETE' | translate }}</div>
                    </div>
                </button>
            }
            @if (booking.instance && allow_series_delete) {
                <button mat-menu-item (click)="remove(booking, true)">
                    <div class="flex items-center space-x-2 text-base">
                        <icon class="text-error">delete</icon>
                        <div>
                            {{ 'BOOKINGS.ACTION_DELETE_SERIES' | translate }}
                        </div>
                    </div>
                </button>
            }
            @if (is_in_progress) {
                <button mat-menu-item (click)="end(booking)">
                    <div class="flex items-center space-x-2 text-base">
                        <icon class="text-error">delete</icon>
                        <div>{{ 'BOOKINGS.ACTION_END' | translate }}</div>
                    </div>
                </button>
            }
        </mat-menu>
    `,
    styles: [``],
    animations: [ANIMATION_SHOW_CONTRACT_EXPAND],
    imports: [
        CommonModule,
        MatMenuModule,
        TranslatePipe,
        IconComponent,
        InteractiveMapComponent,
        MatDialogModule,
        MatProgressSpinnerModule,
        StatusPillComponent,
        ImageCarouselComponent,
        MatRippleModule,
        UserPipe,
        MatTooltipModule,
    ],
})
export class BookingDetailsModalComponent {
    private _data = inject<{
        booking: Booking;
        edit_fn: (i) => void;
        remove_fn: (i, s?) => void;
        end_fn: (i) => void;
    }>(MAT_DIALOG_DATA);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);

    public edit = this._data.edit_fn;
    public remove = this._data.remove_fn;
    public end = this._data.end_fn;
    public readonly booking = this._data.booking;
    public hide_map = false;
    public show_request = {};
    public checked_out = false;
    public checking_in = false;
    public readonly features = [
        {
            location:
                this.booking?.extension_data?.map_id || this.booking?.asset_id,
            content: MapPinComponent,
        },
    ];
    public readonly has_assets = !!this.booking?.valid_assets.length;

    public get level() {
        return this._org.levelWithID(this.booking?.zones || []);
    }

    public get building() {
        const building = this._org.buildings.find((bld) =>
            (this.booking?.zones || []).includes(bld.id),
        );
        if (this._settings.get('app.use_region')) {
            const region = this._org.regions.find(
                (region) =>
                    (this.booking?.zones || []).includes(region.id) ||
                    region.id === building?.parent_id,
            );
            if (region) return region;
        }
        return building;
    }

    public get can_edit() {
        return (
            !this.booking.is_done &&
            !this.booking.checked_in &&
            this.booking.booking_type !== 'visitor'
        );
    }

    public get can_checkin() {
        return (
            !this._settings.get(
                `app.${(this.booking?.type || 'booking') + 's'}.hide_checkin`,
            ) &&
            !this._settings.get(
                `app.${this.booking?.type || 'bookings'}.hide_checkin`,
            ) &&
            !this._settings.get('app.bookings.hide_checkin')
        );
    }

    public get allow_series_delete() {
        const is_assigned = this.booking.extension_data.is_assigned;
        const check_list = [
            `${this.booking?.type}s`,
            this.booking?.type,
            'bookings',
        ];
        const key = is_assigned
            ? `app.{v}.allow_assigned_series_delete`
            : `app.{v}.allow_series_delete`;
        for (const check of check_list) {
            const check_key = key.replace('{v}', check);
            const value = this._settings.get(check_key);
            if (value != null) return !!value;
        }
        return false;
    }

    public get auto_checkin() {
        return this._settings.get(
            `app.${this.booking?.type || 'bookings'}.auto_checkin`,
        );
    }

    public get is_checked_in() {
        return this.booking.checked_in;
    }

    public get desk_height_enabled() {
        return (
            this.booking?.type === 'desk' &&
            this._settings.get('app.desks.height_enabled')
        );
    }

    public get is_in_progress() {
        const ts = Date.now();
        const start = this.booking?.booking_start * 1000;
        const end = this.booking?.booking_end * 1000;
        if (this.booking?.all_day) return start <= ts;
        return start <= ts && ts <= end;
    }

    public get time_format() {
        return this._settings.time_format;
    }

    public get booking_status() {
        if (this.booking?.is_done) return 'neutral';
        if (this.booking?.status === 'approved') return 'success';
        if (this.booking?.status === 'declined') return 'error';
        if (this.booking?.status === 'tentative') return 'warning';
        return 'warning';
    }

    public get period() {
        if (this.booking?.is_all_day) return i18n('COMMON.ALL_DAY');
        const start = this.booking?.date || Date.now();
        const duration = this.booking?.duration || 60;
        const end = addMinutes(start, duration);
        const dur = formatDuration({
            hours: Math.floor(duration / 60),
            minutes: duration % 60,
        })
            .replace(' hour', 'hr')
            .replace(' minute', 'min');
        return `${format(start, this.time_format)} - ${format(
            end,
            this.time_format,
        )} (${dur})`;
    }

    public async toggleCheckedIn() {
        this.checking_in = true;
        const bkn = this.booking;
        const promise = lastValueFrom(
            bkn.instance
                ? checkinBookingInstance(
                      bkn.id,
                      bkn.instance,
                      !this.booking.checked_in,
                  )
                : checkinBooking(this.booking.id, !this.booking.checked_in),
        ).catch((_) => {
            notifyError(i18n('BOOKINGS.CHECK_IN_ERROR'));
            this.checking_in = false;
            throw _;
        });
        await promise;
        (this.booking as any).checked_in = !this.booking.checked_in;
        this.checked_out = !this.booking.checked_in;
        notifySuccess(
            i18n(
                this.booking.checked_in
                    ? 'BOOKINGS.CHECK_IN_SUCCESS'
                    : 'BOOKINGS.CHECK_OUT_SUCCESS',
            ),
        );
        this.checking_in = false;
    }

    public get recurr_tooltip() {
        return (
            formatRecurrence(fromBookingRecurrence(this.booking)) ||
            i18n('CALENDAR_EVENT.RECURRING_TOOLTIP')
        );
    }

    public status(id: string): string {
        const booking = this.booking.linked_bookings.find(
            (_) => _.asset_id === id,
        );
        if (booking.status) return booking.status;
        return booking
            ? booking.approved
                ? 'approved'
                : booking.rejected
                  ? 'rejected'
                  : 'pending'
            : 'pending';
    }

    public viewLocation() {
        this.hide_map = true;
        const ref = this._dialog.open(MapLocateModalComponent, {
            maxWidth: '95vw',
            maxHeight: '95vh',
            data: {
                item: {
                    id: this.booking.asset_id,
                    name: this.booking.asset_name,
                    map_id:
                        this.booking.extension_data.map_id ||
                        this.booking.asset_id,
                    level: this.level,
                },
            },
        });
        ref.afterClosed().subscribe(() => (this.hide_map = false));
    }

    public setDeskHeight() {
        this._dialog.open(DeskSettingsModalComponent, {
            data: { id: this.booking.asset_ids[0] || this.booking.asset_id },
        });
    }
}
