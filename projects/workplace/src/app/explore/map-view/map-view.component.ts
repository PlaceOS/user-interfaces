import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {
    IMapPoint,
    IMapFeature,
    IStyleMappings,
    MapPinComponent,
    MapRangeComponent,
} from '@acaprojects/ngx-interactive-map';
import { first } from 'rxjs/operators';

import { BaseClass } from 'src/app/common/base.class';
import { MapStatus, MapListener } from '../status-managers/status.interfaces';
import { StaffService } from 'src/app/users/staff.service';
import { OrganisationService } from 'src/app/organisation/organisation.service';
import { SpacesService } from 'src/app/spaces/spaces.service';
import { Space } from 'src/app/spaces/space.class';
import {
    BookingModalComponent,
    BookingModalData,
} from '../overlays/booking-modal/booking-modal.component';
import { SettingsService } from 'src/app/common/settings.service';

@Component({
    selector: 'explore-map-view',
    templateUrl: './map-view.component.html',
    styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent extends BaseClass implements OnInit {
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
    /** Whether to show menu */
    public show_menu: boolean;

    public show_zones = false;

    private search_result_zone_id = null;

    /** URL of the active map */
    public get map_url(): string {
        const level = this._org.levelWithID([this.active_level]) || { map_id: '' };
        return level.map_id || '';
    }

    constructor(
        private _users: StaffService,
        private _spaces: SpacesService,
        private _org: OrganisationService,
        private _route: ActivatedRoute,
        private _dialog: MatDialog,
        private _settings: SettingsService
    ) {
        super();
    }

    public ngOnInit(): void {
        this._settings.post('navTitle', 'Spaces');
        this._spaces.initialised.pipe(first((_) => _)).subscribe(() => {
            this.subscription(
                'route.query',
                this._route.queryParamMap.subscribe((params) => {
                    if (params.has('zone')) {
                        // this._service.Analytics.page('/explore/zone');
                        this.search_result_zone_id = params.get('zone');
                    } else if (this.search_result_zone_id) {
                        this.search_result_zone_id = null;
                    }
                    this.processStatuses();
                    if (params.has('space')) {
                        // this._service.Analytics.page('/explore/space');
                        this.loadSpaceLocation(params.get('space'), params.has('form'));
                    } else if (params.has('user')) {
                        this.loadUserLocation(params.get('user')).then(
                            (user) => {
                                // this._service.Analytics.page('/explore/user');
                                this.loading = false;
                                if (this.focus) {
                                    this.message = '';
                                    // this._service.Analytics.event(
                                    //     'Locate',
                                    //     `located_user_${user.name}`
                                    // );
                                } else {
                                    this.message = `Unable to locate ${user.name}`;
                                    // this._service.Analytics.event(
                                    //     'Locate',
                                    //     `unable_to_locate_user_${user.name}`
                                    // );
                                }
                            },
                            (err) => {
                                console.log('Error:', err);
                                this.loading = false;
                                this.message = `Unable to locate user`;
                                if (err && err.status !== 404) {
                                    // this._service.notifyError(
                                    //     `Error loading user location. ${err.message}`
                                    // );
                                }
                                // this._service.Analytics.event(
                                //     'Locate',
                                //     `locate_user_error_${err.status}`
                                // );
                            }
                        );
                    } else {
                        this.focus = null;
                        this.processFeatures();
                    }
                })
            );
        });
    }

    /**
     * Process changes to statuses
     */
    public processStatuses() {
        const styles: IStyleMappings = {};
        (this.status_map.spaces || []).forEach((space) => (styles[`#${space.id}`] = space.styles));
        (this.status_map.desks || []).forEach((desk) => (styles[`#${desk.id}`] = desk.styles));
        if (this.show_zones) {
            (this.status_map.zones || []).forEach((zone) => (styles[`#${zone.id}`] = zone.styles));
            styles[`#zones`] = { display: 'block' };
            styles[`#Zones`] = { display: 'block' };
        } else if (!!this.search_result_zone_id) {
            (this.status_map.zones || []).forEach(
                (zone) =>
                    (styles[`#${zone.id}`] =
                        zone.id === this.search_result_zone_id
                            ? { ...zone.styles, display: 'block' }
                            : { display: 'none' })
            );
            styles[`#zones`] = { display: 'block' };
            styles[`#Zones`] = { display: 'block' };
        } else {
            styles[`#zones`] = { display: 'none' };
            styles[`#Zones`] = { display: 'none' };
        }
        this.style_map = styles;
    }

    /**
     * Process changes to statuses
     */
    public processListeners() {
        this.timeout(
            'processListeners',
            () => {
                let listeners: MapListener[] = [];
                listeners = listeners.concat(this.listener_map.spaces || []);
                listeners = listeners.concat(this.listener_map.desks || []);
                listeners = listeners.concat(this.listener_map.zones || []);
                this.listeners = listeners;
            },
            1000
        );
    }

    /**
     * Process changes to features
     */
    public processFeatures() {
        let features: IMapFeature[] = [];
        if (this.focus && this.focus.content) {
            features.push(this.focus);
        }
        features = features.concat(this.feature_map.spaces || []);
        features = features.concat(this.feature_map.desks || []);
        features = features.concat(this.feature_map.zones || []);
        this.features = features;
    }

    /**
     * Load and store location details for the space
     * @param space_id Engine system ID of the space to locate
     * @param open Whether to open booking modal
     */
    private loadSpaceLocation(space_id: string, open: boolean = false) {
        const space = this._spaces.find(space_id);
        if (space) {
            this.message = `Loading location of ${space.name}`;
            this.loading = true;
            this.active_level = space.level.id;
            this.focus = {
                id: space.map_id,
                coordinates: null,
                content: MapPinComponent,
                zoom: 100,
                data: {
                    text: space.display_name || space.name,
                },
            };
            this.loading = false;
            this.message = '';
            this.processFeatures();
            // this._service.Analytics.event('Explore', 'load_space_success');
            if (open) {
                this.bookSpace(space);
            }
        }
    }

    /**
     * Load and store the location for the user
     * @param user_email Email address of the selected user
     */
    private async loadUserLocation(user_email: string) {
        this.focus = null;
        this.loading = true;
        this.message = `Loading location for ${user_email}...`;
        const user = await this._users.locate(user_email);
        console.log('User:', user);
        if (user.location && Object.keys(user.location).length) {
            if (user.location.meeting || user.location.desk_id) {
                const location = user.location.meeting || user.location.desk_id;
                this.focus = {
                    content: MapPinComponent,
                    id: location.map_id,
                    data: {
                        text: `${user.name} is here`,
                    },
                };
            } else if (user.location.laptop || user.location.mobile) {
                const location = user.location.laptop || user.location.mobile;
                this.focus = {
                    content: MapRangeComponent,
                    coordinates: { x: location.x, y: location.y },
                    data: {
                        text: `${user.name} is here`,
                    },
                };
            }
        } else {
            throw { message: 'Unable to locate user' };
        }
        this.processFeatures();
        return user;
    }

    public showZonesChanged(show: boolean) {
        this.show_zones = show;
        this.processStatuses();
    }

    public bookSpace(space: Space) {
        this._dialog.open<BookingModalComponent, BookingModalData>(BookingModalComponent, {
            width: '32em',
            data: {
                space,
                date: null,
            },
        });
    }

    public onLevelChange() {
        this.zoom = 1;
        this.center = { x: 0.5, y: 0.5 };
    }
}
