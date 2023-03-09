import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Event, NavigationEnd, Router } from '@angular/router';
import {
    AsyncHandler,
    currentUser,
    flatten,
    getInvalidFields,
    notifyError,
    openConfirmModal,
    SettingsService,
    unique,
} from '@placeos/common';
import { listChildMetadata, PlaceZone } from '@placeos/ts-client';
import { format, getUnixTime, addMinutes, set } from 'date-fns';
import {
    BehaviorSubject,
    combineLatest,
    merge,
    Observable,
    of,
    timer,
} from 'rxjs';
import {
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

export type BookingFlowView = 'form' | 'map' | 'confirm' | 'success';

const BOOKING_URLS = [
    'book/desks',
    'book/parking',
    'book/new-desks',
    'book/new-parking',
];

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
    private _loading = new BehaviorSubject<string>('');

    public last_success: Booking = new Booking(
        JSON.parse(
            sessionStorage.getItem('PLACEOS.last_booked_booking') || '{}'
        )
    );
    public readonly loading = this._loading.asObservable();
    public readonly options = this._options.pipe(shareReplay(1));
    public readonly form = generateBookingForm();

    public readonly assets: Observable<BookingAsset[]> = this.options.pipe(
        debounceTime(300),
        distinctUntilKeyChanged('type'),
        switchMap(({ type }) => {
            if (!this._org.building) return of([]);
            switch (type) {
                case 'desk':
                    this._loading.next(`Loading desks...`);
                    return this.loadAssets('desks' as any);
                case 'parking':
                    this._loading.next(`Loading parking spaces...`);
                    return this.loadAssets('parking_spaces' as any);
            }
            return of([]);
        }),
        tap(() => this._loading.next(``)),
        shareReplay(1)
    );

    public readonly features: Observable<string[]> = this.assets.pipe(
        map((assets) => {
            const list: string[] = [];
            for (const { features } of assets) {
                features instanceof Array
                    ? features.forEach((_) => list.push(_))
                    : null;
            }
            return unique(list).sort((a, b) => a.localeCompare(b));
        }),
        shareReplay(1)
    );

    public readonly available_assets = combineLatest([
        this.options,
        this.assets,
        merge(this.form.valueChanges, timer(1000)),
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
        switchMap(([options, assets]) =>
            queryBookings({
                period_start: getUnixTime(this.form.getRawValue().date),
                period_end: getUnixTime(
                    addMinutes(
                        this.form.getRawValue().date,
                        this.form.getRawValue().duration || 24 * 60
                    )
                ),
                type: options.type,
                zones: options.zone_id,
            }).pipe(
                map((bookings) =>
                    assets.filter(
                        (asset) =>
                            asset.bookable !== false &&
                            (!options.features ||
                                options.features?.every((_) =>
                                    asset.features.includes(_)
                                )) &&
                            (!options.zone_id ||
                                options.zone_id === asset.zone?.id ||
                                options.zone_id === asset.zone?.parent_id) &&
                            !bookings.find(
                                (bkn) =>
                                    bkn.asset_id === asset.id &&
                                    bkn.status !== 'declined'
                            )
                    )
                )
            )
        ),
        tap(() => this._loading.next('')),
        shareReplay(1)
    );

    public readonly grouped_availability = combineLatest([
        this.options,
        this.available_assets,
    ]).pipe(
        map(([options, assets]) => {
            const groups = [];
            const asset_list = [...assets].sort((a, b) =>
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

    public newForm(booking: Booking = new Booking()) {
        this.form.reset();
        this.form.patchValue({ ...booking, ...booking.extension_data });
        this.subscription(
            'form_change',
            this.form.valueChanges.subscribe(() => this.storeForm())
        );
        this._booking.next(booking);
        this._options.next({ type: this._options.getValue().type });
    }

    constructor(
        private _router: Router,
        private _settings: SettingsService,
        private _org: OrganisationService,
        private _dialog: MatDialog,
        private _payments: PaymentsService
    ) {
        super();
        this.subscription(
            'router.bookings',
            this._router.events.subscribe((booking: Event) => {
                if (
                    booking instanceof NavigationEnd &&
                    !BOOKING_URLS.find((_) => booking.url.includes(_))
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
        const booking = this._booking.getValue();
        this.form.reset();
        this.form.patchValue({
            ...(booking || {}),
            ...(booking?.extension_data || {}),
        });
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
            JSON.stringify(this.form.getRawValue() || {})
        );
        sessionStorage.setItem(
            'PLACEOS.booking_form_filters',
            JSON.stringify(this._options.getValue() || {})
        );
    }

    public loadForm() {
        this.form.reset();
        this.form.patchValue({
            ...new Booking(),
            ...JSON.parse(
                sessionStorage.getItem('PLACEOS.booking_form') || '{}'
            ),
        });
        this.setOptions({
            zone_id: this._org.building?.id,
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
        if (!ignore_check) {
            await this.checkResourceAvailable(
                value,
                this._options.getValue().type
            );
        }
        if (value.duration >= 12 * 60 || value.all_day) {
            this.form.patchValue({
                date: set(value.date, { hours: 11, minutes: 59 }).valueOf(),
                duration: 12 * 60,
            });
            value = this.form.getRawValue();
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
        this._loading.next('Saving booking');
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
                    department:
                        value.user?.department || currentUser()?.department,
                },
                approved: !!this._settings.get('app.bookings.no_approval'),
            })
        ).toPromise();
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
        const form = this.form.value;
        const asset_list = await this.available_assets
            .pipe(take(1))
            .toPromise();
        const active_asset = asset_list.find(
            (_) => _.id === form.asset_id || _.map_id === form.asset_id
        );
        const level = this._org.levelWithID([active_asset.zone?.id]);
        const assets = [
            active_asset,
            ...(await this._getNearbyResources(
                level.map_id,
                form.asset_id,
                asset_list,
                extra_members.length
            )),
        ];
        const group_members = [currentUser(), ...extra_members];
        await Promise.all(
            group_members.map((_, idx) =>
                this.checkResourceAvailable(
                    {
                        ...form,
                        asset_id: assets[idx].map_id || assets[idx].id,
                        user_email: _.email,
                    },
                    type
                )
            )
        );
        for (let i = 0; i < group_members.length; i++) {
            const user = group_members[i];
            const asset = assets[i];
            this.form.patchValue({
                ...form,
                user: user as any,
                asset_id: asset?.id,
                asset_name: asset.name,
                description: asset.name,
                map_id: asset?.map_id || asset?.id,
                zones: asset.zone
                    ? unique([
                          this._org.organisation.id,
                          asset.zone?.parent_id,
                          asset.zone?.id,
                      ])
                    : [this._org.organisation.id],
            });
            this.postForm(true);
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
        { asset_id, date, duration, user_email, all_day }: Partial<Booking>,
        type: BookingType
    ) {
        duration = all_day ? 12 * 60 : duration || 60;
        const bookings = await queryBookings({
            period_start: getUnixTime(date),
            period_end: getUnixTime(date + duration * 60 * 1000),
            type,
        }).toPromise();
        if (bookings.find((_) => _.asset_id === asset_id)) {
            if (asset_id.includes('@')) {
                throw `${asset_id} already has an invite for the selected time`;
            } else {
                throw `${asset_id} is not available at the selected time`;
            }
        }
        const allowed_bookings =
            this._settings.get(`app.booking.allowed_daily_${type}_count`) ?? 1;
        if (
            allowed_bookings > 0 &&
            bookings.filter(
                (_) =>
                    _.user_email === (user_email || currentUser()?.email) &&
                    _.status !== 'declined'
            ).length >= allowed_bookings
        ) {
            const current = user_email === currentUser()?.email;
            throw `${current ? 'You' : user_email} already ${
                current ? 'have' : 'has'
            } a ${type} booked`;
        }
        return true;
    }

    public loadAssets(type: BookingType) {
        return listChildMetadata(this._org.building.id, {
            name: type,
        }).pipe(
            map((data) =>
                flatten(
                    data.map((_) =>
                        (_.metadata[type]?.details instanceof Array
                            ? _.metadata[type]?.details
                            : []
                        ).map((d) => ({ ...d, zone: _.zone }))
                    )
                )
            )
        );
    }

    private async _getNearbyResources(
        map_url: string,
        id: string,
        assets: BookingAsset[],
        count: number
    ): Promise<BookingAsset[]> {
        const nearby_assets = [];
        let asset_list = assets.filter((_) => _.id !== id && _.map_id !== id);
        for (let i = 0; i < count; i++) {
            const item = await findNearbyFeature(
                map_url,
                id,
                asset_list.map((_) => _.map_id || _.id)
            );
            if (item) {
                nearby_assets.push(
                    assets.find((_) => _.id === item || _.map_id === item)
                );
                asset_list = asset_list.filter(
                    (_) => _.id !== item && _.map_id !== item
                );
            }
        }
        return nearby_assets;
    }
}
