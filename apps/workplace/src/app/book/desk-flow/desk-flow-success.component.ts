import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    inject,
    OnDestroy,
    OnInit,
    signal,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import {
    BookingFormService,
    GroupBookingFailure,
    showBooking,
} from '@placeos/bookings';
import {
    Booking,
    Building,
    BuildingLevel,
    currentUser,
    formatRecurrence,
    fromBookingRecurrence,
    OrganisationService,
    SettingsService,
    unique,
} from '@placeos/common';
import {
    BuildingPipe,
    IconComponent,
    LevelPipe,
    SafePipe,
    SanitizePipe,
    TranslatePipe,
    UserAvatarComponent,
} from '@placeos/components';
import {
    generateCalendarFileLink,
    generateGoogleCalendarLink,
    generateMicrosoftCalendarLink,
} from '@placeos/events';

interface GroupBookingListItem {
    id: string;
    name: string;
    email: string;
    asset_name: string;
    failed: boolean;
    error?: string;
}

@Component({
    selector: 'desk-flow-success',
    styles: [],
    template: `
        <div
            class="bg-base-100 absolute inset-0 z-50 flex flex-col overflow-auto"
        >
            <main
                class="flex flex-1 flex-col items-center justify-center space-y-2 p-8"
            >
                @if (!is_group()) {
                    <h2 class="text-center text-2xl font-medium">
                        {{
                            'BOOKINGS.ITEM_BOOKED'
                                | translate
                                    : {
                                          name:
                                              last_event()?.asset_name ||
                                              last_event()?.asset_id,
                                      }
                        }}
                    </h2>
                }
                <img src="assets/icons/success.svg" />
                @if (last_event()) {
                    <p class="max-w-160 text-center">
                        @let details =
                            {
                                date:
                                    last_event()?.date || 0
                                    | date: 'mediumDate',
                                time:
                                    (last_event()?.date || 0
                                        | date: time_format) +
                                    ' - ' +
                                    (last_event().date +
                                        last_event().duration * 60 * 1000
                                        | date: time_format),
                                size: group_size(),
                                location: location(),
                            };
                        @if (is_group()) {
                            @if (last_event()?.all_day) {
                                {{
                                    'BOOKINGS.DESK_SUCCESS_GROUP_ALLDAY'
                                        | translate: details
                                }}
                            } @else {
                                {{
                                    'BOOKINGS.DESK_SUCCESS_GROUP'
                                        | translate: details
                                }}
                            }
                        } @else {
                            @if (last_event()?.all_day) {
                                {{
                                    'BOOKINGS.DESK_SUCCESS_LONE_ALLDAY'
                                        | translate: details
                                }}
                            } @else {
                                {{
                                    'BOOKINGS.DESK_SUCCESS_LONE'
                                        | translate: details
                                }}
                            }
                        }
                    </p>
                }
                @if (
                    last_event()?.recurrence_type &&
                    last_event()?.recurrence_type !== 'none'
                ) {
                    <div
                        class="bg-base-200 flex items-center space-x-2 rounded-lg px-4 py-2"
                    >
                        <icon class="text-xl">update</icon>
                        <div class="text-sm">{{ formatted_recurrence() }}</div>
                    </div>
                }
                @if (show_booked_for()) {
                    <p class="text-sm">Booked for {{ booked_for_name() }}</p>
                }
                @if (is_group() && group_booking_items().length > 0) {
                    <div
                        class="border-base-300 bg-base-100 mt-4 w-full max-w-lg rounded-lg border p-4"
                    >
                        <h3
                            class="mb-3 flex items-center space-x-2 font-medium"
                        >
                            <icon class="text-xl">group</icon>
                            <span>{{
                                'BOOKINGS.DESK_GROUP_BOOKINGS' | translate
                            }}</span>
                        </h3>
                        <div class="flex flex-col space-y-2">
                            @for (
                                item of group_booking_items();
                                track item.id
                            ) {
                                <div
                                    class="bg-base-200/50 border-base-200 flex items-center space-x-3 rounded border p-2"
                                    [class.border-error]="item.failed"
                                >
                                    <a-user-avatar
                                        [user]="
                                            $any({
                                                name: item.name,
                                                email: item.email,
                                            })
                                        "
                                    />
                                    <div class="flex flex-1 flex-col">
                                        <span class="font-medium">{{
                                            item.name || item.email
                                        }}</span>
                                        <span class="text-sm opacity-60">
                                            {{ item.asset_name }}
                                        </span>
                                        @if (item.failed) {
                                            <span class="text-error text-xs">
                                                {{ item.error }}
                                            </span>
                                        }
                                    </div>
                                    @if (item.failed) {
                                        <icon class="text-error text-2xl">
                                            error
                                        </icon>
                                    } @else {
                                        <icon class="text-success text-2xl">
                                            check_circle
                                        </icon>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                }
                @if (last_event()?.extension_data?.assets?.length) {
                    <p assets>
                        {{
                            'BOOKINGS.ASSETS_BOOKED'
                                | translate
                                    : {
                                          count: last_event()?.extension_data
                                              ?.assets?.length,
                                      }
                        }}
                    </p>
                }
                @if (true) {
                    <p>
                        {{ 'BOOKINGS.SUCCESS_WAIT_APPROVED' | translate }}
                    </p>
                }
                @if (show_links) {
                    <div
                        class="relative flex flex-col items-center space-y-4 p-4"
                    >
                        <a
                            btn
                            matRipple
                            name="desk-outlook-link"
                            class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                            [href]="outlook_link() | sanitize: 'url'"
                            target="_blank"
                            rel="noopener noreferer"
                        >
                            <img src="assets/icons/outlook.svg" class="w-6" />
                            <span>{{
                                'BOOKINGS.LINK_OUTLOOK' | translate
                            }}</span>
                        </a>
                        <a
                            btn
                            matRipple
                            name="desk-google-link"
                            class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                            [href]="google_link() | sanitize: 'url'"
                            target="_blank"
                            rel="noopener noreferer"
                        >
                            <img src="assets/icons/gcal.svg" class="w-6" />
                            <span>{{
                                'BOOKINGS.LINK_GOOGLE' | translate
                            }}</span>
                        </a>
                        <a
                            btn
                            matRipple
                            name="desk-ical-link"
                            class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                            [href]="ical_link() | safe: 'url'"
                            target="_blank"
                            rel="noopener noreferer"
                        >
                            <icon class="text-xl">download</icon>
                            <span>{{ 'BOOKINGS.LINK_ICAL' | translate }}</span>
                        </a>
                    </div>
                }
            </main>
            <footer
                class="border-base-200 bg-base-100 sticky bottom-0 mt-4 flex w-full items-center justify-center border-t p-2"
            >
                <a
                    btn
                    name="desk-confirm-continue"
                    matRipple
                    class="mx-auto w-full max-w-lg"
                    [routerLink]="['/']"
                >
                    {{ 'APP.WORKPLACE.BOOKING_FINISHED' | translate }}
                </a>
            </footer>
        </div>
    `,
    providers: [LevelPipe, BuildingPipe],
    imports: [
        CommonModule,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        RouterModule,
        SanitizePipe,
        SafePipe,
        UserAvatarComponent,
    ],
})
export class NewDeskFlowSuccessComponent implements OnInit, OnDestroy {
    private _org = inject(OrganisationService);
    private _state = inject(BookingFormService);
    private _settings = inject(SettingsService);
    private _level_pipe = inject(LevelPipe);
    private _building_pipe = inject(BuildingPipe);

    public readonly level = signal(new BuildingLevel());
    public readonly building = signal(new Building());
    public readonly outlook_link = signal('');
    public readonly google_link = signal('');
    public readonly ical_link = signal('');
    public readonly group_bookings = signal<Booking[]>([]);
    public readonly group_failures = signal<GroupBookingFailure[]>([]);
    public readonly location = computed(() => {
        return `${this.building()?.display_name || this.level()?.name}, ${this.level()?.display_name || this.level()?.name}`;
    });

    public readonly last_event = signal<Booking>(null);
    public readonly group_members = computed(() => {
        return unique(
            this.last_event()?.extension_data?.group_members || [],
            'email',
        );
    });

    public readonly is_group = computed(() => this.group_members().length > 1);

    public readonly group_size = computed(() => {
        const members = this.group_members();
        return members?.length || this.group_bookings().length || 1;
    });

    public readonly group_booking_items = computed<GroupBookingListItem[]>(
        () => {
            const items = this.group_bookings().map((booking) => ({
                id: booking.id,
                name: booking.user_name || booking.user_email,
                email: booking.user_email,
                asset_name: booking.asset_name || booking.asset_id,
                failed: false,
            }));
            const booked_emails = new Set(items.map((_) => _.email));
            const failed = this.group_failures()
                .filter((_) => !booked_emails.has(_.email))
                .map((failure) => ({
                    id: `failed-${failure.email}`,
                    name: failure.name || failure.email,
                    email: failure.email,
                    asset_name:
                        failure.asset_name ||
                        failure.asset_id ||
                        'No desk assigned',
                    failed: true,
                    error: failure.error,
                }));
            return [...items, ...failed];
        },
    );

    public readonly booked_for_name = computed(() => {
        return (
            this.last_event()?.user_name || this.last_event()?.user_email || ''
        );
    });

    public readonly show_booked_for = computed(() => {
        if (!this.booked_for_name()) return false;
        const current_email = currentUser()?.email?.toLowerCase() || '';
        const booked_for_email =
            this.last_event()?.user_email?.toLowerCase() || '';
        if (!booked_for_email || !current_email) return false;
        return booked_for_email !== current_email;
    });

    public readonly formatted_recurrence = computed(() => {
        const event = this.last_event();
        const recurrence = fromBookingRecurrence(event);
        if (!recurrence.type || recurrence.type == 'none') return '';
        return formatRecurrence(recurrence);
    });

    public readonly viewCalendarLinks = () =>
        this._state.openBookingLinkModal();

    public get show_links() {
        return this._settings.get('app.desks.show_calendar_links');
    }
    public get time_format() {
        return this._settings.time_format;
    }

    private _group_bookings_timer?: ReturnType<typeof setTimeout>;

    public async ngOnInit() {
        await this._org.waitUntilInitialised();
        this.last_event.set(this._state.last_success);
        const event: any = {
            ...this.last_event(),
            location: `${this.location()}, ${this.last_event()?.asset_name || ''}`,
        };
        this.outlook_link.set(generateMicrosoftCalendarLink(event));
        this.google_link.set(generateGoogleCalendarLink(event));
        this.ical_link.set(generateCalendarFileLink(event));

        this.level.set(this._level_pipe.transform(event.zones));
        this.building.set(this._building_pipe.transform(event.zones));

        // Load group bookings if this is a group booking
        this._group_bookings_timer = setTimeout(async () => {
            if (this.is_group()) await this._loadGroupBookings();
        }, 100);
    }

    public ngOnDestroy() {
        // The callback reads localStorage and writes to this component's
        // signals, so leaving it pending past destruction does work on a
        // component nobody is looking at any more.
        clearTimeout(this._group_bookings_timer);
    }

    private async _loadGroupBookings() {
        const stored_ids = localStorage.getItem(
            'PLACEOS.last_group_booking_ids',
        );
        const booking_ids: string[] = stored_ids ? JSON.parse(stored_ids) : [];
        const stored_errors = localStorage.getItem(
            'PLACEOS.last_group_booking_errors',
        );
        this.group_failures.set(stored_errors ? JSON.parse(stored_errors) : []);
        if (booking_ids.length <= 1) return;

        try {
            const bookings = await Promise.all(
                booking_ids.map((id) => showBooking(id)),
            );
            this.group_bookings.set(
                bookings.filter((_) => _.booking_type !== 'group'),
            );
        } catch (e) {
            console.error('Failed to load group bookings', e);
        }
    }
}
