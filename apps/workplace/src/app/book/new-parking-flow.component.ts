import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BookingFormService } from "@placeos/bookings";
import { BaseClass } from "@placeos/common";

@Component({
    selector: 'placeos-new-parking-flow',
    template: `
    <div class="bg-white dark:bg-neutral-700 h-full w-full z-50" [ngSwitch]="view">
        <parking-flow-success *ngSwitchCase="'success'">
        </parking-flow-success>
        <parking-flow-confirm *ngSwitchCase="'confirm'">
        </parking-flow-confirm>
        <parking-flow-form *ngSwitchDefault></parking-flow-form>
    </div>`,
    styles: [``]
})
export class NewParkingFlowComponent extends BaseClass implements OnInit {
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
                if (param.has('success')) this._state.setView('success');
            })
        );
    }
}
