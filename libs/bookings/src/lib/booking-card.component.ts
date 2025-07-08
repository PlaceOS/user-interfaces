import {
    Component,
    OnChanges,
    OnInit,
    SimpleChanges,
    inject,
    input,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {
    SettingsService,
    currentUser,
    formatDuration,
    formatRecurrence,
    fromBookingRecurrence,
    i18n,
} from '@placeos/common';
import { addMinutes, format, isSameDay } from 'date-fns';
import { map } from 'rxjs/operators';

import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AsyncHandler } from 'libs/common/src/lib/async-handler.class';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { StatusPillComponent } from 'libs/components/src/lib/status-pill.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { GroupEventDetailsModalComponent } from '../../../events/src/lib/group-event-details-modal.component';
import { BookingDetailsModalComponent } from './booking-details-modal.component';
import { Booking } from './booking.class';
import { ParkingService } from './parking.service';

@Component({
    selector: 'booking-card',
    template: `
        @if (booking()) {
            <h4 class="mb-2 flex items-center">
                @if (show_day()) {
                    <span day>{{ day }},&nbsp;</span>
                }
                {{ booking()?.date | date: time_format }}
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
                [queryParams]="{ booking: booking()?.id }"
                (click)="viewDetails()"
            >
                <div
                    class="relative w-full rounded-xl border border-base-300 bg-base-100 py-4 shadow"
                >
                    <h4 class="px-4 text-lg">{{ booking()?.title }}</h4>
                    <div class="mx-4 my-2 flex items-center space-x-2">
                        <status-pill [status]="status">{{
                            period
                        }}</status-pill>
                        @if (booking().instance) {
                            <icon class="text-2xl" [matTooltip]="recurr_tooltip"
                                >event_repeat</icon
                            >
                        }
                    </div>
                    <div
                        class="divide-base-200-500 flex flex-col flex-wrap space-y-2 py-2 sm:flex-row sm:space-y-0 sm:divide-x"
                    >
                        <div class="flex max-w-[33%] items-center px-4">
                            @switch (type) {
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
                                {{
                                    raw_description ||
                                        booking()?.asset_name ||
                                        booking()?.asset_id
                                }}
                            </div>
                        </div>
                        @if (location) {
                            <div class="flex items-center px-4">
                                <icon>place</icon>
                                <div class="mx-2 truncate">{{ location }}</div>
                            </div>
                        }
                    </div>
                    <icon
                        class="absolute right-1 top-1/2 -translate-y-1/2 text-4xl"
                    >
                        chevron_right
                    </icon>
                    @if (
                        !for_current_user &&
                        booking()?.booking_type !== 'group-event'
                    ) {
                        <div
                            class="bg-warning/50 absolute right-2 top-2 rounded-xl px-2 py-1 text-xs"
                        >
                            {{ 'BOOKINGS.ASSOCIATE' | translate }}
                        </div>
                    }
                    @if (booking()?.booking_type === 'group-event') {
                        <div
                            class="bg-warning/50 absolute right-2 top-2 rounded-xl px-2 py-1 text-xs"
                        >
                            {{ 'BOOKINGS.EVENT' | translate }}
                        </div>
                    }
                    @if (is_reserved_parking_space | async) {
                        <div
                            class="bg-warning/50 absolute right-2 top-2 rounded-xl px-2 py-1 text-xs"
                        >
                            {{
                                (booking().status !== 'declined'
                                    ? 'BOOKINGS.RESERVED'
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
export class BookingCardComponent
    extends AsyncHandler
    implements OnInit, OnChanges
{
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

    public raw_description = '';

    public readonly is_reserved_parking_space =
        this._parking.assigned_space.pipe(
            map(
                (space) =>
                    this.booking().booking_type === 'parking' &&
                    space &&
                    this.booking().asset_id === space.id,
            ),
        );

    public get for_current_user() {
        return (
            this.booking()?.user_email.toLowerCase() ===
            currentUser()?.email.toLowerCase()
        );
    }

    public get time_format() {
        return this._settings.time_format;
    }

    public get status() {
        const booking = this.booking();
        if (booking?.is_done) return 'neutral';
        if (booking?.status === 'approved') return 'success';
        if (booking?.status === 'declined') return 'error';
        if (booking?.status === 'cancelled') return 'error';
        if (booking?.status === 'tentative') return 'warning';
        return 'warning';
    }

    public get recurr_tooltip() {
        return (
            formatRecurrence(fromBookingRecurrence(this.booking())) ||
            i18n('CALENDAR_EVENT.RECURRING_TOOLTIP')
        );
    }

    constructor() {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) =>
                params.has('booking') &&
                this.booking()?.id === params.get('event')
                    ? this.viewDetails()
                    : '',
            ),
        );
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.booking) {
            this.raw_description = this.removeHtmlTags(
                this.booking()?.description,
            );
        }
    }

    public get type() {
        return this.booking().type;
    }

    public get day() {
        const date = this.booking()?.date || Date.now();
        const is_today = isSameDay(Date.now(), date);
        return `${is_today ? i18n('COMMON.TODAY') : format(date, 'EEEE')}`;
    }

    public get location() {
        const level = this._org.levelWithID(this.booking()?.zones || []);
        return `${level?.display_name || level?.name || ''}`;
    }

    public get period() {
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
        return `${format(start, this.time_format)} - ${format(
            end,
            this.time_format,
        )} (${dur})`;
    }

    public removeHtmlTags(html: string) {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || '';
    }

    public viewDetails() {
        if (!this.booking()) return;
        this.timeout('open', () => {
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
            };
            this._dialog.open(view_component, { data });
        });
    }
}
