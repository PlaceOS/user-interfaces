import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingFormService, ParkingService } from '@placeos/bookings';
import { AsyncHandler } from '@placeos/common';

@Component({
    selector: 'placeos-new-parking-flow',
    template: `
        <ng-container *ngIf="!(deny_parking_access | async); else deny_state">
            <ng-container
                *ngIf="!(assigned_space | async); else assigned_state"
            >
                <div class="bg-base-100 h-full w-full z-50" [ngSwitch]="view">
                    <parking-flow-success *ngSwitchCase="'success'">
                    </parking-flow-success>
                    <parking-flow-confirm *ngSwitchCase="'confirm'">
                    </parking-flow-confirm>
                    <parking-flow-form *ngSwitchDefault></parking-flow-form>
                </div>
            </ng-container>
        </ng-container>
        <ng-template #assigned_state>
            <div
                class="bg-base-100 flex flex-col items-center justify-center h-full w-full z-50 space-y-4"
            >
                <img src="assets/icons/parking-success.svg" class="w-64 h-64" />
                <p>
                    You are already assigned to parking space "{{
                        (assigned_space | async)?.name
                    }}"
                </p>
                <a btn matRipple class="w-48" [routerLink]="['/your-bookings']">
                    View Your Bookings
                </a>
            </div>
        </ng-template>
        <ng-template #deny_state>
            <div
                class="bg-base-100 flex flex-col items-center justify-center h-full w-full z-50 space-y-4"
            >
                <img src="assets/img/parking-space.svg" class="w-64 h-64" />
                <p>
                    Your user account is not allowed to book parking in this
                    building.
                </p>
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
})
export class NewParkingFlowComponent extends AsyncHandler implements OnInit {
    public readonly deny_parking_access = this._parking.deny_parking_access;
    public readonly assigned_space = this._parking.assigned_space;

    public get view() {
        return this._state.view;
    }
    public get last_success() {
        return this._state.last_success;
    }

    constructor(
        private _state: BookingFormService,
        private _route: ActivatedRoute,
        private _parking: ParkingService
    ) {
        super();
    }

    public ngOnInit() {
        this._state.loadForm();
        if (!this._state.form) this._state.newForm();
        this._state.setOptions({ type: 'parking' });
        this._state.form.patchValue({ booking_type: 'parking' });
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((param) => {
                if (param.has('step'))
                    this._state.setView(param.get('step') as any);
            })
        );
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((param) => {
                if (param.has('success')) this._state.setView('success');
            })
        );
    }
}
