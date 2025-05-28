import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import {
    AsyncHandler,
    firstTruthyValueFrom,
    log,
    SettingsService,
} from '@placeos/common';
import { ExploreParkingService, ExploreStateService } from '@placeos/explore';
import { OrganisationService } from '@placeos/organisation';
import { SpacesService } from '@placeos/spaces';
import { Point } from '@placeos/svg-viewer';

import { VirtualKeyboardComponent } from 'libs/components/src/lib/virtual-keyboard.component';

@Component({
    selector: 'parking-kiosk-view',
    template: `
        <div class="absolute inset-0 flex flex-col overflow-hidden bg-base-200">
            <header
                class="flex w-full items-center justify-center space-x-2 bg-base-100 p-4 text-2xl"
            >
                <div class="rounded border-2 border-info text-info">
                    <icon>local_parking</icon>
                </div>
                <div class="pl-2">Parking Available</div>
                <icon class="text-2xl text-info">arrow_forward</icon>
            </header>
            <main
                class="pointer-events-none w-full flex-1 border-y border-base-300"
            >
                <interactive-map
                    [src]="url | async"
                    [zoom]="(positions | async)?.zoom"
                    [center]="(positions | async)?.center"
                    (zoomChange)="updateZoom($event)"
                    (centerChange)="updateCenter($event)"
                    [styles]="styles | async"
                    [features]="features | async"
                    [actions]="actions | async"
                    [labels]="labels | async"
                ></interactive-map>
            </main>
            <footer
                class="flex w-full flex-col items-center bg-base-100 p-2 leading-tight"
            >
                <div class="text-3xl">Free Spaces: 5</div>
                <div class="mb-2 opacity-30">Total Capacity: 30 spaces</div>
                <div class="h-4 w-[50vw] rounded-full bg-base-300">
                    <div
                        class="h-full rounded-full bg-success"
                        [style.width]="50 + '%'"
                    ></div>
                </div>
            </footer>
        </div>
    `,
    styles: [``],
    providers: [ExploreStateService, ExploreParkingService],
    standalone: false,
})
export class ParkingComponent extends AsyncHandler implements OnInit {
    /** Observable for the active map */
    public readonly url = this._explore.map_url;
    /** Observable for the active map */
    public readonly styles = this._explore.map_styles;
    /** Observable for the active map */
    public readonly positions = this._explore.map_positions;
    /** Observable for the active map */
    public readonly features = this._explore.map_features;
    /** Observable for the active map */
    public readonly actions = this._explore.map_actions;
    /** Observable for the labels map */
    public readonly labels = this._explore.map_labels;
    /** Observable for the active map */
    public readonly options = this._explore.options;

    public reset_delay = 180;

    constructor(
        private _explore: ExploreStateService,
        private _parking: ExploreParkingService,
        private _route: ActivatedRoute,
        private _org: OrganisationService,
        private _dialog: MatDialog,
        private _router: Router,
        private _spaces: SpacesService,
        private _settings: SettingsService,
    ) {
        super();
    }

    public async ngOnInit() {
        if (
            location.hash.includes('public=true') ||
            location.search.includes('public=true')
        ) {
            this._explore.setOptions({ is_public: true });
        }
        await firstTruthyValueFrom(this._spaces.initialised);
        this.reset_delay =
            this._settings.get('app.inactivity_timeout_secs') || 180;
        this.resetKiosk(false);
        VirtualKeyboardComponent.enabled =
            localStorage.getItem('OSK.enabled') === 'true';
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe(async (params) => {
                if (params.has('level')) {
                    log('Explore', 'Level changed to:', params.get('level'));
                    this._explore.setLevel(params.get('level'));
                    const level = this._org.levelWithID([params.get('level')]);
                    if (!level) return;
                    const bld = this._org.buildings.find(
                        (_) => level.parent_id === _.id,
                    );
                    if (!bld) return;
                    this._org.building = bld;
                }
                this._explore.setFeatures('_located', []);
            }),
        );
    }

    public updateZoom(zoom: number) {
        this._explore.setPositions(zoom, this._explore.positions.center);
    }

    public updateCenter(center: Point) {
        this._explore.setPositions(this._explore.positions.zoom, center);
    }

    public resetKiosk(navigate = true) {
        if ((document.activeElement as any)?.blur)
            (document.activeElement as any)?.blur();
        const level = localStorage.getItem('KIOSK.level');
        this._explore.setPositions(1, { x: 0.5, y: 0.5 });
        if (level) this._explore.setLevel(level);
        this._dialog.closeAll();
        if (navigate) this._router.navigate(['/']);
    }
}
