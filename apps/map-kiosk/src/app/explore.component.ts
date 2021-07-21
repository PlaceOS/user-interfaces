import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BaseClass, current_user, SettingsService } from '@placeos/common';
import { VirtualKeyboardComponent } from '@placeos/components';
import {
    ExploreDesksService,
    ExploreSpacesService,
    ExploreStateService,
    ExploreZonesService,
} from '@placeos/explore';
import { OrganisationService } from '@placeos/organisation';
import { first } from 'rxjs/operators';

@Component({
    selector: '[app-explore]',
    template: `
        <div
            class="absolute top-0 left-0 bg-white rounded-br-xl p-2 z-10 shadow"
        >
            <img class="w-32" [src]="logo?.src" />
        </div>
        <!-- <explore-map-stack class="z-0"></explore-map-stack> -->
        <div class="flex-1 h-1/2 w-full relative">
            <i-map
                [src]="url | async"
                [zoom]="(positions | async)?.zoom"
                [center]="(positions | async)?.center"
                [styles]="styles | async"
                [features]="features | async"
                [actions]="actions | async"
                [labels]="labels | async"
            ></i-map>
        </div>
        <explore-zoom-controls
            class="absolute top-1/2 transform -translate-y-1/2 right-0"
        ></explore-zoom-controls>
        <explore-level-select
            class="absolute left-1 top-1/2 transform -translate-y-1/2 z-10"
        ></explore-level-select>
        <explore-search class="absolute top-1 right-1"></explore-search>
        <!-- <footer-menu class="w-full"></footer-menu> -->
    `,
    styles: [
        `
            :host {
                position: absolute;
                display: flex;
                flex-direction: column;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #f0f0f0;
            }
        `,
    ],
    providers: [ExploreSpacesService, ExploreDesksService, ExploreZonesService],
})
export class ExploreComponent extends BaseClass implements OnInit {
    public reset_delay = 180;
    public get logo() {
        return this._settings.get('app.logo');
    }
    /** Observable for the active map */
    public readonly url = this._state.map_url;
    /** Observable for the active map */
    public readonly styles = this._state.map_styles;
    /** Observable for the active map */
    public readonly positions = this._state.map_positions;
    /** Observable for the active map */
    public readonly features = this._state.map_features;
    /** Observable for the active map */
    public readonly actions = this._state.map_actions;
    /** Observable for the labels map */
    public readonly labels = this._state.map_labels;
    /** Observable for the active map */
    public readonly options = this._state.options;

    @HostListener('window:mousedown') public onMouse = () =>
        this.timeout('reset', () => this.resetKiosk(), this.reset_delay * 1000);
    @HostListener('window:touchstart') public onTouch = () =>
        this.timeout('reset', () => this.resetKiosk(), this.reset_delay * 1000);

    constructor(
        private _state: ExploreStateService,
        private _s: ExploreSpacesService,
        private _desks: ExploreDesksService,
        private _zones: ExploreZonesService,
        private _settings: SettingsService,
        private _org: OrganisationService,
        private _dialog: MatDialog
    ) {
        super();
    }

    public async ngOnInit() {
        await current_user.pipe(first((_) => !!_)).toPromise();
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this.reset_delay =
            this._settings.get('app.inactivity_timeout_secs') || 180;
        this.resetKiosk();
        VirtualKeyboardComponent.enabled =
            localStorage.getItem('OSK.enabled') === 'true';
    }

    public resetKiosk() {
        if ((document.activeElement as any)?.blur)
            (document.activeElement as any)?.blur();
        const level = localStorage.getItem('KIOSK.level');
        this._state.setPositions(1, { x: 0.5, y: 0.5 });
        if (level) this._state.setLevel(level);
        this._dialog.closeAll();
    }
}
