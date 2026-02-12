import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import { AsyncHandler } from '@placeos/common';
import { ParkingRequestFormComponent } from './parking-request-flow/parking-request-form.component';
import { ParkingRequestSuccessComponent } from './parking-request-flow/parking-request-success.component';

@Component({
    selector: 'placeos-parking-request-flow',
    template: `
        <div class="bg-base-200 z-50 h-full w-full">
            @switch (view()) {
                @case ('success') {
                    <parking-request-success></parking-request-success>
                }
                @default {
                    <parking-request-form></parking-request-form>
                }
            }
        </div>
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

    public readonly view = this._state.view;

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
