
import { BaseDataClass } from '../common/base-api.class';

import { HashMap } from 'src/app/common/types';
import { getItemWithKeys } from 'src/app/common/general';

export class Organisation extends BaseDataClass {
    /** Description for the Organisation */
    public readonly description: string;
    /** Tags for the Organisation */
    public readonly tags: string;
    /** Count for the Organisation */
    public readonly count: number;
    /** Capacity for the Organisation */
    public readonly capacity: number;
    /** Parent ID for the Organisation */
    public readonly _parent_id: string;
    /** Map of custom settings for the building */
    private _settings: HashMap;

    constructor(raw_data: HashMap = {}) {
        super(raw_data);
        this.description = raw_data.description;
        this.tags = raw_data.tags;
        this.count = raw_data.count;
        this.capacity = raw_data.capacity;
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
