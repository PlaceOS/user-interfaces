import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BookingFormService, ParkingService } from '@placeos/bookings';
import { AsyncHandler } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { NewParkingFlowConfirmComponent } from './parking-flow/parking-flow-confirm.component';
import { ParkingFlowFormComponent } from './parking-flow/parking-flow-form.component';
import { ParkingFlowSuccessComponent } from './parking-flow/parking-flow-success.component';

@Component({
    selector: 'placeos-parking-flow',
    template: `
        @if (!(deny_parking_access | async)) {
            @if (is_home_location | async) {
                <div
                    class="bg-base-100 z-50 flex h-full w-full flex-col items-center justify-center space-y-4"
                >
                    <img
                        src="assets/icons/permission-none.svg"
                        class="h-64 w-64"
                    />
                    <p>
                        {{
                            'APP.WORKPLACE.PARKING_HOME_LOCATION_RESTRICTED'
                                | translate
                        }}
                    </p>
                </div>
            } @else if (!(assigned_space | async) || !(has_booking | async)) {
                <div class="bg-base-100 z-50 h-full w-full">
                    @switch (view()) {
                        @case ('success') {
                            <parking-flow-success> </parking-flow-success>
                        }
                        @case ('confirm') {
                            <parking-flow-confirm> </parking-flow-confirm>
                        }
                        @default {
                            <parking-flow-form></parking-flow-form>
                        }
                    }
                </div>
            } @else {
                <div
                    class="bg-base-100 z-50 flex h-full w-full flex-col items-center justify-center space-y-4"
                >
                    <img
                        src="assets/icons/parking-success.svg"
                        class="h-64 w-64"
                    />
                    <p>
                        {{
                            'APP.WORKPLACE.PARKING_ASSIGNED'
                                | translate
                                    : { name: (assigned_space | async)?.name }
                        }}
                    </p>
                    <a
                        btn
                        matRipple
                        class="w-48"
                        [routerLink]="['/your-bookings']"
                    >
                        {{ 'APP.WORKPLACE.VIEW_SCHEDULE' | translate }}
                    </a>
                </div>
            }
        } @else {
            <div
                class="bg-base-100 z-50 flex h-full w-full flex-col items-center justify-center space-y-4"
            >
                <img src="assets/icons/permission-none.svg" class="h-64 w-64" />
                <p>
                    Your user account is not allowed to book parking in this
                    building.
                </p>
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
    imports: [
        CommonModule,
        RouterModule,
        TranslatePipe,
        ParkingFlowSuccessComponent,
        NewParkingFlowConfirmComponent,
        ParkingFlowFormComponent,
    ],
})
export class NewParkingFlowComponent extends AsyncHandler implements OnInit {
    private _state = inject(BookingFormService);
    private _route = inject(ActivatedRoute);
    private _parking = inject(ParkingService);

    public readonly deny_parking_access = this._parking.deny_parking_access;
    public readonly assigned_space = this._parking.assigned_space;
    public readonly has_booking = this._parking.has_booking;
    public readonly is_home_location = this._parking.is_home_location;
    public readonly view = this._state.view;

    public get last_success() {
        return this._state.last_success;
    }

    public ngOnInit() {
        this._state.loadForm();
        this._state.setOptions({ type: 'parking' });
        if (!this._state.form.value.id) this._state.newForm('parking');
        this._state.form.patchValue({ booking_type: 'parking' });
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
