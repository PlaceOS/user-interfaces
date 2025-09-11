import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import {
    AsyncHandler,
    firstTruthyValueFrom,
    nextValueFrom,
    notifyInfo,
} from '@placeos/common';
import { Desk, OrganisationService } from '@placeos/organisation';
import { lastValueFrom, timer } from 'rxjs';

@Component({
    selector: 'placeos-new-book-desk-flow',
    template: `
        <div class="z-50 h-full w-full bg-base-100">
            @switch (view()) {
                @case ('success') {
                    <desk-flow-success></desk-flow-success>
                }
                @default {
                    <desk-flow-form></desk-flow-form>
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
    standalone: false,
})
export class NewDeskFlowComponent extends AsyncHandler implements OnInit {
    private _state = inject(BookingFormService);
    private _org = inject(OrganisationService);
    private _route = inject(ActivatedRoute);

    public readonly view = this._state.view;

    public get last_success() {
        return this._state.last_success;
    }

    public async ngOnInit() {
        await firstTruthyValueFrom(this._org.initialised);
        await lastValueFrom(timer(300));
        this._state.loadForm();
        this._state.setOptions({ type: 'desk' });
        const { id, booking_type } = this._state.form.value;
        if (!id || booking_type !== 'desk') this._state.newForm('desk');
        this._state.form.patchValue({ booking_type: 'desk' });
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((param) => {
                if (param.has('step'))
                    this._state.setView(param.get('step') as any);
            }),
        );
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe(async (params) => {
                if (params.has('success')) {
                    this._state.setView(params.get('success') as any);
                }
                if (params.has('asset_id')) {
                    const id = params.get('asset_id');
                    const resources = await nextValueFrom(
                        this._state.resources,
                    );
                    const asset = resources.find((_) => _.id === id);
                    if (!asset) {
                        return notifyInfo(
                            'Unable to find desk with given asset ID.',
                        );
                    }
                    this._state.form.patchValue({
                        resources: [
                            new Desk({
                                id: asset.id,
                                name: asset.name || asset.id,
                                zone:
                                    asset.zone ||
                                    (this._org.levelsForBuilding()[0] as any),
                            }),
                        ],
                    });
                }
            }),
        );
    }
}
