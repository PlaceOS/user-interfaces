import { CommonModule } from '@angular/common';
import { Component, computed, DestroyRef, inject, input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {
    Booking,
    currentUser,
    formatDuration,
    formatRecurrence,
    fromBookingRecurrence,
    i18n,
    SettingsService,
} from '@placeos/common';
import { addMinutes, format, isSameDay } from 'date-fns';

import { OrganisationService } from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { StatusPillComponent } from 'libs/components/src/lib/status-pill.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { GroupEventDetailsModalComponent } from '../../../events/src/lib/group-event-details-modal.component';
import { BookingDetailsModalComponent } from './booking-details-modal.component';
import { parkingRequestStatus } from './booking.utilities';
import { ParkingService } from './parking.service';

@Component({
    selector: 'booking-card',
    template: `
        @if (booking()) {
            <h4 class="mb-2 flex items-center">
                @if (show_day()) {
                    <span day>{{ day() }},&nbsp;</span>
                }
                {{ booking()?.date | date: time_format() }}
                <span class="px-2 text-xs"
                    >({{ booking()?.date | date: 'zzzz' }})</span
                >
            </h4>
        }
        @if (booking()) {
            <a
                name="view-booking-details"
                class="relative w-full cursor-pointer overflow-hidden"
                [routerLink]="['./']"
                [queryParams]="{
                    booking: booking()?.id,
                }"
                (click)="viewDetails()"
            >
                <div
                    class="border-base-300 bg-base-100 relative w-full rounded-xl border py-4 shadow-sm"
                >
                    <h4 class="px-4 text-lg">{{ booking()?.title }}</h4>
                    <div class="mx-4 my-2 flex items-center space-x-2">
                        <status-pill [status]="status()">{{
                            period()
                        }}</status-pill>
                        @if (!for_current_user() && booked_for_label()) {
                            <div
                                booked-for
                                class="text-base-content/70 flex min-w-0 items-center space-x-1 text-sm"
                            >
                                <icon class="text-lg">person</icon>
                                <span class="truncate">
                                    {{
                                        'BOOKINGS.BOOKED_FOR'
                                            | translate
                                                : { name: booked_for_label() }
                                    }}
                                </span>
                            </div>
                        }
                        @if (booking().instance) {
                            <icon
                                class="text-2xl"
                                [matTooltip]="recurr_tooltip()"
                                >event_repeat</icon
                            >
                        }
                    </div>
                    <div
                        class="divide-base-200-500 flex flex-col flex-wrap space-y-2 py-2 sm:flex-row sm:space-y-0 sm:divide-x"
                    >
                        <div class="flex max-w-[33%] items-center px-4">
                            @switch (type()) {
                                @case ('desk') {
                                    <icon
                                        [matTooltip]="
                                            'RESOURCE.DESK' | translate
                                        "
                                        matTooltipPosition="right"
                                        >desk</icon
                                    >
                                }
                                @case ('locker') {
                                    <icon
                                        [matTooltip]="
                                            'RESOURCE.LOCKER' | translate
                                        "
                                        matTooltipPosition="right"
                                        >lock</icon
                                    >
                                }
                                @case ('parking') {
                                    <icon
                                        [matTooltip]="
                                            'RESOURCE.PARKING' | translate
                                        "
                                        matTooltipPosition="right"
                                        >drive_eta</icon
                                    >
                                }
                                @case ('visitor') {
                                    <icon
                                        [matTooltip]="
                                            'RESOURCE.VISITOR' | translate
                                        "
                                        matTooltipPosition="right"
                                        >people</icon
                                    >
                                }
                                @default {
                                    <icon>book</icon>
                                }
                            }
                            <div class="mx-2 w-1/2 flex-1 truncate">
                                {{ resource_label() }}
                            </div>
                        </div>
                        @if (location()) {
                            <div class="flex items-center px-4">
                                <icon>place</icon>
                                <div class="mx-2 truncate">
                                    {{ location() }}
                                </div>
                            </div>
                        }
                    </div>
                    <icon
                        class="absolute top-1/2 right-1 -translate-y-1/2 text-4xl"
                    >
                        chevron_right
                    </icon>
                    @if (booking()?.checked_in && !booking()?.is_done) {
                        <div
                            checked-in-badge
                            class="bg-success text-success-content absolute top-2 right-2 flex items-center space-x-1 rounded-xl px-2 py-1 text-xs"
                        >
                            <icon class="text-sm">check_circle</icon>
                            <span>{{ 'COMMON.CHECKED_IN' | translate }}</span>
                        </div>
                    }
                    @if (
                        !booking()?.checked_in &&
                        !for_current_user() &&
                        booking()?.booking_type !== 'group-event'
                    ) {
                        <div
                            class="bg-warning/50 absolute top-2 right-2 rounded-xl px-2 py-1 text-xs"
                        >
                            {{ 'BOOKINGS.ASSOCIATE' | translate }}
                        </div>
                    }
                    @if (
                        !booking()?.checked_in &&
                        booking()?.booking_type === 'group-event'
                    ) {
                        <div
                            class="bg-warning/50 absolute top-2 right-2 rounded-xl px-2 py-1 text-xs"
                        >
                            {{ 'RESOURCE.EVENT' | translate }}
                        </div>
                    }
                    @if (
                        !booking()?.checked_in && is_reserved_parking_space()
                    ) {
                        <div
                            class="bg-warning/50 absolute top-2 right-2 rounded-xl px-2 py-1 text-xs"
                        >
                            {{
                                (booking().status !== 'declined'
                                    ? 'COMMON.STATUS_RESERVED'
                                    : 'BOOKINGS.RELEASED'
                                ) | translate
                            }}
                        </div>
                    }
                </div>
            </a>
        }
    `,
    styles: [
        `
            :host {
                display: block;
                width: 100%;
                position: relative;
            }
        `,
    ],
    imports: [
        CommonModule,
        TranslatePipe,
        IconComponent,
        StatusPillComponent,
        RouterModule,
        MatTooltipModule,
    ],
})
export class BookingCardComponent {
    private _dialog = inject(MatDialog);
    private _route = inject(ActivatedRoute);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _parking = inject(ParkingService);

    public readonly booking = input<Booking>(undefined);
    public readonly show_day = input(false);
    public readonly edit_fn = input((i) => null);
    public readonly remove_fn = input((i, s?) => null);
    public readonly end_fn = input((i) => null);
    public readonly refresh_fn = input<() => void>();

    public readonly raw_description = computed(() =>
        this.removeHtmlTags(this.booking()?.description),
    );

    public readonly is_reserved_parking_space = computed(() => {
        const space = this._parking.assigned_space();
        return (
            this.booking()?.booking_type === 'parking' &&
            !!space &&
            this.booking()?.asset_id === space.id
        );
    });

    public readonly for_current_user = computed(
        () =>
            this.booking()?.user_email?.toLowerCase() ===
            currentUser()?.email?.toLowerCase(),
    );

    public readonly booked_for_label = computed(() => {
        const booking = this.booking();
        if (!booking) return '';
        return (
            `${booking.user_name || ''}`.trim() ||
            this._formatEmailName(`${booking.user_email || ''}`.trim())
        );
    });

    public readonly show_waitlist = this._settings.signal(
        'parking.show_waitlist',
        true,
    );
    public readonly hide_selected_parking_space = this._settings.signal(
        'parking.hide_selected_space',
        false,
    );

    /** Request status of the booking, `pending` for anything but parking requests */
    private readonly _parking_status = computed(() => {
        const booking = this.booking();
        const is_parking_request =
            booking?.booking_type === 'parking' &&
            booking?.status === 'tentative';
        return is_parking_request ? parkingRequestStatus(booking) : 'pending';
    });

    public readonly time_format = this._settings.time_format_signal;

    public readonly status = computed(() => {
        const booking = this.booking();
        if (booking?.is_done) return 'neutral';
        if (booking?.status === 'approved') return 'success';
        if (booking?.status === 'declined') return 'error';
        if (booking?.status === 'cancelled') return 'error';
        if (booking?.status === 'tentative') {
            if (this._parking_status() === 'waitlist' && this.show_waitlist())
                return 'info';
            if (this._parking_status() === 'approval_required')
                return 'approval';
            return 'warning';
        }
        return 'warning';
    });

    public readonly recurr_tooltip = computed(
        () =>
            formatRecurrence(
                fromBookingRecurrence(this.booking()),
                this.booking()?.date,
            ) || i18n('CALENDAR_EVENT.RECURRING_TOOLTIP'),
    );

    public readonly type = computed(() => this.booking()?.type);

    public readonly day = computed(() => {
        const date = this.booking()?.date || Date.now();
        const is_today = isSameDay(Date.now(), date);
        return `${is_today ? i18n('COMMON.TODAY') : format(date, 'EEEE')}`;
    });

    public readonly location = computed(() => {
        const level = this._org.levelWithID(this.booking()?.zones || []);
        return `${level?.display_name || level?.name || ''}`;
    });

    public readonly period = computed(() => {
        const booking = this.booking();
        if (booking?.is_all_day) return i18n('COMMON.ALL_DAY');
        const start = booking?.date || Date.now();
        const duration = booking?.duration || 60;
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

    public readonly resource_label = computed(() => {
        const booking = this.booking();
        if (!booking) return '';
        if (
            booking.booking_type === 'parking' &&
            this.hide_selected_parking_space()
        ) {
            return i18n('RESOURCE.PARKING');
        }
        if (booking.booking_type !== 'visitor') {
            return (
                this.raw_description() || booking.asset_name || booking.asset_id
            );
        }
        return this._visitorDisplayNameFor(booking);
    });

    private _open_timer: ReturnType<typeof setTimeout>;

    constructor() {
        const destroy_ref = inject(DestroyRef);
        destroy_ref.onDestroy(() => clearTimeout(this._open_timer));
        this._route.queryParamMap
            .pipe(takeUntilDestroyed())
            .subscribe((params) =>
                params.has('booking') &&
                this.booking()?.id === params.get('event')
                    ? this.viewDetails()
                    : '',
            );
    }

    public removeHtmlTags(html: string) {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || '';
    }

    public viewDetails() {
        if (!this.booking()) return;
        clearTimeout(this._open_timer);
        this._open_timer = setTimeout(() => {
            this._dialog.closeAll();
            const view_component: any =
                this.booking().booking_type === 'group-event'
                    ? GroupEventDetailsModalComponent
                    : BookingDetailsModalComponent;
            const booking = this.booking();
            const data = {
                booking:
                    booking.booking_type === 'group-event'
                        ? { booking: booking, concierge: false }
                        : booking,
                edit_fn: this.edit_fn(),
                remove_fn: this.remove_fn(),
                end_fn: this.end_fn(),
                refresh_fn: this.refresh_fn(),
            };
            this._dialog.open(view_component, { data });
        }, 300);
    }

    private _visitorDisplayNameFor(booking: Booking) {
        const asset_id = `${booking?.asset_id || ''}`.trim();
        const group_member_name = this._visitorGroupMemberName(booking);
        if (group_member_name) return group_member_name;
        const attendee_name = this._visitorAttendeeName(booking);
        if (attendee_name) return attendee_name;
        const asset_name =
            `${booking?.extension_data?.visitor_name || booking?.asset_name || ''}`.trim();
        const reason_values = [
            `${booking?.title || ''}`.trim().toLowerCase(),
            `${booking?.description || ''}`.trim().toLowerCase(),
        ].filter((_) => !!_);
        if (
            asset_name &&
            asset_name.toLowerCase() !== asset_id.toLowerCase() &&
            !reason_values.includes(asset_name.toLowerCase())
        ) {
            return asset_name;
        }
        return this._formatEmailName(asset_id || asset_name || 'Visitor');
    }

    private _visitorGroupMemberName(booking: Booking) {
        const member = (booking.extension_data?.group_members || []).find(
            (item) => item?.email === booking.asset_id,
        );
        const name = `${member?.name || ''}`.trim();
        return name || '';
    }

    private _visitorAttendeeName(booking: Booking) {
        const attendee =
            (booking.attendees || []).find(
                (item) => item?.email === booking.asset_id,
            ) || booking.attendees?.[0];
        const name = `${attendee?.name || ''}`.trim();
        return name || '';
    }

    private _formatEmailName(value: string) {
        if (!value.includes('@')) return value;
        const [local_part] = value.split('@');
        const formatted_local = local_part
            .replace(/[._-]+/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
        if (!formatted_local) return value;
        return formatted_local.replace(/\b\w/g, (char) => char.toUpperCase());
    }
}
