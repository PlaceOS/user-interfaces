import {
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AsyncHandler } from '@placeos/common';

import { PanelStateService } from '../panel-state.service';

@Component({
    selector: 'app-booking-panel',
    template: `
        <div class="flex flex-col absolute inset-0 bg-base-200">
            <panel-topbar *ngIf="topbar"></panel-topbar>
            <div
                content
                class="flex flex-1 items-center h-1/2 space-x-2"
                [class.p-8]="topbar"
                [class.p-4]="!topbar"
            >
                <panel-details
                    class="flex-1 h-full max-w-[50%]"
                    [class.p-4]="topbar"
                    [class.p-2]="!topbar"
                ></panel-details>
                <panel-booking-list
                    class="flex-1 h-full max-w-[50%]"
                    [class.p-4]="topbar"
                    [class.p-2]="!topbar"
                ></panel-booking-list>
            </div>
            <panel-status></panel-status>
            <!-- <panel-timeline></panel-timeline> -->
        </div>
    `,
    styles: [``],
    providers: [PanelStateService],
})
export class BookingPanelComponent
    extends AsyncHandler
    implements OnInit, OnChanges
{
    @Input() public system_id: string = localStorage.getItem(
        'PLACEOS.BOOKINGS.system'
    );

    @Input() public topbar = true;

    constructor(
        private _state: PanelStateService,
        private _route: ActivatedRoute
    ) {
        super();
    }

    public ngOnInit() {
        this._state.system = this.system_id || '';
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((params) => {
                if (params.has('system_id')) {
                    this._state.system = params.get('system_id');
                }
            })
        );
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.system_id) {
            this._state.system = this.system_id;
        }
    }
}
