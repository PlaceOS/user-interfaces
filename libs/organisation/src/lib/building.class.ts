import { BaseDataClass, HashMap, Identity, RoomConfiguration } from '@user-interfaces/common';
import { BookingRule } from '@user-interfaces/events';

import { BuildingLevel } from './level.class';

export interface IBuildingRoleUser {
    name: string;
    email: string;
    phone: string;
}

export interface LockerMap {
    [zone: string]: {
        [area: string]: {
            [type: string]: (string | boolean)[][];
        };
    };
}

export interface ICoordinates {
    longitude: number;
    latitude: number;
}

export interface LevelFeature {
    id: string;
    level_id: string;
    name: string;
}

export interface BookingRuleDetails {
    /** List of booking rules details for the building */
    readonly rules: readonly string[];
    /** Custom booking rules for the map */
    readonly map_rules?: readonly string[];
    /** Contact email address for the building */
    readonly contact?: string;
    /** Information string to display before the rule listings */
    readonly info?: string;
}

export class Building extends BaseDataClass {
    /** Name to display */
    public readonly display_name: string;
    /** Engine Zone ID for the building */
    public readonly zone_id: string;
    /** Organisation Code for the building */
    public readonly code: string;
    /** Geographical address of the building */
    public readonly address: string;
    /** IANA timezone string for building */
    public readonly timezone: string;
    /** ID of space that temporarily holds new meetings */
    public readonly holding_bay: string;
    /** ID of the space for assigning new visitor bookings to */
    public readonly visitor_space: string;
    /** Details about the booking rules for the building */
    public readonly booking_details: BookingRuleDetails;
    /** Details about the booking rules for the building */
    public readonly booking_rules: HashMap<readonly BookingRule[]>;
    /** Number of hour before a booking catering is restricted */
    public readonly catering_restricted_from: number;
    /** Currency code for the country assoicated with the building */
    public readonly currency: string;
    /** List of available extras for the building */
    public readonly extras: readonly Identity[];
    /** List of available extra equipment for loan at the building */
    public readonly loan_items: readonly Identity[];
    /** List of available levels for the building */
    public readonly levels: readonly BuildingLevel[];
    /** List of zones associated with the building */
    public readonly zones: readonly string[];
    /** Searchable map features */
    public readonly searchables: readonly LevelFeature[];
    /** List of available room configurations for the building */
    public readonly room_configurations: readonly RoomConfiguration[];
    /** Start and end hours catering can be delivered */
    public readonly catering_hours: { start: number, end: number };

    public readonly orientations: HashMap<number>;
    public readonly attributes: readonly Identity[];
    /** Map of roles and list of the associated users */
    private _roles: HashMap<IBuildingRoleUser[]>;
    /** Map of the locker ID arrays */
    private _lockers: LockerMap;
    /** Map of important system ids for the building */
    private _systems: HashMap<string>;
    /** Map of important phone numbers for the building */
    private _phone_numbers: HashMap<string>;
    /** Globe coordiates for the build */
    private _location: ICoordinates;


    constructor(raw_data: HashMap = {}) {
        super(raw_data);
        const settings = raw_data.settings || {};
        this.display_name = raw_data.display_name;
        const disc_info = settings.discovery_info || settings;
        this.zone_id = raw_data.zone_id || raw_data.zone;
        this.extras = (raw_data.extras || disc_info.extras || []).map((i) => ({
            id: i.extra_id || i.id,
            name: i.extra_name || i.name,
        }));
        this.loan_items = (raw_data.loan_items || disc_info.loan_items || []).map((i) => ({
            id: i.extra_id || i.id,
            name: i.extra_name || i.name,
        }));
        this.levels = (raw_data.levels || disc_info.levels || []).map(
            (i) => new BuildingLevel({ ...i, building_id: this.id })
        );
        this._roles = raw_data.roles || disc_info.roles || {};
        this._lockers =
            raw_data.lockers || raw_data.locker_structure || disc_info.locker_structure || {};
        this._systems = raw_data.systems || disc_info.systems || {};
        this._phone_numbers = raw_data.phone_numbers || disc_info.phone_numbers || {};
        this._location = raw_data.location ||
            disc_info.location || { longitude: null, latitude: null };
        this.room_configurations =
            raw_data.room_configurations || disc_info.room_configurations || [];
        this.attributes =
            raw_data.attributes || disc_info.attributes || [];
        const searchables = [];
        if (raw_data.neighbourhoods) {
            for (const lvl in raw_data.neighbourhoods) {
                if (raw_data.neighbourhoods.hasOwnProperty(lvl)) {
                    const lvl_features = raw_data.neighbourhoods[lvl] || {};
                    for (const feature in lvl_features) {
                        if (lvl_features.hasOwnProperty(feature)) {
                            searchables.push({
                                id: lvl_features[feature],
                                name: feature,
                                level_id: lvl,
                            });
                        }
                    }
                }
            }
        }
        this.searchables = searchables;
        this.timezone = raw_data.timezone || disc_info.timezone || settings.timezone || '';
        this.catering_hours = raw_data.catering_hours || disc_info.catering_hours || settings.catering_hours || { start: 7, end: 20 };
        this.visitor_space = raw_data.visitor_space || disc_info.visitor_space || settings.visitor_space || '';
        this.holding_bay = raw_data.holding_bay || disc_info.holding_bay || settings.holding_bay || '';
        this.code = raw_data.code || disc_info.code || settings.code || '';
        this.address = raw_data.address || disc_info.address || settings.address || '';
        this.orientations = raw_data.orientations || disc_info.orientations || settings.orientations || {};
        this.booking_details =
            raw_data.booking_details ||
            disc_info.booking_details ||
            settings.booking_details ||
            null;
        this.booking_rules =
            raw_data.booking_rules || disc_info.booking_rules || settings.booking_rules || {};
        this.catering_restricted_from =
            raw_data.catering_restricted_from ||
            disc_info.catering_restricted_from ||
            settings.catering_restricted_from ||
            -1440;
        this.currency = raw_data.currency || disc_info.currency || settings.currency || 'USD';
    }

    /**
     * Get list of users with the associated role
     * @param name Role to find users for
     */
    public role(name: string): IBuildingRoleUser[] {
        return [...(this._roles[name] || [])];
    }
    /**
     * Get list of the names of available user role lists
     */
    public get role_names(): string[] {
        return Object.keys(this._roles).filter((i) => this._roles.hasOwnProperty(i));
    }
    /** Map of the locker ID arrays */
    public get lockers(): LockerMap {
        return { ...(this._lockers || {}) };
    }
    /** Map of important system ids for the building */
    public get systems(): HashMap<string> {
        return { ...(this._systems || {}) };
    }
    /** Map of important phone numbers for the building */
    public get phone_numbers(): HashMap<string> {
        return { ...(this._phone_numbers || {}) };
    }

    /**
     * Get search map feature for the given level ID
     * @param level_id ID of level to grab features for
     */
    public featuresForLevel(level_id: string): LevelFeature[] {
        return (this.searchables || []).filter((i) => i.level_id === level_id);
    }
}
