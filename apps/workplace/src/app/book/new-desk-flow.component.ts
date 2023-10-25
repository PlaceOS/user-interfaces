import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import { AsyncHandler, notifyInfo } from '@placeos/common';
import { Desk, OrganisationService } from '@placeos/organisation';
import { first, take } from 'rxjs/operators';

@Component({
    selector: 'placeos-new-book-desk-flow',
    template: `
        <div class="bg-base-100 h-full w-full z-50">
            <ng-container [ngSwitch]="view">
                <ng-container *ngSwitchCase="'success'">
                    <new-desk-flow-success></new-desk-flow-success>
                </ng-container>
                <ng-container *ngSwitchDefault>
                    <new-desk-flow-form></new-desk-flow-form>
                </ng-container>
            </ng-container>
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
})
export class NewDeskFlowComponent extends AsyncHandler implements OnInit {
    public get view() {
        return this._state.view;
    }
    public get last_success() {
        return this._state.last_success;
    }

    constructor(
        private _state: BookingFormService,
        private _route: ActivatedRoute,
        private _org: OrganisationService
    ) {
        super();
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this._state.loadForm();
        this._state.setOptions({ type: 'desk' });
        this._state.form.patchValue({ booking_type: 'desk' });
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((param) => {
                if (param.has('step'))
                    this._state.setView(param.get('step') as any);
            })
        );
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe(async (params) => {
                if (params.has('success')) {
                    this._state.setView(params.get('success') as any);
                }
                if (params.has('asset_id')) {
                    const id = params.get('asset_id');
                    const resources = await this._state.resources
                        .pipe(take(1))
                        .toPromise();
                    let asset = resources.find((_) => _.id === id);
                    if (!asset) {
                        return notifyInfo(
                            'Unable to find desk with given asset ID.'
                        );
                    }
                    this._state.form.patchValue({
                        resources: [
                            new Desk({
                                id: asset.id,
                                name: asset.name || asset.id,
                            }),
                        ],
                    });
                }
            })
        );
    }
}
