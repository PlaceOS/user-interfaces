
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { BaseClass, log, SettingsService } from '@user-interfaces/common';
import { OrganisationService } from '@user-interfaces/organisation';

@Component({
    selector: 'app-explore',
    template: `
        <header>
            <a-topbar-header></a-topbar-header>
        </header>
        <main class="flex flex-1 w-full relative">
            <explore-map-view></explore-map-view>
        </main>
        <footer class="flex w-full">
            <a-footer-legend></a-footer-legend>
        </footer>
    `,
    styles: [
        `
            :host {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                overflow: hidden;
                display: flex;
                flex-direction: column;
            }
        `,
    ],
})
export class ExploreComponent extends BaseClass implements OnInit {
    /** Whether to show the overlay menu */
    public show_menu: boolean;

    constructor(
        private _org: OrganisationService,
        private _settings: SettingsService,
        private _router: Router,
        private _dialog: MatDialog
    ) {
        super();
    }

    public ngOnInit(): void {
        this._settings.title = 'Explore';
        let level = '';
        if (localStorage) {
            level = localStorage.getItem('KIOSK.level');
        }
        if (!level) {
            this._router.navigate(['/bootstrap']);
        }
        this.timeout('refresh', () => this.refreshKiosk(), 2 * 60 * 1000);
    }

    public get emergency_phone(): string {
        const level_id = localStorage.getItem('KIOSK.level');
        const level = this._org.levelWithID([level_id]);
        if (!level) {
            return;
        }
        const building = this._org.buildings.find(
            bld => bld.id === level.parent_id
        );
        if (!building) {
            return;
        }
        return building.phone_numbers.emergency || '';
    }

    /**
     * Reset the timeout for refreshing the kiosk view
     */
    public resetRefresh() {
        this.timeout('refresh', () => this.refreshKiosk(), 2 * 60 * 1000);
    }

    /**
     * Refresh the kiosk view
     */
    public refreshKiosk() {
        log('EXPLORE', 'Refreshing kiosk...');
        this._dialog.closeAll();
        let level = '';
        if (localStorage) {
            level = localStorage.getItem('KIOSK.level');
        }
        if (!level) {
            this._router.navigate(['/bootstrap']);
        } else {
            this._router.navigate(['/explore', 'none'], { queryParams: { level } });
        }
        this._dialog.closeAll();
        this._settings.post('KIOSK.reset', new Date().getTime());
    }
}
