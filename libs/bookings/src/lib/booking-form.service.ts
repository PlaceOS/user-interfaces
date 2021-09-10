import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Event, NavigationEnd, Router } from '@angular/router';
import {
    BaseClass,
    currentUser,
    flatten,
    getInvalidFields,
    notifyError,
    openConfirmModal,
    SettingsService,
    unique,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { listChildMetadata, PlaceZone } from '@placeos/ts-client';
import { format, getUnixTime, addMinutes } from 'date-fns';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import {
    debounceTime,
    distinctUntilKeyChanged,
    first,
    map,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs/operators';

import { User } from 'libs/users/src/lib/user.class';
import { Booking } from './booking.class';
import { generateBookingForm } from './booking.utilities';
import { queryBookings, saveBooking } from './bookings.fn';
import { DeskQuestionsModalComponent } from './desk-questions-modal.component';

export type BookingFlowView = 'form' | 'map' | 'confirm' | 'success';

const BOOKING_URLS = ['book/desks'];

export interface BookingFlowOptions {
    /** Type of booking being made */
    type: 'desk' | 'parking';
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
export class BookingFormService extends BaseClass {
    private _view = new BehaviorSubject<BookingFlowView>('form');
    private _options = new BehaviorSubject<BookingFlowOptions>({
        type: 'desk',
    });
    private _form = new BehaviorSubject<FormGroup>(null);
    private _form_value = new BehaviorSubject<Partial<Booking>>({});
    private _booking = new BehaviorSubject<Booking>(null);
    private _loading = new BehaviorSubject<string>('');

    public last_success: Booking = new Booking(
        JSON.parse(
            sessionStorage.getItem('PLACEOS.last_booked_booking') || '{}'
        )
    );
    public readonly loading = this._loading.asObservable();
    public readonly options = this._options.pipe(shareReplay(1));

    public readonly assets: Observable<BookingAsset[]> = this.options.pipe(
        distinctUntilKeyChanged('zone_id'),
        switchMap(({ type }) => {
            if (!this._org.building) return of([]);
            switch (type) {
                case 'desk':
                    this._loading.next(`Loading desks...`);
                    return listChildMetadata(this._org.building.id, {
                        name: 'desks',
                    }).pipe(
                        map((data) =>
                            flatten(
                                data.map((_) =>
                                    (
                                        _.metadata.desks?.details || []
                                    ).map((d) => ({ ...d, zone: _.zone }))
                                )
                            )
                        )
                    );
            }
            return of([]);
        }),
        tap(() => this._loading.next(``)),
        shareReplay(1)
    );

    public readonly features: Observable<string[]> = this.assets.pipe(
        map((assets) => {
            const list: string[] = [];
            for (const asset of assets) {
                asset.features?.forEach((_) => list.push(_));
            }
            return unique(list).sort((a, b) => a.localeCompare(b));
        }),
        shareReplay(1)
    );

    public readonly available_assets = combineLatest([
        this.options,
        this.assets,
        this._form_value,
    ]).pipe(
        debounceTime(500),
        tap(([{ type }]) =>
            this._loading.next(`Checking ${type} availability...`)
        ),
        switchMap(([options, assets, form]) =>
            queryBookings({
                period_start: getUnixTime(form.date),
                period_end: getUnixTime(
                    addMinutes(form.date, form.duration || 24 * 60)
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
                            !bookings.find((bkn) => bkn.asset_id === asset.id)
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

    public get form() {
        return this._form.getValue();
    }

    public get booking() {
        return this._booking.getValue();
    }

    public newForm(booking: Booking = new Booking()) {
        this._form.next(generateBookingForm(booking));
        this.subscription(
            'form_change',
            this._form.getValue().valueChanges.subscribe(() => this.storeForm())
        );
        this._booking.next(booking);
        this._options.next({ type: this._options.getValue().type });
    }

    constructor(
        private _router: Router,
        private _settings: SettingsService,
        private _org: OrganisationService,
        private _dialog: MatDialog
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

    public resetForm() {
        if (!this._form.getValue()) this.newForm();
        const booking = this._booking.getValue();
        this._form.getValue().patchValue({
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
            JSON.stringify(this._form.getValue()?.value || {})
        );
        sessionStorage.setItem(
            'PLACEOS.booking_form_filters',
            JSON.stringify(this._options.getValue() || {})
        );
        this._form_value.next(this._form.getValue()?.value || {});
    }

    public loadForm() {
        if (!this._form.getValue()) this.newForm();
        this._form.getValue().patchValue({
            ...JSON.parse(
                sessionStorage.getItem('PLACEOS.booking_form') || '{}'
            ),
        });
        this.setOptions({
            zone_id: this._org.building.id,
            ...JSON.parse(
                sessionStorage.getItem('PLACEOS.booking_form_filters') || '{}'
            ),
        });
    }

    public async confirmPost() {
        await this.checkQuestions();
        const options = this._options.getValue();
        const form = this._form.getValue();
        const details = await openConfirmModal(
            {
                title: `Book ${options.type}`,
                content: `Would you like to book the ${options.type} ${
                    form.get('asset_id').value
                } for ${format(form.get('date').value, 'dd MMM yyyy')}`,
                icon: { content: 'event_available' },
            },
            this._dialog
        );
        if (details?.reason !== 'done') return;
        details.loading('Performing booking request...');
        await this.postForm().catch((_) => {
            notifyError(_);
            details.close();
            throw _;
        });
        details.close();
    }

    public async postForm() {
        const form = this._form.getValue();
        if (!form) throw 'No form for booking';
        if (!form.valid)
            throw `Some form fields are invalid. [${getInvalidFields(form).join(
                ', '
            )}]`;
        const asset_id = form.get('asset_id').value;
        const bookings = await queryBookings({
            period_start: getUnixTime(form.get('date').value),
            period_end: getUnixTime(
                form.get('date').value + form.get('duration').value * 60 * 1000
            ),
            type: this._options.getValue().type,
        }).toPromise();
        if (bookings.find((_) => _.asset_id === asset_id)) {
            throw `${asset_id} is not available at the selected time`;
        }
        const allowed_bookings =
            this._settings.get(
                `app.booking.allowed_daily_${this._options.getValue().type}`
            ) ?? 1;
        if (
            allowed_bookings > 0 &&
            bookings.filter(
                (_) =>
                    _.user_email ===
                    (form.value.user_email || currentUser()?.email)
            ).length >= allowed_bookings
        ) {
            throw `You already have a desk booked`;
        }
        const result = await saveBooking(new Booking(form.value)).toPromise();
        this.clearForm();
        this.last_success = result;
        sessionStorage.setItem(
            'PLACEOS.last_booked_booking',
            JSON.stringify(result)
        );
        this.setView('success');
        return result;
    }

    private async checkQuestions() {
        const ref = this._dialog.open(DeskQuestionsModalComponent);
        const result = await Promise.race([
            ref.componentInstance.event
                .pipe(first((_) => _.reason === 'done'))
                .toPromise(),
            ref.afterClosed().toPromise(),
        ]);
        if (result?.reason !== 'done') throw 'User cancelled';
        const form = ref.componentInstance.form.value;
        for (const key in form) {
            if (form[key]) throw 'User failed questionaire';
        }
        ref.close();
    }
}
