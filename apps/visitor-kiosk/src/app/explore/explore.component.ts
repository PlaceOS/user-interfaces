import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { BaseClass, log, SettingsService } from '@placeos/common';
import { ExploreStateService } from '@placeos/explore';
import { OrganisationService } from '@placeos/organisation';

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
    /** Number of seconds after a user action to reset the kiosk state */
    public reset_delay = 180;
    /** Whether to show the overlay menu */
    public show_menu: boolean;

    @HostListener('window:mousedown') public onMouse = () =>
        this.timeout('reset', () => this.resetKiosk(), this.reset_delay * 1000);
    @HostListener('window:touchstart') public onTouch = () =>
        this.timeout('reset', () => this.resetKiosk(), this.reset_delay * 1000);

    constructor(
        private _org: OrganisationService,
        private _settings: SettingsService,
        private _state: ExploreStateService,
        private _router: Router,
        private _dialog: MatDialog
    ) {
        super();
    }

    public ngOnInit(): void {
        this._settings.title = 'Explore';
        this.reset_delay =
            this._settings.get('app.inactivity_timeout_secs') || 180;
        const level = localStorage?.getItem('KIOSK.level');
        if (!level) {
            this._router.navigate(['/bootstrap']);
            return;
        }
        this._state.setLevel(level);
        this.onMouse();
    }

    public get emergency_phone(): string {
        const level_id = localStorage.getItem('KIOSK.level');
        const level = this._org.levelWithID([level_id]);
        if (!level) {
            return;
        }
        const building = this._org.buildings.find(
            (bld) => bld.id === level.parent_id
        );
        if (!building) {
            return;
        }
        return building.phone_numbers.emergency || '';
    }

    /**
     * Refresh the kiosk view
     */
    public resetKiosk() {
        log('EXPLORE', 'Refreshing kiosk...');
        if ((document.activeElement as any)?.blur)
            (document.activeElement as any)?.blur();
        const level = localStorage.getItem('KIOSK.level');
        this._state.setPositions(1, { x: 0.5, y: 0.5 });
        if (level) this._state.setLevel(level);
        this._dialog.closeAll();
        this._settings.post('KIOSK.reset', Date.now());
    }
}
