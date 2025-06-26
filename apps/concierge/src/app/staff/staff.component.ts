import { Component, OnDestroy, OnInit } from '@angular/core';

import { StaffStateService } from './staff-state.service';

@Component({
    selector: '[app-new-staff]',
    template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <staff-topbar class="w-full"></staff-topbar>
                <staff-listings class="h-0 w-full flex-1"></staff-listings>
                @if (loading | async) {
                    <mat-progress-bar
                        class="w-full"
                        mode="indeterminate"
                    ></mat-progress-bar>
                }
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
