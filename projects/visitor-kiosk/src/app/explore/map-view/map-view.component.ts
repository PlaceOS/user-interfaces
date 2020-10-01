import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {
    IMapPoint,
    IMapFeature,
    IStyleMappings,
    MapPinComponent,
    MapRangeComponent,
} from '@acaprojects/ngx-interactive-map';
import { MatDialog } from '@angular/material/dialog';

import { MapStatus, MapListener } from '../status-managers/status.interfaces';
import { FiltersComponent } from '../filters/filters.component';
import { BaseClass } from 'src/app/common/base.class';
import { HashMap, Identity } from 'src/app/common/types';
import { User } from 'src/app/users/user.class';
import { OrganisationService } from 'src/app/organisation/organisation.service';
import { first } from 'rxjs/operators';
import { SettingsService } from 'src/app/common/settings.service';
import { BuildingLevel } from 'src/app/organisation/level.class';
import { notifyError, notifyWarn } from 'src/app/common/notifications';
import { SpacesService } from 'src/app/spaces/spaces.service';
import { PeopleService } from 'src/app/users/people.service';

import * as dayjs from 'dayjs';

export enum MapOrientation {
    Landspace = 0,
    Portrait = 1,
    LandspaceReverse = 2,
    PortraitReverse = 3,
}

@Component({
    selector: 'explore-map-view',
    templateUrl: './map-view.component.html',
    styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent extends BaseClass implements OnInit {
    /** Type of data to show when searching */
    public type: 'space' | 'user' | 'feature' | 'desk' | 'any' | '';
    /** Zoom level of the map */
    public zoom: number;
    /** Center offset of the map */
    public center: IMapPoint;
    /** Mapping of elements to CSS styles */
    public style_map: IStyleMappings = {};
    /** List of listeners for the map */
    public listeners: MapListener[];
    /** List of features to render on the map */
    public features: IMapFeature[];
    /** ID of the active level to display on the map */
    public active_level: string;
    /** Mapping of status lists to types */
    public status_map: { spaces?: MapStatus[]; desks?: MapStatus[]; zones?: MapStatus[] } = {};
    /** Mapping of listener lists to types */
    public listener_map: {
        spaces?: MapListener[];
        desks?: MapListener[];
        zones?: MapListener[];
    } = {};
    /** Mapping of features lists to types */
    public feature_map: {
        spaces?: IMapFeature[];
        desks?: IMapFeature[];
        zones?: IMapFeature[];
    } = {};
    /** Message to display over the map */
    public message: string;
    /** Whether location data is loading */
    public loading: boolean;
    /** Feature on the map to focus */
    public focus: IMapFeature;
    /** List of active desk filters */
    public desk_filters: Identity[] = [];
    /** Last time the view was cleared */
    public clear_time: number;
    /** List of role users to search */
    public search_options: User[] = [];
    /** List of role users to search */
    public role_users: HashMap<User[]> = {};
    /** Type of user role to search */
    public user_role: 'fire' | 'aid' | '';
    /** Whether there was an error finding a user */
    public user_error: boolean;
    /** ID of the users current location */
    public located: string;
    /** List of desk features available for the active level */
    public available_desk_features: string[];

    public get time() {
        return dayjs().format('h:mm A');
    }

    /** URL of the active map */
    public get map_url(): string {
        const level: BuildingLevel =
            this._org.levelWithID([this.active_level]) || ({ map_id: '' } as any);
        if (localStorage) {
            const rotation = +localStorage.getItem('KIOSK.orientation');
            if (rotation) {
                switch (rotation) {
                    case MapOrientation.Portrait:
                        return level.map_id.replace('.svg', '_portrait.svg');
                    case MapOrientation.LandspaceReverse:
                        return level.map_id.replace('.svg', '_landscape_reverse.svg');
                    case MapOrientation.PortraitReverse:
                        return level.map_id.replace('.svg', '_portrait_reverse.svg');
                }
            }
        }
        return level.map_id || '';
    }

    public get search_placeholder() {
        switch (this.type) {
            case 'space':
                return 'Search for spaces...';
            case 'user':
                return this.user_role
                    ? `Search for ${this.role_display}...`
                    : 'Search for people...';
        }
        return '';
    }

    public get role_display() {
        switch (this.user_role) {
            case 'aid':
                return 'first aiders';
            case 'fire':
                return 'fire wardens';
        }
        return '';
    }

    constructor(
        private _org: OrganisationService,
        private _settings: SettingsService,
        private _spaces: SpacesService,
        private _people: PeopleService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _dialog: MatDialog
    ) {
        super();
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        if (!this.active_level) {
            const bld = this._org.building;
            if (bld && bld.levels.length) {
                this.active_level = bld.levels[0].id;
            }
        }
        this.located = localStorage.getItem('KIOSK.location');
        this.subscription(
            'reset',
            this._settings.listen('KIOSK.reset').subscribe(() => this.clearView())
        );
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((params) => {
                if (params.has('search_type')) {
                    if ((params.get('search_type') as any) !== this.type) {
                        this.timeout('clear', () => this.clearView(), 50);
                    }
                    this.type = params.get('search_type') as any;
                    if (params.get('search_type') === 'none') {
                        this.type = '';
                    }
                }
            })
        );
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('space')) {
                    this.loadSpaceLocation(params.get('space'));
                }
                if (params.has('bootstrap') && params.has('level')) {
                    this.bootstrap(
                        params.get('level'),
                        +params.get('orientation'),
                        params.get('location')
                    );
                }
                if (params.has('user')) {
                    this.user_error = true;
                    this.loadUserLocation(params.get('user')).then(
                        (user) => {
                            this.loading = false;
                            this.message = this.focus
                                ? this.location(this.active_level)
                                : `Unable to locate ${user ? user.name : params.get('user')}`;
                            this.user_error = !this.focus;
                            this.processFeatures();
                        },
                        (err) => {
                            this.loading = false;
                            this.message = `Unable to locate user`;
                            this.user_error = true;
                            if (err && err.status !== 404) {
                                notifyError(`Error loading user location. ${err.message}`);
                            }
                        }
                    );
                }
                this.processStatuses();
                this.processFeatures();
            })
        );
        this.loadRoleUsers();
    }

    /**
     * Process changes to statuses
     */
    public processStatuses() {
        const styles: IStyleMappings = {};
        (this.status_map.spaces || []).forEach((space) => (styles[`#${space.id}`] = space.styles));
        (this.status_map.desks || []).forEach((desk) => (styles[`#${desk.id}`] = desk.styles));
        (this.status_map.zones || []).forEach((zone) => (styles[`#${zone.id}`] = zone.styles));
        this.style_map = styles;
    }

    /**
     * Process changes to statuses
     */
    public processListeners() {
        let listeners: MapListener[] = [];
        listeners = listeners.concat(this.listener_map.spaces || []);
        listeners = listeners.concat(this.listener_map.desks || []);
        listeners = listeners.concat(this.listener_map.zones || []);
        this.listeners = listeners;
    }

    /**
     * Process changes to statuses
     */
    public processFeatures() {
        let features: IMapFeature[] = [];
        if (this.focus && this.focus.content) {
            features.push(this.focus);
        }
        features = features.concat(this.feature_map.spaces || []);
        features = features.concat(this.feature_map.desks || []);
        features = features.concat(this.feature_map.zones || []);
        if (this.located) {
            features.push({
                id: this.located,
                content: MapPinComponent,
                data: {
                    text: 'You are here',
                },
            });
        }
        this.features = features;
    }

    public setRoleUsers(role: 'fire' | 'aid') {
        if (this.user_role === role) {
            this.user_role = null;
            this.search_options = [];
        } else {
            this.user_role = role;
            this.search_options = this.role_users[role] || [];
        }
    }

    /**
     * Open bottom sheet for selecting desk filters
     */
    public openDeskFilters() {
        const filters = [];
        const level = this._org.levelWithID([this.active_level]);
        const building = this._org.buildings.find((bld) => bld.id === level.parent_id);
        const feature_list = this.available_desk_features || building.attributes || [];
        for (const feature of feature_list) {
            if (!filters.find((i) => i.id === feature) && feature) {
                filters.push({
                    id: feature,
                    name: feature,
                    active: !!this.desk_filters.find((filter) => filter.id === feature),
                });
            }
        }
        if (filters.length <= 0) {
            notifyWarn(`No desk filters for ${building.name}`);
            return;
        }
        const ref = this._dialog.open(FiltersComponent);
        ref.componentInstance.filters = filters;
        ref.componentInstance.name = 'Desk';
        ref.afterClosed().subscribe(() => {
            this.desk_filters = ref.componentInstance.filters.filter((i) => i.active);
        });
    }

    /**
     * Load and store location details for the space
     * @param space_id Engine system ID of the space to locate
     */
    private loadSpaceLocation(space_id: string) {
        const space = this._spaces.space_list.filter((space) => space.id === space_id)[0];
        if (space) {
            if (!space.level) {
                return this.timeout('locate_space', () => this.loadSpaceLocation(space_id));
            }
            this.message = `Loading location of ${space.name}`;
            this.loading = true;
            this.focus = {
                id: space.map_id,
                content: MapPinComponent,
                zoom: 100,
                data: {
                    text: space.name,
                },
            };
            this.loading = false;
            this.message = '';
        }
    }

    public location(level_id: string): string {
        const level = this._org.levelWithID([level_id]) || {
            name: 'Level X',
            parent_id: '',
        };
        const building = this._org.buildings.find((bld) => bld.id === level.parent_id) || {
            name: 'Building X',
        };
        return `${building.name}, ${level.name}`;
    }

    /**
     * Load and store the location for the user
     * @param user_email Email address of the selected user
     */
    private async loadUserLocation(user_email: string) {
        this.focus = null;
        this.loading = true;
        this.message = `Loading user details...`;
        const name = user_email.split('.')[0];
        const user = (await this._people.query({ q: name })).find(
            (a_user) => a_user.email === user_email
        );
        if (!user) {
            return user;
        }
        this.message = `Loading location for ${user.name}...`;
        // const location = await user.locate();
        // if (!location || !location.level) {
        //     return user;
        // }
        // this.active_level = location.level.id;
        // if (location.fixed) {
        //     this.focus = {
        //         id: location.id,
        //         content: MapPinComponent,
        //         zoom: 100,
        //         data: {
        //             text: `${user.name} is here`
        //         }
        //     };
        // } else {
        //     this.focus = {
        //         coordinates: {
        //             x: location.x,
        //             y: location.y
        //         },
        //         content: MapRangeComponent,
        //         zoom: 100,
        //         data: {
        //             text: `${user.name} is here`,
        //             diameter: 1000 || location.confidence || 5
        //         }
        //     };
        // }
        // this.loading = false;
        // this.message = '';
        return user;
    }

    private async loadRoleUsers() {
        const building_id = localStorage.getItem('KIOSK.building');
        const building = this._org.buildings.find((bld) => bld.id === building_id);
        if (building) {
            // this.role_users.aid = await this._service.Groups.show('FirstAid', {
            //     location: building.code
            // });
            // this.role_users.fire = await this._service.Groups.show('FireWarden', {
            //     location: building.code
            // });
        }
    }

    private clearView() {
        this.desk_filters = [];
        this.status_map.desks = [];
        this.status_map.zones = [];
        this.focus = null;
        this.clear_time = new Date().getTime();
        this.loading = false;
        this.user_role = null;
        this.message = '';
        this.user_error = false;
        this.processStatuses();
        this.processFeatures();
    }

    /**
     * Bootstrap application from URL params
     * @param level_id Level zone ID to bootstrap
     * @param orientation Map orientation to bootstrap
     */
    private bootstrap(level_id: string, orientation: number, location: string) {
        if (localStorage) {
            const level = this._org.levelWithID([level_id]);
            if (!level) {
                return;
            }
            const building = this._org.buildings.find((bld) => bld.id === level.parent_id);
            if (!building) {
                return;
            }
            localStorage.setItem('KIOSK.level', level_id);
            localStorage.setItem('KIOSK.building', building.id);
            if (orientation) {
                localStorage.setItem('KIOSK.orientation', `${orientation}`);
            }
            if (location) {
                localStorage.setItem('KIOSK.location', `${location}`);
                this.located = location;
            }
            this._router.navigate([], {
                relativeTo: this._route,
                queryParams: { bootstrap: null },
                queryParamsHandling: 'merge',
            });
        }
    }
}
