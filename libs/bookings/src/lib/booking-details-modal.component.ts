import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogModule,
} from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    ANIMATION_SHOW_CONTRACT_EXPAND,
    Booking,
    formatDuration,
    formatRecurrence,
    fromBookingRecurrence,
    i18n,
    notifyError,
    notifySuccess,
    settingSignal,
    SettingsService,
    userSignal,
} from '@placeos/common';
import { addMinutes, format } from 'date-fns';

import { OrganisationService } from '@placeos/common';
import { openConfirmModal } from 'libs/components/src/lib/confirm-modal.component';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { ImageCarouselComponent } from 'libs/components/src/lib/image-carousel.component';
import { InteractiveMapComponent } from 'libs/components/src/lib/interactive-map.component';
import { MapLocateModalComponent } from 'libs/components/src/lib/map-locate-modal.component';
import { MapPinComponent } from 'libs/components/src/lib/map-pin.component';
import { StatusPillComponent } from 'libs/components/src/lib/status-pill.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { UserPipe } from 'libs/users/src/lib/user.pipe';
import {
    parkingRequestStatus,
    visitorDisplayNameFor,
} from './booking.utilities';
import { setBookingCheckedIn } from './bookings.fn';
import { DeskSettingsModalComponent } from './desk-settings-modal.component';

export function canEditBooking(booking: Booking) {
    const is_visitor = booking.booking_type === 'visitor';
    const visitor_edit_allowed =
        is_visitor && settingSignal('visitors.allow_editing', false)();
    const is_parking = booking.booking_type === 'parking';
    const features: string[] = settingSignal<string[]>('features', [])();
    const parking_allocated_edit_blocked =
        is_parking && !!booking.asset_id && !features.includes('parking');
    return (
        !booking.is_done &&
        !booking.checked_in &&
        (!is_visitor || visitor_edit_allowed) &&
        !parking_allocated_edit_blocked
    );
}

@Component({
    selector: 'booking-details-modal',
    template: `
        <div
            class="bg-base-100 sm:bg-base-200 h-screen w-screen space-y-2 overflow-auto pb-2 sm:relative sm:inset-auto sm:h-auto sm:max-h-[80vh] sm:w-204 sm:rounded-sm"
        >
            <div
                class="border-base-200 bg-base-100 max-h-screen flex-col items-center pb-4 sm:flex sm:max-h-[80vh] sm:border-b sm:px-16"
            >
                @if (!booking()?.extension_data?.images?.length) {
                    <div class="block h-8 w-full sm:hidden"></div>
                }
                @if (booking()?.extension_data?.images?.length) {
                    <div
                        class="bg-neutral h-64 w-full overflow-hidden sm:rounded-b"
                    >
                        <image-carousel
                            [images]="booking()?.extension_data?.images"
                            class="h-64 w-full"
                        ></image-carousel>
                    </div>
                }
                <h3
                    title
                    class="mt-2 w-full px-3 text-xl font-medium"
                    [class.pt-4]="!booking()?.extension_data?.images"
                >
                    {{ display_title() }}
                </h3>
                @if (is_visitor()) {
                    <p class="w-full px-3 text-sm opacity-70">
                        {{ visitor_display_name() }}
                    </p>
                }
                <div class="w-full items-center justify-between sm:flex">
                    <div class="m-2 flex items-center space-x-2">
                        <status-pill [status]="booking_status()">
                            {{ period() }}
                        </status-pill>
                        @if (booking().instance) {
                            <icon
                                class="text-2xl"
                                [matTooltip]="recurr_tooltip()"
                                >event_repeat</icon
                            >
                        }
                    </div>
                    @if (!booking().is_done) {
                        <div actions class="flex items-center space-x-2 px-2">
                            @if (can_checkin()) {
                                @if (
                                    !booking().checked_out_at &&
                                    !checked_out() &&
                                    !auto_checkin() &&
                                    (booking().state === 'upcoming' ||
                                        booking().state === 'started' ||
                                        booking().state === 'in_progress') &&
                                    booking().status !== 'declined'
                                ) {
                                    <button
                                        btn
                                        matRipple
                                        class="h-10 min-w-40 flex-1 border-none"
                                        [class.bg-success]="
                                            booking().checked_in
                                        "
                                        [class.text-success-content]="
                                            booking().checked_in
                                        "
                                        [disabled]="checking_in()"
                                        (click)="toggleCheckedIn()"
                                    >
                                        @if (!checking_in()) {
                                            <div
                                                class="flex items-center justify-center gap-1"
                                            >
                                                @if (booking().checked_in) {
                                                    <icon class="text-xl"
                                                        >done</icon
                                                    >
                                                }
                                                <div
                                                    [class.mr-4]="
                                                        booking().checked_in
                                                    "
                                                >
                                                    {{
                                                        (booking().checked_in
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
                                class="bg-secondary h-12 w-12 rounded-sm text-white"
                            >
                                <icon>more_horiz</icon>
                            </button>
                        </div>
                    }
                </div>
            </div>
            <div class="flex-wrap sm:flex sm:px-12">
                <div
                    class="border-base-200 sm:bg-base-100 min-w-1/3 grow-4 rounded-sm sm:m-2 sm:w-[16rem] sm:border sm:p-4"
                >
                    <h3 class="mt-2 mb-2 px-3 text-lg font-medium">
                        {{ 'COMMON.DETAILS' | translate }}
                    </h3>
                    <div class="flex items-center space-x-2 px-2">
                        <icon matTooltip="Date">event</icon>
                        <div>
                            {{ booking().date | date: 'EEEE, dd LLLL y' }}
                        </div>
                    </div>
                    <div class="flex items-center space-x-2 px-2">
                        <icon matTooltip="Time">schedule</icon>
                        <div>{{ period() }}</div>
                    </div>
                    <div class="flex items-center space-x-2 px-2">
                        <icon matTooltip="Level and Resource">{{
                            is_visitor() ? 'person' : 'place'
                        }}</icon>
                        <div>
                            @if (is_visitor()) {
                                <div>{{ visitor_display_name() }}</div>
                                @if (visitor_email_label()) {
                                    <div class="text-xs opacity-60">
                                        {{ visitor_email_label() }}
                                    </div>
                                }
                            } @else {
                                {{ resource_details_label() }}
                            }
                        </div>
                    </div>
                    @if (is_visitor()) {
                        <div class="flex items-center space-x-2 px-2">
                            <icon matTooltip="Location">place</icon>
                            <div>
                                {{
                                    building()?.display_name || building()?.name
                                }}
                                {{
                                    building()?.address
                                        ? ', ' + building().address
                                        : ''
                                }}
                            </div>
                        </div>
                    }
                    @if (current_user()?.email !== booking().user_email) {
                        <div class="flex items-center space-x-2 px-2">
                            <icon [matTooltip]="'BOOKED_FOR_LABEL' | translate">person</icon>
                            <div>
                                {{
                                    (booking().user_email | user | async)
                                        ?.name || booking().user_name
                                }}
                            </div>
                        </div>
                    }
                    @if (booking().booked_by_email !== booking().user_email) {
                        <div class="flex items-center space-x-2 px-2">
                            <icon [matTooltip]="'COMMON.BOOKED_BY' | translate">edit_calendar</icon>
                            <div>
                                {{
                                    (booking().booked_by_email | user | async)
                                        ?.name || booking().booked_by_name
                                }}
                            </div>
                        </div>
                    }
                </div>
                @if (group_details(); as group) {
                    <div
                        class="border-base-200 sm:bg-base-100 mt-4 min-w-1/3 grow-3 rounded-sm sm:m-2 sm:w-[16rem] sm:border sm:p-4"
                    >
                        <h3 class="mx-3 py-2 text-lg font-medium">
                            Group Booking
                        </h3>
                        <div class="flex flex-col space-y-2 px-3 text-sm">
                            <div class="flex items-center space-x-2">
                                <icon matTooltip="Group Size">groups</icon>
                                <div>{{ group.size }} people</div>
                            </div>
                            @if (group.resource_type) {
                                <div class="flex items-center space-x-2">
                                    <icon matTooltip="Resource Type"
                                        >category</icon
                                    >
                                    <div>{{ group.resource_type }}</div>
                                </div>
                            }
                            @if (group.name) {
                                <div class="flex items-center space-x-2">
                                    <icon matTooltip="Group Reference"
                                        >tag</icon
                                    >
                                    <div class="break-all">
                                        {{ group.name }}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                }
                @if (has_assets()) {
                    <div
                        class="border-base-200 sm:bg-base-100 mt-4 min-w-1/3 grow-3 rounded-sm sm:m-2 sm:w-[16rem] sm:border sm:p-4"
                    >
                        <h3 class="mx-3 py-2 text-lg font-medium">
                            {{ 'RESOURCE.ASSETS' | translate }} ({{
                                booking().valid_assets?.length || 0
                            }})
                        </h3>
                        <div class="flex flex-col space-y-2">
                            @for (
                                request of booking().valid_assets;
                                track request
                            ) {
                                <div
                                    request
                                    class="border-base-300 bg-base-100 overflow-hidden rounded-xl border"
                                >
                                    <button
                                        matRipple
                                        class="flex w-full items-center space-x-2 p-3"
                                        (click)="toggleRequest(request.id)"
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
                                                                                time_format(),
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
                                                    showRequest(request.id)
                                                        ? 'expand_less'
                                                        : 'expand_more'
                                                }}
                                            </icon>
                                        </div>
                                    </button>
                                    <div
                                        class="divide-base-100 bg-base-200 flex flex-col divide-y"
                                        [@show]="
                                            showRequest(request.id)
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
                                                    class="bg-success text-success-content rounded-sm px-2 py-1 text-xs"
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
                @if (level()?.map_id && !hide_selected_parking_space()) {
                    <button
                        map
                        class="border-base-200 sm:bg-base-100 relative m-2 mt-4 h-64 w-[calc(100%-1rem)] min-w-1/3 grow-3 overflow-hidden rounded-sm border p-2 sm:my-2 sm:h-48 sm:w-[16rem]"
                        (click)="viewLocation()"
                    >
                        @if (!hide_map()) {
                            <interactive-map
                                class="pointer-events-none"
                                [src]="level()?.map_id"
                                [features]="features()"
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
                default
                matRipple
                mat-dialog-close
                class="absolute top-2 left-2"
            >
                <icon>close</icon>
            </button>
        </div>
        <mat-menu #menu="matMenu" xPosition="before">
            @if (can_edit()) {
                <button
                    mat-menu-item
                    mat-dialog-close
                    (click)="edit(booking())"
                >
                    <div class="flex items-center space-x-2 text-base">
                        <icon>edit</icon>
                        <div>{{ 'BOOKINGS.ACTION_EDIT' | translate }}</div>
                    </div>
                </button>
            }
            @if (is_checked_in() && desk_height_enabled()) {
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
            @if (can_cancel()) {
                <button mat-menu-item (click)="remove(booking(), false)">
                    <div class="flex items-center space-x-2 text-base">
                        <icon class="text-error">delete</icon>
                        <div>{{ 'BOOKINGS.ACTION_DELETE' | translate }}</div>
                    </div>
                </button>
            }
            @if (can_manage_group()) {
                <button
                    mat-menu-item
                    (click)="remove(group_parent_booking(), false)"
                >
                    <div class="flex items-center space-x-2 text-base">
                        <icon class="text-error">delete</icon>
                        <div>Delete group</div>
                    </div>
                </button>
            }
            @if (
                !booking().is_done &&
                booking().instance &&
                allow_series_delete()
            ) {
                <button mat-menu-item (click)="remove(booking(), true)">
                    <div class="flex items-center space-x-2 text-base">
                        <icon class="text-error">delete</icon>
                        <div>
                            {{ 'BOOKINGS.ACTION_DELETE_SERIES' | translate }}
                        </div>
                    </div>
                </button>
            }
            @if (is_in_progress()) {
                <button mat-menu-item (click)="end(booking())">
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
        refresh_fn?: () => void;
    }>(MAT_DIALOG_DATA);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);

    public readonly hide_map = signal(false);
    public readonly checked_out = signal(false);
    public readonly checking_in = signal(false);
    public readonly booking = signal(this._data.booking);
    public readonly current_user = userSignal();
    public readonly edit = this._data.edit_fn;
    public readonly end = this._data.end_fn;
    private readonly _show_request = signal<Record<string, boolean>>({});
    public readonly features = computed(() => [
        {
            location:
                this.booking()?.extension_data?.map_id ||
                this.booking()?.asset_id,
            content: MapPinComponent,
        },
    ]);
    public readonly has_assets = computed(
        () => !!this.booking()?.valid_assets.length,
    );
    public readonly level = computed(() =>
        this._org.levelWithID(this.booking()?.zones || []),
    );
    public readonly level_or_building = computed(
        () => this.level() || this.building(),
    );
    public readonly resource_location = computed(() => {
        const location_name =
            this.level_or_building()?.display_name ||
            this.level_or_building()?.name ||
            '';
        const resource_name =
            this.booking().asset_name ||
            this.booking().location ||
            this.booking().asset_id;
        return location_name
            ? `${location_name}, ${resource_name}`
            : resource_name;
    });
    private readonly _use_region = this._settings.signal('use_region', false);
    public readonly building = computed(() => {
        const zones = this.booking()?.zones || [];
        const level = this.level();
        const building = this._org.buildings.find(
            (bld) => zones.includes(bld.id) || bld.id === level?.parent_id,
        );
        if (this._use_region()) {
            const region = this._org.regions.find(
                (region) =>
                    zones.includes(region.id) ||
                    region.id === building?.parent_id,
            );
            if (region) return region;
        }
        return building;
    });

    public readonly can_edit = computed(() => canEditBooking(this.booking()));

    public readonly can_cancel = computed(
        () => !this.booking().is_done && !this.booking().checked_in,
    );

    public readonly can_checkin = computed(() => {
        const booking = this.booking();
        return (
            !(
                booking.booking_type === 'parking' &&
                booking.asset_id.startsWith('unallocated')
            ) &&
            !settingSignal(
                `${(booking.type || 'booking') + 's'}.hide_checkin`,
            )() &&
            !settingSignal(`${booking.type || 'bookings'}.hide_checkin`)() &&
            !settingSignal('bookings.hide_checkin')()
        );
    });

    public readonly allow_series_delete = computed(() => {
        const is_assigned = this.booking().extension_data.is_assigned;
        const check_list = [
            `${this.booking()?.type}s`,
            this.booking()?.type,
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
    });

    public readonly auto_checkin = settingSignal(
        `${this.booking()?.type || 'bookings'}.auto_checkin`,
        false,
    );
    public readonly show_waitlist = this._settings.signal(
        'parking.show_waitlist',
        true,
    );
    private readonly _hide_selected_parking_space = this._settings.signal(
        'parking.hide_selected_space',
        false,
    );
    public readonly hide_selected_parking_space = computed(
        () =>
            this.booking()?.booking_type === 'parking' &&
            this._hide_selected_parking_space(),
    );
    public readonly is_checked_in = computed(() => this.booking().checked_in);
    public readonly desk_height_enabled = computed(
        () =>
            this.booking()?.type === 'desk' &&
            settingSignal('desks.height_enabled')(),
    );
    public readonly is_visitor = computed(
        () => this.booking()?.booking_type === 'visitor',
    );
    public readonly display_title = computed(() => {
        const booking = this.booking();
        if (!booking) return '';
        return booking.title || booking.asset_name || booking.asset_id;
    });
    public readonly resource_details_label = computed(() => {
        const level_name =
            this.level()?.display_name || this.level()?.name || '';
        if (this.hide_selected_parking_space()) {
            return level_name || i18n('RESOURCE.PARKING');
        }
        const resource_name =
            this.booking()?.asset_name || this.booking()?.asset_id || '';
        return [level_name, resource_name].filter((_) => !!_).join(', ');
    });
    public readonly visitor_display_name = computed(
        () => visitorDisplayNameFor(this.booking()) || 'Visitor',
    );
    public readonly visitor_reason = computed(() => {
        const booking = this.booking();
        if (!booking || !this.is_visitor()) return '';
        const visitor_name = (
            visitorDisplayNameFor(booking) || 'Visitor'
        ).toLowerCase();
        const reason = `${booking.title || booking.description || ''}`.trim();
        if (!reason.length) return '';
        return reason.toLowerCase() === visitor_name ? '' : reason;
    });
    public readonly visitor_email_label = computed(() => {
        const booking = this.booking();
        const asset_id = `${booking?.asset_id || ''}`.trim();
        if (!asset_id || !this._looksLikeEmail(asset_id)) return '';
        const display_name = visitorDisplayNameFor(booking) || 'Visitor';
        return display_name.toLowerCase() === asset_id.toLowerCase()
            ? ''
            : asset_id;
    });
    public readonly group_parent_booking = computed(() => {
        const booking = this.booking();
        if (booking.booking_type === 'group') return booking;
        const parent = booking.linked_parent_booking;
        if (parent?.booking_type !== 'group') return null;
        return new Booking({
            ...parent,
            booking_type: 'group',
            type: 'group',
            date: parent.date || booking.date,
            duration: parent.duration || booking.duration,
            user_email: (parent as any).user_email || booking.user_email,
            booked_by_email:
                (parent as any).booked_by_email || booking.booked_by_email,
        } as any);
    });
    public readonly can_manage_group = computed(() => {
        const group_booking = this.group_parent_booking();
        if (!group_booking || group_booking.is_done) return false;
        const current_email = this.current_user()?.email?.toLowerCase();
        const host_emails = [
            group_booking.user_email,
            group_booking.booked_by_email,
        ].map((_) => _?.toLowerCase());
        return !!current_email && host_emails.includes(current_email);
    });

    public remove(booking: Booking, remove_series?: boolean) {
        if (booking?.is_done || (booking?.checked_in && !remove_series)) return;
        if (remove_series === undefined) this._data.remove_fn(booking);
        else this._data.remove_fn(booking, remove_series);
    }
    public readonly group_details = computed(() => {
        const booking = this.booking();
        const group_booking = this.group_parent_booking();
        const extension_data =
            group_booking?.extension_data || booking.extension_data || {};
        const group_members = extension_data.group_members || [];
        const linked_children = (booking.linked_bookings || []).filter(
            (_) => _.parent_id === group_booking?.id,
        );
        const size = group_members.length || linked_children.length;
        if (!group_booking && !size) return null;
        return {
            name: extension_data.group || booking.group,
            resource_type: extension_data.group_resource_type || '',
            size,
        };
    });

    public readonly is_in_progress = computed(() => {
        const ts = Date.now();
        const start = this.booking()?.booking_start * 1000;
        const end = this.booking()?.booking_end * 1000;
        if (this.booking()?.all_day) return start <= ts;
        return start <= ts && ts <= end;
    });

    public readonly time_format = this._settings.time_format_signal;

    /** Request status of the booking, `pending` for anything but parking requests */
    private readonly _parking_status = computed(() => {
        const booking = this.booking();
        const is_parking_request =
            booking?.booking_type === 'parking' &&
            booking?.status === 'tentative';
        return is_parking_request ? parkingRequestStatus(booking) : 'pending';
    });

    public readonly booking_status = computed(() => {
        if (this.booking()?.is_done) return 'neutral';
        if (this.booking()?.status === 'approved') return 'success';
        if (this.booking()?.status === 'declined') return 'error';
        if (this.booking()?.status === 'tentative') {
            if (this._parking_status() === 'waitlist' && this.show_waitlist())
                return 'info';
            if (this._parking_status() === 'approval_required')
                return 'approval';
            return 'warning';
        }
        return 'warning';
    });

    public readonly period = computed(() => {
        if (this.booking()?.is_all_day) return i18n('COMMON.ALL_DAY');
        const start = this.booking()?.date || Date.now();
        const duration = this.booking()?.duration || 60;
        const end = addMinutes(start, duration);
        const dur = formatDuration({
            hours: Math.floor(duration / 60),
            minutes: duration % 60,
        })
            .replace(' hour', 'hr')
            .replace(' minute', 'min');
        return `${format(start, this.time_format())} - ${format(
            end,
            this.time_format(),
        )} (${dur})`;
    });

    public showRequest(id: string) {
        return this._show_request()[id];
    }

    public toggleRequest(id: string) {
        this._show_request.update((value) => ({
            ...value,
            [id]: !value[id],
        }));
    }

    public async toggleCheckedIn() {
        const bkn = this.booking();
        if (bkn.checked_in) {
            const resource_name =
                bkn.booking_type === 'parking'
                    ? 'parking space'
                    : bkn.booking_type;
            const response = await openConfirmModal(
                {
                    title: i18n('COMMON.CHECK_OUT'),
                    content:
                        'You are currently checked in.<br/>' +
                        `Would you like to check out of your ${resource_name} now?<br/>` +
                        `This will make the ${resource_name} available for others to book.`,
                    confirm_text: i18n('COMMON.CHECK_OUT'),
                    icon: { content: 'logout' },
                },
                this._dialog,
            );
            if (response.reason !== 'done') return;
            response.close();
        }
        this.checking_in.set(true);
        const updated_booking = await setBookingCheckedIn(
            bkn,
            !bkn.checked_in,
        ).catch((_) => {
            notifyError(
                i18n(
                    bkn.checked_in
                        ? 'BOOKINGS.CHECK_OUT_ERROR'
                        : 'BOOKINGS.CHECK_IN_ERROR',
                ),
            );
            this.checking_in.set(false);
            throw _;
        });
        this.booking.set(updated_booking);
        this.checked_out.set(!updated_booking.checked_in);
        notifySuccess(
            i18n(
                updated_booking.checked_in
                    ? 'BOOKINGS.CHECK_IN_SUCCESS'
                    : 'BOOKINGS.CHECK_OUT_SUCCESS',
            ),
        );
        this._data.refresh_fn?.();
        this.checking_in.set(false);
    }

    public readonly recurr_tooltip = computed(
        () =>
            formatRecurrence(
                fromBookingRecurrence(this.booking()),
                this.booking()?.date,
            ) || i18n('CALENDAR_EVENT.RECURRING_TOOLTIP'),
    );

    public status(id: string): string {
        const booking = this.booking().linked_bookings.find(
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
        this.hide_map.set(true);
        const ref = this._dialog.open(MapLocateModalComponent, {
            width: '100vw',
            height: '100vh',
            maxWidth: '100vw',
            maxHeight: '100vh',
            panelClass: 'fullscreen-dialog',
            data: {
                item: {
                    id: this.booking().asset_id,
                    name: this.booking().asset_name,
                    map_id:
                        this.booking().extension_data.map_id ||
                        this.booking().asset_id,
                    level: this.level,
                },
            },
        });
        ref.afterClosed().subscribe(() => this.hide_map.set(false));
    }

    public setDeskHeight() {
        this._dialog.open(DeskSettingsModalComponent, {
            data: {
                id: this.booking().asset_ids[0] || this.booking().asset_id,
            },
        });
    }

    private _looksLikeEmail(value: string) {
        return !!value && value.includes('@');
    }
}
