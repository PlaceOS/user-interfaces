import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingFormService, ParkingService } from '@placeos/bookings';
import { AsyncHandler } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { ParkingRequestFormComponent } from './parking-request-flow/parking-request-form.component';
import { ParkingRequestSuccessComponent } from './parking-request-flow/parking-request-success.component';

@Component({
    selector: 'placeos-parking-request-flow',
    template: `
        @if (is_home_location()) {
            <div
                class="bg-base-100 z-50 flex h-full w-full flex-col items-center justify-center space-y-4"
            >
                <img src="assets/icons/permission-none.svg" class="h-64 w-64" />
                <p>
                    {{
                        'APP.WORKPLACE.PARKING_HOME_LOCATION_RESTRICTED'
                            | translate
                    }}
                </p>
            </div>
        } @else {
            <div class="bg-base-100 z-50 h-full w-full">
                @switch (view()) {
                    @case ('success') {
                        <parking-request-success></parking-request-success>
                    }
                    @default {
                        <parking-request-form></parking-request-form>
                    }
                }
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
        TranslatePipe,
        ParkingRequestSuccessComponent,
        ParkingRequestFormComponent,
    ],
})
export class ParkingRequestFlowComponent
    extends AsyncHandler
    implements OnInit
{
    private _state = inject(BookingFormService);
    private _route = inject(ActivatedRoute);
    private _parking = inject(ParkingService);

    public readonly is_home_location = this._parking.is_home_location;
    public readonly view = this._state.view;

    public ngOnInit() {
        this._parking.loadBookings();
        this._state.loadForm('parking');
        this._state.setOptions({ type: 'parking' });
        if (!this._state.model().id) this._state.newForm('parking');
        this._state.model.update((m) => ({ ...m, booking_type: 'parking' }));
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
