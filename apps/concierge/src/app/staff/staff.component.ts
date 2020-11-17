import { Component } from '@angular/core';

import { StaffStateService } from './staff-state.service';

@Component({
    selector: 'app-staff',
    template: `
        <sidebar></sidebar>
        <main class="relative overflow-hidden flex-1 flex flex-col">
            <staff-topbar class="w-full"></staff-topbar>
            <staff-listings class="w-full flex-1 h-0"></staff-listings>
            <mat-progress-bar
                class="w-full"
                *ngIf="loading | async"
                mode="indeterminate"
            ></mat-progress-bar>
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
export class StaffComponent {
    public readonly loading = this._state.loading;

    constructor(private _state: StaffStateService) {}
}
