import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Booking } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { addDays, format, isSameDay, startOfWeek } from 'date-fns';

@Component({
    selector: 'parking-requests-week-view',
    template: `
        <div class="border-base-200 flex items-center gap-3 border-b px-3 py-2">
            <div class="flex items-center gap-2 text-xs">
                <span
                    class="inline-block h-2.5 w-2.5 rounded-full"
                    [style.background-color]="request_type_color('standard')"
                ></span>
                <span>{{ request_type_label('standard') | translate }}</span>
            </div>
            <div class="flex items-center gap-2 text-xs">
                <span
                    class="inline-block h-2.5 w-2.5 rounded-full"
                    [style.background-color]="request_type_color('after_hours')"
                ></span>
                <span>{{ request_type_label('after_hours') | translate }}</span>
            </div>
            <div class="flex items-center gap-2 text-xs">
                <span
                    class="inline-block h-2.5 w-2.5 rounded-full"
                    [style.background-color]="request_type_color('special')"
                ></span>
                <span>{{ request_type_label('special') | translate }}</span>
            </div>
        </div>
        <div timeline class="z-0 grid h-full w-full flex-1 overflow-auto">
            <div
                day-headers
                class="border-base-300 bg-base-100 sticky top-0 z-20 flex min-w-full items-center border-b"
                [style.width]="days().length * 16 + 'rem'"
            >
                @for (date of days(); track date) {
                    <div
                        class="relative flex h-full min-w-64 flex-1 flex-col items-center justify-center py-2 leading-tight"
                    >
                        <div class="truncate">
                            {{ date | date: 'EEE, MMM d' }}
                        </div>
                        @if (is_today(date)) {
                            <div
                                class="text-info absolute bottom-1 left-1/2 -translate-x-1/2 text-xs"
                            >
                                {{ 'COMMON.TODAY' | translate }}
                            </div>
                        }
                        <div
                            class="bg-base-300 absolute right-0 bottom-0 h-2 w-px"
                        ></div>
                    </div>
                }
            </div>
            <div
                date-blocks
                class="relative flex min-h-full min-w-full overflow-hidden"
                [style.width]="days().length * 16 + 'rem'"
            >
                @for (date of days(); track date) {
                    <div
                        class="border-base-200 min-w-64 flex-1 space-y-2 overflow-auto border-r p-2"
                    >
                        @for (
                            event of events_map()[date] || [];
                            track event.id + '-' + event.instance
                        ) {
                            <div
                                class="border-base-300 bg-base-100 relative space-y-1 rounded-sm border p-2"
                                [style.border-left-width.rem]="0.35"
                                [style.border-left-color]="
                                    request_type_color(request_type(event))
                                "
                            >
                                <div class="absolute top-0 right-2 z-20">
                                    @if (request_type(event) === 'special') {
                                        <button
                                            icon
                                            matRipple
                                            [matTooltip]="
                                                'BOOKINGS.P2_SPECIAL_NEEDS_DETAILS'
                                                    | translate
                                            "
                                            (click)="
                                                view_special_needs_request()(
                                                    event
                                                )
                                            "
                                        >
                                            <icon class="text-xl"
                                                >description</icon
                                            >
                                        </button>
                                    }
                                </div>
                                <div class="text-xs opacity-60">
                                    {{
                                        event.all_day ||
                                        event.duration > 12 * 60
                                            ? ('COMMON.ALL_DAY' | translate)
                                            : (event.date
                                                  | date: time_format()) +
                                              ' - ' +
                                              (event.date_end
                                                  | date: time_format())
                                    }}
                                </div>
                                <div class="truncate text-xs">
                                    {{ event.user_name || event.user_email }}
                                </div>
                                <div class="text-xs opacity-60">
                                    {{ event?.extension_data?.plate_number }}
                                </div>
                                <div class="flex items-center justify-between">
                                    <div
                                        class="rounded-full px-2 py-1 text-xs"
                                        [class.bg-success]="
                                            event?.status === 'approved'
                                        "
                                        [class.text-success-content]="
                                            event?.status === 'approved'
                                        "
                                        [class.bg-error]="
                                            event?.status === 'declined'
                                        "
                                        [class.text-error-content]="
                                            event?.status === 'declined'
                                        "
                                        [class.bg-neutral]="
                                            event?.status === 'ended'
                                        "
                                        [class.text-neutral-content]="
                                            event?.status === 'ended'
                                        "
                                        [class.bg-warning]="
                                            event?.status === 'tentative'
                                        "
                                        [class.text-warning-content]="
                                            event?.status === 'tentative'
                                        "
                                    >
                                        {{
                                            status_label(event?.status)
                                                | translate
                                        }}
                                    </div>
                                    <div class="flex items-center space-x-1">
                                        <button
                                            icon
                                            matRipple
                                            (click)="approve()(event)"
                                            [disabled]="
                                                event?.status === 'approved' ||
                                                event?.status === 'ended'
                                            "
                                            [matTooltip]="
                                                'APP.CONCIERGE.PARKING_APPROVE'
                                                    | translate
                                            "
                                        >
                                            <icon class="text-xl"
                                                >event_available</icon
                                            >
                                        </button>
                                        <button
                                            icon
                                            matRipple
                                            (click)="reject()(event)"
                                            [disabled]="
                                                event?.status === 'declined' ||
                                                event?.status === 'ended'
                                            "
                                            [matTooltip]="
                                                'APP.CONCIERGE.PARKING_DECLINE'
                                                    | translate
                                            "
                                        >
                                            <icon class="text-xl"
                                                >event_busy</icon
                                            >
                                        </button>
                                        <button
                                            icon
                                            matRipple
                                            [disabled]="
                                                event.checked_in ||
                                                event.state === 'in_progress' ||
                                                event.status === 'ended'
                                            "
                                            [matTooltip]="
                                                'APP.CONCIERGE.PARKING_ASSIGN_SPACE'
                                                    | translate
                                            "
                                            (click)="assign_space()(event)"
                                        >
                                            <icon class="text-xl"
                                                >add_location</icon
                                            >
                                        </button>
                                    </div>
                                </div>
                            </div>
                        } @empty {
                            <div
                                class="text-base-content/30 w-full rounded-sm p-4 text-center text-xs uppercase"
                            >
                                No requests
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
                height: 100%;
            }

            [timeline] {
                grid-template-rows: 3rem auto;
            }
        `,
    ],
    imports: [
        CommonModule,
        MatRippleModule,
        MatTooltipModule,
        IconComponent,
        TranslatePipe,
    ],
})
export class ParkingRequestsWeekViewComponent {
    public readonly booking_events = input<Booking[]>([]);
    public readonly date = input<number>(Date.now());
    public readonly week_start = input<number>(0);
    public readonly time_format = input<string>('shortTime');

    public readonly approve = input<(e: Booking) => void>(() => undefined);
    public readonly reject = input<(e: Booking) => void>(() => undefined);
    public readonly assign_space = input<(e: Booking) => void>(() => undefined);
    public readonly view_special_needs_request = input<(e: Booking) => void>(
        () => undefined,
    );

    public readonly days = computed(() =>
        new Array(7).fill(0).map((_, index) =>
            addDays(
                startOfWeek(this.date(), {
                    weekStartsOn: this.week_start() as
                        | 0
                        | 1
                        | 2
                        | 3
                        | 4
                        | 5
                        | 6,
                }),
                index,
            ).valueOf(),
        ),
    );

    public readonly events_map = computed(() => {
        const data: Record<number, Booking[]> = {};
        const day_list = this.days();
        const events = this.booking_events();
        for (const day of day_list) {
            const day_key = format(day, 'yyyy-MM-dd');
            data[day] = events
                .filter((event) => format(event.date, 'yyyy-MM-dd') === day_key)
                .sort((a, b) => a.date - b.date);
        }
        return data;
    });

    public readonly is_today = (date: number) => isSameDay(date, Date.now());

    public readonly request_type = (booking: Booking) =>
        booking?.extension_data?.request_type || '';

    public readonly request_type_color = (request_type: string) =>
        request_type === 'special'
            ? '#ef4444'
            : request_type === 'after_hours'
              ? '#f59e0b'
              : '#3b82f6';
    private readonly _request_type_labels: Record<string, string> = {
        standard: 'Standard',
        special: 'P2',
        after_hours: 'After-hours',
    };

    public readonly request_type_label = (request_type: string) =>
        this._request_type_labels[request_type] || 'COMMON.EMPTY';

    public readonly status_label = (status: string) =>
        status === 'ended'
            ? 'APP.CONCIERGE.BOOKING_STATUS_ENDED'
            : status === 'approved'
              ? 'APP.CONCIERGE.BOOKING_STATUS_APPROVED'
              : status === 'declined'
                ? 'APP.CONCIERGE.BOOKING_STATUS_DECLINED'
                : 'APP.CONCIERGE.BOOKING_STATUS_PENDING';
}
