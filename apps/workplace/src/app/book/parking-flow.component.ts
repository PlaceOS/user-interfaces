import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import { AsyncHandler } from '@placeos/common';

@Component({
    selector: 'placeos-book-parking-flow',
    template: `
        <div class="bg-base-100 h-full w-full">
            <ng-container [ngSwitch]="view">
                <ng-container *ngSwitchCase="'confirm'">
                    <parking-flow-confirm></parking-flow-confirm>
                </ng-container>
                <ng-container *ngSwitchCase="'success'">
                    <flow-success
                        [calendar]="last_success?.host"
                        route="parking"
                        type="parking"
                    ></flow-success>
                </ng-container>
                <ng-container *ngSwitchDefault>
                    <parking-flow-map></parking-flow-map>
                </ng-container>
            </ng-container>
        </div>
    `,
    styles: [
        `
            :host {
                position: relative;
                height: 100%;
                width: 100%;
            }
        `,
    ],
})
export class BookParkingFlowComponent extends AsyncHandler implements OnInit {
    public get view() {
        return this._state.view;
    }
    public get last_success() {
        return this._state.last_success;
    }

    constructor(
        private _state: BookingFormService,
        private _route: ActivatedRoute
    ) {
        super();
    }

    public ngOnInit() {
        this._state.setOptions({ type: 'parking' });
        this._state.loadForm();
        if (!this._state.form) this._state.newForm();
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
                if (param.has('success'))
                    this._state.setView(param.get('success') as any);
            })
        );
    }
}
