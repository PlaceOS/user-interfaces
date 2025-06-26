import { Component, inject } from '@angular/core';
import { PanelStateService } from '../panel-state.service';

@Component({
    selector: 'panel-status',
    template: `
        <div
            status
            class="w-[calc(100% - 2rem)] m-2 h-12 rounded shadow"
            [class.bg-base-200]="(settings | async)?.status === 'not-bookable'"
            [class.bg-warning]="(settings | async)?.status === 'pending'"
            [class.bg-success]="(settings | async)?.status === 'free'"
            [class.bg-error]="(settings | async)?.status === 'busy'"
        ></div>
    `,
    styles: [``],
    standalone: false,
})
export class PanelStatusComponent {
    private _state = inject(PanelStateService);

    public readonly settings = this._state.settings;
}
