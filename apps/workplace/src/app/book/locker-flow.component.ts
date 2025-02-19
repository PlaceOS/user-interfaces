import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
    BookingFormService,
    loadLockerBanks,
    loadLockers,
    queryBookings,
} from '@placeos/bookings';
import { AsyncHandler, currentUser, SettingsService } from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { OrganisationService } from '@placeos/organisation';
import { addHours, endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { combineLatest, Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';

@Component({
    selector: 'placeos-book-locker-flow',
    template: `
        <ng-container
            *ngIf="
                !((assigned_space | async) && (has_booking | async));
                else assigned_state
            "
        >
            <div class="bg-base-100 h-full w-full z-50" [ngSwitch]="view">
                <locker-flow-success *ngSwitchCase="'success'">
                </locker-flow-success>
                <locker-flow-confirm *ngSwitchCase="'confirm'">
                </locker-flow-confirm>
                <locker-flow-form *ngSwitchDefault></locker-flow-form>
            </div>
        </ng-container>
        <ng-template #assigned_state>
            <div
                class="bg-base-100 flex flex-col items-center justify-center h-full w-full z-50 space-y-4"
            >
                <img src="assets/icons/parking-success.svg" class="w-64 h-64" />
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
        </ng-template>
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

    public get view() {
        return this._state.view;
    }
    public get last_success() {
        return this._state.last_success;
    }

    constructor(
        private _state: BookingFormService,
        private _route: ActivatedRoute,
        private _org: OrganisationService,
        private _settings: SettingsService,
    ) {
        super();
    }

    public ngOnInit() {
        this._state.loadForm();
        this._state.setOptions({ type: 'locker' });
        if (!this._state.form.value.id) this._state.newForm();
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
