import { Component, OnDestroy, OnInit } from '@angular/core';

import { StaffStateService } from './staff-state.service';

@Component({
    selector: '[app-staff]',
    template: `
        <sidebar></sidebar>
        <main class="relative flex flex-1 flex-col overflow-hidden">
            <staff-topbar class="w-full"></staff-topbar>
            <staff-listings class="h-0 w-full flex-1"></staff-listings>
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
                background: var(--b1);
            }
        `,
    ],
    standalone: false,
})
export class StaffComponent implements OnInit, OnDestroy {
    public readonly loading = this._state.loading;

    constructor(private _state: StaffStateService) {}

    public ngOnInit() {
        this._state.startPolling();
    }

    public ngOnDestroy() {
        this._state.stopPolling();
    }
}
