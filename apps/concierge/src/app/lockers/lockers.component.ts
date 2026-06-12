import { Component, OnInit, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import {
    ActivatedRoute,
    NavigationEnd,
    Router,
    RouterModule,
} from '@angular/router';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { LockerStateService } from './locker-state.service';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { filter, map, startWith } from 'rxjs/operators';
import { ApplicationSidebarComponent } from '../ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../ui/app-topbar.component';
import { BookingRulesModalComponent } from '../ui/booking-rules-modal.component';
import { LockersTopbarComponent } from './locker-topbar.component';

@Component({
    selector: '[app-lockers]',
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
                @if (loading() && path() === 'events') {
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

    private readonly _current_url = toSignal(
        this._router.events.pipe(
            filter(
                (event): event is NavigationEnd =>
                    event instanceof NavigationEnd,
            ),
            map((event) => event.urlAfterRedirects),
            startWith(this._router.url),
        ),
        { initialValue: this._router.url },
    );

    public readonly loading = toSignal(this._state.loading, {
        initialValue: '',
    });
    public readonly path = computed(() => {
        const parts = this._current_url()?.split('/') || [''];
        return parts[parts.length - 1].split('?')[0];
    });
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
    }

    public manageRestrictions() {
        this._dialog.open(BookingRulesModalComponent, {
            data: { type: 'locker' },
        });
    }
}
