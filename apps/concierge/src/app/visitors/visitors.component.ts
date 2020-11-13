import { Component, OnDestroy, OnInit } from '@angular/core';
import { VisitorsStateService } from './visitors-state.service';

@Component({
    selector: 'app-visitors',
    template: `
        <sidebar></sidebar>
        <main class="relative overflow-hidden flex-1 flex flex-col">
            <visitors-topbar class="w-full"></visitors-topbar>
            <visitor-listings class="w-full flex-1 h-0"></visitor-listings>
            <mat-progress-bar class="w-full" *ngIf="loading | async" mode="indeterminate"></mat-progress-bar>
        </main>
    `,
    styles: [
        `
            :host {
                display: flex;
                height: 100%;
                width: 100%;
            }
        `
    ],
})
export class VisitorsComponent implements OnInit, OnDestroy {
    public readonly loading = this._state.loading;

    constructor(private _state: VisitorsStateService) {}

    public ngOnInit() {
        this._state.startPolling();
    }

    public ngOnDestroy() {
        this._state.stopPolling();
    }
}
