import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseClass } from '@placeos/common';
import { PanelStateService } from '../panel-state.service';

@Component({
    selector: 'panel-view',
    template: `
        <div class="flex flex-col items-center h-full w-full overflow-hidden">
            <panel-view-details class="flex-1 w-full"> </panel-view-details>
            <panel-view-status class="flex-1 w-full"> </panel-view-status>
        </div>
    `,
    styles: [``],
    providers: [PanelStateService],
})
export class PanelViewComponent extends BaseClass {
    constructor(
        private _state: PanelStateService,
        private _route: ActivatedRoute
    ) {
        super();
    }

    public ngOnInit() {
        this._state.system = '';
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((params) => {
                if (params.has('system_id')) {
                    this._state.system = params.get('system_id');
                }
            })
        );
    }
}
