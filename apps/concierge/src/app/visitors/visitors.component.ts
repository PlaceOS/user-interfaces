import { Component, OnDestroy, OnInit } from '@angular/core';
import { VisitorsStateService } from './visitors-state.service';

@Component({
    selector: '[app-visitors]',
    template: `
        <sidebar></sidebar>
        <main class="relative flex w-full flex-col bg-base-200">
            <visitors-topbar class="w-full"></visitors-topbar>
            <guest-listings class="h-0 w-full flex-1"></guest-listings>
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
    standalone: false,
})
export class VisitorsComponent implements OnInit, OnDestroy {
    public readonly loading = this._state.loading;
    public readonly filters = this._state.filters;

    constructor(private _state: VisitorsStateService) {}

    public ngOnInit() {
        this._state.startPolling();
    }

    public ngOnDestroy() {
        this._state.stopPolling();
    }
}
