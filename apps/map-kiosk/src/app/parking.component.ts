import {
    Component,
    computed,
    effect,
    inject,
    OnInit,
    signal,
    untracked,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import {
    log,
    OrganisationService,
    Point,
    SettingsService,
} from '@placeos/common';
import { SpacesService } from '@placeos/events';
import { ExploreParkingService, ExploreStateService } from '@placeos/explore';

import {
    IconComponent,
    InteractiveMapComponent,
    VirtualKeyboardComponent,
} from '@placeos/components';
@Component({
    selector: 'parking-kiosk-view',
    template: `
        <div class="bg-base-200 absolute inset-0 flex flex-col overflow-hidden">
            <header
                class="bg-base-100 flex w-full items-center justify-center space-x-2 p-4 text-2xl"
            >
                <div class="border-info text-info rounded-sm border-2">
                    <icon>local_parking</icon>
                </div>
                <div class="pl-2">Parking Available</div>
                <icon class="text-info text-2xl">arrow_forward</icon>
            </header>
            <main
                class="border-base-300 pointer-events-none relative w-full flex-1 border-y"
            >
                <interactive-map
                    [src]="url()"
                    [zoom]="positions()?.zoom"
                    [center]="positions()?.center"
                    (zoomChange)="updateZoom($event)"
                    (centerChange)="updateCenter($event)"
                    [styles]="styles()"
                    [features]="features()"
                    [actions]="actions()"
                    [labels]="labels()"
                ></interactive-map>
            </main>
            <footer
                class="bg-base-100 flex w-full flex-col items-center p-2 leading-tight"
            >
                <div class="text-3xl">Free Spaces: {{ counts().free }}</div>
                <div class="mb-2 opacity-30">
                    Total Capacity: {{ counts().total }} spaces
                </div>
                <div class="bg-base-300 h-4 w-[50vw] rounded-full">
                    <div
                        class="bg-success h-full rounded-full"
                        [style.width]="counts().percent + '%'"
                    ></div>
                </div>
            </footer>
        </div>
    `,
    styles: [``],
    providers: [ExploreStateService, ExploreParkingService],
    imports: [InteractiveMapComponent, IconComponent],
})
export class ParkingComponent implements OnInit {
    private _explore = inject(ExploreStateService);
    private _parking = inject(ExploreParkingService);
    private _route = inject(ActivatedRoute);
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);
    private _router = inject(Router);
    private _spaces = inject(SpacesService);
    private _settings = inject(SettingsService);

    /** Signal of the current route query parameters */
    private readonly _query_params = toSignal(this._route.queryParamMap);
    /** Whether the view is ready to react to route query parameters */
    private readonly _ready = signal(false);

    private readonly _handle_query_params = effect(() => {
        if (!this._ready()) return;
        const params = this._query_params();
        if (!params) return;
        untracked(() => this.handleQueryParams(params));
    });

    /** Signal for the active map */
    public readonly url = this._explore.map_url;
    /** Signal for the active map */
    public readonly styles = this._explore.map_styles;
    /** Signal for the active map */
    public readonly positions = this._explore.map_positions;
    /** Signal for the active map */
    public readonly features = this._explore.map_features;
    /** Signal for the active map */
    public readonly actions = this._explore.map_actions;
    /** Signal for the labels map */
    public readonly labels = this._explore.map_labels;
    /** Signal for the active map */
    public readonly options = this._explore.options;
    /** Signal for the active parking spaces */
    public readonly active_spaces = this._parking.active_spaces;
    /** Signal for the available parking spaces */
    public readonly available_spaces = this._parking.available_spaces;

    public reset_delay = 180;

    public readonly counts = computed(() => {
        const spaces = this.active_spaces();
        const available = this.available_spaces();
        return {
            total: spaces.length,
            free: available.length,
            busy: spaces.length - available.length,
            percent: (available.length / spaces.length) * 100,
        };
    });

    public async ngOnInit() {
        if (
            location.hash.includes('public=true') ||
            location.search.includes('public=true')
        ) {
            this._explore.setOptions({ is_public: true });
        }
        while (!this._spaces.initialised()) {
            await new Promise((resolve) => setTimeout(resolve, 100));
        }
        this.reset_delay =
            this._settings.get('app.inactivity_timeout_secs') || 180;
        this.resetKiosk(false);
        VirtualKeyboardComponent.enabled =
            localStorage.getItem('OSK.enabled') === 'true';
        this._ready.set(true);
    }

    /** React to changes in the route query parameters */
    private handleQueryParams(params: ParamMap) {
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
