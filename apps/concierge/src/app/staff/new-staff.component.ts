import { Component, OnDestroy, OnInit } from '@angular/core';

import { StaffStateService } from './staff-state.service';

@Component({
    selector: '[app-new-staff]',
    template: `
        <app-topbar></app-topbar>
        <div class="flex flex-1 h-px">
            <app-sidebar></app-sidebar>
            <main class="flex flex-col flex-1 w-1/2 h-full">
                <staff-topbar class="w-full"></staff-topbar>
                <staff-listings class="w-full flex-1 h-0"></staff-listings>
                <mat-progress-bar
                    class="w-full"
                    *ngIf="loading | async"
                    mode="indeterminate"
                ></mat-progress-bar>
            </main>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
                background-color: var(--b1);
            }
        `,
    ],
})
export class NewStaffComponent implements OnInit, OnDestroy {
    public readonly loading = this._state.loading;

    constructor(private _state: StaffStateService) {}

    public ngOnInit() {
        this._state.startPolling();
    }

    public ngOnDestroy() {
        this._state.stopPolling();
    }
}
