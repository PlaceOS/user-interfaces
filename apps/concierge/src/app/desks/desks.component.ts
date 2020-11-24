import { Component } from '@angular/core';
import { DesksStateService } from './desks-state.service';

@Component({
    selector: 'app-desks',
    template: `
        <sidebar></sidebar>
        <main class="relative overflow-hidden flex-1 flex flex-col">
            <desks-topbar class="w-full"></desks-topbar>
            <desk-listings class="w-full flex-1 h-0"></desk-listings>
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
        `,
    ],
})
export class DesksComponent {
    public readonly loading = this._state.loading;

    constructor(private _state: DesksStateService) {}

    public ngOnInit() {
        this._state.startPolling();
    }

    public ngOnDestroy() {
        this._state.stopPolling();
    }
}
