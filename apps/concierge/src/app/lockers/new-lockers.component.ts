import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { LockerStateService } from './locker-state.service';
import { MatDialog } from '@angular/material/dialog';

import { BookingRulesModalComponent } from '../ui/booking-rules-modal.component';

@Component({
    selector: '[app-new-lockers]',
    template: `
        <app-topbar></app-topbar>
        <div class="flex flex-1 h-px">
            <app-sidebar></app-sidebar>
            <main class="flex flex-col flex-1 w-1/2 h-full relative">
                <lockers-topbar class="w-full"></lockers-topbar>
                <div class="relative flex-1 h-1/2 w-full overflow-auto px-8">
                    <div class="w-full h-full overflow-auto">
                        <router-outlet></router-outlet>
                    </div>
                </div>
                <mat-progress-bar
                    class="w-full"
                    *ngIf="(loading | async) && path === 'events'"
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
export class NewLockersComponent
    extends AsyncHandler
    implements OnInit, OnDestroy
{
    public readonly loading = this._state.loading;
    public path: string;
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

    constructor(
        private _state: LockerStateService,
        private _router: Router,
        private _route: ActivatedRoute,
        private _dialog: MatDialog,
        private _settings: SettingsService,
    ) {
        super();
    }

    public ngOnInit() {
        this._state.refresh();
        this.subscription(
            'router.events',
            this._router.events.subscribe((e) => {
                if (e instanceof NavigationEnd) {
                    const url_parts = this._router.url?.split('/') || [''];
                    this.path = url_parts[parts.length - 1].split('?')[0];
                }
            }),
        );
        const parts = this._router.url?.split('/') || [''];
        this.path = parts[parts.length - 1].split('?')[0];
    }

    public ngOnDestroy() {
        super.ngOnDestroy();
    }

    // public newLockerBooking() {
    //     const ref = this._dialog.open(LockerBookModalComponent, {});
    //     ref.afterClosed().subscribe((_) => {
    //         this._state.refresh();
    //     });
    // }

    public manageRestrictions() {
        this._dialog.open(BookingRulesModalComponent, {
            data: { type: 'locker' },
        });
    }

    // public newLocker() {
    //     this._state.addLockers([
    //         new Locker({ id: `locker-${randomInt(999_999)}` }),
    //     ]);
    //     notifySuccess(
    //         'New locker added to local data. Make sure to save the locker before using it.'
    //     );
    // }

    // public downloadTemplate() {
    //     const locker: any = new Locker({
    //         id: 'locker-123',
    //         name: 'Test Locker',
    //         bookable: true,
    //         groups: ['test-locker-group', 'locker-bookers'],
    //         features: ['Standing Locker', 'Dual Monitor'],
    //     }).toJSON();
    //     const data = jsonToCsv([locker]);
    //     downloadFile('locker-template.csv', data);
    // }

    // public async loadCSVData(event: InputEvent) {
    //     const data = await loadTextFileFromInputEvent(event).catch(([m, e]) => {
    //         notifyError(m);
    //         throw e;
    //     });
    //     try {
    //         const list = csvToJson(data) || [];
    //         this._state.addLockers(
    //             list.map(
    //                 (_) =>
    //                     new Locker({
    //                         ..._,
    //                         id: _.id || `locker-${randomInt(999_999)}`,
    //                     })
    //             )
    //         );
    //     } catch (e) {
    //         console.error(e);
    //     }
    // }
}
