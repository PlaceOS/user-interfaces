import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Event, NavigationEnd, Router } from '@angular/router';
import {
    AsyncHandler,
    BookingRuleset,
    currentUser,
    flatten,
    getInvalidFields,
    notifyError,
    notifyWarn,
    openConfirmModal,
    rulesForResource,
    SettingsService,
    unique,
} from '@placeos/common';
import {
    cleanObject,
    listChildMetadata,
    PlaceZone,
    showMetadata,
} from '@placeos/ts-client';
import { format, getUnixTime, addMinutes, startOfDay } from 'date-fns';
import {
    BehaviorSubject,
    combineLatest,
    forkJoin,
    merge,
    Observable,
    of,
    timer,
} from 'rxjs';
import {
    catchError,
    debounceTime,
    distinctUntilKeyChanged,
    filter,
    first,
    map,
    shareReplay,
    switchMap,
    take,
    tap,
} from 'rxjs/operators';

import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { User } from 'libs/users/src/lib/user.class';
import { Booking, BookingType } from './booking.class';
import { generateBookingForm } from './booking.utilities';
import { queryBookings, saveBooking } from './bookings.fn';
import { DeskQuestionsModalComponent } from './desk-questions-modal.component';
import { findNearbyFeature } from './booking.utilities';
import { PaymentsService } from 'libs/payments/src/lib/payments.service';
import { BookingLinkModalComponent } from './booking-link-modal.component';
import { validateAssetRequestsForResource } from 'libs/assets/src/lib/assets.fn';
import { AssetStateService } from 'libs/assets/src/lib/asset-state.service';

export type BookingFlowView = 'form' | 'map' | 'confirm' | 'success';

const BOOKING_TYPES = ['desk', 'parking', 'locker', 'catering'];

export interface BookingFlowOptions {
    /** Type of booking being made */
    type: BookingType;
    /** Zone to check available */
    zone_id?: string;
    /** List of features that the asset should associate */
    features?: string[];
    /** Whether booking is for a group */
    group?: boolean;
    /** Recurrence Pattern */
    pattern?: 'none' | 'daily' | 'weekly' | 'monthly';
    /** Recurrence ending */
    recurr_end?: number;
    /** List of group members to book for */
    members?: User[];
    /** Whether to only show favourite rooms */
    show_fav?: boolean;
}

export interface BookingAsset {
    id: string;
    map_id: string;
    name: string;
    bookable: boolean;
    zone?: PlaceZone;
    groups?: string[];
    assigned_to?: string;
    features: string[];
}

@Injectable({
    providedIn: 'root',
})
export class BookingFormService extends AsyncHandler {
    private _view = new BehaviorSubject<BookingFlowView>('form');
    private _options = new BehaviorSubject<BookingFlowOptions>({
        type: 'desk',
    });
    private _booking = new BehaviorSubject<Booking>(null);
    private _resource_use: Record<string, string> = {};
    private _loading = new BehaviorSubject<string>('');

    public last_success: Booking = new Booking(
        JSON.parse(
            sessionStorage.getItem('PLACEOS.last_booked_booking') || '{}'
        )
    );
    public readonly loading = this._loading.asObservable();
    public readonly options = this._options.pipe(shareReplay(1));
    public readonly form = generateBookingForm();

    public readonly resources: Observable<BookingAsset[]> = combineLatest([
        this._org.active_building,
        this.options.pipe(distinctUntilKeyChanged('type')),
    ]).pipe(
        debounceTime(300),
        switchMap(([bld, { type }]) => {
            if (!bld) return of([]);
            switch (type) {
                case 'desk':
                    this._loading.next(`Loading desks...`);
                    return this.loadResourceList('desks' as any);
                case 'parking':
                    this._loading.next(`Loading parking spaces...`);
                    return this.loadResourceList('parking-spaces' as any);
                case 'locker':
                    this._loading.next(`Loading lockers...`);
                    return this.loadResourceList('lockers' as any);
            }
            return of([]);
        }),
        tap(() => this._loading.next(``)),
        shareReplay(1)
    );

    public readonly features: Observable<string[]> = this.resources.pipe(
        map((resource) => {
            const list: string[] = [];
            for (const { features } of resource) {
                features instanceof Array
                    ? features.forEach((_) => list.push(_))
                    : null;
            }
            return unique(list).sort((a, b) => a.localeCompare(b));
        }),
        shareReplay(1)
    );

    public readonly booking_rules: Observable<
        Record<string, BookingRuleset[]>
    > = combineLatest([this._org.building_list, this._options]).pipe(
        switchMap(([list, { type }]) =>
            Promise.all(
                list.map((bld) =>
                    showMetadata(bld.id, `${type}_booking_rules`).toPromise()
                )
            )
        ),
        map((building_rules) => {
            const mapping = {};
            for (const rules of building_rules) {
                mapping[rules.id] =
                    rules.details instanceof Array ? rules.details : [];
            }
            return mapping;
        }),
        shareReplay(1)
    );

    public readonly available_resources = combineLatest([
        this.options,
        this.resources,
        this.booking_rules,
        merge(this.form.get('date').valueChanges, timer(1000)),
        merge(this.form.get('duration').valueChanges, timer(1000)),
    ]).pipe(
        filter(
            () =>
                this.form.getRawValue().date > 0 &&
                this.form.getRawValue().duration > 0
        ),
        debounceTime(500),
        tap(([{ type }]) =>
            this._loading.next(`Checking ${type} availability...`)
        ),
        switchMap(([options, resources, restrictions]) => {
            var { all_day, date, duration, user } = this.form.getRawValue();
            if (all_day) {
                date = startOfDay(date).valueOf();
                duration = 24 * 60 - 1;
            }
            return queryBookings({
                period_start: getUnixTime(date),
                period_end: getUnixTime(addMinutes(date, duration)),
                type: options.type,
                zones:
                    options.zone_id ||
                    this._org.building?.id ||
                    this._org.organisation.id,
                limit: 1000,
            }).pipe(
                map(
                    (bookings) => {
                        const start = this.form.getRawValue().date;
                        const end = addMinutes(
                            start,
                            this.form.getRawValue().duration
                        ).valueOf();
                        this._resource_use = {};
                        bookings.forEach(
                            (_) =>
                                (this._resource_use[_.asset_id] = _.user_name)
                        );
                        const available = resources.filter((asset) => {
                            const is_restricted = rulesForResource(
                                {
                                    date,
                                    duration,
                                    resource: asset,
                                    host: user || currentUser(),
                                },
                                restrictions[asset.zone?.id] ||
                                    restrictions[asset.zone?.parent_id] ||
                                    restrictions[this._org.building.id] ||
                                    []
                            ).hidden;
                            return (
                                !is_restricted &&
                                (!asset.groups?.length ||
                                    asset.groups.some((grp) =>
                                        currentUser().groups.includes(grp)
                                    )) &&
                                asset.bookable !== false &&
                                (!options.features ||
                                    options.features?.every((_) =>
                                        asset.features.includes(_)
                                    )) &&
                                (!options.zone_id ||
                                    options.zone_id === asset.zone?.id ||
                                    options.zone_id ===
                                        asset.zone?.parent_id) &&
                                !bookings.find(
                                    (bkn) =>
                                        bkn.asset_id === asset.id &&
                                        bkn.status !== 'declined'
                                ) &&
                                !asset.assigned_to
                            );
                        });
                        return available;
                    },
                    catchError((_) => of([]))
                )
            );
        }),
        tap((_) => this._loading.next('')),
        shareReplay(1)
    );

    public readonly grouped_availability = combineLatest([
        this.options,
        this.available_resources,
    ]).pipe(
        map(([options, resource]) => {
            const groups = [];
            const asset_list = [...resource].sort((a, b) =>
                a.zone?.id?.localeCompare(b.zone?.id)
            );
            const members = options.members?.length
                ? options.members
                : [currentUser()];
            while (asset_list.length) {
                const group = [];
                let asset = asset_list.pop();
                while (group.length < members.length) {
                    if (
                        group.length &&
                        !group.find((_) => _.zone?.id === asset.zone?.id)
                    ) {
                        break;
                    }
                    group.push(asset);
                    asset = asset_list.pop();
                }
                if (group.length < members.length) continue;
                groups.push(group);
            }
            return groups;
        })
    );

    public get view() {
        return this._view.getValue();
    }

    public get booking() {
        return this._booking.getValue();
    }

    public resourceUserName(id: string) {
        return this._resource_use[id];
    }

    public newForm(
        booking: Booking = new Booking({
            all_day: this._settings.get('app.bookings.all_day_default'),
        })
    ) {
        this.form.reset();
        this.form.patchValue(
            cleanObject(
                {
                    ...booking,
                    ...booking.extension_data,
                },
                [null, undefined, '']
            )
        );
        this.subscription(
            'form_change',
            this.form.valueChanges.subscribe(() => {
                const { date, duration } = this.form.getRawValue();
                this._assets.setOptions({ date, duration });
                this.storeForm();
            })
        );
        this.timeout('date', () => {
            this.form.patchValue({
                date: booking.date,
                duration: booking.duration,
            });
        });
        this._booking.next(new Booking(booking));
        this._options.next({ type: this._options.getValue().type });
    }

    constructor(
        private _router: Router,
        private _settings: SettingsService,
        private _org: OrganisationService,
        private _dialog: MatDialog,
        private _payments: PaymentsService,
        private _assets: AssetStateService
    ) {
        super();
        this.subscription(
            'router.bookings',
            this._router.events.subscribe((booking: Event) => {
                if (
                    booking instanceof NavigationEnd &&
                    !booking.url.includes('book') &&
                    !BOOKING_TYPES.find((_) => booking.url.includes(_))
                ) {
                    this.clearForm();
                }
            })
        );
        this._org.initialised
            .pipe(first((_) => _))
            .subscribe(() => this.setOptions({}));
    }

    public setView(value: BookingFlowView) {
        this._view.next(value);
    }

    public setOptions(value: Partial<BookingFlowOptions>) {
        this._options.next({ ...this._options.getValue(), ...value });
    }

    public setFeature(feature: string, enable: boolean) {
        if (!feature?.length) return;
        const features = this._options.getValue()?.features || [];
        if (enable && !features.includes(feature)) features.push(feature);
        if (!enable && features.includes(feature))
            features.splice(
                features.findIndex((e) => e === feature),
                1
            );
        this.setOptions({ features });
    }

    public resetForm() {
        if (!sessionStorage.getItem('PLACEOS.booking_form')) {
            return this.newForm();
        }
        const booking = this._booking.getValue();
        this.form.reset({ user: currentUser(), booked_by: currentUser() });
        this.form.patchValue(
            cleanObject(
                {
                    ...(booking || {}),
                    ...(booking?.extension_data || {}),
                },
                [null, undefined, '']
            )
        );
        this._options.next({ type: this._options.getValue().type });
    }

    public clearForm() {
        sessionStorage.removeItem('PLACEOS.booking_form');
        sessionStorage.removeItem('PLACEOS.booking_form_options');
        this.newForm();
    }

    public storeForm() {
        sessionStorage.setItem(
            'PLACEOS.booking_form',
            JSON.stringify({
                ...this._booking.getValue(),
                ...cleanObject(this.form.getRawValue() || {}, [
                    null,
                    undefined,
                    '',
                ]),
            })
        );
        sessionStorage.setItem(
            'PLACEOS.booking_form_filters',
            JSON.stringify(this._options.getValue() || {})
        );
    }

    public loadForm() {
        this.form.reset({ user: currentUser(), booked_by: currentUser() });
        const data = JSON.parse(
            sessionStorage.getItem('PLACEOS.booking_form') || '{}'
        );
        const booking = new Booking(data);
        this._booking.next(booking);
        const booking_data = cleanObject(
            {
                ...data,
                ...(booking || {}),
                ...(booking?.extension_data || {}),
            },
            [null, undefined, '']
        );
        this.form.patchValue(booking_data);
        this.setOptions({
            ...JSON.parse(
                sessionStorage.getItem('PLACEOS.booking_form_filters') || '{}'
            ),
        });
    }

    public clearOldState() {
        sessionStorage.removeItem('PLACEOS.last_booked_booking');
        this.last_success = new Booking();
    }

    public openBookingLinkModal(force: boolean = false) {
        this.form.markAllAsTouched();
        if (!this.form.valid && !force) return;
        const event = new Booking({
            ...this.booking,
            ...this.form.getRawValue(),
        });
        this._dialog.open(BookingLinkModalComponent, { data: event });
    }

    public async confirmPost() {
        await this.checkQuestions();
        const options = this._options.getValue();
        const value = this.form.getRawValue();
        let content = `Would you like to book the ${options.type} ${
            value.asset_name
        } for ${format(value.date, 'dd MMM yyyy')}${
            value.duration < 12 * 60
                ? ' at ' + format(value.date, 'h:mm a')
                : ''
        }`;
        if (options.group) {
            content = `${content}.<br>You group members will be assigned desks nearby your selected desk.`;
        }
        const details = await openConfirmModal(
            {
                title: `Book ${options.type}`,
                content,
                icon: { content: 'event_available' },
            },
            this._dialog
        );
        if (details?.reason !== 'done') throw 'User cancelled';
        details.loading('Performing booking request...');
        if (options.group) {
            await this.postFormForGroup().catch((_) => {
                notifyError(JSON.stringify(_));
                details.close();
                throw _;
            });
        } else
            await this.postForm().catch((_) => {
                notifyError(JSON.stringify(_));
                details.close();
                throw _;
            });
        details.close();
    }

    public async postForm(ignore_check = false) {
        if (!this.form) throw 'No form for booking';
        if (!this.form.valid)
            throw `Some form fields are invalid. [${getInvalidFields(
                this.form
            ).join(', ')}]`;
        this.form.patchValue({
            booking_type:
                this.form.getRawValue().booking_type ||
                this._options.getValue().type,
        });
        let value = this.form.getRawValue();
        let booking = this._booking.getValue() || new Booking();
        if (!ignore_check) {
            await this.checkResourceAvailable(
                { ...booking, ...value },
                this._options.getValue().type
            );
        }
        if (this._payments.payment_module) {
            const receipt = await this._payments.makePayment({
                type: this._options.getValue().type,
                resource_name: value.asset_name,
                date: value.date,
                duration: value.duration,
                all_day: value.all_day,
            });
            if (!receipt?.success) return;
            (value as any).extension_data = {
                invoice: receipt,
                invoice_id: receipt.invoice_id,
            };
        }
        if (!value.zones?.length && this._booking.getValue().zones?.length) {
            value.zones = this._booking.getValue().zones;
        }
        this._loading.next('Saving booking');
        delete value.booking_asset;
        if (value.all_day) {
            value.date = startOfDay(value.date).valueOf();
            value.duration = 24 * 60 - 1;
        }
        const { event_id, parent_id } = value;
        delete value.event_id;
        delete value.parent_id;
        const result = await saveBooking(
            new Booking({
                ...this._options.getValue(),
                ...value,
                description: value.asset_name || value.description,
                user_name: value.user?.name,
                user_id:
                    (!value.user?.id?.includes('@') ? value?.user?.id : '') ||
                    currentUser()?.id,
                extension_data: {
                    ...((value as any).extension_data || {}),
                    group: value.group,
                    phone: value.phone,
                    department:
                        value.user?.department || currentUser()?.department,
                },
                approved: !this._settings.get('app.bookings.no_approval'),
            }),
            event_id
                ? { ical_uid: value.ical_uid, event_id: event_id }
                : parent_id
                ? { booking_id: parent_id }
                : {}
        )
            .toPromise()
            .catch((e) => {
                this._loading.next('');
                throw e?.error || e;
            });
        if (value.assets?.length || booking.extension_data.assets?.length) {
            const requests = await validateAssetRequestsForResource(
                { ...result, from_booking: true },
                {
                    date: value.date,
                    duration: value.duration,
                    all_day: value.all_day,
                    host: value.booked_by_email,
                    zones: [this._org.building?.id],
                },
                value.assets
            ).catch((e) => {
                console.error("Couldn't update asset requests", e);
                if (e?.status === 409) {
                    notifyError(
                        'Some assets are already booked for the selected time'
                    );
                }
                this._loading.next('');
                throw e?.error || e;
            });
            if (!requests) throw 'Unable to validate asset requests';
            await requests();
        }
        this._loading.next('');
        const { booking_type } = value;
        this.clearForm();
        this.form?.patchValue({ booking_type });
        this.last_success = result;
        sessionStorage.setItem(
            'PLACEOS.last_booked_booking',
            JSON.stringify(result)
        );
        this.setView('success');
        return result;
    }

    public async postFormForGroup() {
        const { members, group, type } = this._options.getValue();
        if (!group) throw 'No group available to book for';
        const extra_members = members.filter(
            (_) => _.email !== currentUser().email
        );
        if (extra_members.length <= 0)
            throw 'No members in your group to book for.';
        const form = this.form.getRawValue();
        const asset_list = await this.available_resources
            .pipe(take(1))
            .toPromise();
        const active_resource = asset_list.find(
            (_) => _.id === form.asset_id || _.map_id === form.asset_id
        );
        const level = this._org.levelWithID([active_resource.zone?.id]);
        const resources = [
            active_resource,
            ...(await this._getNearbyResources(
                level.map_id,
                form.asset_id,
                asset_list,
                extra_members.length
            )),
        ];
        const group_members = unique(
            [currentUser(), ...extra_members],
            'email'
        );
        const available = await Promise.all(
            group_members.map((_, idx) =>
                this.checkResourceAvailable(
                    {
                        ...form,
                        asset_id: resources[idx].map_id || resources[idx].id,
                        user_email: _.email,
                    },
                    type
                )
            )
        );
        const unavailable = group_members.filter((_, idx) => !available[idx]);
        const group_name = `${currentUser().email}[${format(
            Date.now(),
            'yyyy-MM-dd'
        )}]`;
        let id = '';
        for (let i = 0; i < group_members.length; i++) {
            if (!available[i]) continue;
            const user = group_members[i];
            const asset = resources[i];
            this.form.patchValue({
                ...form,
                parent_id: id,
                user: user as any,
                user_email: user.email,
                user_id: user.id,
                asset_id: asset?.id,
                asset_name: asset.name,
                description: asset.name,
                map_id: asset?.map_id || asset?.id,
                group: group_name,
                zones: asset.zone
                    ? unique([
                          this._org.organisation.id,
                          asset.zone?.parent_id,
                          asset.zone?.id,
                      ])
                    : [this._org.organisation.id],
            });
            const bkn = await this.postForm(true);
            if (bkn.id && !id) id = bkn.id;
        }
        if (unavailable.length) {
            notifyWarn(
                `Some members of your group already have a desk booking. [${unavailable
                    .map((_) => _.name || _.email)
                    ?.join(', ')}]`
            );
        }
    }

    private async checkQuestions() {
        if (this._settings.get('app.desks.ignore_questions') !== false) return;
        const ref = this._dialog.open(DeskQuestionsModalComponent);
        const result = await Promise.race([
            ref.componentInstance.event
                .pipe(first((_) => _.reason === 'done'))
                .toPromise(),
            ref.afterClosed().toPromise(),
        ]);
        if (result?.reason !== 'done') throw 'User cancelled';
        const form = ref.componentInstance.form.getRawValue();
        for (const key in form) {
            if (form[key]) throw 'User failed questionaire';
        }
        ref.close();
    }

    /** Check if the given resource is available for the selected user to book */
    private async checkResourceAvailable(
        { id, asset_id, date, duration, user_email }: Partial<Booking>,
        type: BookingType
    ) {
        if (!user_email) throw 'No user was selected to book for';
        if (type === 'group-event') return true;
        const bookings = await queryBookings({
            period_start: getUnixTime(date),
            period_end: getUnixTime(date + duration * 60 * 1000),
            type,
            email: user_email,
            limit: 1000,
        }).toPromise();
        let active_bookings = bookings.filter(
            (_) =>
                _.status !== 'declined' &&
                _.status !== 'cancelled' &&
                !_.rejected
        );
        if (
            active_bookings.find((_) => _.asset_id === asset_id && id !== _.id)
        ) {
            if (asset_id.includes('@')) {
                throw `${asset_id} already has an invite for the selected time`;
            } else {
                throw `${asset_id} is not available at the selected time`;
            }
        }
        const allowed_bookings =
            this._settings.get(`app.bookings.allowed_daily_${type}_count`) ?? 1;
        if (
            allowed_bookings > 0 &&
            active_bookings.filter(
                (_) =>
                    _.user_email.toLowerCase() ===
                        (user_email || currentUser()?.email).toLowerCase() &&
                    _.id !== id
            ).length >= allowed_bookings
        ) {
            const current = user_email === currentUser()?.email;
            throw `${current ? 'You' : user_email} already ${
                current ? 'have' : 'has'
            } a booking at the selected time`;
        }
        return true;
    }

    public loadResourceList(type: BookingType) {
        const use_region = this._settings.get('app.use_region');
        const map_metadata = (_) =>
            (_?.metadata[type]?.details instanceof Array
                ? _.metadata[type]?.details
                : []
            ).map((d) =>
                (type as any) !== 'lockers'
                    ? {
                          ...d,
                          id: d.id || d.map_id,
                          zone: _.zone,
                      }
                    : d.lockers?.map((_) => ({
                          ..._,
                          bank_id: d.id,
                          zone: _.zone,
                      })) || []
            );
        const id = use_region
            ? this._org.building.parent_id
            : this._org.building.id;
        if (use_region) {
            const id = this._org.building.parent_id;
            const buildings = this._org.buildings.filter(
                (_) => _.parent_id === id
            );
            return forkJoin(
                buildings.map((_) =>
                    listChildMetadata(_.id, { name: type }).pipe(
                        map((data) => flatten(data.map(map_metadata)))
                    )
                )
            ).pipe(map((_) => flatten(_)));
        }
        return listChildMetadata(id, {
            name: type,
        }).pipe(map((data) => flatten(data.map(map_metadata))));
    }

    private async _getNearbyResources(
        map_url: string,
        id: string,
        resources: BookingAsset[],
        count: number
    ): Promise<BookingAsset[]> {
        const nearby_resources = [];
        let asset_list = resources.filter(
            (_) => _.id !== id && _.map_id !== id
        );
        for (let i = 0; i < count; i++) {
            const item = await findNearbyFeature(
                map_url,
                id,
                asset_list.map((_) => _.map_id || _.id)
            );
            if (item) {
                nearby_resources.push(
                    resources.find((_) => _.id === item || _.map_id === item)
                );
                asset_list = asset_list.filter(
                    (_) => _.id !== item && _.map_id !== item
                );
            }
        }
        return nearby_resources;
    }
}
