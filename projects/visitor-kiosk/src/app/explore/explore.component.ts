import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { BaseClass } from 'src/app/common/base.class';
import { SettingsService } from 'src/app/common/settings.service';
import { OrganisationService } from 'src/app/organisation/organisation.service';
import { log } from 'src/app/common/general';

@Component({
    selector: 'app-explore',
    templateUrl: './explore.component.html',
    styleUrls: ['./explore.component.scss']
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
