import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit,
    inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ApplicationSidebarComponent } from '../ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../ui/app-topbar.component';
import { StaffListingComponent } from './staff-listing.component';
import { StaffStateService } from './staff-state.service';
import { StaffTopbarComponent } from './staff-topbar.component';

@Component({
    selector: '[app-new-staff]',
    template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <staff-topbar class="w-full"></staff-topbar>
                <staff-listings class="h-0 w-full flex-1"></staff-listings>
                @if (loading()) {
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
                background-color: var(--base-100);
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        MatProgressBarModule,
        ApplicationTopbarComponent,
        ApplicationSidebarComponent,
        StaffTopbarComponent,
        StaffListingComponent,
    ],
})
export class StaffComponent implements OnInit, OnDestroy {
    private _state = inject(StaffStateService);

    public readonly loading = toSignal(this._state.loading, {
        initialValue: false,
    });

    public ngOnInit() {
        this._state.startPolling();
    }

    public ngOnDestroy() {
        this._state.stopPolling();
    }
}
