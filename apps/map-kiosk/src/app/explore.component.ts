import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {
    ANIMATION_SHOW_CONTRACT_EXPAND,
    AsyncHandler,
    flatten,
    log,
    MapsPeopleService,
    notifyError,
    SettingsService,
    unique,
} from '@placeos/common';
import {
    MapPinComponent,
    MapRadiusComponent,
    VirtualKeyboardComponent,
} from '@placeos/components';
import {
    ExploreDesksService,
    ExploreParkingService,
    ExploreSpacesService,
    ExploreStateService,
    ExploreZonesService,
} from '@placeos/explore';
import { OrganisationService } from '@placeos/organisation';
import { SpacesService } from '@placeos/spaces';
import { Point } from '@placeos/svg-viewer';
import { getModule } from '@placeos/ts-client';
import { MapLocation, showStaff, User } from '@placeos/users';
import { startOfMinute } from 'date-fns';
import { SpacePipe } from 'libs/spaces/src/lib/space.pipe';
import { combineLatest } from 'rxjs';
import { first, map, take, tap } from 'rxjs/operators';

@Component({
    selector: '[app-explore]',
    template: `
        <div
            topbar
            class="relative flex items-center justify-between px-4 py-2 border-b border-base-300 bg-base-100 text-base-content"
        >
            <a matRipple routerLink="/" class="text-2xl rounded p-2">
                Place<span class="text-primary">OS</span>
            </a>
            <div
                class="absolute top-1/2 -translate-y-1/2 right-2 flex items-center"
            >
                <explore-search *ngIf="can_search"></explore-search>
                <button
                    icon
                    matRipple
                    customTooltip
                    [content]="accessibility_controls"
                    class="bg-base-200 flex sm:hidden"
                >
                    <app-icon>accessible</app-icon>
                </button>
                <ng-template #accessibility_controls>
                    <div class="bg-base-100 rounded p-2 w-[18rem]">
                        <accessibility-controls></accessibility-controls>
                    </div>
                </ng-template>
            </div>
        </div>
        <ng-container *ngIf="(levels | async)?.length || legend.length">
            <div
                options
                class="flex sm:hidden items-center bg-base-content text-base-100 p-2 space-x-2"
            >
                <ng-container *ngIf="(levels | async)?.length">
                    <button
                        btn
                        matRipple
                        class="clear text-base-100"
                        [matMenuTriggerFor]="levelMenu"
                    >
                        <div class="flex-1 text-left font-medium">Level</div>
                        <app-icon class="text-2xl"
                            >keyboard_arrow_down</app-icon
                        >
                    </button>
                    <mat-menu #levelMenu="matMenu">
                        <button
                            mat-menu-item
                            *ngFor="let lvl of levels | async"
                            (click)="setLevel(lvl)"
                        >
                            {{ lvl.display_name || lvl.name }}
                        </button>
                    </mat-menu>
                </ng-container>
                <ng-container *ngIf="legend.length">
                    <button
                        btn
                        matRipple
                        class="clear text-base-100"
                        [matMenuTriggerFor]="legendMenu"
                    >
                        <div class="flex-1 text-left font-medium">Legend</div>
                        <app-icon class="text-2xl"
                            >keyboard_arrow_down</app-icon
                        >
                    </button>
                    <mat-menu #legendMenu="matMenu">
                        <div
                            class="flex items-center py-2 px-4 rounded hover:bg-base-200 w-full space-x-4"
                            *ngFor="let value of legend"
                        >
                            <div
                                class="h-3 w-3 rounded-full"
                                [style.background-color]="value.color"
                            ></div>
                            <div class="text-left opacity-60">
                                {{ value.name }}
                            </div>
                        </div>
                    </mat-menu>
                </ng-container>
            </div>
        </ng-container>
        <div class="flex flex-1 h-1/2">
            <div
                sidebar
                class="w-[20rem] hidden sm:block bg-base-100 text-base-content border-r border-base-300 px-2 py-4"
            >
                <ng-container *ngIf="(levels | async)?.length">
                    <button
                        btn
                        matRipple
                        class="flex items clear w-full space-x-4 hover:bg-base-200"
                        (click)="show_levels = !show_levels"
                    >
                        <app-icon class="text-2xl">corporate_fare</app-icon>
                        <div class="flex-1 text-left font-medium">Level</div>
                        <app-icon class="text-2xl">{{
                            show_levels
                                ? 'keyboard_arrow_up'
                                : 'keyboard_arrow_down'
                        }}</app-icon>
                    </button>
                    <div class="px-8" [@show]="show_levels ? 'show' : 'hide'">
                        <div class="py-4 space-y-2">
                            <button
                                *ngFor="let lvl of levels | async"
                                btn
                                matRipple
                                class="clear hover:bg-base-200 hover:opacity-100 w-full"
                                [class.opacity-30]="
                                    lvl.id !== (level | async)?.id
                                "
                                (click)="setLevel(lvl)"
                            >
                                <div class="text-left w-full">
                                    {{ lvl.display_name || lvl.name }}
                                </div>
                            </button>
                        </div>
                    </div>
                    <hr class="w-[calc(100%-4rem)] mx-auto" />
                </ng-container>
                <ng-container *ngIf="legend.length">
                    <button
                        btn
                        matRipple
                        class="flex items clear w-full space-x-4 hover:bg-base-200"
                        (click)="show_legend = !show_legend"
                    >
                        <app-icon class="text-2xl">place</app-icon>
                        <div class="flex-1 text-left font-medium">Legend</div>
                        <app-icon class="text-2xl">{{
                            show_legend
                                ? 'keyboard_arrow_up'
                                : 'keyboard_arrow_down'
                        }}</app-icon>
                    </button>
                    <div class="px-8" [@show]="show_legend ? 'show' : 'hide'">
                        <div class="py-4 space-y-2">
                            <div
                                class="flex items-center py-2 px-4 rounded hover:bg-base-200 w-full space-x-4"
                                *ngFor="let value of legend"
                            >
                                <div
                                    class="h-3 w-3 rounded-full"
                                    [style.background-color]="value.color"
                                ></div>
                                <div class="text-left opacity-60">
                                    {{ value.name }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="w-[calc(100%-4rem)] mx-auto" />
                </ng-container>
                <button
                    btn
                    matRipple
                    class="flex items clear w-full space-x-4 hover:bg-base-200"
                    (click)="show_accessibility = !show_accessibility"
                >
                    <app-icon class="text-2xl">accessible</app-icon>
                    <div class="flex-1 text-left font-medium">
                        Accessibility
                    </div>
                    <app-icon class="text-2xl">{{
                        show_accessibility
                            ? 'keyboard_arrow_up'
                            : 'keyboard_arrow_down'
                    }}</app-icon>
                </button>
                <div
                    class="px-8"
                    [@show]="show_accessibility ? 'show' : 'hide'"
                >
                    <div class=" py-4 space-y-2">
                        <accessibility-controls></accessibility-controls>
                    </div>
                </div>
                <hr class="w-[calc(100%-4rem)] mx-auto" />
            </div>
            <div class="relative flex-1 h-full">
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
                    [options]="{ controls: true }"
                    [focus]="locate"
                ></interactive-map>
            </div>
        </div>
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
                background-color: var(--b2);
            }

            hr {
                margin-top: 0.5rem !important;
                margin-bottom: 0.5rem !important;
            }
        `,
    ],
    providers: [
        ExploreSpacesService,
        ExploreDesksService,
        ExploreZonesService,
        ExploreParkingService,
        SpacePipe,
    ],
    animations: [ANIMATION_SHOW_CONTRACT_EXPAND],
})
export class ExploreComponent extends AsyncHandler implements OnInit {
    /** Number of seconds after a user action to reset the kiosk state */
    public reset_delay = 180;
    public show_levels: boolean = true;
    public show_legend: boolean = false;
    public show_accessibility: boolean = false;
    public legend = [
        { id: 'free', name: 'Space Available', color: '#43a047' },
        { id: 'busy', name: 'Space In Use', color: '#e53935' },
        { id: 'pending', name: 'Space Pending', color: '#ffb300' },
        { id: 'not-bookable', name: 'Space Not-bookable', color: '#ccc' },
    ];
    public readonly levels = combineLatest([
        this._org.active_region,
        this._org.active_building,
    ]).pipe(
        map(([region, building]) => {
            return (
                (this._settings.get('app.use_region')
                    ? flatten(
                          this._org.buildings
                              .filter((bld) => region.id === bld.parent_id)
                              .map((bld) =>
                                  this._org.levelsForBuilding(bld).map((_) => ({
                                      ..._,
                                      display_name: `${bld.display_name} - ${_.display_name}`,
                                  }))
                              )
                      )
                    : this._org.levelsForBuilding(building)) || []
            );
        }),
        tap((l) => console.log('Levels:', l))
    );
    public readonly level = this._state.level;

    /** Application logo to display */
    public get logo() {
        return this._settings.get('theme') === 'dark'
            ? this._settings.get('app.logo_dark')
            : this._settings.get('app.logo_light');
    }

    public get time() {
        return startOfMinute(Date.now());
    }

    public get hide_zones() {
        return this._settings.get('app.hide_zones');
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

    public locate = '';

    @HostListener('window:mousedown') public onMouse = () =>
        this.timeout('reset', () => this.resetKiosk(), this.reset_delay * 1000);
    @HostListener('window:touchstart') public onTouch = () =>
        this.timeout('reset', () => this.resetKiosk(), this.reset_delay * 1000);

    public readonly setOptions = (o) => this._state.setOptions(o);
    public readonly setLevel = (lvl) => this._state.setLevel(lvl.id);

    public updateZoom(zoom: number) {
        this._state.setPositions(zoom, this._state.positions.center);
    }

    public updateCenter(center: Point) {
        this._state.setPositions(this._state.positions.zoom, center);
    }

    public async toggleZones(enabled: boolean) {
        const options = await this.options.pipe(take(1)).toPromise();
        const disable = !enabled
            ? unique([...(options.disable || []), 'zones', 'devices'])
            : options.disable.filter((_) => _ !== 'zones' && _ !== 'devices') ||
              [];
        this.setOptions({ disable });
    }

    public get can_search() {
        return !!this._settings.get('app.explore.search_enabled');
    }

    public readonly use_mapsindoors$ = this._maps.available$;

    constructor(
        private _state: ExploreStateService,
        private _s: ExploreSpacesService,
        private _desks: ExploreDesksService,
        private _zones: ExploreZonesService,
        private _parking: ExploreParkingService,
        private _settings: SettingsService,
        private _org: OrganisationService,
        private _spaces: SpacesService,
        private _dialog: MatDialog,
        private _route: ActivatedRoute,
        private _router: Router,
        private _space_pipe: SpacePipe,
        private _maps: MapsPeopleService
    ) {
        super();
    }

    public async ngOnInit() {
        if (
            location.hash.includes('public=true') ||
            location.search.includes('public=true')
        ) {
            this._state.setOptions({ is_public: true });
        }
        await this._spaces.initialised.pipe(first((_) => _)).toPromise();
        this._desks.setOptions({ custom: true });
        this.reset_delay =
            this._settings.get('app.inactivity_timeout_secs') || 180;
        this.resetKiosk(false);
        VirtualKeyboardComponent.enabled =
            localStorage.getItem('OSK.enabled') === 'true';
        this.subscription(
            'level',
            this._state.level.subscribe(() =>
                this.timeout('update_location', () => {
                    this._state.setFeatures('_located', []);
                })
            )
        );
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe(async (params) => {
                if (params.has('level')) {
                    log('Explore', 'Level changed to:', params.get('level'));
                    this._state.setLevel(params.get('level'));
                    const level = this._org.levelWithID([params.get('level')]);
                    if (!level) return;
                    const bld = this._org.buildings.find(
                        (_) => level.parent_id === _.id
                    );
                    if (!bld) return;
                    this._org.building = bld;
                }
                this._state.setFeatures('_located', []);
                if (params.has('space')) {
                    log('Explore', 'Focusing on space:', params.get('space'));
                    this.locateSpace(params.get('space'));
                } else if (params.has('user')) {
                    log('Explore', 'Focusing on user:', params.get('user'));
                    let user = this._settings.value('last_search');
                    if (!user || params.get('user') !== user.email) {
                        user = null;
                        user = await showStaff(params.get('user')).toPromise();
                    }
                    if (!user)
                        return notifyError(
                            `Unable to user details for ${params.get('user')}`
                        );
                    this.locateUser(
                        user instanceof Array ? user[0] : user
                    ).catch((_) => {
                        notifyError(`Unable to locate ${params.get('user')}`);
                        this._router.navigate([], {
                            relativeTo: this._route,
                            queryParams: {},
                        });
                    });
                } else if (params.has('feature')) {
                    log(
                        'Explore',
                        'Focusing on feature:',
                        params.get('feature')
                    );
                    this.timeout('update_location', () => {
                        this._state.setFeatures('_located', [
                            {
                                location: params.get('feature'),
                                content: MapPinComponent,
                                data: {},
                            },
                        ]);
                    });
                } else if (params.has('locate')) {
                    log(
                        'Explore',
                        'Focusing on location:',
                        params.get('locate')
                    );
                    this.locate = params.get('locate');
                    this.timeout('update_location', () => {
                        this._state.setFeatures('_located', [
                            {
                                location: params.get('locate'),
                                content: MapPinComponent,
                                data: {},
                            },
                        ]);
                    });
                } else {
                    this.timeout('update_location', () => {
                        this._state.setFeatures('_located', []);
                    });
                }
            })
        );
    }

    private async locateSpace(id: string) {
        const space = await this._space_pipe.transform(id);
        if (!space) return;
        this._state.setLevel(this._org.levelWithID(space.zones)?.id);
        const feature: any = {
            location: space.map_id,
            content: MapPinComponent,
            data: {
                message: `${space.display_name || space.name} is here`,
            },
        };
        this.timeout('update_location', () =>
            this._state.setFeatures('_located', [feature])
        );
    }

    private async locateUser(user: User) {
        let locate_details: any = this._org.binding('location_services');
        if (!locate_details) return;
        if (typeof locate_details === 'string') {
            locate_details = {
                system_id: locate_details,
                module: 'LocationServices',
            };
        }
        const mod = getModule(locate_details.system_id, locate_details.module);
        const locations: MapLocation[] = (
            await mod.execute('locate_user', [
                user.email,
                user.username || user.id,
            ])
        ).map((i) => new MapLocation(i));
        locations.sort(
            (a, b) =>
                locate_details.priority.indexOf(a.type) -
                locate_details.priority.indexOf(b.type)
        );
        if (!locations?.length) {
            throw 'No locations for the given user';
        }
        this._state.setLevel(this._org.levelWithID([locations[0]?.level])?.id);
        const pos: any = locations[0].position;
        const { coordinates_from } = locations[0];
        const feature: any = {
            location:
                locations[0].type === 'wireless'
                    ? {
                          x: coordinates_from?.includes('right')
                              ? 1 - pos.x
                              : pos.x,
                          y: coordinates_from?.includes('bottom')
                              ? 1 - pos.y
                              : pos.y,
                      }
                    : pos,
            content:
                locations[0].type === 'wireless'
                    ? MapRadiusComponent
                    : MapPinComponent,
            z_index: 99,
            data: {
                message: `${user.name} is here`,
                radius: locations[0].variance,
                last_seen: locations[0].last_seen,
            },
        };
        this.timeout('update_location', () => {
            this._state.setFeatures('_located', [feature]);
        });
    }

    public resetKiosk(navigate = true) {
        if ((document.activeElement as any)?.blur)
            (document.activeElement as any)?.blur();
        const level = localStorage.getItem('KIOSK.level');
        this._state.setPositions(1, { x: 0.5, y: 0.5 });
        if (level) this._state.setLevel(level);
        this._dialog.closeAll();
        if (navigate) this._router.navigate(['/']);
    }
}
