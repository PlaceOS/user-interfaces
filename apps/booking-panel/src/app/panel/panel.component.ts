import {
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
} from '@angular/core';

import { BaseClass } from '@placeos/common';

import { PanelStateService } from './panel-state.service';

@Component({
    selector: 'app-booking-panel',
    template: `
        <div class="flex flex-col absolute inset-0 bg-gray-50">
            <panel-topbar></panel-topbar>
            <div content class="flex flex-1 items-center h-1/2 p-8 space-x-2">
                <panel-details class="flex-1 h-full p-4"></panel-details>
                <panel-booking-list
                    class="flex-1 h-full p-4"
                ></panel-booking-list>
            </div>
            <panel-status></panel-status>
            <!-- <div class="w-full h-12"></div> -->
        </div>
    `,
    styles: [``],
    providers: [PanelStateService],
})
export class BookingPanelComponent
    extends BaseClass
    implements OnInit, OnChanges {
    @Input() public system_id: string = localStorage.getItem(
        'PLACEOS.BOOKINGS.system'
    );

    constructor(private _state: PanelStateService) {
        super();
    }

    public ngOnInit() {
        this._state.system = this.system_id || '';
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.system_id) {
            this._state.system = this.system_id;
        }
    }
}
