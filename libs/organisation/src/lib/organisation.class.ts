import { BaseDataClass, getItemWithKeys, HashMap } from '@user-interfaces/common';

export class Organisation extends BaseDataClass {
    /** Description for the Organisation */
    public readonly description: string;
    /** Tags for the Organisation */
    public readonly tags: string[];
    /** Count for the Organisation */
    public readonly count: number;
    /** Capacity for the Organisation */
    public readonly capacity: number;
    /** Parent ID for the Organisation */
    public readonly _parent_id: string;
    /** PlaceOS bindings for applications */
    public readonly bindings: HashMap<string>;
    /** Map of custom settings for the building */
    private _settings: HashMap;

    constructor(raw_data: Partial<Organisation> = {}) {
        super(raw_data);
        this.description = raw_data.description || '';
        this.tags = raw_data.tags || [];
        this.count = raw_data.count || 0;
        this.capacity = raw_data.capacity || 0;
        this.bindings = raw_data.bindings || {};
        this._settings = (raw_data as any).settings || {};
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
