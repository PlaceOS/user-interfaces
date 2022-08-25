import { getItemWithKeys } from 'libs/common/src/lib/general';

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
    /** Capacity for the Organisation */
    public readonly capacity: number;
    /** PlaceOS bindings for applications */
    public readonly bindings: Record<string, string>;
    /** Map of custom settings for the building */
    private _settings: Record<string, any>;

    constructor(raw_data: Partial<OrganisationComplete> = {}) {
        this.id = raw_data.id || '';
        this.name = raw_data.name || '';
        this.description = raw_data.description || '';
        this.tags = raw_data.tags || [];
        this.count = raw_data.count || 0;
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
