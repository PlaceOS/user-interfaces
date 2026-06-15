import {
    computed,
    effect,
    inject,
    Injectable,
    resource,
    signal,
    untracked,
} from '@angular/core';
import {
    alignDateToBookableHours,
    AsyncHandler,
    BookableHoursRange,
    BookingRuleset,
    currentUser,
    i18n,
    isWithinBookableHours,
    notifyError,
    notifySuccess,
    rulesForResource,
    SettingsService,
    StaffUser,
} from '@placeos/common';
import { PlaceAsset, showMetadata } from '@placeos/ts-client';
import {
    endOfDay,
    endOfMinute,
    getUnixTime,
    isSameDay,
    setHours,
    startOfDay,
    startOfMinute,
} from 'date-fns';

import { queryParkingSpacesForZones } from '@placeos/assets';
import { OrganisationService } from '@placeos/common';
import { BookingFormService } from 'libs/bookings/src/lib/booking-form.service';
import { queryBookings } from 'libs/bookings/src/lib/bookings.fn';
import { ParkingService } from 'libs/bookings/src/lib/parking.service';
import { ExploreParkingInfoComponent } from './explore-parking-info.component';
import { DEFAULT_COLOURS } from './explore-spaces.service';
import { ExploreStateService } from './explore-state.service';

export type ParkingSpace = PlaceAsset;

export interface ParkingOptions {
    enable_booking?: boolean;
    date?: number;
    all_day?: boolean;
    zones?: string[];
    host?: StaffUser;
    custom?: boolean;
    use_api?: boolean;
    user?: string;
}

@Injectable()
export class ExploreParkingService extends AsyncHandler {
    private _org = inject(OrganisationService);
    private _state = inject(ExploreStateService);
    private _settings = inject(SettingsService);
    private _bookings = inject(BookingFormService);
    private _parking = inject(ParkingService);

    private _options = signal<ParkingOptions>({});
    private _poll = signal<number>(0);

    private _building = this._org.building_signal;
    private _active_levels = this._org.active_levels_signal;
    private _parking_users = this._parking.users;
    private _assigned_space = this._parking.assigned_space;
    private _deny_parking_access = this._parking.deny_parking_access;
    private _booked_space = this._parking.booked_space;

    public readonly options = this._options.asReadonly();
    public on_book: (ParkingSpace) => Promise<void> = null;

    /** List of available parking levels for the active building */
    public readonly levels = computed(() =>
        this._active_levels().filter((_) => _.tags.includes('parking')),
    );

    private _booking_rules = resource({
        params: () => this._building() || undefined,
        loader: ({ params: bld }) =>
            showMetadata(bld.id, `parking_booking_rules`)
                .then((_) =>
                    _?.details instanceof Array
                        ? (_.details as any as BookingRuleset[])
                        : [],
                )
                .catch(() => [] as BookingRuleset[]),
    });
    public readonly booking_rules = computed<BookingRuleset[]>(
        () => this._booking_rules.value() ?? [],
    );

    /** List of current bookings for the current building */
    private _events = resource({
        params: () => ({
            bld: this._building(),
            is_public: this._state.options().is_public,
            date: this._options().date,
            poll: this._poll(),
        }),
        loader: ({ params: { bld, is_public, date } }) =>
            is_public
                ? Promise.resolve([])
                : queryBookings({
                      period_start: getUnixTime(
                          startOfMinute(date || Date.now()),
                      ),
                      period_end: getUnixTime(endOfMinute(date || Date.now())),
                      type: 'parking',
                      zones: this._settings.get('app.use_region')
                          ? bld?.parent_id
                          : bld?.id,
                      rejected: false,
                  }).catch(() => []),
    });
    /** List of current bookings for the current building */
    public readonly events = computed(() => this._events.value() ?? []);

    /** Any event that the selected user has for the current date */
    private _user_events = resource({
        params: () => ({
            date: this._options().date,
            user: this._options().user,
        }),
        loader: ({ params: { date, user } }) =>
            queryBookings({
                period_start: getUnixTime(startOfDay(date || Date.now())),
                period_end: getUnixTime(endOfDay(date || Date.now())),
                type: 'parking',
                email: user || currentUser()?.email,
            }).catch(() => []),
    });
    /** Any event that the selected user has for the current date */
    public readonly user_events = computed(
        () => this._user_events.value() ?? [],
    );

    /** List of parking spaces for the active building */
    private _spaces = resource({
        params: () => {
            const levels = this.levels();
            return levels.length ? levels.map((l) => l.id) : undefined;
        },
        loader: ({ params: zones }) =>
            queryParkingSpacesForZones(zones).catch(() => [] as ParkingSpace[]),
    });
    /** List of parking spaces for the active building */
    public readonly spaces = computed<ParkingSpace[]>(
        () => this._spaces.value() ?? [],
    );

    public readonly active_spaces = computed(() => {
        const level = this._state.level();
        return level ? this.spaces().filter((_) => _.zone_id === level.id) : [];
    });

    private _users: Record<string, string> = {};
    private _plate_numbers: Record<string, string> = {};

    private _available_spaces = signal<ParkingSpace[]>([]);
    /** Available parking spaces for the current level and date */
    public readonly available_spaces = this._available_spaces.asReadonly();

    constructor() {
        super();
        effect(() => {
            const events = this.events();
            const spaces = this.active_spaces();
            const users = this._parking_users();
            const rules = this.booking_rules();
            const { date } = this._options();
            untracked(() => {
                const available = spaces.filter((space) => {
                    const event = events.find(
                        (e) => e.asset_id === space.id && !e.rejected,
                    );
                    const level = this._org.levelWithID([space.zone_id]);
                    const assigned = `${
                        event?.user_email || space.assigned_to || ''
                    }`.toLowerCase();
                    const user = users.find(
                        (u) => u.email.toLowerCase() === assigned.toLowerCase(),
                    );
                    const is_restricted = rulesForResource(
                        {
                            date: date || Date.now(),
                            duration: 60,
                            host: currentUser(),
                            resource: {
                                id: space.id,
                                zones: [level?.parent_id, level?.id],
                            },
                        },
                        rules,
                    )?.hidden;
                    this._users[space.id] = assigned;
                    this._plate_numbers[space.id] =
                        event?.extension_data?.plate_number ||
                        user?.plate_number ||
                        undefined;
                    return !event && !is_restricted && space.bookable !== false;
                });
                this._available_spaces.set(available);
                this._updateParkingSpaces(spaces, available);
            });
        });
        this.setOptions({
            enable_booking:
                this._settings.get('app.parking.enable_maps') !== false,
        });
    }

    public startPolling() {
        this.interval('poll', () => this._poll.set(Date.now()), 10 * 1000);
        this._poll.set(Date.now());
        return () => this.stopPolling();
    }

    public stopPolling() {
        this.clearInterval('poll');
    }

    public setOptions(options: Partial<ParkingOptions>) {
        this._options.update((value) => ({ ...value, ...options }));
    }

    private _updateParkingSpaces(
        spaces: ParkingSpace[],
        available: ParkingSpace[],
    ) {
        const styles = {};
        const features = [];
        const actions = [];
        const colours = this._settings.get('app.explore.colors') || {};
        let options = this._options();
        for (const space of spaces) {
            const can_book = !!available.find((_) => _.id === space.id);
            const is_workplace =
                this._settings.app_name.toLowerCase().includes('workplace') ||
                this._settings.app_name.toLowerCase().includes('staff');
            const is_assigned = is_workplace ? false : !!space.assigned_to;
            const id = space.map_id || space.id;
            const status =
                space.bookable === false
                    ? 'not-bookable'
                    : is_assigned
                      ? can_book
                          ? 'pending'
                          : 'busy'
                      : can_book
                        ? 'free'
                        : 'busy';
            styles[`#${id}`] = {
                fill:
                    colours[`parking-${status}`] ||
                    colours[`${status}`] ||
                    DEFAULT_COLOURS[`${status}`],
                opacity: 0.6,
            };
            features.push({
                location: `${id}`,
                content: ExploreParkingInfoComponent,
                z_index: 20,
                hover: true,
                data: {
                    ...space,
                    user: this._users[space.id],
                    plate_number: this._plate_numbers[space.id],
                    status:
                        status === 'pending' && is_assigned
                            ? 'reserved'
                            : status,
                },
            });
            if (!can_book) continue;
            const book_fn = async () => {
                if (this.on_book) {
                    await this.on_book(space);
                    this._poll.set(Date.now());
                    return;
                }
                if (this._deny_parking_access()) {
                    const space_zone = this._org.levelWithID([space.zone_id]);
                    return notifyError(
                        i18n('EXPLORE.PARKING_PERMISSIONS_ERROR', {
                            name: space_zone?.display_name || space_zone?.name,
                        }),
                    );
                }
                if (this._assigned_space() && this._booked_space()) {
                    return notifyError(
                        i18n('EXPLORE.PARKING_ASSIGNED_ERROR', {
                            name: space.name || space.id,
                        }),
                    );
                }
                if (this._booked_space()) {
                    return notifyError(i18n('EXPLORE.PARKING_EXISTING_ERROR'));
                }
                if (status !== 'free') {
                    return notifyError(
                        i18n('EXPLORE.PARKING_AVAILABLE_ERROR', {
                            name: space.name || 'Parking Space',
                        }),
                    );
                }
                if (
                    space.place_groups?.length &&
                    !space.place_groups.find((_) =>
                        currentUser().groups.includes(_),
                    )
                ) {
                    return notifyError(
                        i18n('EXPLORE.PARKING_GROUP_ERROR', {
                            name: space.name,
                        }),
                    );
                }
                this._bookings.newForm('parking');
                this._bookings.setOptions({ type: 'parking' });
                options = this._options();
                const bookable_hours: BookableHoursRange | null =
                    this._settings.get('app.parking.bookable_hours') ||
                    this._settings.get('app.bookings.bookable_hours') ||
                    null;
                if (
                    bookable_hours &&
                    !this._settings.get('app.parking.allow_time_changes') &&
                    !isWithinBookableHours(Date.now(), bookable_hours)
                ) {
                    return notifyError(i18n('EXPLORE.OUTSIDE_BOOKABLE_HOURS'));
                }
                let user = options.host || currentUser();
                const user_email = user?.email;
                const zone =
                    this._org.levelWithID([
                        space.zone_id || (space as any).zone,
                    ]) || this._state.active_level;
                let date =
                    !options.date || isSameDay(options.date, Date.now())
                        ? startOfMinute(Date.now()).valueOf()
                        : setHours(options.date, 8).valueOf();
                if (bookable_hours) {
                    date = alignDateToBookableHours(date, bookable_hours);
                }
                this._bookings.form.patchValue({
                    resources: [space],
                    asset_id: space.id,
                    asset_name: space.name,
                    date,
                    duration: 11 * 60,
                    all_day: true,
                    map_id: space?.map_id || space?.id,
                    description: space.name,
                    user,
                    user_email,
                    booking_type: 'parking',
                    zones: [
                        this._org.organisation.id,
                        this._org.region?.id,
                        zone?.parent_id,
                        zone?.id,
                    ],
                });
                await this._bookings.confirmPost().catch((e) => {
                    if (e === 'User cancelled') throw e;
                    notifyError(
                        i18n('EXPLORE.PARKING_BOOKING_ERROR', {
                            name: space.name || space.id,
                            error: e.message || e.error || e,
                        }),
                    );
                    throw e;
                });
                notifySuccess(
                    i18n('EXPLORE.PARKING_BOOKING_SUCCESS', {
                        name: space.name || space.id,
                    }),
                );
                this.timeout('poll', () => this._poll.set(Date.now()), 1000);
            };
            actions.push({
                id,
                action: 'click',
                priority: 10,
                callback: book_fn,
            });
        }
        this._state.setActions(
            'parking',
            options.enable_booking ? actions : [],
        );
        this._state.setStyles('parking', styles);
        this._state.setFeatures('parking', features);
    }
}
