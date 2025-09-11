import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
    BookingFormService,
    loadLockerBanks,
    loadLockers,
    queryBookings,
} from '@placeos/bookings';
import { AsyncHandler, currentUser, SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { addHours, endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { combineLatest } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
    selector: 'placeos-book-locker-flow',
    template: `
        @if (!((assigned_space | async) && (has_booking | async))) {
            <div class="z-50 h-full w-full bg-base-100">
                @switch (view()) {
                    @case ('success') {
                        <locker-flow-success> </locker-flow-success>
                    }
                    @case ('confirm') {
                        <locker-flow-confirm> </locker-flow-confirm>
                    }
                    @default {
                        <locker-flow-form></locker-flow-form>
                    }
                }
            </div>
        } @else {
            <div
                class="z-50 flex h-full w-full flex-col items-center justify-center space-y-4 bg-base-100"
            >
                <img src="assets/icons/parking-success.svg" class="h-64 w-64" />
                <p>
                    {{
                        'APP.WORKPLACE.LOCKER_ASSIGNED'
                            | translate
                                : { name: (assigned_space | async)?.name }
                    }}
                </p>
                <a btn matRipple class="w-48" [routerLink]="['/your-bookings']">
                    {{ 'APP.WORKPLACE.VIEW_SCHEDULE' | translate }}
                </a>
            </div>
        }
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }
        `,
    ],
    standalone: false,
})
export class BookLockerFlowComponent extends AsyncHandler implements OnInit {
    private _state = inject(BookingFormService);
    private _route = inject(ActivatedRoute);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    public readonly view = this._state.view;

    private _lockers_banks = loadLockerBanks(
        this._org,
        combineLatest([this._org.active_building, this._org.active_region]),
        () => this._settings.get('app.use_region'),
    );
    private _lockers = loadLockers(
        this._org,
        combineLatest([this._org.active_building, this._org.active_region]),
        this._lockers_banks,
        () => this._settings.get('app.use_region'),
    );

    public readonly assigned_space = this._lockers.pipe(
        map((list) =>
            list.find(
                (_) =>
                    _.assigned_to?.toLowerCase() ===
                    currentUser().email?.toLowerCase(),
            ),
        ),
    );

    public readonly has_booking = queryBookings({
        period_start: getUnixTime(addHours(startOfDay(Date.now()), 1)),
        period_end: getUnixTime(addHours(endOfDay(Date.now()), -1)),
        type: 'locker',
    }).pipe(
        map((_) => _.length > 0),
        shareReplay(1),
    );

    public get last_success() {
        return this._state.last_success;
    }

    public ngOnInit() {
        this._state.loadForm();
        this._state.setOptions({ type: 'locker' });
        if (!this._state.form.value.id) this._state.newForm('locker');
        this._state.form.patchValue({ booking_type: 'locker' });
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((param) => {
                if (param.has('step'))
                    this._state.setView(param.get('step') as any);
            }),
        );
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((param) => {
                if (param.has('success')) this._state.setView('success');
            }),
        );
    }
}
