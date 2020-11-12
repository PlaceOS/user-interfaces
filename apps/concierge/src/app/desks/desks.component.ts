import { Component } from '@angular/core';
import { DesksStateService } from './desks-state.service';

@Component({
    selector: 'app-desks',
    template: `
        <sidebar></sidebar>
        <main class="relative overflow-hidden flex-1">
            <desks-topbar class="w-full"></desks-topbar>
            <desk-listings class="w-full"></desk-listings>
        </main>
    `,
    styles: [
        `
            :host {
                display: flex;
                height: 100%;
                width: 100%;
            }
        `,
    ],
})
export class DesksComponent {
    constructor(private _state: DesksStateService) {}

    public ngOnInit() {
        this._state.startPolling();
    }

    public ngOnDestroy() {
        this._state.stopPolling();
    }
}
