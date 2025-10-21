import { Component, OnInit, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    ActivatedRoute,
    NavigationEnd,
    Router,
    RouterModule,
} from '@angular/router';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { LockerStateService } from './locker-state.service';

import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ApplicationSidebarComponent } from '../ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../ui/app-topbar.component';
import { BookingRulesModalComponent } from '../ui/booking-rules-modal.component';
import { LockersTopbarComponent } from './locker-topbar.component';

@Component({
    selector: '[app-new-lockers]',
    template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="relative flex h-full w-1/2 flex-1 flex-col">
                <lockers-topbar class="w-full"></lockers-topbar>
                <div class="relative h-1/2 w-full flex-1 overflow-auto px-8">
                    <div class="h-full w-full overflow-auto">
                        <router-outlet></router-outlet>
                    </div>
                </div>
                @if ((loading | async) && path() === 'events') {
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
    imports: [
        CommonModule,
        ApplicationTopbarComponent,
        ApplicationSidebarComponent,
        LockersTopbarComponent,
        RouterModule,
        MatProgressBarModule,
    ],
})
export class LockersComponent extends AsyncHandler implements OnInit {
    private _state = inject(LockerStateService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);
    private _dialog = inject(MatDialog);
    private _settings = inject(SettingsService);

    public readonly loading = this._state.loading;
    public path = signal('');
    /** List of levels for the active building */
    public readonly filters = this._state.filters;
    /** List of levels for the active building */
    public readonly levels = this._state.levels;
    public readonly setDate = (date) => this._state.setFilters({ date });
    public readonly setFilters = (o) => this._state.setFilters(o);
    public readonly refresh = () => this._state.refresh();
    public readonly rejectAll = () => this._state.rejectAllLockers();
    /** Update active zones for lockers */
    public readonly updateZones = (zones: string[]) => {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { zone_ids: zones.join(',') },
            queryParamsHandling: 'merge',
        });
        this._state.setFilters({ zones });
    };

    public get use_region() {
        return !!this._settings.get('app.use_region');
    }

    public ngOnInit() {
        this._state.refresh();
        this.subscription(
            'router.events',
            this._router.events.subscribe((e) => {
                if (e instanceof NavigationEnd) this._updatePath();
            }),
        );
        this._updatePath();
    }

    public manageRestrictions() {
        this._dialog.open(BookingRulesModalComponent, {
            data: { type: 'locker' },
        });
    }

    private _updatePath() {
        const parts = this._router.url?.split('/') || [''];
        this.path.set(parts[parts.length - 1].split('?')[0]);
    }
}
