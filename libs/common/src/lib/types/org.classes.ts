import { BookingRuleDetails } from '../booking-rules';
import { getItemWithKeys } from '../general';

///////////////////////////////////////////////////////////////
////////////////////   Organisation   /////////////////////////
///////////////////////////////////////////////////////////////

export interface OrganisationComplete extends Organisation {
    settings?: Record<string, any>;
}

export class Organisation {
    /** PlaceOS zone id of the building */
    public readonly id: string;
    /** Name of the building zone */
    public readonly name: string;
    /** Description for the Organisation */
    public readonly description: string;
    /** Tags for the Organisation */
    public readonly tags: string[];
    /** Count for the Organisation */
    public readonly count: number;
    /** Count for the Organisation */
    public readonly children_count: number;
    /** Capacity for the Organisation */
    public readonly capacity: number;
    /** PlaceOS bindings for applications */
    public readonly bindings: Record<string, string | Binding>;
    /** Map of custom settings for the building */
    private _settings: Record<string, any>;

    constructor(raw_data: Partial<OrganisationComplete> = {}) {
        this.id = raw_data.id || '';
        this.name = raw_data.name || '';
        this.description = raw_data.description || '';
        this.tags = raw_data.tags || [];
        this.count = raw_data.count || 0;
        this.children_count = raw_data.children_count || 0;
        this.capacity = raw_data.capacity || 0;
        this.bindings = raw_data.bindings || {};
        this._settings = raw_data.settings || {};
    }

    /**
     * Get a custom organisation setting
     * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
     */
    public setting(key: string): any {
        const keys = key.split('.');
        const value = getItemWithKeys(keys, this._settings);
        return value;
    }
}

///////////////////////////////////////////////////////////////
///////////////////   Building Level   ////////////////////////
///////////////////////////////////////////////////////////////

export class BuildingLevel {
    /** ID of the building level zone */
    public readonly id: string;
    /** ID of the building zone associated with the level */
    public readonly parent_id: string;
    /** Name of the level */
    public readonly name: string;
    /** Display name */
    public readonly display_name: string;
    /** Capacity for the level */
    public readonly capacity: number;
    /** Number or letter representing the level */
    public readonly code: string;
    /** Number or letter representing the level */
    public readonly number: string;
    /** URL of the map associated with the level */
    public readonly map_id: string;
    /** URL of the map associated with the level */
    public readonly tags: string[];
    /** Settings overrides associated with the level */
    public readonly settings: Record<string, any> = {};
    /** List of image URLs for the level */
    public readonly images: string[];
    public readonly location: string;
    /** List of points of interest for the level */
    public readonly locations: readonly { id: string; name: string }[];

    constructor(_data: Partial<BuildingLevel> = {}) {
        this.id = _data.id || '';
        this.parent_id = _data.parent_id || '';
        this.name = _data.name || '';
        this.display_name = _data.display_name || '';
        this.map_id = _data.map_id || '';
        this.capacity = _data.capacity || 0;
        this.location = _data.location || '';
        this.locations = _data.locations || [];
        this.tags = _data.tags || [];
        this.images = _data.images || [];
        this.code = _data.code || '';
        const parts = this.display_name.split(' ');
        this.number = (
            (parts.length >= 2
                ? parts[parts.length - 1]
                : this.display_name[0]
            )?.toUpperCase() || ''
        ).substring(0, 2);
    }
}

///////////////////////////////////////////////////////////////
//////////////////////   Building   ///////////////////////////
///////////////////////////////////////////////////////////////

interface Identity {
    id: string;
    name: string;
}

interface RoomConfiguration {
    id: string;
    name?: string;
    description?: string;
    capacity?: number;
}

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

export interface Binding {
    id: string;
    mod: string;
}

export interface BuildingComplete extends Building {
    settings: Record<string, any>;
    locker_structure: Record<string, any>;
    roles: Record<string, any>;
    zone: string;
    location: string;
    neighbourhoods: Record<string, any>;
}

export class Building {
    /** PlaceOS zone id of the building */
    public readonly id: string;
    /** PlaceOS zone id of the building */
    public readonly parent_id: string;
    /** Name of the building zone */
    public readonly name: string;
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
    public readonly catering_hours: { start: number; end: number };
    /** PlaceOS bindings for applications */
    public readonly bindings: Record<string, string | Binding>;
    /** List of image URLs for the building */
    public readonly images: string[];
    /** Identifier of building in relation to mapping */
    public readonly map_id: string;

    public readonly orientations: Record<string, number>;
    public readonly attributes: readonly Identity[];
    /** Globe coordiates for the build */
    public location: string;
    /** Map of roles and list of the associated users */
    private _roles: Record<string, IBuildingRoleUser[]>;
    /** Map of the locker ID arrays */
    private _lockers: LockerMap;
    /** Map of important system ids for the building */
    private _systems: Record<string, string>;
    /** Map of important phone numbers for the building */
    private _phone_numbers: Record<string, string>;

    constructor(raw_data: Partial<BuildingComplete> = {}) {
        this.id = raw_data.id || '';
        this.parent_id = raw_data.parent_id || '';
        this.name = raw_data.name || '';
        const settings = raw_data.settings || {};
        this.display_name = raw_data.display_name;
        this.images = this.images || [];
        const disc_info = settings.discovery_info || settings;
        this.zone_id = raw_data.zone_id || raw_data.zone;
        this.extras = (raw_data.extras || disc_info.extras || []).map((i) => ({
            id: i.extra_id || i.id,
            name: i.extra_name || i.name,
        }));
        this.loan_items = (
            raw_data.loan_items ||
            disc_info.loan_items ||
            []
        ).map((i) => ({
            id: i.extra_id || i.id,
            name: i.extra_name || i.name,
        }));
        this.levels = (raw_data.levels || disc_info.levels || []).map(
            (i) => new BuildingLevel({ ...i, building_id: this.id }),
        );
        this._roles = raw_data.roles || disc_info.roles || {};
        this._lockers =
            raw_data.lockers ||
            raw_data.locker_structure ||
            disc_info.locker_structure ||
            {};
        this._systems = raw_data.systems || disc_info.systems || {};
        this._phone_numbers =
            raw_data.phone_numbers || disc_info.phone_numbers || {};
        this.location = raw_data.location || disc_info.location || '0,0';
        this.room_configurations =
            raw_data.room_configurations || disc_info.room_configurations || [];
        this.attributes = raw_data.attributes || disc_info.attributes || [];
        const searchables = [];
        if (raw_data.neighbourhoods) {
            for (const lvl in raw_data.neighbourhoods) {
                if (lvl in raw_data.neighbourhoods) {
                    const lvl_features = raw_data.neighbourhoods[lvl] || {};
                    for (const feature in lvl_features) {
                        if (feature in lvl_features) {
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
        this.bindings = raw_data.bindings || {};
        this.searchables = searchables;
        this.map_id = raw_data.map_id || '';
        this.timezone =
            raw_data.timezone || disc_info.timezone || settings.timezone || '';
        this.catering_hours = raw_data.catering_hours ||
            disc_info.catering_hours ||
            settings.catering_hours || { start: 7, end: 20 };
        this.visitor_space =
            raw_data.visitor_space ||
            disc_info.visitor_space ||
            settings.visitor_space ||
            '';
        this.holding_bay =
            raw_data.holding_bay ||
            disc_info.holding_bay ||
            settings.holding_bay ||
            '';
        this.code = raw_data.code || disc_info.code || settings.code || '';
        this.address =
            raw_data.address || disc_info.address || settings.address || '';
        this.orientations =
            raw_data.orientations ||
            disc_info.orientations ||
            settings.orientations ||
            {};
        this.booking_details =
            raw_data.booking_details ||
            disc_info.booking_details ||
            settings.booking_details ||
            null;
        this.catering_restricted_from =
            raw_data.catering_restricted_from ||
            disc_info.catering_restricted_from ||
            settings.catering_restricted_from ||
            -1440;
        this.currency =
            raw_data.currency ||
            disc_info.currency ||
            settings.currency ||
            'USD';
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
        return Object.keys(this._roles).filter((i) => i in this._roles);
    }
    /** Map of the locker ID arrays */
    public get lockers(): LockerMap {
        return { ...(this._lockers || {}) };
    }
    /** Map of important system ids for the building */
    public get systems(): Record<string, string> {
        return { ...(this._systems || {}) };
    }
    /** Map of important phone numbers for the building */
    public get phone_numbers(): Record<string, string> {
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

///////////////////////////////////////////////////////////////
///////////////////////   Region   ////////////////////////////
///////////////////////////////////////////////////////////////

export class Region {
    /** PlaceOS zone id of the building */
    public readonly id: string;
    /** Name of the building zone */
    public readonly name: string;
    /** Name to display */
    public readonly display_name: string;
    /** IANA timezone string for building */
    public readonly timezone: string;
    /** List of image URLs for the building */
    public readonly images: string[];
    /** PlaceOS bindings for applications */
    public readonly bindings: Record<string, string>;
    /** Address of the region */
    public readonly address: string;

    constructor(_data: Partial<Region>) {
        this.id = _data.id || '';
        this.name = _data.name || '';
        this.display_name = _data.display_name || '';
        this.timezone = _data.timezone || '';
        this.images = _data.images || [];
        this.bindings = _data.bindings || {};
        this.address = _data.address || '';
    }
}
