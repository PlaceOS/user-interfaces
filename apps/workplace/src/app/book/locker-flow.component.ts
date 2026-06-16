import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    effect,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {
    BookingFormService,
    loadLockerResources,
    queryBookings,
} from '@placeos/bookings';
import {
    AsyncHandler,
    Booking,
    currentUser,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { addHours, endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { BookLockerFlowConfirmComponent } from './locker-flow/locker-flow-confirm.component';
import { BookLockerFlowFormComponent } from './locker-flow/locker-flow-form.component';
import { BookLockerFlowSuccessComponent } from './locker-flow/locker-flow-success.component';

@Component({
    selector: 'placeos-book-locker-flow',
    template: `
        @if (!(assigned_space() && has_booking())) {
            <div class="bg-base-100 z-50 h-full w-full">
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
                class="bg-base-100 z-50 flex h-full w-full flex-col items-center justify-center space-y-4"
            >
                <img src="assets/icons/parking-success.svg" class="h-64 w-64" />
                <p>
                    {{
                        'APP.WORKPLACE.LOCKER_ASSIGNED'
                            | translate
                                : {
                                      name: assigned_space()?.name,
                                  }
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
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        CommonModule,
        TranslatePipe,
        BookLockerFlowConfirmComponent,
        BookLockerFlowFormComponent,
        BookLockerFlowSuccessComponent,
        RouterModule,
        MatRippleModule,
    ],
})
export class BookLockerFlowComponent extends AsyncHandler implements OnInit {
    private _state = inject(BookingFormService);
    private _route = inject(ActivatedRoute);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    public readonly view = this._state.view;
    private readonly _lockers = signal([]);

    public readonly assigned_space = computed(() =>
        this._lockers().find(
            (_) =>
                _.assigned_to?.toLowerCase() ===
                currentUser().email?.toLowerCase(),
        ),
    );

    public readonly has_booking = signal(false);

    constructor() {
        super();
        effect(async () => {
            const bld = this._org.active_building();
            const region = this._org.active_region();
            const scope_id = this._settings.get('app.use_region')
                ? region?.id || this._org.region?.id
                : bld?.id;
            this._lockers.set(await loadLockerResources(this._org, scope_id));
        });
        void this._loadTodaysBookings();
    }

    public get last_success() {
        return this._state.last_success;
    }

    public ngOnInit() {
        this._state.loadForm();
        this._state.setOptions({ type: 'locker' });
        if (!this._state.model().id) this._state.newForm('locker');
        this._state.model.update((m) => ({ ...m, booking_type: 'locker' }));
        if (this._state.model().id) {
            const booking = new Booking(this._state.model() as any);
            const is_group =
                !!booking.parent_id ||
                !!booking.group ||
                !!booking.extension_data?.group_members?.length;
            if (is_group) {
                this._state
                    .loadGroupMembersForBooking(booking)
                    .then((members) =>
                        this._state.setOptions({
                            group: true,
                            members,
                        }),
                    );
            }
        }
        const param = this._route.snapshot.paramMap;
        if (param.has('step')) this._state.setView(param.get('step') as any);
        const query = this._route.snapshot.queryParamMap;
        if (query.has('success')) this._state.setView('success');
    }

    private async _loadTodaysBookings() {
        const bookings = await queryBookings({
            period_start: getUnixTime(addHours(startOfDay(Date.now()), 1)),
            period_end: getUnixTime(addHours(endOfDay(Date.now()), -1)),
            type: 'locker',
        }).catch(() => []);
        this.has_booking.set(bookings.length > 0);
    }
}
